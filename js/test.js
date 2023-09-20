// Функция нахождения среднего арифметического
function averageFn(...nums) {
  // Переменная с суммой всех чисел
  let sum = 0

  // Цикл для суммирования всех чисел
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i]
  }

  // Возращаем результат
  return sum / nums.length
}

console.log(averageFn(4, 5))