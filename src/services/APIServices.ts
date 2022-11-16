import { FetchServices } from "./FetchServices";

export class ApiService {
    static async getCharacters<T>(page = 1): Promise<T> {
        const URL = `https://rickandmortyapi.com/api/character?page=${page}`
        const response = FetchServices.get<T>(URL)
        return response;
    }

    static async getEpisodes<T>(episodes: string): Promise<T> {
        const URL = `https://rickandmortyapi.com/api/episode/${episodes}`
        const response = FetchServices.get<T>(URL)
        return response;
    }
}