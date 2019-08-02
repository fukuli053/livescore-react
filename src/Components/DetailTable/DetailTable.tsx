import React, { Component } from 'react'
import { FaInfoCircle, FaUsers } from 'react-icons/fa';
import Details from './Details';
import "./DetailTable.css"


var Tabs = require('react-web-tabs').Tabs;
var Tab = require('react-web-tabs').Tab;
var TabPanel = require('react-web-tabs').TabPanel;
var TabList = require('react-web-tabs').TabList;

interface Props {
    
}
interface State {
    
}

export default class DetailTable extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Tabs defaultTab="basic-tab-one" className={"event-detail"}>
                <TabList className={"tab-menu"}>
                    <Tab tabFor="basic-tab-one"><FaInfoCircle/> Maç Bilgileri</Tab>
                    <Tab tabFor="vertical-tab-two"><FaUsers/> Kadrolar</Tab>
                </TabList>
                <TabPanel tabId="basic-tab-one" className={"tab-panel"} component={Details}/>
                <TabPanel tabId="vertical-tab-two" className={"tab-panel"}>
                    <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three" className={"tab-panel"}>
                    <p>Tab 3 content</p>
                </TabPanel>
            </Tabs>
        )
    }
}
