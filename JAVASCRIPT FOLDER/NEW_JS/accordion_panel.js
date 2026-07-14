const panelBody = document.getElementById('panelBody');
const togglePanel = document.getElementById('togglePanel');
let expanded = true;

function updatePanel() {
    panelBody.className = expanded ? 'panel-body expanded' : 'panel-body collapsed';
    togglePanel.textContent = expanded ? 'Collapse' : 'Expand';
}

togglePanel.addEventListener('click', () => {
    expanded = !expanded;
    updatePanel();
});
