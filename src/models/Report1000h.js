
import history from "../../Database/history";
import DateUtils from "../utils/DateUtils";

class Report1000h {
  constructor() {}

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

  averageHourPerDay() {}

  averageHourPerHour() {}

  render() {
    html.dateOfMeasurement.textContent = `${DateUtils.getCurrentDate()}`;
  }

  save() {
    //Hint: for this problem [2023][11][0] must implemented dynamically
    history[2023][11][0].dateOfMeasurement = DateUtils.getCurrentDate();
    history[2023][11][0].currentHourPerDay = this.currentHourPerDay();
    history[2023][11][0].currentHourPerHour = this.currentHourPerHour();
  }
}

export default Report1000h;
