!function(t,e,n){var o=1,i=3,s=["p","div","pre","form","strong"],r=27,a=9;t.emojiarea={path:"",icons:{},defaults:{button:null,buttonLabel:"Emojis",buttonPosition:"after"}},t.fn.emojiarea=function(e){return e=t.extend({},t.emojiarea.defaults,e),this.each(function(){var o=t(this);"contentEditable"in n.body&&e.wysiwyg!==!1?new h(o,e):new l(o,e)})};var c={};c.restoreSelection=function(){return e.getSelection?function(t){var n=e.getSelection();n.removeAllRanges();for(var o=0,i=t.length;i>o;++o)n.addRange(t[o])}:n.selection&&n.selection.createRange?function(t){t&&t.select()}:void 0}(),c.saveSelection=function(){return e.getSelection?function(){var t=e.getSelection(),n=[];if(t.rangeCount)for(var o=0,i=t.rangeCount;i>o;++o)n.push(t.getRangeAt(o));return n}:n.selection&&n.selection.createRange?function(){var t=n.selection;return"none"!==t.type.toLowerCase()?t.createRange():null}:void 0}(),c.replaceSelection=function(){return e.getSelection?function(t){var o,i=e.getSelection(),s="string"==typeof t?n.createTextNode(t):t;i.getRangeAt&&i.rangeCount&&(o=i.getRangeAt(0),o.deleteContents(),o.insertNode(n.createTextNode(" ")),o.insertNode(s),o.setStart(s,0),e.setTimeout(function(){o=n.createRange(),o.setStartAfter(s),o.collapse(!0),i.removeAllRanges(),i.addRange(o)},0))}:n.selection&&n.selection.createRange?function(t){var e=n.selection.createRange();"string"==typeof t?e.text=t:e.pasteHTML(t.outerHTML)}:void 0}(),c.insertAtCursor=function(t,e){t=" "+t;var o,i,s,r=e.value;"undefined"!=typeof e.selectionStart&&"undefined"!=typeof e.selectionEnd?(i=e.selectionStart,o=e.selectionEnd,e.value=r.substring(0,i)+t+r.substring(e.selectionEnd),e.selectionStart=e.selectionEnd=i+t.length):"undefined"!=typeof n.selection&&"undefined"!=typeof n.selection.createRange&&(e.focus(),s=n.selection.createRange(),s.text=t,s.select())},c.extend=function(t,e){if("undefined"!=typeof t&&t||(t={}),"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},c.escapeRegex=function(t){return(t+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},c.htmlEntities=function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};var u=function(){};u.prototype.setup=function(){var t=this;this.$editor.on("focus",function(){t.hasFocus=!0}),this.$editor.on("blur",function(){t.hasFocus=!1}),this.setupButton()},u.prototype.setupButton=function(){var e,n=this;this.options.button?e=t(this.options.button):this.options.button!==!1?(e=t('<a href="javascript:void(0)">'),e.html(this.options.buttonLabel),e.addClass("emoji-button"),e.attr({title:this.options.buttonLabel}),this.$editor[this.options.buttonPosition](e)):e=t(""),e.on("click",function(t){p.show(n),t.stopPropagation()}),this.$button=e},u.createIcon=function(e,n){var o=t.emojiarea.icons[e].icons[n];return'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="sprite-emoji-'+o+'" alt="'+c.htmlEntities(n)+'">'};var l=function(t,e){this.options=e,this.$textarea=t,this.$editor=t,this.setup()};l.prototype.insert=function(e,n){t.emojiarea.icons[e].icons.hasOwnProperty(n)&&(c.insertAtCursor(n,this.$textarea[0]),this.$textarea.trigger("change"))},l.prototype.val=function(){return this.$textarea.val()},c.extend(l.prototype,u.prototype);var h=function(e,o){var i=this;this.options=o,this.$textarea=e,this.$editor=t("<div>").addClass("emoji-wysiwyg-editor"),this.$editor.text(e.val()),this.$editor.attr({contenteditable:"true"}),this.$editor.on("blur keyup paste",function(){return i.onChange.apply(i,arguments)}),this.$editor.on("mousedown focus",function(){n.execCommand("enableObjectResizing",!1,!1)}),this.$editor.on("blur",function(){n.execCommand("enableObjectResizing",!0,!0)});var s=this.$editor.text(),r=t.emojiarea.icons;for(var a in r)for(var l in r[a].icons)r[a].icons.hasOwnProperty(l)&&(s=s.replace(new RegExp(c.escapeRegex(l),"g"),u.createIcon(a,l)));this.$editor.html(s),e.hide().after(this.$editor),this.setup(),this.$button.on("mousedown",function(){i.hasFocus&&(i.selection=c.saveSelection())})};h.prototype.onChange=function(){this.$textarea.val(this.val()).trigger("change")},h.prototype.insert=function(e,n){var o=t(u.createIcon(e,n));o[0].attachEvent&&o[0].attachEvent("onresizestart",function(t){t.returnValue=!1},!1),this.$editor.trigger("focus"),this.selection&&c.restoreSelection(this.selection);try{c.replaceSelection(o[0])}catch(i){}this.onChange()},h.prototype.val=function(){for(var t=[],e=[],n=function(){t.push(e.join("")),e=[]},r=function(t){if(t.nodeType===i)e.push(t.nodeValue);else if(t.nodeType===o){var a=t.tagName.toLowerCase(),c=-1!==s.indexOf(a);if(c&&e.length&&n(),"img"===a){var u=t.getAttribute("alt")||"";return void(u&&e.push(u))}"br"===a&&n();for(var l=t.childNodes,h=0;h<l.length;h++)r(l[h]);c&&e.length&&n()}},a=this.$editor[0].childNodes,c=0;c<a.length;c++)r(a[c]);return e.length&&n(),t.join("\n")},c.extend(h.prototype,u.prototype);var p=function(){var o=this,i=t(n.body),s=t(e);this.visible=!1,this.emojiarea=null,this.$menu=t("<div>"),this.$menu.addClass("emoji-menu"),this.$menu.hide(),this.$items=t("<div>").appendTo(this.$menu),i.append(this.$menu),i.on("keydown",function(t){(t.keyCode===r||t.keyCode===a)&&o.hide()}),i.on("mouseup",function(){o.hide()}),s.on("resize",function(){o.visible&&o.reposition()}),this.$menu.on("mouseup","a",function(t){return t.stopPropagation(),!1}),this.$menu.on("click","a",function(n){var i=t(".label",t(this)).text(),s=t(".label",t(this)).parent().parent().attr("group");return n.preventDefault(),s&&""!==i?(e.setTimeout(function(){o.onItemSelected.apply(o,[s,i])},0),n.stopPropagation(),!1):void 0}),this.load()};p.prototype.onItemSelected=function(t,e){console.log(t),console.log(e),this.emojiarea.insert(t,e),this.hide()},p.prototype.load=function(){var e=[],n=[],o=t.emojiarea.icons;n.push('<ul class="group-selector">');for(var i in o){n.push('<a href="#group_'+i+'" class="tab_switch"><li>'+o[i].name+"</li></a>"),e.push('<div class="select_group" group="'+i+'" id="group_'+i+'">');for(var s in o[i].icons)if(o[i].icons.hasOwnProperty(s)){{o[s]}e.push('<a href="javascript:void(0)" title="'+c.htmlEntities(s)+'">'+u.createIcon(i,s)+'<span class="label">'+c.htmlEntities(s)+"</span></a>")}e.push("</div>")}n.push("</ul>"),this.$items.html(e.join("")),this.$menu.prepend(n.join("")),this.$menu.find(".tab_switch").each(function(e){if(0!=e){var n=t(this).attr("href");t(n).hide()}else t(this).addClass("active");t(this).click(function(){t(this).addClass("active"),t(this).siblings().removeClass("active"),t(".select_group").hide();var e=t(this).attr("href");t(e).show()})})},p.prototype.reposition=function(){var t=this.emojiarea.$button,e=t.offset();e.top+=t.outerHeight(),e.left+=Math.round(t.outerWidth()/2),this.$menu.css({top:e.top,left:e.left})},p.prototype.hide=function(){this.emojiarea&&(this.emojiarea.menu=null,this.emojiarea.$button.removeClass("on"),this.emojiarea=null),this.visible=!1,this.$menu.hide()},p.prototype.show=function(t){this.emojiarea&&this.emojiarea===t||(this.emojiarea=t,this.emojiarea.menu=this,this.reposition(),this.$menu.show(),this.visible=!0)},p.show=function(){var t=null;return function(e){t=t||new p,t.show(e)}}()}(jQuery,window,document);