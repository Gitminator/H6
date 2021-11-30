package eu.bb.bbeubackend.ResourceImpl;

import eu.bb.bbeubackend.Handlers.ServerHandlerLocation;
import eu.bb.bbeubackend.Serialization.DeSerializer;

import java.util.ArrayList;
import java.util.List;

public class LocationImpl {
    ServerHandlerLocation handlerLocation = new ServerHandlerLocation();
    DeSerializer deserializer = new DeSerializer();

    /**
     * Henter alle lokationer
     * @return liste af lokation
     */
    public List<String> GetLocations()
    {
        List<String> serializedRooms = new ArrayList<String>();
//        List<Room> rooms = new ArrayList<Room>();
        serializedRooms = handlerLocation.GetLocations();
//        rooms = deserializer.DeserializeRooms(serializedRooms);

        return serializedRooms;
    }
}
