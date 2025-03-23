const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function activateTab(tab) {
  // Deselect all tabs and hide all panels
  tabs.forEach(t => {
    t.setAttribute('aria-selected', 'false');
    t.setAttribute('tabindex', '-1');
  });
  tabPanels.forEach(panel => panel.hidden = true);

  // Select the new tab and show its panel
  tab.setAttribute('aria-selected', 'true');
  tab.setAttribute('tabindex', '0');
  const panelId = tab.getAttribute('aria-controls');
  document.getElementById(panelId).hidden = false;
  tab.focus();
}

// Click activation
tabs.forEach(tab => {
  tab.addEventListener('click', () => activateTab(tab));
});

// Keyboard navigation
document.querySelector('[role="tablist"]').addEventListener('keydown', (e) => {
  const currentTab = document.activeElement;
  let newIndex;

  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Home' || e.key === 'End') {
    const tabArray = Array.from(tabs);
    const currentIndex = tabArray.indexOf(currentTab);

    if (e.key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % tabArray.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (currentIndex - 1 + tabArray.length) % tabArray.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = tabArray.length - 1;
    }

    e.preventDefault();
    activateTab(tabArray[newIndex]);
  }
});
