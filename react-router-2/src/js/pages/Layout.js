import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.replaceState(null, "/");
	}
	render() {
		return (
			<div>
				<h1>Title goes here</h1>
				{this.props.children}
				<Link class="btn btn-primary" to="archives">archives</Link>
				<Link class="btn btn-danger" to="settings">settings</Link>
				<button class="btn btn-primary" onClick={this.navigate.bind(this)}>featured</button>
			</div>
		);
	}
}