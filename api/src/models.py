from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class People(db.Model):
    __tablename__ = 'todo'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    height = db.Column(db.Integer)
    hair_color = db.Column(db.String(250), nullable=False)
    eye_color = db.Column(db.String(250), nullable=False)
    birth_year = db.Column(db.String(250), nullable=False)
    gender = db.Column(db.String(250), nullable=False)
    homeworld = db.Column(db.String(250), nullable=False)
    created = db.Column(db.String(250), nullable=False)
    edited = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'height': self.height,
            'hair_color': self.hair_color,
            'eye_color': self.eye_color,
            'birth_year': self.birth_year,
            'gender': self.gender,
            'homeworld': self.homeworld,
            'created': self.created,
            'edited': self.edited
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Planets(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    diameter = db.Column(db.String(250), nullable=False)
    rotation_period = db.Column(db.String(250), nullable=False)
    orbital_period = db.Column(db.String(250), nullable=False)
    gravity = db.Column(db.String(250), nullable=False)
    population = db.Column(db.String(250), nullable=False)
    climate = db.Column(db.String(250), nullable=False)
    terrain = db.Column(db.String(250), nullable=False)
    surface_water = db.Column(db.String(250), nullable=False)
    url = db.Column(db.String(250), nullable=False)
    created = db.Column(db.String(250), nullable=False)
    edited = db.Column(db.String(250), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'diameter': self.diameter,
            'rotation_period': self.rotation_period,
            'orbital_period': self.orbital_period,
            'gravity': self.gravity,
            'population': self.population,
            'climate': self.climate,
            'terrain': self.terrain,
            'surface_water': self.surface_water,
            'url': self.url,
            'created': self.created,
            'edited': self.edited
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Favorites(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    favorites = db.relationship(
        'Favorites', cascade='all, delete', backref='user')

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def serialize_with_favorites(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'birthdate': self.birthdate,
            'email': self.email,
            'password': self.password,
            'verified': self.verified,
            'favorites': [fav.serialize() for fav in self.favorites]
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
