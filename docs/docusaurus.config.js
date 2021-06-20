const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Instinct',
  tagline: 'Retro development without the hassle',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Instinct Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
