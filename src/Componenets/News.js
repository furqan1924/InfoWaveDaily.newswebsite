import React from 'react'
import Newsitems from './Newsitems'
import { useEffect, useState } from 'react'
import { Pagination } from 'antd';

export default function News(props) {
  const REACT_APP_BASE_API_KEY_URL = process.env.REACT_APP_BASE_API_KEY_URL;
  const REACT_APP_MIDDLE_API_KEY_URL = process.env.REACT_APP_MIDDLE_API_KEY_URL;
  const REACT_APP_LAST_API_URL = process.env.REACT_APP_LAST_API_URL

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  let str = props.category;
  const capitalizeFirstLowercaseRest = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };


  document.title = (capitalizeFirstLowercaseRest(str));
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = articles.slice(indexOfFirstRecord,
    indexOfLastRecord);
  const nPages = Math.ceil(articles.length / recordsPerPage)


  const Updatenews = async () => {
    props.setProgress(10);
    const url = `${REACT_APP_BASE_API_KEY_URL}${props.country}${REACT_APP_MIDDLE_API_KEY_URL}${props.category}${REACT_APP_LAST_API_URL}`;

    const data = await fetch(url);
    props.setProgress(60);
    const parsdata = await data.json();
    props.setProgress(80);
    setArticles(parsdata.articles)
    props.setProgress(100);
  }

  useEffect(() => {
    Updatenews();
    // eslint-disable-next-line
  }, [])


  return (
    <>

      <h1 className='text-center my-5' style={{}}>InfoWaveDaily - {capitalizeFirstLowercaseRest(str)}</h1>

      <div className='container my-3'>
        <div className='row'>
          {
            currentRecords.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <Newsitems title={element.title} description={element.description} urlToImage={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} url={element.url} />
              </div>
            })
          }
        </div>
        <Pagination className='mt-5' onChange={(nPages) => { setCurrentPage(nPages) }} defaultCurrent={currentPage} total={`${nPages}` + 0} />
      </div>


    </>
  )
}
