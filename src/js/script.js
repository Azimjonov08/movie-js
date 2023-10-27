'use strict'

const elBox = document.querySelector('.box')

const films = [
    {
        name: 'name: Ambrella akademiyasi 1 2 3 fasl ',
        country: 'country: AQSH',
        year: ' year: 2021',
        time: 'time: 50minut',
        language: 'language: Uzbek (tarjima)',
        img: 'http://images.uzmovi.com/2022-07-23/069e6b742f083b7667159c138526b42c.jpg',
        btn: 'korish'

    },
    {
        name: 'name: 13 soat Bengozining sirli askarlari',
        country: 'country: AQSH',
        year: ' year: 2020',
        time: 'time: 2soat 25,inut',
        language: 'language: Uzbek (tarjima)',
        img: 'http://images.uzmovi.com/ii/1595834011/271a0984/31177664.jpg',
        btn: 'korish'

    },
    {
        name: 'name:  Alvido kristofer robin',
        country: 'mamlakati:    AQSH',
        year: 'yili:    2019',
        ganre: 'janri:  Tarjima kinolar / Melodrama',
        time: 'vaqti:   1 soat 47minut',
        img: 'http://images.uzmovi.com/2022-06-20/6dca339f5546d98efe03d838cf06c057.jpg',
        language: 'language:  Ozbek tilida (Tarjima)',
        btn: 'korish'
    },

    {
        name: 'Garri poterning 20 yilligi Xogvardsga qaytish premyera,',
        country: 'country: AQSH',
        year: 'year 2022',
        ganre: 'Tarjima kinolar / Melodrama',
        time: 'vaqti: 1 soat 34minut',
        language: 'Ozbek tilida(Tarjima)',
        img: 'http://images.uzmovi.com/ii/1642611555/d7a9dbe4/37617437.jpg',
        btn: 'korish'
    },
    {
        name: 'name: Chegarasiz 4',
        country: 'country: AQSH',
        year: ' year: 2023',
        time: 'time: 1soat 43minut',
        language: 'language: Uzbek (tarjima)',
        img: 'http://images.uzmovi.com/2023-10-14/5c419e3ac772414d8b626fe591c871cd.jpg',
        btn: 'korish'
    },
    {
        name: 'name: Oy ritsari premyera uzbek ozbek tilida barcha qismlari yangi marvel seriali',
        country: ' country: AQSH',
        year: 'year: 2022',
        time: 'time: 40 minut',
        language: 'language: Ozbek tilida (Tarjima)',
        img: 'http://images.uzmovi.com/2022-03-31/5c508a9832475a1c04a753be938b6ef4.jpg',
        btn: 'korish'
    },
    {
        name: 'name: Doktor strenj 2',
        country: 'country: AQSH',
        year: ' year: 2023',
        time: 'time: 2soat 6minut',
        language: 'language: Uzbek (tarjima)',
        img: 'http://images.uzmovi.com/2022-06-22/520cd4c1637bc7939e7942ce503b2955.jpg',
        btn: 'korish'
    },
    {
        name: 'name :Elemental Elementarno Elementar',
        country: 'country: AQSH',
        year: 'year: 2023',
        time: 'time: 1 soat 47minut',
        language: 'language: Ozbek tilida (Voxe tv Tarjima)',
        img: 'http://images.uzmovi.com/2023-09-04/93cd944419ff4db237d72fcfc31f55fa.jpg',
        btn: 'korish',
    },
    {
        name: 'name: Tinch okeani daxshatlari 1',
        country: 'country: AQSH',
        year: 'year: 2018',
        time: 'time: 2 soat 20minut',
        langugage: 'language: Ozbek tilida (Tarjima)',
        img: 'http://images.uzmovi.com/ii/1596370086/8c1d2007/31233120.jpg',
        btn: 'korish',
    },

    {
        name: 'name: Arra 9 Pila 9 Ujas film ',
        country: 'country: AQSH',
        year: ' year: 2023',
        time: 'time: 1soat 47minut',
        language: 'language: Uzbek (tarjima)',
        img: 'http://images.uzmovi.com/2023-09-03/a8f0bfad7a2827c94cb5e30a48790c75.jpg',
        btn: 'korish',
    },
]

films.forEach(function (item, index) {

    const elLi = document.createElement('li')
    const elImg = document.createElement('img')
    const elName = document.createElement('h2')
    const elCountry = document.createElement('h3')
    const elYear = document.createElement('h3')
    const elLanguage = document.createElement('h3')
    const elTime = document.createElement('h3')
    const elCards = document.createElement('div')
    const elModal = document.createElement('p')

    elImg.src = item.img
    elName.textContent = item.name
    elCountry.textContent = item.country
    elYear.textContent = item.year
    elLanguage.textContent = item.language
    elTime.textContent = item.time
    elModal.textContent = item.modal

    elImg.classList.add('img')
    elCards.classList.add('cards')
    elLi.classList.add('li')
    elModal.classList.add('modal')

    elBox.append(elLi)
    elLi.append(elImg)
    elLi.append(elCards)
    elCards.append(elName)
    elCards.append(elCountry)
    elCards.append(elYear)
    elCards.append(elLanguage)
    elCards.append(elTime)
    elCards.append(elModal)
})



elBtn.addEventListener('click', function () {
    elModal.style.display = 'flex'
})
