package com.antmendoza.bookmark.endpoint;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.antmendoza.bookmark.model.BookMark;
import com.antmendoza.bookmark.model.BookMarks;
import com.antmendoza.bookmark.service.BookMarkService;
import com.antmendoza.rest.common.RestResponse;

@Path("/bookmarks")
@Produces(APPLICATION_JSON)
public class BookMarksEndPoint {

	private BookMarkService service;

	public BookMarksEndPoint() {
		service = new BookMarkService();
	}

	@PUT
	@Path("")
	@Consumes({ APPLICATION_JSON })
	public Response updateBookMark(BookMark bookMark) {
		BookMark result = service.updateOrCreate(bookMark);
		return new RestResponse(result).ok();
	}

	@GET
	@Path("elementId/{elementId}")
	@Consumes({ APPLICATION_JSON })
	public Response bookMarkByElementId(@PathParam("elementId") String elementId) {
		BookMark result = service.byElementId(elementId);

		System.out.println("byElementId entryPoint -> " + result);

		return new RestResponse(result).ok();
	}

	@GET
	@Path("")
	@Consumes({ APPLICATION_JSON })
	public Response all() {
		BookMarks result = service.all();
		return new RestResponse(result).ok();
	}

}