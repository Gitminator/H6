package eu.bb.bbeubackend.Handlers;

import Objects.Room;
import Services.RoomService;

import java.util.ArrayList;
import java.util.List;

public class ServerHandlerRoom {
    RoomService roomService;
    List<String> serializedRooms = new ArrayList<String>();

    String path = "Services";
    String className = "RoomService";
    public ServerHandlerRoom(){
        try {
            roomService = (RoomService) Class.forName(path + "."+ className).newInstance();

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public List<String> GetRooms(){
        try{
            serializedRooms = roomService.GetRooms();
        }
        catch(Exception e){
            e.printStackTrace();
        }


        return serializedRooms;

    };

//    Room GetRoom(int id){
//        Room room = new Room();
//
//        return room;
//    };

}
