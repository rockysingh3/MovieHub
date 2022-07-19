import { Chip } from "@mui/material";
import React, { useEffect } from "react";
import Call_Movie_DB from "../API/Call_Movie_DB";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    /* remove them from the prev arrays */
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    )
    setGenres([...genres, genre])
    setPage(1)
  }

  const fetchGenres = async () => {
    const { data } = await Call_Movie_DB.get(
      `genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    /* unmounting cancels the api call */
    return () => {
      setGenres({});
    };
  }, []);

  console.log("selected G", selectedGenres);
  console.log("g", genres);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&  
        selectedGenres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.length > 0 &&
        genres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
