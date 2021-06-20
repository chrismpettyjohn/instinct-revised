const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Instinct',
  tagline: 'Retro development without the hassle',
  url: 'https://instinct.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chrismpettyjohn', // Usually your GitHub org/user name.
  projectName: 'Instinct-Revised', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Instinct Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/ecweHJ3F9M',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Usage',
          items: [
            {
              label: 'From Source',
              to: '/docs/Use Instinct/From Source',
            },
            {
              label: 'New Project',
              to: '/docs/Use Instinct/New Project',
            },
            {
              label: 'In Production',
              to: '/docs/Use Instinct/In Production',
            },
          ],
        },
        {
          title: 'API',
          items: [
            {
              label: 'Core',
              to: '/docs/intro',
            },
            {
              label: 'Plugins',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Web',
          items: [
            {
              label: 'Core',
              to: '/docs/intro',
            },
            {
              label: 'Themes',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: 'Instinct by LeChris',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/chrismpettyjohn/Instinct-Revised/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
