// function fizzbuzz(arr) {
//     let counter = 0
//     while (counter < 20) {
//     if (arr[counter] % 5 === 0 && arr[counter] % 3 === 0) {
//       console.log("fizzbuz")
//      } else if (arr[counter] % 3 === 0) {
//        console.log("fizz")
//       } else if (arr[counter] % 5 === 0) {
//        console.log("Buzz")
//       } else {
//        console.log(arr[counter])
//       }
//     counter += 1
//   }
//   }
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//   fizzbuzz(arr)

'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENGERY_USAGE_LIMIT = 25;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this.isMaximumTemperature()) {
        return;
    }
    this.temperature += 1
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENGERY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }




};