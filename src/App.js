import React , {Component} from 'react';
import './App.css';
import PersonClass from './Person/PersonClass'
import PersonFunction from './Person/PersonFunction'


class App extends Component {
  state = {
    persons:[
        {name: 'Satyam', age:24},
        {name: 'Manisha', age:54},
        {name: 'Kabbu', age:5},
        {name: 'Nishu', age:104} 
    ]
}

switchNameHandler = ()=>{
 this.setState({ persons:[
  {name: 'Satyam', age:24},
  {name: 'Manisha', age:14},
  {name: 'Kabbu', age:50},
  {name: 'Nishu', age:10} 
]})
}
 render(){
   return(
   <div className="App" >
     {/* <PersonClass name="Satyam Joshi" age="24"> My hobby: code</PersonClass>
     <PersonClass  name="Muskan Garg" age="25"> My hobby: eating</PersonClass>
     <PersonClass  name="Nidhi Garg" age="27"> My hobby : dancing</PersonClass>
     <PersonFunction name = "Fun" height = "10"> My job: nada</PersonFunction> */}
     
     <PersonClass name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobby: code</PersonClass>
     <PersonClass  name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobby: eating</PersonClass>
     <PersonClass  name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobby: dancing</PersonClass>
     <PersonFunction  name={this.state.persons[3].name} age={this.state.persons[3].age}> My job: nada</PersonFunction> 
     <br></br>
     <button style={{color:'Blue',backgroundColor:'Red'}} onClick = {this.switchNameHandler}> Switch </button>
     
   </div>
   )
   //This is what the above jsx is compiled to: 
  /*return(
   React.createElement('div',{className:'App'},React.createElement('h1',null,'Hii'),'Hi , My react app!'))*/
 }
}
 
export default App;
