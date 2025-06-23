let deferredPrompt;

export function setupPWAInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installParam = new URLSearchParams(window.location.search).get("install");
    const installBtn = document.querySelector(".install-btn");

    // Show install banner if redirected with ?install=1
    if (installParam === "1" && installBtn) {
      installBtn.style.display = "block";
    }

    installBtn?.addEventListener("click", () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
          console.log(`User response: ${choice.outcome}`);
          deferredPrompt = null;
        });
      }
    });
  });
}
