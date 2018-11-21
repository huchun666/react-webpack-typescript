import * as React from "react";
import { Home } from "./Home";
export interface HelloProps {
    compiler: string;
    framework: string;
}
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return  <div>Hello from {this.props.compiler} and {this.props.framework}!
                    <Home testInterface="testInterface"></Home>
                </div>
    }
}