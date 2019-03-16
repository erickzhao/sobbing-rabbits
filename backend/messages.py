from twilio.rest import Client

account = "ACeec37d10088b2826aa81746d709c57e3"
token = "e84982e1d3e37a080664f749f1027c0a"
client = Client(account, token)


def send_sms(number, body):
    message = client.messages.create(to="+14383996776", from_="+1 778 654 6641",
                                body=body)
    return message.sid
