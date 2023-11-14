const history = {
  2023: {
    11: [
      {
        durationToReach1000h: 5, //5 days
        reach: 73000,
        lastHpd: "",
        currentHpd: "",
        lastHph: "",
        currentHph: "",
        averageHpd: "",
        averageHph: "",
        dateOfMeasurement: "",
      },
    ],
  },
};

// const html = {
//   dateOfMeasurement: document.getElementById("dateOfMeasurement"),
// };

class Report1000h {
  constructor() {}

  currentHpd() {
  
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
// report11122023.save();

//This export is for testing purposes
export { history, report11122023 };
