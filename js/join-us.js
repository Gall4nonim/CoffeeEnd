const burgerIcon = document.querySelector('.burger-button')
const nav = document.querySelector('.list')
const barTwo = document.querySelector('.bar-two')
const barThree = document.querySelector('.bar-three')

const dropdownBtns = document.querySelectorAll('.dropdown-btn')
const arrowDowns = document.querySelectorAll('.arrow-down')
const arrowUps = document.querySelectorAll('.arrow-up')
const hideArrows = document.querySelectorAll('.hide-arrow')
const showArrows = document.querySelectorAll('.show-arrow')
const dropdowns = document.querySelectorAll('.dropdown')
const slideIn = document.querySelectorAll('.slide-in')
const slideOut = document.querySelectorAll('.slide-out')

const showNav = () => {
	nav.classList.toggle('active')
	dropdowns.forEach(dropdown => {
		dropdown.classList.remove('show-dropdown')
	})
	arrowUps.forEach(arrowUp => {
		arrowUp.classList.add('hide-arrow')
	})
	arrowDowns.forEach(arrowDown => {
		arrowDown.classList.remove('hide-arrow')
	})
	dropdowns.forEach(dropDown => {
		dropDown.classList.remove('slide-in')
	})
	dropdowns.forEach(dropDown => {
		dropDown.classList.remove('slide-out')
	})
	dropdownStates.fill(false)
}

const burgerBtn = document.querySelector('.burger-button')

const toggleMenu = () => {
	barTwo.classList.toggle('bar-two-change')
	barThree.classList.toggle('bar-three-change')
}
burgerBtn.addEventListener('click', toggleMenu)

const dropdownStates = Array.from({ length: dropdownBtns.length }, () => false)

const showDropDown = index => {
	const dropdown = dropdowns[index]
	const arrowDown = arrowDowns[index]
	const arrowUp = arrowUps[index]

	dropdownStates[index] = !dropdownStates[index]
	dropdown.classList.toggle('show-dropdown', dropdownStates[index])
	arrowDown.classList.toggle('hide-arrow', dropdownStates[index])
	arrowUp.classList.toggle('show-arrow', dropdownStates[index])
	arrowDown.classList.toggle('show-arrow', !dropdownStates[index])
	arrowUp.classList.toggle('hide-arrow', !dropdownStates[index])
	dropdown.classList.toggle('slide-in', dropdownStates[index])
	dropdown.classList.toggle('dropdown', dropdownStates[index])
	dropdown.classList.toggle('white', !dropdownStates[index])
	dropdown.classList.toggle('slide-out', !dropdownStates[index])

	setTimeout(() => {
		dropdown.classList.toggle('hide-dropdown', !dropdownStates[index])
	}, 400)
}

dropdownBtns.forEach((dropdownBtn, index) => {
	dropdownBtn.addEventListener('click', () => {
		showDropDown(index)
	})
})

burgerIcon.addEventListener('click', showNav)
//footer email

const email2 = document.querySelector('#email2')
const newsBtn = document.querySelector('.footer-btn')
const errorEmail = document.querySelector('.error-footer')
const newsConfirm = document.querySelector('.news-confirm')
const p = document.querySelector('p')
const rec = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const checkNews = () => {
	if (email2.value === '') {
		errorEmail.classList.add('error-footer-show')
		newsConfirm.classList.remove('news-confirm-show')
	}
	if (!rec.test(email2.value)) {
		errorEmail.classList.add('error-footer-show')
		newsConfirm.classList.remove('news-confirm-show')
	} else {
		console.log('został wysłany')
		errorEmail.innerHTML = 'Jesteś teraz subskrybentem!'
		errorEmail.classList.add('error-footer-show')
		email2.value = ''
	}
}
newsBtn.addEventListener('click', checkNews)

//join-us

const job = document.querySelector('#job')
const file = document.querySelector('#file')
const jobError = document.querySelector('.job-error')
const fileError = document.querySelector('.file-error')
const jobBtn = document.querySelector('.job-btn')
const jobSend = document.querySelector('.job-send')

const checkJob = () => {
	if (job.value === '') {
		jobError.classList.add('job-error-show')
	} else {
		jobError.classList.remove('job-error-show')
	}
	if (file.value === '') {
		fileError.classList.add('file-error-show')
	}
	else {
		fileError.classList.remove('file-error-show')
	}
	if(file.value !== '' & job.value !== '') {
		jobSend.classList.add('job-send-show')
		fileError.classList.remove('file-error-show')
		jobError.classList.remove('job-error-show')
		file.value = ''
		job.value = ''
	}
}




jobBtn.addEventListener('click', e => {
	e.preventDefault()
	checkJob()
})
