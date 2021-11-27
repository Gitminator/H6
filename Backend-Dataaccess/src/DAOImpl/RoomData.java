package DAOImpl;

import DAO.RoomDAO;
import eu.BB.Handlers.DatabaseConnector;
import eu.BB.Handlers.Databasekinky;
import Objects.Room;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class RoomData implements RoomDAO {
    DatabaseConnector dbConnector = new DatabaseConnector();
    Room room = null;

    @Override
    public List<Room> GetRooms() {
        List<Room> rooms = new ArrayList<Room>();
        Room room = null;

        try{
            Connection con = dbConnector.GetConnector();

            System.out.println("Tring to access");
            Statement stmt=con.createStatement();
            System.out.println("Before execute");
            ResultSet rs=stmt.executeQuery("select Address, Price from Room");

            while(rs.next())
                rooms.add( room = new Room(rs.getString(1),rs.getInt(2)));
            System.out.println("Address:" + " " + room.getAddress() + " " + "Price" + room.getPrice());
            con.close();

        }
        catch(Exception e){ e.printStackTrace();}
        finally{
            return rooms;
        }
    }

    @Override
    public Room GetRoom(int id) {
        return null;
    }
}
