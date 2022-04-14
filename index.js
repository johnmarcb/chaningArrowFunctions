const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

const learnToCodeList = playList
    .filter((playList) => playList.title.indexOf('Learn to Code') > -1)
    .map((duration) => duration.dur)
    .map((time) => time.split(':'))
    .map((addTime) => parseInt(addTime[0] * 60) + parseInt(addTime[1]))
    .reduce((accumulator, current) => accumulator + current, 0)
;

console.table(learnToCodeList);
