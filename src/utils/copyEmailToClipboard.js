let copyEmail = () => {
    let textArea = document.getElementsByClassName('emailText')[0]
    // navigator.clipboard.writeText(textArea.textContent);
    // alert(textArea.textContent + ' copied to the clipboard!')
    textArea.focus();
    textArea.select();
   document.execCommand('copy');
   alert("Email copied!!")
}

export default copyEmail;