import React from 'react';
import {DownloadOptionProps} from './DownloadOption.types';

export function DownloadOption({title, options}: DownloadOptionProps) {
  function download(url: string) {
    window.open(url, '_blank');
  }

  return (
    <div className="row">
      <div className="col-12 text-center">
        <h3>{title}</h3>
      </div>
      {options.map((option, i) => (
        <div className="col" key={`download_${i}`}>
          <button
            className="btn btn-outline-primary btn-block"
            onClick={() => download(option.url)}
          >
            <i className={`fab fa-${option.icon} mr-2`} />
            {option.name}
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
}
