$(document).ready(function () {

    $('#clear-cart-btn').on('click', function () {
        // Clear all localStorage keys related to the cart form
        localStorage.removeItem('store_number');
        localStorage.removeItem('customer_name');
        localStorage.removeItem('is_pickup');
        localStorage.removeItem('pickup_by');
        localStorage.removeItem('pickup_date_timestamp');
        localStorage.removeItem('order_notes');
    });

    $('#place-order-btn').on('click', function () {
        // Clear all localStorage keys related to the cart form
        localStorage.removeItem('store_number');
        localStorage.removeItem('customer_name');
        localStorage.removeItem('is_pickup');
        localStorage.removeItem('pickup_by');
        localStorage.removeItem('pickup_date_timestamp');
        localStorage.removeItem('order_notes');
    });

    const now = new Date();

    // Format the date as YYYY-MM-DDTHH:MM
    const formattedDate = now.toISOString().slice(0, 16);

    // Set the minimum value dynamically
    $('#pickup_date_timestamp').attr('min', formattedDate);

    $('form#cart-form').on('submit', function (e) {
        const selectedStore = $('#store_selector').val();

        if (!selectedStore) {
            alert('Please select a store before submitting the form.');
            e.preventDefault();
        }
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        // Persist form values to localStorage
        const inputs = document.querySelectorAll('#cart-form input, #cart-form select, #cart-form textarea');

        inputs.forEach(input => {
            // Load saved value from localStorage
            const savedValue = localStorage.getItem(input.name);
            if (savedValue) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = savedValue === 'true';
                } else {
                    input.value = savedValue;
                }
            }

            // Save value on change
            input.addEventListener('change', function () {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    localStorage.setItem(input.name, input.checked);
                } else {
                    localStorage.setItem(input.name, input.value);
                }
            });
        });
    });
