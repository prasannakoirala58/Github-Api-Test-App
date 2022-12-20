import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

import './App.css';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';

function App() {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortFilter, setSortFilter] = useState('');

  const getRepos = async () => {
    console.log('get repos chalyo hai bhai log');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const username = searchQuery;
    const body = JSON.stringify({ username });

    try {
      const res = await axios.post('api/repos', body, config);
      console.log(res);
      setRepos(res.data.repos);
      console.log('run bhayo la bhai go');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>GitHub API Data</h1>
      <div className="container">
        <form className="search-bar" action="">
          <input
            type="text"
            className="search__input"
            placeholder="Search repo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search__button" onClick={getRepos}>
            <IconContext.Provider value={{ className: 'image' }}>
              <FiSearch size="1rem" />
            </IconContext.Provider>
          </button>
        </form>
        {console.log(repos)}
        {repos && repos.length > 0 ? (
          <Fragment>
            <h4>The repositories for this user are:</h4>
            <RepoList repos={repos} />
          </Fragment>
        ) : (
          <h4>No repositories found for searched user.</h4>
        )}
      </div>
    </div>
  );
}

export default App;
//<button onClick={getRepos}>Get Data</button>;
//{
//  /* <RepoList repos={repos} /> */
//}
//<RepoList />;

// const res = await axios({
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   url: 'http://localhost:5000/api/repos',
//   data: {
//     username: 'prasannakoirala58',
//   },
// });
