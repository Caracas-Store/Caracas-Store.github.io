document.addEventListener('DOMContentLoaded', () => {
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    const addressForm = document.querySelector('.address-form');

    deliveryOptions.forEach(option => {
        option.addEventListener('change', (e) => {
            if (e.target.value === 'pickup') {
                addressForm.style.display = 'none';
            } else {
                addressForm.style.display = 'block';
            }
        });
    });
});
