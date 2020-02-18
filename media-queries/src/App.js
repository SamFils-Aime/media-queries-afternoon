import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      scroll:false,
      menuopen: false

    }
  }

render(){
  console.log(this.state)
  return (
    <nav  onScroll={()=> this.setState({scroll: !this.state.scroll})}>
    <div className={this.state.scroll === true ? "header": ""}>
     <menu id="menu">
     <header id='Bootstrap'>
      Bootstrap
     </header>
       <ul>
         <li>Service</li>
         <li>Portfolio</li>
         <li>About</li>
         <li>Team</li>
         <li>contact</li>
         <img onClick={()=> this.setState({menuIsOpen: !this.state.menuIsOpen})}
          src="https://media.giphy.com/media/f8t8T1MD1ZacE/giphy.gif" />
       </ul>
     </menu>
    <h2 className="menuIsOpen" id={this.state.menuIsOpen ===true ? "menuopen": ""} >
      <ul id='dropli'>
    <li>Service</li>
         <li>Portfolio</li>
         <li>About</li>
         <li>Team</li>
         <li>contact</li>
      </ul>
    </h2>
    <h1 className="welcome">
      Welcome to our studio
      <h2>
        It's nice to meet you
      </h2>
      <button> Tell me more </button>

    </h1>
    </div>

    </nav>
  )
}
}

export default App;
