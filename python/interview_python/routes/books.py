from flask import (
    Blueprint, request
)

from interview_python.db.db import get_db

bp = Blueprint('books', __name__, url_prefix='/api/v1/books')


@bp.route('/', methods=['POST'])
def create_book():
    author = request.json['author']
    title = request.json['title']
    isbn = request.json['isbn']

    if not isbn:
        return 'ISBN is required.', 400

    db = get_db()
    try:
        db.execute(
            "INSERT INTO book (author, title, isbn) VALUES (?, ?, ?)",
            (author, title, isbn)
        )
        db.commit()
        return f"Book {(author, title, isbn)} successfully registered.", 201
    except db.IntegrityError:
        return f"Book with isbn {isbn} is already registered.", 422


@bp.route('/<int:isbn>', methods=['GET'])
def get_book_by_isbn(isbn):
    book = get_db().execute(
        "SELECT author, title, isbn FROM book WHERE isbn = (?)",
        (isbn,)
    ).fetchone()

    if book is None:
        return f"Book with isbn {isbn} is not registered.", 404

    return f"Found book {(book['author'], book['title'], book['isbn'])}.", 200


@bp.route('/<int:isbn>', methods=['DELETE'])
def delete_book_by_isbn(isbn):
    db = get_db()
    try:
        db.execute(
            "DELETE FROM book WHERE isbn = (?)",
            (isbn,)
        )
        db.commit()
        return f"Book {isbn} successfully deleted.", 204
    except db.IntegrityError:
        return f"Book with isbn {isbn} is not registered", 404
