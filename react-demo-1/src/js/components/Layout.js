import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor(){
		super();
			this.name = "Jason"
	}
    render() {
    	const name = "Jason";
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}