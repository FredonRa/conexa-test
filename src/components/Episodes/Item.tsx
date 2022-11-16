import { FC } from "react";
import { Episode } from "../../types/Episode";
import { MdCalendarToday } from "react-icons/md";

interface ItemProps {
    item: Episode
}
 
const Item: FC<ItemProps> = ({ item }) => {
    return (  
        <div className="episode">
            <p>
                #{item.id} {item.name}
            </p>
            <span>
                <MdCalendarToday /> 
                <p>{item.air_date}</p>
            </span>
        </div>
    );
}
 
export default Item;