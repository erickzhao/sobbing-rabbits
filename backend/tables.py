from utils import db


class Item(db.Model):
    __tablename__ = 'cars'

    name = db.Column(db.String(256), primary_key=True, unique=True)
    date_in = db.Column(db.DateTime)
    date_out = db.Column(db.DateTime)
    quantity = db.Column(db.Integer)
    transactions = db.relationship("Transaction", backref="cars", lazy=True)

    def __repr__(self):
        return '<Car %r>' % self.name


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    email = db.Column(db.String(256))
    password = db.Column(db.String(256), nullable=False)
    date_created = db.Column(db.DateTime)
    admin = db.Column(db.Boolean)
    transactions = db.relationship("Transaction", backref="users", lazy=True)
    blacklist = db.relationship("Blacklist", backref="users", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.name


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    user_requested_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user_accepted = db.Column(db.String(256))
    requested_quantity = db.Column(db.Integer)
    accepted = db.Column(db.Boolean)
    returned = db.Column(db.Boolean)
    item = db.Column(db.String(256), db.ForeignKey('cars.name'))
    date_requested = db.Column(db.DateTime)
    date_accepted = db.Column(db.DateTime)
    date_returned = db.Column(db.DateTime)

    def __repr__(self):
        return '<Transaction %r>' % self.id


class Blacklist(db.Model):
    __tablename__ = 'blacklist'

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    blacklisted_token = db.Column(db.String(256))
    blacklisted_at = db.Column(db.DateTime)

    def __repr__(self):
        return '<Blacklisted Token %r>' % self.blacklisted_token
