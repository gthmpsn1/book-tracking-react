const BookCard = ({book, updateShelf}) => {
    const handleChange = (e, book) => {
        const newShelf = e;
        updateShelf(newShelf, book);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{
                        width: 128, 
                        height: 193, 
                        backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : `url(https://cataas.com/cat?height=193)`
                            }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={e => handleChange(e.target.value, book)} value={book.shelf} >
                        <option value="" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.shelf}</div>
            {book.authors ? <div className="book-authors">{book.authors.toString()}</div> : <div className="book-authors">No author</div>}
        </div>
    )
}

export default BookCard;