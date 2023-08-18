import React from "react"

export class Greet extends React.Component{
	render(){
		return (
			<div className="hi">
				<p>Nice to meet you all</p>
				<p>I am {this.props.name}</p>
			</div>
		);
	}
}