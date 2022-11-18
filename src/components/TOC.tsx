import { IResult } from "../types/types";

interface IOTC {
    films: IResult[] | undefined;
    setChosenFilm: Function
}


const TOC = ({ films, setChosenFilm }: IOTC) => {

    const handleOnClick = (film: IResult) => {
        setChosenFilm(film)
    }
    return <>{
        films?.map(film =>
            <div onClick={() => handleOnClick(film)} style={{ padding: "8vh", cursor: "pointer", border: "2px #fff solid" }}>
                {film?.title}
            </div>)
    }</>
}

export default TOC;
