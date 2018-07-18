function getfile(file,callback) {
	var xhr =new XMLHttpRequest(" application/json")
	xhr.overriddeMimeType("application/json")
	xhr.open("GET",file,true);
	xhr.onreadysatechange = function(){
		if(xhr.readystate ===4 && xhr.status == "200")
		callback(xhr.responsetext);

	}
};
xhr.send(null);
}
getfile("data.json",function(text){
	var data =JSON.prase(text);
	console.log(data);
})
