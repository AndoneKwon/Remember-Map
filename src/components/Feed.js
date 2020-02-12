import React, { Component } from 'react';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="feed" className={this.props.activeItem == "feed-on" ? "out" : ""}>
        <div className="head custom-head">피드</div><hr className="feed-hr" />
        <article className="custom-article">
          <div className="mainarticle">
            {this.props.feedData ? this.props.feedData.map(feed => {
              return <div><div>{ feed[1] }</div><hr className="feed-hr" /><div className="feed-comment">{ feed[2] }</div><hr className="feed-hr" /></div>
            }) : '데이터 불러오는 중'}
          </div>
        </article>
      </div>
   );
  }
}

export default Feed;