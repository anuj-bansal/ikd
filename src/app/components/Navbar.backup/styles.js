import gb from './../../assets/css/globals';
const BackImage = require('../../assets/images/nav-bg.png');
export default {
  gb:gb,
  navBack: {
    background: `url(${BackImage}) no-repeat bottom center`,
    backgroundSize: 'cover',
  },
  logo: {
    width: 200,
    paddingLeft: 20,
    paddingRight: 20
  },
  resIcon: {
    marginTop: 20,
  }
}