import requests
headers = {'content-type': 'application/json'}
base_url = 'https://hackathon-api.bdc.n360.io'

def get_purchases(user_id):
    data = requests.get(base_url)
    print(data)
    return {"potato": 1}
