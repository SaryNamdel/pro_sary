import json, os, traceback
from urllib.parse import quote_plus
import pyodbc
from sqlalchemy import create_engine, text

CFG_PATH = os.path.join(os.path.dirname(__file__), "config.json")
with open(CFG_PATH, encoding="utf-8") as f:
    cfg = json.load(f)["db"]

print("== DB CONFIG ==")
print("auth   :", cfg.get("auth"))
print("server :", cfg.get("server"))
print("db     :", cfg.get("database"))
print("driver :", cfg.get("driver"))

# בדיקת דרייברים זמינים במחשב
print("\n== INSTALLED ODBC DRIVERS ==")
for d in pyodbc.drivers():
    print(" -", d)

# בניית odbc_connect יציב
if str(cfg.get("auth", "")).lower() == "windows":
    odbc_str = (
        f"DRIVER={{{cfg['driver']}}};"
        f"SERVER={cfg['server']};"
        f"DATABASE={cfg['database']};"
        f"UID={cfg['user']};"
        f"PWD={cfg['password']};"
        "Encrypt=yes;"
        "TrustServerCertificate=no;"
        "Connection Timeout=30;"
    )
else:
    odbc_str = (
        f"DRIVER={{{cfg['driver']}}};"
        f"SERVER={cfg['server']};"
        f"DATABASE={cfg['database']};"
        f"UID={cfg['user']};"
        f"PWD={cfg['password']};"
        "TrustServerCertificate=yes;"
    )

odbc_connect = quote_plus(odbc_str)

engine = create_engine(
    f"mssql+pyodbc:///?odbc_connect={quote_plus(odbc_str)}",
    pool_pre_ping=True,
    future=True,
)

print("\n== TRY CONNECT ==")
try:
    with engine.connect() as conn:
        v = conn.execute(text("SELECT @@SERVERNAME AS srv, DB_NAME() AS db")).mappings().first()
        print("CONNECTED →", v)
        # בדיקת טבלה לדוגמה (שני לשם קיים אצלך)
        cnt = conn.execute(text("SELECT COUNT(*) AS c FROM Customers")).scalar_one()
        print("Customers:", cnt)
except Exception as e:
    print("CONNECT FAILED:")
    traceback.print_exc()



from urllib.parse import quote_plus
from sqlalchemy import create_engine

# נניח שטענת את cfg מה-JSON כמו קודם



