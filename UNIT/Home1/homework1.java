import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CalculatorTest {

    @Test
    void calculateDiscount_ValidArguments_CalculatesDiscount() {
        Calculator calculator = new Calculator();
        assertThat(calculator.calculateDiscount(100, 20)).isEqualTo(80); 
    }

    @Test
    void calculateDiscount_InvalidArguments_ThrowsArithmeticException() {
        Calculator calculator = new Calculator();
        assertThrows(ArithmeticException.class, () -> calculator.calculateDiscount(-100, 20)); 
        assertThrows(ArithmeticException.class, () -> calculator.calculateDiscount(100, -20)); 
    }
}