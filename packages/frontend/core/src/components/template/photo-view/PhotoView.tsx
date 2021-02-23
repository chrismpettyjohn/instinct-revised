import React from 'react';
import {PhotoViewProps} from './';

export function PhotoView({photo}: PhotoViewProps) {
  return (
    <>
      <div className="mfp-bg mfp-with-zoom mfp-img-mobile mfp-ready" />
      <div
        className="mfp-wrap mfp-gallery mfp-auto-cursor mfp-with-zoom mfp-img-mobile mfp-ready"
        tabIndex={1}
        style={{overflow: 'hidden auto'}}
      >
        <div className="mfp-container mfp-image-holder mfp-s-ready">
          <div className="mfp-content">
            <div className="mfp-figure" style={{visibility: 'visible'}}>
              <div className="mfp-close" />
              <figure>
                <img
                  className="mfp-img"
                  src="https://story.habbix.ws/photos/d05c3b5f-d442-49ff-89df-5e7fa7ac5937.png"
                  style={{maxHeight: 1329}}
                />
                <div className="figcaption">
                  <div className="mfp-bottom-bar">
                    <div className="mfp-title">
                      <i className="fa fa-flag" />2 Hours Ago
                    </div>
                    <div className="mfp-counter">1 in 12</div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
