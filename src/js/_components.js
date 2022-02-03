//Высота sidebar__items минус высота header и footer ==============================
const winHeight = () => {
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.header');
    const sidebarItems = document.querySelector('.sidebar__items');
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const win = window.innerHeight;
    const heightSidebarItems = win - headerHeight - footerHeight;

    sidebarItems.style.height = `${heightSidebarItems}px`;
    
}
winHeight();

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
//==============================

// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
    const header = () => {
        const header = document.querySelector('.header');
        const sidebar = document.querySelector('.sidebar');

        let lastScrollTop = 0;


        const open = () => {
            header.classList.add("header-open");
            header.classList.remove('header-close');
            sidebar.style.paddingTop = "";
        }

        const close = () => {
            header.classList.add("header-close");
            header.classList.remove('header-open');
            sidebar.style.paddingTop = `0px`;
        }

        window.addEventListener('scroll', event => {
            let scrollDistance = window.scrollY;
            let scrollDown = scrollDistance > lastScrollTop
            let heightScrill = scrollY;

            if (scrollDown) {
                if (heightScrill > 100) {
                    close()
                }
            } else {
                open()
            }

            lastScrollTop = scrollDistance;
        });
    }
    header();
} else {
    console.log('ничего');
}



