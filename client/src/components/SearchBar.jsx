import React, { Fragment, useState } from 'react';
import axios from 'axios';

function SearchBar() {
  // State for the search query and sorting filter

  const [repos, setRepos] = useState([]);

  // Function to handle the search button click
  const handleSearchClick = async (e) => {
    // Perform the search and sorting here, using the searchQuery and sortFilter state values
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const username = 'prasannakoirala58';
    const body = JSON.stringify({ username });

    try {
      const res = await axios.post('api/repos', body, config);
      console.log(res);
      //   setRepos(res.data.repos);
    } catch (err) {
      console.log(err);
    }
  };

  return <div>hello</div>;
}

export default SearchBar;
