# Humora  
**A Real-Time Mood-Based Music Recommendation Web Application**

Humora is a full-stack web application that uses facial expression recognition and machine learning to recommend songs based on the user's emotional state. It integrates modern frontend and backend technologies to deliver a seamless, real-time experience.

## Features

- Real-time emotion detection using webcam and machine learning
- Music recommendations tailored to detected emotional states
- RESTful API built with Node.js and Express
- Fast, modular frontend built with React and Vite
- Clean and responsive UI with dynamic updates

## Tech Stack

| Layer      | Technologies                                |
|------------|---------------------------------------------|
| Frontend   | React, Vite, face-api.js                    |
| Backend    | Node.js, Express                            |
| Machine Learning | face-api.js (emotion recognition)     |
| Database   | MongoDB or JSON (configurable)              |
| Tools      | Postman, dotenv, nodemon                    |

## Application Workflow

1. User grants camera access
2. face-api.js detects facial landmarks and classifies emotional state
3. Detected emotion is sent to the backend server
4. Backend processes the emotion and responds with matching songs
5. Frontend displays the recommended songs

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A device with webcam support


