import BookCard from './BookCard';

const BookGrid = ({bookInventory, updateShelf, currentShelf}) => {
    return (
        <ol className="books-grid">
            {bookInventory.map((book) => (
                book.shelf === currentShelf.shelfName
                    ? (<li key={book.id}><BookCard book={book} updateShelf={updateShelf} /></li>)
                    : null
            ))}
        </ol>
    ) 
} 

export default BookGrid;