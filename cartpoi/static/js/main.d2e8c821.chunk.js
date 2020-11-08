(this.webpackJsonpphysm=this.webpackJsonpphysm||[]).push([[0],{138:function(t,e){},191:function(t,e){},253:function(t,e){},254:function(t,e){},255:function(t,e,n){t.exports=n(282)},257:function(t,e,n){},262:function(t,e){},263:function(t,e){},271:function(t,e){},274:function(t,e){},275:function(t,e){},276:function(t,e,n){},282:function(t,e,n){"use strict";n.r(e);var i=n(4),o=n.n(i),a=n(12),r=(n(257),n(148));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(94),c=(n(252),n(7)),u=(n(276),n(277),n(6)),l=n(11),d=n(14),h=n(15),v=n(65),f=s.tensor2d([[0],[0],[1]]),m=(s.tensor2d([[0],[0],[0]]),[0,0]),g=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return n}(Object(v.a)(Error)),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return n}(Object(v.a)(Error)),y=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return n}(Object(v.a)(Error));Error;function b(t){throw new g("Missing required function argument: ".concat(t))}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("position");if(t instanceof s.Tensor){var e=t.dataSync();if(e.length<2||e.length>3)throw new y("Expected `position` tensor to have 2 or 3 elements; got ".concat(t));t=s.tensor2d([[e[0]],[e[1]],[1]])}else if(t instanceof Array){if(t.length<2||t.length>3)throw new y("Expected `position` array to have 2 or 3 elements; got ".concat(t));t=s.tensor2d([[t[0]],[t[1]],[1]])}else{if("number"!=typeof t)throw new TypeError("Expected `position` to be a number, array, or tf.Tensor instance; got ".concat(t));t=s.tensor2d([[t],[0],[1]])}return t}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("state");if(null==t)t=m;else if(t===m);else if("number"==typeof t)t=[t,0];else{if(!(t instanceof Array))throw new TypeError("Expected `state` to be tf.Tensor instance; got ".concat(t));if(0===t.length||t.length>2)throw new y("Expected `state` tuple/array to have 1 or 2 elements; got ".concat(t));t=[t[0],t.length>1?t[1]:0]}return t}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("x"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return null==e&&(e=t),s.tensor2d([[t,0,0],[0,e,0],[0,0,1]])}function M(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("offset"),e=(t=w(t)).dataSync();return t.dispose(),s.tensor2d([[1,0,e[0]],[0,1,e[1]],[0,0,e[2]]])}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("angle"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("offset"),n=(e=w(e)).dataSync();e.dispose();var i=Math.cos(t),o=Math.sin(t);return s.tensor2d([[i,-o,n[0]],[o,i,n[1]],[0,0,n[2]]])}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("mat");if(!(t instanceof s.Tensor))throw new TypeError("Expected transformation matrix `mat` to be tf.Tensor instance; got ".concat(t.toString()));if(2!==t.shape.length||3!==t.shape[0]||3!==t.shape[1])throw new y("Expected transformation matrix `mat` to have shape [3, 3]; got ".concat(t.toString()))}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("mat");x(t);var e=t.dataSync();return e[0]*e[4]-e[1]*e[3]}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("mat");return Math.sqrt(Math.abs(E(t)))}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("mat");x(t);var e=t.dataSync();return Math.atan2(e[1],-e[0])}function P(){return Math.random().toString(36).substr(2,9)}var L=function(){function t(){Object(u.a)(this,t)}return Object(l.a)(t,[{key:"dispose",value:function(){}},{key:"xform",value:function(){arguments.length>0&&void 0!==arguments[0]||b("xformMatrix");throw new p("abstract method")}},{key:"getDomElement",value:function(){arguments.length>0&&void 0!==arguments[0]||b("xformMatrix");var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.key;throw new p("abstract method")}},{key:"toJsonObj",value:function(){throw new p("TODO: implement")}}]),t}(),D=n(36),T=n.n(D),F=s.tensor2d([[-.5,-.5,1],[.5,-.5,1],[.5,.5,1],[-.5,.5,1]]).transpose(),K=s.tensor2d([[0,0,1],[1,0,1],[1,1,1],[0,1,1]]).transpose(),W=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.width,a=void 0===o?1:o,r=i.height,c=void 0===r?1:r,l=i.position,d=void 0===l?f:l,h=i.angle,v=void 0===h?0:h,m=i.centered,g=void 0===m||m,p=i.solid,y=void 0===p||p,b=i.lineWidth,j=void 0===b?1:b,M=i.color,x=void 0===M?"black":M;return Object(u.a)(this,n),(t=e.call(this)).width=a,t.height=c,t.position=w(d),t.angle=v,t.centered=!!g,t.solid=!!y,t.lineWidth=j,t.color=x,t._cornerPositions=s.tidy((function(){return k(-v,t.position).matMul(O(a,c)).matMul(g?F:K)})),t}return Object(l.a)(n,[{key:"dispose",value:function(){this._cornerPositions.dispose(),this.position.dispose()}},{key:"xform",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),e=S(t);return new n({width:this.width*e,height:this.height*e,position:t.matMul(this.position),angle:this.angle+N(t),centered:this.centered,solid:this.solid,lineWidth:this.lineWidth*e,color:this.color})}},{key:"getDomElement",value:function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.key,a=void 0===o?void 0:o,r=S(n),c=s.tidy((function(){return n.matMul(e._cornerPositions).arraySync()}));if(this.solid)t=T.a.createElement("rect",{x:c[0][3],y:c[1][3],width:this.width*r,height:this.height*r,key:a});else{for(var u=this._cornerPositions.shape[1],l=[],d=0;d<u;d++){var h=(d+1)%u;l.push(T.a.createElement("line",{className:"plot__line",x1:c[0][d],y1:c[1][d],x2:c[0][h],y2:c[1][h],strokeWidth:this.lineWidth*r,stroke:this.color,key:d}))}t=T.a.createElement("g",{key:a},l)}return t}}]),n}(L),_=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.position,a=void 0===o?f:o,r=i.radius,s=void 0===r?1:r,c=i.color,l=void 0===c?"black":c;return Object(u.a)(this,n),(t=e.call(this)).position=w(a),t.radius=s,t.color=l,t}return Object(l.a)(n,[{key:"dispose",value:function(){this.position.dispose()}},{key:"xform",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),e=S(t);return n({position:t.matMul(this.position),radius:this.radius*e})}},{key:"getDomElement",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.key,o=void 0===i?void 0:i,a=s.tidy((function(){return e.matMul(t.position).dataSync()})),r=S(e);return T.a.createElement("circle",{className:"plot__circle",cx:a[0],cy:a[1],r:this.radius*r,fill:this.color,key:o})}}]),n}(L),J=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.endPos,a=void 0===o?b("endPos"):o,r=i.startPos,s=void 0===r?f:r,c=i.lineWidth,l=void 0===c?1:c,d=i.color,h=void 0===d?"black":d;return Object(u.a)(this,n),(t=e.call(this)).startPos=w(s),t.endPos=w(a),t.lineWidth=l,t.color=h,t}return Object(l.a)(n,[{key:"dispose",value:function(){this.startPos.dispose(),this.endPos.dispose()}},{key:"xform",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),e=S(t);return n({endPos:t.matMul(this.endPos),startPos:t.matMul(this.startPos),lineWidth:this.lineWidth*e,color:this.color})}},{key:"getDomElement",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.key,o=void 0===i?void 0:i,a=s.tidy((function(){return e.matMul(t.startPos).dataSync()})),r=s.tidy((function(){return e.matMul(t.endPos).dataSync()})),c=S(e);return T.a.createElement("line",{className:"plot__line",x1:a[0],y1:a[1],x2:r[0],y2:r[1],strokeWidth:this.lineWidth*c,stroke:this.color,key:o})}}]),n}(L),A=n(18),q=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.position,i=void 0===n?f:n,o=e.decals,a=void 0===o?[]:o,r=e.weights,s=void 0===r?[]:r,c=e.frames,l=void 0===c?[]:c,d=e.resistance,h=void 0===d?0:d,v=e.initialState,g=void 0===v?m:v,p=e.id,y=void 0===p?null:p,b=e.typeName,O=void 0===b?null:b;Object(u.a)(this,t),this.id=null!=y?y:P(),this.typeName=O||this.constructor.name,this.position=w(i),this.decals=a,this.weights=s,this.frames=l,this.resistance=h,this.initialState=j(g)}return Object(l.a)(t,[{key:"dispose",value:function(){this.frames.forEach((function(t){return t.dispose()})),this.weights.forEach((function(t){return t.dispose()})),this.decals.forEach((function(t){return t.dispose()})),this.position.dispose()}},{key:"getLocalPosMatrix",value:function(){arguments.length>0&&void 0!==arguments[0]||b("q");return s.eye(3)}},{key:"getLocalVelMatrix",value:function(){arguments.length>0&&void 0!==arguments[0]||b("q");return s.zeros([3,3])}},{key:"getLocalAccelMatrix",value:function(){arguments.length>0&&void 0!==arguments[0]||b("q");return s.zeros([3,3])}},{key:"getDomElement",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("stateMap"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("xformMatrix"),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.key,a=void 0===o?void 0:o,r=e.has(this.id)?e.get(this.id):m,u=Object(c.a)(r,1),l=u[0];n=s.tidy((function(){return n.matMul(t.getLocalPosMatrix(l))}));var d=T.a.createElement("g",{className:"frame",key:a},this.decals.map((function(t,e){return t.getDomElement(n,{key:"decal"+e})})),this.frames.map((function(t,i){return t.getDomElement(e,n,{key:"frame"+i})})));return n.dispose(),d}},{key:"toJsonObj",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.includeDecals,i=void 0!==n&&n,o={frames:this.frames.map((function(t){return t.toJsonObj({includeDecals:i})})),id:this.id,initialState:this.initialState,position:s.tidy((function(){return Object(A.a)(t.position.dataSync().slice(0,-1))})),resistance:this.resistance,type:this.typeName,weights:this.weights.map((function(t){return t.toJsonObj()}))};return i&&(o.decals=this.decals.map((function(t){return t.toJsonObj()}))),o}}]),t}(),B=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.position,o=void 0===i?f:i,a=t.decals,r=void 0===a?[]:a,s=t.weights,c=void 0===s?[]:s,l=t.frames,d=void 0===l?[]:l,h=t.resistance,v=void 0===h?0:h,g=t.initialState,p=void 0===g?m:g,y=t.id,b=void 0===y?null:y;return Object(u.a)(this,n),e.call(this,{decals:r,frames:d,id:b,initialState:p,position:o,resistance:v,typeName:"RotationalFrame",weights:c})}return Object(l.a)(n,[{key:"xform",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.decals,o=void 0===i?void 0:i,a=e.weights,r=void 0===a?void 0:a,s=e.frames,c=void 0===s?void 0:s;return new n({position:t.matMul(this.position),decals:null!=o?o:this.decals,weights:null!=r?r:this.weights,frames:null!=c?c:this.frames,resistance:this.resistance,initialState:this.initialState})}},{key:"getLocalPosMatrix",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("q"),e=this.position.dataSync(),n=Math.cos(t),i=Math.sin(t);return s.tensor2d([[n,-i,e[0]],[i,n,e[1]],[0,0,1]])}},{key:"getLocalVelMatrix",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("q"),e=Math.cos(t),n=Math.sin(t);return s.tensor2d([[-n,-e,0],[e,-n,0],[0,0,0]])}},{key:"getLocalAccelMatrix",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("q"),e=Math.cos(t),n=Math.sin(t);return s.tensor2d([[-e,n,0],[-n,-e,0],[0,0,0]])}}]),n}(q),I=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,"Encountered invalid state map")).name="InvalidStateMapError",i}return n}(Object(v.a)(Error));var R=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("scene"),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("rsWasmModule"),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.rungeKutta,s=void 0===r||r;Object(u.a)(this,n),(t=e.call(this,i)).stateBuffer=new Float64Array(2*t.scene.sortedFrames.length),t.extForceBuffer=new Float64Array(t.scene.sortedFrames.length),t.resetStateMap(),console.log("[js] Creating solver context");var c=JSON.stringify(i.toJsonObj());return t.context=new o.SolverContext(c),t.context.setRungeKutta(s),console.log("[js] Created solver context:",t.context),t}return Object(l.a)(n,[{key:"dispose",value:function(){console.log("[js] Disposing solver context"),this.context.dispose(),console.log("[js] Disposed solver context"),this.context=null}},{key:"getStateMap",value:function(){var t=this;return new Map(this.scene.sortedFrames.map((function(e,n){return[e.id,[t.stateBuffer[2*n],t.stateBuffer[2*n+1]]]})))}},{key:"setStateMap",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("stateMap");this.stateBuffer.set(this.scene.sortedFrames.flatMap((function(e){return t.get(e.id)||[0,0]})))}},{key:"tick",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("deltaTime"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.extForceBuffer.set(this.scene.sortedFrames.map((function(t){return n&&n.get(t.id)||0}))),this.context.tick(this.stateBuffer,t,e,this.extForceBuffer);for(var i=0;i<this.stateBuffer.length;i++)if(isNaN(this.stateBuffer[i]))throw new I}}]),n}(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("scene");Object(u.a)(this,t),this.scene=e}return Object(l.a)(t,[{key:"dispose",value:function(){}},{key:"getStateMap",value:function(){throw new p("abstract method")}},{key:"setStateMap",value:function(){arguments.length>0&&void 0!==arguments[0]||b("stateMap");throw new p("abstract method")}},{key:"resetStateMap",value:function(){this.setStateMap(this.scene.getInitialStateMap())}},{key:"tick",value:function(){arguments.length>0&&void 0!==arguments[0]||b("deltaTime");throw new p("abstract method")}}]),t}()),C=function(t){return t.parents},z=function(t){return t};function V(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getNodeParents,i=void 0===n?void 0:n,o=e.getNodeKey,a=void 0===o?void 0:o;i=i||C,a=a||z;var r=new Set,s=[],c=[];function u(t,e){var n=a(t);if(r.has(n))throw new Error("Graph is not a DAG; recursively encountered ".concat(t));if(!c.includes(n)){var o=i(t);o&&(r.add(n),o.forEach((function(e){return u(e,t)})),r.delete(n),s.push(t),c.push(n))}}return Object(A.a)(t).forEach((function(t){return u(t)})),s}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getNodeParents,i=void 0===n?void 0:n,o=e.getNodeKey,a=void 0===o?void 0:o,r=V(t,{getNodeParents:i=i||C,getNodeKey:a=a||z}),s=new Map;return r.forEach((function(t){var e=a(t),n=i(t);s.has(e)||s.set(e,new Set),n.forEach((function(e){var n=a(e);s.has(n)||s.set(n,new Set),s.get(n).add(t)}))})),s}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getNodeParents,i=void 0===n?void 0:n,o=e.getNodeKey,a=void 0===o?void 0:o,r=e.visitNode,s=void 0===r?void 0:r,c=e.visitEdge,u=void 0===c?void 0:c;s=s||function(t,e){return null},u=u||function(t,e,n){return n};var l=V(t,{getNodeParents:i=i||C,getNodeKey:a=a||z}),d=new Map,h=new Map;return l.forEach((function(t){var e=a(t),n=i(t).map((function(n){var i=a(n),o=u(t,n,d.get(i));return h.set([i,e],o),o})),o=s(t,n);d.set(e,o)})),[d,h]}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getNodeParents,i=void 0===n?void 0:n,o=e.getNodeKey,a=void 0===o?void 0:o,r=e.visitNode,s=void 0===r?void 0:r,u=U(t,{getNodeParents:i,getNodeKey:a,visitNode:s}),l=Object(c.a)(u,1),d=l[0];return d}var Y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.decals,i=void 0===n?[]:n,o=e.frames,a=void 0===o?[]:o,r=e.springs,s=void 0===r?[]:r,l=e.constraints,d=void 0===l?[]:l,h=e.gravity,v=void 0===h?10:h;Object(u.a)(this,t),this.decals=i,this.frames=a,this.springs=s,this.constraints=d,this.gravity=v;var f=function(t){return t.frames},m=function(t){return t.id};this.sortedFrames=V(this.frames,{getNodeParents:f,getNodeKey:m}).reverse(),this.frameMap=new Map(this.sortedFrames.map((function(t){return[t.id,t]})));var g=G(this.sortedFrames,{getNodeParents:f,getNodeKey:m});if(Object(A.a)(g.values()).some((function(t){return t.size>1})))throw new Error("Frames should only have one parent");this.frameIdParentMap=new Map(Object(A.a)(g).map((function(t){var e=Object(c.a)(t,2),n=e[0],i=e[1];return[n,i.size?Object(A.a)(i)[0].id:null]}))),this.frameIdPathMap=X(this.sortedFrames,{getNodeParents:function(t){return Object(A.a)(g.get(t.id))},getNodeKey:m,visitNode:function(t,e){return e.length?[].concat(Object(A.a)(e[0]),[t.id]):[t.id]}})}return Object(l.a)(t,[{key:"getDomElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("stateMap"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.eye(3),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.key,o=void 0===i?void 0:i;return T.a.createElement("g",{className:"scene",key:o},this.decals.map((function(t,n){return t.getDomElement(e,{key:"decal"+n})})),this.frames.map((function(n,i){return n.getDomElement(t,e,{key:"frame"+i})})))}},{key:"getInitialStateMap",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.randomize,i=void 0!==n&&n;if(i){var o=function(){return(Math.random()-.5)*Math.PI*2};t=function(t){return[o(),o()]}}else t=function(t){return t.initialState};return new Map(this.sortedFrames.map((function(e){return[e.id,t(e)]})))}},{key:"toJsonObj",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.includeDecals,n=void 0!==e&&e,i={frames:this.frames.map((function(t){return t.toJsonObj({includeDecals:n})})),gravity:this.gravity};return n&&(i.decals=this.decals.map((function(t){return t.toJsonObj()}))),i}}]),t}(),H=n(250),$=n(20),Q=n(21),Z=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=i.position,a=void 0===o?f:o,r=i.angle,s=void 0===r?0:r,c=i.decals,l=void 0===c?[]:c,d=i.weights,h=void 0===d?[]:d,v=i.frames,g=void 0===v?[]:v,p=i.resistance,y=void 0===p?0:p,b=i.initialState,w=void 0===b?m:b,j=i.id,O=void 0===j?void 0:j;return Object(u.a)(this,n),(t=e.call(this,{angle:s,decals:l,frames:g,id:O,initialState:w,position:a,resistance:y,typeName:"TrackFrame",weights:h})).angle=s,t}return Object(l.a)(n,[{key:"xform",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("xformMatrix"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.decals,o=void 0===i?void 0:i,a=e.weights,r=void 0===a?void 0:a,s=e.frames,c=void 0===s?void 0:s;return new n({position:t.matMul(this.position),angle:this.angle+N(t),decals:null!=o?o:this.decals,weights:null!=r?r:this.weights,frames:null!=c?c:this.frames,resistance:this.resistance,initialState:this.initialState})}},{key:"getLocalPosMatrix",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("q"),e=this.position.dataSync();return M([e[0]+t*Math.cos(this.angle),e[1]+t*Math.sin(this.angle)])}},{key:"getLocalVelMatrix",value:function(){arguments.length>0&&void 0!==arguments[0]||b("q");return s.tensor2d([[0,0,Math.cos(this.angle)],[0,0,Math.sin(this.angle)],[0,0,0]])}},{key:"toJsonObj",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(H.a)({angle:this.angle},Object(Q.a)(Object($.a)(n.prototype),"toJsonObj",this).call(this,t))}}]),n}(q),tt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.position,o=void 0===i?f:i,a=n.drag,r=void 0===a?0:a;Object(u.a)(this,t),this.mass=e,this.position=w(o),this.drag=r}return Object(l.a)(t,[{key:"dispose",value:function(){this.position.dispose()}},{key:"xform",value:function(e){return new t({mass:this.mass,position:e.matMul(this.position),drag:this.drag})}},{key:"toJsonObj",value:function(){var t=this;return{mass:this.mass,position:s.tidy((function(){return Object(A.a)(t.position.dataSync().slice(0,2))})),drag:this.drag}}}]),t}(),et=Array(10).fill().map((function(t,e){return e})).reduce((function(t,e){var n=0===e,i=9===e,o=n?1:.19,a=[new tt(n?60:1,{position:[1.2,0],drag:n?20:8})],r=[new J({endPos:[1.32,0],lineWidth:.38})];return r.push(new _({position:[1.2,0],radius:o})),[new B({id:"segment".concat(e),initialState:i?[.3*Math.PI,0]:[0,0],decals:r,frames:t,position:[i?0:1.2,0],weights:a,resistance:10})]}),[]),nt=new Z({id:"cart",decals:[new W({width:3,height:3/1.618,lineWidth:.2})],frames:et,initialState:[0,0],weights:[new tt(250)],resistance:5}),it=new Y({frames:[nt],decals:[new J({startPos:[-300,0],endPos:[300,0],color:"gray",lineWidth:.1})]});var ot=function(t){var e=t.rsWasmModule,n=Object(D.useState)(!1),i=Object(c.a)(n,2),o=i[0],a=i[1],u=Object(D.useState)([0,0]),l=Object(c.a)(u,2),d=l[0],h=l[1],v=Object(D.useState)(12),f=Object(c.a)(v,2),m=f[0],g=f[1],p=T.a.useRef(),y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=Object(D.useState)(new Set),n=Object(c.a)(e,2),i=n[0],o=n[1],a=Object(D.useRef)();return a.current=t,Object(D.useEffect)((function(){function t(t){var e=t.code,n=t.keyCode;o((function(t){return t.has(e)||(t=Object(r.a)(t,(function(t){t.add(e)})),a.current&&a.current({keyName:e,keyId:n,pressed:!0})),t}))}function e(t){var e=t.code,n=t.keyCode;o((function(t){return t.has(e)&&(t=Object(r.a)(t,(function(t){t.delete(e)})),a.current&&a.current({keyName:e,keyId:n,pressed:!1})),t}))}return window.addEventListener("keydown",t),window.addEventListener("keyup",e),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",e)}}),[]),i}(),w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("elementRef"),e=Object(D.useState)(null),n=Object(c.a)(e,2),i=n[0],o=n[1],a=Object(D.useState)(null),r=Object(c.a)(a,2),s=r[0],u=r[1];Object(D.useEffect)((function(){function e(t){console.log("start",t),o([t.x,t.y]),u(null)}function n(t){u([t.x,t.y])}function i(t){console.log("end"),o(null),u(null)}var a=t.current;return a.addEventListener("mousedown",e),a.addEventListener("mousemove",n),a.addEventListener("mouseup",i),function(){a.removeEventListener("mousedown",e),a.removeEventListener("mousemove",n),a.removeEventListener("mouseup",i)}}),[t]);var l=i&&s?[s[0]-i[0],s[1]-i[1]]:null;return l}(p),j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("elementRef"),e=Object(D.useState)(null),n=Object(c.a)(e,2),i=n[0],o=n[1],a=Object(D.useState)(null),r=Object(c.a)(a,2),s=r[0],u=r[1];Object(D.useEffect)((function(){function e(t){0===t.which&&t.touches.length>0&&(o([t.touches[0].clientX,t.touches[0].clientY]),u(null)),t.preventDefault()}function n(t){0===t.which&&t.touches.length>0&&u([t.touches[0].clientX,t.touches[0].clientY]),t.preventDefault()}function i(t){0===t.which&&(o(null),u(null)),t.preventDefault()}var a=t.current;return a.addEventListener("touchstart",e),a.addEventListener("touchmove",n),a.addEventListener("touchend",i),function(){a.removeEventListener("touchstart",e),a.removeEventListener("touchmove",n),a.removeEventListener("touchend",i)}}),[t]);var l=i&&s?[s[0]-i[0],s[1]-i[1]]:null;return l}(p),k=Object(D.useState)(it.getInitialStateMap()),x=Object(c.a)(k,2),E=x[0],S=x[1],N=function(t,e){return s.tidy((function(){return M([300,300]).matMul(O(e,-e)).matMul(M(t))}))}(d,m),P=it.getDomElement(E,N);N.dispose();var L=Object(D.useRef)(null);return Object(D.useEffect)((function(){L.current=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("scene"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("rsWasmModule"),n=new R(t,e,{rungeKutta:!0});return window.solver=n,n}(it,e)}),[e]),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("callback"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fps,i=void 0===n?60:n,o=T.a.useRef({prevTime:0}),a=T.a.useRef(),r=T.a.useRef();o.current.callback=t,T.a.useEffect((function(){return a.current=requestAnimationFrame((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("time"),n=(e-o.current.prevTime)/1e3,s=Math.max(1e3/i-n,0);o.current.callback(n),o.current.prevTime=e,r.current=setTimeout((function(){a.current=requestAnimationFrame(t)}),s)})),function(){cancelAnimationFrame(a.current),r.current&&clearTimeout(r.current)}}),[i])}((function(t){if(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.deltaTime,n=void 0===e?b("deltaTime"):e,i=t.pressedKeys,o=void 0===i?b("pressedKeys"):i,a=t.scale,r=void 0===a?b("scale"):a,s=t.setScale,u=void 0===s?b("setScale"):s,l=t.setTranslation,d=void 0===l?b("setTranslation"):l,h=t.translation;void 0===h&&b("translation"),Object.entries({Minus:function(){return u(r*Math.exp(-n))},Equal:function(){return u(r*Math.exp(n))},KeyH:function(){return d((function(t){var e=Object(c.a)(t,2),i=e[0],o=e[1];return[i+20*n,o]}))},KeyK:function(){return d((function(t){var e=Object(c.a)(t,2),i=e[0],o=e[1];return[i-20*n,o]}))},KeyU:function(){return d((function(t){var e=Object(c.a)(t,2);return[e[0],e[1]-20*n]}))},KeyJ:function(){return d((function(t){var e=Object(c.a)(t,2);return[e[0],e[1]+20*n]}))}}).forEach((function(t){var e=Object(c.a)(t,2),n=e[0],i=e[1];return o.has(n)&&i()}))}({deltaTime:t,pressedKeys:y,scale:m,setScale:g,setTranslation:h,translation:d}),!o){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("pressedKeys"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("clickLocationDelta"),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b("touchLocationDelta"),i=(arguments.length>3&&void 0!==arguments[3]||b("deltaTime"),0);return t.has("KeyA")||t.has("ArrowLeft")?i-=8500:(t.has("KeyD")||t.has("ArrowRight"))&&(i+=8500),e&&(i+=e[0]/200*8500),n&&(i+=n[0]/60*8500),Math.abs(i)>8500&&(i=8500*Math.sign(i)),new Map([[nt.id,i]])}(y,w,j,t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b("solver"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b("externalForceMap"),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b("animationDeltaTime"),i=1.5/450,o=Math.floor(Math.min(n/i,450));n>.2&&(o=Math.floor(Math.min(o,90)),console.warn("Falling below minimum desired animation FPS; limiting simulation to ".concat(o," ticks")));try{t.tick(i,Math.min(o,450),e)}catch(a){if(!(a instanceof I))throw a;console.warn("Encountered invalid state map; resetting to initial state..."),t.resetStateMap()}return t.getStateMap()}(L.current,e,t);S(n)}})),T.a.createElement("div",{className:"app__main"},T.a.createElement("div",{className:"plot"},T.a.createElement("h2",{className:"plot__title"},"CartPoi"),T.a.createElement("div",{className:"plot__main"},T.a.createElement("svg",{className:"plot__svg",ref:p},P)),T.a.createElement("button",{onClick:function(){a(!o)}},o?"Unpause":"Pause")))},at=n(251),rt=n.n(at);function st(){s.setBackend("cpu")}function ct(){return ut.apply(this,arguments)}function ut(){return(ut=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,286));case 2:return e=t.sent,window.wasm=e,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function lt(){return(lt=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.enableProdMode(),st(),t.next=4,ct();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.b(),window.tf=s,function(){return lt.apply(this,arguments)}().then((function(t){return function(t){rt.a.render(T.a.createElement(T.a.StrictMode,null,T.a.createElement(ot,{rsWasmModule:t})),document.getElementById("root"))}(t)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[255,1,2]]]);
//# sourceMappingURL=main.d2e8c821.chunk.js.map