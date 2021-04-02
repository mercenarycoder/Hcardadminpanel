console.log('Hare Krishna');
// object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
}
// factory function
function createCircle(radius) {
    return {
        radius,
        location: {
            x: 1,
            y: 1
        },
        draw: function () {
            console.log('draw');
        }
    }
}
console.log('old method 1');
circle.draw()
console.log('new method ')
const cir=createCircle(3);
cir.draw();
// Constructor function
function Circle(radius){
    this.radius=radius;
    this.draw=()=>{
        console.log('draw');
    }
}

const c=new Circle(4);
c.draw();
console.log(Circle.name);
const c2=new Function('radius',`
this.radius=radius;
this.draw=()=>{
    console.log('draw');
}`)

let x={};

// let x =new Object();