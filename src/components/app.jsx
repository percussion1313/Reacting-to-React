import React, {Component} from 'react';

/* const App = (props) => {
    return <h1>{props.name}</h1>;
   };

export default App; */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Inigo Montoya',
            hasLoaded: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.hasLoaded = this.hasLoaded.bind(this);
        
    }

    hasLoaded() {
        this.setState({hasLoaded: !this.state.hasLoaded});
    }

    componentDidMount() {

    }
    
    handleNameChange(event) {
        // do something useful
        this.setState({name: event.target.value})
        console.log('Typey Typey');
      }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>My name is {this.state.name}, you killed my {this.props.relative.name}, prepare to die.</h1>
                    <input type="text" placeholder={this.state.name} value={this.state.name} onChange={this.handleNameChange}></input>
                    <button onClick={this.hasLoaded}>Click Me</button>            
                    </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.hasLoaded}>Click Me</button>
                </React.Fragment>
            )
        }
    }
}

export default App

