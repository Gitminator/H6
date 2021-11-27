package Objects;

public class Room {
    private String address;
    private int price;

    public String getAddress() {
        return address;
    }
    public int getPrice() {
        return price;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public Room(String address, int price) {
        this.address = address;
        this.price = price;
    }
}
