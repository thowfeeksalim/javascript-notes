let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code"

  myResolve(); // when successful
  myReject();  // when error
  });

  // "Consuming Code"
  myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);