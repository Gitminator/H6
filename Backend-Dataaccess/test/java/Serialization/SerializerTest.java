package Serialization;

import Objects.Location;
import Objects.Room;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class SerializerTest {
    Serializer serializer = new Serializer();

    @Test
    public void serializeRooms() {
        List<Room> rooms = new ArrayList<Room>();
        List<String> serializedRooms = new ArrayList<String>();
        rooms.add(new Room("Vejvej 2", 500));

        serializedRooms = serializer.SerializeRooms(rooms);
        String firstRoom = serializedRooms.get(0);

        Assert.assertTrue(firstRoom.contains("Vejvej 2"));
        Assert.assertFalse(firstRoom.contains("Vejvej2"));

    }

    @Test
    public void serializeLocations() {
        List<Location> locations = new ArrayList<Location>();
        List<String> serializedLocations = new ArrayList<String>();
        locations.add(new Location(4000, "Roskilde"));

        serializedLocations = serializer.SerializeLocations(locations);
        String firstLocation = serializedLocations.get(0);

        Assert.assertTrue(firstLocation.contains("Roskilde"));
        Assert.assertFalse(firstLocation.contains("Roskilde2"));


    }


}
