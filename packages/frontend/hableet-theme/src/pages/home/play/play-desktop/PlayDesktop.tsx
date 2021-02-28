import React, {useContext, useEffect} from 'react';
import {Card} from '../../../../components/card/Card';
import {UserLayout} from '../../../../components/layout/user';
import {DownloadOption} from './download-option/DownloadOption';
import {
  Column,
  configContext,
  localStorageService,
  setURL,
} from '@instinct-web/core';

setURL('play/desktop', <PlayDesktop />);

export function PlayDesktop() {
  const {config} = useContext(configContext);

  useEffect(() => {
    const token = localStorageService.get('session');
    window.open(`nex://${token}`, '_blank');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserLayout>
      <div className="page-content">
        <Column side="left">
          <Card
            className="p-4 text-center"
            header={`${config.siteName} Browser`}
            style={{fontSize: 16}}
          >
            <div>
              <p>
                {config.siteName} Browser is an application installed on your
                computer. Once installed, you can use the {config.siteName}{' '}
                Browser button at the top of the website to launch{' '}
                {config.siteName}.
              </p>
            </div>
            <div className="mt-4">
              <DownloadOption
                options={[
                  {
                    name: 'Windows 64-Bit',
                    icon: 'windows',
                    url:
                      'https://github.com/chrismpettyjohn/nex-browser/releases/download/v1.0/Nex.Hotel.zip',
                  },
                  {
                    name: 'Windows 32-Bit',
                    icon: 'windows',
                    url:
                      'https://github.com/chrismpettyjohn/nex-browser/releases/download/0.1/Nex.32.zip',
                  },
                ]}
                title="Windows Downloads"
              />
              <DownloadOption
                options={[
                  {
                    name: 'macOS',
                    icon: 'apple',
                    url:
                      'https://github.com/chrismpettyjohn/nex-browser/releases/download/0.1/Nex.32.zip',
                  },
                ]}
                title="macOS Downloads"
              />
            </div>
            <div className="mt-4">
              <p>
                Allowing install of unknown developer for {config.siteName}{' '}
                Browser:{' '}
                <a
                  href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac"
                  target="_blank"
                >
                  https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac
                </a>
              </p>
              <hr />
            </div>
          </Card>
        </Column>
      </div>
    </UserLayout>
  );
}
