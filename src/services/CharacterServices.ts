import { ApiService } from "./APIServices";

export class CharacterServices {
    static async get<T>(): Promise<T[]> {
        const response = await Promise.all([
            ApiService.getCharacters<T>(1),
            ApiService.getCharacters<T>(2)
        ])
        return response;
    }
}