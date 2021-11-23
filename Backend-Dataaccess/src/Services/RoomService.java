package Services;

import DAOImpl.RoomData;
import Objects.Room;

import java.util.ArrayList;
import java.util.List;

public class RoomService {
    RoomData roomData = new RoomData();


    List<String> GetRooms(){
        List<String> rooms = new ArrayList<String>();

        return rooms;
    };

    Room GetRoom(int id){
        Room room = new Room();

        return room;
    };
}
