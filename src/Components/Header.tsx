import React, { Component } from 'react'
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

interface Props {
    
}
interface State {
    isOpen: boolean;
}

export default class Header extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div id="brand">
                <Navbar color="dark" dark expand="xl">
                <div className="container">
                <NavbarBrand className="" href="/">Canlı Skor</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} to="/" activeClassName="active" exact>Ana Sayfa</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </div>
                </Navbar>
            </div>
        )
    }
}
