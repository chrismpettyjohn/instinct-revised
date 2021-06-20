export interface ClientContext {
  loadingProgress: number;
  setLoading: (progress: number) => void;
}

export const defaultClientContext: ClientContext = {
  loadingProgress: 0,
  setLoading: (progress: number) => {},
};
