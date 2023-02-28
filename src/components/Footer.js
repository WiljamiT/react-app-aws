import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const { loading, error, data } = useFetch("https://api.github.com/repos/WiljamiT/react-app-aws/commits");
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data)

  return (
    <footer>
      <div className="logos">
        <a href="https://github.com/WiljamiT/react-app-aws" ><AiFillGithub /></a>
        <p>Wiljami Takkinen | 2023</p>
        <a href="https://www.linkedin.com/in/wiljami-takkinen-9920a2208/"><AiFillLinkedin /></a>
      </div>
      <div className="status">
        {data.slice(0, 1).map((commit) => (
          <li key={commit.sha}>
          <p>Site updated and built with commit: <a className="commit" href={commit.html_url}>{commit.sha.slice(0, 7)}</a> at: <i className="date">{new Intl.DateTimeFormat("en-GB", {
                  timeZone: "Europe/Helsinki",
                  dateStyle: "medium",
                  timeStyle: "medium",
              }).format(new Date(commit.commit.committer.date))}</i>
              {" "} by: <a href={commit.author.html_url} className="name">{commit.committer.login}</a>
              
              </p>
      </li>
        ))}
      </div> 
    </footer>
  )
}

export default Footer