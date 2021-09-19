import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Movies } from "./components/Info/Movies";
import { Character } from "./components/Info/Character";
import { Navbar } from "./components/Info/Navbar";
  

function App() {
  const [movies, setMovieInfo] = useState([]);
  const [pplList, setMoviePeople] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchInfo() {
      let resp = await fetch("http://swapi.dev/api/films");
      let dataofFilms = await resp.json();
      setMovieInfo(dataofFilms.results);
      setLoading(false);
    }
    fetchInfo();
  }, []);

  const movieHandler = (movieInformation) => {
    setMoviePeople(movieInformation);
    console.log(pplList);
  };

  return (
    <Router>
      <Navbar />
      <div>{loading ? <h2>Connecting to the death start... Please wait</h2>
      :(
        <Switch>
          <Route exact path="/Movies" >
          {movies.map((movies, i) => {
            return <Movies key={i} movies={movies} movieHandler={movieHandler} />
          })}
          </Route>
          <Route exact path="/Character" >
        <Character moviePeople={pplList}/>
        </Route>
        </Switch>
      )}
      </div>
    </Router>
  );
}

export default App;
