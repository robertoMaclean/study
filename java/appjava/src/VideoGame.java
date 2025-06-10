import java.util.Arrays;

public class VideoGame {
    private String name;
    private double price;
    private String category;
    private static final String[] categories = {"action", "rpg", "adventure", "racing"};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        if(Arrays.stream(categories).anyMatch(cat -> cat.equalsIgnoreCase(category))) {
            this.category = category;
        }
    }
}
