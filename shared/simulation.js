const EventEmitter = require('events');

/**
 * Mock Kafka Streaming Service
 * Simulates real-time patient data ingestion
 */
class KafkaMock extends EventEmitter {
    constructor() {
        super();
        this.status = 'DISCONNECTED';
    }

    connect() {
        this.status = 'CONNECTED';
        console.log('Kafka: Connected to cluster medical-reports-prod');
        
        // Simulate random incoming events
        setInterval(() => {
            if (this.status === 'CONNECTED') {
                const event = {
                    patientId: `MM-${Math.floor(1000 + Math.random() * 9000)}`,
                    type: 'VITAL_SIGNS_STREAM',
                    timestamp: new Date().toISOString(),
                    data: { heartRate: 75 + Math.random() * 20 }
                };
                this.emit('message', event);
            }
        }, 5000);
    }
}

/**
 * Mock Airflow Scheduler
 * Simulates batch processing for daily summaries
 */
class AirflowMock {
    scheduleSummaryBatch() {
        console.log('Airflow: Scheduled DAG daily_patient_risk_aggregation');
        setTimeout(() => {
            console.log('Airflow: Batch job successful. Risk scores updated.');
        }, 10000);
    }
}

module.exports = { KafkaMock, AirflowMock };
