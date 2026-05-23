# MediMind — Autonomous AI Health Intelligence System

## System Overview
MediMind is a multimodal medical intelligence platform that converts patient reports and voice inputs into actionable clinical insights.

### Tech Stack
- **Frontend**: React.js, Tailwind CSS, Lucide, ApexCharts (CDN-driven)
- **Backend (API)**: Node.js, Express, WebSockets
- **AI Service**: FastAPI, Python (NLP simulation)
- **Infrastructure**: Mock Kafka Streaming, Mock Airflow Pipeline

## Project Structure
- `/backend/main_api`: The core logic and WebSocket server.
- `/backend/ai_service`: The medical NLP service.
- `/frontend`: The high-fidelity dashboard.
- `/shared`: Simulation modules for Kafka/Airflow.

## Getting Started

### 1. Run the Main API (Node.js)
```bash
cd backend/main_api
npm install express ws
node server.js
```

### 2. Run the AI Service (FastAPI)
```bash
cd backend/ai_service
pip install fastapi uvicorn
python main.py
```

### 3. Open the Frontend
Just open `frontend/index.html` in any modern browser.

## Features Built
- [x] **AI NLP Pipeline**: simulated entity extraction for diseases/medications.
- [x] **Real-time Engine**: WebSockets for immediate doctor alerts.
- [x] **Infrastructure**: Kafka and Airflow simulation for data engineering resumes.
- [x] **Premium UI**: Glassmorphic dashboard with live interaction mock.
