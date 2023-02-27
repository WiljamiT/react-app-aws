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
        <AiFillGithub />
        <p>Wiljami Takkinen | 2023</p>
        <AiFillLinkedin />
      </div>
      <div className="status">
        <p>{data.slice(0, 1).map((commit) => (
          <li key={commit.sha}>
          <p>Site updated and built with commit: <a className="commit" href={commit.html_url}>{commit.sha.slice(0, 7)}</a> at: <i className="date">{new Intl.DateTimeFormat("en-GB", {
                  timeZone: "Europe/Helsinki",
                  dateStyle: "medium",
                  timeStyle: "medium",
              }).format(new Date(commit.commit.committer.date))}</i>
              {" "} by: <a href={commit.author.html_url} className="name">{commit.committer.login}</a>
              
              </p>
      </li>
        ))}</p>
      </div> 
    </footer>
  )
}

export default Footer