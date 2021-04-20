menuNav = document.getElementById('menu-nav')
menuOpenBtn = document.getElementById('menu-open-btn')
menuCloseBtn = document.getElementById('menu-close-btn')

function hideMenu() {
	menuNav.style.maxWidth = '0rem'
}

function showMenu() {
	menuNav.style.maxWidth = '18rem'
	console.log('s')
}

menuOpenBtn.addEventListener('click', showMenu)
menuCloseBtn.addEventListener('click', hideMenu)