import { useEffect } from "react";
import { Link } from "react-router-dom";
import CreateBookShelf from "./CreateBookShelf";

const MyReadsView = ({bookInventory, setPageTitle, updateShelf}) => {
    const currentShelf = {shelfHeader: "Currently Reading", shelfName: "currentlyReading"};
    const wantToShelf = {shelfHeader: "Want To Read", shelfName: "wantToRead"};
    const readShelf = {shelfHeader: "Read", shelfName: "read"};

    useEffect(() => {
        setPageTitle("MyReads | Shelf View")
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <CreateBookShelf 
                        bookInventory={bookInventory} 
                        currentShelf={currentShelf} 
                        updateShelf={updateShelf} 
                    />
                    <CreateBookShelf 
                        bookInventory={bookInventory} 
                        currentShelf={wantToShelf} 
                        updateShelf={updateShelf} 
                    />
                    <CreateBookShelf 
                        bookInventory={bookInventory} 
                        currentShelf={readShelf} 
                        updateShelf={updateShelf} 
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to={"/SearchBooks"} >Add a book</Link>
            </div>
        </div>
    )
}

export default MyReadsView;