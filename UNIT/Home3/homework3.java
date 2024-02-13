import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


// Задание 1: Тесты для метода evenOddNumber

public class NumberUtilsTest {

    @Test
    void evenOddNumber_PositiveEvenNumber_ReturnsEven() {
        assertEquals("Even", NumberUtils.evenOddNumber(4));
    }

    @Test
    void evenOddNumber_PositiveOddNumber_ReturnsOdd() {
        assertEquals("Odd", NumberUtils.evenOddNumber(3));
    }

    @Test
    void evenOddNumber_Zero_ReturnsEven() {
        assertEquals("Even", NumberUtils.evenOddNumber(0));
    }
}

// Задание 2: Тесты для метода numberInInterval

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class NumberUtilsTest {

    @Test
    void numberInInterval_NumberWithinInterval_ReturnsTrue() {
        assertTrue(NumberUtils.numberInInterval(50));
    }

    @Test
    void numberInInterval_NumberOutsideInterval_ReturnsFalse() {
        assertFalse(NumberUtils.numberInInterval(10));
    }

    @Test
    void numberInInterval_NumberAtLowerBound_ReturnsFalse() {
        assertFalse(NumberUtils.numberInInterval(25));
    }

    @Test
    void numberInInterval_NumberAtUpperBound_ReturnsFalse() {
        assertFalse(NumberUtils.numberInInterval(100));
    }
}

// Задание 3: Добавление функции в класс UserRepository и ее тестирование

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserRepositoryTest {

    @Test
    void logoutAllExceptAdmins_OneAdminInList_RemainLoggedIn() {
        User admin = new User("admin123", true);
        User user1 = new User("user1", false);
        User user2 = new User("user2", false);
        
        UserRepository userRepository = new UserRepository();
        userRepository.addUser(admin);
        userRepository.addUser(user1);
        userRepository.addUser(user2);
        
        userRepository.logoutAllExceptAdmins();
        
        assertTrue(admin.isLoggedIn());
        assertFalse(user1.isLoggedIn());
        assertFalse(user2.isLoggedIn());
    }

    @Test
    void logoutAllExceptAdmins_MultipleAdminsInList_AllRemainLoggedIn() {
        User admin1 = new User("admin1", true);
        User admin2 = new User("admin2", true);
        User user1 = new User("user1", false);
        
        UserRepository userRepository = new UserRepository();
        userRepository.addUser(admin1);
        userRepository.addUser(admin2);
        userRepository.addUser(user1);
        
        userRepository.logoutAllExceptAdmins();
        
        assertTrue(admin1.isLoggedIn());
        assertTrue(admin2.isLoggedIn());
        assertFalse(user1.isLoggedIn());
    }
}