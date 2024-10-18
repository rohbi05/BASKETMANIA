from flask import Flask, request, jsonify
import bcrypt
import mysql.connector
import jwt

app = Flask(__name__)

# Database configuration (replace placeholders with your actual credentials)
db_config = {
    "host": "your_host",
    "user": "your_username",
    "password": "your_password",
    "database": "your_database"
}

# Secret key for JWT (replace with a secure value)
secret_key = "your_secret_key"

# User model
class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password













   



