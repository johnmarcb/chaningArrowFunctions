const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

const learnToCodeList = playList.filter(function (codeList) {
  return codeList.title.indexOf('Learn to Code') > -1;
});

const durations = learnToCodeList.map(function (playDuration) {
  return playDuration.dur;
});
console.table(durations);
