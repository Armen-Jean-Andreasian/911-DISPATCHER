from flask import Flask, render_template, send_from_directory, request, jsonify

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/articles/<path:filename>')
def articles(filename):
    return send_from_directory('articles', filename)


@app.route('/emergency_numbers')
def emergency_numbers():
    return render_template('emergency_numbers.html')


@app.route('/search', methods=['POST'])
def perform_search():
    # Получение данных поиска из запроса
    nationality, country = request.json['search_data']

    embassy_template = f"https://www.google.com/search?q=phone+number+of+{nationality}+embassy+in+{country}"
    police_template = f"https://www.google.com/search?q=emergency+police+number+in+{country}"
    ambulance_template = f"https://www.google.com/search?q=emergency+ambulance+number+in+{country}"
    fire_template = f"https://www.google.com/search?q=emergency+fire+number+in+{country}"
    rescue_service = f"https://www.google.com/search?q=rescue+service+number+in+{country}"
    human_rights_watch = f"https://www.google.com/search?q=human+rights+watch+in+{country}"
    red_cross_template = f"https://www.google.com/search?q=International%20Federation%20of%20Red%20Cross%20and%20Red" \
                         f"%20Crescent%20Societies+contact+in+{country}"

    return jsonify([embassy_template, police_template, ambulance_template, fire_template, rescue_service,
                    human_rights_watch, red_cross_template])


if __name__ == '__main__':
    app.run()
