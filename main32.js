// fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((completedata)=>{
//     let data1='';
//     completedata.map((values)=>{
//         data1 += `<div class="card">
//         <h2 class="useridname" id="id">${values.id}</h2>
//         <p class="name">${values.name}</p>
//         <p class="email">${values.email}</p>
//         <p class="complete">${values.phone}</p>
//         <button type="button" id= "btn" >post</button>
//         </div>`
//     });
//     document.getElementById("cards").innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);
// }
// )
// let id =document.getElementsById("id").innerHTML;
// let btn=document.getElementsById("btn");
// btn.addEventListener("click", function(){
//       fetch('https://jsonplaceholder.typicode.com/posts?userId=id').then((data)=>{
// // console.log(data);
// return data.json();
// }).then((completedata)=>{
//     console.log(completedata);
// }
// )
// })



// const words = []
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(function (result) {
//     // console.log('Result', result)
//     for (var i = 0; i < result.length; i++) {
//       words.push(result[i])
//     }
//     console.log('Words', words)
//   })
//   .catch(error => console.log('error', error));

  // let data =[];
  // (
  //   function(){
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(json =>{
  //       data = [...json]
  //     })
  //   }
    
  // )();
  // setTimeout(()=>{
  //   console.log(data)
  // },3000)
//   function getData(){
//     return new Promise((resolve, reject)=>{
//       fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
//         return response.json();
//       }).then (data_from =>{
//         let data= data_from.results;
//         // let datai= data_from.results.id;
//         resolve(data);
//         resolve(datai);
//       })
//     }
//     )
//   }

//   let movies = '';
// getData().then(data => {
//   movies = data;
// });


// const data= localStorage.getItem('data');
// if(!data){
// fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
// // console.log(data);
// return data.json();
// }).then((completedata)=>{
//     console.log(completedata);
// }
// )

// }

//   fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((completedata)=>{
//     let data1='';
//     completedata.map((values)=>{
//         data1 += `<div class="card">
//         <h2 class="useridname" id="id">${values.id}</h2>
//         <p class="name">${values.name}</p>
//         <p class="email">${values.email}</p>
//         <p class="complete">${values.phone}</p>
//         <button type="button" id= "btn">post</button>
//         </div>`
//     });
//     document.getElementById("cards").innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);
// }
// )
 var id =3;
 fetch('https://jsonplaceholder.typicode.com/posts?userId='+id).then((data)=>{
// console.log(data);
return data.json();
}).then((completedata)=>{
    console.log(completedata); 
}
)