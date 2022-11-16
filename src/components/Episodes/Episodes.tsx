import { FC } from "react";
import { Episode, EpisodeResponse } from "../../types/Episode";
import Item from "./Item";

interface EpisodesProps {
    episodes: EpisodeResponse | Episode[]  |  undefined
    title: string
}
 
const Episodes: FC<EpisodesProps> = ({ episodes, title }) => {
    if(episodes?.results) episodes = episodes.results;
    
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