
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Tooltip, IconButton, InputBase } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import '../styles/appbar.scss';
import bookmyshow from '../assets/bookmyshow.png';
import Search from '@material-ui/icons/SearchOutlined'
import Menu from '@material-ui/icons/MenuOutlined'

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                "color": "#fff",
                "background-color": "#333648"
            }
        },
        MuiInputBase: {
            root: {
                width: "100%",
                color: "black"
            }
        },
        MuiIconButton: {
            root: {
                padding: "8px 0px 8px 0"
            }
        }
    }
})

class Appbar extends Component {

    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <MuiThemeProvider theme={theme}>
                    <AppBar>
                        <Toolbar>
                            <div className="appbar-div">
                                <div className="icon-serach-div">
                                    <img src={bookmyshow} alt="book-my-show logo" className="bookmyshow-logo" />
                                    <div className="search-bar">
                                        <Tooltip title="Search">
                                            <IconButton style={{ padding: "8px 10px 8px 10px" }}><Search /></IconButton>
                                        </Tooltip>
                                        <InputBase placeholder="Search for Movies, Events, Plays, Sports and Activities" style={{ "fontSize": "0.9em", "padding": " 7px 0 7px" }}></InputBase>
                                    </div>
                                </div>
                                <div>
                                    <ul id="menu">
                                        <li>Pune&nbsp;&#x25BE;</li>
                                        <li>English&nbsp;&#x25BE;</li>
                                        <li><button className="sign-button">Sigh In</button></li>
                                        <li className="menu-icon"><IconButton style={{ color: "white" }}><Menu /></IconButton></li>
                                    </ul>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div >
        )
    }
}

export default Appbar;