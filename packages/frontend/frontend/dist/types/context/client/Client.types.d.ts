export interface ClientContext {
    loadingProgress: number;
    setLoading: (progress: number) => void;
}
export declare const defaultClientContext: ClientContext;
