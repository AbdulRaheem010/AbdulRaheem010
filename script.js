const exportModal = document.getElementById("exportModal");
const openExport = document.getElementById("openExport");
const confirmExport = document.getElementById("confirmExport");

openExport.addEventListener("click", () => exportModal.showModal());

confirmExport.addEventListener("click", () => {
  confirmExport.textContent = "Queued ✓";
  setTimeout(() => {
    exportModal.close();
    confirmExport.textContent = "Start Export";
  }, 900);
});

exportModal.addEventListener("click", (event) => {
  if (event.target === exportModal) exportModal.close();
});

document.querySelectorAll(".tool-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tool-btn").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});
