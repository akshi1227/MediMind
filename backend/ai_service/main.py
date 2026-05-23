from fastapi import FastAPI, UploadFile, File
import time
import random

app = FastAPI()

@app.get("/")
async def root():
    return {"status": "MediMind AI Service Online", "version": "1.0.0"}

@app.post("/extract")
async def extract_entities(file: UploadFile = File(...)):
    # Simulate Whisper/NLP Processing
    time.sleep(1.5)
    
    entities = {
        "diseases": ["Chronic Bronchitis", "Hyperlipidemia"],
        "medications": ["Atorvastatin", "Albuterol Inhaler"],
        "risk_factors": ["Smoking history (30 years)", "Elevated BMI"]
    }
    
    risk_score = random.randint(40, 95)
    
    return {
        "filename": file.filename,
        "extraction_results": entities,
        "risk_score": risk_score,
        "recommendation": "Suggest immediate respiratory evaluation and spirometry."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
