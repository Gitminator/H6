package Services;

import DAOImpl.LocationData;
import Objects.Location;
import Objects.Room;
import Serialization.Serializer;

import java.util.ArrayList;
import java.util.List;

public class LocationService {
    Serializer serializer = new Serializer();
    LocationData locationData = new LocationData();

    public List<String> GetLocations(){
        System.out.println("Get rooms message");
        List<Location> locations = new ArrayList<Location>();
        List<String> serializedLocations = new ArrayList<String>();
        locations = locationData.GetLocations();
        serializedLocations = serializer.SerializeLocations(locations);

        return serializedLocations;
    };
}
