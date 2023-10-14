import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import API_KEY from "./keys.js";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [category, setCategory] = useState("general");
  const [loadMore, setLoadMore] = useState(20);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&pageSize=${loadMore}$category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResult, loadMore, category]);
  return (
    <div className="App">
      <NavBar setCategory={setCategory} />
      {newsResult && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResult}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
    </div>
  );
}

export default App;
