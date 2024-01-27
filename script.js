const fetch_btn = document.querySelector(".ip-btn");
const ip_display = document.querySelector(".ip-display");
const ip_city = document.querySelector(".ip-city");
const ip_country = document.querySelector(".ip-country");
const ip_country_capital = document.querySelector(".ip-country_capital");
const ip_time_zone = document.querySelector(".ip-time-zone");
const ip_currency = document.querySelector(".ip-currency");
const ip_org = document.querySelector(".ip-org");


fetch_btn.addEventListener('click', () => {
    axios.get("https://ipapi.co/json").then((response) => {



        ip_display.textContent = `IP Address: ${response.data.ip}`;
        ip_city.textContent = `City: ${response.data.city}`;
        ip_country.textContent = `Country: ${response.data.country_name}`;
        ip_country_capital.textContent = `Country Capital: ${response.data.country_capital}`;
        ip_time_zone.textContent = `Time Zone: ${response.data.timezone}`;
        ip_currency.textContent = `Currency: ${response.data.currency}`;
        ip_org.textContent = `Org: ${response.data.org}`;

    })
}
)