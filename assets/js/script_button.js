async function copyEmail() {
    const email = "kauansantosdesouza45@gmail.com";
    
    try {
      await navigator.clipboard.writeText(email);
      
      const successMessage = document.getElementById("successMessage");
      alert('E-mail copiado com sucesso!');

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 300);
    } catch (err) {
      alert("Erro ao copiar o e-mail: " + err);
    }
}
