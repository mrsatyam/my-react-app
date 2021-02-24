
import React, {Component} from 'react';

class PersonClass extends Component{
    render(){
        return(
            <div>
                <h1>class component</h1>
                     Hi I am {this.props.name}. I am {Math.round(Math.random()*100+this.props.age)} years old!
                     {this.props.children}
            </div>
        )
    }
}

export default PersonClass;