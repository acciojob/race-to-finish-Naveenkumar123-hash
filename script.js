window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let a=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("a")},1000
)})
let b=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("b")},2000
)})
let c=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("c")},3000
)})
let d=new Promise(resolve=>{
	setTimeout(()=>{
		resolve("d")},4000
)})
let e=new Promise(resolve=>{
	setTimeout((e)=>{
		resolve()},5000
)})
window.promises=[a,b,c,d,e];
let x=Promise.any([a,b,c,d,e]);
x.then((data)=>{
	let res=document.getElementById("output");
	res.innerText=data;
})
