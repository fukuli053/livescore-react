import React, { Component } from 'react';
import Header from './Components/Header';
import { FaFutbol, FaBasketballBall, FaRegClock} from 'react-icons/fa';
import FootballPage from './Components/Pages/FootballPage';
import 'react-web-tabs/dist/react-web-tabs.css';
import "./App.css";

var Tabs = require('react-web-tabs').Tabs;
var Tab = require('react-web-tabs').Tab;
var TabPanel = require('react-web-tabs').TabPanel;
var TabList = require('react-web-tabs').TabList;


interface Props{

}

interface State{
}

class App extends Component<Props,State> {

  state = {
  }

  constructor(props: Props) {
    super(props);
    this.onClickLive = this.onClickLive.bind(this);
  }

  onClickLive(e: any){
    e.target.style["color"] = "#00E688";
  }



  render() {
		return (
      <div className="App">
        <Header/>
        <div className="container ">
          <Tabs defaultTab="basic-tab-one" className={"live-score-table"}>
            <TabList className={"live-score-band"}>
              <Tab tabFor="basic-tab-one"><FaFutbol/> Futbol</Tab>
              <Tab tabFor="basic-tab-two"><FaBasketballBall/> Basketbol</Tab>
              <button className={"rwt__tab"} style={{float: "right"}} onClick={this.onClickLive}> <span><FaRegClock/> Canlı </span></button>
            </TabList>
            <TabPanel tabId="basic-tab-one" className={"content"}>
              <FootballPage/>
            </TabPanel>
            <TabPanel tabId="basic-tab-two">
              <p>Tab 2 content</p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default App;