package Main;

import eu.bb.bbeubackend.ResourceImpl.RoomImpl;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        RoomImpl roomImpl = new RoomImpl();
        List<String> serializedRooms = new ArrayList<String>();
        serializedRooms = roomImpl.GetRooms();

        for (String textRoom : serializedRooms
        ) {

         System.out.println("testing" + textRoom.toString());

        }

    }
}
