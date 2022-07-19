import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Call_Movie_DB from "../../API/Call_Movie_DB";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";

// https://api.themoviedb.org/3/movie/550?api_key=52cfb1807bf7168380d7ca582aad8997
// `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
// `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
// `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
// `https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await Call_Movie_DB.get(
      `trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <Container>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((content) => (
            <SingleContent
              poster={content.poster_path}
              id={content.id}
              key={content.id}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type={content.media_type}
              vote_average={content.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </Container>
  );
};

export default Trending;
