# 🌦️ Weather API

**roadmap.sh backend project** – https://roadmap.sh/projects/weather-api-wrapper-service

A simple RESTful API that fetches and returns weather data for a given city. This project demonstrates how to integrate with a third-party API, implement caching with Redis, and structure an API using best practices.

---

## ✅ Features

- Fetch weather data from a third-party API (Visual Crossing)
- Support for query parameter (`?city=CityName`)
- In-memory caching using Redis to reduce API calls
- Automatic cache expiration after 1 hour
- Error handling for missing queries or failed API calls
- Environment variable support using `.env`

---

## 📦 Tech Stack

- Node.js
- TypeScript
- Express
- Axios
- Redis
- dotenv

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/RafhaelBrum/weather-api.git
cd weather-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root folder and add your API key:

```
API_KEY=your_visual_crossing_api_key
PORT=3000
```

### 4. Start Redis server (if not running)

```bash
sudo systemctl start redis
```

### 5. Run the server

```bash
npm run dev
```

---

## 📘 Usage

### Get weather data

Send a GET request to:

```
http://localhost:3000/weather?city=London
```

### Response:

```json
{
  "resolvedAddress": "London, England, United Kingdom",
  "days": [
    {
      "datetime": "2025-04-29",
      "temp": 17.2,
      "conditions": "Partially cloudy"
    },
    ...
  ]
}
```

> First call fetches from the API and saves to Redis. Subsequent calls (within 1 hour) return cached results.

---

## ⚠️ Notes

- If `city` is not provided, the API will return a 400 error.
- Redis must be installed and running locally.
- The API key must be valid and active from [Visual Crossing](https://www.visualcrossing.com/).
- Cache entries automatically expire after 1 hour (3600 seconds).

---

## 📄 License

This project is for educational purposes only. Free to use and modify.