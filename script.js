// Replace this with your deep link
const deepLink = "attendapp://teacher?class=FYIT-A&subject=Java";

window.onload = () => {
  // Try to open the app via deep link
  window.location.href = deepLink;

  // Set fallback link
  document.getElementById("fallback-link").href = deepLink;
};
