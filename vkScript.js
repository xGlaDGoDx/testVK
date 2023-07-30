vkBridge.send('VKWebAppInit'); 
vkBridge.subscribe((e) => console.log(e)); 
 
console.log("Start vk connection"); 
 
vkBridge.send("VKWebAppInit", {}); 
 
vkBridge.send('VKWebAppGetLaunchParams').then((data) => { 
    if (data.vk_user_id) { 
    // Параметры запуска получены 
    const request = new XMLHttpRequest(); 
    
    const url = "https://www.tablequiz.ru/vk_id_cars_script.php"; 
    
    const params = "id=" + data.vk_user_id; 
    
    request.open("POST", url, true); 
    
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    
    request.addEventListener("readystatechange", () => { 
        if(request.readyState === 4 && request.status === 200) { 
            console.log(request.responseText); 
        } 
    }); 
    
    request.send(params); 
    console.log("SEND") 
    } 
}).catch((error) => { console.log(error) }); 