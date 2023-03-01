const getDaysOut = (ticks) => {
  let dates = new Set();

  ticks.forEach((tick) => {
    if (!dates.has(tick.tick_date)) {
      dates.add(tick.tick_date);
    }
  })

  return dates.size;
};


export {
  getDaysOut
};