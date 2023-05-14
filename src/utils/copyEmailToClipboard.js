let copyEmail = () => {
   const copyContent = async () => {
    let text = document.getElementsByClassName('emailText')[0].value;

    try {
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  copyContent()

}

export default copyEmail;