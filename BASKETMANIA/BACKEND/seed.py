from models import User, Team, Player, TeamPlayer
from datetime import datetime

player_data = [
    {
        "player_id": "1",
        "name": "LeBron James",
        "team": "Cleveland Cavaliers",
        "position": "Forward",
        "height": "6'9\"",
        "weight": "250 lbs",
        "birthdate": "1984-12-30",
        "image_url": "https://i.pinimg.com/564x/6a/ae/f7/6aaef74808fdfbe4b25c41699fba6d81.jpg"
    },
    {
        "player_id": "2",
        "name": "Kevin Durant",
        "team": "Los Angeles Lakers",
        "position": "Forward",
        "height": "6'10\"",
        "weight": "240 lbs",
        "birthdate": "1988-09-29",
        "image_url": "https://i.pinimg.com/236x/23/18/93/2318930549a4f8240f01722d860e178b.jpg"
    },
    {
        "player_id": "3",
        "name": "Giannis Antetokounmpo",
        "team": "Milwaukee Bucks",
        "position": "Forward",
        "height": "6'11\"",
        "weight": "242 lbs",
        "birthdate": "1994-12-06",
        "image_url": "https://i.pinimg.com/564x/a0/d6/f0/a0d6f04ddb9f5a193eefb408a4aa253f.jpg"
    },
    {
        "player_id": "4",
        "name": "Stephen Curry",
        "team": "Los Angeles Clippers",
        "position": "Guard",
        "height": "6'2\"",
        "weight": "185 lbs",
        "birthdate": "1988-03-14",
        "image_url": "https://i.pinimg.com/236x/99/76/01/997601ff2e50374e90347a5aba290316.jpg"
    },
    {
        "player_id": "5",
        "name": "Luka Dončić",
        "team": "Dallas Mavericks",
        "position": "Guard/Forward",
        "height": "6'7\"",
        "weight": "230 lbs",
        "birthdate": "1999-02-28",
        "image_url": "https://i.pinimg.com/236x/ae/0e/22/ae0e2264f9f72841c52a7feb9a0a99a1.jpg"
    },
    {
        "player_id": "6",
        "name": "Joel Embiid",
        "team": "Philadelphia 76ers",
        "position": "Center",
        "height": "7'0\"",
        "weight": "280 lbs",
        "birthdate": "1994-03-16",
        "image_url": "https://i.pinimg.com/236x/69/8b/27/698b274894766b3e3c55786b53c861b9.jpg"
    },
    {
        "player_id": "7",
        "name": "Zion Williamson",
        "team": "New Orleans Pelicans",
        "position": "Forward",
        "height": "6'6\"",
        "weight": "284 lbs",
        "birthdate": "2000-07-06",
        "image_url": "https://i.pinimg.com/236x/cf/d1/47/cfd1476b8f49d4ecf3c742d77b668b80.jpg"
    },
    {
        "player_id": "8",
        "name": "Myles Turner",
        "team": "Golden State Warriors",
        "position": "Center",
        "height": "6'10\"",
        "weight": "250 lbs",
        "birthdate": "1996-03-24",
        "image_url": "https://www.basketballnetwork.net/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1290/MTkyNzQ0MDkxMTkxMDkyMjUz/myles-turner.jpg"
    },
    {
        "player_id": "9",
        "name": "Pascal Siakam",
        "team": "Phoenix Suns",
        "position": "Forward",
        "height": "6'9\"",
        "weight": "230 lbs",
        "birthdate": "1994-04-02",
        "image_url": "https://basketnews.com/image-415326-crop700x700.jpg"
    },
    {
        "player_id": "10",
        "name": "Darius Garland",
        "team": "Boston Celtics",
        "position": "Guard",
        "height": "6'1\"",
        "weight": "192 lbs",
        "birthdate": "2000-01-26",
        "image_url": "https://i.pinimg.com/236x/5b/b7/41/5bb7418244b5323c350dc12768e0bb66.jpg"
    }
]
def clear_data():
    db.session.query(TeamPlayer).delete()
    db.session.query(Player).delete()
    db.session.query(Team).delete()
    db.session.query(User).delete()
    db.session.commit()


def seed_data():
    # Sample Users
    user1 = User(username='john_doe', email='john@example.com')
    user2 = User(username='jane_smith', email='jane@example.com')

    db.session.add(user1)
    db.session.add(user2)

    # Sample Teams
    team1 = Team(name='Cleveland Cavaliers', user=user1)
    team2 = Team(name='Los Angeles Lakers', user=user2)

    db.session.add(team1)
    db.session.add(team2)

    # Commit the users and teams first to ensure foreign key references are valid
    db.session.commit()

