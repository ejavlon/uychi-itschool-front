import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UYCHI IT SCHOOL',
  tagline: 'Zamonaviy kasblarni biz bilan birga o\'rganing',
  favicon: 'img/favicon2.ico',

  url: 'https://uychi-itschool.uz',
  
  baseUrl: '/',
  
  organizationName: 'UYCHI IT SCHOOL', 
  projectName: 'uychi-itschool',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
  //   [
  //     require.resolve('docusaurus-lunr-search'),
  //     {
  //       languages: ['en'],
  //       indexBaseUrl : true, // index base url
  //       // excludeRoutes : ["/ignore-endpoints"], // ignore endpoints
  //       // includeRoutes : ["/"] //Include only specific routes for search
  //       stopWords : [],// Add stop words(words that are exclude from search result) to the search index
  //       excludeTags : [],//Exclude certain tags from the search
  //       highlightResult : true, //Enable it to highlight the searched word in the result page. Used mark.js for highlighting. You can customize the highlight color using cssmark  { background-color: red !important; color: green !important }
  //       disableVersioning : true, //Docs versions are displayed by default. If you want to hide it, set this plugin option to true
  //       maxHits : 5 // Maximum number of hits shown
        
  //     }
  //   ]
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {          
          sidebarPath: './sidebars.js',      
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // editUrl:
          //   'https://github.com/ejavlon/uychi-itschool/docs',
        },            
        blog: {
          showReadingTime: true,
          showLastUpdateAuthor: true,        
          showLastUpdateTime: true,
          // editUrl:
          //   'https://github.com/ejavlon/uychi-itschool/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
          
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        // The application ID provided by Algolia
        appId: 'H10BZU01XD',
  
        // Public API key: it is safe to commit it
        apiKey: '33464cda633d7cda8855044fc77780ee',
  
        indexName: 'algolia_index',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
  
        
      }, //endalgolia
      
      colorMode:{
        defaultMode:'light',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     "<h4>🎉 UYCHI IT SCHOOL web sayti ishga tushdi! 🥳</h4> ",
      //   backgroundColor: '#fafbfc',
      //   textColor: 'black',        
      //   isCloseable: true,
      // },
      docs:{
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      
      image: 'img/it.jpg',
      navbar: {
        // style:'dark',
        title: 'UYCHI IT SCHOOL',
        logo: {
          alt: 'site logo',
          src: 'img/favicon.ico',
        },
        
        items: [              
          {
            // type: 'docSidebar',
            // sidebarId: 'html',
            type: 'dropdown',
            position: 'right',
            label: 'Academy',            
            items:[              
              {                
                label: "Fronted Development",
                to: "/docs/frontend/intro",                

              },
              {                
                label: "Java Development",
                to: "/docs/java/intro",                
              },

            ]
          },     
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'css',
          //   label: 'CSS',
          // },                 
          // {
          //   type: 'docSidebar',          
          //   position: 'left',
          //   sidebarId: 'javaScript',
          //   label: 'JavaScript',
          // },  
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'java',
          //   label: 'Java',
          // },                  
          {to: '/blog', label: 'Blog', position: 'right'},          
          // {
          //   href: 'https://github.com/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // {
          //   href: 'https://youtube.com/',
          //   label: 'YouTube',
          //   position: 'right',
          // },
          {
            href: 'https://t.me/',
            label: 'Telegram',
            position: 'right',
          },          
        ],
      },
      
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Kurslarimiz',
            items: [
              // {
              //   label: 'Kompyuter savodxonligi',
              //   to: '/docs/intro',
              // },              
              {
                label: 'Frontend Development',
                to: '/docs/frontend/intro',
              },
              {
                label: 'Java Development ',
                to: '/docs/java/intro',
              },
              {
                label: 'Grafik dizayn',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Hamjamiyat',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },              
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'Itimoiy tarmoqdagi sahifalarimiz',
            items: [                          
              {
                label: 'Telegram',
                href: 'https://t.me/',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} UYCHI IT SCHOOL`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),  
};

export default config;