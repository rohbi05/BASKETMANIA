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
          "username": "basketmania",
          "email": "basketmania@gmail.com",
          "password": "basketmania123"
       }
     ```
     - **Response:** User details of the created user.
       
**Team Endpoints**
 - **Get All Teams:**
     - **Endpoint:** `GET /teams`
     - **Response:** List of all teams.
 - **Create New Team:**
     - **Endpoint:** POST /teams
     - **Request Body:**
     ```json
        {
          "name": "Team Alpha",
          "user_id": 1
        }
     ```
     - **Response:** Details of the created team.

**Player Endpoints**
 - **Get All Players:**
     - **Endpoint:** `GET /players`
     - **Response:** List of all players.
- **Create New Player:**
    - **Endpoint:** POST /players
    - **Request Body:**
    ```json
       {
         "name": "Player Name",
         "age": 25,
         "position": "Guard",
         "height": 6.3,
         "weight": 190,
         "birthdate": "1998-01-01",
         "image_url": "http://example.com/player_image.jpg"
     }
    ```
    - **Response:** Details of the created player.

**Team-Player Endpoints**
- **Assign Player to Team:**
    - **Endpoint:** `POST /team-players`
    - **Request Body:**
    ```json
       {
         "team_id": 1,
         "player_id": 2,
       }
    ```
   - **Response:** Details of the team-player association.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
