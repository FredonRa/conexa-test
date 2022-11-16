import { FC, useContext, useEffect } from "react";
import { CharacterContext } from "../../context/CharacterProvider";
import { Character } from "../../types/Character";
import { MdPerson, MdMale, MdFemale, MdLocationOn, MdFavorite } from "react-icons/md";

interface CardProps {
    item: Character,
    position: string
}
 
const Card: FC<CardProps> = ({ item, position }) => {
    const { selectedCharacters, setSelectedCharacters } = useContext(CharacterContext);
    const onClick = () => setSelectedCharacters({...selectedCharacters, [position]: item})
    const isSelected = selectedCharacters[position]?.id === item?.id

    return (  
        <div className={`card ${isSelected ? "card-selected" : ""}`} onClick={onClick}>
            <img src={item.image} alt={`Imágen de ${item.name}`} />
            <div className="card-description">
                <span>
                    <MdPerson/>
                    <p>{item.name}</p>
                </span>
                <span>
                    <p>{item.gender === "Male" ? <MdMale /> : <MdFemale />}</p>
                    <p>{item.gender}</p>
                </span>
                <span>
                    <MdLocationOn />
                    <p>{item.location.name}</p>
                </span>
                <span>
                    <MdFavorite />
                    <p>{item.status}</p>
                </span>
            </div>
        </div>
    );
}
 
export default Card;