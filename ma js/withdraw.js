document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Number input kor Haramjada. Ghorar dim er poralekha koros');
        return;
    }

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Tor baap er bank e ja. Amar kase eto tk nai');
        return;
    }
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    WithdrawTotalElement.innerText = newWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal

})