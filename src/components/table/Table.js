import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import { showUnits, showOneDetailUnit } from "./Action"
import { AgeFilter } from "../../utils/AgeFilter"
import { CostFilter } from "../../utils/CostFilter"

import "./table.css"

class Table extends React.Component {
	componentDidMount() {
		this.props.showUnits()
	}

	onClickRow = (e, context) => {
		this.props.showOneDetailUnit(this.props.units[e])
	}

	render() {
		const active = this.props.ageFilter.find(age => age.isActive === true)

		const filteredList = AgeFilter.filter(this.props.units, active.filter)

		const realFilteredList = CostFilter.filter(
			filteredList,
			this.props.costFilter
		)

		const tbody = realFilteredList.map(unit => {
			return (
				<tr onClick={() => this.onClickRow(unit.id - 1)} key={unit.id}>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.id}>
							{unit.id}
						</NavLink>
					</td>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.id}>
							{unit.name}
						</NavLink>
					</td>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.id}>
							{unit.age}
						</NavLink>
					</td>
					<td className="border1" style={{ borderRight: "1px solid gray" }}>
						<NavLink className="Nav_link" to={"/units/" + unit.id}>
							{unit.cost === null || unit.cost.Gold === undefined
								? ""
								: `Gold:${unit.cost.Gold}  `}
							{unit.cost === null || unit.cost.Wood === undefined
								? ""
								: `Wood:${unit.cost.Wood}  `}
							{unit.cost === null || unit.cost.Food === undefined
								? ""
								: `Food:${unit.cost.Food}  `}
						</NavLink>
					</td>
				</tr>
			)
		})

		return (
			<table>
				<thead>
					<tr>
						<th className="border id">id</th>
						<th className="border">name</th>
						<th className="border">age</th>
						<th className="border" style={{ borderRight: "1px solid gray" }}>
							costs
						</th>
					</tr>
				</thead>
				<tbody>{tbody}</tbody>
			</table>
		)
	}
}

const mapStateToProps = state => {
	return {
		units: state.units,
		ageFilter: state.ageFilter,
		costFilter: state.costFilter
	}
}

const mapDispatchToProps = {
	showUnits,
	showOneDetailUnit
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table)
