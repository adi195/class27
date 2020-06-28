class Chain {
    constructor (bodyA,bodyB){
     var options = {
         bodyA : bodyA,
         bodyB : bodyB,
         stiffness : 0.01,
         length : 50
     }
     this.constr = Constraint.create(options);
     World.add(world,this.constr)
    }
    display(){
        strokeWeight(5);
        line(this.constr.bodyA.position.x,this.constr.bodyA.position.y,this.constr.bodyB.position.x,this.constr.bodyB.position.y);
    }
}