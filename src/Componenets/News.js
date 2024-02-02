import React from 'react'
import Newsitems from './Newsitems'
import { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import { Pagination } from 'antd';

export default function News(props) {

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [totalresult, setTotalresult] = useState(0);
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
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae6f87f59e7448fa9e9465c013471a00`;

    const data = await fetch(url);
    props.setProgress(60);
    const parsdata = await data.json();
    props.setProgress(80);
    setArticles(parsdata.articles)
    setTotalresult(parsdata?.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    Updatenews();
    // eslint-disable-next-line
  }, [])


  return (
    <>

      <h1 className='text-center my-5' style={{}}>InfoWaveDaily - {capitalizeFirstLowercaseRest(str)}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        hasMore={articles.length !== totalresult}
        >
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
      </InfiniteScroll>

    </>
  )
}
