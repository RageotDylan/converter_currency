document.getElementById('convertButton').addEventListener('click', function () {
    let amount = parseFloat(document.getElementById('amount').value);

    let selectFromCurrency = document.getElementById('fromCurrency');
    let selectedFromCurrencyValue = selectFromCurrency.value;

    let selectToCurrency = document.getElementById('toCurrency');
    let selectedToCurrencyValue = selectToCurrency.value;

    const exchangeRates = {
        USD: { EUR: 0.92, GBP: 0.75 },
        EUR: { USD: 1.09, GBP: 0.86 },
        GBP: { USD: 1.28, EUR: 1.17 }
    };

    let result = 0; 

    if (selectedFromCurrencyValue === 'USD' && selectedToCurrencyValue === 'EUR') {
        const rate = exchangeRates.USD.EUR;
        result = amount * rate;
    } else if (selectedFromCurrencyValue === 'USD' && selectedToCurrencyValue === 'GBP') {
        const rate = exchangeRates.USD.GBP;
        result = amount * rate;
    } else if (selectedFromCurrencyValue === 'EUR' && selectedToCurrencyValue === 'USD') {
        const rate = exchangeRates.EUR.USD;
        result = amount * rate;
    } else if (selectedFromCurrencyValue === 'EUR' && selectedToCurrencyValue === 'GBP') {
        const rate = exchangeRates.EUR.GBP;
        result = amount * rate;
    } else if (selectedFromCurrencyValue === 'GBP' && selectedToCurrencyValue === 'USD') {
        const rate = exchangeRates.GBP.USD;
        result = amount * rate;
    } else if (selectedFromCurrencyValue === 'GBP' && selectedToCurrencyValue === 'EUR') {
        const rate = exchangeRates.GBP.EUR;
        result = amount * rate;
    } else {
        document.getElementById('result').innerHTML = "Conversion non prise en charge.";
        return;
    }

    document.getElementById('result').innerHTML = `Le montant converti est : ${result.toFixed(2)} ${selectedToCurrencyValue}`;
});