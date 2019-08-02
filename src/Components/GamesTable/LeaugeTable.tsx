import React, { Component } from 'react'
import { FlagIcon } from "react-flag-kit";
import Game from "./Game";
import "./LeagueTable.css";
interface Props {
    leauge: any[]
}
interface State {
    
}


export default class LeagueTable extends Component<Props, State> {
    state = {
        leagueId: 0
    }

    render() {
        const {league_id, competition_name, scheduled} = this.props.leauge[0];
        return (
            <div id={league_id}>
                <div className={"league-header"}>
                    <FlagIcon code="GB" size={18} />
                    <span className={"league-name"}>{competition_name} </span>
                    <span className={"match-start-time"}>{scheduled}</span>
                </div>
                {this.props.leauge.map(match => 
                    <Game match={match}></Game>
                )}
            </div>
        )
    }
}
