
// fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
// // console.log(data);
// return data.json();
// }).then((completedata)=>{
//     console.log(completedata); 
// }
// )


// function vibe(){
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
.then((json)=>{
  let data = json;
  localStorage.setItem("use", JSON.stringify(data));
});
let userData = JSON.parse(localStorage.getItem("use"));
console.log(userData);
// let data1='';
userData.map((values)=>{
  document.getElementById("cards").innerHTML+= `<div class="card">
          <h2 class="useridname" id="id">${values.id}</h2>
          <p class="name">${values.name}</p>
          <p class="email">${values.email}</p>
          <p class="complete">${values.phone}</p>
          <button type="button" onclick="viv(${values.id})">post</button>
          <button type="button" onclick="del(${values.id})">delete</button>
          </div>`
      });
    // }
    let addtaskinput= document.getElementById("addtaskinput");
    // let addtaskinputp= document.getElementById("addtaskinputp");
    let addtaskbtn = document.getElementById("addtaskbtn");
    addtaskbtn.addEventListener("click", function(){
   let addtaskinputval = addtaskinput.value;
  //  let addtaskinputvalp = addtaskinputp.value;
      let userData  = JSON.parse(localStorage.getItem("use"));
     
        userData.push(addtaskinputval);
      localStorage.setItem("use", JSON.stringify(userData));
      // window.location.reload();
    })
//     let add_btn2= document.getElementById("add_btn2");
//     add_btn2.addEventListener("click",function(e) {
//       e.preventDefault() 
//         var userid = document.getElementById("new_Id").value;
//         var new_title = document.getElementById("new_name").value;
//         var new_body = document.getElementById("new_email").value;
  
//         console.log("Input Data: " + userid + " " + new_title + " " + new_body);
  
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//               title: new_title,
//               body: new_body,
//               userId: userid
//             }),
//             headers: {
//               "Content-type": "application/json; charset=UTF-8"
//             }
//           })
//           .then(response => response.json())
//           .then(json => {
//             // console.log('response: ' + JSON.stringify(json));
//             let data = json;
//             localStorage.setItem("use", JSON.stringify(data));
//           });
//           let userData = JSON.parse(localStorage.getItem("use"));
// console.log(userData);
//       }

//     )


    function viv(id){
      document.location=`index2.html?${id}`
      // let ide = id;
      console.log(id);
      
}
function del(id){
  let dim= id-1;
  let userData = JSON.parse(localStorage.getItem("use"));
  userData.splice(dim,1);
  localStorage.setItem("use", JSON.stringify(userData));
   window.location.reload();
}
    