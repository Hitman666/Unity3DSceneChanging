#pragma strict

var counter = 0;
function Start () {

}

function Update () {

}

function OnMouseDown(){
	Debug.Log("clicked " + counter++);
	var fadeTime = GameObject.Find ("FaderObj").GetComponent(FadingJS).BeginFade(1);		
	
	yield WaitForSeconds(fadeTime);	
	
	GameObject.Find("Cube").renderer.enabled = false;
	
	fadeTime = GameObject.Find ("FaderObj").GetComponent(FadingJS).BeginFade(-1);
	
	yield WaitForSeconds(fadeTime);	
	
	Application.LoadLevel(Application.loadedLevel + 1);	
}