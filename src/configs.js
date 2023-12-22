import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  WEBSITES,
} from './constants/pageData';

const configs = {
  title: 'San Liuk',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    //url: 'icons/twittwer.png',
    dencity: 900,
  },
  navTitle: 'San Liuk Studios',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'About us',
      infos: [
        "San Liuk Studios specializes in advanced animation and game development, leveraging cutting-edge virtual production techniques and sound design.",
        'With a team of industry-leading professionals, we deliver innovative solutions and transformative digital experiences for a global clientele.',
        'Explore the forefront of technology and creativity with San Liuk.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Other websites'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Other websites',
      imageList: WEBSITES,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('The Logo'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Feel free to use our Logo!',
      footer: 'Click the icon above to download the Logo',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/slk.png',
            websiteURL:
              'https://drive.google.com/drive/folders/12FHQbmmnzniA8OLobMFE7Mc2j85Bjzgh?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Our Projects',
      footer: 'Click the icon above to to show the project',
      imageList: {
        rows: 2,
        separation: 1.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/opensea.png',
            websiteURL: 'https://opensea.io/collection/the-sanliuk-maimeddumbduck',
          },
          {
            url: 'icons/playstoreappstore.png',
            websiteURL: 'https://www.sanliuk.com/app',
          },
          {
            url: 'icons/spotify.png',
            websiteURL:
              'https://open.spotify.com/artist/0dGIDGbkhhoYtTziRX5Qxg',
          },
          {
            url: 'icons/youtube.png',
            websiteURL:
              'https://www.youtube.com/channel/UCgbG6HYcITXhZ0W35lUvFbA',
          },
          
      
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find us on:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/SanLiuk',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/manuel-hosseini-sohi',
          },
          {
            url: 'icons/github.png',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:eraltdet@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
