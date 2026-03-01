const form = document.querySelector('form')
const foodInput = document.getElementById('food')
const caloriesInput = document.getElementById('calories')
const foodList = document.getElementById('foodList')
const totalCalories = document.getElementById('totalCalories')
const resetButton = document.getElementById('resetButton')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let food = foodInput.value
    let calories = caloriesInput.value

    foodList.innerHTML +=
        `
    <tr>
        <td>${food}</td>
        <td>${calories}</td>
        <td><button onclick = "this.closest('tr').remove()">Remove</button></td>
    </tr>
        `

    foodInput.value = ''
    caloriesInput.value = ''

    let total = 0
    total += Number(calories)
    totalCalories.textContent = `Total Calories: ${total}`



})