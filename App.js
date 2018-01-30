import React from 'react';
import PropTypes from 'prop-types'
import { Font, AppLoading } from 'expo';
import { ThemeProvider } from 'react-native-material-ui';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';
import Home from './componentes/home';
import uiTheme from './theme';
import { config } from './configs';
firebase.initializeApp(config);

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false // Required as React-Native Version
        }
    };

    async componentWillMount() {    
        await Font.loadAsync({
        'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        }).catch(err => console.log(err))      
    }

    render() {
        if (!this.state.fontLoaded){
            return <AppLoading 
                // startAsync={this.componentWillMount}
                // onFinish={() => this.setState({ isReady: true })}
                // onError={constructor.warn}
            />
        } else {            
            return (
                <Provider store={store}>
                    <ThemeProvider uiTheme={uiTheme}>
                        <Home />
                    </ThemeProvider>
                </Provider>
            );
        }
        
    }
}





