from fastapi import APIRouter
from app.models.schemas import Book

router = APIRouter()

fake_books_db = []

@router.get("/", response_model=list[Book])
def get_books():
    return fake_books_db

@router.post("/", response_model=Book)
def create_book(book: Book):
    fake_books_db.append(book)
    return book
