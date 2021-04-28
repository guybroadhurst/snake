class Letter {
  constructor(text, position, rotation) {
    this.text = text
    this.position = position
    this.rotation = rotation
  }

  draw() {
    textSize(64)
    textFont("Inconsolata")
    fill("#111118")
    noStroke()
    textAlign(CENTER, CENTER)

    push()
    translate(this.position.x, this.position.y)
    rotate(this.rotation)
    text(this.text, 0, 0)
    pop()
  }
}