import React, { useState } from 'react';

const RepoList = ({ repos }) => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleClick = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div>
      <h4>The repositories for this user are: {selectedRepo}</h4>
      <ul>
        {repos &&
          repos.map((repo) => (
            <div key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RepoList;
