import React, { Component } from 'react';
import './styles/BadgeLi.css';

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <div className="Badge-item mb-3">
                            <li key={badge.id} className="d-flex align-items-center">
                                <img className="" src={badge.avatarUrl} />
                                <div className="d-flex flex-column ml-3">
                                    <span className="d-block" >{badge.firstName} {badge.lastName}</span>
                                    <a href="www.google.com">@{badge.twitter}</a>
                                    <span>{badge.jobTitle}</span>
                                </div>
                            </li>
                        </div>
                    );
                })}
            </ul>
        )
    }
}

export default BadgesList;