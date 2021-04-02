function Circle(radius)
{
    // let color='red';
    this.radius=radius;
    let defaultLocation={x:0,y:0}
    let computeOptimumLocation=function(){

    }
    this.getDefaultLocation=function(){
        return defaultLocation;
    }
    this.draw=function(){
        let x,y;
        computeOptimumLocation();
        console.log('draw');
    }
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            console.log('I am called');
            return defaultLocation;
        },
        set:function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation=value;
        }
    });
}

const circle=new Circle(10);
console.log(circle.defaultLocation);
for(let key in circle)
{
    if(typeof circle[key]!=='function')
    console.log(key,circle[key]);
}
const arr=new Array(10,304,3);
for(let key in arr)
{
    console.log(key,arr[key]);
}
const keyArr=Object.keys(circle);
console.log(keyArr);