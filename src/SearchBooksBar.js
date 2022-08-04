import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBooksBar = ({query, setQuery, setPageTitle}) => {
    const updateSearchQuery = (query) => {
        setQuery(query);
    };

    useEffect(() => {
        return () => {
            setQuery("");
        }
    }, [])

    return (
        <div className="search-books-bar">
            <Link to={"/"} className={"close-search"} >Close</Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={query}
                    onChange={(e) => updateSearchQuery(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBooksBar;