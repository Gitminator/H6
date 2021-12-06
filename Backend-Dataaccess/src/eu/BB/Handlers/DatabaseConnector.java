package eu.BB.Handlers;


import java.sql.Connection;
import java.sql.DriverManager;

/**
 * Denne klasse står for driver hentning (Mysql)
 * Efterfølgende retunere den en Connection
 */
public class DatabaseConnector {
    public Connection GetConnector(){
        Connection con =Connect();
        return con;
    }
    public DatabaseConnector(){

         }

    /**
     *
     * @return en driver manager som bruges til at oprette forbindelse til databasen
     */
    protected Connection Connect(){
        Connection con = null;
        try{
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/BBeuDB?useSSL=false&autoReconnect=true&allowPublicKeyRetrieval=true", "root", "P@ssW0rd");

        }catch(Exception e){e.printStackTrace();}

        return con;
    }
}
