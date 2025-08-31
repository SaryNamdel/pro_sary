
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy import create_engine
import os, json

#engine = create_engine(
#    "mssql+pyodbc://@PC-T10/Apartments?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"
#)



BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_PATH = os.path.join(BASE_DIR, "config.json")

if not os.path.exists(CONFIG_PATH):
    CONFIG_PATH = os.path.join(BASE_DIR, "..", "config.json")

with open(CONFIG_PATH, encoding="utf-8") as f:
    config = json.load(f)

db = config["db"]

connection_string = (
    f"mssql+pyodbc://{db['user']}:{db['password']}@{db['server']}/{db['database']}?"
    f"driver={db['driver'].replace(' ', '+')}"
)

engine = create_engine(connection_string)


Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
