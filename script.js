const apiKey = "b6cc4392568a3586e950307c86a22bbd";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";
document.getElementById("btn").addEventListener("click", function () {
  const City = document.getElementById("city").value;
  const url = `${apiBase}?q=${City}&appid=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => Check(data));
});
function Check(city) {
  document.getElementById("show-city").innerText =
    city.name || "Unknown Location";
  let value = city.main.temp - 273;
  let fixedValue = value.toFixed(2);
  document.getElementById("show_temperature").innerText = fixedValue;
  document.getElementById("weather_status").innerText = city.weather[0].main;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    );
  document.getElementById("city").value = "";
}
