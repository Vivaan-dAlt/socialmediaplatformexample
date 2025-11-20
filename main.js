// Content for each page
const pages = {
  home: "<h2>Welcome to your social media feed!</h2><p>This is the 'For you' timeline.</p>",
  dms: "<h2>Your Messages</h2><p>This is your full-screen DMs page.</p>",
  servers: "<h2>Servers</h2><p>Find and join servers here.</p>",
  news: "<h2>News</h2><p>Latest social and headline news here.</p>",
  mentioned: "<h2>Mentioned</h2><p>Posts and messages where you're mentioned appear here.</p>"
};

const mainContent = document.getElementById("main-content");
const sidebarTabs = document.querySelectorAll(".side-tab");

// Set default page
function showPage(page) {
  sidebarTabs.forEach(tab => {
    const isActive = tab.dataset.page === page;
    tab.classList.toggle("selected", isActive);
    if (isActive) tab.focus();
  });
  mainContent.innerHTML = pages[page] || pages["home"];
}

// Sidebar navigation
sidebarTabs.forEach(tab => {
  tab.addEventListener("click", () => showPage(tab.dataset.page));
});
showPage("home");

// Chat modal
const chatBtn = document.getElementById("chat-btn");
const chatModal = document.getElementById("chat-modal");
const closeChat = document.getElementById("close-chat");
chatBtn.addEventListener("click", () => chatModal.classList.remove("hidden"));
closeChat.addEventListener("click", () => chatModal.classList.add("hidden"));
// Optional: close on ESC
window.addEventListener("keydown", e => {
  if (e.key === "Escape") chatModal.classList.add("hidden");
});
