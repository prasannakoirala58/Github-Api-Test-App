import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

import './App.css';
import RepoList from './components/RepoList';

function App() {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const getRepos = async (e) => {
    e.preventDefault();
    console.log('get repos chalyo ');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const username = searchQuery;
    console.log(sortBy);
    const sort = sortBy;
    const body = JSON.stringify({ username, sort });

    try {
      const res = await axios.post('api/repos', body, config);
      setRepos(res.data.repos);
      console.log('run bhayo la bhai go');
    } catch (err) {
      console.log(err);
    }
    setSearchQuery('');
  };

  return (
    <div className="App">
      <h1 className="heading-1">GitHub API Data</h1>
      <div className="container">
        <form className="search-bar" action="">
          <select
            id="sortBy"
            value={sortBy}
            className="select__sort"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option selected disabled>
              Sort by:{' '}
            </option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="updated">Updated</option>
          </select>
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
            <div className="repo-list">
              <h4 className="heading-4">The repositories for this user are:</h4>
              <RepoList repos={repos} />
            </div>
          </Fragment>
        ) : (
          <></>
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
