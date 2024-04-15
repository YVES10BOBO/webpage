// // document.getElementById("txt").innerText = "This is test";

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     document.getElementById("txt").innerText = (result);
//   }).catch(error => {
//     document.getElementById("txt").innerText = (error);
  
//   });