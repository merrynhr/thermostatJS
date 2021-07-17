document.addEventListener("DOMContentLoaded", () => {
    const updateTemperature = () => {
    document.querySelector('#displayTemp').innerText = thermostat.temperature;
    document.querySelector('#displayTemp').className = thermostat.energyUsage();
    }
 
    const thermostat = new Thermostat();
    updateTemperature();

    document.querySelector('.temp-up').addEventListener('click', () => {
      thermostat.up();
      updateTemperature();
    });

   
    document.querySelector('.temp-down').addEventListener('click', () => {
      thermostat.down();   
      updateTemperature();
    });

    document.querySelector('.reset').addEventListener('click', () => {
      thermostat.resetTemperature();
      updateTemperature();
    });
   
    document.querySelector('.power-saver-on').addEventListener('click', () => {
      thermostat.switchPowerSavingModeOn();
      document.querySelector('#power-status').innerText = 'on';
      updateTemperature();
   
    })
   
    document.querySelector('.power-saver-off').addEventListener('click', () => {
      thermostat.switchPowerSavingModeOff();
      document.querySelector('#power-status').innerText = 'off';
      updateTemperature();
    })
   

   }); 
   
   document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
 
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  });
 
 
 
   
   
   
   