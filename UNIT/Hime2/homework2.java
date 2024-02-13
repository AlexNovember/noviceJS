import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class VehicleTest {

    @Test
    void carInstanceIsAlsoVehicleInstance() {
        Car car = new Car("Toyota", "Camry", 2022);
        assertTrue(car instanceof Vehicle);
    }

    @Test
    void carCreatedWithFourWheels() {
        Car car = new Car("Toyota", "Camry", 2022);
        assertEquals(4, car.getNumWheels());
    }

    @Test
    void motorcycleCreatedWithTwoWheels() {
        Motorcycle motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
        assertEquals(2, motorcycle.getNumWheels());
    }

    @Test
    void carTestDriveSetsSpeedTo60() {
        Car car = new Car("Toyota", "Camry", 2022);
        car.testDrive();
        assertEquals(60, car.getSpeed());
    }

    @Test
    void motorcycleTestDriveSetsSpeedTo75() {
        Motorcycle motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
        motorcycle.testDrive();
        assertEquals(75, motorcycle.getSpeed());
    }

    @Test
    void carParkedSpeedIsZero() {
        Car car = new Car("Toyota", "Camry", 2022);
        car.testDrive();
        car.park();
        assertEquals(0, car.getSpeed());
    }

    @Test
    void motorcycleParkedSpeedIsZero() {
        Motorcycle motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
        motorcycle.testDrive();
        motorcycle.park();
        assertEquals(0, motorcycle.getSpeed());
    }
}