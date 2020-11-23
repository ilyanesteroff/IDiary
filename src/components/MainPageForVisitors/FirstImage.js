import React from 'react'
import BrightCreateTodoPage from '../../assets/computers/BrightCreateTodo.png'
import DarkCreateTodoPage from '../../assets/computers/DarkCreateTodo.png'
import BrightCreateTodoMobile from '../../assets/mobile/BrightCreateTodo.JPG'
import DarkCreateTodoMobile from '../../assets/mobile/DarkCreateProfile.JPG'


export default ({ theme, width }) => (
  <>
    <h2 id="Feature" className="center">Create todos</h2>
    <div 
      id="separator" 
      className="noMargin"
    >
      <img
        src={ 
          width > 540
            ? theme ? BrightCreateTodoPage : DarkCreateTodoPage
            : theme ? BrightCreateTodoMobile : DarkCreateTodoMobile
        }
        alt="Create todo form"
        className="image"
      />
    </div>
  </>
)