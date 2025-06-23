let deferredPrompt;

export function setupPWAInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const shouldAutoPrompt = new URLSearchParams(window.location.search).get("install") === "1";

    if (shouldAutoPrompt) {
      deferredPrompt.prompt();
    }

    const installBtn = document.querySelector(".install-btn");
    if (installBtn) installBtn.style.display = "block";

    installBtn?.addEventListener("click", () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome);
        deferredPrompt = null;
      });
    });
  });
}
