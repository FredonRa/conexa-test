import { FC } from "react";
import { Character } from "../../types/Character";
import Card from "./Card";

interface CharactersProps {
    characters: Character[],
    position: string,
    title: string
}
 
const Characters: FC<CharactersProps> = ({ characters, position, title }) => {

    return (  
        <div className="container">
            <h2>{title}</h2>
            <div className="characters">
                {characters.map((item, index) => <Card key={Math.random()} item={item} position={position} />)}
            </div>
        </div>
    );
}
 
export default Characters;