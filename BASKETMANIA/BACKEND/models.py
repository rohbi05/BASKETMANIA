
# User model (One-to-Many with Team)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    teams = db.relationship('Team', backref='user', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'teams': [team.to_dict() for team in self.teams]
        }
    # Team model (One-to-Many with Player, Many-to-One with User)
class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    players = db.relationship('TeamPlayer', backref='team', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'players': [team_player.to_dict() for team_player in self.players]
        }