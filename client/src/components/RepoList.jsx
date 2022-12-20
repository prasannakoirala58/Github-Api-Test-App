import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RepoList = ({ repos }) => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleClick = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div>
      <h4>The repositories for this user are: {selectedRepo}</h4>
      {/* {console.log(repos)} */}
      <ul>
        {repos &&
          repos.map((repo) => (
            <Link to={`/repos/${repo.owner.login}/${repo.name}`}>
              <div key={repo.id} className="card">
                <div className="container-2">
                  <h4>
                    <b>{repo.name}</b>
                  </h4>
                  <p>{repo.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default RepoList;
