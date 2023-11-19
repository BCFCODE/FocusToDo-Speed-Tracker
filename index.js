import history from "./src/database.js";

// const html = {
//   dateOfMeasurement: document.getElementById("dateOfMeasurement"),
// };

class Report1000h {
  constructor() {

  }

  currentHourPerDay() {
    const minsPerDay = (1000 * 60) / history[2023][11][0].durationToReach1000h;
    const remainingMins = minsPerDay % 24;
    const hours = (minsPerDay - remainingMins) / 60;
    return [hours, remainingMins];
  }
   
  currentHourPerHour() {
    const minsPerDay = (1000 * 60) / history[2023][11][0].durationToReach1000h;
    const minsPerHour = minsPerDay / 24;
    const remainingMinsPerHour = minsPerHour % 60;
    const hours = (minsPerHour - remainingMinsPerHour) / 60;
    return [hours, remainingMinsPerHour];
  }

  averageHourPerDay() {

  }

  averageHourPerHour() {
    
  }

  // render() {
  //   html.dateOfMeasurement.textContent = `${new Date()}`;
  // }

  save() {
    //Hint: for this problem [2023][11][0] must implemented dynamically
    history[2023][11][0].dateOfMeasurement = new Date();
    history[2023][11][0].currentHourPerDay = this.currentHourPerDay();
    history[2023][11][0].currentHourPerHour = this.currentHourPerHour();
  }
}

const report11122023 = new Report1000h();
const report11172023 = new Report1000h();
// report11122023.render();
report11122023.save();
report11172023.save();

//This export is for testing purposes
export { history, report11122023 , report11172023};
