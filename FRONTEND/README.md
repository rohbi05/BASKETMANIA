# BasketMania: Basketball Management System

BasketMania is a basketball management system built with Flask and SQLAlchemy. This application allows users to manage teams, players, and user accounts, facilitating a comprehensive overview of basketball activities.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [User Endpoints](#user-endpoints)
  - [Team Endpoints](#team-endpoints)
  - [Player Endpoints](#player-endpoints)
  - [Team-Player Endpoints](#team-player-endpoints)
- [License](#license)

## Features

- **User Management**: Sign up, log in, and manage user profiles.
- **Team Management**: Create and manage basketball teams.
- **Player Management**: Add and manage players, including their stats and details.
- **Team-Player Association**: Assign players to teams with specific roles.

## Technologies

- **Backend**: Flask
- **Database**: SQLite
- **ORM**: SQLAlchemy
- **Migrations**: Flask-Migrate
- **API Development**: Flask-RESTful
- **Cross-Origin Resource Sharing**: Flask-CORS

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:
```bash
git clone git@github.com:rohbi05/BASKETMANIA.git
cd BASKETMANIA
```
2. **Set Up a Virtual Environment:**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```
3. **Install Dependencies:**
```bash
pip install -r requirements.txt
```
4. **Run Migrations:**
```bash
flask db upgrade
```
5. **Run the Application:**
```bash
flask run
```

## Usage
You can access the API at `http://localhost:5000`. Use tools like Postman or curl to interact with the endpoints.

## API Documentation
**User Endpoints**
 - **Get All Users:**
     - **Endpoint:** `GET /users`
     - **Response:** List of all users.
- **Create New User:**
     - **Endpoint:** `POST /users`
     - **Request Body:**
     ```json
        {
          "username": "your_username",
          "email": "your_email@example.com",
          "password": "your_password"
       }
     ```
     - **Response:** User details of the created user.


### License
This project is licensed under the MIT License. See the LICENSE file for details.
