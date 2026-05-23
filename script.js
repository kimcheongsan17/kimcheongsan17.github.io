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

const currentSkills = document.querySelector(".skills");
if (currentSkills) {
  currentSkills.outerHTML = `
    <dl class="skills-list" aria-label="Skills">
      <div>
        <dt>CAE</dt>
        <dd>ABAQUS, COMSOL, Hypermesh, MotionView</dd>
      </div>
      <div>
        <dt>Equipment</dt>
        <dd>AFM, SAXS, E-SEM, E-TEM</dd>
      </div>
      <div>
        <dt>Fabrication</dt>
        <dd>Electrospinning, hydrogel crosslinking</dd>
      </div>
    </dl>
  `;
}

const skillStyle = document.createElement("style");
skillStyle.textContent = `
  .skills-list {
    display: grid;
    gap: 7px;
    margin: 0;
  }

  .skills-list div {
    display: grid;
    grid-template-columns: 120px minmax(0, 1fr);
    gap: 14px;
  }

  .skills-list dt {
    color: var(--ink);
    font-weight: 800;
  }

  .skills-list dd {
    margin: 0;
    color: var(--muted);
  }
`;
document.head.appendChild(skillStyle);
