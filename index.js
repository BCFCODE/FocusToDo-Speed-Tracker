import Report1000h from "./src/models/Report1000h.js";
// import htmlRenderer from "./views/htmlRenderer.js";



const report11122023 = new Report1000h();
const report11172023 = new Report1000h();
const report11242023 = new Report1000h();

report11122023.save();
report11172023.save();
report11242023.save();

// Render HTML using htmlRenderer
// htmlRenderer.render(report11122023);

//This export is for testing purposes
export { report11122023 , report11172023, report11242023};
