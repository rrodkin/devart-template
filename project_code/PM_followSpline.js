#pragma strict
import Vectrosity;
import System.Collections.Generic;

var spRunner : Transform;		// object to run on spline,defined in the Editor by dragging obj to field
var speed : float;				// rate at which obj is moving
var loop : boolean = true;		// loop the motion around the spline
var t = "p";					// transformation type: p=prime, i=inversion, r=retrograde, ri=retrograde inversion
var initPos: float = 0.00;		// initial position of object, as a percenteage value
var isFwd : boolean = true; 	// obj is moving in its intended forward direction
var initRun : boolean = true;	// true only if objects motion has never been reversed
var start : float = 0.00;		// used to set start point if motion is paused or stopped
var paused : boolean = false;	// used to control stop / paused state
function runOnSpline(){
	var dComp = 0.00; 			// computed distance
	var dCalc = 0.00; 			// distance calculation: speed * time (since last calculation)
	var initOffset = 0.000;		// initial offset, e.g. start position
	var offset = 0.00; 			// computed offset
	var adj = 0.00; 			// adjusted position
	var pos1 = 0.00; 			// position value 1
	var pos2 = 0.00; 			// position value 2
	loop = true;
	paused = false;
	var count = 0;
	var dCalc1 = Time.deltaTime*speed;
	if(t=="p" || t=="r"){
		initOffset = initPos;
	}
	else if(t=="i" || t=="ri"){
		initOffset = (0.50 + initPos>1) ? (.50 + initPos) - 1 : .50 + initPos;
	}
	do{
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
			spRunner.position = FindObjectOfType(PM_genSpline).spline.GetPoint3D01(dComp);

			if(loop==false){
				return;
			}
			yield;
		}
	} while (loop);
}

// changes speed
function adjSpeed(val){
	speed = val;
	if(speed<0){speed=0;}
	else{return speed*100;}
	Debug.Log(speed);
}

// toggles display of trails
function trailOn(isOn){
	GetComponent(TrailRenderer).enabled = isOn;
}

// toggles direction 
function setDir(dir){
	isFwd = dir;
	initRun = false;
	if(t=="p"){t="r";}
	else if(t=="r"){t="p";}
	else if(t=="i"){t="ri";}
	else if(t=="ri"){t="i";}
}

function setPause(isPaused){
	paused = isPaused;
}

function stopRunOnSpline(isPaused){
  if(!isPaused){
  	loop=false;
  	isFwd = true;
  	initRun = true;
  }
}

/* another unexpected though interesting consequence:

when looking for a way to offset the start point, in prime transformation let dist=initOffset, and let dComp += dist;

*/