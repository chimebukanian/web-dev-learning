const products = [
    { id: 1, title: 'Action Movie DVD', type: 'DVD', price: '$14.99', description: 'High-energy action movie on DVD with bonus features.', image: 'https://via.placeholder.com/240x240?text=Action+DVD' },
    { id: 2, title: 'Pop Music CD', type: 'CD', price: '$11.99', description: 'Top pop hits collection on compact disc.', image: 'https://via.placeholder.com/240x240?text=Pop+CD' },
    { id: 3, title: 'Classic Movie DVD', type: 'DVD', price: '$12.99', description: 'A film classic remastered for DVD playback.', image: 'https://via.placeholder.com/240x240?text=Classic+DVD' },
    { id: 4, title: 'Jazz Album CD', type: 'CD', price: '$13.50', description: 'Smooth jazz album with a full-color insert.', image: 'https://via.placeholder.com/240x240?text=Jazz+CD' }
];
let selectedIndex = 0;

function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>${product.type}</p>
            <p><strong>${product.price}</strong></p>
        `;
        card.addEventListener('click', () => openProductDetail(index));
        if (index === selectedIndex) {
            card.style.border = '2px solid #3b82f6';
        }
        gallery.appendChild(card);
    });
}

function openProductDetail(index) {
    const product = products[index];
    selectedIndex = index;
    renderGallery();

    const detailWindow = window.open('', '_blank', 'width=520,height=620,scrollbars=yes');
    const detailUrl = `${window.location.href}#product-${product.id}`;
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>${product.title} Details</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; background: #f5f7fb; }
                .container { max-width: 460px; margin: 0 auto; background: white; padding: 22px; border-radius: 14px; box-shadow: 0 1px 14px rgba(0,0,0,.1); }
                img { width: 100%; border-radius: 12px; }
                h1 { margin-top: 18px; font-size: 1.5rem; }
                p { line-height: 1.6; }
                .badge { display: inline-block; margin: 10px 0; padding: 8px 12px; background: #2563eb; color: white; border-radius: 8px; }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="${product.image}" alt="${product.title}" />
                <h1>${product.title}</h1>
                <div class="badge">${product.type}</div>
                <p>${product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><em>URL History entry:</em> ${detailUrl}</p>
            </div>
        </body>
        </html>
    `;
    detailWindow.document.write(html);
    detailWindow.document.close();

    saveHistory(detailUrl);
}

function saveHistory(url) {
    const history = JSON.parse(localStorage.getItem('storeHistory') || '[]');
    history.push({ url, time: new Date().toLocaleString() });
    localStorage.setItem('storeHistory', JSON.stringify(history));
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyPanel = document.getElementById('historyPanel');
    const list = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('storeHistory') || '[]');
    if (history.length === 0) {
        list.innerHTML = '<li>No history items yet.</li>';
        return;
    }
    list.innerHTML = history
        .slice(-10)
        .reverse()
        .map(item => `<li><strong>${item.time}:</strong> <a href="${item.url}" target="_blank">${item.url}</a></li>`)
        .join('');
}

function selectPrevious() {
    selectedIndex = (selectedIndex - 1 + products.length) % products.length;
    renderGallery();
}

function selectNext() {
    selectedIndex = (selectedIndex + 1) % products.length;
    renderGallery();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function toggleHistory() {
    const panel = document.getElementById('historyPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

function luhnCheck(value) {
    const digits = value.replace(/\D/g, '').split('').reverse().map(Number);
    if (digits.length < 13) return false;
    const sum = digits.reduce((acc, digit, idx) => {
        if (idx % 2 === 1) {
            const doubled = digit * 2;
            return acc + (doubled > 9 ? doubled - 9 : doubled);
        }
        return acc + digit;
    }, 0);
    return sum % 10 === 0;
}

function validateCardNumber(number) {
    const cleaned = number.replace(/\s+/g, '');
    return /^\d{13,19}$/.test(cleaned) && luhnCheck(cleaned);
}

function validatePaymentForm(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('cardHolder').value.trim();

    if (!cardHolder) {
        alert('Please enter the cardholder name.');
        return;
    }
    if (!validateCardNumber(cardNumber)) {
        alert('Invalid credit card number. Please check the digits and try again.');
        return;
    }
    if (!/^[0-9]{3,4}$/.test(cvv)) {
        alert('Invalid CVV. Please enter 3 or 4 digits.');
        return;
    }
    if (!expiry) {
        alert('Please enter the expiry date.');
        return;
    }

    alert('Credit card validated successfully. You may proceed with your purchase.');
    event.target.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    updateHistoryDisplay();

    document.getElementById('prevBtn').addEventListener('click', selectPrevious);
    document.getElementById('nextBtn').addEventListener('click', selectNext);
    document.getElementById('topBtn').addEventListener('click', scrollToTop);
    document.getElementById('bottomBtn').addEventListener('click', scrollToBottom);
    document.getElementById('showHistoryBtn').addEventListener('click', toggleHistory);
    document.getElementById('paymentForm').addEventListener('submit', validatePaymentForm);
});
