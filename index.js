// a reference to the enclosing scene element.
// We will append newly made spheres directly to this.
const SCENE = document.querySelector('a-scene')

// a few random starting positions we can use to make spheres.
const startPositions = [
  [-3, -2, -4],
  [-1, 5, 2],
  [4, -5, -1],
  [2, 3, 5]
]

const colors = [
  "red",
  "blue",
  "yellow",
  "pink"
]

// removes and returns a random element from an array
function sample(arr) {
  const randIdx = Math.floor(Math.random() * arr.length)
  const value = arr[randIdx]
  arr.splice(randIdx, 1)
  return value
}

function addEntityToScene(entity) {
  SCENE.appendChild(entity)
}

function createSphere() {
  const newSphere = document.createElement('a-sphere')
  const color = sample(colors)
  const coords = sample(startPositions).join(' ')
  newSphere.setAttribute("radius", Math.ceil(Math.random() * 3))
  newSphere.setAttribute("color", color)
  newSphere.setAttribute("position", coords)
  return newSphere
}

function createSpheres() {
  // TODO: implement me!
}
