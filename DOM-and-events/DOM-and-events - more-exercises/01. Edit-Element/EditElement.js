function editElement(htmlRef, oldStr, newStr) {
    htmlRef.textContent = htmlRef.textContent.replace(new RegExp(oldStr, 'g'), newStr)

}