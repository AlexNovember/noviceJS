import static org.junit.Assert.assertEquals;

import org.junit.Test;
import java.util.Arrays;
import java.util.Collections;

public class AverageComparatorTest {
    @Test
    public void testCompareAverages_FirstListGreater() {
        AverageComparator comparator = new AverageComparator();
        String result = comparator.compareAverages(Arrays.asList(1, 2, 3), Arrays.asList(4, 5, 6));
        assertEquals("Первый список имеет большее среднее значение", result);
    }

    @Test
    public void testCompareAverages_SecondListGreater() {
        AverageComparator comparator = new AverageComparator();
        String result = comparator.compareAverages(Arrays.asList(1, 2, 3), Arrays.asList(7, 8, 9));
        assertEquals("Второй список имеет большее среднее значение", result);
    }

    @Test
    public void testCompareAverages_EqualAverages() {
        AverageComparator comparator = new AverageComparator();
        String result = comparator.compareAverages(Arrays.asList(1, 2, 3), Arrays.asList(2, 2, 3));
        assertEquals("Средние значения равны", result);
    }

    @Test
    public void testCompareAverages_EmptyLists() {
        AverageComparator comparator = new AverageComparator();
        String result = comparator.compareAverages(Collections.emptyList(), Collections.emptyList());
        assertEquals("Средние значения равны", result);
    }    
}