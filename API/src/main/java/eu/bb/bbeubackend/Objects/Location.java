package eu.bb.bbeubackend.Objects;

public class Location {
    public int postalcode;
    public String city;

    public int getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(int postalcode) {
        this.postalcode = postalcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Location(int postalcode, String city) {
        this.postalcode = postalcode;
        this.city = city;
    }
}
