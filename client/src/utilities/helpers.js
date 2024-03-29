const { format } = require('date-fns');
const {
  routeGrades,
  routeGradeTemplate,
  boulderGradeTemplate,
  routeDetailGrades,
  routeGradeDetailTemplate,
} = require('./mappings.js');


// STATS
const calcVolumeStats = (ticks) => {
  let routeVolume = gradeData(ticks);
  let entries = Object.entries(routeVolume);
  let routes = entries[0][1];
  let boulder = entries[1][1];

  console.log(routeVolume);

  let volumeStats = {
    Sport: null,
    Trad: null,
    Boulder: null,
  };

  for (var i = 0; i < routes.length; i++) {
    var type = routes[i];
    var sportCount = type['Sport'];
    var tradCount = type['Trad'];

    volumeStats['Sport'] += sportCount;
    volumeStats['Trad'] += tradCount;
  }

  for (var i = 0; i < boulder.length; i++) {
    var grade = boulder[i];
    var boulderCount = grade['Boulder'];

    volumeStats['Boulder'] += boulderCount;
  }

  return volumeStats;
};


const routeGradeStats = (ticks) => {
  let routeStats = highestGradeRoutes(ticks);
  let grades = Object.entries(routeStats); // ['5.6', [{Sport: 1, Trad: 1}]], ['5.7', [{Sport: 1, Trad: 1}]]

  let routeGrades = {
    Sport: '',
    Trad: '',
  };

  for (var i = 0; i < grades.length; i++) {
    let grade = grades[i];

    if (grade[1]['Sport'] > 0) {
      routeGrades['Sport'] = grade[0];
    }

    if (grade[1]['Trad'] > 0) {
      routeGrades['Trad'] = grade[0];
    }
  }

  return routeGrades;
};


const highestGradeRoutes = (ticks) => {
  let routeGrades = routeGradeDetailTemplate;

  ticks.forEach((tick) => {
    let tickGrade = mapDetailGrade(tick.tick_grade) || tick.tick_grade;
    let type = tick.route_type;

    if (type === 'Sport' && (tick.lead_style === 'Redpoint' || tick.lead_style === 'Flash' || tick.lead_style === 'Onsight')) {
      let types = routeGrades[tickGrade];
      types.Sport++;
    } else if (type === 'Trad' && (tick.lead_style === 'Redpoint' || tick.lead_style === 'Flash' || tick.lead_style === 'Onsight')) {
      let types = routeGrades[tickGrade];
      types.Trad++;
    }
  });

  return routeGrades;
};

const mapDetailGrade = (tickGrade) => {
  const grades = Object.entries(routeDetailGrades);
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

const makeRouteTemplate = () => {
  let template = {
    '5.6': { Sport: 0, Trad: 0 },
    '5.7': { Sport: 0, Trad: 0 },
    '5.8': { Sport: 0, Trad: 0 },
    '5.9': { Sport: 0, Trad: 0 },
    '5.10a': { Sport: 0, Trad: 0 },
    '5.10a/b': { Sport: 0, Trad: 0 },
    '5.10b': { Sport: 0, Trad: 0 },
    '5.10b/c': { Sport: 0, Trad: 0 },
    '5.10c': { Sport: 0, Trad: 0 },
    '5.10c/d': { Sport: 0, Trad: 0 },
    '5.10d': { Sport: 0, Trad: 0 },
    '5.11a': { Sport: 0, Trad: 0 },
    '5.11a/b': { Sport: 0, Trad: 0 },
    '5.11b': { Sport: 0, Trad: 0 },
    '5.11b/c': { Sport: 0, Trad: 0 },
    '5.11c': { Sport: 0, Trad: 0 },
    '5.11c/d': { Sport: 0, Trad: 0 },
    '5.11d': { Sport: 0, Trad: 0 },
    '5.12a': { Sport: 0, Trad: 0 },
    '5.12a/b': { Sport: 0, Trad: 0 },
    '5.12b': { Sport: 0, Trad: 0 },
    '5.12b/c': { Sport: 0, Trad: 0 },
    '5.12c': { Sport: 0, Trad: 0 },
    '5.12c/d': { Sport: 0, Trad: 0 },
    '5.12d': { Sport: 0, Trad: 0 }
  };

  return template;
};

// TRENDS >> CHARTS >> ROUTES GRADE
const gradeData = (ticks) => {
  let routeTemp = JSON.parse(JSON.stringify(routeGradeTemplate));
  let boulderTemp = { ...boulderGradeTemplate };

  ticks.forEach((tick) => {
    let tickGrade = mapGrade(tick.tick_grade) || tick.tick_grade;
    let type = tick.route_type;
    let types = routeTemp[tickGrade];

    if (type === 'Sport') {
      types.Sport++;
    } else if (type === 'Boulder') {
      boulderTemp[tickGrade]++;
    } else {
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

  return dayCount;
};

export {
  gradeData,
  volumeData,
  daysData,
  highestGradeRoutes,
  routeGradeStats,
  calcVolumeStats,
};
