package Serialization;

import Objects.Location;
import Objects.Room;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

/**
 * Står for Serializering af systems modeler
 */
public class Serializer {
    public List<String> SerializeRooms(List<Room> rooms) {

        List<String> serializedRooms = new ArrayList<String>();

        for (Room room : rooms) {

            serializedRooms.add(new Gson().toJson(room));
        }
        return serializedRooms;
    }

    public List<String> SerializeLocations(List<Location> locations) {

        List<String> serializedLocations = new ArrayList<String>();

        for (Location location : locations) {

            serializedLocations.add(new Gson().toJson(location));
        }
        return serializedLocations;
    }
}
