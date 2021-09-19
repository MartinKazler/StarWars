import React from "react";
import Card from "@material-ui/core/Card";
import {useHistory} from "react-router-dom";

export const Movies = ({ movies, movieHandler }) => {
  const history = useHistory();

  const listHandler = () => {
    const moviesCharacter = movies;
    movieHandler(moviesCharacter);
     history.push("/Characters");
  };
  return(
      <Card bg="primary" style={{ width: "200rem" }} onClick={listHandler}>
        <div style={{borderBottom:"5px solid black"}} >
          <div style={{ color: "black", fontSize: "40px" }}>Title:{movies.title} ReleaseDate: {movies.release_date}</div>
        </div>
      </Card>
  );
};
