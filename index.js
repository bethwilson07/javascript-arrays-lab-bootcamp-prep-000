// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  destructivelyAppendKitten.push(name);
  return destructivelyAppendKitten;
}

function destructivelyPrependKitten(name) {
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
