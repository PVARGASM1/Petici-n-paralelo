import { useEffect, useState } from 'react'
import {getEpisode, getCharacter} from './util'



const Paralelo = () => {

    const [episodes, setEpisodes] = useState([])
    const [characters, setCharacteres] = useState([])

    useEffect(()  => {

    const fetchAll = async () =>{
        const episodesPromise = getEpisode()
        const charactersPromise = getCharacter()

        const [episodesData, charactersData] = await Promise.all([episodesPromise, charactersPromise])
        
        setEpisodes(episodesData)
        setCharacteres(charactersData)
    }
    fetchAll()}, [])


    return (
        <>
        <ul>
           {episodes.map(episode => (
             <li key={episode.id}>
                <h2>{episode.name}</h2>
                <p>{episode.airdate}</p>
                <p>{episode.episode}</p>
            <ul> 
                {episode.characters.map(character => 
                    (<li key={character.id}>{character}</li>))}
            </ul>    
             </li>
            ))}
        </ul>
        </>
    )
}

export default Paralelo;