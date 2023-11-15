const history = {
  2023: {
    11: [
      {
        durationToReach1000h: 5, //5 days
        reach: 73000,
        lastHpd: '',
        currentHpd: '',
        lastHph: '',
        currentHph: '',
        averageHpd: '',
        averageHph: '',
        dateOfMeasurement: ''
      }
    ]
  }
};

// const html = {
//   dateOfMeasurement: document.getElementById("dateOfMeasurement"),
// };

class Report1000h {
  constructor() {}

  currentHpd(day) {
    const minsPerDay = (1000 * 60) / day;
    const remainingMins = minsPerDay % 24;
    const hours = (minsPerDay - remainingMins) / 60;
    return [hours, remainingMins];
  }

  // render() {
  //   html.dateOfMeasurement.innerText = `${new Date()}`;
  // }

  save() {
    history[2023][11][0 /* this must be implemented dynamically */].dateOfMeasurement =
      new Date();
  }
}

const report11122023 = new Report1000h();
// report11122023.render();
report11122023.save();

//This export is for testing purposes
export { history, report11122023 };
