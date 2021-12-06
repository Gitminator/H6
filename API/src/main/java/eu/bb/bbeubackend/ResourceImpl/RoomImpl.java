package eu.bb.bbeubackend.ResourceImpl;

import eu.bb.bbeubackend.Handlers.ServerHandlerRoom;
import eu.bb.bbeubackend.Objects.Room;
import eu.bb.bbeubackend.Serialization.DeSerializer;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import java.util.ArrayList;
import java.util.List;

public class RoomImpl {
    ServerHandlerRoom handlerRoom = new ServerHandlerRoom();

    /**
     * Henter alle rooms
     * @return liste af room
     */
    public List<String> GetRooms()
    {
        List<String> serializedRooms = new ArrayList<String>();
        serializedRooms = handlerRoom.GetRooms();

        return serializedRooms;
    }
    /**
     * Henter et specifikt room
     * @return et room
     */
    public Room GetRoom(int id)
    {
        Room room = new Room();


        return room;
    }
}
