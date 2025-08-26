from fastapi import FastAPI
from app.api.routes import books

app = FastAPI(title="Mini Library API")

app.include_router(books.router, prefix="/books", tags=["books"])

@app.get("/")
def root():
    return {"message": "Welcome to Mini Library API"}

