import { 
  faUserPlus,
  faTasks, 
  faMailBulk,
  faUserNinja,
  faQuestion,
  faDoorOpen,
  faChessBoard,
  faAtlas
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
  

export const optionsForUsers = [
  {
    value: 'Main',
    link: '/feed',
    icon: faChessBoard
  }, 
  {
    value: 'Todos', 
    link: '/todos',
    icon: faTasks
  },
  {
    value: 'Messages', 
    link: '/messages',
    icon: faMailBulk
  },
  {
    value: 'firstname',
    link: '/profile',
    icon: faUserNinja
  }
]

export const optionsForVisitors = [
  {
    value: 'Main', 
    link: '/',
    icon: faAtlas
  },
  {
    value: 'About',
    link: '/about',
    icon: faQuestion
  }, 
  {
    value: 'Login',
    link: '/login',
    icon: faDoorOpen 
  },
  {
    value: 'Signup',
    link: '/create-user',
    icon: faUserPlus
  },
  {
    value: 'Source',
    link: 'https://github.com/IlyaNesterow/TodoListFrontend',
    icon: faGithub
  }
]