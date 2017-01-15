package com.antmendoza.bookmarks.service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import com.antmendoza.bookmark.model.BookMark;
import com.antmendoza.bookmark.model.BookMarks;

public class BookMarkService {
	private static Set<BookMark> bookMarks = new HashSet<BookMark>();

	public BookMarkService() {

	}

	public BookMark find(String id) {
		BookMark result = bookMarks.stream().filter(x -> id.equals(x.getBookMarkId())).findFirst().orElse(null);
		return result;
	}

	public BookMark byElementId(String elementBookmarkedId) {
		BookMark result = bookMarks.stream().filter(x -> elementBookmarkedId.equals(x.getElementId())).findFirst()
				.orElse(null);
		return result;
	}

	public boolean remove(BookMark bookMark) {
		return bookMarks.remove(bookMark);
	}

	public BookMark createOrUpdate(BookMark bookMark) {
		BookMark result = byElementId(bookMark.getElementId());

		String bookMarkId = null;
		if (result != null) {
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
