export interface Source {
    id: string;
    name: string;
}
export interface SourcesResponse {
    status: string;
    sources: Source[];
}
