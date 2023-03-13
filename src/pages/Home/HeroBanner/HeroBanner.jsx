import React, {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom" 
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import "./style.scss";
import Img from "../../../components/lazyLoadimage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";


const HeroBanner = () => {
  const [background, setBackgrounnd]=useState("");
  const [query, setquery]= useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home);
  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() =>{
  
    const bg=url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path

    setBackgrounnd(bg);

  }, [data])

  const searchQueryHandler = (event) => {

    if(event.key === "Enter" && query.length > 0){

        navigate(`/search/ ${query}`);
    }
  }

  return (
    <div className="heroBanner">

      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer"></div>


      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of
          movies,TV shows and people to discover Explore now.
          </span>
          <div className="seacrhInput">
            <input 
            type="text"
          placeholder="Search a movie or tv show...."
          onChange={(e)=> setquery(e.target.value)}
          onKeyUp={searchQueryHandler}
            />
            <button>Search</button>

          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
