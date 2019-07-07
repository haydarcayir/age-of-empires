import React from "react"
import { connect } from "react-redux"

import { setAgeFilter } from "./Action"

import "./ages.css"

class Ages extends React.Component {
	
	onClickLi = e => {
		let filter = e.target.innerText
		const t = this.props.ageFilter.find(age => age.isActive === true)
		if (t.filter !== filter) {
			this.props.setAgeFilter(filter)
		}
	}

	render() {
		return (
			<div className="ageContainer">
				<h4>Ages</h4>
				<ul>
					{this.props.ageFilter.map((age, index) => (
						<li
							onClick={this.onClickLi}
							key={index}
							style={{ background: age.isActive ? "gray" : "" }}
						>
							{age.filter}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		units: state.units,
		ageFilter: state.ageFilter
	}
}

const mapDispatchToProps = {
	setAgeFilter
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Ages)
