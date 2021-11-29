package Objects;

public class Location {
    public int postalnumber;
    public String city;

    public int getPostalnumber() {
        return postalnumber;
    }

    public void setPostalnumber(int postalnumber) {
        this.postalnumber = postalnumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Location(int postalnumber, String city) {
        this.postalnumber = postalnumber;
        this.city = city;
    }
}
