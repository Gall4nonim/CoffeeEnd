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


const hideNav = () => {
	nav.classList.remove('active');
	dropdowns.forEach(dropdown => {
	  dropdown.classList.remove('show-dropdown');
	});
	arrowUps.forEach(arrowUp => {
	  arrowUp.classList.add('hide-arrow');
	});
	arrowDowns.forEach(arrowDown => {
	  arrowDown.classList.remove('hide-arrow');
	});
	dropdowns.forEach(dropDown => {
	  dropDown.classList.remove('slide-in');
	});
	dropdowns.forEach(dropDown => {
	  dropDown.classList.remove('slide-out');
	});
	dropdownStates.fill(false);
  };

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

const slides = document.querySelectorAll('.slides .slide')
const nextBtn = document.querySelector('.arrow-next')
const prevBtn = document.querySelector('.arrow-prev')
let currentSlide = 0
// let slideInterval = setInterval(nextSlide, 4000)

function nextSlide() {
	slides[currentSlide].classList.remove('showing')
	currentSlide = (currentSlide + 1) % slides.length
	slides[currentSlide].classList.add('showing')
}

function prevSlide() {
	slides[currentSlide].classList.remove('showing')
	currentSlide = (currentSlide - 1 + slides.length) % slides.length
	slides[currentSlide].classList.add('showing')
}

document.addEventListener('DOMContentLoaded', function () {
	var card = document.querySelector('.card')
	var cardText = document.querySelector('.card-text2')

	card.addEventListener('mouseenter', function () {
		cardText.classList.add('show-animation')
		cardText.classList.remove('hide-animation')
	})

	card.addEventListener('mouseleave', function () {
		cardText.classList.add('hide-animation')
		cardText.classList.remove('show-animation')
	})
})

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
//hide animation

const cards = [...document.querySelectorAll('.card')]
const cardTexts = [...document.querySelectorAll('.card-text2')]
cards.forEach(
	(card, index) => {
		card.addEventListener('mouseenter', () => {
			cardTexts[index].classList.add('hide-icon')
		})
	},
	{ once: true }
)

const menuLinks = document.querySelectorAll('.list a');
menuLinks.forEach(link => {
  link.addEventListener('click', hideNav);
});

//menu-select

const coffee = document.querySelector('.coffee-button')
const tea = document.querySelector('.tea-button')
const cake = document.querySelector('.cake-button')
const cupCake = document.querySelector('.cupcake-button')

const menuCoffee = document.querySelector('.menu-coffee')
const menuHotDrinks = document.querySelector('.menu-hot-drinks')
const menuCake = document.querySelector('.menu-cake')
const menuCupCake = document.querySelector('.menu-cupcake')

const changeToCoffee = () => {
	menuCoffee.classList.add('menu-show')
	menuCake.classList.remove('menu-show')
	menuHotDrinks.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	coffee.style.backgroundColor = '#573517'
	tea.style.backgroundColor = '#cfa47e'
	cake.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToTea = () => {
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.add('menu-show')
	menuCake.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	tea.style.backgroundColor = '#573517'
	coffee.style.backgroundColor = '#cfa47e'
	cake.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToCake = () => {
	menuCake.classList.add('menu-show')
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.remove('menu-show')
	menuCupCake.classList.remove('menu-show')
	cake.style.backgroundColor = '#573517'
	coffee.style.backgroundColor = '#cfa47e'
	tea.style.backgroundColor = '#cfa47e'
	cupCake.style.backgroundColor = '#cfa47e'
}
const changeToCupCake = () => {
	menuCupCake.classList.add('menu-show')
	menuCoffee.classList.remove('menu-show')
	menuCoffee.classList.add('menu-hide')
	menuHotDrinks.classList.remove('menu-show')
	menuCake.classList.remove('menu-show')
	cupCake.style.backgroundColor = '#573517'
	cake.style.backgroundColor = '#cfa47e'
	coffee.style.backgroundColor = '#cfa47e'
	tea.style.backgroundColor = '#cfa47e'
}

tea.addEventListener('click', changeToTea)
coffee.addEventListener('click', changeToCoffee)
cake.addEventListener('click', changeToCake)
cupCake.addEventListener('click', changeToCupCake)

//resevation
const people = document.querySelector('#people')
const username = document.querySelector('#username')
const number = document.querySelector('#number')
const email = document.querySelector('#email')
const date = document.querySelector('#date')

const sendBtn = document.querySelector('.send-btn')
const clearBtn = document.querySelector('.clear-btn')
const closeBtn = document.querySelector('.close-btn')

const popup = document.querySelector('.popup')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	const errorPeople = document.querySelector('.error-people')
	formBox.classList.add('error')
	errorMsg.textContent = msg
	errorPeople.textContent = 'Wybierz ilosc osób'
}
const cleanError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			cleanError(el, el.placeholder)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `Minimalna ilość znaków to ${min}`)
	}
}

const checkMail = email => {
	const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

	if (re.test(email.value)) {
		cleanError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([people, username, number, email, date])
	checkLength(username, 3)
	checkLength(number, 9)
	checkMail(email)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	const inputs = [people, username, number, email, date]
	inputs.forEach(e => {
		e.value = ''
		cleanError(e)
	})
})

closeBtn.addEventListener('click', e => {
	e.preventDefault()
	popup.classList.remove('show-popup')
	const inputs = [people, username, number, email, date]
	inputs.forEach(e => {
		e.value = ''
	})
})

//faq

const faqQuestions = document.querySelectorAll('.faq-question')

function toggleAnswer(event) {
	const faqAnswer = event.currentTarget.nextElementSibling
	const arrow = event.currentTarget.querySelector('.fa-chevron-down')
	arrow.classList.toggle('rotate')
	faqAnswer.classList.toggle('faq-answer-active')
}
faqQuestions.forEach(faqQuestion => {
	faqQuestion.addEventListener('click', toggleAnswer)
})

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



