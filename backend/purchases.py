import requests
from utils import db
headers = {'content-type': 'application/json'}
base_url = 'https://hackathon-api.bdc.n360.io'

def get_purchases(user_id):
    hardcoded_user = '321483'
    get_car_info = "select lead.contact_id, inventory_make, car_year, inventory_model, inventory_trim, induction, "\
                            "engine_type, drive_train, transmission_gear, fuel, date_sold "\
                            "from car_inventory "\
                            "inner join lead_car_info on car_inventory.inventory_id=lead_car_info.car_inventory_id "\
                            "inner join lead on lead.lead_car_info_id=lead_car_info.lead_car_info_id "\
                            "where lead.lead_status='Sold' "\
                            "and car_inventory.date_sold is not null "\
                            f"and lead.contact_id={hardcoded_user};"
    result = db.engine.execute(get_car_info).first()
    user_data = {"user_id": result[0],
                 "inventory_make": result[1],
                 "car_year": result[2],
                 "inventory_model": result[3],
                 "inventory_trim": result[4],
                 "induction": result[5],
                 "engine_type": result[6],
                 "drive_train": result[7],
                 "transmission_gear": result[8],
                 "fuel": result[9],
                 "date_sold": result[10]
                }  
    return user_data
