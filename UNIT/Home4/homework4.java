import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class BookServiceTest {

    private BookService bookService;

    @Mock
    private BookRepository bookRepository;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        bookService = new BookService(bookRepository);
    }

    @Test
    public void testGetBookById() {
        Book book = new Book("123", "Test Book");
        when(bookRepository.getBookById("123")).thenReturn(book);
        Book retrievedBook = bookService.getBookById("123");
        assertEquals("123", retrievedBook.getId());
        assertEquals("Test Book", retrievedBook.getTitle());
    }

    @Test
    public void testAddBook() {
        Book book = new Book("123", "Test Book");
        bookService.addBook(book);
        verify(bookRepository, times(1)).addBook(book);
    }   
}