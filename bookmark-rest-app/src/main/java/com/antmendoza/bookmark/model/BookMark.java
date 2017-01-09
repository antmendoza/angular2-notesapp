package com.antmendoza.bookmark.model;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.fasterxml.jackson.annotation.JsonTypeName;

@JsonTypeInfo(use = Id.NAME, include = WRAPPER_OBJECT)

@JsonTypeName("bookMark")
public class BookMark {

	private String bookMarkId;
	private String elementId;
	private boolean marked;

	public BookMark() {
	}

	public BookMark(String bookMarkId, String elementId, boolean marked) {
		this.bookMarkId = bookMarkId;
		this.elementId = String.valueOf(elementId);
		this.marked = marked;
	}

	public BookMark(Integer bookMarkId, String elementId, boolean marked) {
		this(String.valueOf(bookMarkId), elementId, marked);
	}

	public boolean isMarked() {
		return marked;
	}

	public String getBookMarkId() {
		return bookMarkId;
	}

	public String getElementId() {
		return elementId;
	}

	public void setBookMarkId(String bookMarkId) {
		this.bookMarkId = bookMarkId;
	}

	public void setElementId(String elementId) {
		this.elementId = elementId;
	}

	public void setMarked(boolean marked) {
		this.marked = marked;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((bookMarkId == null) ? 0 : bookMarkId.hashCode());
		result = prime * result + ((elementId == null) ? 0 : elementId.hashCode());
		result = prime * result + (marked ? 1231 : 1237);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookMark other = (BookMark) obj;
		if (bookMarkId == null) {
			if (other.bookMarkId != null)
				return false;
		} else if (!bookMarkId.equals(other.bookMarkId))
			return false;
		if (elementId == null) {
			if (other.elementId != null)
				return false;
		} else if (!elementId.equals(other.elementId))
			return false;
		if (marked != other.marked)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BookMark: {bookMarkId :" + bookMarkId + " ;elementId: " + elementId + " ; marked: " + marked + "}";
	}

}
