class Snake {
  constructor(maxLength) {
    this.points = []
    this.maxLength = maxLength
  }

  push(point) {
    this.points.push(point)
    this.points = this.points.slice(-1 * this.maxLength)
  }

  draw() {
    noFill()
    strokeWeight(4)
    stroke("#ffffff")

    beginShape()
    this.points.forEach(point => {
      curveVertex(point.x, point.y)
    })
    endShape()
  }
}