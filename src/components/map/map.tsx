import * as React from "react";
import './map.scss';

export interface mapProps {

}
// declare var BMap;
class Map extends React.Component<mapProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div id="container">map</div>
    }
}

export default Map