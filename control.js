class Control {
    constructor(bA, bB) {
        var options = {
          bodyA : bA,
          bodyB : bB,
          stiffness : 0.05,
          length : 10
      }
      this.chain = cons.create(options)
      World.add(world, this.chain)
    }

    display() {
        var bApos = this.chain.bodyA.position;
        var bBpos = this.chain.bodyB.position;
        strokeWeight(4);
        line(bApos.x, bApos.y, bBpos.x, bBpos.y);
    }
}