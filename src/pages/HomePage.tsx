import { FC } from "react";
import Characters from "../components/Characters";
import Episodes from "../components/Episodes";

const HomePage: FC = () => {
    return (  
        <main>
            <h1>Rick and Morty | Buscador de episodios</h1>
            <Characters />
            <Episodes />
        </main>
    );
}
 
export default HomePage;