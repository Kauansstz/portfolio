async function copyEmail() {
    const email = "kauansantosdesouza45@gmail.com";
    
    try {
      await navigator.clipboard.writeText(email);
      
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display="flex";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 600);
    } catch (err) {
      alert("Erro ao copiar o e-mail: " + err);
    }
}
