// Frames Per Second - https://edabit.com/challenge/d9suvbchE2bnHNQuK

/**
 * Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
 */

function frames(minutes, fps) {
    return minutes * (fps * 60);
}

frames(10, 25);
