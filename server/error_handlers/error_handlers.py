from flask import jsonify
from werkzeug.exceptions import HTTPException
from exceptions.exceptions import ItemAlreadyExistsException, MissingFieldException, ItemNotFoundException

def register_error_handlers(app):
    @app.errorhandler(Exception)
    def handle_exception(e):
        if isinstance(e, HTTPException):
            return jsonify({'error': e.name, 'description': e.description}), e.code
        if isinstance(e, (ItemAlreadyExistsException, MissingFieldException, ItemNotFoundException)):
            return jsonify({'error': 'Business Error', 'description': str(e)}), 400
        return jsonify({'error': 'Internal Server Error', 'description': str(e)}), 500


# server/error_handlers/error_handlers.py
#
# def register_error_handlers(app):
#     @app.errorhandler(404)
#     def not_found(e):
#         return jsonify(error="Not Found", description=str(e)), 404
#
#     @app.errorhandler(500)
#     def server_error(e):
#         return jsonify(error="Internal Server Error", description=str(e)), 500
