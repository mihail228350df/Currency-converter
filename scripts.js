const CURRENCY_CODE = {
    USD: 'USD',
    EUR: 'EUR',
    RUB: 'RUB',
};

const getToday = () => {
    const date = new Date();

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const renderContent = (response) => {
    const { data } = response;
    let content = document.getElementById('data').innerHTML;

    

    Object
      .keys(data.rates)
      .map((curencyCode) => {
        content += `
              <tr>
                <td>${curencyCode}</td>
                <td>${data.rates[curencyCode].toFixed(2)}</td>  
              </tr>
            `;

      });
      document.getElementById('data').innerHTML = content;  
};

axios
    .get(`https://api.ratesapi.io/api/${getToday()}?base=${CURRENCY_CODE.USD}&symbols=${CURRENCY_CODE.RUB},${CURRENCY_CODE.EUR}`)
    .then(renderContent);
