package org.ws.bookmark.service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import org.ws.bookmark.model.BookMark;
import org.ws.bookmark.model.BookMarks;

public class BookMarkService {
	private static Set<BookMark> bookMarks = new HashSet<BookMark>();

	public BookMarkService() {

		
		if(bookMarks.isEmpty()){
			
			// FIXME fake object
			bookMarks.add(new BookMark(1, "1", false));
			bookMarks.add(new BookMark(2, "2", true));
			
		}
	}

	public BookMark byElementId(String elementBookmarkedId) {

		BookMark result = bookMarks.stream().filter(x -> elementBookmarkedId.equals(x.getElementId())).findFirst()
				.orElse(null);

		return result;
	}

	public boolean remove(BookMark bookMark) {
		return bookMarks.remove(bookMark);
	}

	public BookMark updateOrCreate(BookMark bookMark) {
		BookMark result = byElementId(bookMark.getElementId());

		System.out.println("updateOrCreate" + result);
		
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
