import * as React from "react";

interface testI {
    testInterface: string
}

export class Home extends React.Component<testI, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <h1>This is {this.props.testInterface}</h1>
    } 
}