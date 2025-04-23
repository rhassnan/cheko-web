package cheko.example.checko.repo;


import java.util.List;

import cheko.example.checko.model.Menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
 
@Repository
public interface MenuRepo extends JpaRepository<Menu, Integer> {
    @Query("SELECT m FROM Menu m WHERE LOWER(m.name) LIKE LOWER(CONCAT('%', :text, '%')) OR LOWER(m.description) LIKE LOWER(CONCAT('%', :text, '%'))")
    List<Menu> searchByNameOrDescription(String text);

    @Query("SELECT m FROM Menu m WHERE m.category = :category ORDER BY m.calorie DESC")
    List<Menu> findTopByCategoryOrderByCalorieDesc(String category);
        @Query(value = """
        SELECT * FROM (
            SELECT *, 
                ROW_NUMBER() OVER (PARTITION BY category ORDER BY calorie DESC) AS rk
            FROM menu
        ) AS ranked
        WHERE rk = 2
    """, nativeQuery = true)
    List<Menu> findSecondHighestPerEachCategory();


 
}
