const mainMenu = document.querySelectorAll('.gnb_wrap .gnb li');
const subMenu = document.querySelectorAll('.gnb_wrap .gnb li>.depth');





for(let sub of subMenu){
  sub.style.display = 'none';
  for(let menu of mainMenu) {
    menu.addEventListener('mouseenter',()=>{
      sub.style.display= 'block';
    });
  }
}