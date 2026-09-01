import App from "./app.js";


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent); // only connect not render

root.render(App());