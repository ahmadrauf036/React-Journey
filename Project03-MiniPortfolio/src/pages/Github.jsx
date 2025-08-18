import { Octokit } from 'octokit';
import React from 'react'

const Github = () => {
  const octokit = new Octokit({ 
    auth: import.meta.env.VITE_API_KEY
  });

  return (
    <>{console.log(octokit)}</>
  )
}

export default Github