package eu.bb.bbeubackend.Resources;

import eu.bb.bbeubackend.ResourceImpl.LocationImpl;
import eu.bb.bbeubackend.ResourceImpl.RoomImpl;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

/**
 * Endpoint for rooms
 */
@Path("/location")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LocationResource {

    LocationImpl locationImpl = new LocationImpl();

    /**
     * Henter alle rooms
     *
     * @return liste af room
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> GetLocations() {
        List<String> locations = new ArrayList<String>();
        locations = locationImpl.GetLocations();

        return locations;
    }
}
