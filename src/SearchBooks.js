import { useEffect } from "react";
import SearchBooksBar from "./SearchBooksBar";
import SearchGrid from "./SearchGrid";

const SearchBooks = ({query, setQuery, mergedInventory, searchInventoryLength, setPageTitle, updateShelf}) => {
    useEffect(() => {
        setPageTitle("MyReads | Search Books")
    })

    return (
        <div className="search-books">
            <SearchBooksBar query={query} setQuery={setQuery} />
            <div className="search-books-results">
                <div>
                    {
                    typeof mergedInventory === 'object' && mergedInventory.length > 0 && searchInventoryLength > 0
                        ? <SearchGrid mergedInventory={mergedInventory} updateShelf={updateShelf} />
                        : <p>Enter a valid search term to see results.</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBooks;