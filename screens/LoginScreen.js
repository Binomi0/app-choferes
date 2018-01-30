import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { TextInput, Text, View, FlatList, StyleSheet, TabBarIOS, ScrollView, Image, ActivityIndicator, Animated, TouchableHighlight, } from 'react-native';
import FadeInView from '../componentes/FadeInView';
import { Button, ActionButton } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = (name, size, color) => <Icon name={name} size={size} color={color} />

const Loading = () => <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
  <ActivityIndicator color='blue' size='large'/>
</View>

class LoginScreen extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      response: ''
    }
    this.confirmarFormulario = this.confirmarFormulario.bind(this)
  }

  static navigationOptions = {
    title: 'Acceso a Satur App',    
    //headerRight: <Button text="Info" />
  };
    
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let data = firebase.database().ref('users/' + user.uid)
        data.on('value', snapshot => {
          let userData = snapshot.val()
          this.props.setPosition(userData.position)
          this.props.setUser(user.uid, user.refreshToken, userData.role)
        })
      }
    })
  }

  createnewUser(email, password) {    
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  confirmarFormulario() {
    let { email, password } = this.state;
    if (!email || !password) {
      alert('Tienes que introducir tus datos correctamente para poder acceder')
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.setUser(user.uid, user.token, 'chofer')
      }).catch(err => {
        if (err.code === "auth/user-not-found") {
          let r = confirm('¿Quieres crear una cuenta nueva con el correo: ', email)
          if (r) createnewUser(email, password)
        } else {
          alert(err.code)
        }      
      })
    }
  }

  _handlePress = (item) => {
    this.props.navigation.navigate(item);
  }

  render() {   
    // console.log('THIS.PROPS LOGINSCREEN', this.props) 
    let { email, password } = this.state
    return (
      <View style={{alignItems: 'center', justifyContent: 'flex-start', flex: 1, marginTop: 100 }}>
        <FadeInView>
          <Image
            source={{ uri: 'http://contenedoressatur.com/wp-content/uploads/2015/11/logo21.png'}}
            style={{ width: 245, height: 86, marginBottom: 40 }}
          />
        </FadeInView>
        <Text style={{color:'#444', fontSize: 24, marginBottom: 20}}>{myIcon('key', 24, '#444')}  Acceso a Satur</Text>
        <TextInput
            style={{width: '80%', borderBottomWidth: 1, borderBottomColor: '#444', textAlign: 'center', height: 40, marginBottom: 20}}
            onChangeText={(email) => this.setState({email})}
            value={email}
            placeholder='Usuario'
            autoFocus={true}
        />
        <TextInput
            style={{marginBottom: 20, width: '80%', borderBottomWidth: 1, borderBottomColor: 'blue', textAlign: 'center', height: 40 }}
            onChangeText={(password) => this.setState({password})}
            value={password}
            placeholder='Contraseña'
            secureTextEntry={true}
        />  

        <TouchableHighlight onPress={this.confirmarFormulario.bind(this)}>
          <Text>INICIAR SESIÓN</Text>
        </TouchableHighlight>              
            
        {/* <Button primary raised onPress={this._handlePress.bind(this, 'Pedidos')} style={{ container: { marginBottom: 14 }}} text='Mis Pedidos' /> */}
        {/* <Button primary raised onPress={this._handlePress.bind(this, 'Choferes')} style={{ container: { marginBottom: 14 }}} text='Chóferes' /> */}
        {/* <Button primary raised onPress={this._handlePress.bind(this, 'Perfil')} style={{ container: { marginBottom: 14 }}} text='Perfil' /> */}
          
      </View>
    )
  }
  
}

const styles = {
  container: {
    marginBottom: 100
  }
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (uid, refreshToken, role) => {
      dispatch({
          type: 'SET_USER',
          payload: { uid: uid, refreshToken: refreshToken, role: role }
        })
      },
    setPosition: position => {
      dispatch({
        type: 'UPDATE_POSITION',
        payload: position
      })
    }    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);