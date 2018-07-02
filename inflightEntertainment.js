function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let movieSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovie = movieLengths[i];
    const secondMovie = flightLength - firstMovie;

    if (movieSeen.has(secondMovie)) {
      return true;
    }
    movieSeen.add(firstMovie);
  }

  return false;
}


console.log(canTwoMoviesFillFlight([2, 4], 1));
// Output: false;

console.log(canTwoMoviesFillFlight([2, 4], 6));
// Output: True;

console.log(canTwoMoviesFillFlight([3, 8], 6));
// Output: false;

console.log(canTwoMoviesFillFlight([3, 8, 3], 6));
// Output: True;

console.log(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7));
// Output: True;

console.log(canTwoMoviesFillFlight([6], 6));
// Output: false;

console.log(canTwoMoviesFillFlight([], 2));
// Output: false;
