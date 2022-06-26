const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getword(info,tab) {
	if (info.menuItemId !== CONTEXT_MENU_ID) {
		return;
	}
	console.log("Word " + info.selectionText + " was clicked.");
	chrome.windows.create({ 
		url: "https://duckduckgo.com/?q=" + info.selectionText, "incognito": true
	});
	}
	chrome.contextMenus.create({
	title: "Incognito search: %s", 
	contexts:["selection"], 
	id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getword)