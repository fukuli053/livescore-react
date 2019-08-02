import React, { Component } from 'react'
import LeaugeTable from './LeaugeTable';
import axios from "axios";
import {FaRegClock} from 'react-icons/fa';


interface Props {
}
interface State {
    matches: any[];
    leagueId: string | number;
}

let matchesData = [];
let todayDate = new Date().toISOString().slice(0,10);
export default class GamesTable extends Component<Props, State> {
    state = {
        matches: [],
        leagueId: 0
    }

    groupBy(array:any[] , f:any) {
        let groups = {};
        array.forEach(function (o) {
          var group = JSON.stringify(f(o));
          groups[group] = groups[group] || [];
          groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        })
    }

    getMatches(){
        axios.get('http://livescore-api.com/api-client/scores/live.json?key=kasJoUiNqyxQz85a&secret=SDjVU3GvnJZhCMXWWqGkkY7KxFA6OGhG')
            .then(games => games.data.data.match)
            .then(matches => {
                if(matches !== undefined && matches.length !== 0){
                    matchesData = this.groupBy(matches, (match:any) => {
                        return[match.competition_id, match.scheduled];
                    });
                    this.setState({
                            matches : matchesData
                    });
                    console.log(matchesData)
                }
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getMatches();
    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState({matches: []});
        this.getMatches();
    }

    renderNoResults() {
        return (
            <div className="no-match-live">
                <h1><FaRegClock/></h1> 
                Şu an devam eden maç bulunmamaktadır. 
            </div>
        );
    }

    render() {

        const { matches } = this.state;
        return (
            matches.length ? matches.map(league => <LeaugeTable leauge={league}/>) : this.renderNoResults()
        )
    }
}
