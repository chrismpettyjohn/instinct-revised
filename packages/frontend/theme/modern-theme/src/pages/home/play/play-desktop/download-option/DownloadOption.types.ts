import {ReactNode} from 'react';

export interface DownloadOption {
  url: string;
  name: string;
  icon: string;
}

export interface DownloadOptionProps {
  options: DownloadOption[];
  title: ReactNode;
}
