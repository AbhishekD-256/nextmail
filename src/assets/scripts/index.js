import "../sass/main.scss";
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context("../images/", true, /\.(png|jpe?g|gif|svg)$/));
