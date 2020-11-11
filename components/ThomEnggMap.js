import {Component} from 'react'
import GoogleMapReact from 'google-map-react';

const ThomEnggMapComponent = ({ text }) => <div>{text}</div>;

class ThomEnggOneMap extends Component
{
    static defaultProps = {
        center: {
            lat: 19.158879,
            lng: 73.243655
        },
        zoom: 11
    };

    render()
    {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '121vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <homEnggMapComponent
                        lat={19.158879}
                        lng={73.243655}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default ThomEnggOneMap;

// GOOGLE MAp api KEY -'AIzaSyD_2YXC35p2RnXJjAbF3nPimOvpZJcgsmU'