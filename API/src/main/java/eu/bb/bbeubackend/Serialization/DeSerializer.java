package eu.bb.bbeubackend.Serialization;

import com.google.gson.Gson;
import eu.bb.bbeubackend.Objects.Room;

import java.util.ArrayList;
import java.util.List;

public class DeSerializer {
    public List<Room> DeserializeRooms(List<String> serializedRooms){
        Gson gson = new Gson();
        List<Room> rooms = new ArrayList<Room>();
        for (String temprooms: serializedRooms) {
            Room room = gson.fromJson(temprooms, Room.class);
            rooms.add(room);
        }
        return rooms;

    }
}
