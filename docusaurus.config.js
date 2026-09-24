import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: "Javlon Ergashev | Qo'llanmalar",
  tagline: "Dasturlash va axborot texnologiyalari bo'yicha shaxsiy qo'llanmalar va konspektlar",
  favicon: 'img/favicon2.ico',  
  url: 'https://docs.javlon.blog',
  
  baseUrl: '/',
  
  organizationName: 'ejavlon', 
  projectName: 'docs',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uz',
    locales: ['uz'],
  },

  presets: [
    [
      'classic',      
      ({
        docs: {          
          sidebarPath: './sidebars.js',      
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },            
        blog: {
          showReadingTime: true,
          showLastUpdateAuthor: true,        
          showLastUpdateTime: true,      
          blogSidebarTitle: 'Barcha postlar',
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
        appId: 'VSINCO19CA',
        apiKey: 'a6e02847c0f8d27ced2f6d470ad8381d',
        indexName: 'uychi-itschool',
        container: "",
        debug: false,
        placeholder: 'Qidirish (Ctrl+K)...',    
        contextualSearch: false,
        searchParameters: {},
        replaceSearchResultPathname: {
          from: 'https://uychi-itschool.uz',
          to: '',
        },
      },
      
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      
      image: 'img/it.jpg',
      navbar: {
        title: 'docs.javlon.blog',
        logo: {
          alt: 'Javlon Logo',
          src: 'img/favicon2.ico',
        },
        
        items: [              
          {            
            type: 'dropdown',
            position: 'left',
            label: "Qo'llanmalar",            
            items: [              
              {                
                label: "Frontend Development",
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
          {to: '/blog', label: 'Blog', position: 'left'},                    
          {
            href: 'https://javlon.blog',
            label: 'Asosiy Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/ejavlon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} Javlon Ergashev. Shaxsiy qo'llanmalar to'plami`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),  
};

export default config;