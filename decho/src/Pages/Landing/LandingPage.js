import React, { Component } from 'react';
import UserForm from 'Components/Form/Form';
import 'Pages/Landing/LandingPage.styles.css';
// import './LandingPage.styles.css';
// import UserForm from '../Components/Form/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="logo"></div>
        <div className="column landing" /*style={{ border: '1px solid black' }}*/>
          <div id="de-echo-to" className="title">Landing page for App de-Echo</div>
          <div>
            <UserForm changePage={this.props.changePage} />
          </div>
        </div>
      </div>
    );
  }
}
