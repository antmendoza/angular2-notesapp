package com.antmendoza.bookmark.model;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeInfo(use = Id.NAME, include = WRAPPER_OBJECT)

@JsonTypeName("bookMarks")
public class BookMarks {

	private Set<BookMark> list = new HashSet<BookMark>();

	public BookMarks() {
	}

	public BookMarks(Set<BookMark> bookMarks) {
		this.list = bookMarks;
	}

	public Set<BookMark> getList() {
		return list;
	}

}
