import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap';
import {GiSoccerBall} from "react-icons/gi";
import "./Details.css"

interface Props {
    match?: string[];
}
interface State {

}

export default class Details extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div className="match-details">
                <div className="col-md-12 body">
                    <Row className={"teams"}>
                        <Col sm={{ size: '2', offset: 3 }}>
                            <div className="team-logo">
                                <img src={"http://d.kibris724.com/news/92268.jpg"} className={"img-fluid"}alt="Logo" />
                            </div>
                            <div className="team-name">
                                Galatasaray  
                            </div>
                            <div className="scorers">
                                <GiSoccerBall/> 2' M. Linnes
                            </div>
                        </Col>
                        <Col sm={{ size: '2'}}>
                            <div className="detail-date">
                                1.08.2019 | 19:00
                            </div>
                            <div className="detail-time">
                                90 + 3'
                            </div>
                            <div className="detail-score">
                                1 - 1
                            </div>
                            <div className="detail-league">
                                Spor Toto Süper Lig
                            </div>
                            <div className="detail-stadium">
                                Türk Telekom Stadyumu
                            </div>
                        </Col>
                        <Col sm={{ size: '2'}}>
                            <div className="team-logo">
                                <img src={"https://upload.wikimedia.org/wikipedia/tr/8/85/200px-Fenerbah%C3%A7e.png"} alt="Logo" />
                            </div>
                            <div className="team-name">
                                Fenerbahçe
                            </div>
                            <div className="scorers">
                                <GiSoccerBall/> 73' V.Mosses
                            </div>
                        </Col>
                    </Row>

                    <div className="stat-rows">
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                    Topla Oynama % 
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="53"> %53 </Progress>
                                    <Progress bar color="danger" value="47"> %47 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"}>
                                <div className="label">
                                    Topla Oynama % 
                                </div>
                            </Col>
                        </Row>
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                    Toplam Şut
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="30" max={37}> 30 </Progress>
                                    <Progress bar color="danger" value="7" max={37}> 7 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"} >
                                <div className="label">
                                    Toplam Şut
                                </div>
                            </Col>
                        </Row>
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                İsabetli şut 
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="14" max={18}> 14 </Progress>
                                    <Progress bar color="danger" value="4" max={18}> 4 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"}>
                                <div className="label">
                                    İsabetli şut
                                </div>
                            </Col>
                        </Row>
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                    Kurtarış
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="1" max={12}> 1 </Progress>
                                    <Progress bar color="danger" value="11" max={12}> 11 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"}>
                                <div className="label">
                                    Kurtarış
                                </div>
                            </Col>
                        </Row>
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                    Pas
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="432" max={960}> 432 </Progress>
                                    <Progress bar color="danger" value="528" max={960}> 528 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"}>
                                <div className="label">
                                    Pas
                                </div>
                            </Col>
                        </Row>
                        <Row className={""}>
                            <Col sm={2}>
                                <div className="label">
                                    Ofsayt
                                </div>
                            </Col>
                            <Col sm={{ size: '8'}}>
                                <Progress multi>
                                    <Progress bar color="warning" value="2" max={3}> 2 </Progress>
                                    <Progress bar color="danger" value="1" max={3}> 1 </Progress>
                                </Progress>
                            </Col>
                            <Col sm={2} className={"d-none d-sm-block"}>
                                <div className="label">
                                    Ofsayt
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}