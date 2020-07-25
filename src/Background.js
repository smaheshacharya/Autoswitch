
const items = JSON.parse(localStorage.getItem("items"));
if(items){
    for(var i = 0; i < items.length; i++) {

            var urls = items[i].text
            if(urls.substring(0,4)=="www.")
            {
                  var final_url = "https://" + urls;
            }
            else{
                  var final_url = "https://www." + urls;

            }
           
            chrome.tabs.create({url:final_url});
            console.log(urls)
      }
}
// chrome.tabs.create({url:"https://www.facebook.com"});