package com.antmendoza.rest.common;

import javax.ws.rs.core.Response;

public class RestResponse {

	private final Object result;

	public RestResponse(Object result) {
		this.result = result;
	}

	public Response ok() {
		return Response.status(200).entity(result)
				.build();
	}
}
