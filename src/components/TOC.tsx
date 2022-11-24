import { IResult } from "../types/types";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useEffect, useState } from "react";


interface IOTC {
    films: IResult[] & { isFav?: boolean } | undefined;
    setChosenFilm: Function
}


const TOC = ({ films, setChosenFilm }: IOTC) => {


    const setTitle = (title: string, x: any) => {
        const filmsFive = x.filter((fil: any) => fil?.isFav === true).map((films: any) => ({ title: films.title }))
        return JSON.stringify(filmsFive)
    }
    useEffect(() => {
        let titleArray: any = window.localStorage.getItem("title");

        if (titleArray) {
            const titleArrayParse = JSON.parse(titleArray);
            const x = filmsWithFav?.map((fil: any) => {
                if (titleArrayParse.find((titleParse: any) => titleParse.title === fil.title)) {
                    return {
                        ...fil,
                        isFav: true
                    }
                }
                return fil;
            })
            setFilmsWithFav(x)
        }

    }, [window.localStorage])
    const [filmsWithFav, setFilmsWithFav] = useState(films as any);

    const handleOnClick = (film: IResult) => {
        setChosenFilm(film)
    }

    const handleOnClickOnStar = (e: any, title: string) => {
        e.preventDefault();
        const x = filmsWithFav?.map((fil: any) => {
            if (fil.title === title) {
                return { ...fil, isFav: !fil.isFav }
            }
            return fil;
        })
        setFilmsWithFav(x)
        localStorage.setItem("title", setTitle(title, x));

    }

    return <>{
        filmsWithFav?.map((film: any) =>
            <div style={{
                padding: "8vh", display: "grid",
                gridTemplateColumns: "70% 30%",
                cursor: "pointer", border: "2px #fff solid"
            }}>
                <p style={{ margin: 0 }} onClick={() => handleOnClick(film)}>{film?.title}</p>
                {film?.isFav ? <StarIcon onClick={(e) => handleOnClickOnStar(e, film.title)} /> :
                    <StarBorderIcon style={{ display: "flex", alignContent: "end" }} onClick={(e) => handleOnClickOnStar(e, film.title)} />
                }
            </div>)
    }</>
}

export default TOC;
