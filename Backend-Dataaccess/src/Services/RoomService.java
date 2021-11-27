package Services;

import DAOImpl.RoomData;
import Objects.Room;
import Serialization.Serializer;

import java.util.ArrayList;
import java.util.List;

public class RoomService {
    Serializer serializer = new Serializer();
    RoomData roomData = new RoomData();

   public List<String> GetRooms(){
       System.out.println("Get rooms message");
        List<Room> rooms = new ArrayList<Room>();
        List<String> serializedRooms = new ArrayList<String>();
        rooms = roomData.GetRooms();
        serializedRooms = serializer.SerializePlaces(rooms);

        return serializedRooms;
    };

   public Room GetRoom(int id){
        Room room = null;

        return room;
    };
}
