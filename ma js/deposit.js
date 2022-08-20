document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Number input kor Haramjada. Ghorar dim er poralekha koros');
        return;
    }

    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepoiteTotalString = depositeTotalElement.innerText;
    const previousDepoiteTotal = parseFloat(previousDepoiteTotalString);
    
    const newDepositeTotal = previousDepoiteTotal + newDepositAmount;
    depositeTotalElement.innerText = newDepositeTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})