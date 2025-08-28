from flask import Blueprint, request, jsonify
from dto.RentersDTO import RentersDTO
from models import RentersAndApartment
from models.Apartment import Apartment
from models.Renters import Renters
from repository.RentersRepository import RentersRepository
from service.RentersService import RentersService

from models.Images import Images

from sqlalchemy.exc import IntegrityError
from config import Session
import hashlib

repo = RentersRepository()
service = RentersService(repo)

renters_blueprint = Blueprint('renters', __name__)


@renters_blueprint.route('', methods=['POST'])
def add_renters():
    dto = RentersDTO(**request.get_json())
    service.add(dto)
    return jsonify({'message': 'Renters added'}), 201


@renters_blueprint.route('', methods=['GET'])
def get_renters():
    renters = service.get_all()
    return jsonify([{'id': r.rentId, 'apartmentId': r.apartmentId,
                     'lastName': r.lastName, 'firstName': r.firstName,
                     'phone': r.phone, 'email': r.email,'pwd': r.pwd,'username':r.username}
                    for r in renters])


@renters_blueprint.route('/<int:rentId>', methods=['GET'])
def get_renters_by_id(renters_id):
    renters = service.get_by_id(renters_id)
    return jsonify({'id': renters.rentId, 'apartmentId': renters.apartmentId,
                    'lastName': renters.lastName, 'firstName': renters.firstName,
                    'phone': renters.phone, 'email': renters.email,'pwd': renters.pwd,'username':renters.username})


@renters_blueprint.route('/<int:rentId>', methods=['PUT'])
def update_renters(rentId):
    dto = RentersDTO(**request.get_json())
    renters = service.update(rentId, dto)
    return jsonify({'message': 'Renters updated'})


@renters_blueprint.route('/<int:rentId>', methods=['DELETE'])
def delete_renters(rentId):
    service.delete(rentId)
    return jsonify({'message': 'renters deleted'})


###################
# server/controller/RentersController.py


def hash_pwd(p: str) -> str:
    # HASH בסיסי עם SHA256 (מומלץ בעתיד לעבור ל-bcrypt/scrypt/argon2)
    return hashlib.sha256(p.encode("utf-8")).hexdigest()

@renters_blueprint.post("/login")
def login_renter():
    """
    POST /api/renters/login
    body: { "username": "...", "pwd": "..." }
    200 -> renter JSON | 401 לשגיאה באימות
    """
    data = request.get_json(silent=True) or {}
    username = data.get("username")
    pwd = data.get("pwd")
    if not username or not pwd:
        return jsonify({"message": "username/pwd נדרשים"}), 400

    session = Session()
    try:
        renter = session.query(Renters).filter(Renters.username == username).first()
        if not renter:
            return jsonify({"message": "שם משתמש שגוי"}), 401
        if renter.pwd != pwd:
            return jsonify({"message": "סיסמה שגויה"}), 401

        # if renter.pwd != hash_pwd(pwd):
        #     return jsonify({"message": "שם משתמש או סיסמה שגויים"}), 401

        return jsonify(renter.to_dict()), 200
    finally:
        session.close()

# @renters_blueprint.post("")
# def create_renter():
#     """
#     POST /api/renters
#     body: { "username": "...", "pwd": "...", "phone": "...", "email": "..." }
#     201 -> renter JSON | 409 אם שם משתמש תפוס
#     """
#     data = request.get_json(silent=True) or {}
#     username = data.get("username")
#     pwd = data.get("pwd")
#     phone    = data.get("phone")
#     email    = data.get("email")
#
#     if not username or not pwd:
#         return jsonify({"message": "username/pwd נדרשים"}), 400
#
#     session = Session()
#     try:
#         r = Renters(
#             username=username,
#             pwd=hash_pwd(pwd),
#             phone=phone,
#             email=email
#         )
#         session.add(r)
#         session.commit()
#         session.refresh(r)
#         return jsonify(r.to_dict()), 201
#     except IntegrityError:
#         session.rollback()
#         return jsonify({"message": "שם המשתמש כבר קיים"}), 409
#     finally:
#         session.close()

@renters_blueprint.get("/exists")
def renter_exists():
    """
    GET /api/renters/exists?username=...
    החזרה: { "taken": true/false }
    """
    username = request.args.get("username")
    if not username:
        return jsonify({"taken": False}), 200
    session = Session()
    try:
        exists = session.query(Renters).filter(Renters.username == username).first() is not None
        return jsonify({"taken": exists}), 200
    finally:
        session.close()


@renters_blueprint.route("/register", methods=["POST"])
def register_renter():
    data = request.json
    session = Session()
    try:
        # קודם ניצור דירה ריקה
        new_apartment = Apartment(address="", cityId=1, isPool=False,priceToBed = 150,SittingArea = False,woodenBench = False,
                                  hammock = False, trampoline = False, protected_space = False, lan = 0.0, lat = 0.0, selfDescription = "",
                                  accessibleness = False, mangal = False, porch = False, numFloor = 0, numBeds = 2, numRooms = 1, elevator = False,
                                  park = False)
        session.add(new_apartment)
        session.flush()  # כדי לקבל apartmentId חדש

        # עכשיו ניצור משכיר חדש עם ה-apartmentId
        new_renter = Renters(
            username=data["username"],
            pwd=data["pwd"],
            firstName=data.get("firstName"),
            lastName=data.get("lastName"),
            phone=data.get("phone"),
            email=data.get("email"),
            apartmentId=new_apartment.apartmentId
        )
        session.add(new_renter)
        session.commit()

        return jsonify({"message": "משכיר נרשם בהצלחה", "renterId": new_renter.rentId}), 201

    except Exception as e:
        session.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        session.close()




# controller/RentersController.py


@renters_blueprint.get("/<int:rent_id>/apartments")
def apartments_by_renter(rent_id: int):
    s = Session()
    try:
        # מביאים את הדירות המשוייכות למשכיר דרך טבלת הקישור
        apartments = (
            s.query(Apartment)
             .join(RentersAndApartment, RentersAndApartment.apartmentId == Apartment.apartmentId)
             .filter(RentersAndApartment.rentId == rent_id)
             .all()
        )

        # נצרף תמונות לכל דירה
        result = []
        for a in apartments:
            images = (
                s.query(Images.imgName)
                 .filter(Images.apartmentId == a.apartmentId)
                 .all()
            )
            img_list = [row.imgName for row in images]

            result.append({
                "apartmentId": a.apartmentId,
                "address": a.address,
                "cityId": a.cityId,
                "numRooms": a.numRooms,
                "numBeds": a.numBeds,
                "numFloor": a.numFloor,
                "park": a.park,
                "elevator": a.elevator,
                "porch": a.porch,
                "mangal": a.mangal,
                "accessibleness": a.accessibleness,
                "selfDescription": a.selfDescription,
                "lan": a.lan,
                "lat": a.lat,
                "protected_space": a.protected_space,
                "trampoline": a.trampoline,
                "hammock": a.hammock,
                "woodenBench": a.woodenBench,
                "SittingArea": a.SittingArea,
                "isPool": a.isPool,
                "priceToBed": a.priceToBed,
                "images": img_list,  # ← כאן התמונות
            })

        return jsonify(result), 200

    finally:
        s.close()



