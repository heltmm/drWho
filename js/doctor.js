const apiKey = require('./../.env').apiKey;

export class Doctor{
  constructor(){
    this.key = apiKey;
  }

  search(url){
    let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = ulr + `user_key=${this.key}`;
    console.log(url)

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
      let body = JSON.parse(response);
      debugger;
      }, function(error) {
        console.log(error);

    });

    }


}
