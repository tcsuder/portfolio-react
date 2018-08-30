import trail3 from './images/trail3.jpg';
import trail10 from './images/trail10.jpg';
import trail20 from './images/trail20.jpg';
import trail22 from './images/trail22.jpg';
import trail23 from './images/trail23.jpg';
import trail3mobile from './images/trail3mobile.jpg';
import trail22mobile from './images/trail22mobile.jpg';
import trail23mobile from './images/trail23mobile.jpg';

export default {
  imageList: {
    trail3,
    trail10,
    trail20,
    trail22,
    trail23
  },
  smallImageList: {
    trail3mobile,
    trail22mobile,
    trail23mobile,
  },
  linksByKey: {
    github: {
      displayName: 'github',
      href: 'https://github.com/tcsuder/portfolio-react',
      description: 'github'
    },
    curriculum: {
      displayName: 'lessons',
      href: 'https://www.learnhowtoprogram.com/react/react-fundamentals/introduction-to-react-3e0baf22-adf7-480c-8d02-8144ad6467b7',
      description: ''
    },
    epicodus: {
      displayName: 'Epicodus',
      href: 'https://www.epicodus.com/',
      description: ''
    },
    instagram: {
      displayName: 'instagram',
      href: 'https://www.instagram.com/tyler_suderman/',
      description: ''
    },
    linkedin: {
      displayName: 'linkedIn',
      href: 'https://www.linkedin.com/in/tylersuderman/',
      description: ''
    },
    email: {
      displayName: 'email',
      href: 'mailto:tcsuder@gmail.com?subject=Portfolio Inquery',
      description: ''
    }
  },
  bannerOpacity: 1,
  footerIsSticky: false,
  footerOpacity: 0
}
