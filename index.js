
function getNewXY(Xc, Yc, theta, r) {
  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)
  return {
    x: Math.round(Xc + x),
    y: Math.round(Yc + y)
  }
}

console.log(getNewXY(100, 100, 45, 15))