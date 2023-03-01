const { format } = require('date-fns');
const {
  routeGrades,
  routeGradeTemplate,
  boulderGradeTemplate
} = require('./mappings.js');

// DASHBOARD
const stats = {
  daysOut: null,
  lastDayOut: null,
  routesClimbed_year: null,
  gradeType: {
    Sport: '',
    Trad: '',
    Boulder: ''
  },
  volumeType: {
    Sport: '',
    Trad: '',
    Boulder: ''
  }
};

// TRENDS >> CHARTS >> ROUTES GRADE
const gradeData = (ticks) => {
  let routeTemp = routeGradeTemplate;
  let boulderTemp = boulderGradeTemplate;

  ticks.forEach((tick) => {
    let tickGrade = mapGrade(tick.tick_grade) || tick.tick_grade;
    let type = tick.route_type;

    if (type === 'Sport') {
      let types = routeTemp[tickGrade];
      types.Sport++;
    } else if (type === 'Boulder') {
      boulderTemp[tickGrade]++;
    } else {
      let types = routeTemp[tickGrade];
      types.Trad++;
    }
  });

  let results = {
    routes: formatGradeData(routeTemp),
    boulder: formatGradeData(boulderTemp)
  }

  return results;
};

const mapGrade = (tickGrade) => {
  const grades = Object.entries(routeGrades);
  let mappedGrade;

  grades.forEach((grade) => {
    let match = grade[0];
    let options = grade[1];

    if (options.includes(tickGrade)) {
      mappedGrade = match;
    }
  })

  return mappedGrade
};

const formatGradeData = (gradeData) => {
  let grades = Object.entries(gradeData);
  let data = [];

  grades.forEach((grade) => {
    if (typeof grade[1] === 'object') {
      let gradeObj = {
        name: grade[0],
        Sport: grade[1].Sport,
        Trad: grade[1].Trad
      };
      data.push(gradeObj);
    } else {
      let gradeObj = {
        name: grade[0],
        Boulder: grade[1]
      }
      data.push(gradeObj);
    }
  });

  return data;
};

// TRENDS >> CHARTS >> VOLUME
const volumeData = (ticks) => {
  let monthCount = {};

  ticks.forEach((tick) => {
    let date = format(new Date(tick.tick_date),'yyyy MM');

    if (!monthCount[date]) {
      monthCount[date] = 1;
    } else {
      monthCount[date]++;
    }
  })

  let results = formatVolumeData(monthCount);
  return results
};

const formatVolumeData = (monthData) => {
  let dates = Object.entries(monthData).reverse();
  const data = [];

  dates.forEach((date) => {
    let dateObj = {
      name: format(new Date(date[0]),'MMM yyyy'),
      count: date[1]
    };
    data.push(dateObj);
  })

  return data;
}

// TRENDS >> CHARTS >> DAYS OUT
const daysData = (ticks) => {
  const dates = new Set(); // unique
  const dayCount = {};

  ticks.forEach((tick) => {
    dates.add(tick.tick_date);
  });

  dates.forEach((date) => {
    let monthYear = format(new Date(date),'yyyy MM');

    if (!dayCount[monthYear]) {
      dayCount[monthYear] = 1;
    } else {
      dayCount[monthYear]++;
    }
  });

  let results = formatDaysData(dayCount);
  return results;
};


const formatDaysData = (daysData) => {
  let months = Object.entries(daysData).reverse();
  const data = [];

  months.forEach((month) => {
    let monthObj = {
      name: format(new Date(month[0]), 'MMM yyyy'),
      count: month[1]
    };
    data.push(monthObj);
  })

  return data;
};


export {
  gradeData,
  volumeData,
  daysData
};
