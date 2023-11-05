//we need this this.history structure for saving in database
//This is just a demo for what we want (Task explanation)
class Report1000h {
  constructor() {
    this.history = {
      2023: {
        10: [
          {
            durationToReach: "8 Day(s)",
            reach: 69000,
            lastHpd: 100,
            currentHpd: 125,
            lastHph: 4.16,
            currentHph: 5.2,
            averageHpd: 112.5,
            averageHph: 4.7,
            dateOfMeasurement:
              "Wed Oct 11 2023 20:27:18 GMT+0330 (Iran Standard Time)",
          },
          {
            durationToReach: "9 Day(s)",
            reach: 70000,
            lastHpd: 125,
            currentHpd: 111.11,
            lastHph: 5.2,
            currentHph: 4.63,
            averageHpd: 118.8,
            averageHph: 5.0,
            dateOfMeasurement:
              "Fri Oct 20 2023 09:26:02 GMT+0330 (Iran Standard Time)",
          },
          {
            durationToReach: "9 Day(s)",
            reach: 71000,
            lastHpd: 111.11,
            currentHpd: "",
            lastHph: 4.63,
            currentHph: "",
            averageHpd: "",
            averageHph: "",
            dateOfMeasurement:
              "Sun Oct 29 2023 06:50:15 GMT+0330 (Iran Standard Time)",
          },
        ],
        11: [
          {
            durationToReach: "7 Day(s)",
            reach: 72000,
            lastHpd: "",
            currentHpd: "",
            lastHph: "",
            currentHph: "",
            averageHpd: "",
            averageHph: "",
            dateOfMeasurement:
              "Sun Nov 05 2023 14:55:38 GMT+0330 (Iran Standard Time)",
          },
        ],
      },
    };

    this.toMs = (currentNumberOfDaysToReach1000h) => {
      //1000h in 9days(ex for currentNumberOfDaysToReach1000h) = 3_600_000_000ms in 9days = 400_000_000ms (3_600_000_000 / 9 = 400_000_000) in 1day
      //400_000_000ms in 1day = 400_000_000ms / 24 = 16666666.666666666ms in hour
      const msPerDay =
        (1000 * (60 * 60 * 1000)) / currentNumberOfDaysToReach1000h;
      const msPerHour = msPerDay / 24;
      return [msPerDay, msPerHour];
    };

    this.hpdAvg = (lastHpd, currentNumberOfDaysToReach1000h) => {
      const [msPerDay, msPerHour] = this.toMs(currentNumberOfDaysToReach1000h);
      console.log(msPerDay, msPerHour); //Debug
      const currentHpd = +(1000 / currentNumberOfDaysToReach1000h);
      //this hardcode is last average hpd
      const lastAverageHpd = 118.8;
      const average = +((lastAverageHpd + currentHpd) / 2).toFixed(1);
      const difference = (currentHpd - lastHpd).toFixed(2);
      const differenceBetweenCurrentAndLastMothMessage =
        difference >= lastHpd
          ? `Congratulations! Our speed to reach 1000 hours has increased by ${difference} hours per day.`
          : `Our speed to reach 1000 hours, compared to our last record of "${lastHpd} hours per day", has decreased by ${difference} hours per day. Maybe in this journey towards 1000, we can try harder to increase our speed and reach our goal.`;
      this.hpdReport = `>>> Last 1000h >>> ${lastHpd}Hpd, Current >>> ${currentHpd.toFixed(
        2
      )}Hpd\n>> ${differenceBetweenCurrentAndLastMothMessage}`;
      return average;
    };

    this.hphAvg = (lastHph, currentNumberOfDaysToReach1000h) => {
      const [msPerDay, msPerHour] = this.toMs(currentNumberOfDaysToReach1000h);
      console.log(msPerDay, msPerHour); //Debug
      const currentHph = +(1000 / (currentNumberOfDaysToReach1000h * 24));
      //this hardcode is last average hpd
      const lastAverageHph = 5.0;
      const average = +((lastAverageHph + currentHph) / 2).toFixed(1);
      const hphDifference = (currentHph - lastHph).toFixed(2);

      const differenceBetweenCurrentAndLastMothMessage =
        hphDifference >= lastHph
          ? `Congratulations! Our speed to reach 1000 hours has increased by ${hphDifference} hours per hour.`
          : `Our speed to reach 1000 hours, compared to our last record of "${lastHph} hours per hour", has decreased by ${hphDifference} hours per hour. Maybe in this journey towards 1000, we can try harder to increase our speed and reach our goal.`;

      this.hphReport = `>>> Last 1000h >>> ${lastHph}Hph, Current 1000h >>> ${currentHph.toFixed(
        2
      )}Hph\n>> ${differenceBetweenCurrentAndLastMothMessage}`;
      return average;
    };
  }

  get message() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const history = this.history[year][month];
    const currentHistory = history.length - 1;
    const lastHpd = history[currentHistory].lastHpd;
    const lastHph = history[currentHistory].lastHph;
    //this hardcode is durationToReach
    const currentDurationToReach = 9;
    const hourPerDayAvg = this.hpdAvg(lastHpd, currentDurationToReach);
    const hourPerHourAvg = this.hphAvg(lastHph, currentDurationToReach);
    return `>>> ourFocusToDo Group 1000h speed Report\n\n> Date of measurement: ${d}\n\n> Average >> ${hourPerDayAvg}Hpd, Average >> ${hourPerHourAvg}Hph\n\n${this.hpdReport}\n\n${this.hphReport}\n.........................................................\n©BCFCODEteam | Created by @Bakhshandeh_Morteza 10/11/2023`;
  }
}

const report20231011 = new Report1000h();
const report20231020 = new Report1000h();
const report20231029 = new Report1000h();
// const report20231105 = new Report1000h();

console.log(report20231020.message);
