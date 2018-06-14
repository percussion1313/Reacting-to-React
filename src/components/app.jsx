import React, {Component} from 'react';

/* const App = (props) => {
    return <h1>{props.name}</h1>;
   };

export default App; */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Inigo Montoya'
        }
        this.handleNameChange = this.handleNameChange.bind(this);

        
    }

    handleNameChange(event) {
        // do something useful
        this.setState({name: event.target.value})
        console.log('Typey Typey');

      }

    render() {
        return (
            <React.Fragment>
                <h1>My name is {this.state.text}, you killed my {this.props.relative.name}, prepare to die.</h1>
                <input type="text" placeholder={this.state.name} value={this.state.name} onChange={this.handleNameChange}></input>
            </React.Fragment>
        )
    }
}

export default App

