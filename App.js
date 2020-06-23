import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "3fe05a889f68731a09c5fccf26b979b3";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, logitude) => {
    const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${logitude}&APPID=${API_KEY}`
      );
      console.log(data);
  }
  getLocation = async() => {
    try {
      response = await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> :  null;
  }
}
