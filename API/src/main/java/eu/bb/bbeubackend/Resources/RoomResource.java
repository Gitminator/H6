package eu.bb.bbeubackend.Resources;

import eu.bb.bbeubackend.Objects.Room;
import eu.bb.bbeubackend.ResourceImpl.RoomImpl;
import eu.bb.bbeubackend.Serialization.Serializer;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

/**
 * Endpoint for rooms
 */
@Path("/room")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class RoomResource {
    RoomImpl roomImpl = new RoomImpl();

    /**
     * Henter alle rooms
     * @return liste af room
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> GetRooms()
    {
        List<String> rooms = new ArrayList<String>();
        rooms = roomImpl.GetRooms();


        return rooms;
    }
    /**
     * Henter et specifikt room
     * @return et room
     */
//    @GET
//    @Produces("application/json")
//    public Room GetRoom(int id)
//    {
//        Room room = new Room();
//
//
//
//        return room;
//    }






}
