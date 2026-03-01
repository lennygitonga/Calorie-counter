const form = document.querySelector('form')
const foodInput = document.getElementById('food')
const caloriesInput = document.getElementById('calories')
const foodList = document.getElementById('foodList')
const totalCalories = document.getElementById('totalCalories')
const resetButton = document.getElementById('resetButton')
let total = 0
let foods = []

    window.onload = function () {
        let savedFoods = localStorage.getItem('foods')

        if (savedFoods) {
            foods = JSON.parse(savedFoods)

            foods.forEach(function (item) {
                foodList.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.calories}</td>
                    <td><button onclick="removeFood(this)">Remove</button></td>
                </tr>
            `
                total += item.calories
            })

            totalCalories.textContent = `Total Calories: ${total}`
        }
    }

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let food = foodInput.value
    let calories = caloriesInput.value

    foodList.innerHTML +=
        `
    <tr>
        <td>${food}</td>
        <td>${calories}</td>
        <td><button onclick="removeFood(this)">Remove</button></td>
    </tr>
        `
    foodInput.value = ''
    caloriesInput.value = ''

    total += Number(calories)
    totalCalories.textContent = `Total Calories: ${total}`

    foods.push({ name: food, calories: Number(calories) })
    localStorage.setItem('foods', JSON.stringify(foods))
})

    

function removeFood(button) {
    let calories = button.closest('tr').cells[1].textContent
    total -= Number(calories)
    totalCalories.textContent = `Total Calories: ${total}`
    button.closest('tr').remove()
}

resetButton.addEventListener('click', function () {
    foods = []
    foodList.innerHTML = ''
    total = 0
    totalCalories.textContent = `Total Calories: ${total}`
    localStorage.removeItem('foods')

})
