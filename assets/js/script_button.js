async function copyEmail() {
    const email = "kauansantosdesouza45@gmail.com"; // Substitua pelo seu e-mail
    
    try {
      // Usa a API de Clipboard para copiar o texto
      await navigator.clipboard.writeText(email);
      
      // Mostra uma mensagem de sucesso
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";

      // Esconde a mensagem após 2 segundos
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } catch (err) {
      alert("Erro ao copiar o e-mail: " + err);
    }
}