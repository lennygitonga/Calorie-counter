const form = document.querySelector('form')
const foodInput = document.getElementById('food')
const caloriesInput = document.getElementById('calories')
const foodList = document.getElementById('foodList')
const totalCalories = document.getElementById('totalCalories')
const resetButton = document.getElementById('resetButton')

form.addEventListener('AddFood', function(event){
    event.preventDefault()
    let food = foodInput.value
    let calories = caloriesInput.value

    foodList.innerHTML +=
    `
    <tr>
        <td>${food}</td>
        <td>${calories}</td>
        <td><button>Remove</button></td>
        </tr>
        `
    }
)