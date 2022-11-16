import { createContext, useState, FC } from "react";
import { Character } from "../types/Character";

interface Props {
    children: React.ReactNode
}

const CharacterContext = createContext<{
    selectedCharacters: { first: null | Character, second: null | Character },
    setSelectedCharacters: (value: { first: null | Character, second: null | Character }) => void
}>({
    selectedCharacters: { first: null,  second: null },
    setSelectedCharacters: (value: any) => {}
});

const CharacterProvider : FC<Props> = ({ children }) => {
    const [selectedCharacters, setSelectedCharacters] = useState<{
        first: null | Character, 
        second: null | Character
    }>({
        first: null,
        second: null
    })

    return (
        <CharacterContext.Provider value={{selectedCharacters, setSelectedCharacters}}>
            {children}
        </CharacterContext.Provider>
    )
}

export { CharacterContext, CharacterProvider };
