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

  currentHph(day) {
    const minsPerDay = (1000 * 60) / day;
    const minsPerHour = minsPerDay / 24;
    const remainingMinsPerHour = minsPerHour % 60;
    const hours = (minsPerHour - remainingMinsPerHour) / 60;
    return [hours, remainingMinsPerHour];
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
