


const scriptsInEvents = {

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		var path = document.createElement('script');
		path.src = '//vk.com/js/api/openapi.js';
		document.head.appendChild(path);
		
		path.onload = function() {
			console.log(123);
			
			VK.init({
				apiId: 51693034
			});
			
			VK.api("account.getProfileInfo", function (data) {
		    	alert("Info: " + data.first_name + " " + data.last_name + " " + data.id);
		    	console.log("Info: " + 
					data.first_name + " " + 
					data.last_name + " " + 
					data.id);
		    	returnStr = data.id;
			});
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

