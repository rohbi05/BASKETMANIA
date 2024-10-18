from flask import Flask, request, jsonify
import bcrypt
import mysql.connector

app = Flask(__name__)

# Database configuration
db_config = {
    "host": "your_host",
    "user": "your_username",
    "password": "your_password",
    "database": "your_database"
}

