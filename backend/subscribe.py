from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

@app.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.json
    email = data.get('email')
    instagram = data.get('instagram')
    API = os.environ.get('API_OCTOPUS')
    
    if not email:
        return jsonify({'error': 'Email and Instagram are required'}), 400

    headers = {
        'Content-Type': 'application/json',
    }

    data = {
    "api_key": API,
    "email_address": email,
    "fields": {
        "FirstName": instagram
    },
    "tags": [
        "Bewerslab Club"
    ],
    "status": "SUBSCRIBED"
    }

    try:
        response = requests.post('https://emailoctopus.com/api/1.6/lists/87a17540-d713-11ee-ac1d-139086474c47/contacts', headers=headers, json=data)

        print(f'Response Status Code: {response.status_code}')
        print(f'Response Content: {response.content}')

        if response.status_code == 200:
            return jsonify({'message': '¡Gracias por suscribirte!'})
        else:
            return jsonify({'error': response.json()}), response.status_code
    except Exception as e:
        print(f'Error: {str(e)}')
        return jsonify({'error': 'An error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
