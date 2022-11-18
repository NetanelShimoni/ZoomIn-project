import axios from "axios";
import { useEffect, useState } from "react";
import { IChosenFilm, IResult } from "../types/types";

interface IFilmsData {
    chosenFilm: IResult | undefined;
}

const FilmData = ({ chosenFilm }: IFilmsData) => {

    useEffect(() => {
        if (chosenFilm !== undefined) {
            const getFilmData = async () => {
                const { data } = await axios.get(chosenFilm.url)
                setFilmParam(data)
            }
            getFilmData().catch(console.log);
        }

    }, [chosenFilm])

    const [filmParam, setFilmParam] = useState<IChosenFilm | undefined>(undefined)

    return (
        filmParam ?
            <div style={{
                color: "#fff", position: "relative",
                padding: "20px",
                textAlign: "center",
                justifyContent: "center",
                border: "2px red solid", height: "107vh"
            }}>
                <p>Title: {filmParam?.title}</p>
                <p>Created: {filmParam?.created.toString()}</p>
                <p>Edited:  {filmParam?.edited.toString()}</p>
                <p>Director: {filmParam?.director}</p>
                <p>Producer: {filmParam?.producer}</p>
            </div > : <div style={{ 
                color: "#fff", position: "relative",
                padding: "20px",
                textAlign: "center",
                justifyContent: "center",
                border: "2px #ffff solid", height: "110vh"
            }}>No movie selected </div>
    );
}

export default FilmData;
