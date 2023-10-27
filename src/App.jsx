import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResultList from './components/SearchResultList';
import PostDetail from './components/PostDetail';
import hnApi from './services/hnApi';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSearch = async (query) => {
    const results = await hnApi.search(query);
    setSearchResults(results);
  };

  const handleItemClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Hacker News Search App</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <SearchResultList results={searchResults} onItemClick={handleItemClick} />
        {selectedPostId && <PostDetail postId={selectedPostId} />}
      </main>
    </div>
  );
};

export default App;