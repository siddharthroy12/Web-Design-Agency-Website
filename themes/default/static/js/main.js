menuNav = document.getElementById('menu-nav')
menuOpenBtn = document.getElementById('menu-open-btn')
menuCloseBtn = document.getElementById('menu-close-btn')

function hideMenu() {
	menuNav.style.display = 'none'
}

function showMenu() {
	menuNav.style.display = 'block'
}

menuOpenBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)