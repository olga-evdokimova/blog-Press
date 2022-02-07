
//=========================================================================
//На  @media (max-width: 768px) открыть контент по клику на элемент сайтбара , закрыть контент по кнопке "< назад"================================
const openContent = () => {
    const sidebarItem = document.querySelectorAll('.sidebar-item');
    const contentLink = document.querySelector('.content__link');

    sidebarItem.forEach(item => {
        const content = document.querySelector('.content');
        const contentInner = document.querySelector('.content__inner');

        item.addEventListener('click', () => {
            content.classList.toggle('open');
            contentInner.classList.toggle('open');

        });
        contentLink.addEventListener('click', () => {
            content.classList.remove('open');
            contentInner.classList.remove('open');

        })
    });

}
openContent();

//Анимация текста при загрузке страницы================================================
const animText = document.querySelectorAll('.anim-text');
const anim = document.querySelectorAll('.anim');
const animMenu = document.querySelectorAll('.anim-menu');

window.onload = () => {
    animText.forEach((item) => item.classList.add('visible-text'));
    anim.forEach((item) => item.classList.add('visible'));
    animMenu.forEach((item) => item.classList.add('visible-menu'));
}

//==============================================
const footer = document.querySelector('.footer__inner')
const footerRect = footer.getBoundingClientRect();// возвращает размер элемента и его позицию относительно viewport
const sidebarItems = document.querySelector('.sidebar__items');


let i = 0
window.addEventListener("scroll", () => {
    i++
    i = 0
    const a = window.scrollY + window.innerHeight //высота страницы в момент скрола
    const b = document.body.scrollHeight - footerRect.height //высота всей страницы  до футера
    const reachedFooter = a >= b
   
  
    //когда скролл доходит до футера , в sidebar__items добавляем bottom(высота футера)
    if (reachedFooter) {
        sidebarItems.style.bottom = `${a - b}px`

    } else {
        sidebarItems.style.bottom = "0px"
    }

})

const footerHeight = footer.offsetHeight;
const mediaQuery = window.matchMedia('(max-width: 992px)')
if (mediaQuery.matches) {
    sidebarItems.style.bottom = `${footerHeight}px`
} else {

}

