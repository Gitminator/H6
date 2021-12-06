package eu.BB.Handlers;

import org.junit.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnectorTest {

    DatabaseConnector connector;

//    @BeforeEach
//    void setup() {
//        connector = new DatabaseConnector();
//    }

    @Test
    public void testgetConnector() throws SQLException {
        Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/BBeuDB?useSSL=false&autoReconnect=true&allowPublicKeyRetrieval=true",
                "root",
                "P@ssW0rd");
//        assertTrue(con);
        System.out.println("Connectionstr " + con.toString() + " next "+ con.getClass() );
//        assertEquals(Connectionstrcom.mysql.cj.jdbc.ConnectionImpl, con.toString())

    }

    @Test
    public void connect() {
   Result result =  JUnitCore.runClasses(DatabaseConnector.class);
        for (Failure failure : result.getFailures()){
            System.out.println(failure.toString());
        }
        System.out.println("Result:" + result.wasSuccessful());
    }
}

