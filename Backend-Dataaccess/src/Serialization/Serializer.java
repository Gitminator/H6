package Serialization;

import Objects.Room;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

/**
 * Står for Serializering af systems modeler
 */
public class Serializer {
    public List<String> SerializePlaces(List<Room> rooms) {

        List<String> serializedRooms = new ArrayList<String>();

        for (Room room : rooms) {

            serializedRooms.add(new Gson().toJson(room));
        }
        return serializedRooms;
    }
}
