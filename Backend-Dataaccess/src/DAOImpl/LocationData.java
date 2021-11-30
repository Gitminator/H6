package DAOImpl;

import DAO.LocationDAO;
import Objects.Location;
import Objects.Room;
import eu.BB.Handlers.DatabaseConnector;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class LocationData implements LocationDAO {

    DatabaseConnector dbConnector = new DatabaseConnector();

    @Override
    public List<Location> GetLocations() {
        List<Location> locations = new ArrayList<Location>();
        Location location = null;

        try{
            Connection con = dbConnector.GetConnector();

            Statement stmt=con.createStatement();
            ResultSet rs=stmt.executeQuery("select Postalcode, City from Location");

            while(rs.next())
                locations.add( location = new Location(rs.getInt(1),rs.getString(2)));
            System.out.println("postnummer:" + " " + location.getPostalcode() + " " + "by" + location.getCity());
            con.close();

        }
        catch(Exception e){ e.printStackTrace();}
        finally{
            return locations;
        }
    }
}
