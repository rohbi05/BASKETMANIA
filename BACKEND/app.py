from flask import Flask, render_template, request, flash, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user
from werkzeug.security import generate_password_hash, check_password_hash


users = {  1: User(1, 'admin', 'hashed_password')
}


class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash



def verify_password(password, password_hash):
    return check_password_hash(password_hash, password)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = users.get(username)  
        if user and verify_password(password, user.password_hash):
            login_user(user)
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  
        else:
            flash('Invalid username or password', 'error')
    return render_template('login.html')







