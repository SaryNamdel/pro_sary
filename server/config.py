from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

engine = create_engine(
    "mssql+pyodbc://@PC-T10/Apartments?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"
)

Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
