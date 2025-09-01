
import sqlalchemy
from config import engine

with engine.connect() as connection:
    with open("db/schema.sql", encoding="utf-8") as f:
        schema_sql = f.read()
        for statement in schema_sql.split(";"):
            if statement.strip():
                connection.execute(sqlalchemy.text(statement))

    with open("db/data.sql", encoding="utf-8") as f:
        data_sql = f.read()
        for statement in data_sql.split(";"):
            if statement.strip():
                connection.execute(sqlalchemy.text(statement))

    connection.commit()
