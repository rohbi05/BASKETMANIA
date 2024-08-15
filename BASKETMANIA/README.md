# Backend API for Player Management
## Overview
This backend serves as an API for managing players and user teams in a sports application. It allows you to fetch players, view and manage user teams, and perform CRUD operations.

## Endpoints
### Players
- ### GET /players
  - Retrieves a list of all players.
  - **Response:**
```json
[
  {
    "player_id": "1",
    "name": "LeBron James",
    "team": "cleveland cavaliers",
    "position": "Forward",
    "height": "6'9\"",
    "weight": "250 lbs",
    "birthdate": "1984-12-30",
    "image_url": "https://i.pinimg.com/564x/6a/ae/f7/6aaef74808fdfbe4b25c41699fba6d81.jpg"
  },
  ...
]
```