import React from "react";

export default class Layout extends React.Component {
	constructor(){
		super();
			this.name = "Jason"
	}
    render() {
    	const name = "Jason";
        return (
            <h1>It works {this.name}</h1>
        );
    }
}