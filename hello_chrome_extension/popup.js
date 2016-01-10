var tablink;
chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
});

var activeTabId;

function myAlert(){
    alert("Hello Chrome Extension World!\nThe current tab'S URL = " + tablink);
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('alertButton').addEventListener('click', myAlert);
});
