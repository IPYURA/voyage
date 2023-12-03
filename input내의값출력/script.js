const cba = document.querySelector("#cb1");
let checkedA = cba.checked;
// const cbb = document.querySelector("#cb2");
// let checkedB = cbb.checked;
// const cbc = document.querySelector("#cb3");
// let checkedC = cbc.checked;

cba.addEventListener("change", (e)=>{
  console.log(e.target.checked);
})