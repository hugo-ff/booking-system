export const API_URL = 'https://static.healthforcego.com/grades.json';

export const HEALTH_PROFESSIONALS = {
	data: {
		professionals: [
			{
				id: '1',
				name: 'Ramón Carrillo',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Tue', 'Wed', 'Fri'],
				hours: {
					starts: '09:30',
					ends: '16:00',
				},
				grade: ['SW (Support Worker)', 'HCA (Care assistant)'],
				isAvailable: true,
			},
			{
				id: '2',
				name: 'Salvador Mazza',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Tue', 'Wed', 'Fri'],
				hours: {
					starts: '10:00',
					ends: '19:00',
				},
				grade: ['SW (Support Worker)'],
				isAvailable: true,
			},
			{
				id: '3',
				name: 'Osvaldo Raffo',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Mon', 'Wed', 'Sat'],
				hours: {
					starts: '14:30',
					ends: '19:30',
				},
				grade: ['HCA (Care assistant)'],
				isAvailable: true,
			},
			{
				id: '4',
				name: 'René Favaloro',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Thu', 'Wed', 'Sat'],
				hours: {
					starts: '12:30',
					ends: '18:30',
				},
				grade: ['HCA (Care assistant)', 'SW (Support Worker)', 'RGN (Nurse)'],
				isAvailable: false,
			},
			{
				id: '5',
				name: 'Cecilia Grierson',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Mon', 'Tue', 'Thu'],
				hours: {
					starts: '09:00',
					ends: '18:00',
				},
				grade: ['RGN (Nurse)'],
				isAvailable: true,
			},
			{
				id: '6',
				name: 'Arturo Illia',
				imageUrl: 'https://randomuser.me/api/portraits/lego/3.jpg',
				days: ['Tue', 'Wed', 'Fri'],
				hours: {
					starts: '08:00',
					ends: '17:00',
				},
				grade: ['RGN (Nurse)', 'SW (Support Worker)'],
				isAvailable: false,
			},
		],
	},
};

export const HOURS = [
	'08:00',
	'08:30',
	'09:00',
	'09:30',
	'10:00',
	'10:30',
	'11:00',
	'11:30',
	'12:00',
	'12:30',
	'15:00',
	'15:30',
	'16:00',
	'16:30',
	'17:00',
	'17:30',
	'18:00',
	'18:30',
	'19:00',
	'19:30',
];
