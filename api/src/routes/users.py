from flask import Blueprint, jsonify, request
from models import Users

bpUsers = Blueprint('bpUsers', __name__)


@bpUsers.route('/users', methods=['GET'])
def all_favorites():
    users = Users.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200


@bpUsers.route('/users', methods=['POST'])
def store_favorite():
    name = request.json.get('name')

    users = Users()
    users.name = name
    users.save()
    return jsonify(users.serialize()), 200