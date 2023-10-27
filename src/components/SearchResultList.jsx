import './SearchResultList.css'

const SearchResultList = ({ results, onItemClick }) => {
  return (
    <ul className="search-result-list">
      {results.map((result) => (
        <li key={result.objectID} onClick={() => onItemClick(result.objectID)}>
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResultList;
