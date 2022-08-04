import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import {Routes, Route} from "react-router-dom";
import SearchBooks from "./SearchBooks";
import MyReadsView from "./MyReadsView";

function App() {
  const [query, setQuery] = useState("");
  const [searchInventory, setSearchInventory] = useState([]);
  const [bookInventory, setBookInventory] = useState([]);
  const [mergedInventory, setMergedInventory] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  // This will run when the page first loads and whenever the title changes
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  //fetch books that are on a shelf
  const readsViewFetch = async () => {
    const res = await BooksAPI.getAll();
    setBookInventory(res);
  };

  //fetch search results based on query
  const searchViewFetch = async () => {
    const res = await BooksAPI.search(query, 20);
    setSearchInventory(res);
  };

  //update book shelf when in my reads
  const updateShelf = async (newShelf, bookToUpdate) => {
    await BooksAPI.update(bookToUpdate, newShelf);
    readsViewFetch();
    if (query.length > 0) {
      searchViewFetch();
    }
  }; 

  useEffect(() => {
    let tempSearch = searchInventory;
    let booksOnShelf = bookInventory;
    if (tempSearch.length > 0) {
      tempSearch.forEach((searchBook) => {
        if (booksOnShelf.length > 0) {
          const book = booksOnShelf.find((book) => book.id === searchBook.id);
          searchBook.shelf = book && book.shelf ? book.shelf : "none";
        }
      })
      setMergedInventory(tempSearch);
    }
    console.log(bookInventory, searchInventory, mergedInventory);
  }, [bookInventory, searchInventory]);

  //fetch my reads display inventory
  useEffect(() => {
    let abortFetch = false;
    const getBooks = async () => {
        if (!abortFetch) {
            readsViewFetch();
        }
    };
    getBooks();
    return () => {
        abortFetch = true;
    }
  }, [])

  //update search results on query change
  useEffect(() => {
    let abortFetch = false;

    const searchBooks = async () => {
      if (!abortFetch) {
        if (query.length !== 0) {
            await searchViewFetch();
        } 
        if (query.length === 0) {
            setMergedInventory([])
        }
      }
    }; 
    searchBooks();
    return () => {
        abortFetch = true;
    }
  }, [query])


  return (
    <div className="app">
      <Routes>
        <Route 
          exact path={"/"} element={<MyReadsView bookInventory={bookInventory} setPageTitle={setPageTitle} updateShelf={updateShelf} /> }>
        </Route>
        <Route 
          path={"/SearchBooks"} 
          element={<SearchBooks query={query} setQuery={setQuery} mergedInventory={mergedInventory} searchInventoryLength={searchInventory.length} setPageTitle={setPageTitle} updateShelf={updateShelf} /> }>
        </Route>
      </Routes>   
    </div>
  );
}

export default App;
