import React , {Component} from 'react';
import './App.css';
import PersonClass from './Person/PersonClass'
import PersonFunction from './Person/PersonFunction'


class App extends Component {
 render(){
   return(
   <div className="App" >
     This is my first react app.
     <PersonClass name="Satyam Joshi" age="24"> My hobby: code</PersonClass>
     <PersonClass  name="Muskan Garg" age="25"> My hobby: eating</PersonClass>
     <PersonClass  name="Nidhi Garg" age="27"> My hobby : dancing</PersonClass>
     <PersonFunction name = "Fun" height = "10"> My job: nada</PersonFunction>
   </div>
   )
   //This is what the above jsx is compiled to: 
  /*return(
   React.createElement('div',{className:'App'},React.createElement('h1',null,'Hii'),'Hi , My react app!'))*/
 }
}
 
export default App;
