
from sqlalchemy.orm import sessionmaker, declarative_base
import json
from sqlalchemy import create_engine

#engine = create_engine(
#    "mssql+pyodbc://@PC-T10/Apartments?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"
#)



with open("config.json") as f:
    config = json.load(f)

db = config["db"]

connection_string = (
    f"mssql+pyodbc://{db['user']}:{db['password']}@{db['server']}/{db['database']}?"
    f"driver={db['driver'].replace(' ', '+')}"
)

engine = create_engine(connection_string)


Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
