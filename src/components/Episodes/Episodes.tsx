import { FC } from "react";
import { Episode, EpisodeResponse } from "../../types/Episode";
import Item from "./Item";

interface EpisodesProps {
    episodes: Episode[]
    title: string
}
 
const Episodes: FC<EpisodesProps> = ({ episodes = [], title }) => {
    return ( 
        <div>
            <h2>{title}</h2>
            <div className="episodes">
                {episodes.length > 0 ?
                    episodes?.map((item) => <Item item={item} key={Math.random()} />)
                : (
                    <p>No hay episodios disponibles</p>
                )}
            </div>
        </div> 
    );
}
 
export default Episodes;