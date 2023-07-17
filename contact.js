
// Minimum Date is the Current Date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("Date").setAttribute("min", today);

//Limit the date selection
// Get the date input field
var dateInput = document.getElementById("Date");

// Add event listener for date input
dateInput.addEventListener("input", function() {
  var selectedDate = new Date(this.value);

  // Check if selected date is a Sunday (day of week = 0)
  if (selectedDate.getDay() === 0) {
    // Set the value to an empty string to prevent selection
    this.value = "";
    alert("Hi! We don't have any business operations on Sunday. Please select other day.");
  }
});


//Setting the time
function validateTime(selectedTime) {
  var minTime = '09:00';
  var maxTime = '17:00';
  
  if (selectedTime < minTime || selectedTime > maxTime) {
    alert('Please select a time between 9:00 AM and 5:00 PM only.');
    document.getElementById('Time').value = ''; // Clear the input value
  }
}


//For the Buttons Services
const Service = window.localStorage.getItem('specificservice');

// document.getElementById('specificservice').textContent = Service; //in text form

const dropdownvalue = document.getElementById('dd'); 

if (dropdownvalue === 0){ //For Service Select Option

  alert('Please select a service.');


}

if (Service === 'Hair-Haircut'){
  dropdownvalue.value='Hair-Haircut';
}
else if (Service === 'Hair-HairBlower'){
  dropdownvalue.value='Hair-HairBlower';
}
else if (Service === 'Hair-HairIron'){
  dropdownvalue.value='Hair-HairIron';
}
else if(Service === 'Hair-HairColor'){
  dropdownvalue.value='Hair-HairColor';
}
else if(Service === 'Hair-Rebond'){
  dropdownvalue.value='Hair-Rebond';
}
else if(Service === 'Hair-Brazillian'){
  dropdownvalue.value='Hair-Brazillian';
}
else if(Service === 'Nails-Manicure'){
  dropdownvalue.value='Nails-Manicure';
}
else if(Service === 'Nails-Pedicure'){
  dropdownvalue.value='Nails-Pedicure';
}
else if(Service === 'Wellness-RegularMassage'){
  dropdownvalue.value='Wellness-RegularMassage';
}
else if(Service === 'Wellness-Footspa'){
  dropdownvalue.value='Wellness-Footspa';
}
else if(Service === 'Beauty-HandM'){
  dropdownvalue.value='Beauty-HandM';
}
else if(Service === 'Beauty-EyebrowThread'){
  dropdownvalue.value='Beauty-EyebrowThread';
}
else if(Service === 'Beauty-EyelashExtension'){
  dropdownvalue.value='Beauty-EyelashExtension';
}
else{
  dropdownvalue.value='Select a Service';
}


// Send Button
function checkSelection() {
  var selectElement = document.getElementById("dd");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  if (selectedOption === "Select a Service") {
      alert("Please select a Service before submitting.");
      return false;
  }

  return true;
}


   

