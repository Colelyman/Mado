function b(){chrome.storage.local.get(["lastX","lastY","lastWidth","lastHeight"],function(a){void 0==a.lastX||void 0==a.lastY||void 0==a.lastWidth||void 0==a.lastHeight||isNaN(a.lastX)||isNaN(a.lastY)||isNaN(a.lastWidth)||isNaN(a.lastHeight)||!(0<a.lastX&&0<a.lastY&&240<=a.lastWidth&&683<=a.lastHeight)?chrome.app.window.create("mado.html",{bounds:{width:Math.round(0.85*screen.width),height:Math.round(0.85*screen.height)},minWidth:683,minHeight:240}):chrome.app.window.create("mado.html",{bounds:{left:a.lastX,top:a.lastY, width:a.lastWidth,height:a.lastHeight},minWidth:683,minHeight:240})})}chrome.app.runtime.onLaunched.addListener(function(a){void 0!=a.items?chrome.storage.local.set({tempFileEntry:chrome.fileSystem.retainEntry(a.items[0].entry)},b):b()});