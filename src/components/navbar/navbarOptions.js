import { 
  faDiceSix,
  faTasks, 
  faAtom,
  faUser,
  faBlog,
  faQuestion,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
  

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
    value: 'About',
    link: '/about',
    icon: faQuestion
  }, 
  {
    value: 'Login',
    link: '/login',
    icon: faUser 
  },
  {
    value: 'Signup',
    link: '/create-user',
    icon: faUserAstronaut
  },
  {
    value: 'Source',
    link: 'https://github.com/IlyaNesterow/TodoListFrontend',
    icon: faGithub
  }
]