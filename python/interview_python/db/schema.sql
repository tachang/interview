DROP TABLE IF EXISTS book;

CREATE TABLE book
(
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    isbn   TEXT UNIQUE NOT NULL,
    title  TEXT        NOT NULL,
    author TEXT        NOT NULL
);
