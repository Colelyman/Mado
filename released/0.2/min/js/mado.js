var c,aa;function f(){void 0!=ba&&(ca(ba),ba=void 0)}function da(){marked(g.innerText,function(a,b){chrome.fileSystem.chooseEntry({type:"saveFile",suggestedName:ea()+".html"},function(a){a&&a.createWriter(function(a){a.write(new Blob([b],{type:"text/HTML"}))},f)})})}function h(a){return a.substring(a.lastIndexOf("/")+1)}function ea(){var a=k.innerHTML;return a.substring(a.lastIndexOf("/")+1,a.lastIndexOf("."))}
function fa(a){chrome.app.window.create(a,{bounds:{left:Math.round(window.screenX+($(window).width()-498)/2),top:Math.round(window.screenY+($(window).height()-664)/2),width:498,height:664},minWidth:498,minHeight:664,maxWidth:498,maxHeight:664});ga.click()}
function ha(){chrome.storage.local.get("displaySize",function(a){void 0!=a.displaySize?"small"==a.displaySize?$("body").attr("class","small"):"medium"==a.displaySize?$("body").attr("class"," "):$("body").attr("class","big"):(chrome.storage.local.set({displaySize:"medium"}),$("body").attr("class"," "))})}
function ia(){0<g.innerText.length&&chrome.app.window.create("mado.html",{bounds:{left:window.screenX+20,top:window.screenY+20,width:window.innerWidth,height:window.innerHeight},frame:"none",minWidth:683,minHeight:240})}
function ja(a){a.file(function(b){var e=new FileReader;e.onload=function(b){""!=g.innerText?chrome.storage.local.set({tempFileEntry:chrome.fileSystem.retainEntry(a)},ia):(g.innerText=b.target.result,c=a,l=g.innerText,m(),k.innerHTML=h(a.fullPath)+"&nbsp;-");ka(a)};e.readAsText(b)},f)}function la(){chrome.fileSystem.chooseEntry({type:"openFile",accepts:[{extensions:["md","txt"]}]},function(a){a&&ja(a)})}
function ma(){chrome.fileSystem.chooseEntry({type:"saveFile",suggestedName:"document.md"},function(a){a&&a.createWriter(function(b){b.write(new Blob([g.innerText],{type:"text/plain"}));c=a;ka(c);l=g.innerText;na();k.innerHTML=h(a.fullPath)+"&nbsp;-"},f)})}function oa(){void 0==c||"md&nbsp;-"!=k.innerHTML.substring(k.innerHTML.length-9)?ma():c.createWriter(function(a){a.write(new Blob([g.innerText],{type:"text/plain"}));ka(c);l=g.innerText;na();k.innerHTML=h(savedFile.fullPath)+"&nbsp;-"},f)}
chrome.app.window.current().onBoundsChanged.addListener(function(){1366>window.innerWidth&&"switch-button activated"==n.className?p.click():1366<=window.innerWidth&&(1366>aa&&(pa&&n.click()));aa=window.innerWidth});chrome.storage.onChanged.addListener(function(a){for(key in a)"analytics"==key?qa():"displaySize"==key?ha():"gfm"==key?ra():"resize"==key&&sa()});
$(document).click(function(a){$(a.target).closest(ta).length&&"tool-displayer hidden"==ua.className?(ua.className="tool-displayer",q.focus()):"tool-displayer hidden"==ua.className||($(a.target).closest(q).length||($(a.target).closest(r).length||(q.value="",va(1),r.className="hidden",ua.className="tool-displayer hidden")));$(a.target).closest(wa).length&&"tool-displayer hidden"==s.className?(xa.innerHTML="Choose an image",t.style.display="none",u.value="",v.value="",ya=void 0,s.className="tool-displayer",
0<$(g).find("#mado-image").length&&(w=document.getElementById("mado-image"),v.value=w.innerText,za=v.value)):"tool-displayer"!=s.className||($(a.target).closest(Aa).length||(void 0!=w&&(w.innerText=za),s.className="tool-displayer hidden",Ba(w),Ca("mado-image")));$(a.target).closest(x).length&&"tool-displayer hidden"==y.className?(z.value="",A.value="",y.className="tool-displayer",0<$(g).find("#mado-link").length&&(B=document.getElementById("mado-link"),A.value=B.innerText,za=A.value),z.focus()):"tool-displayer"!=
y.className||($(a.target).closest(y).length||(void 0!=B&&(B.innerText=za),y.className="tool-displayer hidden",Ba(B),Ca("mado-link")));$(a.target).closest(ga).length&&"hidden"==Da.className?Da.className=" ":"hidden"==Da.className||($(a.target).closest(Ea).length||(Da.className="hidden"));$(a.target).closest(Fa).length&&"hidden"==C.className?(Ga(),C.className=""):"hidden"==C.className||($(a.target).closest(D).length||(C.className="hidden"));$(a.target).closest(Ha).length&&"tool-displayer hidden"==E.className?
E.className="tool-displayer":"tool-displayer hidden"==E.className||($(a.target).closest(E).length||(E.className="tool-displayer hidden"));"visible"!=Ia.className||($(a.target).closest(Ja).length&&!$(a.target).closest(Ka).length||(Ia.className="hidden"))});var F,g,La,G,Ma,za,H,Na,Oa,Pa,Qa,I,Ra,Sa,Ta=document.createElement("div");document.createElement("textarea");var J,K;
function m(){0<g.innerText.length?void 0==Ma?chrome.storage.local.get("gfm",function(a){void 0!=a.gfm?marked.setOptions({gfm:a.gfm}):(chrome.storage.local.set({gfm:!1}),marked.setOptions({gfm:!1}));ra();marked(g.innerText,function(a,e){for(var d=L=0;d<M.length;d++)M[d][2]=!1;J=e;N()})}):(marked.setOptions({gfm:Ma}),marked(g.innerText,function(a,b){for(var e=L=0;e<M.length;e++)M[e][2]=!1;J=b;N()})):(F.innerHTML="See the result here",O.innerHTML="&nbsp;0 characters&nbsp;",P.innerHTML="&nbsp;0 words&nbsp;",
na())}function Ua(a){if(Qa=rangy.getSelection().rangeCount?rangy.getSelection().getRangeAt(0):null){Ta.id=a;try{Qa.surroundContents(Ta)}catch(b){}}}function Va(a,b,e,d){Na=b.indexOf("<div",e);G=b.indexOf("</div>",e);return-1!=G?-1!=Na&&Na<G?Va(a+1,b,Na+5,d):1==a?(H=b.substring(0,b.indexOf('<div id="'+d+'">')),H+=b.substring(b.indexOf('<div id="'+d+'">')+('<div id="'+d+'">').length,G),H+=b.substring(G+6),[0,H]):Va(a-1,b,G+6,d):[-1]}
function Wa(){Q=R=void 0;for(var a=0;a<M.length;a++)!1==M[a][2]&&(M=M.splice(M[a],1));J=J.replace(/<img src=\"img\/nofile.png/g,'<span class="nofile-link"> <span class="nofile-visual">File not found</span>&nbsp;</span><img class="nofile" src="img/nofile.png');F.innerHTML=J;$("#html-conversion a").each(function(){$(this).attr("target","_blank")});$(".nofile").on("click",function(){Xa()});$(".nofile-link").on("click",function(){Xa()});$(".nofile-visual").on("click",function(){Xa()});Countable.once(F,
function(a){O.innerHTML="&nbsp;"+a.characters+" characters&nbsp;";P.innerHTML="&nbsp;"+a.words+" words&nbsp;";1==a.characters&&(O.innerHTML="&nbsp;"+a.characters+" character&nbsp;");1==a.words&&(P.innerHTML="&nbsp;"+a.words+" word&nbsp;")},{s:!0});na()}function Ya(){Ua("mado-paste");Pa=document.getElementById("mado-paste");La.focus();setTimeout(function(){void 0!=Pa?Pa.innerText=La.value:$(g).innerText=$(g).innerText+La.value;Ba(Pa);Ca("mado-paste");m()},20)}
function Ca(a){Ra=rangy.saveSelection();K=g.innerHTML;K=K.replace(/< *div/g,"<div");K=K.replace(/<div *>/g,"<div>");K=K.replace(/< *\/ *div *>/g,"</div>");-1!=K.indexOf('<div id="'+a+'">')&&(Oa=Va(0,K,K.indexOf('<div id="'+a+'">'),a),-1!=Oa[0]&&(K=Oa[1]));g.innerHTML=K;rangy.restoreSelection(Ra);rangy.removeMarkers(Ra)}
function Ba(a){if(document.createRange&&window.getSelection){I=document.createRange();Sa=window.getSelection();Sa.removeAllRanges();try{I.q(a),Sa.addRange(I)}catch(b){I.selectNode(a),Sa.addRange(I)}}else document.body.createTextRange&&(I=document.body.createTextRange(),I.moveToElementText(a),I.select())}function ra(){chrome.storage.local.get("gfm",function(a){void 0!=a.gfm?Ma=a.gfm:(chrome.storage.local.set({gfm:!1}),Ma=!1);m()})}var O,l,k,Za,P;
function na(){Za.innerHTML=""!=g.innerText?void 0==l||g.innerText!=l?'| Unsaved <span class="little-icon-unsaved"></span>':'| Saved <span class="little-icon-saved"></span>':void 0!=l?'| Unsaved <span class="little-icon-unsaved"></span>':""}function $a(){"none"==O.style.display?(O.style.display="inline",P.style.display="none"):(O.style.display="none",P.style.display="inline")}
var q,ta,ua,S,r,ab,T=[["Headers","Titles"],["Bold","Strong emphasis"],["Italic","Emphasis"],["Bold italic","Combined emphasis"],["Ordered lists"],["Unordered lists"],["Inline-style links"],["Reference-style links"],["Images (inline)","Pictures (inline)"],["Images (reference-style)","Pictures (reference-style)"],["Blocks of code"],["Blockquotes"],["Inline HTML","HTML in Markdown"],["Horizontal rules"],["Line breaks"],["Question"]],bb=[["Six sizes available, the size depends on the numbers of #. <br> #Big title (size 1, the biggest). <br> ####A less impresive title (size 4 on 6)."],
['<span class="help-code">**bold**</span> or <span class="help-code">__bold__</span>'],['<span class="help-code">*italic*</span> or <span class="help-code">_italic_</span>'],['<span class="help-code">**_ bold italic_**</span> or <span class="help-code">*__bold italic__*</span> or <span class="help-code">***this***</span> or <span class="help-code">___this___</span>'],["1. First ordered list item. <br>2. Another item."],["* An item. <br>* A second item (you can also use + or -)."],['<span class="help-code">[Hypertext](http://url.com)</span><br>(Also works with a local path.)'],
['<span class="help-code">[Hypertext][1]<br>[1]: http://url.com</span>'],['<span class="help-code">![alt text](path/to/image.jpg "Title")</span>'],['<span class="help-code">![alt text][image Id] <br> [image Id]: path/to/image.jpg "Title"</span>'],['<span class="help-code">```Text between three back-ticks is a block of code.```<br>&nbsp;&nbsp;&nbsp;&nbsp;Text after four spaces is also a block of code.</span>'],['> Blockquotes only need <span class="help-code">></span> to work. <br><br> <span class="help-code">> Two blockquotes without a break (a line who isn\'t a blockquote)  are a single quote.</span>'],
['<span class="help-code">It &lt;strong>works&lt;/strong>.</span>'],['<span class="help-code">*** <br> You can use Hyphens, asterisks or underscores. <br> ---</span>'],['To separate two paragraphs, press <span class="help-code">Enter</span> twice.<br><br>And you have a new paragraph.'],["Seriously?"]],cb=[['Six sizes available, the size depends on the numbers of #.<h1 id="big-title-size-1-the-biggest-">Big title (size 1, the biggest).</h1><h4 id="a-less-impresive-title-size-4-on-6-br-">A less impresive title (size 4 on 6).</h4>'],
["<strong>Bold</strong>"],["<em>Italic</em>"],["<strong><em>Bold italic</em></strong>"],["<ol><li>First ordered list item</li><li>Another item.</li></ol>"],["<ul><li>An item. </li><li>A second item (you can also use + or -).</li></ul>"],['<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'],['<a target="_blank" href="http://aplusa.io/mado">Hypertext</a>'],['<div class="example-image"></div>'],['<div class="example-image"></div>'],["<code>Write your code between three back-ticks to make a block of code.</code><br><code>You can also write code by indent your text with four spaces.</code>"],
["<blockquote>Blockquotes only need &gt; to work. To separate two blockquotes, insert a blank line between them.</blockquote>"],["It <strong>works<strong>"],["<hr> You can use Hyphens, asterisks or underscores.<hr>"],["<p>To separate two paragraphs, press Enter twice.</p><p>And you have a new paragraph!</p>"],["Life's most persistent and urgent question is, 'What are you doing for others?'."]];
function db(){if(0==q.value.length)r.className="hidden";else if(3>q.value.length){r.className="one-result no-result";va(2);if(q.value.length==1)answer1.innerHTML="Add two more characters";else if(q.value.length==2)answer1.innerHTML="Add one more character"}else{S=1;for(var a=0;a<T.length&&4>S;a++)for(var b=0;b<T[a].length;b++)-1!=T[a][b].toLowerCase().indexOf(q.value.toLowerCase())&&(ab=T[a][b].toLowerCase().indexOf(q.value.toLowerCase()),window["answer"+S].innerHTML='<span class="help-title">'+T[a][b].substring(0,
ab)+'<span class="match">'+T[a][b].substr(ab,q.value.length)+"</span>"+T[a][b].substring(ab+q.value.length)+"</span>: "+bb[a],window["example"+S].innerHTML=cb[a],S++,b=T[a].length);switch(S){case 1:answer1.innerHTML="No help found.";r.className="one-result no-result";va(2);break;case 2:r.className="one-result";va(2);break;case 3:r.className="two-results";va(3);break;case 4:r.className="three-results"}}}
function va(a){for(;4>a;a++)""==window["answer"+a].innerHTML?a=3:(window["answer"+a].innerHTML="",window["result"+a].className="result",window["example"+a].innerHTML="")}function eb(a){window["result"+a].className="result"==window["result"+a].className?"result switched":"result"}var u,fb,wa,Aa,xa,s,w,t,v,gb,hb=[],ib,ya,R,L=0,M=[],Q;
function jb(){""==u.value?u.focus():void 0!=ya&&(ib=""==v.value?"!["+u.value+"]("+ya+")":"!["+u.value+"]("+ya+' "'+v.value+'")',void 0!=w?w.innerText=ib:$(g).innerText=$(g).innerText+ib,s.className="tool-displayer hidden",Ba(w),Ca("mado-image"),m())}function Xa(){chrome.mediaGalleries.getMediaFileSystems({interactive:"yes"},kb)}function lb(a){hb=a;mb(0)}
function N(){if(-1!=J.indexOf('<img src="',L))if(L=J.indexOf('<img src="',L)+10,Q=!1,R=J.substring(L,J.indexOf('"',L)),"data"!=R.substring(0,4))if(0<M.length)for(var a=0;a<M.length;a++)if(M[a][0]==R)if(J=J.replace(RegExp(R,"g"),M[a][1]),M[a][2]=!0,-1!=J.indexOf('<img src="',L)){N();break}else Wa();else a==M.length-1&&kb();else kb();else N();else Wa()}
function mb(a){!1==Q?a<hb.length?(gb=a,hb.forEach(function(b,e){e==a&&(void 0!=R&&(!1==Q&&b.root.createReader().readEntries(nb)))})):(J=J.replace(RegExp(R,"g"),"img/nofile.png"),-1!=J.indexOf('<img src="',L)?N():Wa()):(M.length=0,m())}function ob(a){hb[gb].root.getFile(a,{create:!1},function(a){a.file(function(a){var b=new FileReader;b.onloadend=function(){M.push([R,this.result,!0]);J=J.replace(RegExp(R,"g"),this.result);Q=!0;-1!=J.indexOf('<img src="',L)?N():Wa()};b.readAsDataURL(a)})})}
function nb(a){for(var b=0;b<a.length&&!1==Q;b++)if(a[b].isDirectory&&-1!=R.indexOf(a[b].fullPath)){a[b].createReader().readEntries(nb);break}else if(-1!=R.indexOf(a[b].fullPath)){ob(a[b].fullPath);break}else b==a.length-1&&mb(gb+1)}
function pb(){chrome.fileSystem.chooseEntry({type:"openFile",accepts:[{mimeTypes:["image/*"]}]},function(a){a&&chrome.fileSystem.getDisplayPath(a,function(a){xa.innerHTML="Change the image";t.innerHTML=h(a.replace(/\\/g,"/"));35<t.innerHTML.length&&(t.innerHTML=t.innerHTML.substring(0,15)+"(...)"+t.innerHTML.substring(t.innerHTML.length-15,t.innerHTML.length));t.innerHTML=t.innerHTML.substring(0,t.innerHTML.lastIndexOf("."))+'<span id="extension">'+t.innerHTML.substring(t.innerHTML.lastIndexOf("."),
t.innerHTML.length)+"</span";t.style.display="inline-block";ya=a.replace(/\\/g,"/");u.focus()})})}function kb(){chrome.mediaGalleries.getMediaFileSystems({interactive:"no"},lb)}var A,U,x,y,z,B;function qb(){""==z.value?z.focus():(U=""==A.value?"["+z.value+"]("+z.value+")":"["+A.value+"]("+z.value+")",void 0!=B?B.innerText=U:$(g).innerText=$(g).innerText+U,y.className="tool-displayer hidden",Ba(B),Ca("mado-link"))}
function rb(){U=""==A.value?"["+z.value+"]("+z.value+")":"["+A.value+"]("+z.value+")";void 0!=B?B.innerText=U:$(g).innerText=$(g).innerText+U;m()}var ga,Da,Ea,sb,tb,ub,vb;
window.onload=function(){exportButton=document.getElementById("export");newButton=document.getElementById("new");openButton=document.getElementById("open");Fa=document.getElementById("recent");saveButton=document.getElementById("save");saveAsButton=document.getElementById("save-as");F=document.getElementById("html-conversion");g=document.getElementById("markdown");La=document.getElementById("paste-zone");O=document.getElementById("character-nb");k=document.getElementById("doc-name");Za=document.getElementById("save-state");
P=document.getElementById("word-nb");q=document.getElementById("help-input");ta=document.getElementById("help-button");ua=document.getElementById("help-input-displayer");for(var a=1;3>=a;a++)window["answer"+a]=document.getElementById("answer-"+a),window["example"+a]=document.getElementById("example-"+a),window["result"+a]=document.getElementById("result-"+a),window["resultSwitch"+a]=document.getElementById("result-switch-"+a);r=document.getElementById("help-results-container");fb=document.getElementById("galleries-button");
wa=document.getElementById("image-button");s=document.getElementById("image-insertion-displayer");Aa=document.getElementById("image-insertion-box");xa=document.getElementById("browse-image");t=document.getElementById("image-status");u=document.getElementById("alt-input");v=document.getElementById("title-input");x=document.getElementById("link-button");y=document.getElementById("link-insertion-displayer");z=document.getElementById("url-input");A=document.getElementById("hypertext-input");ga=document.getElementById("more-button");
Da=document.getElementById("more-displayer");Ea=document.getElementById("more-container");sb=document.getElementById("settings");tb=document.getElementById("q-and-a");ub=document.getElementById("shortcuts");vb=document.getElementById("about");Fa=document.getElementById("recent-button");C=document.getElementById("recent-files-displayer");D=document.getElementById("recent-files-container");Ha=document.getElementById("style-tool");E=document.getElementById("style-tool-displayer");wb=document.getElementById("home-style");
xb=document.getElementById("clinic-style");yb=document.getElementById("tramway-style");zb=document.getElementById("workspace");p=document.getElementById("switch-md");n=document.getElementById("switch-both");Ab=document.getElementById("switch-html");V.push(p,n,Ab);Ka=document.getElementById("cancel");Ia=document.getElementById("close-alert-displayer");Bb=document.getElementsByTagName("head")[0];Cb=document.getElementById("quit");Db=document.getElementById("save-quit");Ja=document.getElementById("window-close");
Eb=document.getElementById("window-close-button");Fb=document.getElementById("window-maximize");Gb=document.getElementById("window-minimize");chrome.storage.local.get("tempFileEntry",function(a){void 0!=a.tempFileEntry?chrome.fileSystem.restoreEntry(a.tempFileEntry,function(a){c=a;chrome.storage.local.remove("tempFileEntry");c.file(function(a){var b=new FileReader;b.onload=function(a){g.innerText=a.target.result;l=g.innerText;m();k.innerHTML=h(c.fullPath)+"&nbsp;-"};b.readAsText(a)},f)}):l=void 0});
ha();$(newButton).on("click",ia);Mousetrap.bind(["command+n","ctrl+n"],function(){ia();return!1});$(openButton).on("click",la);Mousetrap.bind(["command+o","ctrl+o"],function(){la();return!1});$(saveButton).on("click",oa);Mousetrap.bind(["command+s","ctrl+s"],function(){oa();return!1});$(saveAsButton).on("click",ma);Mousetrap.bind(["command+shift+s","ctrl+shift+s"],function(){ma();return!1});$(exportButton).on("click",da);ra();O.style.display="none";$(g).focus();$(g).on("input propertychange",m);$(g).bind("paste",
function(){Ya()});$(g).keydown(function(a){9==a.keyCode&&a.preventDefault()});$(O).on("click",$a);$(P).on("click",$a);Mousetrap.bind(["command+h","ctrl+h"],function(){$(ta).click();return!1});$(q).keyup(function(a){27==a.keyCode&&$(ta).click()});$(q).on("input propertychange",db);$(resultSwitch1).on("click",function(){eb("1")});$(resultSwitch2).on("click",function(){eb("2")});$(resultSwitch3).on("click",function(){eb("3")});$(wa).on("mousedown",function(){Ua("mado-image")});$(xa).on("click",pb);$(fb).on("click",
Xa);$(u).keyup(function(a){13==a.keyCode?jb():27==a.keyCode&&$(wa).click()});$(v).keydown(function(a){9==a.keyCode&&(a.preventDefault(),$(u).select())});$(v).keyup(function(a){13==a.keyCode?jb():27==a.keyCode&&$(wa).click()});$(x).on("mousedown",function(){Ua("mado-link")});Mousetrap.bind(["command+k","ctrl+k"],function(){Ua("mado-link");$(x).click();return!1});$(z).keyup(function(a){13==a.keyCode?qb():27==a.keyCode?$(x).click():rb()});$(A).keydown(function(a){9==a.keyCode&&(a.preventDefault(),$(z).select())});
$(A).keyup(function(a){13==a.keyCode?qb():27==a.keyCode?$(x).click():rb()});$(sb).on("click",function(){fa("more/settings.html")});$(tb).on("click",function(){fa("more/qanda.html")});$(ub).on("click",function(){fa("more/shortcuts.html")});$(vb).on("click",function(){fa("more/about.html")});Ga();navigator.onLine&&(Hb=analytics.getService("Mado"),qa(),Ib=Hb.getTracker("UA-45134408-1"),Ib.sendAppView("mainWindow"));Jb();$(wb).on("click",function(){Kb("home")});$(xb).on("click",function(){Kb("clinic")});
$(yb).on("click",function(){Kb("tramway")});1365<window.innerWidth?n.className="switch-button activated":(p.className="switch-button activated",zb.className="markdown-view");sa();$(p).on("click",function(){Lb(this.id,"markdown-view")});$(n).on("click",function(){Lb(this.id,"normal")});$(Ab).on("click",function(){Lb(this.id,"conversion-view")});Mousetrap.bind(["command+alt+left","ctrl+alt+left"],function(){Mb("left");return!1});Mousetrap.bind(["command+alt+right","ctrl+alt+right"],function(){Mb("right");
return!1});Nb();$(Cb).on("click",Ob);$(Db).on("click",Pb);$(Eb).on("click",Qb);Mousetrap.bind(["command+w","ctrl+w"],function(){Qb();return!1});$(Fb).on("click",Rb);$(Gb).on("click",Sb)};var Fa,C,D,W,X="",ba,Y={},Z="recentFile1 recentFile2 recentFile3 recentFile4 recentFile5 recentFile6 recentFile7 recentFileId1 recentFileId2 recentFileId3 recentFileId4 recentFileId5 recentFileId6 recentFileId7".split(" ");
function Tb(a){7>=a&&chrome.storage.local.get(Z,function(b){void 0!=b["recentFile"+a]&&chrome.fileSystem.isRestorable(b["recentFileId"+a],function(e){e?chrome.fileSystem.restoreEntry(b["recentFileId"+a],function(b){b?Tb(a+1):(document.getElementById("recent-"+a).setAttribute("class","recent-file deleted"),Ub(a,"check"))}):(document.getElementById("recent-"+a).setAttribute("class","recent-file deleted"),Ub(a,"check"))})})}
function Ga(){Tb(1);D.innerHTML=" ";chrome.storage.local.get(Z,function(a){for(var b=1;7>=b;b++)if(void 0!=a["recentFile"+b])D.innerHTML+='<li class="recent-file" id="recent-'+b+'"><div class="recent-file-wrapped"><p>'+h(a["recentFile"+b].toString())+'</p><div class="delete-recent-button little-icon-delete" id="delete-button-'+b+'"></div></div></li>';else break;$(".recent-file").on("click",function(a){$(a.target).closest("#delete-button-"+this.id.charAt(this.id.length-1)).length||(ba=this.id.charAt(this.id.length-
1).valueOf(),X="recentFileId"+this.id.charAt(this.id.length-1),chrome.storage.local.get(X,function(a){chrome.fileSystem.restoreEntry(a[X],function(a){ja(a);C.className="hidden"})}))});$(".delete-recent-button").on("click",function(){ca(this.id.charAt(this.id.length-1))});W=document.createElement("li");W.setAttribute("id","recent-files-info");" "!=D.innerHTML?(W.setAttribute("class","clear-all"),W.innerHTML="Clear all"):(W.setAttribute("class"," "),W.innerHTML="No recent document.");D.appendChild(W);
$(".clear-all").on("click",function(){Vb()})})}
function ka(a,b){chrome.storage.local.get(Z,function(e){for(var d=1;7>=d;d++)if(void 0==e["recentFile"+d]||(e["recentFile"+d]==a.fullPath||7==d)){for(;0<d;d--)1<d?(X=("recentFileId"+d).toString(),Y[X]=e["recentFileId"+(d-1)],chrome.storage.local.set(Y),Y={},X=("recentFile"+d).toString(),Y[X]=e["recentFile"+(d-1)],chrome.storage.local.set(Y),Y={}):(chrome.storage.local.set({recentFileId1:chrome.fileSystem.retainEntry(a)}),chrome.storage.local.set({recentFile1:a.fullPath}),Ga(),void 0!=b&&("quit"==
b&&Ob()));break}})}function ca(a){document.getElementById("recent-"+a).setAttribute("class","recent-file deleted");setTimeout(function(){Ub(a,"display")},100)}
function Ub(a,b){chrome.storage.local.get(Z,function(e){if(void 0!=e["recentFile"+a]){for(var d=parseInt(a);7>=d;d++)if(void 0!=e["recentFile"+(d+1)])X=("recentFileId"+d).toString(),Y[X]=e["recentFileId"+(d+1)],chrome.storage.local.set(Y),Y={},X=("recentFile"+d).toString(),Y[X]=e["recentFile"+(d+1)],chrome.storage.local.set(Y),Y={};else{X=("recentFileId"+d).toString();chrome.storage.local.remove(X);X=("recentFile"+d).toString();chrome.storage.local.remove(X);X="";break}"display"==b?Ga():"check"==
b&&Tb(a)}})}function Vb(){chrome.storage.local.get(Z,function(a){for(var b=1;7>=b;b++)if(void 0==a["recentFile"+(b+1)]){Wb(b);break}})}function Wb(a){chrome.storage.local.get(Z,function(){X=("recentFileId"+a).toString();chrome.storage.local.remove(X);X=("recentFile"+a).toString();chrome.storage.local.remove(X);X="";1<a?Wb(a-1):D.innerHTML='<li id="recent-files-info" class=" ">No recent document.</li>'})}var Hb,Ib;
function qa(){chrome.storage.local.get("analytics",function(a){void 0!=a.analytics?Hb.n.setTrackingPermitted(a.analytics):(chrome.storage.local.set({analytics:!0}),Hb.n.setTrackingPermitted(!0))})}var Ha,E,xb,wb,yb;function Jb(){chrome.storage.local.get("style",function(a){void 0!=a.style?("home"==a.style?wb.checked=!0:"clinic"==a.style?xb.checked=!0:yb.checked=!0,$(F).attr("class",a.style)):(wb.checked=!0,Kb("home"))})}
function Kb(a){chrome.storage.local.set({style:a},function(){$(F).attr("class",a)})}var n,Ab,p,zb,V=[],pa;function Lb(a,b){for(var e=0;e<V.length;e++)V[e].className=V[e].id!=a?"switch-button":"switch-button activated";zb.className=b}function sa(){chrome.storage.local.get("resize",function(a){void 0!=a.resize?pa=a.resize:(chrome.storage.local.set({resize:!0}),pa=!0)})}
function Mb(a){if(1365<window.innerWidth)for(var b=0;b<V.length;b++)"switch-button activated"==V[b].className&&("left"==a&&0<b?V[b-1].click():"right"==a&&(b<V.length-1&&V[b+1].click()),b=V.length);else"left"==a?p.click():Ab.click()}var Ka,Ia,Bb,Cb,Db,Ja,Eb,Fb,Gb,Xb;
function Qb(){chrome.runtime.getBackgroundPage(function(a){a.h(window.screenX,window.screenY,window.innerWidth,window.innerHeight)});'| Unsaved <span class="little-icon-unsaved"></span>'==Za.innerHTML?Ia.className="visible":chrome.app.window.current().close()}
function Nb(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");-1!=navigator.appVersion.indexOf("Mac")?(a.setAttribute("href","css/window-bar-mac.css"),Eb.setAttribute("class","cta little-icon-mac-close"),Fb.setAttribute("class","cta little-icon-mac-maximize"),Gb.setAttribute("class","cta little-icon-mac-minimize")):(a.setAttribute("href","css/window-bar-windows.css"),Eb.setAttribute("class","cta little-icon-win-close"),Fb.setAttribute("class",
"cta little-icon-win-maximize"),Gb.setAttribute("class","cta little-icon-win-minimize"));Bb.appendChild(a)}function Rb(){chrome.app.window.current().isMaximized()?chrome.app.window.current().setBounds(Xb):(Xb=chrome.app.window.current().getBounds(),chrome.app.window.current().maximize())}function Sb(){chrome.app.window.current().minimize()}
function Ob(){chrome.runtime.getBackgroundPage(function(a){a.h(window.screenX,window.screenY,window.innerWidth,window.innerHeight)});chrome.app.window.current().close()}function Yb(){c.createWriter(function(a){a.write(new Blob([g.innerText],{type:"text/plain"}));ka(c,"quit")},f)}function Zb(){chrome.fileSystem.chooseEntry({type:"saveFile",suggestedName:"document.md"},function(a){a&&a.createWriter(function(b){b.write(new Blob([g.innerText],{type:"text/plain"}));ka(a,"quit")},f)})}
function Pb(){void 0==c||"md&nbsp;-"!=k.innerHTML.substring(k.innerHTML.length-9)?Zb():Yb()};