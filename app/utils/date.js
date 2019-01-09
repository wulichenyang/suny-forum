import Moment from 'moment';

// 本地时间，换算对应格林威治时间
export const localDate = (v) => {
  const d = new Date(v || Date.now());
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString();
}

// Moment to xx day ago
export const toPostTime = (date) => {
  const postTime = Moment(date);
  return postTime.from(Moment());
}

