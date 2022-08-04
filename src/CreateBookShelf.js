import BookGrid from "./BookGrid";

const CreateBookShelf = ({bookInventory, currentShelf, updateShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{currentShelf.shelfHeader}</h2>
            <div className="bookshelf-books">
                <BookGrid bookInventory={bookInventory} updateShelf={updateShelf} currentShelf={currentShelf} />                   
            </div>
        </div>
    )
}

export default CreateBookShelf;