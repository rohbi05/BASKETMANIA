# BasketMania

Welcome to **BasketMania**, a basketball team and player management system built with Flask, SQLAlchemy, and SQLite. This application allows users to manage basketball teams, players, and their associations effectively. 

## Features

- **User Management**: Create, read, update, and delete users.
- **Team Management**: Manage teams associated with users.
- **Player Management**: Add and retrieve player details.
- **Team-Player Associations**: Assign players to teams with specific roles.
- **Database Migrations**: Use Flask-Migrate for handling database migrations.
- **RESTful API**: Expose a RESTful API for all functionalities.

## Tech Stack

- **Backend**: Flask
- **Database**: SQLite with SQLAlchemy
- **Authentication**: Password hashing with `werkzeug.security`
- **API Documentation**: Built-in JSON responses

## Getting Started

### Prerequisites

- Python 3.x
- pip (Python package manager)

### Installation

1. **Clone the repository**:
```bash
git clone git@github.com:rohbi05/BASKETMANIA.git
```
2 Navigate to the project directory:
```bash
cd BASKETMANIA
```
3 Install dependencies:
```bash
npm install
```
4 Start the JSON Server:

To run the JSON server for players data:

```bash
json-server --watch db.json --port 3000
```
To run the JSON server for the user's team:
```bash
json-server --watch team.json --port 3001
```
5 Start the server:
```bash
npm run dev
```

oo2 The server will run on **http://localhost:3000** for players and **http://localhost:3001** for the user's team.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
