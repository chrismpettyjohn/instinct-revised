import './GuestLayout.scss';
import React, {useContext} from 'react';
import {GuestLayoutProps} from './GuestLayout.types';
import VipRoomImage from '../../../public/images/rooms/vip.png';
import DefaultRoomImage from '../../../public/images/rooms/default.png';
import {configContext, GuestGuard} from '@instinct-web/core';

export function GuestLayout({children}: GuestLayoutProps) {
  const {config} = useContext(configContext);
  return (
    <GuestGuard>
      <div
        className="row h-100-vh justify-content-xxl-center justify-content-xl-center
    justify-content-md-center align-items-xxl-center align-items-xl-center
    align-items-md-center"
      >
        <main id="main" className="bg-dark no--sidebar">
          <div className="row h-100">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="container h-100 w-100 d-flex flex-column">
                <div className="d-flex h-100 flex-column justify-content-center">
                  <div className="d-flex mb-3 mt-5 mt-xl-0 mt-lg-0">
                    <img
                      src={config.logoURL}
                      className="flex-fill"
                      id="logo"
                      alt="Logo"
                    />
                  </div>
                  {children}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-xxl-block d-xl-block d-lg-block d-none bg-red">
              <div className="container d-flex h-100 flex-column justify-content-center">
                <div
                  id="homeCarousel"
                  className="carousel slide h-100 p-5"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#homeCarousel"
                      data-slide-to="0"
                      className="active"
                    />
                    <li data-target="#homeCarousel" data-slide-to="1" />
                    <li data-target="#homeCarousel" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner h-100">
                    <div className="carousel-item active">
                      <img
                        src={DefaultRoomImage}
                        className="d-block w-75 mx-auto"
                      />
                      <div className="carousel-caption d-block">
                        <h5>Rooms</h5>
                        <p>
                          können now besser bearbeitet werden because
                          Bodenlayout-Editor Feature.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={VipRoomImage}
                        className="d-block w-75 mx-auto"
                      />
                      <div className="carousel-caption d-block">
                        <h5>Taler</h5>
                        <p>
                          are völlig kostenlos and you can verdienen durc viel
                          Aktivität.
                        </p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src={DefaultRoomImage}
                        className="d-block w-75 mx-auto"
                      />
                      <div className="carousel-caption d-block">
                        <h5>Rooms</h5>
                        <p>
                          können now besser bearbeitet werden because
                          Bodenlayout-Editor Feature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </GuestGuard>
  );
}
