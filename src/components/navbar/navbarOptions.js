import { 
  faDiceSix,
  faTasks, 
  faAtom,
  faUser,
  faBlog,
  faQuestion,
  faChess,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'
  

export const optionsForUsers = [
  {
    value: 'Main',
    link: '/feed',
    icon: faDiceSix
  }, 
  {
    value: 'Todos', 
    link: '/todos',
    icon: faTasks
  },
  {
    value: 'Messages', 
    link: '/messages',
    icon: faAtom
  },
  {
    value: 'firstname',
    link: '/profile',
    icon: faUser
  }
]

export const optionsForVisitors = [
  {
    value: 'Main', 
    link: '/',
    icon: faBlog
  },
  {
    value: 'Why TooDooDoo?', 
    link: '/whytoodoodoo',
    icon: faQuestion
  },
  {
    value: 'About',
    link: '/about',
    icon: faChess
  }, 
  {
    value: 'Login',
    link: '/login',
    icon: faUser 
  },
  {
    value: 'Signup',
    link: '/create-account',
    icon: faUserAstronaut
  }
]