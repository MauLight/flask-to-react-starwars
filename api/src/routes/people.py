from flask import Blueprint, jsonify, request
from models import People

bpPeople = Blueprint('bpPeople', __name__)


@bpPeople.route('/people', methods=['GET'])
def all_people():
    people = People.query.all()
    people = list(map(lambda people: people.serialize(), people))
    return jsonify(people), 200


@bpPeople.route('/people/<int:id>', methods=['GET'])
def get_people_by_id(id):
    people = People.query.get(id)
    return jsonify(people.serialize()), 200


@bpPeople.route('/people', methods=['POST'])
def store_people():
    name = request.json.get('name')
    height = request.json.get('height')
    hair_color = request.json.get('hair_color')
    eye_color = request.json.get('eye_color')
    birth_year = request.json.get('birth_year')
    gender = request.json.get('gender')
    homeworld = request.json.get('homeworld')
    created = request.json.get('created')
    edited = request.json.get('edited')

    people = People()
    people.name = name
    people.height = height
    people.hair_color = hair_color
    people.eye_color = eye_color
    people.birth_year = birth_year
    people.gender = gender
    people.homeworld = homeworld
    people.created = created
    people.edited = edited
    people.save()
    return jsonify(people.serialize()), 200


@bpPeople.route('/people/<int:id>/update', methods=['PUT'])
def update_people(id):
    name = request.json.get('name')
    height = request.json.get('height')
    hair_color = request.json.get('hair_color')
    eye_color = request.json.get('eye_color')
    birth_year = request.json.get('birth_year')
    gender = request.json.get('gender')
    homeworld = request.json.get('homeworld')
    created = request.json.get('created')
    edited = request.json.get('edited')

    people = People.query.get(id)
    people.name = name
    people.height = height
    people.hair_color = hair_color
    people.eye_color = eye_color
    people.birth_year = birth_year
    people.gender = gender
    people.homeworld = homeworld
    people.created = created
    people.edited = edited
    people.save()
    return jsonify(people.serialize()), 200

@bpPeople.route('/people/<int:id>/delete', methods=['DELETE'])
def delete_(id):
    people = People.query.get(id)
    people.delete()
    return jsonify({"message": "people deleted"}), 200
