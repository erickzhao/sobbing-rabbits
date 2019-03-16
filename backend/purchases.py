import requests
from utils import db
headers = {'content-type': 'application/json'}
base_url = 'https://hackathon-api.bdc.n360.io'

def get_purchases(user_id):
    hardcoded_user = '321483'
    hardcoded_lead_car_info_id = '2470119'
    hardcoded_car_info_id = '5730315'
    get_car_info = "select lead.contact_id, inventory_make, car_year, inventory_model, inventory_trim, induction, "\
                            "engine_type, drive_train, transmission_gear, fuel, severely_damaged_vehicle, date_sold "\
                            "from car_inventory "\
                            "inner join lead_car_info on car_inventory.inventory_id=lead_car_info.car_inventory_id "\
                            "inner join lead on lead.lead_car_info_id=lead_car_info.lead_car_info_id "\
                            "where lead.lead_status='Sold' "\
                            "and car_inventory.date_sold is not null "\
                            f"and lead.contact_id={hardcoded_user};" 
    result = db.engine.execute(get_car_info)
    print(result.first())
    return {"potato": 1}
