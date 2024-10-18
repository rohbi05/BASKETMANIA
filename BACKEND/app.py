from flask import Flask, render_template, request, flash, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user
from werkzeug.security import generate_password_hash, check_password_hash

# Replace with your actual data access logic (e.g., database connection)
users = {  # Example user data (replace with your data source)
    1: User(1, 'admin', 'hashed_password')
}


class User(UserMixin):
    def __init__(self, id, username, password_hash):
        self.id = id
        self.username = username
        self.password_hash = password_hash


# Function to verify password using secure hashing
def verify_password(password, password_hash):
    return check_password_hash(password_hash, password)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = users.get(username)  # Replace with actual user retrieval logic
        if user and verify_password(password, user.password_hash):
            login_user(user)
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  # Replace with your desired page
        else:
            flash('Invalid username or password', 'error')
    return render_template('login.html')


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out.', 'success')
    return redirect(url_for('login'))


@app.route('/home')
@login_required
def home():
    # This is a protected route for logged-in users
    return render_template('home.html')  # Replace with your desired home page template


@login_manager.user_loader
def load_user(user_id):
    return users.get(int(user_id))  # Replace with actual user retrieval logic by ID


if __name__ == '__main__':
    app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with a strong, random string
    login_manager = LoginManager()
    login_manager.init_app(app)
    app.run(debug=True)