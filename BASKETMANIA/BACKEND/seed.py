from datetime import datetime  
from database import db, app  
from models import User, Team, Player, TeamPlayer

# Sample data to seed the database
users_data = [
    {'username': 'john_doe', 'email': 'john@example.com', 'password': 'password123'},
    {'username': 'jane_smith', 'email': 'jane@example.com', 'password': 'password456'},
]