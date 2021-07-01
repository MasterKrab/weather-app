import dates from './dates';

const getDate = (date) => {
  const time = new Date(date);
  return `
   ${dates.days[time.getDay()]},
   ${time.getDay()}
   ${dates.months[time.getMonth()]}
  `;
};

export default getDate;
