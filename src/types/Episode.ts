export type Episode = {
    id: 1,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export type EpisodeResponse = {
    count: number,
    next: string,
    pages: number,
    prev: number | null,
    results: Episode[]
}