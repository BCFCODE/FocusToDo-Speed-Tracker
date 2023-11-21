import history from './src/database.js';

// const html = {
//   dateOfMeasurement: document.getElementById("dateOfMeasurement"),
// };

class Report1000h {
  constructor() {}

  convertMinsToHourMin(mins) {
    const remainingMins = mins % 24;
    const hours = (mins - remainingMins) / 60;
    return [hours, remainingMins];
  }

  convertHourMinToMins(hours, mins) {
    return hours * 60 + mins;
  }

  currentHourPerDay() {
    const historyData = history[2023][11];

    // const minsPerDay = (1000 * 60) / history[2023][11][0].durationToReach1000h;
    // const remainingMins = minsPerDay % 24;
    // const hours = (minsPerDay - remainingMins) / 60;
    // return [hours, remainingMins];

    for (let i = 0; i <= historyData.length - 1; i++) {
      const minsPerDay = (1000 * 60) / historyData[i].durationToReach1000h;
      historyData[i].currentHourPerDay = this.convertMinsToHourMin(minsPerDay);
    }
  }

  currentHourPerHour() {
    const minsPerDay = (1000 * 60) / history[2023][11][0].durationToReach1000h;
    const minsPerHour = minsPerDay / 24;
    const remainingMinsPerHour = minsPerHour % 60;
    const hours = (minsPerHour - remainingMinsPerHour) / 60;
    return [hours, remainingMinsPerHour];
  }

  averageHourPerDay() {
    const historyData = history[2023][11];

    for (let i = 1; i <= historyData.length - 1; i++) {
      historyData[i].lastHourPerDay = historyData[i - 1].currentHourPerDay;

      const calcualteMinsCurrentHourPerDay = this.convertHourMinToMins(
        historyData[i].currentHourPerDay[0],
        historyData[i].currentHourPerDay[1]
      );

      const calculateMinsLastHourPerDay = this.convertHourMinToMins(
        historyData[i].lastHourPerDay[0],
        historyData[i].lastHourPerDay[1]
      );

      const calculateAvgHourPerDay =
        (calcualteMinsCurrentHourPerDay + calculateMinsLastHourPerDay) / 2;

      const result = this.convertMinsToHourMin(calculateAvgHourPerDay);

      historyData[i].averageHourPerDay = result;
    }
  }

  averageHourPerHour() {}

  // render() {
  //   html.dateOfMeasurement.textContent = `${new Date()}`;
  // }

  save() {
    //Hint: for this problem [2023][11][0] must implemented dynamically
    history[2023][11][0].dateOfMeasurement = new Date();
    // history[2023][11][0].currentHourPerDay = this.currentHourPerDay();
    history[2023][11][0].currentHourPerHour = this.currentHourPerHour();
    this.currentHourPerDay();
    this.averageHourPerDay();
  }
}

const report11122023 = new Report1000h();
const report11172023 = new Report1000h();
// report11122023.render();
report11122023.save();
report11172023.save();

console.log(history);
//This export is for testing purposes
// export { history, report11122023, report11172023 };
