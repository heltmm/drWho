import {DoctorSearch} from './../js/doctor.js';

let display = function(doctors){
  $('#doctors').html('');
  doctors.forEach(function(doctor){
    $('#doctors').append(
      `<div class='card bg-light mb-3'><div class='card-body'> ${doctor.title} ${doctor.first_name} ${doctor.last_name}, Accepting patients: ${doctor.accepting_patients}<br>${doctor.city}, ${doctor.state}, ${doctor.street}, zip: ${doctor.zip}<br>${doctor.specialty}<br>Website: ${doctor.website}<br>Phone: ${doctor.phone}</div></div>`

    );
  });
};

$(document).ready(function(){
  $('#illnessSearch').click(function(){
    let illness = $('#illness').val();
    let doctorSearch = new DoctorSearch();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&`;
    doctorSearch.search(url, display);
  });

  $('#name').click(function(){
    let name = $('#name').val();
    let doctorSearch = new DoctorSearch();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${illness}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&`;
    doctorSearch.search(url, display);
  });
});
