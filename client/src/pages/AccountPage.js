import React from 'react';
import Header from '../components/Header';

import {Avatar} from '@material-ui/core';

var mainGridStyle = {
    display: 'grid',
    fontFamily: 'Roboto',
    paddingTop: '5vh',
    paddingLeft: '2vw'
};

var userInformationStyle = {
    display: 'flex',
    marginBottom: '20vh'
};

var avatarStyle = {
    width: '200px',
    height: '200px',
    marginLeft: '15vw',
    marginRight: '5vw'
};

var userBioStyle = {
    display: 'grid'
};

var nameStyle = {
    fontWeight: 'Bold',
    fontSize: 'xx-large'
};

var userNameStyle = {
    fontSize: 'x-large'
};


function UserPosts() {
    return <div></div>;
}

function AccountPage({props}) {
    return (
        <>
            <Header />
            <div style={{height: '64px'}}></div>
            <div style={mainGridStyle}>
                <div style={userInformationStyle} className="userInformation">
                    <Avatar style={avatarStyle}/>
                    <div style={userBioStyle}>
                        <span style={nameStyle}>(First Last)</span>
                        <span style={userNameStyle}>(@username)</span>
                        <span style={{fontWeight: 'bold'}}>About Me</span>
                        <span>I am a really cool person.</span>
                    </div>
                </div>
                <div className="userPosts">
                    <span>Posts by (Name)</span>
                    <UserPosts />
                </div>
            </div>
        </>
    );
}

export default AccountPage;