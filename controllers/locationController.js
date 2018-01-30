import React from 'react'
import { connect } from 'react-redux'
import { View, Text,  } from 'react-native'
import { getUserLocation } from '../functions'

class Location extends React.Component {
    
    componentDidMount() {
        let { setLocation, coords } = this.props
        console.log(setLocation)
        console.log(coords)
        
    }
    

    render() {
        return (
            <View><Text> Location </Text></View>
        )
    }
}



export default connect(null, mapDispatchToProps)(Location);