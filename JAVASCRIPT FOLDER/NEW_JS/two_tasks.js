// two_tasks.js
// Implements: 1) Registration form validation (vanilla JS)
//             2) Mobile-friendly shopping interactions (jQuery)

/* Registration validation */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('regForm');
  var fullName = document.getElementById('fullName');
  var mobile = document.getElementById('mobile');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var success = document.getElementById('regSuccess');

  function clearErrors() {
    ['fullNameError','mobileError','emailError','passwordError'].forEach(function(id){
      document.getElementById(id).textContent = '';
    });
    success.textContent = '';
  }

  function validName(name) {
    return /^[A-Za-z ]{2,}$/.test(name.trim());
  }
  function validMobile(m) {
    return /^\d{10}$/.test(m.trim());
  }
  function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    clearErrors();
    var ok = true;
    if (!validName(fullName.value)) {
      document.getElementById('fullNameError').textContent = 'Please enter a valid name (letters and spaces only).';
      ok = false;
    }
    if (!validMobile(mobile.value)) {
      document.getElementById('mobileError').textContent = 'Enter a 10-digit mobile number (digits only).';
      ok = false;
    }
    if (!validEmail(email.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      ok = false;
    }
    if (password.value.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      ok = false;
    }

    if (ok) {
      success.textContent = 'Registration successful!';
      form.reset();
      setTimeout(function(){ success.textContent = ''; }, 4000);
    }
  });
});

/* Mobile shopping (uses jQuery) */
// Requires jQuery to be loaded before this script runs.
(function($){
  $(function(){
    var cart = [];

    function updateCartCount(){
      $('#cartCount').text(cart.length);
    }

    function renderCart(){
      var $list = $('#cartItems');
      $list.empty();
      if (cart.length === 0) {
        $list.append('<div>Your cart is empty.</div>');
        return;
      }
      var total = 0;
      cart.forEach(function(item, i){
        total += item.price;
        $list.append('<div style="padding:6px;border-bottom:1px solid #eee">'+
          '<strong>'+item.name+'</strong> — $'+item.price.toFixed(2)+
          ' <button data-index="'+i+'" class="remove-item" style="margin-left:8px">Remove</button></div>');
      });
      $list.append('<div style="margin-top:8px;font-weight:700">Total: $'+total.toFixed(2)+'</div>');
    }

    $('.add-to-cart').on('click', function(){
      var $p = $(this).closest('.product');
      var name = $p.data('name');
      var price = parseFloat($p.data('price')) || 0;
      cart.push({name: name, price: price});
      updateCartCount();
      // small visual confirmation
      $(this).text('Added').prop('disabled',true);
      var btn = $(this);
      setTimeout(function(){ btn.text('Add to cart').prop('disabled',false); }, 900);
    });

    $('#viewCart').on('click', function(){
      renderCart();
      $('#cartModal').show();
    });

    $('#closeCart').on('click', function(){ $('#cartModal').hide(); });

    // delegate remove
    $(document).on('click', '.remove-item', function(){
      var idx = parseInt($(this).attr('data-index'),10);
      if (!isNaN(idx)){
        cart.splice(idx,1);
        updateCartCount();
        renderCart();
      }
    });
  });
})(jQuery);
