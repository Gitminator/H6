package DAO;

import Objects.Room;

import java.util.List;

public interface RoomDAO {
    List<String> GetRooms();
    Room GetRoom(int id);
}
