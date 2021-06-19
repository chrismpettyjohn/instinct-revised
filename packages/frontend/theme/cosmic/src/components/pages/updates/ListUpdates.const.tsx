import React from 'react';
import {ServerUpdate} from './ListUpdates.types';

export const serverUpdates: ServerUpdate[] = [
  {
    date: 'Mar 07',
    icon: 'fire',
    content: (
      <>
        <h5>Nitro Updates</h5>
        <ul>
          <li>Updated to latest Nitro version for improved experience</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Mar 04',
    icon: 'sparkles',
    content: (
      <>
        <h5>Website Improvements</h5>
        <ul>
          <li>FindRetros Voting implemented</li>
          <li>Revamped Home Page</li>
          <li>Revamped Staff Page</li>
          <li>Revamped High Scores Page</li>
          <li>Improved User Profiles</li>
          <li>Added Hotel Rules Page</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Feb 29',
    icon: 'bug',
    content: (
      <>
        <h5>Bug fixes</h5>
        <ul>
          <li>Flash client crashing in some rooms</li>
          <li>Flash application blue screen freeze</li>
          <li>Page title showing "Habbo"</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Feb 28',
    icon: 'wrench',
    content: (
      <>
        <h5>Server Updates</h5>
        <p>
          You can now stay up to date with the latest changes by going to the
          new <b>Updates</b> page.
        </p>
        <h5>Who's Online</h5>
        <p>The home page now shows all of the online users.</p>
      </>
    ),
  },
  {
    date: 'Feb 27',
    icon: 'browser',
    content: (
      <>
        <h5>Nex Desktop</h5>
        <p>
          We launched our new <b>Nex Desktop</b> app! You can use it by
          switching your client type in the top right and following the
          instructions on the download page.
        </p>
      </>
    ),
  },
  {
    date: 'Feb 23',
    icon: 'vial',
    content: (
      <>
        <h5>Nex Revamp</h5>
        <p>
          We launched the new and improved Nex with a custom website and the
          latest HTML5 browser available, Nitro!
        </p>
      </>
    ),
  },
];
