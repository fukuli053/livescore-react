import React, { Component } from 'react'
import { Col, Collapse } from 'reactstrap';
import DetailTable from '../DetailTable/DetailTable';
import "./Game.css";

interface Props {
    match: Match
}

interface Match {
    home_name: string;
    away_name: string;
    score: string;
    ht_score: string;
    time: number;
    status: string;
    scheduled: string;
} 

interface State {
    hover: boolean;
    collapse: boolean;
}

export default class Game extends Component<Props, State> {

    constructor(props: Props) {
      super(props);
      this.toggleHover = this.toggleHover.bind(this);
      this.toggle = this.toggle.bind(this);
    }

    state = {
        hover: false,
        collapse: false
    }

    changeStatus(param: string) {
        switch(param) {
          case 'FINISHED':
            return 'MS';
          case 'IN PLAY':
            return (this.props.match.time + " '");
          case 'HALF TIME BREAK':
            return 'İY';
          case 'NOT STARTED':
              return this.props.match.time;
          case 'ADDED TIME':
              return "90 +" + (this.props.match.time - 90);
          default:
            return '';
        }
      }

    toggleHover(e: any) {
        e.preventDefault();
        this.setState({hover: !this.state.hover})
    }

    toggle(e: any) {
        e.preventDefault();
        this.setState({ collapse: !this.state.collapse });
      }
    

    render() {
        let rowStyle;
        if(this.state.hover && this.state.collapse === false){
            rowStyle = {backgroundColor: "#E0E0E0", cursor:"pointer"}
        }else{
            rowStyle = {backgroundColor: "#fff" ,cursor:"pointer"}
        }

        return (
                <div className="event" style={rowStyle}  onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>
                    <div className="col-md-12 ">
                        <div className="row " onClick={this.toggle}>
                            <Col md={1} className={"d-sm-none d-none d-md-block status live "}>
                                {this.changeStatus(this.props.match.status)}
                            </Col>

                            <Col md={1} className={"status d-sm-none d-none d-md-block"}>
                                470 
                            </Col>

                            <Col xs={4} md={3} className={"home-team"}>
                                {this.props.match.home_name}
                            </Col>

                            <Col xs={4} md={3} className={"text-center"}>
                                <div className="d-none d-block d-sm-block d-md-none">
                                    {this.changeStatus(this.props.match.status)}
                                </div>
                                <span className={"score"}>{this.props.match.score}</span>
                            </Col>

                            <Col xs={4} md={3} className={"away-team"}>
                                {this.props.match.away_name}
                            </Col>

                            <Col md={1} className={"half-score d-sm-none d-none d-md-block"}>
                                {this.props.match.ht_score}
                            </Col>

                            
                        </div>
                        <div className="row">
                            <Collapse isOpen={this.state.collapse} style={{width : "100%"}}>
                                <DetailTable/>
                            </Collapse>
                        </div>
                    </div>
                </div>
                
            
        )
    }
}
