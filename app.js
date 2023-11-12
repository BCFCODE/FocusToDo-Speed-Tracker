const history = {
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

const html = {
  dateOfMeasurement: document.getElementById("dateOfMeasurement"),
};

class Report1000h {
  constructor() {}

  
  currentHpd() {}
  
  render() {
    html.dateOfMeasurement.innerText = `${new Date()}`;
  }
}

const report11122023 = new Report1000h();
report11122023.render();

//This export is for testing purposes
// export { dateOfMeasurement };
