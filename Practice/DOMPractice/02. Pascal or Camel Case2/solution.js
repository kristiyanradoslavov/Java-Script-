function solve() {
  let elements = document.getElementById("text").value;
  let conversionType = document.getElementById("naming-convention").value;
  let resultingContainer = document.getElementById('result');

  let splittedElements = elements.split(' ');

  if (conversionType === 'Camel Case') {
    splittedElements = lowerAll(splittedElements)
    splittedElements = camelChange(splittedElements)
    applyResult()

  } else if (conversionType == "Pascal Case") {
    splittedElements = lowerAll(splittedElements)
    splittedElements = pascalChange(splittedElements)
    applyResult()

  } else {
    applyResult('error')
  }

  function lowerAll(input) {
    let result = []

    for (let i = 0; i < input.length; i++) {
      let changedWord = input[i].replace(input[i], input[i].toLowerCase())
      result.push(changedWord)
    }

    return result
  }

  function camelChange(input) {
    let result = []

    for (let i = 0; i < input.length; i++) {
      if (i != 0) {
        let changedWord = input[i].replace(input[i][0], input[i][0].toUpperCase())
        result.push(changedWord)
      } else {
        result.push(input[i])
      }
    }

    return result
  }

  function pascalChange(input) {
    let result = []

    for (let i = 0; i < input.length; i++) {
      let changedWord = input[i].replace(input[i][0], input[i][0].toUpperCase())
      result.push(changedWord)
    }

    return result
  }

  function applyResult(error) {
    if (!error) {
      resultingContainer.textContent = splittedElements.join('')
    } else {
      resultingContainer.textContent = 'Error!'
    }
  }
}