import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './styles';

const IkdMapMarker = ({ text }) =>{
  return(
    <div>
      <img style={styles.marker} src={require('./../../assets/images/pin2.png')} alt="Map Pin"/>
      {text}
    </div>
  );
};

const IKDMap = () => {
const mapData = {
  center: {
    lat: 33.65,
    lng: 73.15
  },
  zoom: 14
}
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 m-0 p-0 " >
          <div style={{ height: 450, width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyC7Ts72jpNWsHkCK87nXxZSQCBboHPbk34' }}
              defaultCenter={mapData.center}
              defaultZoom={mapData.zoom}
              draggable={false}
            >
              <IkdMapMarker
                lat={33.6547816}
                lng={73.1526622}
                text={'Issaquah Kids Dentistry.'}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IKDMap;