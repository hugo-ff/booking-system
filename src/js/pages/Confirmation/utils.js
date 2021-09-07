const filterByUserSettings = (healthProfessionals, selectedData, dates) => {
	const { grades, startHour, endHour } = selectedData;

	const filteredByGrade = healthProfessionals.filter(({ grade }) => grade.includes(grades));

	const filteredByDay = filteredByGrade.filter(({ days }) =>
		days.find(d => dates.join('').includes(d))
	);

	const filteredByTimeRange = filteredByDay.filter(({ hours }) => {
		const { starts, ends } = hours;
		return (starts <= startHour && ends >= startHour) || (starts >= startHour && starts <= endHour);
	});

	return filteredByTimeRange;
};

export default filterByUserSettings;
