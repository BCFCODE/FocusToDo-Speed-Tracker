// history = {
//   durationToReach: "8 Day(s)",
//   reach: 69000,
//   lastHpd: 100,
//   currentHpd: 125,
//   lastHph: 4.16,
//   currentHph: 5.2,
//   averageHpd: 112.5,
//   averageHph: 4.7,
//   dateOfMeasurement:
//     "Wed Oct 11 2023 20:27:18 GMT+0330 (Iran Standard Time)", <<<<<<<<<<<<
// }

class Report1000h {
  constructor() {
    this.history = {
      2023: {
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
  }

  
  render() {}
}

const d = new Date();
const dateOfMeasurement = () => {
  return d;
};

//render
document.getElementById(
  "dateOfMeasurement"
).innerText = `${dateOfMeasurement()}`;

// export { dateOfMeasurement };
