import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
export const Character = ({ moviePeople }) => {
  const [listofppl, setPeopleList] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  const charsarray = moviePeople.characters;


  

  useEffect(() => {
    async function fetchPeople() {
      const Movieslist = await Promise.all(charsarray.map(url => fetch(url).then(character => character.json())));
      setPeopleList(Movieslist);
      setLoading(false);     
    }
    fetchPeople();
  },[charsarray]);
 
  return(
    <>
      {loading ? <h2>Connecting to the death start... Please wait</h2> :(
        <Card style= {{backgroundColor: "grey"}} ><h1>{moviePeople.title}</h1>
          <div >People in the movie: 
            {listofppl.sort((a, b) => {
                var A = a.name.toUpperCase();
                var B = b.name.toUpperCase();
                return (A < B )? -1 : (A > B) ? 1 : 0;
                }).map((people, index) => {
                  return <div key={index}>{people.name}</div>
                  })}
          </div>
        </Card>
      )};
      <Button variant="contained" style={{ color: "black", fontSize: "3rem"}}onClick={() => history.goBack()}>
        Back to list
      </Button>
    </>
  );
};
