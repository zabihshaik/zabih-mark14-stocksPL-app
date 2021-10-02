const initialValueInput = document.querySelector('#initial-value');
const currentValueInput = document.querySelector('#current-value');
const stockQuantityInput = document.querySelector('#stock-quantity');
const checkButton = document.querySelector('#button-check');
const message = document.querySelector('#message');

function showMessage (text) {
    message.innerText = text;
}

function profitLossCalculator (initial, current, quantity) {
    if (initial < current) {
        // profit
        var profit = (current - initial) * quantity;
        var profitPercent = ((profit / (initial * quantity)) * 100).toFixed(2);

        message.style.color = '#83af98';
        showMessage (`Yay!! You have made profit of  ₹${profit}. \n Profit percentage is ${profitPercent}%`);
    } else if (initial > current) {
        // loss
        var loss = (initial - current) * quantity;
        var lossPercent = ((loss / (initial * quantity)) * 100).toFixed(2);

        message.style.color = '#fe4365';
        showMessage (`Sorry! You have made a loss of  ₹${loss}. \n Loss percentage is ${lossPercent}%`);
    } else {
        message.style.color = "#355c7d";
        showMessage ("No Profit or Loss has occured!");
    }
}

function clickHandler() {
    var initialValue = initialValueInput.value;
    var currentValue = currentValueInput.value;
    var stockQuantity = stockQuantityInput.value;
    if (initialValue && currentValue && stockQuantity) {
        if (initialValue == 0 && currentValue >= 0 && stockQuantity >= 0) {
            message.style.color = "#355c7d";
            showMessage("You can't buy stocks for free. Enter valid amount.")
        } else if (initialValue > 0 && currentValue >= 0 && stockQuantity > 0) {
            profitLossCalculator(Number(initialValue), Number(currentValue), Number(stockQuantity));
        } else {
            message.style.color = "#355c7d";
            showMessage ('Enter valid input to continue');
        }
    } else {
        message.style.color = "#355c7d";
        showMessage ('Enter valid input to continue');
    }

    
}

checkButton.addEventListener('click', clickHandler);