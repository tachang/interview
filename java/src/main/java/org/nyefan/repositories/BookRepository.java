package org.nyefan.repositories;

import org.nyefan.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    default public boolean connectionStatus() {
        return true;
    }
}
