function solve() {
  const currentInput = document.getElementById("input");
  const sentences = currentInput.value.split(".");
  const currentOutput = document.getElementById("output");
  sentences.pop()

  let sentCounter = 0;

  while (sentences.length > 0) {
    let currentParagraph = sentences.splice(0, 3)
      .map((a) => a.trimStart())
    
    let newP = document.createElement("p");
    newP.textContent = currentParagraph.join(".") + ".";
    currentOutput.appendChild(newP)
  }
} 