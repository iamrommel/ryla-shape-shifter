//because react-native cannot do dynamic require, we need to declare them all here
export const shapeNames = {
  circle: {
    main: require('../assets/circle.png'),
    bg: require('../assets/circle-bg.png'),
  },
  pentagon: {
    main: require('../assets/pentagon.png'),
    bg: require('../assets/pentagon-bg.png'),
  },
  square: {
    main: require('../assets/square.png'),
    bg: require('../assets/square-bg.png'),
  }
}
