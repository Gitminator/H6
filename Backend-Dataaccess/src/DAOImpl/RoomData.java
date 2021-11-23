package DAOImpl;

import DAO.RoomDAO;
import Handlers.DatabaseConnector;
import Objects.Room;

import java.util.List;

public class RoomData implements RoomDAO {
    DatabaseConnector dbConnector;
    Room room = new Room();

    @Override
    public List<String> GetRooms() {
        return null;
    }

    @Override
    public Room GetRoom(int id) {
        return null;
    }
}
