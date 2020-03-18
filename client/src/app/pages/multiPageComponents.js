import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }
    
    handleToggleMenu() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }
}
