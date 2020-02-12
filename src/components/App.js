import React, { Component, Fragment } from 'react';
import Feed from './Feed';
import Login from './Login';
import Join from './Join';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: null,
      feedData: null,
      isLogin: false
    }
  }

  componentDidMount() {
    window.vw.ol3.CameraPosition.center = [14150062.698339948,4495397.259070012];
    window.vw.ol3.CameraPosition.zoom = 15;

    window.vw.ol3.MapOptions = {
      basemapType: window.vw.ol3.BasemapType.GRAPHIC,
      controlDensity: window.vw.ol3.DensityType.EMPTY,
      interactionDensity: window.vw.ol3.DensityType.BASIC,
      controlsAutoArrange: true,
      homePosition: window.vw.ol3.CameraPosition,
      initPosition: window.vw.ol3.CameraPosition
    };
  
    const vmap = new window.vw.ol3.Map("vmap",  window.vw.ol3.MapOptions);

    addMarkerLayer([14150062.698339948,4495397.259070012]);
    
    /*
    vmap.on('click', function (evt) {
      addMarkerLayer(evt.coordinate);
    });
    */
    
    function addMarkerLayer(input) {
      window.markerLayer = new window.vw.ol3.layer.Marker(vmap);
      vmap.addLayer(window.markerLayer);
      addMarker(input);
    }

    function addMarker(input) {
      window.vw.ol3.markerOption = {
        x : input[0],
        y : input[1],
        epsg : "EPSG:900913",
        title : '리액트 마커 타이틀',
        contents : '리액트 마커 컨텐츠',
        iconUrl : 'http://map.vworld.kr/images/ol3/marker_blue.png', 
        text : {
          offsetX: 0.5,
          offsetY: 20,
          font: '12px Calibri,sans-serif',
          fill: {color: '#000'},
          stroke: {color: '#fff', width: 2},
          text: '리액트 마커 텍스트'
        },
        attr: { "id": "marker01", "name": "속성명1" }  
      };

      window.markerLayer.addMarker(window.vw.ol3.markerOption);
    }
  }

  changeLoginState = (status) => {
    this.setState({
      isLogin: status
    });
  }
  
  handleItemClick = (e) => {
    const clicked = e.currentTarget.id;

    if (this.state.activeItem == clicked) {
      this.setState({
        activeItem: null
      });
    } else {
      this.setState({
        activeItem: clicked
      });
    }

    if (clicked === "feed-on") {
      this.getFeedData()
      .then(res => {
        this.setState({ feedData: res });
      })
      .catch(err => console.log(err));
    }
  }

  getFeedData = async () => {
    const response = await fetch("/getFeed");
    const body = await response.json();

    return body;
  }

  render() {
    return (
      <Fragment>
        <div id="vmap"></div>
        <Sidebar handleItemClick={this.handleItemClick} isLogin={this.state.isLogin} />
        <Feed activeItem={this.state.activeItem} feedData={this.state.feedData} />
        <Login activeItem={this.state.activeItem} changeLoginState={this.changeLoginState} />
        <Join activeItem={this.state.activeItem} />
      </Fragment>
    );
  }
}

export default App;