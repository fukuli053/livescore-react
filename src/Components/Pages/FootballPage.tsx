import React, { Component } from 'react'
import { Col } from 'reactstrap';
import GamesTable from "../GamesTable/GamesTable"

interface Props {
}
interface State {
}

export default class FootballPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <GamesTable></GamesTable>
            </div>
        )
    }
}
