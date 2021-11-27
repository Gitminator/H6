package eu.BB.Handlers;

import java.sql.Connection;
import java.sql.DriverManager;

public class Databasekinky {
    public Connection GetConnector(){
        Connection con =Connect();
        return con;
    }
    public Databasekinky(){
        System.out.println("******************************************************************************************************************************************************************************************************************************************************************************");
        System.out.println("******************************************************************************************************************************************************************************************************************************************************************************");
    }

    protected Connection Connect(){
        Connection con = null;
        System.out.println("Before sql");
        try{
//            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
            con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/BBeuDB?useSSL=false&autoReconnect=true&allowPublicKeyRetrieval=true", "root", "P@ssW0rd");
            if (con == null){
                System.out.println("Con is null");
            }
            else{
                System.out.println(con.toString());
            }
        }catch(Exception e){e.printStackTrace();}

        return con;
    }
}
