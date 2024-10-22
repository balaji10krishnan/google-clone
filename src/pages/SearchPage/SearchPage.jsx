import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchCard from "../../component/SearchCard/SearchCard";
import classes from "./SearchPage.module.css";
import SearchHeader from "../../component/SearchHeader/SearchHeader";
import { CircularProgress } from "@mui/material";
const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState(location?.state?.query);
  const [linkItems, setLinkItems] = useState([]);
  const [timeRes, setTimeRes] = useState({
    searchTime: 0.491045,
    formattedSearchTime: "0.49",
    totalResults: "16620000000",
    formattedTotalResults: "16,620,000,000",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (query) => {
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CX}&q=${query}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      setLinkItems(data.items);
      setTimeRes(data.searchInformation);
    } catch (err) {
      console.log("error", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    fetchData(query);
  }, [query]);
  return (
    <>
      <SearchHeader query={query} setQuery={setQuery} />
      <div className={classes["search-container"]}>
        {!loading ? (
          <>
            <div className={classes["time"]}>
              About {timeRes.totalResults} results (
              {timeRes.formattedSearchTime}) seconds for {query}
            </div>
            {linkItems.map((item) => (
              <SearchCard {...item} />
            ))}
          </>
        ) : (
          <div style={{ width: "fit-content" }}>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};
export default SearchPage;
