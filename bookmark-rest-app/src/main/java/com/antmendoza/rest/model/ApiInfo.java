package com.antmendoza.rest.model;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeInfo(use = Id.NAME, include = WRAPPER_OBJECT)

@JsonTypeName("info")
public class ApiInfo implements Serializable{

	private final boolean enable;

	public ApiInfo() {
		this.enable = true;
	}

	public boolean isEnable() {
		return enable;
	}

}
