import { useState, useEffect, FC } from "react";
import { CharacterServices } from "../../services/CharacterServices";
import { CharacterResponse } from "../../types/Character";
import Spinner from "../Spinner";
import Characters from "./Characters";
import "./styles.scss"
 
const AllCharacters: FC = () => {
    const [characters, setCharacters] = useState<CharacterResponse[]>([])
    const [isLoading, setIsloading] = useState(true)

    const getCharacters = async() => {
        try {
            const response = await CharacterServices.get<CharacterResponse>();
            setCharacters(response)
        } catch (error) {
            throw new Error()            
        } finally {
            setTimeout(() => {
                setIsloading(false)
            }, 1500)
        }
    }

    useEffect(() => {
        getCharacters();
	}, [])

    if (isLoading) return <Spinner />

    return (  
        <section id="container-characters">  
            <Characters title="Seleccione el primer personaje" characters={characters[0].results} position="first" />
            <Characters title="Seleccione el segundo personaje" characters={characters[1].results} position="second" />
        </section>
    );
}
 
export default AllCharacters;