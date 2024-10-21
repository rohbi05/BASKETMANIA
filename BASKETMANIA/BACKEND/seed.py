from datetime import datetime  
from database import db, app  
from models import User, Team, Player, TeamPlayer

# Sample data to seed the database
users_data = [
    {'username': 'john_doe', 'email': 'john@example.com', 'password': 'password123'},
    {'username': 'jane_smith', 'email': 'jane@example.com', 'password': 'password456'},
]

teams_data = [
    {'name': 'Team Alpha', 'user_id': 1},
    {'name': 'Team Beta', 'user_id': 2},
]

players_data = [

      {
        'name': 'LeBron James', 
        'age': 39,  
        'position': 'Forward', 
        'height': 6.9,  
        'weight': 250,  
        'birthdate': '1984-12-30', 
        'image_url': 'https://i.pinimg.com/564x/6a/ae/f7/6aaef74808fdfbe4b25c41699fba6d81.jpg'
    },
    {
        'name': 'Kevin Durant', 
        'age': 36, 
        'position': 'Forward', 
        'height': 6.83,  
        'weight': 240,  
        'birthdate': '1988-09-29', 
        'image_url': 'https://i.pinimg.com/236x/23/18/93/2318930549a4f8240f01722d860e178b.jpg'
    },
    {
        'name': 'Antetokounmpo', 
        'age': 29, 
        'position': 'Forward', 
        'height': 6.92, 
        'weight': 242,  # 
        'birthdate': '1994-12-06', 
        'image_url': 'https://i.pinimg.com/564x/a0/d6/f0/a0d6f04ddb9f5a193eefb408a4aa253f.jpg'
    },
    {
        'name': 'Stephen Curry', 
        'age': 36,  
        'position': 'Guard', 
        'height': 6.17, 
        'weight': 185,  # 
        'birthdate': '1988-03-14', 
        'image_url': 'https://i.pinimg.com/236x/99/76/01/997601ff2e50374e90347a5aba290316.jpg'
    },
    {
        'name': 'Luka Dončić', 
        'age': 25,  
        'position': 'Guard/Forward', 
        'height': 6.58, 
        'weight': 230,  
        'birthdate': '1999-02-28', 
        'image_url': 'https://i.pinimg.com/236x/ae/0e/22/ae0e2264f9f72841c52a7feb9a0a99a1.jpg'
    },
    {
        'name': 'Joel Embiid', 
        'age': 30,  
        'position': 'Center', 
        'height': 7.0, 
        'weight': 280,   
        'birthdate': '1994-03-16', 
        'image_url': 'https://i.pinimg.com/236x/69/8b/27/698b274894766b3e3c55786b53c861b9.jpg'
    },
    {
        'name': 'Zion Williamson', 
        'age': 24,  
        'position': 'Forward', 
        'height': 6.5, 
        'weight': 284,  
        'birthdate': '2000-07-06', 
        'image_url': 'https://i.pinimg.com/236x/cf/d1/47/cfd1476b8f49d4ecf3c742d77b668b80.jpg'
    },
    {
        'name': 'Myles Turner', 
        'age': 27,  
        'position': 'Center', 
        'height': 6.83, 
        'weight': 250,  
        'birthdate': '1996-03-24', 
        'image_url': 'https://www.basketballnetwork.net/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1290/MTkyNzQ0MDkxMTkxMDkyMjUz/myles-turner.jpg'
    },
    {
        'name': 'Pascal Siakam', 
        'age': 30,  
        'position': 'Forward', 
        'height': 6.75,  
        'weight': 230,  
        'birthdate': '1994-04-02', 
        'image_url': 'https://basketnews.com/image-415326-crop700x700.jpg'
    },
    {
        'name': 'Darius Garland', 
        'age': 24,  
        'position': 'Guard', 
        'height': 6.08,  
        'weight': 192,  
        'birthdate': '2000-01-26', 
        'image_url': 'https://i.pinimg.com/236x/5b/b7/41/5bb7418244b5323c350dc12768e0bb66.jpg'
    },
]

team_players_data = [
    {'team_id': 1, 'player_id': 1, 'role': 'Captain'},
    {'team_id': 1, 'player_id': 2, 'role': 'Member'},
    {'team_id': 2, 'player_id': 1, 'role': 'Member'},
]