const mainMenu = document.querySelectorAll('.gnb_wrpa>.gnb>li');
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

for(let mm of mainMenu){
	mm.addEventListener('mouseenter',()=>{
		let smHeight = mm.querySelector('ul').offsetHeight;
		let totalHeight = smHeight + headerHeight;
		header.style.height = `${totalHeight}px`;
	});
	mm.addEventListener('mouseleave',()=>{
		header.style.height = `${headerHeight}px`;
	});
}