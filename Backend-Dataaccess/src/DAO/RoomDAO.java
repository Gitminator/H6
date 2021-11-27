package DAO;

import Objects.Room;

import java.util.List;

public interface RoomDAO {

    List<Room> GetRooms();
    Room GetRoom(int id);
}
