import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoDetails = () => {
  const { owner, repo } = useParams();
  console.log('owner', owner);
  console.log('repo', repo);
  const [repoDetails, setRepoDetails] = useState({});

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      try {
        const res = await axios.post(`api/repoDetails`, { owner, repo }, config);
        setRepoDetails(res.repo);
        console.log('repo set vayo', res.repo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRepoDetails();
  }, []);

  return <div>{repoDetails.name}</div>;
};

export default RepoDetails;
