import React, { useEffect } from 'react'
import AOS from  'aos'
import "aos/dist/aos.css";

export default function Newsitems(props) {

  let { title, description, urlToImage, author, date, source, url } = props;
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>

      <div className="card my-2 mx-2" data-aos="fade-up"
        data-aos-duration="1500" >
        <span className="badge rounded-pill text-bg-success" style={{
          justifyItems: "end",
          position: "absolute",
          right: "0"
        }}>{source}</span>
        <img src={urlToImage} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
          <a href={url} className="btn btn-primary btn-sm">Read more</a>

        </div>
      </div>

    </>
  )
}
