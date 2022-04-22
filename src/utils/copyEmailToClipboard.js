let copyEmail = () => {
    let textArea = document.getElementsByClassName('emailText')[0]
    navigator.clipboard.writeText(textArea.textContent);
    alert(textArea.textContent + ' copied to the clipboard!')
}

export default copyEmail;