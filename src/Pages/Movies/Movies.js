import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Call_Movie_DB from "../../API/Call_Movie_DB";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await Call_Movie_DB.get(
      `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <Container>
      <span className="pageTitle">Movies</span>

      <div className="trending">
        {content &&
          content.map((content) => (
            <SingleContent
              poster={content.poster_path}
              id={content.id}
              key={content.id}
              date={content.first_air_date || content.release_date}
              media_type="movie"
              vote_average={content.vote_average}
            />
          ))}
      </div>

      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </Container>
  );
};

export default Movies;
