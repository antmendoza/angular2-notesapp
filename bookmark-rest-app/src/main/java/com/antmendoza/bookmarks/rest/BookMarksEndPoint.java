package com.antmendoza.bookmarks.rest;

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
import com.antmendoza.bookmarks.service.BookMarkService;
import com.antmendoza.rest.common.RestResponse;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

//@RequestScoped

@Path("/bookmarks")
@Produces(APPLICATION_JSON)
@Consumes(APPLICATION_JSON)
@Api("Booksmarks REST Endpoint")
public class BookMarksEndPoint {

	private BookMarkService service;

	public BookMarksEndPoint() {
		this(new BookMarkService());
	}

	public BookMarksEndPoint(BookMarkService service) {
		this.service = service;
	}

	@GET
	@Path("{id}")
	@ApiOperation(value = "Finds an bookmarks by id", response = BookMark.class)
	@ApiResponses(value = { 
		    @ApiResponse(code = 200, message = "Successful retrieval of BookMark entity", response = BookMark.class),
			@ApiResponse(code = 400, message = "Invalid input"),
			@ApiResponse(code = 404, message = "BookMark not found") 
	})
	public Response find(@PathParam("id") String elementId) {
		BookMark result = service.byElementId(elementId);
		if (result == null) {
			return Response.status(Response.Status.NOT_FOUND).build();
		}
		return new RestResponse(result).ok();
	}
	
	@GET
	@Path("elementId/{elementId}")
	@ApiOperation(value = "Finds an bookmarks by elementId", response = BookMark.class)
	@ApiResponses(value = { 
		    @ApiResponse(code = 200, message = "Successful retrieval of BookMark entity", response = BookMark.class),
			@ApiResponse(code = 400, message = "Invalid input"),
			@ApiResponse(code = 404, message = "BookMark not found") 
	})
	public Response bookMarkByElementId(@PathParam("elementId") String elementId) {
		BookMark result = service.byElementId(elementId);
		if (result == null) {
			return Response.status(Response.Status.NOT_FOUND).build();
		}
		return new RestResponse(result).ok();
	}

	
	
	
	
	@PUT
	@Path("")
	@ApiOperation(value = "Create or update the bookMark")
	@ApiResponses(value = {
		    @ApiResponse(code = 200, message = "Successful create or update of BookMark entity", response = BookMark.class),
			@ApiResponse(code = 400, message = "Invalid input"),
	})
	public Response updateBookMark(BookMark bookMark) {
		BookMark result = service.createOrUpdate(bookMark);
		return new RestResponse(result).ok();
	}

	
	
	@GET
	@Path("")
    @ApiOperation(value = "Finds all bookMarks", response = BookMarks.class, responseContainer = "List")
    @ApiResponses(value = {
		    @ApiResponse(code = 200, message = "Successful retrieval all BookMarks entities", response = BookMarks.class),
		    @ApiResponse(code = 400, message = "Invalid input"),
		    @ApiResponse(code = 404, message = "BookMarks not found")
    })
	public Response all() {
		BookMarks result = service.all();
		return new RestResponse(result).ok();
	}

}