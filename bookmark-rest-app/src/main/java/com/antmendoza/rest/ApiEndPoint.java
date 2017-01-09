package com.antmendoza.rest;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.antmendoza.rest.common.RestResponse;
import com.antmendoza.rest.model.ApiInfo;

@Path("")
@Produces(APPLICATION_JSON)
public class ApiEndPoint {


	@GET
	@Path("")
	@Consumes({ APPLICATION_JSON })
	public Response info() {
		return new RestResponse(new ApiInfo()).ok();
	}
}
