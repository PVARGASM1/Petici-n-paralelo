import axios from "axios";



const url = 'https://rickandmortyapi.com/api'

const getEpisode = async () => {

    const {data} = await axios.get(`${url}/episode`)

      return data.results
}

const getCharacter = async () => {
 
    const {data} = await axios.get(`${url}/character`)

      return data.results

}



export {getCharacter, getEpisode}