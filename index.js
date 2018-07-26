// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(kittens, name) {
  destructivelyPrependKitten.unshift(name);
  return destructivelyPrependKitten;
}

function destructivelyRemoveLastKitten() {
  destructivelyRemoveLastKitten.pop();
  return destructivelyRemoveLastKitten;
}

function destructivelyRemoveFirstKitten() {
  destructivelyRemoveFirstKitten.shift();
  return destructivelyRemoveFirstKitten;
}

function appendKitten(name) {
  return appendKitten.splice(0, 1, name);
}

function prependKitten(name) {
  return prependKitten.slice(0, prependKitten.length - 1);
}
