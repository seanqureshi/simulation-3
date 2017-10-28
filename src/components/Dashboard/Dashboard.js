import React, { Component } from 'react';
import './Dashboard.css';
import home from './home.png';
import search from './search.png';
import { getRecommended, addRecommended } from "../../ducks/reducer";
import { connect } from 'react-redux';
import Friend from '../Friend/Friend';

class Dashboard extends Component {

    componentWillReceiveProps(nextProps) {
        const { history, getRecommended } = this.props;
        if (nextProps.user === null && this.props.user !== null) {
            history.push('/auth');
        }

        if (nextProps.user !== null && this.props.user === null) {
            getRecommended(nextProps.user, this.state.filter);
        }
    }

    constructor() {
        super();
        this.state = {
            filter: 'first'
        };

        this.updateFilter = this.updateFilter.bind(this);
    }

    updateFilter(filter) {
        this.setState({ filter });
        const { user, getRecommended } = this.props;

        getRecommended(user, filter);
    }

    render() {
        const { logout, history, user, addRecommended } = this.props;
        const { filter } = this.state;

        // const friendsArr = this.state.friend.map((c, i) => {
        //     <Friend key={i}
        //     preview={c.previewUrl}
        //     song={c.trackName}
        //     artist={c.artistName}
        //     collection={c.collectionName}
        //     albumArt={c.artworkUrl60}
        //     type={c.kind}
        //     singlePrice={c.trackPrice}
        //     collectionPrice={c.collectionPrice }
        //     />

        // const user = this.props.user;
        return (
            <div className="dashboard">
                <nav className="header-nav">
                    <div className="header-parent">
                        <div className="header-left"></div>
                        <span className="header-title">Helo</span>
                        <a href="/">
                            <img className="header-home" src={home} alt="home" />
                        </a>
                        <a href="/search/1">
                            <img className="header-search" src={search} alt="search" />
                        </a>
                        <div className="header-mid">
                            <span className="header-text-logo">Dashboard</span>
                        </div>
                        <div className="header-right">
                            <a href='http://localhost:3005/logout'><span className="header-logout">Logout</span></a>
                        </div>
                    </div>
                </nav>
                <main className="dashboard-container">
                    <div className="dashboard-user">
                        <div className="profile-top">
                            <div className="user-container">
                                <div className="user-left">
                                    <img className="user-image" src="https://robohash.org/me" alt="user" />
                                </div>
                                <div className="user-right">
                                    <span className="name">Bender</span>
                                    <span className="name">Futurama</span>
                                    <a href="/profile">
                                        <button className="user-edit-btn">Edit Profile</button>
                                    </a>
                                </div>
                            </div>
                            <div className="content-container">
                                <span className="content-text">Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
                            </div>
                        </div>
                        <div className="friends-parent">
                            <div className="friends-child">
                                <div className="friends-header"></div>
                                <span className="header-span">Recommended Friends</span>
                                <span className="select-span">Sorted By:</span>
                                <select className="filter-menu">
                                    <option value="first">First Name</option>
                                    <option value="last">Last Name</option>
                                    <option value="gender">Gender</option>
                                    <option value="hobby">Hobby</option>
                                    <option value="h_color">Hair Color</option>
                                    <option value="e_color">Eye Color</option>
                                    <option value="birthday">Birthday</option>
                                </select>
                                <div className="friends-display">

                                    <Friend />
                                    <Friend />
                                    <Friend />
                                    <Friend />
                                    <Friend />
                                    <Friend />
                                    <Friend />
                                    <Friend />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getRecommended, addRecommended })(Dashboard);