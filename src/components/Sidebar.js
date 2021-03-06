import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.changeLoginState(false);
    this.props.setActiveItemNull();
  }

  render() {
    return (
      <nav id="sidebar">
        <ul className="list-unstyled custom-list">
          <li className="active">
            {this.props.isLogin ?
              <ul className="list-unstyled">
                <li id="feed-on" onClick={this.props.handleItemClick}>
                  <i class="fas fa-list-ul font-size-350"></i><p className="custom-p">내 게시물</p>
                </li>
                <li id="login-on" className="mt-3" onClick={this.props.handleItemClick}>
                  <i class="fas fa-user-clock font-size-350"></i><p className="custom-p">알림</p>
                </li>
                <li id="post-on" className="mt-3" onClick={this.props.handleItemClick}>
                  <i class="fas fa-paste font-size-350"></i><p className="custom-p">글 작성</p>
                </li>
                <li className="mt-3" onClick={this.handleLogout}>
                  <i class="fas fa-sign-out-alt font-size-350"></i><p className="custom-p">로그아웃</p>
                </li>
              </ul> :
              <ul className="list-unstyled">
                <li id="feed-on" onClick={this.props.handleItemClick}>
                  <i className="fas fa-shoe-prints font-size-350"></i><p className="custom-p">피드</p>
                </li>
                <li id="login-on" className="mt-3" onClick={this.props.handleItemClick}>
                  <i className="fas fa-sign-in-alt font-size-350"></i><p className="custom-p">로그인</p>
                </li>
                <li id="join-on" className="mt-3" onClick={this.props.handleItemClick}>
                  <i className="fas fa-user-plus font-size-350"></i><p className="custom-p">회원가입</p>
                </li>
              </ul>
            }
          </li>
        </ul>
      </nav>
   );
  }
}

export default Sidebar;