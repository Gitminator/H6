package eu.bb.bbeubackend.Resources;

import eu.bb.bbeubackend.Objects.Room;
import eu.bb.bbeubackend.ResourceImpl.RoomImpl;
import eu.bb.bbeubackend.Serialization.Serializer;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.ArrayList;
import java.util.List;

/**
 * Endpoint for rooms
 */
@Path("/room")
public class RoomResource {
    Serializer serializer;
    RoomImpl roomImpl;

    /**
     * Henter alle rooms
     * @return liste af room
     */
    @GET
    @Produces("application/json")
    public List<String> GetRooms()
    {
        List<String> rooms = new ArrayList<String>();


        return rooms;
    }
    /**
     * Henter et specifikt room
     * @return et room
     */
    @GET
    @Produces("application/json")
    public Room GetRoom(int id)
    {
        Room room = new Room();



        return room;
    }






}
