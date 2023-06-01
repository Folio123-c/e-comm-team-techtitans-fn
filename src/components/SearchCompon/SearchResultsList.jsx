import "./SearchResultsList.scss";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <SearchResult
            name={result.name}
            price={result.price}
            images={result.images}
            key={id}
          />
        );
      })}
    </div>
  );
}