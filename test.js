// const history = {
//   2023: {
//     11: [
//       {
//         durationToReach1000h: 5, //5 days
//         reach: 73000,
//         lastHpd: '',
//         currentHpd: '',
//         lastHph: '',
//         currentHph: '',
//         averageHpd: '',
//         averageHph: '',
//         dateOfMeasurement: ''
//       }
//     ]
//   }
// };

// const html = {
//   dateOfMeasurement: document.getElementById("dateOfMeasurement"),
// };

const history = {};

class Report1000h {
  constructor(durationToReach1000h) {
    this.durationToReach1000h = durationToReach1000h;
    this.now = new Date();
  }

  currentHpd() {
    const minsPerDay = (1000 * 60) / this.durationToReach1000h;
    const remainingMins = minsPerDay % 24;
    const hours = (minsPerDay - remainingMins) / 60;
    return [hours, remainingMins];
  }

  // render() {
  //   html.dateOfMeasurement.innerText = `${new Date()}`;
  // }

  save() {
    history[this.now.getFullYear()] = {
      [this.now.getMonth() + 1]: {
        [this.now.getDate()]: {
          durationToReach1000h: this.durationToReach1000h,
          reach: '',
          lastHpd: '',
          currentHpd: this.currentHpd(),
          lastHph: '',
          currentHph: '',
          averageHpd: '',
          averageHph: '',
          dateOfMeasurement: ''
        }
      }
    };
  }
}

const report11122023 = new Report1000h(5);
// report11122023.render();
const save = report11122023.save();
console.log(history);
//This export is for testing purposes
// export { history, report11122023 };
