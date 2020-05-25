import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import FirebaseService from './services/firebaseService';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { usuarios: [] };
  }

  componentDidMount() {
    FirebaseService.getDataList('Usuarios', dataIn => this.setState({usuarios: dataIn}), 10);
  };

  render() {
    return (
      <View>
        { this.state.usuarios.map(usuario => <Text>{usuario.nome}</Text>) }
      </View>
    );
  }
}
