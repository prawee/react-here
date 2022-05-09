/**
 * @ Author: Prawee Wongsa (prawee@hotmail.com)
 * @ Create Time: 2022-05-09 14:39:28
 * @ Modified by: Prawee@hotmial.com
 * @ Modified time: 2022-05-09 15:29:09
 * @ Description:
 */
import React from 'react';
import H from "@here/maps-api-for-javascript";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        // the reference to the container
        this.ref = React.createRef();
        // reference to the map
        this.map = null;
        console.log('constructor(Map)...')
    }

    componentDidMount() {
        console.log('componentDidMount(Map)...')
        if (!this.map) {
            // instantiate a platform, default layers and a map as usual
            const platform = new H.service.Platform({
                apikey: process.env.REACT_APP_API_KEY
            });
            const layers = platform.createDefaultLayers();
            const map = new H.Map(
                this.ref.current,
                layers.vector.normal.map,
                {
                pixelRatio: window.devicePixelRatio,
                center: {lat: 13.7563, lng: 100.5018 },
                zoom: 2,
                },
            );
            this.map = map;
        }
    }

    render() {
        return (
            <div
                style={{ width: '300px', height:'300px' }}
                ref={this.ref}
            />
        )
    }
}