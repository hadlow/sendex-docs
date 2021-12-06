const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Sendex Docs',
  tagline: 'Documentation for Sendex',
  url: 'https://docs.sendexapi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hadlow',
  projectName: 'sendex-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hadlow/sendex-docs/edit/main/website/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Sendex Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://sendexapi.com',
            label: 'Home',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Intro',
          },
          {
            href: 'https://github.com/hadlow/sendex',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro to Sendex',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/getting-started/installing-sendex',
              },
              {
                label: 'A deeper dive',
                to: '/a-deeper-dive/request-configuration',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hadlow/sendex',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sendex`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
