
// Global variable with 60 attractions (JSON format)
// console.log(attractionData);

dataFiltering();

function dataFiltering() {
	var selectBox = document.getElementById("attraction-category");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	var attractions = attractionData;
	if (selectedValue!= "All Attractions"){
		attractions.filter(attractions => (attractions.Category = selectedValue))
	}
	attractions=attractions.sort((a,b)=> b -a).filter((value, index) => (index < 5));
	renderBarChart(attractions);
	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

}

function dataManipulation(){
	var selectBox = document.getElementById("attraction-category");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	
	dataFiltering();

}