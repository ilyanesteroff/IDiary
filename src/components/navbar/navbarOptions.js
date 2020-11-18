import { 
  faUserPlus,
  faTasks,
  faDoorOpen,
  faChessBoard,
  faAtlas
} from '@fortawesome/free-solid-svg-icons'
  

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
  }
]

export const optionsForVisitors = [
  {
    value: 'Main', 
    link: '/',
    icon: faAtlas
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
  }
]