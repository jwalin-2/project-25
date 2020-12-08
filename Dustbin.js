class Dustbin
{
    constructor(x,y,Width,Height){

    this.x=x;
    this.y=y;
    this.Width=Width;
    this.Height=Height;


	this.dustbin1=Bodies.rectangle(x,y,Width,Height);
	
	this.dustbin2=Bodies.rectangle(x,y,Width,Height);

    this.dustbin3=Bodies.rectangle(x,y,Width,Height);
    }
}