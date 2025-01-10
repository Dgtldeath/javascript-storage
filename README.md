# javascript-storage
Cart Form Management with LocalStorage

This JavaScript script provides functionality to manage a cart form with localStorage for persistence, ensuring data is retained across user sessions. It includes features for clearing stored data, setting dynamic minimum values for date inputs, and validating form submissions.

Features
Persist Form Data: Automatically saves form input values to localStorage and retrieves them on page load, ensuring the user's data is not lost if the page is refreshed.
Clear Cart Data: Buttons (#clear-cart-btn and #place-order-btn) clear specific cart-related keys from localStorage.
Dynamic Date Input: Automatically sets the min attribute of the pickup date input (#pickup_date_timestamp) to the current date and time, preventing users from selecting past dates.
Form Validation: Ensures that a store is selected before allowing form submission. Alerts the user if the store field is empty.
Supports Multiple Input Types: Handles text, select, textarea, checkbox, and radio inputs.
How It Works
Data Persistence:

On page load, the script loads values from localStorage into corresponding form fields.
When form inputs are changed, their values are saved to localStorage.
Clear Cart Functionality:

Clicking the #clear-cart-btn or #place-order-btn clears all keys related to cart data from localStorage.
Dynamic Date Handling:

Sets the minimum value for the pickup date input to the current date and time in the format YYYY-MM-DDTHH:MM.
Form Validation:

Prevents submission of the form (#cart-form) if no store is selected, prompting the user to choose a store.

Dependencies
Requires jQuery for event handling and DOM manipulation.

Example Usage
<form id="cart-form">
    <select id="store_selector" name="store_number">
        <option value="">Select a store</option>
        <option value="1">Store 1</option>
        <option value="2">Store 2</option>
    </select>
    <input type="datetime-local" id="pickup_date_timestamp" name="pickup_date_timestamp">
    <textarea name="order_notes"></textarea>
    <button id="clear-cart-btn">Clear Cart</button>
    <button id="place-order-btn">Place Order</button>
</form>
