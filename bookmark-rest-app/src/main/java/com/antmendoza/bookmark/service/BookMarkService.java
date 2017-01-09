package com.antmendoza.bookmark.service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import com.antmendoza.bookmark.model.BookMark;
import com.antmendoza.bookmark.model.BookMarkNull;
import com.antmendoza.bookmark.model.BookMarks;

public class BookMarkService {
	private static Set<BookMark> bookMarks = new HashSet<BookMark>();

	public BookMarkService() {

	}

	public BookMark byElementId(String elementBookmarkedId) {

		// FIXME orElse(new BookMarkNull(elementBookmarkedId) have to be null,
		// and return the apropiate status code in the entryPoint
		BookMark result = bookMarks.stream().filter(x -> elementBookmarkedId.equals(x.getElementId())).findFirst()
				.orElse(new BookMarkNull(elementBookmarkedId));

		return result;
	}

	public boolean remove(BookMark bookMark) {
		return bookMarks.remove(bookMark);
	}

	public BookMark updateOrCreate(BookMark bookMark) {
		BookMark result = byElementId(bookMark.getElementId());
		System.out.println("updateOrCreate" + result);

		String bookMarkId = null;
		// FIXME where #byElementId be fixed
		if (result != null && result.getBookMarkId() != null) {
			bookMarks.remove(bookMark);
			bookMarkId = bookMark.getBookMarkId();
		} else {
			bookMarkId = String.valueOf(new Random().nextInt());
		}

		BookMark newBookMark = new BookMark(bookMarkId, bookMark.getElementId(), bookMark.isMarked());

		bookMarks.add(newBookMark);

		return newBookMark;

	}

	public BookMarks all() {
		return new BookMarks(bookMarks);
	}

}
