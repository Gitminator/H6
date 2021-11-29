package eu.bb.bbeubackend.Handlers;

import Services.LocationService;

import java.util.ArrayList;
import java.util.List;

public class ServerHandlerLocation {
    LocationService locationService;
    List<String> serializedLocations = new ArrayList<String>();

    String path = "Services";
    String className = "LocationService";
    public ServerHandlerLocation(){
        try {
            locationService = (LocationService) Class.forName(path + "."+ className).newInstance();

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public List<String> GetLocations(){
        try{
            serializedLocations = locationService.GetLocations();
        }
        catch(Exception e){
            e.printStackTrace();
        }


        return serializedLocations;

    };
}
