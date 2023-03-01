const { format } = require('date-fns');
const { routeGrades } = require('./mappings.js');

// TRENDS >> CHARTS >> ROUTES GRADE
const gradeData = (ticks) => {
  let routeGradeTemplate = {
    '5.6': { Sport: 0, Trad: 0},
    '5.7': { Sport: 0, Trad: 0},
    '5.8': { Sport: 0, Trad: 0},
    '5.9': { Sport: 0, Trad: 0},
    '5.10-': { Sport: 0, Trad: 0},
    '5.10': { Sport: 0, Trad: 0},
    '5.10+': { Sport: 0, Trad: 0},
    '5.11-': { Sport: 0, Trad: 0},
    '5.11': { Sport: 0, Trad: 0},
    '5.11+': { Sport: 0, Trad: 0},
    '5.12-': { Sport: 0, Trad: 0},
    '5.12': { Sport: 0, Trad: 0},
    '5.12+': { Sport: 0, Trad: 0},
    '5.13-': { Sport: 0, Trad: 0},
    '5.13': { Sport: 0, Trad: 0},
    '5.13+': { Sport: 0, Trad: 0},
    '5.14-': { Sport: 0, Trad: 0},
  };

  let boulderGradeTemplate = {
    'V0': 0,
    'V1': 0,
    'V2': 0,
    'V3': 0,
    'V4': 0,
    'V5': 0,
    'V6': 0,
    'V7': 0,
    'V8': 0,
    'V9': 0,
    'V10': 0,
    'V11': 0,
    'V12': 0,
    'V13': 0,
  };

  ticks.forEach((tick) => {
    let tickGrade = mapGrade(tick.tick_grade) || tick.tick_grade;
    let type = tick.route_type;

    if (type === 'Sport') {
      let types = routeGradeTemplate[tickGrade];
      types.Sport++;
    } else if (type === 'Boulder') {
      boulderGradeTemplate[tickGrade]++;
    } else {
      let types = routeGradeTemplate[tickGrade];
      types.Trad++;
    }
  });

  let results = {
    routes: formatGradeData(routeGradeTemplate),
    boulder: formatGradeData(boulderGradeTemplate)
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
  let grades = Object.entries(gradeData); // [[5.7, {Sport: 5, Trad: 0}], [5.8, 10], ...]
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

  return formatVolumeData(Object.entries(monthCount)).reverse();
};

const formatVolumeData = (dates) => {
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

export {
  gradeData,
  volumeData
};