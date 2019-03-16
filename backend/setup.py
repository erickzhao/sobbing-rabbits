from sqlalchemy import create_engine, exc
import tables

from utils import db

"""
This simple script takes care of the MySQL set-up.
"""
engine = create_engine("mysql://localhost/mysql")

conn = engine.connect()
conn.execute("COMMIT")
try:
    conn.execute("CREATE DATABASE sobbingrabbit")
except exc.ProgrammingError:
    print("exists")
conn.close()

db.create_all()
