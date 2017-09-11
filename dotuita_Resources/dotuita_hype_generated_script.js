//	HYPE.documents["dotuita"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "dotuita_Resources";
	var documentName = "dotuita";
	var documentLoaderFilename = "dotuita_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aL:"i",A:"c",aZ:"i",Y:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{onSceneLoadAction:{type:0},onSceneUnloadAction:{type:0},initialValues:{"51":{o:"content-box",h:"mogura2.png",x:"visible",a:0,q:"100% 100%",b:64,j:"absolute",r:"inline",c:76,z:"4",k:"div",d:58,bF:"48",e:"0.000000"},"49":{o:"content-box",h:"mogura0.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:76,z:"2",k:"div",d:64,bF:"48"},"50":{o:"content-box",h:"mogura1.png",x:"visible",a:0,q:"100% 100%",b:64,j:"absolute",r:"inline",c:76,z:"3",k:"div",d:58,bF:"48",e:"1.000000"},"48":{x:"visible",k:"div",c:76,d:122,z:"7",r:"inline",a:24,j:"absolute",e:"0.000000",b:326},"56":{o:"content-box",h:"bg.png",p:"repeat-x",x:"visible",a:0,b:0,j:"absolute",r:"inline",c:1024,z:"1",k:"div",d:690},"41":{o:"content-box",h:"school.png",x:"visible",a:902,q:"100% 100%",b:318,j:"absolute",r:"inline",c:106,z:"6",k:"div",d:54,e:"0.000000"}},timelines:{"34":{framesPerSecond:30,animations:[],identifier:"34",name:"Untitled Timeline",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"4",t:0,d:1,i:"a",e:548,r:1,s:902,o:"41"},{f:"4",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"41"},{f:"4",t:0,d:1,i:"a",e:422,r:1,s:24,o:"48"},{f:"4",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"48"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:1}},sceneIndex:0,perspective:"600px",oid:"15",onSceneAnimationCompleteAction:{type:1,transition:1,sceneOid:"40"},backgroundColor:"#FFFFFF",name:"Untitled Scene Copy"},{onSceneLoadAction:{timelineIdentifier:"52",type:3},initialValues:{"38":{o:"content-box",h:"school.png",x:"visible",a:548,q:"100% 100%",b:318,j:"absolute",r:"inline",c:106,z:"7",k:"div",d:54},"42":{o:"content-box",h:"mogura0.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:76,z:"2",k:"div",d:64,bF:"47"},"57":{o:"content-box",h:"bg.png",p:"repeat-x",x:"visible",a:0,b:0,j:"absolute",r:"inline",c:1024,z:"1",k:"div",d:690},"44":{o:"content-box",h:"mogura2.png",x:"visible",a:0,q:"100% 100%",b:64,j:"absolute",r:"inline",c:76,z:"4",k:"div",d:58,bF:"47",e:"0.000000"},"47":{x:"visible",k:"div",c:76,d:122,aB:{timelineIdentifier:"52",type:3},z:"7",a:422,j:"absolute",b:326},"43":{o:"content-box",h:"mogura1.png",x:"visible",a:0,q:"100% 100%",b:64,j:"absolute",r:"inline",c:76,z:"3",k:"div",d:58,bF:"47",e:"1.000000"}},timelines:{"52":{framesPerSecond:30,animations:[{f:"4",t:0,d:0.26666668,i:"b",e:303,r:1,s:326,o:"47"},{f:"0",t:0,d:0.26666668,i:"e",e:"1.000000",r:1,s:"0.000000",o:"44"},{f:"0",t:0,d:0.26666668,i:"e",e:"0.000000",r:1,s:"1.000000",o:"43"},{f:"5",t:0.26666668,d:0.73333335,i:"b",e:326,s:303,o:"47"},{f:"0",t:0.26666668,d:0.23333332,i:"e",e:"1.000000",s:"0.000000",o:"43"},{f:"0",t:0.26666668,d:0.23333332,i:"e",e:"0.000000",s:"1.000000",o:"44"},{f:"0",t:0.5,d:0.23333335,i:"e",e:"0.000000",s:"1.000000",o:"43"},{f:"0",t:0.5,d:0.23333335,i:"e",e:"0.996503",s:"0.000000",o:"44"},{f:"0",t:0.73333335,d:0.26666665,i:"e",e:"1.000000",s:"0.000000",o:"43"},{f:"0",t:0.73333335,d:0.26666665,i:"e",e:"0.000000",s:"0.996503",o:"44"}],identifier:"52",name:"Untitled Timeline",duration:1},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"0",t:0,d:0.26666668,i:"e",e:"0.000000",r:1,s:"1.000000",o:"43"},{f:"0",t:0,d:0.26666668,i:"e",e:"1.000000",r:1,s:"0.000000",o:"44"},{f:"0",t:0.26666668,d:0.23333332,i:"e",e:"1.000000",s:"0.000000",o:"43"},{f:"0",t:0.26666668,d:0.23333332,i:"e",e:"0.000000",s:"1.000000",o:"44"},{f:"0",t:0.5,d:0.26666665,i:"e",e:"0.000000",s:"1.000000",o:"43"},{f:"0",t:0.5,d:0.26666665,i:"e",e:"1.000000",s:"0.000000",o:"44"},{f:"0",t:0.76666665,d:0.23333335,i:"e",e:"1.000000",s:"0.000000",o:"43"},{f:"0",t:0.76666665,d:0.23333335,i:"e",e:"0.000000",s:"1.000000",o:"44"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:1}},sceneIndex:1,perspective:"600px",oid:"40",onSceneAnimationCompleteAction:{type:1,transition:1,sceneOid:"40"},backgroundColor:"#FFFFFF",name:"Untitled Scene Copy Copy"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("dotuita_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

