import requests
from utils import db, users
headers = {'content-type': 'application/json'}
base_url = 'https://hackathon-api.bdc.n360.io'

def get_purchases(username):
    user_id, user_name = users[username]
    get_car_info = "select lead.contact_id, inventory_make, car_year, inventory_model, inventory_trim, induction, "\
                            "engine_type, drive_train, transmission_gear, fuel, warranty_class, warranty_date, warranty_km, "\
                            "date_sold, car_id "\
                            "from car_inventory "\
                            "inner join lead_car_info on car_inventory.inventory_id=lead_car_info.car_inventory_id "\
                            "inner join lead on lead.lead_car_info_id=lead_car_info.lead_car_info_id "\
                            "where lead.lead_status='Sold' "\
                            "and car_inventory.date_sold is not null "\
                            f"and lead.contact_id={user_id};"

    result = db.engine.execute(get_car_info).first()
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
                 "warrany_class": result[10],
                 "warranty_date": result[11],
                 "warranty_km": result[12],
                 "date_sold": result[13],
                 "car_id": result[14]
                }  
    return user_data

def get_extra_car_data(car_data):
    make, model = car_data.split('-')
    get_extra_info = "select engine_desc, suspension_desc, brake_desc, fuel_town, fuel_highway, general_desc, air_tax, green_tax "\
                     "from car_lineup "\
                     "inner join car_lineup_trim on car_lineup_trim.car_id = car_lineup.car_id "\
                     f"where car_lineup.make = '{make}' "\
                     f"and car_lineup.model = '{model}' "\
                     "and engine_desc is not null "\
                     "and suspension_desc is not null "\
                     "and general_desc is not null;"
    result = db.engine.execute(get_extra_info).first()
    user_data = {
        "engine_desc": result[0],
        "suspension_desc": result[1],
        "brake_desc": result[2],
        "fuel_town": result[3],
        "fuel_highway": result[4],
        "general_desc": result[5],
        "air_tax": result[6],
        "green_tax": result[7]
    }
    return user_data

