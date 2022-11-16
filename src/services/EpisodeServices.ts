import { ApiService } from "./APIServices";

export class EpisodeServices {
    static async get<T>(episodes: string[]): Promise<T[]> {
        const response = await Promise.all(episodes.map(string => {
            return ApiService.getEpisodes<T>(string)
        }))
        return response;
    }
}