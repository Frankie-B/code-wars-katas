// Maximum Edge of a Triangle - https://edabit.com/challenge/nhXofMMyrowMyr9Nv

/**
 * Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
 *
 * (side1 + side2) - 1 = maximum range of third edge.
 */

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

nextEdge(5, 9);
