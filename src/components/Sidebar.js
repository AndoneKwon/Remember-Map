import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="sidebar">
        <ul className="list-unstyled custom-list">
          <li className="active">
            <ul className="list-unstyled">
              <li id="feed-on" onClick={this.props.handleItemClick}>
                <i className="fas fa-shoe-prints font-size-350"></i><p className="custom-p">피드</p>
              </li>
              <li id="login-on" className="mg-top-10" onClick={this.props.handleItemClick}>
                <i className="fas fa-sign-in-alt font-size-350"></i><p className="custom-p">로그인</p>
              </li>
              <li id="signup-on" className="mg-top-10" onClick={this.props.handleItemClick}>
                <i className="fas fa-user-plus font-size-350"></i><p className="custom-p">회원가입</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
   );
  }
}

export default Sidebar;