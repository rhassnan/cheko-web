package cheko.example.checko.dto;


import lombok.Data;

@Data
public class MenuDto {
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private String image;
    private Integer calorie;
    private String category;
    private Double lat;
    private Double lng;

    // Full-args constructor
    public MenuDto(Integer id, String name, String description, Double price, String image,
                   Integer calorie, String category, Double lat, Double lng) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.calorie = calorie;
        this.category = category;
        this.lat = lat;
        this.lng = lng;
    }

    // Getters (add setters if needed)

    public Integer getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public Double getPrice() { return price; }
    public String getImage() { return image; }
    public Integer getCalorie() { return calorie; }
    public String getCategory() { return category; }
    public Double getLat() { return lat; }
    public Double getLng() { return lng; }
}
