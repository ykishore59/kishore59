function getfile(file,callback) {
	var xhr =new XMLHttpRequest(" application/json")
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadysatechange = function(){
		if(xhr.readystate ===4 && xhr.status == "200"){
		callback(xhr.responsetext);

	}
};
xhr.send(null);
}
getfile("data.json",function(text){
	var data =JSON.prase(text);
	console.log(data);
})
var child=document.queryselection("childone")

function details(det){
	var img=document.createelement("ïmg");
	img.src=det.image;
	child.appendchild("img");
}