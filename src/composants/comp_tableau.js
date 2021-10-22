import { Component } from "react";

export default class Tableau extends Component {

    render() {
        return (
            <table border="solid black 1px">
                <tr>
                    <td>{this.props.c1}</td>
                    <td>{this.props.c2}</td>
                    <td>{this.props.c3}</td>
                </tr>
            </table>
        );
    }

}