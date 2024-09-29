import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'UYCHI IT SCHOOL',
  tagline: 'Zamonaviy kasblarni biz bilan birga o\'rganing',
  favicon: 'img/favicon2.ico',  
  url: 'https://uychi-itschool.uz',
  
  baseUrl: '/',
  
  organizationName: 'UYCHI IT SCHOOL', 
  projectName: 'uychi-itschool',
  onBrokenLinks: 'ignore',//throw
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

  themeConfig:    
    ({

      algolia: {
        // The application ID provided by Algolia
        appId: 'VSINCO19CA',
        
        // Public API key: it is safe to commit it
        apiKey: 'a6e02847c0f8d27ced2f6d470ad8381d',

        indexName: 'uychi-itschool',
        
        container: "",

        debug: false,

        placeholder: 'Search',    
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
          
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        // insights: false,
  
        
      }, //endalgolia
    
      
      colorMode:{
        // defaultMode:'light',
        defaultMode:'dark',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:        
      //     "<marquee behavior='scroll' direction='left'>Java backend va kompyuter savodxonligi kurslariga qabul davom etmoqda.Batafsil ma'lumot olish uchun qo'llab quvvatlash xizmati orqali murojaat qiling!</marquee> ",
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
              {                
                label: "Python Development",
                to: "/docs/python/intro",                
              },
            ]
          },                        
          {to: '/blog', label: 'Blog', position: 'right'},                    
          // {
          //   href: 'https://t.me/',
          //   label: 'Telegram',
          //   position: 'right',
          // },
          {
            to: '/auth/login',
            label: 'Kirish',
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

// module.exports = {
//   onBrokenLinks: 'ignore',
// }

export default config;