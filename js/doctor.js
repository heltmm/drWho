const apiKey = require('./../.env').apiKey;

export class DoctorSearch{
  constructor(){
    this.key = apiKey;
  }

  search(url, display){
    let key = this.key;
    let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    url = url + `user_key=${key}`;
    console.log(url);

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.response));
      }
    };

    request.open("GET", url, true);
    request.send();
    });

    promise.then(function(response) {
      let doctors = JSON.parse(response).data;
      let returned_doctors = [];
      doctors.forEach(function(doctor){
        returned_doctors.push({
        title: doctor.profile.title,
        first_name: doctor.profile.first_name,
        last_name: doctor.profile.last_name,
        accepting_patients: doctor.practices[0].accepts_new_patients,
        city: doctor.practices[0].visit_address.city,
        state: doctor.practices[0].visit_address.state,
        street: doctor.practices[0].visit_address.street,
        street2: doctor.practices[0].visit_address.street2,
        zip: doctor.practices[0].visit_address.zip,
        name: doctor.practices[0].name,
        specialty: doctor.specialties[0].description,
        website: doctor.practices[0].website,
        phone: doctor.practices[0].phones[0].number
        });
      });
      display(returned_doctors);
      }, function(error) {
        console.log(error);

    });
  }
}
