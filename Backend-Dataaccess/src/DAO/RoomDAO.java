package DAO;

import Objects.Room;

import java.util.List;

/**
 * Date access object for objektet rum
 */
public interface RoomDAO {

    List<Room> GetRooms();
    Room GetRoom(int id);
}
