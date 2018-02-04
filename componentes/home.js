import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainNav from '../navigators/mainNav';
import LoginScreen from '../screens/LoginScreen';

const Home = ({ uid }) => {
    console.log(uid)
    if (!uid) {
        return <LoginScreen />
    } else {
        return <MainNav screenProps={uid} />
    }
}

const mapStateToProps = state => {
    return {
        uid: state.users.uid
    }
}

Home.propTypes = {
    uid: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Home);