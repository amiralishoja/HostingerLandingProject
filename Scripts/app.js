const navToggleIcon = document.querySelector('.nav__btn--menu')
const menu = document.querySelector(".nav__menu")
const cover = document.querySelector('.cover')
const panelsName = document.querySelectorAll('.panels__name__item')

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__btn--menu--active')
    menu.classList.toggle('nav__menu--show')
    cover.classList.toggle('cover--show')
})

function navigationTabsInit(listItems, listItemActiveClass, contentItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            removeActiveClass(listItemActiveClass)
            removeActiveClass(contentItemShowClass)
            this.classList.add(listItemActiveClass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(contentItemShowClass)
        })
    })
}
function removeActiveClass(className){
    document.querySelector(`.${className}`).classList.remove(className)
}

navigationTabsInit(panelsName,'panels__name__item--active','panels__item--show')
