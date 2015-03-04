
var exports=exports||this,require=require||function(){return exports;};(function(){var _1=require("./uri/uri").URI,O={},_2="0123456789abcdef".split(""),_3,_4,_5,_6;function _7(o){return o===undefined?"undefined":(o===null?"null":Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase());};function F(){};function _8(_9){F.prototype=_9||{};return new F();};function _a(_b,_c,_d){var _e={},_f;for(_f in _b){if(_b[_f]!==O[_f]){_e[_f]=_c.call(_d,_b[_f],_f,_b);}}return _e;};_3=function(arr,_10,_11){var x=0,xl=arr.length,_12=new Array(xl);for(;x<xl;++x){_12[x]=_10.call(_11,arr[x],x,arr);}return _12;};if(Array.prototype.map){_3=function(arr,_13,_14){return Array.prototype.map.call(arr,_13,_14);};}_4=function(arr,_15,_16){var x=0,xl=arr.length,_17=[];for(;x<xl;++x){if(_15.call(_16,arr[x],x,arr)){_17[_17.length]=arr[x];}}return _17;};if(Array.prototype.filter){_4=function(arr,_18,_19){return Array.prototype.filter.call(arr,_18,_19);};}_5=function(arr,o){var x=0,xl=arr.length;for(;x<xl;++x){if(arr[x]===o){return x;}}return -1;};if(Array.prototype.indexOf){_5=function(arr,o){return Array.prototype.indexOf.call(arr,o);};}function _1a(o){return o!==undefined&&o!==null?(o instanceof Array&&!o.callee?o:(typeof o.length!=="number"||o.split||o.setInterval||o.call?[o]:Array.prototype.slice.call(o))):[];};function _1b(o){var _1c=[],key;switch(_7(o)){case "object":for(key in o){if(o[key]!==O[key]){_1c[_1c.length]=key;}}break;case "array":for(key=o.length-1;key>=0;--key){_1c[key]=key;}break;}return _1c;};function _1d(arr,o){if(_5(arr,o)===-1){arr.push(o);}return arr;};function _1e(arr,o){var _1f=_5(arr,o);if(_1f>-1){arr.splice(_1f,1);}return arr;};function _20(){return [_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],"-",_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],"-4",_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],"-",_2[(Math.floor(Math.random()*16)&3)|8],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],"-",_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)],_2[Math.floor(Math.random()*16)]].join("");};function _21(str){return encodeURIComponent(str).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A");};function _22(uri){if(typeof uri==="string"&&uri.indexOf("#")===-1){uri+="#";}return uri;};function _23(){this.errors=[];this.validated={};};_23.prototype.addError=function(_24,_25,_26,_27,_28){this.errors.push({uri:_24 instanceof _29?_24.getURI():_24,schemaUri:_25 instanceof _29?_25.getURI():_25,attribute:_26,message:_27,details:_28});};_23.prototype.registerValidation=function(uri,_2a){if(!this.validated[uri]){this.validated[uri]=[_2a];}else{this.validated[uri].push(_2a);}};_23.prototype.isValidatedBy=function(uri,_2b){return !!this.validated[uri]&&_5(this.validated[uri],_2b)!==-1;};function _29(env,_2c,uri,fd){if(_2c instanceof _29){if(typeof fd!=="string"){fd=_2c._fd;}if(typeof uri!=="string"){uri=_2c._uri;}_2c=_2c._value;}if(typeof uri!=="string"){uri="urn:uuid:"+_20()+"#";}else{if(uri.indexOf(":")===-1){uri=_22(_1.resolve("urn:uuid:"+_20()+"#",uri));}}this._env=env;this._value=_2c;this._uri=uri;this._fd=fd||this._env._options["defaultFragmentDelimiter"];};_29.prototype.getEnvironment=function(){return this._env;};_29.prototype.getType=function(){return _7(this._value);};_29.prototype.getValue=function(){return this._value;};_29.prototype.getURI=function(){return this._uri;};_29.prototype.resolveURI=function(uri){return _22(_1.resolve(this._uri,uri));};_29.prototype.getPropertyNames=function(){return _1b(this._value);};_29.prototype.getProperty=function(key){var _2d=this._value?this._value[key]:undefined;if(_2d instanceof _29){return _2d;}return new _29(this._env,_2d,this._uri+this._fd+_21(key),this._fd);};_29.prototype.getProperties=function(){var _2e=_7(this._value),_2f=this;if(_2e==="object"){return _a(this._value,function(_30,key){if(_30 instanceof _29){return _30;}return new _29(_2f._env,_30,_2f._uri+_2f._fd+_21(key),_2f._fd);});}else{if(_2e==="array"){return _3(this._value,function(_31,key){if(_31 instanceof _29){return _31;}return new _29(_2f._env,_31,_2f._uri+_2f._fd+_21(key),_2f._fd);});}}};_29.prototype.getValueOfProperty=function(key){if(this._value){if(this._value[key] instanceof _29){return this._value[key]._value;}return this._value[key];}};_29.prototype.equals=function(_32){if(_32 instanceof _29){return this._value===_32._value;}return this._value===_32;};function _33(obj,_34){var _35,x;if(obj instanceof _29){obj=obj.getValue();}switch(_7(obj)){case "object":if(_34){_35={};for(x in obj){if(obj[x]!==O[x]){_35[x]=_33(obj[x],_34);}}return _35;}else{return _8(obj);}break;case "array":if(_34){_35=new Array(obj.length);x=obj.length;while(--x>=0){_35[x]=_33(obj[x],_34);}return _35;}else{return Array.prototype.slice.call(obj);}break;default:return obj;}};function _36(env,_37,uri,_38){var fr;_29.call(this,env,_37,uri);if(_38===true){this._schema=this;}else{if(_37 instanceof _36&&!(_38 instanceof _36)){this._schema=_37._schema;}else{this._schema=_38 instanceof _36?_38:this._env.getDefaultSchema()||_36.createEmptySchema(this._env);}}fr=this._schema.getValueOfProperty("fragmentResolution");if(fr==="dot-delimited"){this._fd=".";}else{if(fr==="slash-delimited"){this._fd="/";}}};_36.prototype=_8(_29.prototype);_36.createEmptySchema=function(env){var _39=_8(_36.prototype);_29.call(_39,env,{},undefined,undefined);_39._schema=_39;return _39;};_36.prototype.getSchema=function(){return this._schema;};_36.prototype.getAttribute=function(key,arg){var _3a,_3b,_3c,_3d;if(!arg&&this._attributes&&this._attributes.hasOwnProperty(key)){return this._attributes[key];}_3a=this._schema.getProperty("properties").getProperty(key);_3b=_3a.getValueOfProperty("parser");_3c=this.getProperty(key);if(typeof _3b==="function"){_3d=_3b(_3c,_3a,arg);if(!arg&&this._attributes){this._attributes[key]=_3d;}return _3d;}return _3c.getValue();};_36.prototype.getAttributes=function(){var _3e,_3f,key,_40,_41;if(!this._attributes&&this.getType()==="object"){_3e=this.getProperties();_3f=this._schema.getProperty("properties");this._attributes={};for(key in _3e){if(_3e[key]!==O[key]){_40=_3f&&_3f.getProperty(key);_41=_40&&_40.getValueOfProperty("parser");if(typeof _41==="function"){this._attributes[key]=_41(_3e[key],_40);}else{this._attributes[key]=_3e[key].getValue();}}}}return _33(this._attributes,false);};_36.prototype.getLink=function(rel,_42){var _43=this.getAttribute("links",[rel,_42]);if(_43&&_43.length&&_43[_43.length-1]){return _43[_43.length-1];}};_36.prototype.validate=function(_44,_45,_46,_47,_48){var _49=this._schema.getValueOfProperty("validator");if(!(_44 instanceof _29)){_44=this.getEnvironment().createInstance(_44);}if(!(_45 instanceof _23)){_45=new _23();}if(typeof _49==="function"&&!_45.isValidatedBy(_44.getURI(),this.getURI())){_45.registerValidation(_44.getURI(),this.getURI());_49(_44,this,this._schema,_45,_46,_47,_48);}return _45;};function _4a(_4b,_4c,_4d){var _4e=_7(_4b),_4f=_7(_4c),_50,x;if(_4f==="undefined"){return _33(_4b,true);}else{if(_4e==="undefined"||_4f!==_4e){return _33(_4c,true);}else{if(_4f==="object"){if(_4b instanceof _36){_4b=_4b.getAttributes();}if(_4c instanceof _36){_4c=_4c.getAttributes();if(_4c["extends"]&&_4d&&_4c["extends"] instanceof _36){_4c["extends"]=[_4c["extends"]];}}_50=_33(_4b,true);for(x in _4c){if(_4c[x]!==O[x]){_50[x]=_4a(_4b[x],_4c[x],_4d);}}return _50;}else{return _33(_4c,true);}}}};function _51(){this._id=_20();this._schemas={};this._options={};};_51.prototype.clone=function(){var env=new _51();env._schemas=_8(this._schemas);env._options=_8(this._options);return env;};_51.prototype.createInstance=function(_52,uri){var _53;uri=_22(uri);if(_52 instanceof _29&&(!uri||_52.getURI()===uri)){return _52;}_53=new _29(this,_52,uri);return _53;};_51.prototype.createSchema=function(_54,_55,uri){var _56,_57;uri=_22(uri);if(_54 instanceof _36&&(!uri||_54._uri===uri)&&(!_55||_54._schema.equals(_55))){return _54;}_56=new _36(this,_54,uri,_55);_57=_56.getSchema().getValueOfProperty("initializer");if(typeof _57==="function"){_56=_57(_56);}this._schemas[_56._uri]=_56;this._schemas[uri]=_56;_56.getAttributes();return _56;};_51.prototype.createEmptySchema=function(){var _58=_36.createEmptySchema(this);this._schemas[_58._uri]=_58;return _58;};_51.prototype.findSchema=function(uri){return this._schemas[_22(uri)];};_51.prototype.setOption=function(_59,_5a){this._options[_59]=_5a;};_51.prototype.getOption=function(_5b){return this._options[_5b];};_51.prototype.setDefaultFragmentDelimiter=function(fd){if(typeof fd==="string"&&fd.length>0){this._options["defaultFragmentDelimiter"]=fd;}};_51.prototype.getDefaultFragmentDelimiter=function(){return this._options["defaultFragmentDelimiter"];};_51.prototype.setDefaultSchemaURI=function(uri){if(typeof uri==="string"){this._options["defaultSchemaURI"]=_22(uri);}};_51.prototype.getDefaultSchema=function(){return this.findSchema(this._options["defaultSchemaURI"]);};_51.prototype.validate=function(_5c,_5d){var _5e,_5f,_60,_61=new _23();try{_5e=this.createInstance(_5c);_61.instance=_5e;}catch(e){_61.addError(e.uri,e.schemaUri,e.attribute,e.message,e.details);}try{_5f=this.createSchema(_5d);_61.schema=_5f;_60=_5f.getSchema();_61.schemaSchema=_60;}catch(e){_61.addError(e.uri,e.schemaUri,e.attribute,e.message,e.details);}if(_60){_60.validate(_5f,_61);}if(_61.errors.length){return _61;}return _5f.validate(_5e,_61);};_51.prototype._checkForInvalidInstances=function(_62,_63){var _64=[],_65=[[_63,this._schemas[_63]]],_66=0,_67,uri,_68,_69,_6a,key;while(_66++<_62&&_65.length){_67=_65.shift();uri=_67[0];_68=_67[1];if(_68 instanceof _36){if(this._schemas[_68._uri]!==_68){_64.push("Instance "+uri+" does not match "+_68._uri);}else{_6a=_68.getAttributes();for(key in _6a){if(_6a[key]!==O[key]){_65.push([uri+"/"+_21(key),_6a[key]]);}}}}else{if(_7(_68)==="object"){_6a=_68;for(key in _6a){if(_6a.hasOwnProperty(key)){_65.push([uri+"/"+_21(key),_6a[key]]);}}}else{if(_7(_68)==="array"){_6a=_68;for(key=0;key<_6a.length;++key){_65.push([uri+"/"+_21(key),_6a[key]]);}}}}}return _64.length?_64:_66;};_6={_environments:{},_defaultEnvironmentID:"",isJSONInstance:function(o){return o instanceof _29;},isJSONSchema:function(o){return o instanceof _36;},createEnvironment:function(id){id=id||this._defaultEnvironmentID;if(!this._environments[id]){throw new Error("Unknown Environment ID");}return this._environments[id].clone();},Environment:_51,registerEnvironment:function(id,env){id=id||(env||0)._id;if(id&&!this._environments[id]&&env instanceof _51){env._id=id;this._environments[id]=env;}},setDefaultEnvironmentID:function(id){if(typeof id==="string"){if(!this._environments[id]){throw new Error("Unknown Environment ID");}this._defaultEnvironmentID=id;}},getDefaultEnvironmentID:function(){return this._defaultEnvironmentID;},typeOf:_7,createObject:_8,mapObject:_a,mapArray:_3,filterArray:_4,searchArray:_5,toArray:_1a,keys:_1b,pushUnique:_1d,popFirst:_1e,clone:_33,randomUUID:_20,escapeURIComponent:_21,formatURI:_22,inherits:_4a};this.JSV=_6;exports.JSV=_6;require("./environments");}());