import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap'
import './App.css'

import AgeStats from './AgeStats'

class App extends Component {
    constructor(){
        super();
        this.state = {
            newDate: '',
            birthday: '1988-08-08',
            showStats: false
        }
    }
    changeBirthday(){
        console.log(this.state);
        this.setState(this.setState(({
            birthday: this.state.newDate,
            showStats: true
        })))
    }
    render(){
        return ( 
            <div className='App'>
                <Form inline >
                    <h2> Input your Birthday!</h2>
                    <FormControl 
                        type="date" 
                        onChange={ e =>{ this.setState({newDate: e.target.value})}}
                    >
                    </FormControl>
                {' '}
                <Button onClick={()=>{
                    this.changeBirthday()
                }
                }>
                    Submit
                </Button>
                {
                this.state.showStats 
                    ?   
                        <div className='fade ageStats'>
                            <AgeStats 
                                date={this.state.birthday} 
                            />
                        </div>
                    : 
                        <div></div>
                }
                </Form>
            </div>
        )
    }
}

export default App;