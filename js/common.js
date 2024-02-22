const mainMenu = document.querySelectorAll('.gnb_wrap>ul>li a');
const depth = document.querySelectorAll('.depth');

console.log(depth);

for(let mm of mainMenu){
 mm.addEventListener('mouseenter',()=>{
	for(let dt of depth){
		dt.style.display='block';
	}
 });
 mm.addEventListener('mouseleave',()=>{
	for(let dt of depth){
		dt.style.display='none';
	}
 });

}