const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../frontend')));

// Mock Patient DB
const patients = [
    { id: 'MM-1002', name: 'Samuel Wright', status: 'Critical', age: 58, findings: ['Atrial Fib', 'Warfarin'] },
    { id: 'MM-2034', name: 'Robert Jackson', status: 'Moderate', age: 45, findings: ['Diabetes II', 'Metformin'] },
    { id: 'MM-4921', name: 'Elena Martinez', status: 'Stable', age: 34, findings: ['Hypertension'] }
];

// API Endpoints
app.get('/api/patients', (req, res) => res.json(patients));

app.post('/api/analyze', (req, res) => {
    // Simulate AI Service call
    console.log('Forwarding to AI Service (FastAPI)...');
    setTimeout(() => {
        const mockResult = {
            entities: ['Bronchitis', 'Atorvastatin'],
            riskScore: 75,
            summary: 'Patient shows signs of respiratory distress logic.'
        };
        
        // Broadcast "Alert" to all doctors via WebSocket
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'NEW_REPORT',
                    patient: 'Michael Ross',
                    risk: 'High'
                }));
            }
        });
        
        res.json(mockResult);
    }, 2000);
});

// WebSocket Connection
wss.on('connection', (ws) => {
    console.log('Doctor connected to MediMind alert stream');
    ws.send(JSON.stringify({ type: 'STATUS', message: 'Connected to MediMind Real-time' }));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`MediMind Main API running on http://localhost:${PORT}`);
});
