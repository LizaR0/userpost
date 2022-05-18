var spgUrl= window.location.search.substring(1);
console.log(spgUrl);
fetch('https://jsonplaceholder.typicode.com/users/'+ spgUrl +'/posts').then((data)=>{
// console.log(data);
return data.json();
}).then((completedata)=>{
    // console.log(completedata); 
    let data1='';
    completedata.map((values)=>{
        data1 += `<div class="cardo">
        <h2 class="useridname" id="id">${values.id}</h2>
        <p class="name">${values.userId}</p>
        <p class="email">${values.body}</p>
        <p class="complete">${values.title}</p>
        </div>`
    });
    document.getElementById("cardso").innerHTML=data1;
}
)