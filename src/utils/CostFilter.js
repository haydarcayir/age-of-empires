export const CostFilter = {
	filter: (filteredList, filter) => {
		let list = filteredList
		filter.map(unit => {
			switch (unit.name) {
				case "Wood": {
					if (unit.isActive === true) {
						list = filteredList.filter(
							l => l.cost !== null && l.cost.Wood < unit.maxValue
						)
					}
					break
				}

				case "Food": {
					if (unit.isActive === true) {
						list = list.filter(
							l => l.cost !== null && l.cost.Food < unit.maxValue
						)
					}
					break
				}

				case "Gold": {
					if (unit.isActive === true) {
						list = list.filter(
							l => l.cost !== null && l.cost.Gold < unit.maxValue
						)
					}
					break
				}
				default:
					break
			}
		})

		return list
	}
}
