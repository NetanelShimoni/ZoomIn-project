import { useEffect, useState } from 'react';
import './App.css';
import FilmData from './components/FilmData';
import TOC from './components/TOC';
import axois from "axios"
import {  IResult } from './types/types';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axois.get('https://swapi.dev/api/films/');
      const films = data.results;
      setFilms(films)
    }
    fetchData().catch(console.error);

  }, [])



  const [films, setFilms] = useState<IResult[] | undefined>(undefined);
  const [chosenFilm, setChosenFilm] = useState<IResult | undefined>(undefined);



  return (
    <div className='grid'>
      <div style={{
        display: "flex", minHeight: "100%"
        , flexDirection: "column", padding: "10px",
        color: "#ffff", justifyContent: 'center',
      }}>
        <TOC films={films} setChosenFilm={setChosenFilm} />
      </div>
      {films? <FilmData chosenFilm={chosenFilm}  /> : <></>}
      
    </div>
  );
}

export default App;
function uaeEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

