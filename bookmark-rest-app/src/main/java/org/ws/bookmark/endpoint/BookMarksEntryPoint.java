package org.ws.bookmark.endpoint;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.ws.bookmark.model.BookMark;
import org.ws.bookmark.model.BookMarks;
import org.ws.bookmark.service.BookMarkService;

@Path("/bookmarks")
@Produces(APPLICATION_JSON)
public class BookMarksEntryPoint {

	private BookMarkService service;

	public BookMarksEntryPoint() {
		service = new BookMarkService();
	}

	@PUT
	@Path("")
	@Consumes({ APPLICATION_JSON })
	public Response updateBookMark(BookMark bookMark) {
		BookMark result = service.updateOrCreate(bookMark);
		return buildResponse(result);
	}

	@GET
	@Path("elementId/{elementId}")
	@Consumes({ APPLICATION_JSON })
	public Response bookMarkByElementId( @PathParam( "elementId" ) String elementId) {
		BookMark result = service.byElementId(elementId);
		
		
		System.out.println("byElementId entryPoint -> " + result);

		return buildResponse(result);
	}

	@GET
	@Path("")
	@Consumes({ APPLICATION_JSON })
	public Response all() {
		BookMarks result = service.all();
		return buildResponse(result);
	}

	private Response buildResponse(Object result) {
		return Response.ok(result).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
				.header("Access-Control-Max-Age", "2000").build();
	}

}