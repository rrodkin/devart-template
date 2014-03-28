#Process - Part 02: Teaching Fish to Swim 

While it was easy enough to get one object running on the spline, finding an efficient way to direct many objects, while still giving them some “autonomy” was not immediately clear.  But again, it was a matter of marrying some hand-coded JavaScript with a PlayMaker FSM.  Basically, the script contains the core functions for movement on the spline, such direction and speed, while PlayMaker talks to the fish objects.  PlayMaker then takes user input and applies it to the fish, per the script.  Furthermore, the fish are effectively clones of each other, thanks to Unity’s “prefab” feature.  This lets you create one “master” object, and then instantiate it as often as needed.  You can modify the master, and the changes are applied to all instances.  Another great Unity feature!

So, once the spline is generated, the script gives PlayMaker the “ready” signal, telling it that it can go ahead and put the objects on the spline, which it does via an FSM (Functional State Machine) that is attached to the Fish.  Another set of FSMs is used to control speed, direction, etc., per the hand-coded script.

Of particular interest is the handling of speed.  I’ve mentioned before that the concept of Differential Motion is at the core of the mechanics.  This is an effect in which each object is moving at a rate of just one unit greater than the previous object.  So while each fish is controlled by the same FSM, we can still control each instance separately, and thus achieve the desired effect.

Below are some initial sketches I’d done to try to figure this all out.

![](../project_images/part02-sketch-01.jpg?raw=true)

![](../project_images/part02-sketch-02.jpg?raw=true)

And here is some of the script.  Try comparing with the screenshots below, of the PlayMaker FSM that takes the script’s output, merges it with the user’s input, and then sends it to the fish objects. In this block, dCalc is the distance calculation of speed*time since the last calculation, and dComp is the computed distance.  Basically, the core data needed for the object to move along the spline correctly.  Notice, though, the very last line.  Here the spRunner -- our spline runner, or “fish”, is being assigned the value of dComp -- the computed distance -- as found in the PlayMaker-managed spline object (PM_genSpline).  Wash, rinse, and repeat, it works flawlessly on as many objects as you want to throw on the spline.

```
for(var dist=start; dist<=1.00; dist+=dCalc1){
	dCalc = Time.deltaTime*speed;
	if(paused==true){
		dCalc1 = 0;
	}
	else{
		dCalc1 = dCalc;
		if(t=="p" || t=="ri"){
			pos1 = (initRun) ? initOffset + dist : dComp;
			pos2 = (initRun) ? dist - (1-initOffset) : 0;
			offset = (isFwd) ? pos1 : dComp;
			adj = (isFwd) ? pos2 : 0;
			dComp = (offset>1) ?  adj : offset;
			dComp += dCalc;
		}
		else if(t=="r" || t=="i"){
			pos1 = (initRun) ? initOffset - dist : dComp;
			pos2 = (initRun) ? initOffset + (1-dist) : 1;
			offset = (isFwd) ? pos1 : dComp;
			adj = (isFwd) ? pos2 : 1-dComp;
			dComp = (offset<0) ? adj : offset;
			dComp -= dCalc; 
		}
	}
}
spRunner.position = FindObjectOfType(PM_genSpline).spline.GetPoint3D01(dComp);

```

If I have time -- and it’s not looking so good right now -- I’ll add a diagram of the process/flow between PlayMaker, the hand-coded scripts, User Input, and the fish objects.  Hopefully, the above will be clear enough for now.


