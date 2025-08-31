# test_db_connect.py
from sqlalchemy import text
from config import engine

print("== TRY CONNECT ==")
try:
    with engine.connect() as conn:
        # בדיקה בסיסית
        res = conn.execute(text("SELECT 1"))
        print("OK:", list(res))

        # בדיקת גרסה (לא חובה)
        v = conn.exec_driver_sql("SELECT @@VERSION").fetchone()
        print("SQL Server:", v[0][:60], "...")
except Exception as e:
    print("CONNECT FAILED:", e)
