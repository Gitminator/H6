package eu.bb.bbeubackend.Serialization;

import com.google.gson.Gson;
import eu.bb.bbeubackend.Objects.Location;
import eu.bb.bbeubackend.Objects.Room;

import java.util.ArrayList;
import java.util.List;

public class DeSerializer {
    public List<Room> DeserializeRooms(List<String> serializedRooms){
        Gson gson = new Gson();
        List<Room> rooms = new ArrayList<Room>();
        for (String tempRoom: serializedRooms) {
            Room room = gson.fromJson(tempRoom, Room.class);
            rooms.add(room);
        }
        return rooms;

    }

    public List<Location> DeserializeLocations(List<String> serializedLocations){
        Gson gson = new Gson();
        List<Location> locations = new ArrayList<Location>();
        for (String tempLocation: serializedLocations) {
            Location location = gson.fromJson(tempLocation, Location.class);
            locations.add(location);
        }
        return locations;

    }
}
