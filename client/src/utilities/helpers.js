const { format } = require('date-fns');

// TRENDS >> CHARTS >> DAYS OUT
const getVolume = (ticks) => {
  let monthCount = {};

  ticks.forEach((tick) => {
    let date = format(new Date(tick.tick_date),'yyyy MM');

    if (!monthCount[date]) {
      monthCount[date] = 1;
    } else {
      monthCount[date]++;
    }
  })

  return createVolumeData(Object.entries(monthCount)).reverse();
};

const createVolumeData = (dates) => {
  const data = [];

  dates.forEach((date) => {
    const dateObj = {
      name: format(new Date(date[0]),'MMM yyyy'),
      count: date[1]
    };
    data.push(dateObj);
  })

  return data;
}

export {
  getVolume
};