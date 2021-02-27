import React, {useContext, useEffect} from 'react';
import {Card} from '../../../../components/card/Card';
import {CopySSOModal} from './copy-sso-modal/CopySSOModal';
import {DownloadOption} from './download-option/DownloadOption';
import {UserLayout} from '../../../../components/layout/user';
import {
  Column,
  configContext,
  localStorageService,
  setURL,
} from '@instinct-web/core';
setURL('play/nitro', <PlayNitroPage />);

export function PlayNitroPage() {
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
                    url: '',
                  },
                  {
                    name: 'Windows 32-Bit',
                    icon: 'windows',
                    url: '',
                  },
                ]}
                title="Windows Downloads"
              />
              <DownloadOption
                options={[
                  {
                    name: 'macOS',
                    icon: 'apples',
                    url: '',
                  },
                ]}
                title="macOS Download"
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
            <div className="mt-4">
              <p>
                You will be asked to paste an auth ticket when you open the{' '}
                {config.siteName} Browser. You can generate one by clicking it
                below.
              </p>
            </div>
            <CopySSOModal />
          </Card>
        </Column>
      </div>
    </UserLayout>
  );
}
