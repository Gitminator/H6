import Services.RoomService;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        RoomService roomService = new RoomService();
        List<String> serializedRooms = new ArrayList<String>();
        serializedRooms = roomService.GetRooms();

        for (String textRoom : serializedRooms
        ) {

            System.out.println("testing" + textRoom.toString());

        }
    }

}
