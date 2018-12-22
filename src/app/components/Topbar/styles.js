import gb from './../../assets/css/globals';

const topbarCont = {
  backgroundColor: gb.primaryBlue
}

const address = {
  color: gb.white
}
const phone ={
  color: gb.white
}

const icon ={
  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
  color: gb.white,
  padding: 5
}


export default  {
  gb:gb,
  topbarCont: topbarCont,
  address: address,
  phone: phone,
  icon: icon,
  aptBtn:{
    backgroundColor: gb.primaryYellow,
    border: 'none',
    margin: 5
  }
  
}