const tabs = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Deselect all tabs and hide all panels
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    tabPanels.forEach(panel => panel.hidden = true);

    // Activate the clicked tab
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    const panelId = tab.getAttribute('aria-controls');
    document.getElementById(panelId).hidden = false;
    tab.focus();
  });
});
