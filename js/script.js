const circleArr = document.querySelectorAll('.circle-selectors')
const selectedRating = document.querySelector('.selected-rating')
const submit = document.querySelector('.submit')
const rateUs = document.querySelector('.rate-us')
const thankYou = document.querySelector('.thank-you')

circleArr.forEach(circle => {

    circle.onclick = changeRating

    function changeRating() {
        selectedRating.innerText = circle.innerText
        console.log(selectedRating.innerText)
    }

})

submit.onclick = ThankYou

function ThankYou() {

    if (selectedRating.innerText) {
        rateUs.style.display = 'none'
        thankYou.style.display = 'grid'

    } else {
        alert('Please select a rating')
        console.error('no rating selected', 'error')
    }

}


