import { Component } from "react";

export default class Titre extends Component {

   render() {
        return (
            <h1>{this.props.titre}</h1>
        );
    }

}