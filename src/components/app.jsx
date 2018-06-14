import React, {Component} from 'react';

/* const App = (props) => {
    return <h1>{props.name}</h1>;
   };

export default App; */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Inigo Montoya'
        }
    }
    render() {
        return (
            <div>
                <h1>My name is {this.state.text}, you killed my {this.props.relative.name}, prepare to die.</h1>
            </div>
        )
    }
}

export default App


