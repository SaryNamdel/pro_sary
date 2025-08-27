from flask import Flask, jsonify
from flask_cors import CORS
from controller.ApartmentController import apartment_blueprint, get_apartments
from controller.AreaController import area_blueprint
from controller.CitiesController import cities_blueprint
from controller.CustomerAndApartmentController import customerAndApartment_blueprint
from controller.CustomerController import customer_blueprint
from controller.ImageController import images_blueprint
from controller.RentAndApartmentController import renterAndApartment_blueprint
from controller.RentersController import renters_blueprint
from error_handlers.error_handlers import register_error_handlers


app = Flask(__name__)


# לאפשר CORS לכל ראוט תחת /api/* מאנגולר (4200)
CORS(app,
     resources={r"/api/*": {"origins": ["http://localhost:4200"]}},
     supports_credentials=False)  # שנה ל-True רק אם עובדים עם קוקים/סשן


@app.get("/")
def root():
    print("Hello World")
    get_apartments()
    return {"message": "apartments API is running"}
#CORS(app)


app.register_blueprint(apartment_blueprint, url_prefix='/api/apartments')
app.register_blueprint(customer_blueprint, url_prefix='/api/customers')  #
app.register_blueprint(area_blueprint, url_prefix='/api/areas')  #
app.register_blueprint(images_blueprint, url_prefix='/api/images')
app.register_blueprint(cities_blueprint, url_prefix='/api/cities')  #
app.register_blueprint(customerAndApartment_blueprint, url_prefix='/api/customerAndApartments')  #
app.register_blueprint(renters_blueprint, url_prefix='/api/renters')  #
app.register_blueprint(renterAndApartment_blueprint, url_prefix='/api/rentersAndApartment')  #

register_error_handlers(app)

if __name__ == "__main__":
    app.run(debug=True, port=5000)


