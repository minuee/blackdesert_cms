export function getStatusText(str) {
  console.log("log -> ---------------------------------");
  console.log("log -> ~ getStatusText ~ str", str);
  console.log("log -> ---------------------------------");

  if (str) {
    return str.replace(/_[\d]+$/, "");
  }
  return str;
}
