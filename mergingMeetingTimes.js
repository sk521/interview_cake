function mergeRanges(meetings) {
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}


















// Tests

console.log(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]));
// output: [{ startTime: 1, endTime: 4 }];

// console.log(mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]));
// output: [{ startTime: 5, endTime: 8 }];

// console.log(mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]));
// output: [{ startTime: 1, endTime: 8 }];

// console.log(mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]));
// output: [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];

// console.log(mergeRanges([
//   { startTime: 1, endTime: 4 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 5, endTime: 8 },
// ]));
// output: [{ startTime: 1, endTime: 8 }];

console.log(mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
]));
// output: [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];


// console.log(mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]));
// output: [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ];
