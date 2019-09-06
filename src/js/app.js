// JS Goes here - ES6 supported
const daysSince = document.getElementById("days-since-latest");

if (daysSince) {
  const aDay = 1000 * 60 * 60 * 24;

  const dateSince = new Date(daysSince.getAttribute("data-latest-incident-date"));
  const now = new Date();

  const timeSince = new Date(now.getFullYear(), now.getMonth(), now.getDate()) -
    new Date(dateSince.getFullYear(), dateSince.getMonth(), dateSince.getDate());
  const endDays = Math.floor(timeSince / aDay);

  const count = endDays === 1 ? `${endDays} day` : `${endDays} days`;
  daysSince.innerHTML = `${count} since last incident`;
}
