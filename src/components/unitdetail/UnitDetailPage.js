import React from "react"
import { connect } from "react-redux"

import { Menu } from "../menu/Menu"

import "./unitdetail.css"

class UnitDetailPage extends React.Component {
	render() {
		return (
			<div className="unitDetailContainer">
				<Menu />
				<table className="unitDetailTable">
					<tbody>
						<tr>
							<td className="leftTd">ID</td>
							<td className="rightTd">{this.props.unit.id}</td>
						</tr>
						<tr>
							<td className="leftTd">Name</td>
							<td className="rightTd">{this.props.unit.name}</td>
						</tr>
						<tr>
							<td className="leftTd">Description</td>
							<td className="rightTd">{this.props.unit.description}</td>
						</tr>
						<tr>
							<td className="leftTd">Min. Required Age</td>
							<td className="rightTd">{this.props.unit.age}</td>
						</tr>
						<tr>
							<td className="leftTd">Wood Cost</td>
							<td className="rightTd">
								{this.props.unit.cost === null ||
								this.props.unit.cost.Wood === undefined
									? ""
									: this.props.unit.cost.Wood}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Food Cost</td>
							<td className="rightTd">
								{this.props.unit.cost === null ||
								this.props.unit.cost.Food === undefined
									? ""
									: this.props.unit.cost.Food}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Gold Cost</td>
							<td className="rightTd">
								{this.props.unit.cost === null ||
								this.props.unit.cost.Gold === undefined
									? ""
									: this.props.unit.cost.Gold}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Build Time</td>
							<td className="rightTd">
								{this.props.unit.build_time === undefined
									? ""
									: this.props.unit.build_time}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Reload Time</td>
							<td className="rightTd">
								{this.props.unit.reload_time === undefined
									? ""
									: this.props.unit.reload_time}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Hit Points</td>
							<td className="rightTd">{this.props.unit.hit_points}</td>
						</tr>
						<tr>
							<td className="leftTd">Hit Attack</td>
							<td className="rightTd">
								{this.props.unit.attack === undefined
									? ""
									: this.props.unit.attack}
							</td>
						</tr>
						<tr>
							<td
								className="leftTd"
								style={{ borderBottom: "1px solid black " }}
							>
								Accuracy
							</td>
							<td className="rightTd">
								{this.props.unit.accuracy === undefined
									? ""
									: this.props.unit.accuracy}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		unit: state.unit
	}
}

export default connect(mapStateToProps)(UnitDetailPage)
