const buttons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-tab-panel]");

function showTab(tabName) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-visible", panel.dataset.tabPanel === tabName);
  });

  if (location.hash !== `#${tabName}`) {
    history.replaceState(null, "", `#${tabName}`);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

const initialTab = location.hash.replace("#", "") || "profile";
if ([...buttons].some((button) => button.dataset.tab === initialTab)) {
  showTab(initialTab);
}
