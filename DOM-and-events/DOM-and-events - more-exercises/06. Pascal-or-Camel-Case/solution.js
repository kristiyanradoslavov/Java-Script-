function solve() {
  const input = document.getElementById("text").value;
  const condition = document.getElementById("naming-convention").value;
  const spanResult = document.getElementById("result");


  let inputWords = input.split(" ");
  let result = [];
  let lowerWord;

  if (condition === "Camel Case") {
    for (let index = 0; index < inputWords.length; index++) {
      lowerWord = inputWords[index].toLowerCase();

      if (index != 0) {
        lowerWord = lowerWord.replace(lowerWord[0], lowerWord[0].toUpperCase())
      }
      result.push(lowerWord)
    }

  } else if (condition === "Pascal Case") {
    for (let index = 0; index < inputWords.length; index++) {
      lowerWord = inputWords[index].toLowerCase();
      lowerWord = lowerWord.replace(lowerWord[0], lowerWord[0].toUpperCase())
      result.push(lowerWord)
    }
    
  } else {
    result.push("Error!")
  }

  spanResult.textContent = result.join("")
}