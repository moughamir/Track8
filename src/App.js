import React, { Component } from 'react'
import { Footer } from './components/mdb/mdb';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import fb from './firebase';
const NavLink = require('react-router-dom').NavLink;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fb.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState(prevState => ({
        messages: [message].concat(prevState.messages),
        }));
    });
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fb.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    return (
      <Router>
        <div style={containerStyle}>
            <AppNavbar />
            
            <main style={{marginTop: '4rem'}}>
                <Routes />
            </main>
            
            <form onSubmit={this.addMessage.bind(this)}>
              <p className='h5 text-center mb-4'>Test Firebase.</p>
              <div className='md-form'>
                <i className='fa fa-envelope prefix grey-text'></i>
                <input className='form-control' type='text' ref={ el => this.inputEl = el }/>
                <label htmlFor='defaultForm-email'>Message</label>
              </div>
              <div className='text-center'>
                <input type='submit' className='btn btn-default'/>
              </div>
              
              <ul className='list-group'>

              { /* Render the list of messages */
              this.state.messages.map( message => <li className='list-group-item' key={message.id}>{message.text}</li> )
              }
              </ul>
            </form>
            
          <Footer color='indigo'>
            <p className="footer-copyright mb-0">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.nextfliks.com"> NextFliks </a></p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
