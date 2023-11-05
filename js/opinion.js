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

// opinion

const addOpinionBtn = document.querySelector('.create-opinion')
const opinionBox = document.querySelector('.opinion-box')
const nameOpinion = document.querySelector('#name-opinion')
const opinionContent = document.querySelector('#opinion-content')
const selectSex = document.getElementById('sex-select')
const starsSelect = document.getElementById('stars-select')
const opinionError = document.querySelector('.opinion-error')


const formCheck = () => {
	if (
		selectSex.value !== '' &&
		starsSelect.value !== '' &&
		nameOpinion.value.length > 0 &&
		opinionContent.value.length > 15
	) {
		newOpinion()
		clearForm()
	} else {
		opinionError.classList.add('show-opinion-error')
	}
}


const clearForm = () => {
	nameOpinion.value = ''
	selectSex.value = ''
	opinionContent.value = ''
	starsSelect.value = ''
}


const newOpinion = () => {
	const newOpinion = document.createElement('div')
	newOpinion.classList.add('opinion')
	opinionError.classList.remove('show-opinion-error')
	let currentDate = new Date()
	let day = currentDate.getDate()
	let monthNames = [
		'stycznia',
		'lutego',
		'marca',
		'kwietnia',
		'maja',
		'czerwca',
		'lipca',
		'sierpnia',
		'września',
		'października',
		'listopada',
		'grudnia',
	]
	let month = monthNames[currentDate.getMonth()]
	let year = currentDate.getFullYear()
	newOpinion.innerHTML = `
    <div class="opinion-info">
        <div class="opinion-avatar ${selectSex.value}"></div>
        <div class="nick-time">
            <h3 class="name-opinion">${nameOpinion.value}</h3>
            <div class="time">${day} ${month}, ${year}</div>
        </div>
    </div>

    <div class="opinion-text">

        <p>${opinionContent.value}</p>
    </div>

`
opinionBox.appendChild(newOpinion)



const selectedRating = starsSelect.value;
const opinionRateDiv = document.createElement('div');
opinionRateDiv.classList.add('opinion-rate');
for (let i = 0; i < selectedRating; i++) {
	const starIcon = document.createElement('div');
	starIcon.innerHTML = ('<i class="fa-solid fa-star"></i>')
	opinionRateDiv.appendChild(starIcon);
}
newOpinion.appendChild(opinionRateDiv);
opinionBox.appendChild(newOpinion);


	
}












addOpinionBtn.addEventListener('click', formCheck)
