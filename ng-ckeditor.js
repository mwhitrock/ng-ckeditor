!function(a,b){return"function"==typeof define&&define.amd?(define("ng-ckeditor",["jquery","angular","ckeditor"],function(a,c){return b(c)}),void 0):b(a)}(angular||null,function(a){var b,c=a.module("ngCkeditor",[]),d=!1;return c.run(["$q",function(c){if(b=c.defer(),a.isUndefined(CKEDITOR))throw new Error("CKEDITOR not found");CKEDITOR.disableAutoInline=!0,CKEDITOR.on("loaded",function(){d=!0,b.resolve()})}]),c.directive("ckeditor",["$timeout","$q",function(c){"use strict";return{restrict:"AC",require:"ngModel",scope:!1,link:function(e,f,g,h){var i="<p></p>",j=f.is("textarea");j||f.attr("contenteditable",!0);var k=function(){var b={toolbar:"full",toolbar_full:[{name:"basicstyles",items:["Bold","Italic","Strike","Underline"]},{name:"paragraph",items:["BulletedList","NumberedList","Blockquote"]},{name:"editing",items:["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"links",items:["Link","Unlink","Anchor"]},{name:"tools",items:["SpellChecker","Maximize"]},"/",{name:"styles",items:["Format","FontSize","TextColor","PasteText","PasteFromWord","RemoveFormat"]},{name:"insert",items:["Image","Table","SpecialChar"]},{name:"forms",items:["Outdent","Indent"]},{name:"clipboard",items:["Undo","Redo"]},{name:"document",items:["PageBreak","Source"]}],disableNativeSpellChecker:!1,uiColor:"#FAFAFA",height:"400px",width:"100%"};b=a.extend(b,e[g.ckeditor]);var d=j?CKEDITOR.replace(f[0],b):CKEDITOR.inline(f[0],b);f.bind("$destroy",function(){d.destroy(!1)}),d.on("instanceReady",function(){d.setData(h.$viewValue||i)}),d.on("pasteState",function(){h.$setViewValue(d.getData())}),d.on("change",function(){h.$setViewValue(d.getData()),e.$$phase||e.$apply()}),d.on("key",function(){c(function(){h.$setViewValue(d.getData()),e.$$phase||e.$apply()},0)}),h.$render=function(){d.setData(h.$viewValue||i)},e.$watch(function(){return f?d.getData():null},function(b,c){(b!==i||!a.isUndefined(c)&&c!==i)&&h.$setViewValue(d.getData())}),d.on("blur",function(){e.$$phase||e.$apply()})};d?k():b.promise.then(k)}}}]),c});
/*
//@ sourceMappingURL=ng-ckeditor.map
*/