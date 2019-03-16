import requests
from utils import db, users
headers = {'content-type': 'application/json'}
base_url = 'https://hackathon-api.bdc.n360.io'

def get_purchases(username):
    if username not in users:
        return {"status": "User not found!"}

    user_id, make, model, user_name = users[username]
    get_car_info = "select lead.contact_id, inventory_make, car_year, inventory_model, inventory_trim, induction, "\
                            "engine_type, drive_train, transmission_gear, fuel, warranty_class, warranty_date, warranty_km, "\
                            "date_sold, car_id "\
                            "from car_inventory "\
                            "inner join lead_car_info on car_inventory.inventory_id=lead_car_info.car_inventory_id "\
                            "inner join lead on lead.lead_car_info_id=lead_car_info.lead_car_info_id "\
                            "where lead.lead_status='Sold' "\
                            "and car_inventory.date_sold is not null "\
                            f"and lead.contact_id={user_id} "\
                            f"and car_inventory.inventory_make='{make}' "\
                            f"and car_inventory.inventory_model='{model}';"

    result = db.engine.execute(get_car_info).first()
    if not result:
        return {"status": "No result found!"}

    get_extra_info = "select engine_desc, suspension_desc, brake_desc, fuel_town, fuel_highway, general_desc, air_tax, green_tax, car_lineup_ext_color.car_photo_url3 "\
                     "from car_lineup "\
                     "inner join car_lineup_trim on car_lineup_trim.car_id = car_lineup.car_id "\
                     "inner join car_lineup_ext_color on car_lineup_ext_color.car_id = car_lineup.car_id "\
                     f"where car_lineup.make = '{make}' "\
                     f"and car_lineup.model = '{model}' "\
                     "and engine_desc is not null "\
                     "and suspension_desc is not null "\
                     "and general_desc is not null;"

    result_extra = db.engine.execute(get_extra_info).first()
    if not result:
        return {"status": "No cars found..."}

    user_data = {"user_id": result[0],
                 "user_name": user_name,
                 "inventory_make": result[1],
                 "car_year": result[2],
                 "inventory_model": result[3],
                 "inventory_trim": result[4],
                 "induction": result[5],
                 "engine_type": result[6],
                 "drive_train": result[7],
                 "transmission_gear": result[8],
                 "fuel": result[9],
                 "warranty_class": result[10],
                 "warranty_date": result[11],
                 "warranty_km": result[12],
                 "date_sold": result[13],
                 "car_id": result[14],
                 "engine_desc": result_extra[0],
                 "suspension_desc": result_extra[1],
                 "brake_desc": result_extra[2],
                 "fuel_town": result_extra[3],
                 "fuel_highway": result_extra[4],
                 "general_desc": result_extra[5],
                 "air_tax": result_extra[6],
                 "green_tax": result_extra[7],
                 "car_photo": result_extra[8],
                }
    return user_data
