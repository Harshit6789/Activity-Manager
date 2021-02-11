function calendardata() {
	var sampleEvents = {
		"monthly": [
			{
				"id": 1,
				"name": "Whole month event",
				"startdate": "2016-10-01",
				"enddate": "2016-10-31",
				"starttime": "12:00",
				"endtime": "2:00",
				"color": "#99CCCC",
				"url": ""
			},
			{
				"id": 2,
				"name": "Test encompasses month",
				"startdate": "2016-10-29",
				"enddate": "2016-12-02",
				"starttime": "12:00",
				"endtime": "2:00",
				"color": "#CC99CC",
				"url": ""
			},
			{
				"id": 3,
				"name": "Test single day",
				"startdate": "2016-11-04",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#666699",
				"url": "https://www.google.com/"
			},
			{
				"id": 8,
				"name": "Test single day",
				"startdate": "2016-11-05",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#666699",
				"url": "https://www.google.com/"
			},
			{
				"id": 4,
				"name": "Test single day with time",
				"startdate": "2016-11-07",
				"enddate": "",
				"starttime": "12:00",
				"endtime": "02:00",
				"color": "#996666",
				"url": ""
			},
			{
				"id": 5,
				"name": "Test splits month",
				"startdate": "2016-11-25",
				"enddate": "2016-12-04",
				"starttime": "",
				"endtime": "",
				"color": "#999999",
				"url": ""
			},
			{
				"id": 6,
				"name": "Test events on same day",
				"startdate": "2016-11-25",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#99CC99",
				"url": ""
			},
			{
				"id": 7,
				"name": "Test events on same day",
				"startdate": "2016-11-25",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#669966",
				"url": ""
			},
			{
				"id": 9,
				"name": "Test events on same day",
				"startdate": "2016-11-25",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#999966",
				"url": ""
			},
			{
				"id": 10,
				"name": "no evnet 1",
				"startdate": "2016-11-01",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "#99CC99",
				"url": ""
			},
			{
				"id": 11,
				"name": "day",
				"startdate": "2021-08-05",
				"enddate": "",
				"starttime": "",
				"endtime": "",
				"color": "red",
				"url": ""
			}
		]
	};
	//  //$(window).load(function () {
	// $('#mycalendar').monthly({
	// 	mode: 'event',
	// 	dataType: 'json',
	// 	events: sampleEvents
	// //});
// });

// 	var monthly = [];
// 	var arr1 = JSON.parse(localStorage.getItem("User1"));
// 	console.log(">>>>>", arr1);
// 	var color = {
// 		Low: "red",
// 		Medium: "yellow",
// 		High: "green"
// 	}
// 	arr1.forEach(function (el, index) {
// 		monthly.push({
// 			id: el.index,
// 			name: el.name,
// 			startdate: el.date,
// 			enddate: el.date,
// 			starttime: "",
// 			endtime: "",
// 			color: color[el.status]
			
			

// 		});
// 	});
// $('#mycalendar').monthly({
// 		mode: 'event',
// 		dataType: 'json',
// 		events: sampleEvents,
// 	});

}
calendardata();
