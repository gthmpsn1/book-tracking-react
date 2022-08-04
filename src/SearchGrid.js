import BookCard from "./BookCard";

const SearchGrid = ({mergedInventory, updateShelf}) => {
    return (
        <ol className="books-grid">
            {mergedInventory.map((book) => (
                (<li key={book.id}>
                    <BookCard book={book} updateShelf={updateShelf} />
                </li>)
            ))}
        </ol>
    )
}

export default SearchGrid;