//	HYPE.documents["skydiving_test"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "skydiving_test_Resources";
	var documentName = "skydiving_test";
	var documentLoaderFilename = "skydivingtest_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:3,timelineIdentifier:"3"},onSceneUnloadAction:{type:0},initialValues:{"52":{x:"visible",k:"div",c:102,d:27,z:"11",a:461,j:"absolute",b:334},"34":{o:"content-box",h:"cloud0.png",p:"no-repeat",x:"visible",a:385,q:"100% 100%",b:375,j:"absolute",r:"inline",c:116.108,z:"10",k:"div",d:49,e:"0.000000"},"68":{o:"content-box",h:"bigchara1.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"1",k:"div",d:76,bF:"67",e:"0.000000"},"32":{o:"content-box",h:"cloud0.png",p:"no-repeat",x:"visible",a:538,q:"100% 100%",b:316,j:"absolute",r:"inline",c:116.108,z:"9",k:"div",d:49,e:"0.000000"},"53":{b:0,z:"1",K:"None",c:90,bC:1,L:"None",d:15,aS:6,M:0,e:"0.000000",bD:"auto",N:0,aT:6,bB:1,O:0,aU:6,P:0,bF:"52",aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"TrebuchetMS,'Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#A0A0A0",t:18,u:"normal",F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"Start",bA:"#5A84AD",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"35":{o:"content-box",h:"cloud0.png",x:"visible",a:341,q:"100% 100%",b:217,j:"absolute",r:"inline",c:88,z:"5",k:"div",d:37,e:"0.000000"},"69":{o:"content-box",h:"bigchara0.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"2",k:"div",d:76,bF:"67",e:"1.000000"},"67":{x:"visible",k:"div",c:94,d:76,z:"12",e:"0.000000",a:465,j:"absolute",b:55},"36":{o:"content-box",h:"cloud0.png",x:"visible",a:522,q:"100% 100%",b:289,j:"absolute",r:"inline",c:88,z:"6",k:"div",d:37,e:"0.000000"},"31":{o:"content-box",h:"title.png",x:"visible",a:414,q:"100% 100%",b:46,j:"absolute",r:"inline",c:196,z:"7",k:"div",d:58,aP:"none",e:"0.000000"}},timelines:{"3":{framesPerSecond:30,animations:[{f:"4",t:0,d:0.30000001,i:"e",e:"0.000000",r:1,s:"1.000000",o:"69"},{f:"4",t:0,d:0.30000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"68"},{f:"4",t:0,d:1.2333333,i:"b",e:162,r:1,s:55,o:"67"},{f:"4",t:0,d:1.2333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"67"},{f:"3",t:0.06666667,d:0.43333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"36"},{f:"3",t:0.06666667,d:0.86666667,i:"b",e:13,r:1,s:188,o:"36"},{f:"3",t:0.13333334,d:0.83333331,i:"b",e:-18,r:1,s:316,o:"32"},{f:"4",t:0.13333334,d:0.43333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"32"},{f:"4",t:0.23333333,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"34"},{f:"3",t:0.23333333,d:1,i:"b",e:2,r:1,s:375,o:"34"},{f:"3",t:0.23333333,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"53"},{f:"3",t:0.26666668,d:0.46666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"35"},{f:"3",t:0.26666668,d:0.69999993,i:"b",e:80,r:1,s:217,o:"35"},{f:"4",t:0.30000001,d:0.33333331,i:"e",e:"1.000000",s:"0.000000",o:"69"},{f:"4",t:0.30000001,d:0.33333331,i:"e",e:"0.000000",s:"1.000000",o:"68"},{f:"1",t:0.43333334,d:0.66666669,i:"e",e:"1.000000",r:1,s:"0.000000",o:"31"},{f:"5",t:0.5,d:0.60000002,i:"b",e:124,r:1,s:46,o:"31"},{f:"3",t:0.5,d:0.43333334,i:"e",e:"0.000000",s:"1.000000",o:"36"},{f:"3",t:0.56666666,d:0.39999998,i:"e",e:"0.000000",s:"1.000000",o:"32"},{f:"4",t:0.63333333,d:0.30000001,i:"e",e:"0.000000",s:"1.000000",o:"69"},{f:"4",t:0.63333333,d:0.30000001,i:"e",e:"1.000000",s:"0.000000",o:"68"},{f:"3",t:0.73333335,d:0.23333329,i:"e",e:"0.000000",s:"1.000000",o:"35"},{f:"3",t:0.73333335,d:0.5,i:"e",e:"0.000000",s:"1.000000",o:"34"},{f:"4",t:0.93333334,d:0.30000001,i:"e",e:"1.000000",s:"0.000000",o:"69"},{f:"4",t:0.93333334,d:0.30000001,i:"e",e:"0.000000",s:"1.000000",o:"68"}],identifier:"3",name:"title Timeline",duration:1.2333333},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"1",onSceneAnimationCompleteAction:{type:1,sceneOid:"11",transition:1},backgroundColor:"#A2B6FC",name:"Scene00"},{onSceneLoadAction:{type:0},onSceneKeyDownAction:{type:3},onSceneKeyPressAction:{type:3},initialValues:{"23":{o:"content-box",h:"cloud0.png",x:"visible",a:437,q:"100% 100%",b:282,j:"absolute",r:"inline",c:85,z:"7",k:"div",d:36,e:"0.000000"},"47":{b:0,z:"1",K:"None",c:90,bC:1,L:"None",d:15,aS:6,M:0,e:"1.000000",bD:"auto",N:0,aT:6,bB:1,O:0,aU:6,P:0,bF:"46",aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"TrebuchetMS,'Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#A0A0A0",t:18,u:"normal",F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"Start",bA:"#5A84AD",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"16":{o:"content-box",h:"cloud0.png",x:"visible",a:487,q:"100% 100%",b:290,j:"absolute",r:"inline",c:85,z:"6",k:"div",d:36,e:"0.000000"},"55":{o:"content-box",h:"bigchara0.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"2",k:"div",d:76,bF:"57",e:"1.000000"},"14":{o:"content-box",h:"title.png",x:"visible",a:414,q:"100% 100%",b:124,j:"absolute",r:"inline",c:196,z:"4",k:"div",d:58,e:"1.000000"},"22":{o:"content-box",h:"cloud0.png",x:"visible",a:563,q:"100% 100%",b:203,j:"absolute",r:"inline",c:61,z:"3",k:"div",d:26,e:"0.000000"},"48":{b:0,z:"2",K:"None",c:90,bC:1,L:"None",d:15,aS:6,M:0,e:"0.000000",bD:"auto",N:0,aT:6,bB:1,O:0,aU:6,P:0,bF:"46",aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"TrebuchetMS,'Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#A0A0A0",t:18,u:"normal",F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"Touch",bA:"#5A84AD",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"56":{o:"content-box",h:"bigchara1.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"1",k:"div",d:76,bF:"57",e:"0.000000"},"46":{x:"visible",k:"div",c:102,d:27,z:"8",a:461,j:"absolute",b:334},"10":{o:"content-box",h:"cloud0.png",x:"visible",a:406,q:"100% 100%",b:236,j:"absolute",r:"inline",c:61,z:"2",k:"div",d:26,e:"0.000000"},"57":{x:"visible",k:"div",c:94,d:76,z:"5",e:"1.000000",a:465,j:"absolute",b:162}},sceneIndex:1,timelines:{"3":{framesPerSecond:30,animations:[],identifier:"3",name:"title Timeline",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"3",t:0,d:0.69999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"3",t:0,d:1.3,i:"b",e:111,r:1,s:236,o:"10"},{f:"3",t:0,d:1.3,i:"e",e:"1.000000",r:1,s:"0.000000",o:"48"},{f:"2",t:0,d:1.3,i:"b",e:-13,r:1,s:0,o:"48"},{f:"3",t:0,d:1.3,i:"e",e:"0.000000",r:1,s:"1.000000",o:"47"},{f:"2",t:0,d:1.3,i:"b",e:-13,r:1,s:0,o:"47"},{f:"1",t:0,d:1.3666667,i:"b",e:220,r:1,s:162,o:"57"},{f:"4",t:0,d:0.69999999,i:"e",e:"0.000000",r:1,s:"1.000000",o:"55"},{f:"4",t:0,d:0.69999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"56"},{f:"3",t:0.36666667,d:0.33333331,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"3",t:0.36666667,d:1.4666666,i:"b",e:46,r:1,s:290,o:"16"},{f:"3",t:0.69999999,d:1.1333332,i:"e",e:"0.000000",s:"1.000000",o:"16"},{f:"3",t:0.69999999,d:0.59999996,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"4",t:0.69999999,d:0.66666669,i:"e",e:"1.000000",s:"0.000000",o:"55"},{f:"4",t:0.69999999,d:0.66666669,i:"e",e:"0.000000",s:"1.000000",o:"56"},{f:"3",t:0.83333331,d:1.4666667,i:"b",e:46,r:1,s:282,o:"23"},{f:"3",t:0.83333331,d:0.33333331,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"3",t:1.1666666,d:1.1333333,i:"e",e:"0.000000",s:"1.000000",o:"23"},{f:"3",t:1.3,d:1.4333334,i:"e",e:"0.000000",s:"1.000000",o:"48"},{f:"4",t:1.3,d:1.4333334,i:"b",e:0,s:-13,o:"48"},{f:"3",t:1.3,d:1.4333334,i:"e",e:"1.000000",s:"0.000000",o:"47"},{f:"4",t:1.3,d:1.4333334,i:"b",e:0,s:-13,o:"47"},{f:"4",t:1.3666667,d:0.66666663,i:"e",e:"0.000000",s:"1.000000",o:"55"},{f:"4",t:1.3666667,d:0.66666663,i:"e",e:"1.000000",s:"0.000000",o:"56"},{f:"4",t:1.3666667,d:1.3666667,i:"b",e:162,s:220,o:"57"},{f:"3",t:1.4333334,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"22"},{f:"3",t:1.4333334,d:1.3,i:"b",e:76,r:1,s:203,o:"22"},{f:"3",t:1.9666667,d:0.76666665,i:"e",e:"0.000000",s:"1.000000",o:"22"},{f:"4",t:2.0333333,d:0.70000005,i:"e",e:"1.000000",s:"0.000000",o:"55"},{f:"4",t:2.0333333,d:0.70000005,i:"e",e:"0.000000",s:"1.000000",o:"56"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2.7333333}},perspective:"600px",oid:"11",onSceneAnimationCompleteAction:{type:1,transition:1,sceneOid:"21"},backgroundColor:"#A2B6FC",name:"Scene01"},{onSceneLoadAction:{type:0},initialValues:{"65":{b:0,z:"1",K:"None",c:90,bC:1,L:"None",d:15,aS:6,M:0,e:"1.000000",bD:"auto",N:0,aT:6,bB:1,O:0,aU:6,P:0,bF:"64",aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"TrebuchetMS,'Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#A0A0A0",t:18,u:"normal",F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"Start",bA:"#5A84AD",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"24":{o:"content-box",h:"cloud0.png",x:"visible",a:405,q:"100% 100%",b:238,j:"absolute",r:"inline",c:85,z:"8",k:"div",d:36,e:"0.000000"},"19":{o:"content-box",h:"title.png",x:"visible",a:414,q:"100% 100%",b:124,j:"absolute",r:"inline",c:196,z:"4",k:"div",d:58,e:"1.000000"},"66":{b:0,z:"2",K:"None",c:90,bC:1,L:"None",d:15,aS:6,M:0,e:"0.000000",bD:"auto",N:0,aT:6,bB:1,O:0,aU:6,P:0,bF:"64",aV:6,j:"absolute",k:"div",aZ:0,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"TrebuchetMS,'Lucida Grande',Tahoma,Arial,Sans-Serif",D:"#A0A0A0",t:18,u:"normal",F:"center",v:"bold",G:"#FFFFFF",aP:"default",w:"Touch",bA:"#5A84AD",x:"visible",I:"None",a:0,y:"preserve",J:"None"},"61":{x:"visible",k:"div",c:94,d:76,z:"5",e:"1.000000",a:465,j:"absolute",b:162},"63":{o:"content-box",h:"bigchara0.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"2",k:"div",d:76,bF:"61",e:"1.000000"},"64":{x:"visible",k:"div",c:102,d:27,z:"9",a:461,j:"absolute",b:334},"25":{o:"content-box",h:"cloud0.png",x:"visible",a:390,q:"100% 100%",b:195,j:"absolute",r:"inline",c:68,z:"3",k:"div",d:29,e:"0.000000"},"20":{o:"content-box",h:"cloud0.png",x:"visible",a:448,q:"100% 100%",b:267,j:"absolute",r:"inline",c:85,z:"7",k:"div",d:36,e:"0.000000"},"62":{o:"content-box",h:"bigchara1.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:94,z:"1",k:"div",d:76,bF:"61",e:"0.000000"},"18":{o:"content-box",h:"cloud0.png",x:"visible",a:512,q:"100% 100%",b:217,j:"absolute",r:"inline",c:68,z:"2",k:"div",d:29,e:"0.000000"}},timelines:{"3":{framesPerSecond:30,animations:[],identifier:"3",name:"title Timeline",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"3",t:0,d:0.69999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"},{f:"3",t:0,d:1.3666667,i:"b",e:23,r:1,s:217,o:"18"},{f:"2",t:0,d:1.4,i:"b",e:220.77253,r:1,s:162,o:"61"},{f:"3",t:0,d:1.3,i:"e",e:"1.000000",r:1,s:"0.000000",o:"66"},{f:"2",t:0,d:1.3,i:"b",e:-13,r:1,s:0,o:"66"},{f:"3",t:0,d:1.3,i:"e",e:"0.000000",r:1,s:"1.000000",o:"65"},{f:"2",t:0,d:1.3,i:"b",e:-13,r:1,s:0,o:"65"},{f:"4",t:0,d:0.69999999,i:"e",e:"0.000000",r:1,s:"1.000000",o:"63"},{f:"4",t:0,d:0.69999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"62"},{f:"3",t:0.2,d:1.0666666,i:"b",e:49,r:1,s:267,o:"20"},{f:"3",t:0.2,d:0.53333336,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"3",t:0.56666666,d:0.69999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"25"},{f:"3",t:0.56666666,d:1.3666668,i:"b",e:23,r:1,s:195,o:"25"},{f:"3",t:0.63333333,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"3",t:0.63333333,d:1.0666667,i:"b",e:49,r:1,s:238,o:"24"},{f:"3",t:0.69999999,d:0.66666669,i:"e",e:"0.000000",s:"1.000000",o:"18"},{f:"4",t:0.69999999,d:0.66666669,i:"e",e:"1.000000",s:"0.000000",o:"63"},{f:"4",t:0.69999999,d:0.66666669,i:"e",e:"0.000000",s:"1.000000",o:"62"},{f:"3",t:0.73333335,d:0.5333333,i:"e",e:"0.000000",s:"1.000000",o:"20"},{f:"3",t:1.1666666,d:0.53333342,i:"e",e:"0.000000",s:"1.000000",o:"24"},{f:"3",t:1.2666667,d:0.66666675,i:"e",e:"0.000000",s:"1.000000",o:"25"},{f:"3",t:1.3,d:1.4333334,i:"e",e:"0.000000",s:"1.000000",o:"66"},{f:"4",t:1.3,d:1.4333334,i:"b",e:0,s:-13,o:"66"},{f:"3",t:1.3,d:1.4333334,i:"e",e:"1.000000",s:"0.000000",o:"65"},{f:"4",t:1.3,d:1.4333334,i:"b",e:0,s:-13,o:"65"},{f:"4",t:1.3666667,d:0.66666663,i:"e",e:"0.000000",s:"1.000000",o:"63"},{f:"4",t:1.3666667,d:0.66666663,i:"e",e:"1.000000",s:"0.000000",o:"62"},{f:"2",t:1.4,d:1.3333334,i:"b",e:162,s:220.77253,o:"61"},{f:"4",t:2.0333333,d:0.70000005,i:"e",e:"1.000000",s:"0.000000",o:"63"},{f:"4",t:2.0333333,d:0.70000005,i:"e",e:"0.000000",s:"1.000000",o:"62"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2.7333333}},sceneIndex:2,perspective:"600px",oid:"21",onSceneAnimationCompleteAction:{type:1,transition:1,sceneOid:"11"},backgroundColor:"#A2B6FC",name:"Scene02"}];


	
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
	hypeDoc.setMainContentContainerID("skydivingtest_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

