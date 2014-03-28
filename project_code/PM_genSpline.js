#pragma strict
import Vectrosity;
import System.Collections.Generic;
var numPts = 360; 
var segments = 4;
var loop = false;
var pmFSM : PlayMakerFSM;
var obj = "Object with State Machine";
pmFSM = gameObject.Find(obj).GetComponent.<PlayMakerFSM>();
private var splineReady = false;
public var type = "Spline Type";
public var sType = "SuperFormula Curve";
public var lineMaterial : Material;

private var xRadius = 8.0;
private var yRadius = 8.0;
private var pointRotation = 0.0;
public var spline : VectorLine;
public var pPetalNum = 4;
private var ptValX = 0.0;
private var ptValY = 0.0;
private var ptRef = "";
private var idx = "";
//private var linePoints;
function Start () {		
	var splinePoints = new List.<Vector3>();
	var i = 0;
	var x = 0;

	if(type=="fig8"){
		splinePoints.Add(Vector3(0,0,-2));
		splinePoints.Add(Vector3(4,8,-2));
		splinePoints.Add(Vector3(8,8,-2));
		splinePoints.Add(Vector3(8,4,-2));
		splinePoints.Add(Vector3(-8,-4,-2));
		splinePoints.Add(Vector3(-8,-8,-2));
		splinePoints.Add(Vector3(-4,-8,-2));
	}
	else if(type=="lissa"){
		var q=3;
		var p=2;
		var scale = 7;
		for(var j=0;j<=360;j++){
			ptValX = scale * Mathf.Sin(q * j * 3.14/180);
			ptValY = scale * Mathf.Sin(p * j * 3.14 /180);
			var pt = Vector3(ptValX,ptValY,-2);
			splinePoints.Add(pt);
		}
	}
	else if(type=="random"){
		while (i<14){
			ptValX = Random.Range(-8,8);
			ptValY = Random.Range(-8,8);
			pt = Vector3(ptValX,ptValY,-2);
			splinePoints.Add(pt);
			i++;	
		}
	}
	else if(type=="polar"){
		loop = true;
		var tTotal = 6.28;  		// total theta (Radians) in curve.  6.28 (2PI) is full circle
		var tf = tTotal / numPts; 	// increment of theta for each point
		var r = 1.00; 
		var s = 7;  				// scale factor;
		i=1;
		while(i<=numPts){
			var t = tf*i; 			// theta;
			r = Mathf.Sin(pPetalNum*t);  	// Rose Curve;
			
			ptValX = s * (r * Mathf.Cos(t));
			ptValY = s * (r * Mathf.Sin(t));
			pt = Vector3(ptValX,ptValY,-2);
			splinePoints.Add(pt);
			i++;
		}
	}
	else if(type=="super"){
		while(i<numPts){
			var phi = i * (2*Mathf.PI) / numPts;
			var m = 0.00;
			var n1 = 0.00;
			var n2 = 0.00;
			var n3 = 0.00;
			var a=1;
		   	var b=1;
		   	
			var rot = 0.00;
			var prd = 0;			
		   	var t1 = 0.00;
		   	var t2 = 0.00;

			if(sType=="gear"){
				m=22;n1=3;n2=3;n3=3;a = 1;b = 1;
			}
			else if(sType=="star"){
				m=5;n1=2;n2=7;n3=7;a=1;b=1;
			}
			else if(sType=="gear2"){
				m=19;n1=100;n2=50;n3=50;a = 1;b = 1;
			}
		   t1 = Mathf.Cos(m * phi / 4) / a;
		   t1 = Mathf.Abs(t1);
		   t1 = Mathf.Pow(t1,n2);
		
		   t2 = Mathf.Sin(m * phi / 4) / b;
		   t2 = Mathf.Abs(t2);
		   t2 = Mathf.Pow(t2,n3);
		
		   r = Mathf.Pow(t1+t2,1/n1);
		   if (Mathf.Abs(r) == 0) {
		      ptValX = 0;
		      ptValY = 0;
		   } 
		   else {
				r = 1 / r;
		      	s = (sType=="star") ? 4 : 7;
		     	ptValX = s * (r * Mathf.Cos(phi));
		      	ptValY = s * (r * Mathf.Sin(phi));
		   }
			pt = Vector3(ptValX,ptValY,-2);
			splinePoints.Add(pt);
			i++;			   
	   }
	}
	
	// now that we have points, we can assign them to a line that will server as the spline
	
	var lineColor = Color(.25, .15, .0);
	spline = new VectorLine("TheSpline", new Vector3[segments+1], lineColor, null, 5.0, LineType.Continuous);
	var splineObjRef = gameObject.Find("Vector TheSpline");
	spline.MakeSpline (splinePoints.ToArray(), segments, loop);
	spline.Draw3D();
	showSpline(false); 
	splineReady = true;
	if(splineReady){
		for(var g=0;g<splinePoints.Count;g++){
			idx = (g+1).ToString();
			ptRef = "pt"+idx;
			pmFSM.FsmVariables.GetFsmVector3(ptRef).Value = splinePoints[g];
		}
		pmFSM.FsmVariables.GetFsmGameObject("splineObj").Value = splineObjRef;
		pmFSM.Fsm.Event("splineReady");
	}
}


function showSpline(isActive){
	gameObject.Find("Vector TheSpline").renderer.enabled = isActive;
}
