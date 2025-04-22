package cheko.example.checko.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "menu")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // If using auto-increment in DB
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private Integer calorie;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private Double lat;

    @Column(nullable = false)
    private Double lng;


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public String getImage() {
        return image;
    }

    public Integer getCalorie() {
        return calorie;
    }

    public String getCategory() {
        return category;
    }

    public Double getLat() {
        return lat;
    }

    public Double getLng() {
        return lng;
    }

    
}
