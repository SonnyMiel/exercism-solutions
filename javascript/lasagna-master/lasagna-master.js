/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  switch(time) {
    case 0:
      return 'Lasagna is done.';
    case undefined:
      return 'You forgot to set the timer.'
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layers, avg = 2) {
  return layers.length * avg;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach((layer) => {
    if (layer === "noodles") {
      noodles += 1;
    }
    if (layer === "sauce") {
      sauce += 1;
    }
  })

  return { noodles: noodles * 50, sauce: sauce * 0.2 }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const newRecipe = {};

  Object.keys(recipe).forEach((r) => {
    newRecipe[r] = (recipe[r] / 2) * portions;
  })

  return newRecipe;
}
