const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var polygon, slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;


    platform = new Ground(900, 305, 300, 30);
    platform1 = new Ground(1200, 505, 300, 30);
    platform2 = new Ground(550, 405, 300, 30);

    
    
   // log4 = new Log(760,120,150, PI/7);
   // log5 = new Log(870,120,150, -PI/7);

    polygon = new Polygon(200,50,20);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:250, y:190});

    box1 = new Box(890,190,70,70);
    box2 = new Box(930,190,70,70);
   // pig1 = new Pig(810, 350);
  //  log1 = new Log(810,260,300, PI/2);

    box3 = new Box(840,250,70,70);
    box4 = new Box(980,250,70,70);
  //  pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(910,250,70,70);
    box6 = new Box(910,120,70,70);
   
    box7 = new Box(1140,450,70,70);
    box8 = new Box(1280,450,70,70);
    box9 = new Box(1190,390,70,70);
    box10 = new Box(1230,390,70,70);
    box11 = new Box(1210,450,70,70);
    box12 = new Box(1210,320,70,70);
    
    box13 = new Box(490,350,70,70);
    box14 = new Box(630,350,70,70);
    box15 = new Box(540,290,70,70);
    box16 = new Box(580,290,70,70);
    box17 = new Box(560,350,70,70);
    box18 = new Box(560,220,70,70);}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
 /*   box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
*/
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
    polygon.display();
    platform.display();
    platform1.display()
    platform2.display()
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}
