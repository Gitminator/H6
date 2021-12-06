package Services;

import DAOImpl.RoomData;
import Objects.Room;
import Serialization.Serializer;

import java.util.ArrayList;
import java.util.List;

public class RoomService {
    Serializer serializer = new Serializer();
    RoomData roomData = new RoomData();

    /**
     *
     * @return En serialiseret liste af rum
     */
   public List<String> GetRooms(){
        List<Room> rooms = new ArrayList<Room>();
        List<String> serializedRooms = new ArrayList<String>();
        rooms = roomData.GetRooms();
        serializedRooms = serializer.SerializeRooms(rooms);

        return serializedRooms;
    };

   public Room GetRoom(int id){
        Room room = null;

        return room;
    };
}
