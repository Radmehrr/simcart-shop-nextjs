import jmoment from "jalali-moment";
import moment from "moment";

export function getFaMoment(timestamp: any) {
  const date = jmoment(timestamp * 1000).format("jYYYY/jMM/jDD");

  return date;
}

export function getDate(timestamp: any) {
  const d = new Date(timestamp * 1000);

  const year = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
  }).format(d);

  const month = new Intl.DateTimeFormat("fa-IR", {
    month: "short",
  }).format(d);

  const day = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
  }).format(d);

  const dayName = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
  }).format(d);

  const hour = new Intl.DateTimeFormat("fa-IR", {
    hour: "numeric",
  }).format(d);

  const minutes = new Intl.DateTimeFormat("fa-IR", {
    minute: "2-digit",
  }).format(d);

  const seconds = new Intl.DateTimeFormat("fa-IR", {
    second: "2-digit",
  }).format(d);

  return { year, month, day, dayName, hour, minutes, seconds };
}

export function FromNow(timestamp: any) {
  const fromNow = moment(timestamp * 1000)
    .locale("fa")
    .fromNow();
  return fromNow;
}
