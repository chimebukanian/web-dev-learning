document.addEventListener('DOMContentLoaded', function() {
  const box = document.getElementById('box');
  const countEl = document.getElementById('count');
  const coordsEl = document.getElementById('coords');
  const info = document.getElementById('info');
  let count = 0;

  // Create additional UI elements inside #info for other events
  const moveP = document.createElement('p');
  moveP.innerHTML = 'Mouse move: <span id="mousemove">—</span>';
  info.appendChild(moveP);

  const btnP = document.createElement('p');
  btnP.innerHTML = 'Button: <span id="buttonStatus">up</span>';
  info.appendChild(btnP);

  const logTitle = document.createElement('p');
  logTitle.textContent = 'Event Log:';
  info.appendChild(logTitle);

  const logEl = document.createElement('ul');
  logEl.style.maxHeight = '120px';
  logEl.style.overflow = 'auto';
  logEl.style.paddingLeft = '18px';
  info.appendChild(logEl);

  function logEvent(text) {
    const li = document.createElement('li');
    li.textContent = text;
    logEl.prepend(li);
    if (logEl.children.length > 30) logEl.removeChild(logEl.lastChild);
  }

  // Click: increment counter, show coords, change color, log
  box.addEventListener('click', function (e) {
    count += 1;
    countEl.textContent = count;
    coordsEl.textContent = e.clientX + ',' + e.clientY;
    box.style.background = randomColor();
    logEvent('click at ' + e.clientX + ',' + e.clientY);
  });

  // Double-click example
  box.addEventListener('dblclick', function (e) {
    logEvent('doubleclick at ' + e.clientX + ',' + e.clientY);
    box.style.transform = 'scale(0.98)';
    setTimeout(function () { box.style.transform = ''; }, 120);
  });

  // Mouse move (shows pointer position relative to the box)
  box.addEventListener('mousemove', function (e) {
    const mv = document.getElementById('mousemove');
    mv.textContent = e.offsetX + ',' + e.offsetY;
  });

  // Mouse down / up
  box.addEventListener('mousedown', function (e) {
    document.getElementById('buttonStatus').textContent = 'down';
    box.style.borderColor = '#0b62ff';
    logEvent('mousedown');
  });
  box.addEventListener('mouseup', function (e) {
    document.getElementById('buttonStatus').textContent = 'up';
    box.style.borderColor = '#ccc';
    logEvent('mouseup');
  });

  // Mouse over / out
  box.addEventListener('mouseover', function (e) {
    box.style.boxShadow = '0 6px 12px rgba(0,0,0,0.08)';
    logEvent('mouseover');
  });
  box.addEventListener('mouseout', function (e) {
    box.style.boxShadow = 'none';
    const mv = document.getElementById('mousemove');
    if (mv) mv.textContent = '—';
    logEvent('mouseout');
  });

  // Touch support: map touches to click-like behavior
  box.addEventListener('touchstart', function (e) {
    // prevent ghost clicks on some devices
    e.preventDefault();
    const t = e.touches && e.touches[0];
    const x = t ? t.clientX : 0;
    const y = t ? t.clientY : 0;
    count += 1;
    countEl.textContent = count;
    coordsEl.textContent = x + ',' + y;
    box.style.background = randomColor();
    logEvent('touchstart at ' + x + ',' + y);
  }, { passive: false });
  box.addEventListener('touchend', function (e) {
    logEvent('touchend');
  });

  function randomColor() {
    return 'hsl(' + Math.floor(Math.random() * 360) + ',70%,80%)';
  }
});