import {DoctorSearch} from './../js/doctor.js';

let display = function(doctors){
  $('#doctors').html('');
  if(doctors.length > 0){
    doctors.forEach(function(doctor){
      $('#doctors').append(
        `<div class='card bg-secondary mb-3'><div class='card-body'> ${doctor.title} ${doctor.first_name} ${doctor.last_name}, ${doctor.accepting_patients ? 'Currently accepting patients' : 'Currently not accepting patients'}<br>${doctor.city}, ${doctor.state}, ${doctor.street}, zip: ${doctor.zip}<br>${doctor.specialty}<br>${doctor.website ? '<a href="' + doctor.website + '">' + doctor.website + '</a><br>' : ''}Phone: ${doctor.phone}</div></div>`
      );
    });
  }
  else {
    $('#doctors').append('<h2>No Results Returned</h2>')
  }
};

$(document).ready(function(){
  $('#illnessSearch').click(function(){
    let illness = $('#illness').val();
    let doctorSearch = new DoctorSearch();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&`;
    doctorSearch.search(url, display);
  });

  $('#nameSearch').click(function(){
    let name = $('#name').val();
    debugger;
    let doctorSearch = new DoctorSearch();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&`;
    doctorSearch.search(url, display);
  });
});
