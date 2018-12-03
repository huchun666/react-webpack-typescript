import * as React from "react";

interface propTypes {
    testInterface: string
}

export default class Home extends React.Component<propTypes, {}>{
    constructor (props: any) {
        super(props);
    }
    render() {
        console.log(this.props)
        return <div>home</div>
    }
}