import { FC, useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../context/CharacterProvider";
import { EpisodeServices } from "../../services/EpisodeServices";
import { Episode } from "../../types/Episode";
import Spinner from "../Spinner";
import Episodes from "./Episodes";
import "./styles.scss"
 
const AllEpisodes: FC = () => {
    const { selectedCharacters } = useContext(CharacterContext);
    const firstCharacterEpisodes = selectedCharacters?.first?.episode;
    const secondCharacterEpisodes = selectedCharacters?.second?.episode;
    const [isLoading, setIsloading] = useState(false)
    const [fetchedEpisodes, setFetchedEpisodes] = useState<{
        first: Episode[],
        second: Episode[],
        both: Episode[]
    }>({
        first: [],
        second: [],
        both: []
    })
    
    const episodesWithBothCharacters = () => {
        if(!firstCharacterEpisodes?.length || !secondCharacterEpisodes?.length) return []
        return firstCharacterEpisodes?.filter(episode => secondCharacterEpisodes?.includes(episode))
    }

    const getEpisodeId = (array: string[]) => {
        let episodesAsString = ""
        array.forEach((item, i) => {
            if (i >= 19) return
            return episodesAsString += `${item.split("/").at(-1)},`
        })
        return episodesAsString;
    }

    const getEpisodes = async() => {
        setIsloading(true)
        const bothEpisodes = episodesWithBothCharacters();
        if(!selectedCharacters.first || !selectedCharacters.second) return

        try {
            const response = await EpisodeServices.get<Episode[]>([
                getEpisodeId(firstCharacterEpisodes || []), 
                getEpisodeId(secondCharacterEpisodes || []), 
                getEpisodeId(bothEpisodes)
            ])
            setFetchedEpisodes({
                first: response[0],
                second: response[1],
                both: response[2]
            })
        } catch (error) {
            throw new Error()
        } finally {
            setTimeout(() => {
                setIsloading(false)
            }, 700)
        }
    }

    useEffect(() => {
        getEpisodes()
    }, [selectedCharacters?.first, selectedCharacters?.second])

    if (!selectedCharacters.first || !selectedCharacters.second) return <></>

    if(isLoading) return <Spinner />

    return (  
        <section id="container-episodes">
            <Episodes title={`Episodios con ${selectedCharacters?.first?.name}`} episodes={fetchedEpisodes?.first} />
            <Episodes title="Episodios con ambos" episodes={fetchedEpisodes?.both} />
            <Episodes title={`Episodios con ${selectedCharacters?.second?.name}`} episodes={fetchedEpisodes?.second} />
        </section>
    );
}
 
export default AllEpisodes;