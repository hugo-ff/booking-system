import moment from 'moment';

const findByUserPreferences = (healthProfessionals, selectedData, selectedDates) => {
	const { grades, startHour, endHour } = selectedData;

	const bookingsPerGrade = healthProfessionals.filter(({ grade }) => grade.includes(grades));

	const bookingsPerSelectedDay = selectedDates.reduce((acc, date) => {
		const parsedDate = moment(date).format('ddd, MMMM Do, YYYY');
		const onlyDay = moment(date).format('ddd');

		const datesInLaborablesDays = bookingsPerGrade.reduce((accum, doctor) => {
			const { days } = doctor;
			if (days.includes(onlyDay)) {
				const match = {
					...doctor,
					queryDate: parsedDate,
				};
				return [...accum, match];
			}
			return accum;
		}, []);

		return [...acc, ...datesInLaborablesDays];
	}, []);

	const bookingsPerDayAndTimeRange = bookingsPerSelectedDay.filter(booking => {
		const {
			hours: { starts, ends },
		} = booking;
		return (starts <= startHour && ends >= startHour) || (starts >= startHour && starts <= endHour);
	}, []);

	return bookingsPerDayAndTimeRange;
};

export default findByUserPreferences;
