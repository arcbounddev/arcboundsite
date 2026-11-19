(()=>{var Hc=Object.defineProperty;var pa=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Gc=(i,t)=>{for(var e in t)Hc(i,e,{get:t[e],enumerable:!0})};function Kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Si(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jl(){let i=Si("canvas");return i.style.display="block",i}function po(...i){let t="THREE."+i.shift();yi?yi("log",t,...i):console.log(t,...i)}function Zl(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=Zl(i);let t="THREE."+i.shift();if(yi)yi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Et(...i){i=Zl(i);let t="THREE."+i.shift();if(yi)yi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gn(...i){let t=i.join(" ");t in jo||(jo[t]=!0,Lt(...i))}function Ql(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function ga(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zc(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Yt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Yt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yn?qi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:qi,toXYZ:Qo,fromXYZ:$o,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:Yt,toXYZ:Qo,fromXYZ:$o,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ys.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}function ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Na(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);let o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function fu(i,t,e,n,s,r,a,o){let c;if(t.side===Ee?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===On,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ns);return l<e.near||l>e.far?null:{distance:l,point:Ns.clone(),object:i}}function Us(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,_s),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ls);let h=fu(i,t,e,n,_s,Ps,Ls,ul);if(h){let f=new q;En.getBarycoord(ul,_s,Ps,Ls,f),s&&(h.uv=En.getInterpolatedAttribute(s,o,c,l,f,new It)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,c,l,f,new It)),a&&(h.normal=En.getInterpolatedAttribute(a,o,c,l,f,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new q,materialIndex:0};En.getNormal(_s,Ps,Ls,u.normal),h.face=u,h.barycoord=f}return h}function $n(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hl(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=$n(i[e]);for(let s in n)t[s]=n[s]}return t}function hl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}function fi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Oa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function nc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Su(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=nc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=xu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function dl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}function fl(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}function xo(i,t,e,n){let s=Lu(n);switch(e){case lo:return i*t;case uo:return i*t/s.components*s.byteLength;case Tr:return i*t/s.components*s.byteLength;case In:return i*t*2/s.components*s.byteLength;case Mr:return i*t*2/s.components*s.byteLength;case co:return i*t*3/s.components*s.byteLength;case ze:return i*t*4/s.components*s.byteLength;case wr:return i*t*4/s.components*s.byteLength;case ss:case rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case as:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pr:case Er:return Math.max(i,16)*Math.max(t,8)/4;case _r:case Lr:return Math.max(i,8)*Math.max(t,8)/2;case Nr:case Ur:case Rr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case ls:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jr:case Zr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $r:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cs:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lu(i){switch(i){case ke:case so:return{byteLength:1,components:1};case Li:case ro:case tn:return{byteLength:2,components:1};case Ar:case br:return{byteLength:2,components:4};case Qe:case yr:case $e:return{byteLength:4,components:1};case ao:case oo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var gl,Xa,vl,es,xl,_i,On,Ee,un,hn,Pi,Ja,za,Ha,Sl,Zn,yl,Al,bl,Tl,Ml,wl,_l,Pl,Ga,Ka,Ll,El,Nl,Ul,Cl,Rl,Vl,Fl,Ol,Ws,ks,Is,xi,qs,Bs,Xs,Js,Ya,Dl,Wl,We,ja,Za,Qa,$a,to,eo,no,io,Dn,Qn,vr,xr,ns,zs,rn,Hs,Se,kl,is,fe,Sr,Wn,ke,so,ro,Li,yr,Qe,$e,tn,Ar,br,Ei,ao,oo,lo,co,ze,an,kn,uo,Tr,In,Mr,wr,ss,rs,as,os,_r,Pr,Lr,Er,Nr,Ur,Cr,Rr,Vr,ls,Fr,Or,Dr,Wr,kr,Ir,qr,Br,Xr,Jr,zr,Hr,Gr,Kr,Yr,jr,Zr,Qr,$r,ta,cs,ea,ki,Gs,Fs,Da,Wa,ka,Ia,Il,ho,ql,yn,Me,Ii,qi,Yt,Os,Bl,Xl,Jl,zl,na,Hl,Gl,ia,Kl,Yl,fo,Ze,Bi,jo,yi,$l,on,be,ma,Ks,So,It,ln,yo,q,va,Zo,Ao,Nt,xa,Qo,$o,kt,ii,Ys,Qc,Ai,$c,ya,Pe,bo,oe,js,Re,Xi,Zs,gr,ce,si,Ge,tu,eu,Mn,gs,Fe,tl,el,Nn,Ji,nu,nl,ri,pn,vs,Fi,iu,su,il,sl,rl,al,ru,ai,Aa,Je,Hn,au,bi,tc,wn,xs,Jt,Te,zi,Ke,mn,Ta,gn,oi,li,ol,Ma,wa,_a,Pa,La,Ea,En,Un,vn,Ye,Ss,ci,ui,hi,_n,Pn,Bn,Oi,ys,As,Xn,de,bs,ou,Be,Hi,Gi,Xe,lu,Di,Ua,Ti,cu,qe,Ca,di,Oe,Wi,xe,cn,Ra,uu,hu,je,du,Kn,xn,Va,Ts,Ms,Qs,Ki,ll,Jn,ws,cl,_s,Ps,Ls,Fa,Es,ul,Ns,Ve,$s,zn,pu,Cs,Yi,ji,Cn,tr,Zi,Mi,Yn,ec,gu,vu,Le,er,nr,ir,Rn,sr,rr,ar,or,De,Vn,lr,cr,ur,Qi,Fn,hr,Ds,dr,ic,wi,pi,fr,$i,Rs,Vs,sn,ts,Ln,pl,ml,Ce,jn,mi,gi,pr,mr,go,yu,vo,Au,bu,Tu,Mu,wu,_u,Pu,qa,se,Mm,To,Ba,Mo=pa(()=>{gl=0,Xa=1,vl=2,es=1,xl=2,_i=3,On=0,Ee=1,un=2,hn=0,Pi=1,Ja=2,za=3,Ha=4,Sl=5,Zn=100,yl=101,Al=102,bl=103,Tl=104,Ml=200,wl=201,_l=202,Pl=203,Ga=204,Ka=205,Ll=206,El=207,Nl=208,Ul=209,Cl=210,Rl=211,Vl=212,Fl=213,Ol=214,Ws=0,ks=1,Is=2,xi=3,qs=4,Bs=5,Xs=6,Js=7,Ya=0,Dl=1,Wl=2,We=0,ja=1,Za=2,Qa=3,$a=4,to=5,eo=6,no=7,io=300,Dn=301,Qn=302,vr=303,xr=304,ns=306,zs=1e3,rn=1001,Hs=1002,Se=1003,kl=1004,is=1005,fe=1006,Sr=1007,Wn=1008,ke=1009,so=1010,ro=1011,Li=1012,yr=1013,Qe=1014,$e=1015,tn=1016,Ar=1017,br=1018,Ei=1020,ao=35902,oo=35899,lo=1021,co=1022,ze=1023,an=1026,kn=1027,uo=1028,Tr=1029,In=1030,Mr=1031,wr=1033,ss=33776,rs=33777,as=33778,os=33779,_r=35840,Pr=35841,Lr=35842,Er=35843,Nr=36196,Ur=37492,Cr=37496,Rr=37488,Vr=37489,ls=37490,Fr=37491,Or=37808,Dr=37809,Wr=37810,kr=37811,Ir=37812,qr=37813,Br=37814,Xr=37815,Jr=37816,zr=37817,Hr=37818,Gr=37819,Kr=37820,Yr=37821,jr=36492,Zr=36494,Qr=36495,$r=36283,ta=36284,cs=36285,ea=36286,ki=2300,Gs=2301,Fs=2302,Da=2303,Wa=2400,ka=2401,Ia=2402,Il=3200,ho=0,ql=1,yn="",Me="srgb",Ii="srgb-linear",qi="linear",Yt="srgb",Os=7680,Bl=519,Xl=512,Jl=513,zl=514,na=515,Hl=516,Gl=517,ia=518,Kl=519,Yl=35044,fo="300 es",Ze=2e3,Bi=2001;jo={},yi=null;$l={[Ws]:ks,[Is]:Xs,[qs]:Js,[xi]:Bs,[ks]:Ws,[Xs]:Is,[Js]:qs,[Bs]:xi},on=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,Ks=180/Math.PI;So=class So{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};So.prototype.isVector2=!0;It=So,ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],g=r[a+1],v=r[a+2],A=r[a+3];if(f!==A||c!==u||l!==g||h!==v){let m=c*u+l*g+h*v+f*A;m<0&&(u=-u,g=-g,v=-v,A=-A,m=-m);let d=1-o;if(m<.9995){let _=Math.acos(m),E=Math.sin(_);d=Math.sin(d*_)/E,o=Math.sin(o*_)/E,c=c*d+u*o,l=l*d+g*o,h=h*d+v*o,f=f*d+A*o}else{c=c*d+u*o,l=l*d+g*o,h=h*d+v*o,f=f*d+A*o;let _=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=_,l*=_,h*=_,f*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],g=r[a+2],v=r[a+3];return t[e]=o*v+h*f+c*g-l*u,t[e+1]=c*v+h*u+l*f-o*g,t[e+2]=l*v+h*g+o*u-c*f,t[e+3]=h*v-o*f-c*u-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),g=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*g*v,this._y=l*g*f-u*h*v,this._z=l*h*v+u*g*f,this._w=l*h*f-u*g*v;break;case"YXZ":this._x=u*h*f+l*g*v,this._y=l*g*f-u*h*v,this._z=l*h*v-u*g*f,this._w=l*h*f+u*g*v;break;case"ZXY":this._x=u*h*f-l*g*v,this._y=l*g*f+u*h*v,this._z=l*h*v+u*g*f,this._w=l*h*f-u*g*v;break;case"ZYX":this._x=u*h*f-l*g*v,this._y=l*g*f+u*h*v,this._z=l*h*v-u*g*f,this._w=l*h*f+u*g*v;break;case"YZX":this._x=u*h*f+l*g*v,this._y=l*g*f+u*h*v,this._z=l*h*v-u*g*f,this._w=l*h*f-u*g*v;break;case"XZY":this._x=u*h*f-l*g*v,this._y=l*g*f-u*h*v,this._z=l*h*v+u*g*f,this._w=l*h*f+u*g*v;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>f){let g=2*Math.sqrt(1+n-o-f);this._w=(h-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>f){let g=2*Math.sqrt(1+o-n-f);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+f-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yo=class yo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yo.prototype.isVector3=!0;q=yo,va=new q,Zo=new ln,Ao=class Ao{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],g=n[5],v=n[8],A=s[0],m=s[3],d=s[6],_=s[1],E=s[4],y=s[7],b=s[2],M=s[5],P=s[8];return r[0]=a*A+o*_+c*b,r[3]=a*m+o*E+c*M,r[6]=a*d+o*y+c*P,r[1]=l*A+h*_+f*b,r[4]=l*m+h*E+f*M,r[7]=l*d+h*y+f*P,r[2]=u*A+g*_+v*b,r[5]=u*m+g*E+v*M,r[8]=u*d+g*y+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,g=l*r-a*c,v=e*f+n*u+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/v;return t[0]=f*A,t[1]=(s*l-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=u*A,t[4]=(h*e-s*c)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*c-l*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xa.makeScale(t,e)),this}rotate(t){return Gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return Gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ao.prototype.isMatrix3=!0;Nt=Ao,xa=new Nt,Qo=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt=Zc();Ys=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ii===void 0&&(ii=Si("canvas")),ii.width=t.width,ii.height=t.height;let s=ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Si("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qc=0,Ai=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};$c=0,ya=new q,Pe=class i extends on{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rn,s=rn,r=fe,a=Wn,o=ze,c=ke,l=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=us(),this.name="",this.source=new Ai(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==io)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Hs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Hs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=io;Pe.DEFAULT_ANISOTROPY=1;bo=class bo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],g=c[5],v=c[9],A=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-A)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+A)<.1&&Math.abs(v+m)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,y=(g+1)/2,b=(d+1)/2,M=(h+u)/4,P=(f+A)/4,S=(v+m)/4;return E>y&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=P/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(f-A)*(f-A)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-A)/_,this.z=(u-h)/_,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bo.prototype.isVector4=!0;oe=bo,js=class extends on{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Pe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ai(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends js{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xi=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Zs=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},gr=class gr{constructor(t,e,n,s,r,a,o,c,l,h,f,u,g,v,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,g,v,A,m)}set(t,e,n,s,r,a,o,c,l,h,f,u,g,v,A,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=g,d[7]=v,d[11]=A,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,g=a*f,v=o*h,A=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=g+v*l,e[5]=u-A*l,e[9]=-o*c,e[2]=A-u*l,e[6]=v+g*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,g=c*f,v=l*h,A=l*f;e[0]=u+A*o,e[4]=v*o-g,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=g*o-v,e[6]=A+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,g=c*f,v=l*h,A=l*f;e[0]=u-A*o,e[4]=-a*f,e[8]=v+g*o,e[1]=g+v*o,e[5]=a*h,e[9]=A-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,g=a*f,v=o*h,A=o*f;e[0]=c*h,e[4]=v*l-g,e[8]=u*l+A,e[1]=c*f,e[5]=A*l+u,e[9]=g*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,g=a*l,v=o*c,A=o*l;e[0]=c*h,e[4]=A-u*f,e[8]=v*f+g,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=g*f+v,e[10]=u-A*f}else if(t.order==="XZY"){let u=a*c,g=a*l,v=o*c,A=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+A,e[5]=a*h,e[9]=g*f-v,e[2]=v*f-g,e[6]=o*h,e[10]=A*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Mn.crossVectors(n,Fe),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Mn.crossVectors(n,Fe)),Mn.normalize(),gs.crossVectors(Fe,Mn),s[0]=Mn.x,s[4]=gs.x,s[8]=Fe.x,s[1]=Mn.y,s[5]=gs.y,s[9]=Fe.y,s[2]=Mn.z,s[6]=gs.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],g=n[13],v=n[2],A=n[6],m=n[10],d=n[14],_=n[3],E=n[7],y=n[11],b=n[15],M=s[0],P=s[4],S=s[8],w=s[12],C=s[1],R=s[5],O=s[9],J=s[13],V=s[2],I=s[6],Y=s[10],B=s[14],tt=s[3],z=s[7],Q=s[11],nt=s[15];return r[0]=a*M+o*C+c*V+l*tt,r[4]=a*P+o*R+c*I+l*z,r[8]=a*S+o*O+c*Y+l*Q,r[12]=a*w+o*J+c*B+l*nt,r[1]=h*M+f*C+u*V+g*tt,r[5]=h*P+f*R+u*I+g*z,r[9]=h*S+f*O+u*Y+g*Q,r[13]=h*w+f*J+u*B+g*nt,r[2]=v*M+A*C+m*V+d*tt,r[6]=v*P+A*R+m*I+d*z,r[10]=v*S+A*O+m*Y+d*Q,r[14]=v*w+A*J+m*B+d*nt,r[3]=_*M+E*C+y*V+b*tt,r[7]=_*P+E*R+y*I+b*z,r[11]=_*S+E*O+y*Y+b*Q,r[15]=_*w+E*J+y*B+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],g=t[14],v=t[3],A=t[7],m=t[11],d=t[15],_=c*g-l*u,E=o*g-l*f,y=o*u-c*f,b=a*g-l*h,M=a*u-c*h,P=a*f-o*h;return e*(A*_-m*E+d*y)-n*(v*_-m*b+d*M)+s*(v*E-A*b+d*P)-r*(v*y-A*M+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],g=t[11],v=t[12],A=t[13],m=t[14],d=t[15],_=e*o-n*a,E=e*c-s*a,y=e*l-r*a,b=n*c-s*o,M=n*l-r*o,P=s*l-r*c,S=h*A-f*v,w=h*m-u*v,C=h*d-g*v,R=f*m-u*A,O=f*d-g*A,J=u*d-g*m,V=_*J-E*O+y*R+b*C-M*w+P*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/V;return t[0]=(o*J-c*O+l*R)*I,t[1]=(s*O-n*J-r*R)*I,t[2]=(A*P-m*M+d*b)*I,t[3]=(u*M-f*P-g*b)*I,t[4]=(c*C-a*J-l*w)*I,t[5]=(e*J-s*C+r*w)*I,t[6]=(m*y-v*P-d*E)*I,t[7]=(h*P-u*y+g*E)*I,t[8]=(a*O-o*C+l*S)*I,t[9]=(n*C-e*O-r*S)*I,t[10]=(v*M-A*y+d*_)*I,t[11]=(f*y-h*M-g*_)*I,t[12]=(o*w-a*R-c*S)*I,t[13]=(e*R-n*w+s*S)*I,t[14]=(A*E-v*b-m*_)*I,t[15]=(h*b-f*E+u*_)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,g=r*h,v=r*f,A=a*h,m=a*f,d=o*f,_=c*l,E=c*h,y=c*f,b=n.x,M=n.y,P=n.z;return s[0]=(1-(A+d))*b,s[1]=(g+y)*b,s[2]=(v-E)*b,s[3]=0,s[4]=(g-y)*M,s[5]=(1-(u+d))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(v+E)*P,s[9]=(m-_)*P,s[10]=(1-(u+A))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=si.set(s[0],s[1],s[2]).length(),o=si.set(s[4],s[5],s[6]).length(),c=si.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ge.copy(this);let l=1/a,h=1/o,f=1/c;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=f,Ge.elements[9]*=f,Ge.elements[10]*=f,e.setFromRotationMatrix(Ge),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),g=(n+s)/(n-s),v,A;if(c)v=r/(a-r),A=a*r/(a-r);else if(o===Ze)v=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Bi)v=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ze,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),g=-(n+s)/(n-s),v,A;if(c)v=1/(a-r),A=a/(a-r);else if(o===Ze)v=-2/(a-r),A=-(a+r)/(a-r);else if(o===Bi)v=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gr.prototype.isMatrix4=!0;ce=gr,si=new q,Ge=new ce,tu=new q(0,0,0),eu=new q(1,1,1),Mn=new q,gs=new q,Fe=new q,tl=new ce,el=new ln,Nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return el.setFromEuler(this),this.setFromQuaternion(el,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nu=0,nl=new q,ri=new ln,pn=new ce,vs=new q,Fi=new q,iu=new q,su=new ln,il=new q(1,0,0),sl=new q(0,1,0),rl=new q(0,0,1),al={type:"added"},ru={type:"removed"},ai={type:"childadded",child:null},Aa={type:"childremoved",child:null},Je=class i extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Nn,n=new ln,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Nt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(il,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return nl.copy(t).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(il,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Fi,vs,this.up):pn.lookAt(vs,Fi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(pn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(al),ai.child=t,this.dispatchEvent(ai),ai.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(al),ai.child=t,this.dispatchEvent(ai),ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),g=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new q(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Hn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},au={type:"move"},bi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let A of t.hand.values()){let m=e.getJointPose(A,n),d=this._getHandJoint(l,A);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&u>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(au)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},xs={h:0,s:0,l:0};Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=jc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ba(a,r,t+1/3),this.g=ba(a,r,t),this.b=ba(a,r,t-1/3)}return kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return kt.workingToColorSpace(Te.copy(this),t),Math.round(qt(Te.r*255,0,255))*65536+Math.round(qt(Te.g*255,0,255))*256+Math.round(qt(Te.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Te.copy(this),e);let n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Me){kt.workingToColorSpace(Te.copy(this),t);let e=Te.r,n=Te.g,s=Te.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(xs);let n=ga(wn.h,xs.h,e),s=ga(wn.s,xs.s,e),r=ga(wn.l,xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new Jt;Jt.NAMES=tc;zi=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new q,mn=new q,Ta=new q,gn=new q,oi=new q,li=new q,ol=new q,Ma=new q,wa=new q,_a=new q,Pa=new oe,La=new oe,Ea=new oe,En=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),mn.subVectors(n,e),Ta.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(mn),c=Ke.dot(Ta),l=mn.dot(mn),h=mn.dot(Ta),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,g=(l*c-o*h)*u,v=(a*h-o*c)*u;return r.set(1-g-v,v,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pa.setScalar(0),La.setScalar(0),Ea.setScalar(0),Pa.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),mn.subVectors(t,e),Ke.cross(mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ke.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;oi.subVectors(s,n),li.subVectors(r,n),Ma.subVectors(t,n);let c=oi.dot(Ma),l=li.dot(Ma);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,s);let h=oi.dot(wa),f=li.dot(wa);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(oi,a);_a.subVectors(t,r);let g=oi.dot(_a),v=li.dot(_a);if(v>=0&&g<=v)return e.copy(r);let A=g*l-c*v;if(A<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(li,o);let m=h*v-g*f;if(m<=0&&f-h>=0&&g-v>=0)return ol.subVectors(r,s),o=(f-h)/(f-h+(g-v)),e.copy(s).addScaledVector(ol,o);let d=1/(m+A+u);return a=A*d,o=u*d,e.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Un=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),ys.subVectors(this.max,Oi),ci.subVectors(t.a,Oi),ui.subVectors(t.b,Oi),hi.subVectors(t.c,Oi),_n.subVectors(ui,ci),Pn.subVectors(hi,ui),Bn.subVectors(ci,hi);let e=[0,-_n.z,_n.y,0,-Pn.z,Pn.y,0,-Bn.z,Bn.y,_n.z,0,-_n.x,Pn.z,0,-Pn.x,Bn.z,0,-Bn.x,-_n.y,_n.x,0,-Pn.y,Pn.x,0,-Bn.y,Bn.x,0];return!Na(e,ci,ui,hi,ys)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,ci,ui,hi,ys))?!1:(As.crossVectors(_n,Pn),e=[As.x,As.y,As.z],Na(e,ci,ui,hi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new q,new q,new q,new q,new q,new q,new q,new q],Ye=new q,Ss=new Un,ci=new q,ui=new q,hi=new q,_n=new q,Pn=new q,Bn=new q,Oi=new q,ys=new q,As=new q,Xn=new q;de=new q,bs=new It,ou=0,Be=class extends on{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ou++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Gi=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Xe=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},lu=new Un,Di=new q,Ua=new q,Ti=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);let e=Di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(Ua)),this.expandByPoint(Di.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cu=0,qe=new ce,Ca=new Je,di=new q,Oe=new Un,Wi=new Un,xe=new q,cn=class i extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kc(t)?Gi:Hi)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Oe.min,Wi.min),Oe.expandByPoint(xe),xe.addVectors(Oe.max,Wi.max),Oe.expandByPoint(xe)):(Oe.expandByPoint(Wi.min),Oe.expandByPoint(Wi.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(t,l),xe.add(di)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new q,c[S]=new q;let l=new q,h=new q,f=new q,u=new It,g=new It,v=new It,A=new q,m=new q;function d(S,w,C){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,C),u.fromBufferAttribute(r,S),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),h.sub(l),f.sub(l),g.sub(u),v.sub(u);let R=1/(g.x*v.y-v.x*g.y);isFinite(R)&&(A.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(R),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(R),o[S].add(A),o[w].add(A),o[C].add(A),c[S].add(m),c[w].add(m),c[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,w=_.length;S<w;++S){let C=_[S],R=C.start,O=C.count;for(let J=R,V=R+O;J<V;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let E=new q,y=new q,b=new q,M=new q;function P(S){b.fromBufferAttribute(s,S),M.copy(b);let w=o[S];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(M,w);let R=y.dot(c[S])<0?-1:1;a.setXYZW(S,E.x,E.y,E.z,R)}for(let S=0,w=_.length;S<w;++S){let C=_[S],R=C.start,O=C.count;for(let J=R,V=R+O;J<V;J+=3)P(t.getX(J+0)),P(t.getX(J+1)),P(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,h=new q,f=new q;if(t)for(let u=0,g=t.count;u<g;u+=3){let v=t.getX(u+0),A=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,g=e.count;u<g;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),g=0,v=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?g=c[A]*o.data.stride+o.offset:g=c[A]*h;for(let d=0;d<h;d++)u[v++]=l[g++]}return new Be(u,h,f)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],g=t(u,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let g=l[f];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,g=f.length;u<g;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ra=new q,uu=new q,hu=new Nt,je=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ra.subVectors(n,e).cross(uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ra),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hu.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},du=0,Kn=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Pi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Ka,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xn=new q,Va=new q,Ts=new q,Ms=new q,Qs=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Va.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Ms.copy(this.origin).sub(Va);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ts),o=Ms.dot(this.direction),c=-Ms.dot(Ts),l=Ms.lengthSq(),h=Math.abs(1-a*a),f,u,g,v;if(h>0)if(f=a*c-o,u=a*o-c,v=r*h,f>=0)if(u>=-v)if(u<=v){let A=1/h;f*=A,u*=A,g=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*c)+l;else u<=-v?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),g=-f*f+u*(u+2*c)+l):u<=v?(f=0,u=Math.min(Math.max(-r,-c),r),g=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),g=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Va).addScaledVector(Ts,u),g}intersectSphere(t,e){if(t.radius<0)return null;xn.subVectors(t.center,this.origin);let n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,g=t.z-a.z,v=e.x-a.x,A=e.y-a.y,m=e.z-a.z,d=n.x-a.x,_=n.y-a.y,E=n.z-a.z,y=Math.abs(c),b=Math.abs(l),M=Math.abs(h),P,S,w,C,R,O,J,V,I,Y,B,tt;if(y>=b&&y>=M?(w=c,O=f,I=v,tt=d,c>=0?(P=l,S=h,C=u,R=g,J=A,V=m,Y=_,B=E):(P=h,S=l,C=g,R=u,J=m,V=A,Y=E,B=_)):b>=M?(w=l,O=u,I=A,tt=_,l>=0?(P=h,S=c,C=g,R=f,J=m,V=v,Y=E,B=d):(P=c,S=h,C=f,R=g,J=v,V=m,Y=d,B=E)):(w=h,O=g,I=m,tt=E,h>=0?(P=c,S=l,C=f,R=u,J=v,V=A,Y=d,B=_):(P=l,S=c,C=u,R=f,J=A,V=v,Y=_,B=d)),w===0)return null;let z=P/w,Q=S/w,nt=1/w,_t=C-z*O,Mt=R-Q*O,$t=J-z*I,Bt=V-Q*I,Ht=Y-z*tt,G=B-Q*tt,$=Ht*Bt-G*$t,vt=_t*G-Mt*Ht,Ut=$t*Mt-Bt*_t;if(s){if($<0||vt<0||Ut<0)return null}else if(($<0||vt<0||Ut<0)&&($>0||vt>0||Ut>0))return null;let mt=$+vt+Ut;if(mt===0)return null;let Ft=nt*($*O+vt*I+Ut*tt);return(mt>0?Ft<0:Ft>0)?null:this.at(Ft/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ki=class extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ll=new ce,Jn=new Qs,ws=new Ti,cl=new q,_s=new q,Ps=new q,Ls=new q,Fa=new q,Es=new q,ul=new q,Ns=new q,Ve=class extends Je{constructor(t=new cn,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Fa.fromBufferAttribute(f,t),a?Es.addScaledVector(Fa,h):Es.addScaledVector(Fa.sub(e),h))}e.add(Es)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(ws.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ws,cl)===null||Jn.origin.distanceToSquared(cl)>(t.far-t.near)**2))&&(ll.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(ll),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,A=u.length;v<A;v++){let m=u[v],d=a[m.materialIndex],_=Math.max(m.start,g.start),E=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=_,b=E;y<b;y+=3){let M=o.getX(y),P=o.getX(y+1),S=o.getX(y+2);s=Us(this,d,t,n,l,h,f,M,P,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let m=v,d=A;m<d;m+=3){let _=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Us(this,a,t,n,l,h,f,_,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,A=u.length;v<A;v++){let m=u[v],d=a[m.materialIndex],_=Math.max(m.start,g.start),E=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let y=_,b=E;y<b;y+=3){let M=y,P=y+1,S=y+2;s=Us(this,d,t,n,l,h,f,M,P,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,g.start),A=Math.min(c.count,g.start+g.count);for(let m=v,d=A;m<d;m+=3){let _=m,E=m+1,y=m+2;s=Us(this,a,t,n,l,h,f,_,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};$s=class extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Se,h=Se,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zn=new Ti,pu=new It(.5,.5),Cs=new q,Yi=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],g=r[7],v=r[8],A=r[9],m=r[10],d=r[11],_=r[12],E=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-a,g-h,d-v,b-_).normalize(),s[1].setComponents(l+a,g+h,d+v,b+_).normalize(),s[2].setComponents(l+o,g+f,d+A,b+E).normalize(),s[3].setComponents(l-o,g-f,d-A,b-E).normalize(),n)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,g-u,d-m,b-y).normalize();else if(s[4].setComponents(l-c,g-u,d-m,b-y).normalize(),e===Ze)s[5].setComponents(l+c,g+u,d+m,b+y).normalize();else if(e===Bi)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){zn.center.set(0,0,0);let e=pu.distanceTo(t.center);return zn.radius=.7071067811865476+e,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Cs.x=s.normal.x>0?t.max.x:t.min.x,Cs.y=s.normal.y>0?t.max.y:t.min.y,Cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ji=class extends Pe{constructor(t=[],e=Dn,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cn=class extends Pe{constructor(t,e,n=Qe,s,r,a,o=Se,c=Se,l,h=an,f=1){if(h!==an&&h!==kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ai(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tr=class extends Cn{constructor(t,e=Qe,n=Dn,s,r,a=Se,o=Se,c,l=an){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zi=class extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Mi=class i extends cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,g=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function v(A,m,d,_,E,y,b,M,P,S,w){let C=y/P,R=b/S,O=y/2,J=b/2,V=M/2,I=P+1,Y=S+1,B=0,tt=0,z=new q;for(let Q=0;Q<Y;Q++){let nt=Q*R-J;for(let _t=0;_t<I;_t++){let Mt=_t*C-O;z[A]=Mt*_,z[m]=nt*E,z[d]=V,l.push(z.x,z.y,z.z),z[A]=0,z[m]=0,z[d]=M>0?1:-1,h.push(z.x,z.y,z.z),f.push(_t/P),f.push(1-Q/S),B+=1}}for(let Q=0;Q<S;Q++)for(let nt=0;nt<P;nt++){let _t=u+nt+I*Q,Mt=u+nt+I*(Q+1),$t=u+(nt+1)+I*(Q+1),Bt=u+(nt+1)+I*Q;c.push(_t,Mt,Bt),c.push(Mt,$t,Bt),tt+=6}o.addGroup(g,tt,w),g+=tt,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Yn=class i extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,g=[],v=[],A=[],m=[];for(let d=0;d<h;d++){let _=d*u-a;for(let E=0;E<l;E++){let y=E*f-r;v.push(y,-_,0),A.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let E=_+l*d,y=_+l*(d+1),b=_+1+l*(d+1),M=_+1+l*d;g.push(E,y,M),g.push(y,b,M)}this.setIndex(g),this.setAttribute("position",new Xe(v,3)),this.setAttribute("normal",new Xe(A,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};ec={clone:$n,merge:we},gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$n(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},er=class extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nr=class extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ir=class extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Rn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wa,endingEnd:Wa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ka:r=t,o=2*e-n;break;case Ia:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ka:a=t,c=2*n-e;break;case Ia:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,g=this._weightNext,v=(n-e)/(s-e),A=v*v,m=A*v,d=-u*m+2*u*A-u*v,_=(1+u)*m+(-1.5-2*u)*A+(-.5+u)*v+1,E=(-1-g)*m+(1.5+g)*A+.5*v,y=g*m-g*A;for(let b=0;b!==o;++b)r[b]=d*a[h+b]+_*a[l+b]+E*a[c+b]+y*a[f+b];return r}},rr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},ar=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},or=class extends Rn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let v=(n-e)/(s-e),A=1-v;for(let m=0;m!==o;++m)r[m]=a[l+m]*A+a[c+m]*v;return r}let u=o*2,g=t-1;for(let v=0;v!==o;++v){let A=a[l+v],m=a[c+v],d=g*u+v*2,_=f[d],E=f[d+1],y=t*u+v*2,b=h[y],M=h[y+1],P=Su(n,e,_,b,s);r[v]=nc(P,A,E,M,m)}return r}};De=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fi(e,this.TimeBufferType),this.values=fi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fi(t.times,Array),values:fi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Oa(t.settings)&&(n.settings={inTangents:fi(t.settings.inTangents,Array),outTangents:fi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ar(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new or(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ki:e=this.InterpolantFactoryMethodDiscrete;break;case Gs:e=this.InterpolantFactoryMethodLinear;break;case Fs:e=this.InterpolantFactoryMethodSmooth;break;case Da:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ki;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Fs;case this.InterpolantFactoryMethodBezier:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Oa(this.settings)&&(dl(this.settings.inTangents,t),dl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Et("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Et("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Et("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Yc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Et("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,u=f-n,g=f+n;for(let v=0;v!==n;++v){let A=e[f+v];if(A!==e[u+v]||A!==e[g+v]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let g=0;g!==n;++g)e[u+g]=e[f+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Oa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};De.prototype.ValueTypeName="";De.prototype.TimeBufferType=Float32Array;De.prototype.ValueBufferType=Float32Array;De.prototype.DefaultInterpolation=Gs;Vn=class extends De{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ki;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;lr=class extends De{constructor(t,e,n,s){super(t,e,n,s)}};lr.prototype.ValueTypeName="color";cr=class extends De{constructor(t,e,n,s){super(t,e,n,s)}};cr.prototype.ValueTypeName="number";ur=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},Qi=class extends De{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ur(this.times,this.values,this.getValueSize(),t)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;Fn=class extends De{constructor(t,e,n){super(t,e,n)}};Fn.prototype.ValueTypeName="string";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=ki;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;hr=class extends De{constructor(t,e,n,s){super(t,e,n,s)}};hr.prototype.ValueTypeName="vector";Ds={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(fl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!fl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};dr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let g=l[f],v=l[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ic=new dr,wi=class{constructor(t){this.manager=t!==void 0?t:ic,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";pi=new WeakMap,fr=class extends wi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ds.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=pi.get(a);f===void 0&&(f=[],pi.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Si("img");function c(){h(),e&&e(this);let f=pi.get(this)||[];for(let u=0;u<f.length;u++){let g=f[u];g.onLoad&&g.onLoad(this)}pi.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Ds.remove(`image:${t}`);let u=pi.get(this)||[];for(let g=0;g<u.length;g++){let v=u[g];v.onError&&v.onError(f)}pi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ds.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}},$i=class extends wi{constructor(t){super(t)}load(t,e,n,s){let r=new Pe,a=new fr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Rs=new q,Vs=new ln,sn=new q,ts=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rs,Vs,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Vs,sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rs,Vs,sn),sn.x===1&&sn.y===1&&sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Vs,sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new q,pl=new It,ml=new It,Ce=class extends ts{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},jn=class extends ts{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mi=-90,gi=1,pr=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(mi,gi,t,e);s.layers=this.layers,this.add(s);let r=new Ce(mi,gi,t,e);r.layers=this.layers,this.add(r);let a=new Ce(mi,gi,t,e);a.layers=this.layers,this.add(a);let o=new Ce(mi,gi,t,e);o.layers=this.layers,this.add(o);let c=new Ce(mi,gi,t,e);c.layers=this.layers,this.add(c);let l=new Ce(mi,gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,g),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},mr=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},go="\\[\\]\\.:\\/",yu=new RegExp("["+go+"]","g"),vo="[^"+go+"]",Au="[^"+go.replace("\\.","")+"]",bu=/((?:WC+[\/:])*)/.source.replace("WC",vo),Tu=/(WCOD+)?/.source.replace("WCOD",Au),Mu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vo),wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vo),_u=new RegExp("^"+bu+Tu+Mu+wu+"$"),Pu=["material","materials","bones","map"],qa=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yu,"")}static parseTrackName(t){let e=_u.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=qa;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Mm=new Float32Array(1),To=class To{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};To.prototype.isMatrix2=!0;Ba=To;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function wc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nu(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<f.length;g++){let v=f[u],A=f[g];A.start<=v.start+v.count+1?v.count=Math.max(v.count,A.start+A.count-v.start):(++u,f[u]=A)}f.length=u+1;for(let g=0,v=f.length;g<v;g++){let A=f[g];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function ff(i,t,e,n,s,r){let a=new Jt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function g(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let y=_.backgroundBlurriness>0;E=t.get(E,y)}return E}function v(_){let E=!1,y=g(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(_,E){let y=g(E);y&&(y.isCubeTexture||y.mapping===ns)?(l===void 0&&(l=new Ve(new Mi(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:$n(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,M,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(df.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_c),l.material.toneMapped=kt.getTransfer(y.colorSpace)!==Yt,(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ve(new Yn(2,2),new Le({name:"BackgroundMaterial",uniforms:$n(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=kt.getTransfer(y.colorSpace)!==Yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,E){_.getRGB(sa,mo(i)),e.buffers.color.setClear(sa.r,sa.g,sa.b,E,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:v,addToRenderList:A,dispose:d}}function pf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(R,O,J,V,I){let Y=!1,B=f(R,V,J,O);r!==B&&(r=B,l(r.object)),Y=g(R,V,J,I),Y&&v(R,V,J,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(R,O,J,V),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function f(R,O,J,V){let I=V.wireframe===!0,Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);let B=R.isInstancedMesh===!0?R.id:0,tt=Y[B];tt===void 0&&(tt={},Y[B]=tt);let z=tt[J.id];z===void 0&&(z={},tt[J.id]=z);let Q=z[I];return Q===void 0&&(Q=u(c()),z[I]=Q),Q}function u(R){let O=[],J=[],V=[];for(let I=0;I<e;I++)O[I]=0,J[I]=0,V[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:V,object:R,attributes:{},index:null}}function g(R,O,J,V){let I=r.attributes,Y=O.attributes,B=0,tt=J.getAttributes();for(let z in tt)if(tt[z].location>=0){let nt=I[z],_t=Y[z];if(_t===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),nt===void 0||nt.attribute!==_t||_t&&nt.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==V}function v(R,O,J,V){let I={},Y=O.attributes,B=0,tt=J.getAttributes();for(let z in tt)if(tt[z].location>=0){let nt=Y[z];nt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let _t={};_t.attribute=nt,nt&&nt.data&&(_t.data=nt.data),I[z]=_t,B++}r.attributes=I,r.attributesNum=B,r.index=V}function A(){let R=r.newAttributes;for(let O=0,J=R.length;O<J;O++)R[O]=0}function m(R){d(R,0)}function d(R,O){let J=r.newAttributes,V=r.enabledAttributes,I=r.attributeDivisors;J[R]=1,V[R]===0&&(i.enableVertexAttribArray(R),V[R]=1),I[R]!==O&&(i.vertexAttribDivisor(R,O),I[R]=O)}function _(){let R=r.newAttributes,O=r.enabledAttributes;for(let J=0,V=O.length;J<V;J++)O[J]!==R[J]&&(i.disableVertexAttribArray(J),O[J]=0)}function E(R,O,J,V,I,Y,B){B===!0?i.vertexAttribIPointer(R,O,J,I,Y):i.vertexAttribPointer(R,O,J,V,I,Y)}function y(R,O,J,V){A();let I=V.attributes,Y=J.getAttributes(),B=O.defaultAttributeValues;for(let tt in Y){let z=Y[tt];if(z.location>=0){let Q=I[tt];if(Q===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){let nt=Q.normalized,_t=Q.itemSize,Mt=t.get(Q);if(Mt===void 0)continue;let $t=Mt.buffer,Bt=Mt.type,Ht=Mt.bytesPerElement,G=Bt===i.INT||Bt===i.UNSIGNED_INT||Q.gpuType===yr;if(Q.isInterleavedBufferAttribute){let $=Q.data,vt=$.stride,Ut=Q.offset;if($.isInstancedInterleavedBuffer){for(let mt=0;mt<z.locationSize;mt++)d(z.location+mt,$.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let mt=0;mt<z.locationSize;mt++)m(z.location+mt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let mt=0;mt<z.locationSize;mt++)E(z.location+mt,_t/z.locationSize,Bt,nt,vt*Ht,(Ut+_t/z.locationSize*mt)*Ht,G)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<z.locationSize;$++)d(z.location+$,Q.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<z.locationSize;$++)m(z.location+$);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let $=0;$<z.locationSize;$++)E(z.location+$,_t/z.locationSize,Bt,nt,_t*Ht,_t/z.locationSize*$*Ht,G)}}else if(B!==void 0){let nt=B[tt];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(z.location,nt);break;case 3:i.vertexAttrib3fv(z.location,nt);break;case 4:i.vertexAttrib4fv(z.location,nt);break;default:i.vertexAttrib1fv(z.location,nt)}}}}_()}function b(){w();for(let R in n){let O=n[R];for(let J in O){let V=O[J];for(let I in V){let Y=V[I];for(let B in Y)h(Y[B].object),delete Y[B];delete V[I]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let O=n[R.id];for(let J in O){let V=O[J];for(let I in V){let Y=V[I];for(let B in Y)h(Y[B].object),delete Y[B];delete V[I]}}delete n[R.id]}function P(R){for(let O in n){let J=n[O];for(let V in J){let I=J[V];if(I[R.id]===void 0)continue;let Y=I[R.id];for(let B in Y)h(Y[B].object),delete Y[B];delete I[R.id]}}}function S(R){for(let O in n){let J=n[O],V=R.isInstancedMesh===!0?R.id:0,I=J[V];if(I!==void 0){for(let Y in I){let B=I[Y];for(let tt in B)h(B[tt].object),delete B[tt];delete I[Y]}delete J[V],Object.keys(J).length===0&&delete n[O]}}}function w(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:m,disableUnusedAttributes:_}}function mf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let g=0;g<h;g++)u+=l[g];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ze&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let S=P===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ke&&P!==$e&&!S&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Lt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:v,maxTextureSize:A,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:M}}function vf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let g=f.length!==0||u||n!==0||s;return s=u,n=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,g){let v=f.clippingPlanes,A=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||v===null||v.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,E=_*4,y=d.clippingState||null;c.value=y,y=h(v,u,E,g);for(let b=0;b!==E;++b)y[b]=e[b];d.clippingState=y,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,g,v){let A=f!==null?f.length:0,m=null;if(A!==0){if(m=c.value,v!==!0||m===null){let d=g+A*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=g;E!==A;++E,y+=4)a.copy(f[E]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}function bf(i){let t=[],e=[],n=i,s=i-Ui+1+xf;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,g=3,v=new Float32Array(g*u*f),A=new Float32Array(g*u*f);for(let d=0;d<f;d++){let _=d%3*2/3-1,E=d>2?0:-1,y=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];v.set(y,g*u*d);for(let b=0;b<u;b++){let M=h[b*2]*2-1,P=h[b*2+1]*2-1;d===0?ti.set(1,P,M):d===1?ti.set(-M,1,-P):d===2?ti.set(-M,P,1):d===3?ti.set(-1,P,-M):d===4?ti.set(-M,-1,P):ti.set(M,P,-1),ti.toArray(A,(d*u+b)*g)}}let m=new cn;m.setAttribute("position",new Be(v,g)),m.setAttribute("outputDirection",new Be(A,g)),e.push(new Ve(m,null)),n>Ui&&n--}return{lodMeshes:e,sizeLods:t}}function rc(i,t,e){let n=new Re(i,t,e);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Tf(i,t,e){return new Le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Mf(i,t,e){return new Le({name:"SphericalGaussianBlur",defines:{SAMPLES:Sf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ac(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function oc(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){let g=u.mapping;if(g===vr||g===xr)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let A=new oa(v.height);return A.fromEquirectangularTexture(i,u),t.set(u,A),u.addEventListener("dispose",l),o(A.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let g=u.mapping,v=g===vr||g===xr,A=g===Dn||g===Qn;if(v||A){let m=e.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new aa(i)),m=v?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return v&&_&&_.height>0||A&&_&&c(_)?(n===null&&(n=new aa(i)),m=v?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,g){return g===vr?u.mapping=Dn:g===xr&&(u.mapping=Qn),u}function c(u){let g=0,v=6;for(let A=0;A<v;A++)u[A]!==void 0&&g++;return g===v}function l(u){let g=u.target;g.removeEventListener("dispose",l);let v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function _f(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gn("WebGLRenderer: "+n+" extension not supported."),s}}}function Pf(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete s[u.id];let g=r.get(u);g&&(t.remove(g),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER)}function l(f){let u=[],g=f.index,v=f.attributes.position,A=0;if(v===void 0)return;if(g!==null){let _=g.array;A=g.version;for(let E=0,y=_.length;E<y;E+=3){let b=_[E+0],M=_[E+1],P=_[E+2];u.push(b,M,M,P,P,b)}}else{let _=v.array;A=v.version;for(let E=0,y=_.length/3-1;E<y;E+=3){let b=E+0,M=E+1,P=E+2;u.push(b,M,M,P,P,b)}}let m=new(v.count>=65535?Gi:Hi)(u,1);m.version=A;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let g=f.index;g!==null&&u.version<g.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Lf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*a,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let A=0;for(let m=0;m<g;m++)A+=u[m];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ef(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Et("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nf(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;g===!0&&(E=1),v===!0&&(E=2),A===!0&&(E=3);let y=o.attributes.position.count*E,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*b*4*f),P=new Xi(M,y,b,f);P.type=$e,P.needsUpdate=!0;let S=E*4;for(let C=0;C<f;C++){let R=m[C],O=d[C],J=_[C],V=y*b*4*C;for(let I=0;I<R.count;I++){let Y=I*S;g===!0&&(s.fromBufferAttribute(R,I),M[V+Y+0]=s.x,M[V+Y+1]=s.y,M[V+Y+2]=s.z,M[V+Y+3]=0),v===!0&&(s.fromBufferAttribute(O,I),M[V+Y+4]=s.x,M[V+Y+5]=s.y,M[V+Y+6]=s.z,M[V+Y+7]=0),A===!0&&(s.fromBufferAttribute(J,I),M[V+Y+8]=s.x,M[V+Y+9]=s.y,M[V+Y+10]=s.z,M[V+Y+11]=J.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new It(y,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<l.length;A++)g+=l[A];let v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Uf(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function Rf(i,t,e,n,s,r){let a=new Re(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new cn;l.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let h=new er({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ve(l,h),u=new jn(-1,1,1,-1,0,1),g=null,v=null,A=!1,m,d=null,_=[],E=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),c!==null&&c.setSize(y,b);for(let M=0;M<_.length;M++){let P=_[M];P.setSize&&P.setSize(y,b)}},this.setEffects=function(y){_=y,E=_.length>0&&_[0].isRenderPass===!0;let b=a.width,M=a.height;_.length>0&&o===null&&(o=new Re(b,M,{type:tn,depthBuffer:!1,stencilBuffer:!1}),c=new Re(b,M,{type:tn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<_.length;P++){let S=_[P];S.setSize&&S.setSize(b,M)}},this.begin=function(y,b){if(A||y.toneMapping===We&&_.length===0)return!1;if(d=b,b!==null){let M=b.width,P=b.height;(a.width!==M||a.height!==P)&&this.setSize(M,P)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=We,!0},this.hasRenderPass=function(){return E},this.end=function(y,b){y.toneMapping=m,A=!0;let M=a,P=o;for(let S=0;S<_.length;S++){let w=_[S];w.enabled!==!1&&(w.render(y,P,M,b),w.needsSwap!==!1&&(M=P,P=P===o?c:o))}if(g!==y.outputColorSpace||v!==y.toneMapping){g=y.outputColorSpace,v=y.toneMapping,h.defines={},kt.getTransfer(g)===Yt&&(h.defines.SRGB_TRANSFER="");let S=Cf[v];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(d),y.render(f,u),d=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}function Ri(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=cc[t];e===void 0&&(e=new Int32Array(t),cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Wf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ge(e,n)}}function kf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),ge(e,n)}}function If(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),ge(e,n)}}function qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Yf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=e.isReversedDepthBuffer()?ia:na,r=Uo):r=Pc,e.setTexture2D(t||r,s)}function jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ec,s)}function Zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nc,s)}function Qf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lc,s)}function $f(i){switch(i){case 5126:return Vf;case 35664:return Ff;case 35665:return Of;case 35666:return Df;case 35674:return Wf;case 35675:return kf;case 35676:return If;case 5124:case 35670:return qf;case 35667:case 35671:return Bf;case 35668:case 35672:return Xf;case 35669:case 35673:return Jf;case 5125:return zf;case 36294:return Hf;case 36295:return Gf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Qf}}function tp(i,t){i.uniform1fv(this.addr,t)}function ep(i,t){let e=Ri(t,this.size,2);i.uniform2fv(this.addr,e)}function np(i,t){let e=Ri(t,this.size,3);i.uniform3fv(this.addr,e)}function ip(i,t){let e=Ri(t,this.size,4);i.uniform4fv(this.addr,e)}function sp(i,t){let e=Ri(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rp(i,t){let e=Ri(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ap(i,t){let e=Ri(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function op(i,t){i.uniform1iv(this.addr,t)}function lp(i,t){i.uniform2iv(this.addr,t)}function cp(i,t){i.uniform3iv(this.addr,t)}function up(i,t){i.uniform4iv(this.addr,t)}function hp(i,t){i.uniform1uiv(this.addr,t)}function dp(i,t){i.uniform2uiv(this.addr,t)}function fp(i,t){i.uniform3uiv(this.addr,t)}function pp(i,t){i.uniform4uiv(this.addr,t)}function mp(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uo:a=Pc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function gp(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ec,r[a])}function vp(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Nc,r[a])}function xp(i,t,e){let n=this.cache,s=t.length,r=ua(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Lc,r[a])}function Sp(i){switch(i){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}function fc(i,t){i.seq.push(t),i.map[t.id]=t}function yp(i,t,e){let n=i.name,s=n.length;for(Eo.lastIndex=0;;){let r=Eo.exec(n),a=Eo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fc(e,l===void 0?new Co(o,i,t):new Ro(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Vo(o),fc(e,f)),e=f}}}function pc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Tp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mp(i){kt._getMatrix(mc,kt.workingColorSpace,i);let t=`mat3( ${mc.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case qi:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Tp(i.getShaderSource(t),o)}else return r}function wp(i,t){let e=Mp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pp(i,t){let e=_p[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lp(){kt.getLuminanceCoefficients(ra);let i=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Np(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Up(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function fs(i){return i!==""}function vc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Fo(i){return i.replace(Cp,Vp)}function Vp(i,t){let e=Vt[t];if(e===void 0){let n=Rp.get(t);if(n!==void 0)e=Vt[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fo(e)}function Sc(i){return i.replace(Fp,Op)}function Op(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wp(i){return Dp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Ip(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":kp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function Bp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Jp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xp[i.combine]||"ENVMAP_BLENDING_NONE"}function zp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Wp(e),l=Ip(e),h=Bp(e),f=Jp(e),u=zp(e),g=Ep(e),v=Np(r),A=s.createProgram(),m,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(m=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==We?"#define TONE_MAPPING":"",e.toneMapping!==We?Vt.tonemapping_pars_fragment:"",e.toneMapping!==We?Pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,wp("linearToOutputTexel",e.outputColorSpace),Lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Fo(a),a=vc(a,e),a=xc(a,e),o=Fo(o),o=vc(o,e),o=xc(o,e),a=Sc(a),o=Sc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=_+m+a,y=_+d+o,b=pc(s,s.VERTEX_SHADER,E),M=pc(s,s.FRAGMENT_SHADER,y);s.attachShader(A,b),s.attachShader(A,M),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function P(R){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(A)||"",J=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(M)||"",I=O.trim(),Y=J.trim(),B=V.trim(),tt=!0,z=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,b,M);else{let Q=gc(s,b,"vertex"),nt=gc(s,M,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Q+`
`+nt)}else I!==""?Lt("WebGLProgram: Program Info Log:",I):(Y===""||B==="")&&(z=!1);z&&(R.diagnostics={runnable:tt,programLog:I,vertexShader:{log:Y,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(b),s.deleteShader(M),S=new Ci(s,A),w=Up(s,A)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,Ap)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bp++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=M,this}function Kp(i){return i===In||i===ls||i===cs}function Yp(i,t,e,n,s,r){let a=new Ji,o=new Oo,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function A(S,w,C,R,O,J){let V=R.fog,I=O.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?R.environment:null,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,tt=t.get(S.envMap||Y,B),z=tt&&tt.mapping===ns?tt.image.height:null,Q=g[S.type];S.precision!==null&&(u=n.getMaxPrecision(S.precision),u!==S.precision&&Lt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let nt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,_t=nt!==void 0?nt.length:0,Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let $t,Bt,Ht,G;if(Q){let ee=fn[Q];$t=ee.vertexShader,Bt=ee.fragmentShader}else{$t=S.vertexShader,Bt=S.fragmentShader;let ee=o.getVertexShaderStage(S),Gt=o.getFragmentShaderStage(S);o.update(S,ee,Gt),Ht=ee.id,G=Gt.id}let $=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,Ft=!!S.map,pe=!!S.matcap,Ot=!!tt,zt=!!S.aoMap,te=!!S.lightMap,Wt=!!S.bumpMap&&S.wireframe===!1,re=!!S.normalMap,ve=!!S.displacementMap,Ne=!!S.emissiveMap,ae=!!S.metalnessMap,ue=!!S.roughnessMap,U=S.anisotropy>0,ye=S.clearcoat>0,jt=S.dispersion>0,T=S.retroreflectivity>0,p=S.iridescence>0,F=S.sheen>0,k=S.transmission>0,H=U&&!!S.anisotropyMap,it=ye&&!!S.clearcoatMap,st=ye&&!!S.clearcoatNormalMap,K=ye&&!!S.clearcoatRoughnessMap,Z=p&&!!S.iridescenceMap,rt=p&&!!S.iridescenceThicknessMap,bt=F&&!!S.sheenColorMap,ct=F&&!!S.sheenRoughnessMap,at=!!S.specularMap,Tt=!!S.specularColorMap,Pt=!!S.specularIntensityMap,Ct=k&&!!S.transmissionMap,N=k&&!!S.thicknessMap,ot=!!S.gradientMap,j=!!S.alphaMap,lt=S.alphaTest>0,ft=!!S.alphaHash,et=!!S.extensions,wt=We;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(wt=i.toneMapping);let yt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Bt,defines:S.defines,customVertexShaderID:Ht,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ft,matcap:pe,envMap:Ot,envMapMode:Ot&&tt.mapping,envMapCubeUVHeight:z,aoMap:zt,lightMap:te,bumpMap:Wt,normalMap:re,displacementMap:ve,emissiveMap:Ne,normalMapObjectSpace:re&&S.normalMapType===ql,normalMapTangentSpace:re&&S.normalMapType===ho,packedNormalMap:re&&S.normalMapType===ho&&Kp(S.normalMap.format),metalnessMap:ae,roughnessMap:ue,anisotropy:U,anisotropyMap:H,clearcoat:ye,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:K,dispersion:jt,retroreflection:T,iridescence:p,iridescenceMap:Z,iridescenceThicknessMap:rt,sheen:F,sheenColorMap:bt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:Tt,specularIntensityMap:Pt,transmission:k,transmissionMap:Ct,thicknessMap:N,gradientMap:ot,opaque:S.transparent===!1&&S.blending===Pi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:ft,combine:S.combine,mapUv:Ft&&v(S.map.channel),aoMapUv:zt&&v(S.aoMap.channel),lightMapUv:te&&v(S.lightMap.channel),bumpMapUv:Wt&&v(S.bumpMap.channel),normalMapUv:re&&v(S.normalMap.channel),displacementMapUv:ve&&v(S.displacementMap.channel),emissiveMapUv:Ne&&v(S.emissiveMap.channel),metalnessMapUv:ae&&v(S.metalnessMap.channel),roughnessMapUv:ue&&v(S.roughnessMap.channel),anisotropyMapUv:H&&v(S.anisotropyMap.channel),clearcoatMapUv:it&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&v(S.sheenRoughnessMap.channel),specularMapUv:at&&v(S.specularMap.channel),specularColorMapUv:Tt&&v(S.specularColorMap.channel),specularIntensityMapUv:Pt&&v(S.specularIntensityMap.channel),transmissionMapUv:Ct&&v(S.transmissionMap.channel),thicknessMapUv:N&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(re||U),vertexNormals:!!I.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(Ft||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||I.attributes.normal===void 0&&re===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Mt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&kt.getTransfer(S.map.colorSpace)===Yt,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&kt.getTransfer(S.emissiveMap.colorSpace)===Yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Ee,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:et&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&S.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)w.push(C),w.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(d(w,S),_(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function d(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numSunLights),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numSunLightShadows),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function E(S){let w=g[S.type],C;if(w){let R=fn[w];C=ec.clone(R.uniforms)}else C=S.uniforms;return C}function y(S,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Hp(i,w,S,s),l.push(C),h.set(w,C)),C}function b(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),h.delete(S.cacheKey),S.destroy()}}function M(S){o.remove(S)}function P(){o.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:l,dispose:P}}function jp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,v,A,m,d){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:g,material:v,materialVariant:a(u),groupOrder:A,renderOrder:u.renderOrder,z:m,group:d},i[t]=_):(_.id=u.id,_.object=u,_.geometry=g,_.material=v,_.materialVariant=a(u),_.groupOrder=A,_.renderOrder=u.renderOrder,_.z=m,_.group=d),t++,_}function c(u,g,v,A,m,d,_){_.reversedDepth===!0&&(m=-m);let E=o(u,g,v,A,m,d);v.transmission>0?n.push(E):v.transparent===!0?s.push(E):e.push(E)}function l(u,g,v,A,m,d){let _=o(u,g,v,A,m,d);v.transmission>0?n.unshift(_):v.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,g){e.length>1&&e.sort(u||Zp),n.length>1&&n.sort(g||Ac),s.length>1&&s.sort(g||Ac)}function f(){for(let u=t,g=i.length;u<g;u++){let v=i[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Qp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bc,i.set(n,[a])):s>=r.length?(a=new bc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $p(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Jt};break;case"SpotLight":e={position:new q,direction:new q,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function tm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function im(i){let t=new $p,e=tm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new ce,a=new ce;function o(l){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,v=0,A=0,m=0,d=0,_=0,E=0,y=0,b=0,M=0,P=0,S=0,w=0,C=0;l.sort(nm);for(let O=0,J=l.length;O<J;O++){let V=l[O],I=V.color,Y=V.intensity,B=V.distance,tt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===In?tt=V.shadow.map.texture:tt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)h+=I.r*Y,f+=I.g*Y,u+=I.b*Y;else if(V.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(V.sh.coefficients[z],Y);C++}else if(V.isSunLight){let z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Q=V.shadow,nt=e.get(V);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=nt,n.sunShadowMap[v]=tt;let _t=Q.getViewportCount();for(let Mt=0;Mt<_t;Mt++)n.sunShadowMatrix[A+Mt]=Q.getMatrix(Mt),n.sunShadowCascade[A+Mt]=Q._cascadeData[Mt];A+=_t,v++}n.sun[g]=z,g++}else if(V.isDirectionalLight){let z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Q=V.shadow,nt=e.get(V);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=V.shadow.matrix,b++}n.directional[m]=z,m++}else if(V.isSpotLight){let z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(I).multiplyScalar(Y),z.distance=B,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,n.spot[_]=z;let Q=V.shadow;if(V.map&&(n.spotLightMap[S]=V.map,S++,Q.updateMatrices(V),V.castShadow&&w++),n.spotLightMatrix[_]=Q.matrix,V.castShadow){let nt=e.get(V);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[_]=nt,n.spotShadowMap[_]=tt,P++}_++}else if(V.isRectAreaLight){let z=t.get(V);z.color.copy(I).multiplyScalar(Y),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),n.rectArea[E]=z,E++}else if(V.isPointLight){let z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){let Q=V.shadow,nt=e.get(V);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[d]=nt,n.pointShadowMap[d]=tt,n.pointShadowMatrix[d]=V.shadow.matrix,M++}n.point[d]=z,d++}else if(V.isHemisphereLight){let z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(Y),z.groundColor.copy(V.groundColor).multiplyScalar(Y),n.hemi[y]=z,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.sunLength!==g||R.directionalLength!==m||R.pointLength!==d||R.spotLength!==_||R.rectAreaLength!==E||R.hemiLength!==y||R.numSunShadows!==v||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==P||R.numSpotMaps!==S||R.numLightProbes!==C)&&(n.sun.length=g,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=d,n.hemi.length=y,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.sunLength=g,R.directionalLength=m,R.pointLength=d,R.spotLength=_,R.rectAreaLength=E,R.hemiLength=y,R.numSunShadows=v,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=P,R.numSpotMaps=S,R.numLightProbes=C,n.version=em++)}function c(l,h){let f=0,u=0,g=0,v=0,A=0,m=0,d=h.matrixWorldInverse;for(let _=0,E=l.length;_<E;_++){let y=l[_];if(y.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(y.isSpotLight){let b=n.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),v++}else if(y.isRectAreaLight){let b=n.rectArea[A];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),A++}else if(y.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function Tc(i){let t=new im(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function sm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Tc(i),t.set(s,[o])):r>=a.length?(o=new Tc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function cm(i,t,e){let n=new Yi,s=new It,r=new It,a=new oe,o=new nr,c=new ir,l={},h=e.maxTextureSize,f={[On]:Ee,[Ee]:On,[un]:un},u=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:rm,fragmentShader:am}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let v=new cn;v.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Ve(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let d=this.type;this.render=function(M,P,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===xl&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(hn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let J=d!==this.type;J&&P.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(I=>I.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,I=M.length;V<I;V++){let Y=M[V],B=Y.shadow;if(B===void 0){Lt("WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let tt=B.getFrameExtents();s.multiply(tt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,B.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||J===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_i){if(Y.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Re(s.x,s.y,{format:In,type:tn,minFilter:fe,magFilter:fe,generateMipmaps:!1}),B.map.texture.name=Y.name+".shadowMap",B.map.depthTexture=new Cn(s.x,s.y,$e),B.map.depthTexture.name=Y.name+".shadowMapDepth",B.map.depthTexture.format=an,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Se,B.map.depthTexture.magFilter=Se}else Y.isPointLight?(B.map=new oa(s.x),B.map.depthTexture=new tr(s.x,Qe)):(B.map=new Re(s.x,s.y),B.map.depthTexture=new Cn(s.x,s.y,Qe)),B.map.depthTexture.name=Y.name+".shadowMap",B.map.depthTexture.format=an,this.type===es?(B.map.depthTexture.compareFunction=z?ia:na,B.map.depthTexture.minFilter=fe,B.map.depthTexture.magFilter=fe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Se,B.map.depthTexture.magFilter=Se);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();Y.isPointLight!==!0&&B.updateMatrices(Y,S);for(let nt=0;nt<Q;nt++){let _t=B.getCamera(nt);if(Y.isPointLight){let Mt=B.camera,$t=B.matrix,Bt=Y.distance||Mt.far;Bt!==Mt.far&&(Mt.far=Bt,Mt.updateProjectionMatrix()),ds.setFromMatrixPosition(Y.matrixWorld),Mt.position.copy(ds),No.copy(Mt.position),No.add(om[nt]),Mt.up.copy(lm[nt]),Mt.lookAt(No),Mt.updateMatrixWorld(),$t.makeTranslation(-ds.x,-ds.y,-ds.z),Mc.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Mc,Mt.coordinateSystem,Mt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(B.map),i.clear());let Mt=B.getViewport(nt);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),O.viewport(a)}n=B.getFrustum(nt),y(P,S,_t,Y,this.type)}B.isPointLightShadow!==!0&&this.type===_i&&_(B,S),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,R)};function _(M,P){let S=t.update(A);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null?M.mapPass=new Re(s.x,s.y,{format:In,type:tn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(P,null,S,u,A,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value.set(M.map.width,M.map.height),g.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(P,null,S,g,A,null)}function E(M,P,S,w){let C=null,R=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)C=R;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=C.uuid,J=P.uuid,V=l[O];V===void 0&&(V={},l[O]=V);let I=V[J];I===void 0&&(I=C.clone(),V[J]=I,P.addEventListener("dispose",b)),C=I}if(C.visible=P.visible,C.wireframe=P.wireframe,w===_i?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:f[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=S}return C}function y(M,P,S,w,C){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===_i)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let J=t.update(M),V=M.material;if(Array.isArray(V)){let I=J.groups;for(let Y=0,B=I.length;Y<B;Y++){let tt=I[Y],z=V[tt.materialIndex];if(z&&z.visible){let Q=E(M,z,w,C);M.onBeforeShadow(i,M,P,S,J,Q,tt),i.renderBufferDirect(S,null,J,Q,M,tt),M.onAfterShadow(i,M,P,S,J,Q,tt)}}}else if(V.visible){let I=E(M,V,w,C);M.onBeforeShadow(i,M,P,S,J,I,null),i.renderBufferDirect(S,null,J,I,M,null),M.onAfterShadow(i,M,P,S,J,I,null)}}let O=M.children;for(let J=0,V=O.length;J<V;J++)y(O[J],P,S,w,C)}function b(M){M.target.removeEventListener("dispose",b);for(let S in l){let w=l[S],C=M.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function um(i,t){function e(){let N=!1,ot=new oe,j=null,lt=new oe(0,0,0,0);return{setMask:function(ft){j!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),j=ft)},setLocked:function(ft){N=ft},setClear:function(ft,et,wt,yt,ee){ee===!0&&(ft*=yt,et*=yt,wt*=yt),ot.set(ft,et,wt,yt),lt.equals(ot)===!1&&(i.clearColor(ft,et,wt,yt),lt.copy(ot))},reset:function(){N=!1,j=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,j=null,lt=null,ft=null;return{setReversed:function(et){if(ot!==et){let wt=t.get("EXT_clip_control");et?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ot=et;let yt=ft;ft=null,this.setClear(yt)}},getReversed:function(){return ot},setTest:function(et){et?$(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(et){j!==et&&!N&&(i.depthMask(et),j=et)},setFunc:function(et){if(ot&&(et=$l[et]),lt!==et){switch(et){case Ws:i.depthFunc(i.NEVER);break;case ks:i.depthFunc(i.ALWAYS);break;case Is:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case qs:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case Xs:i.depthFunc(i.GREATER);break;case Js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=et}},setLocked:function(et){N=et},setClear:function(et){ft!==et&&(ft=et,ot&&(et=1-et),i.clearDepth(et))},reset:function(){N=!1,j=null,lt=null,ft=null,ot=!1}}}function s(){let N=!1,ot=null,j=null,lt=null,ft=null,et=null,wt=null,yt=null,ee=null;return{setTest:function(Gt){N||(Gt?$(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Gt){ot!==Gt&&!N&&(i.stencilMask(Gt),ot=Gt)},setFunc:function(Gt,He,en){(j!==Gt||lt!==He||ft!==en)&&(i.stencilFunc(Gt,He,en),j=Gt,lt=He,ft=en)},setOp:function(Gt,He,en){(et!==Gt||wt!==He||yt!==en)&&(i.stencilOp(Gt,He,en),et=Gt,wt=He,yt=en)},setLocked:function(Gt){N=Gt},setClear:function(Gt){ee!==Gt&&(i.clearStencil(Gt),ee=Gt)},reset:function(){N=!1,ot=null,j=null,lt=null,ft=null,et=null,wt=null,yt=null,ee=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},u={},g=new WeakMap,v=[],A=null,m=!1,d=null,_=null,E=null,y=null,b=null,M=null,P=null,S=new Jt(0,0,0),w=0,C=!1,R=null,O=null,J=null,V=null,I=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,tt=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=tt>=2);let Q=null,nt={},_t=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),$t=new oe().fromArray(_t),Bt=new oe().fromArray(Mt);function Ht(N,ot,j,lt){let ft=new Uint8Array(4),et=i.createTexture();i.bindTexture(N,et),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<j;wt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return et}let G={};G[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(xi),Wt(!1),re(Xa),$(i.CULL_FACE),zt(hn);function $(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ut(N,ot){return u[N]!==ot?(i.bindFramebuffer(N,ot),u[N]=ot,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(N,ot){let j=v,lt=!1;if(N){j=g.get(ot),j===void 0&&(j=[],g.set(ot,j));let ft=N.textures;if(j.length!==ft.length||j[0]!==i.COLOR_ATTACHMENT0){for(let et=0,wt=ft.length;et<wt;et++)j[et]=i.COLOR_ATTACHMENT0+et;j.length=ft.length,lt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,lt=!0);lt&&i.drawBuffers(j)}function Ft(N){return A!==N?(i.useProgram(N),A=N,!0):!1}let pe={[Zn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[Al]:i.FUNC_REVERSE_SUBTRACT};pe[bl]=i.MIN,pe[Tl]=i.MAX;let Ot={[Ml]:i.ZERO,[wl]:i.ONE,[_l]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Cl]:i.SRC_ALPHA_SATURATE,[Nl]:i.DST_COLOR,[Ll]:i.DST_ALPHA,[Pl]:i.ONE_MINUS_SRC_COLOR,[Ka]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[Rl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(N,ot,j,lt,ft,et,wt,yt,ee,Gt){if(N===hn){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),N!==Sl){if(N!==d||Gt!==C){if((_!==Zn||b!==Zn)&&(i.blendEquation(i.FUNC_ADD),_=Zn,b=Zn),Gt)switch(N){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Et("WebGLState: Invalid blending: ",N);break}else switch(N){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case za:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ha:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",N);break}E=null,y=null,M=null,P=null,S.set(0,0,0),w=0,d=N,C=Gt}return}ft=ft||ot,et=et||j,wt=wt||lt,(ot!==_||ft!==b)&&(i.blendEquationSeparate(pe[ot],pe[ft]),_=ot,b=ft),(j!==E||lt!==y||et!==M||wt!==P)&&(i.blendFuncSeparate(Ot[j],Ot[lt],Ot[et],Ot[wt]),E=j,y=lt,M=et,P=wt),(yt.equals(S)===!1||ee!==w)&&(i.blendColor(yt.r,yt.g,yt.b,ee),S.copy(yt),w=ee),d=N,C=!1}function te(N,ot){N.side===un?vt(i.CULL_FACE):$(i.CULL_FACE);let j=N.side===Ee;ot&&(j=!j),Wt(j),N.blending===Pi&&N.transparent===!1?zt(hn):zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let lt=N.stencilWrite;o.setTest(lt),lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function re(N){N!==gl?($(i.CULL_FACE),N!==O&&(N===Xa?i.cullFace(i.BACK):N===vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),O=N}function ve(N){N!==J&&(B&&i.lineWidth(N),J=N)}function Ne(N,ot,j){N?($(i.POLYGON_OFFSET_FILL),(V!==ot||I!==j)&&(V=ot,I=j,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,j))):vt(i.POLYGON_OFFSET_FILL)}function ae(N){N?$(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function ue(N){N===void 0&&(N=i.TEXTURE0+Y-1),Q!==N&&(i.activeTexture(N),Q=N)}function U(N,ot,j){j===void 0&&(Q===null?j=i.TEXTURE0+Y-1:j=Q);let lt=nt[j];lt===void 0&&(lt={type:void 0,texture:void 0},nt[j]=lt),(lt.type!==N||lt.texture!==ot)&&(Q!==j&&(i.activeTexture(j),Q=j),i.bindTexture(N,ot||G[N]),lt.type=N,lt.texture=ot)}function ye(){let N=nt[Q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function p(){try{i.texSubImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function F(){try{i.texSubImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function it(){try{i.texStorage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function st(){try{i.texStorage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){Et("WebGLState:",N)}}function Z(){try{i.texImage3D(...arguments)}catch(N){Et("WebGLState:",N)}}function rt(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function bt(N,ot){f[N]!==ot&&(i.pixelStorei(N,ot),f[N]=ot)}function ct(N){$t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function at(N){Bt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Bt.copy(N))}function Tt(N,ot){let j=l.get(ot);j===void 0&&(j=new WeakMap,l.set(ot,j));let lt=j.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(ot,N.name),j.set(N,lt))}function Pt(N,ot){let lt=l.get(ot).get(N);c.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,N.__bindingPointIndex),c.set(ot,lt))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,nt={},u={},g=new WeakMap,v=[],A=null,m=!1,d=null,_=null,E=null,y=null,b=null,M=null,P=null,S=new Jt(0,0,0),w=0,C=!1,R=null,O=null,J=null,V=null,I=null,$t.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:vt,bindFramebuffer:Ut,drawBuffers:mt,useProgram:Ft,setBlending:zt,setMaterial:te,setFlipSided:Wt,setCullFace:re,setLineWidth:ve,setPolygonOffset:Ne,setScissorTest:ae,activeTexture:ue,bindTexture:U,unbindTexture:ye,compressedTexImage2D:jt,compressedTexImage3D:T,texImage2D:K,texImage3D:Z,pixelStorei:bt,getParameter:rt,updateUBOMapping:Tt,uniformBlockBinding:Pt,texStorage2D:it,texStorage3D:st,texSubImage2D:p,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:H,scissor:ct,viewport:at,reset:Ct}}function hm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap,f=new Set,u,g=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(T,p){return v?new OffscreenCanvas(T,p):Si("canvas")}function m(T,p,F){let k=1,H=jt(T);if((H.width>F||H.height>F)&&(k=F/Math.max(H.width,H.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let it=Math.floor(k*H.width),st=Math.floor(k*H.height);u===void 0&&(u=A(it,st));let K=p?A(it,st):u;return K.width=it,K.height=st,K.getContext("2d").drawImage(T,0,0,it,st),Lt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+it+"x"+st+")."),K}else return"data"in T&&Lt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),T;return T}function d(T){return T.generateMipmaps}function _(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,p,F,k,H,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let st;k&&(st=t.get("EXT_texture_norm16"),st||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=p;if(p===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8),F===i.UNSIGNED_SHORT&&st&&(K=st.R16_EXT),F===i.SHORT&&st&&(K=st.R16_SNORM_EXT)),p===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),p===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8),F===i.UNSIGNED_SHORT&&st&&(K=st.RG16_EXT),F===i.SHORT&&st&&(K=st.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),p===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),p===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),p===i.RGB&&(F===i.UNSIGNED_SHORT&&st&&(K=st.RGB16_EXT),F===i.SHORT&&st&&(K=st.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),p===i.RGBA){let Z=it?qi:kt.getTransfer(H);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=Z===Yt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&st&&(K=st.RGBA16_EXT),F===i.SHORT&&st&&(K=st.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(T,p){let F;return T?p===null||p===Qe||p===Ei?F=i.DEPTH24_STENCIL8:p===$e?F=i.DEPTH32F_STENCIL8:p===Li&&(F=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Qe||p===Ei?F=i.DEPTH_COMPONENT24:p===$e?F=i.DEPTH_COMPONENT32F:p===Li&&(F=i.DEPTH_COMPONENT16),F}function M(T,p){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Se&&T.minFilter!==fe?Math.log2(Math.max(p.width,p.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?p.mipmaps.length:1}function P(T){let p=T.target;p.removeEventListener("dispose",P),w(p),p.isVideoTexture&&h.delete(p),p.isHTMLTexture&&f.delete(p)}function S(T){let p=T.target;p.removeEventListener("dispose",S),R(p)}function w(T){let p=n.get(T);if(p.__webglInit===void 0)return;let F=T.source,k=g.get(F);if(k){let H=k[p.__cacheKey];H.usedTimes--,H.usedTimes===0&&C(T),Object.keys(k).length===0&&g.delete(F)}n.remove(T)}function C(T){let p=n.get(T);i.deleteTexture(p.__webglTexture);let F=T.source,k=g.get(F);delete k[p.__cacheKey],a.memory.textures--}function R(T){let p=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(p.__webglFramebuffer[k]))for(let H=0;H<p.__webglFramebuffer[k].length;H++)i.deleteFramebuffer(p.__webglFramebuffer[k][H]);else i.deleteFramebuffer(p.__webglFramebuffer[k]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[k])}else{if(Array.isArray(p.__webglFramebuffer))for(let k=0;k<p.__webglFramebuffer.length;k++)i.deleteFramebuffer(p.__webglFramebuffer[k]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let k=0;k<p.__webglColorRenderbuffer.length;k++)p.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[k]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let F=T.textures;for(let k=0,H=F.length;k<H;k++){let it=n.get(F[k]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(T)}let O=0;function J(){O=0}function V(){return O}function I(T){O=T}function Y(){let T=O;return T>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function B(T){let p=[];return p.push(T.wrapS),p.push(T.wrapT),p.push(T.wrapR||0),p.push(T.magFilter),p.push(T.minFilter),p.push(T.anisotropy),p.push(T.internalFormat),p.push(T.format),p.push(T.type),p.push(T.generateMipmaps),p.push(T.premultiplyAlpha),p.push(T.flipY),p.push(T.unpackAlignment),p.push(T.colorSpace),p.join()}function tt(T,p){let F=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let k=T.image;if(k===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(F,T,p);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+p)}function z(T,p){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){vt(F,T,p);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+p)}function Q(T,p){let F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){vt(F,T,p);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+p)}function nt(T,p){let F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Ut(F,T,p);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+p)}let _t={[zs]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[Hs]:i.MIRRORED_REPEAT},Mt={[Se]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},$t={[Xl]:i.NEVER,[Kl]:i.ALWAYS,[Jl]:i.LESS,[na]:i.LEQUAL,[zl]:i.EQUAL,[ia]:i.GEQUAL,[Hl]:i.GREATER,[Gl]:i.NOTEQUAL};function Bt(T,p){if(p.type===$e&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===fe||p.magFilter===Sr||p.magFilter===is||p.magFilter===Wn||p.minFilter===fe||p.minFilter===Sr||p.minFilter===is||p.minFilter===Wn)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,_t[p.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,_t[p.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,_t[p.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Mt[p.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Mt[p.minFilter]),p.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,$t[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Se||p.minFilter!==is&&p.minFilter!==Wn||p.type===$e&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function Ht(T,p){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,p.addEventListener("dispose",P));let k=p.source,H=g.get(k);H===void 0&&(H={},g.set(k,H));let it=B(p);if(it!==T.__cacheKey){H[it]===void 0&&(H[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),H[it].usedTimes++;let st=H[T.__cacheKey];st!==void 0&&(H[T.__cacheKey].usedTimes--,st.usedTimes===0&&C(p)),T.__cacheKey=it,T.__webglTexture=H[it].texture}return F}function G(T,p,F){return Math.floor(Math.floor(T/F)/p)}function $(T,p,F,k){let it=T.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,F,k,p.data);else{it.sort((bt,ct)=>bt.start-ct.start);let st=0;for(let bt=1;bt<it.length;bt++){let ct=it[st],at=it[bt],Tt=ct.start+ct.count,Pt=G(at.start,p.width,4),Ct=G(ct.start,p.width,4);at.start<=Tt+1&&Pt===Ct&&G(at.start+at.count-1,p.width,4)===Pt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let bt=0,ct=it.length;bt<ct;bt++){let at=it[bt],Tt=Math.floor(at.start/4),Pt=Math.ceil(at.count/4),Ct=Tt%p.width,N=Math.floor(Tt/p.width),ot=Pt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ct,N,ot,j,F,k,p.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function vt(T,p,F){let k=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(k=i.TEXTURE_3D);let H=Ht(T,p),it=p.source;e.bindTexture(k,T.__webglTexture,i.TEXTURE0+F);let st=n.get(it);if(it.version!==st.__version||H===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let j=kt.getPrimaries(kt.workingColorSpace),lt=p.colorSpace===yn?null:kt.getPrimaries(p.colorSpace),ft=p.colorSpace===yn||j===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let Z=m(p.image,!1,s.maxTextureSize);Z=ye(p,Z);let rt=r.convert(p.format,p.colorSpace),bt=r.convert(p.type),ct=y(p.internalFormat,rt,bt,p.normalized,p.colorSpace,p.isVideoTexture);Bt(k,p);let at,Tt=p.mipmaps,Pt=p.isVideoTexture!==!0,Ct=st.__version===void 0||H===!0,N=it.dataReady,ot=M(p,Z);if(p.isDepthTexture)ct=b(p.format===kn,p.type),Ct&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ct,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,ct,Z.width,Z.height,0,rt,bt,null));else if(p.isDataTexture)if(Tt.length>0){Pt&&Ct&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,at.width,at.height,rt,bt,at.data):e.texImage2D(i.TEXTURE_2D,j,ct,at.width,at.height,0,rt,bt,at.data);p.generateMipmaps=!1}else Pt?(Ct&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Z.width,Z.height),N&&$(p,Z,rt,bt)):e.texImage2D(i.TEXTURE_2D,0,ct,Z.width,Z.height,0,rt,bt,Z.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Pt&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Tt[0].width,Tt[0].height,Z.depth);for(let j=0,lt=Tt.length;j<lt;j++)if(at=Tt[j],p.format!==ze)if(rt!==null)if(Pt){if(N)if(p.layerUpdates.size>0){let ft=xo(at.width,at.height,p.format,p.type);for(let et of p.layerUpdates){let wt=at.data.subarray(et*ft/at.data.BYTES_PER_ELEMENT,(et+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,et,at.width,at.height,1,rt,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,Z.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ct,at.width,at.height,Z.depth,0,at.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,at.width,at.height,Z.depth,rt,bt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,ct,at.width,at.height,Z.depth,0,rt,bt,at.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{Pt&&Ct&&e.texStorage2D(i.TEXTURE_2D,ot,ct,Tt[0].width,Tt[0].height);for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],p.format!==ze?rt!==null?Pt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,j,ct,at.width,at.height,0,at.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,at.width,at.height,rt,bt,at.data):e.texImage2D(i.TEXTURE_2D,j,ct,at.width,at.height,0,rt,bt,at.data)}else if(p.isDataArrayTexture)if(Pt){if(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,Z.width,Z.height,Z.depth),N)if(p.layerUpdates.size>0){let j=xo(Z.width,Z.height,p.format,p.type);for(let lt of p.layerUpdates){let ft=Z.data.subarray(lt*j/Z.data.BYTES_PER_ELEMENT,(lt+1)*j/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,Z.width,Z.height,1,rt,bt,ft)}p.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,rt,bt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,Z.width,Z.height,Z.depth,0,rt,bt,Z.data);else if(p.isData3DTexture)Pt?(Ct&&e.texStorage3D(i.TEXTURE_3D,ot,ct,Z.width,Z.height,Z.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,rt,bt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,ct,Z.width,Z.height,Z.depth,0,rt,bt,Z.data);else if(p.isFramebufferTexture){if(Ct)if(Pt)e.texStorage2D(i.TEXTURE_2D,ot,ct,Z.width,Z.height);else{let j=Z.width,lt=Z.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,j,lt,0,rt,bt,null),j>>=1,lt>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Z.parentNode!==j){j.appendChild(Z),f.add(p),j.onpaint=lt=>{let ft=lt.changedElements;for(let et of f)ft.includes(et.image)&&(et.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let ft=i.RGBA,et=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,et,wt,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Pt&&Ct){let j=jt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height)}for(let j=0,lt=Tt.length;j<lt;j++)at=Tt[j],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,rt,bt,at):e.texImage2D(i.TEXTURE_2D,j,ct,rt,bt,at);p.generateMipmaps=!1}else if(Pt){if(Ct){let j=jt(Z);e.texStorage2D(i.TEXTURE_2D,ot,ct,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,bt,Z)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,bt,Z);d(p)&&_(k),st.__version=it.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Ut(T,p,F){if(p.image.length!==6)return;let k=Ht(T,p),H=p.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let it=n.get(H);if(H.version!==it.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let st=kt.getPrimaries(kt.workingColorSpace),K=p.colorSpace===yn?null:kt.getPrimaries(p.colorSpace),Z=p.colorSpace===yn||st===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let rt=p.isCompressedTexture||p.image[0].isCompressedTexture,bt=p.image[0]&&p.image[0].isDataTexture,ct=[];for(let et=0;et<6;et++)!rt&&!bt?ct[et]=m(p.image[et],!0,s.maxCubemapSize):ct[et]=bt?p.image[et].image:p.image[et],ct[et]=ye(p,ct[et]);let at=ct[0],Tt=r.convert(p.format,p.colorSpace),Pt=r.convert(p.type),Ct=y(p.internalFormat,Tt,Pt,p.normalized,p.colorSpace),N=p.isVideoTexture!==!0,ot=it.__version===void 0||k===!0,j=H.dataReady,lt=M(p,at);Bt(i.TEXTURE_CUBE_MAP,p);let ft;if(rt){N&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ct,at.width,at.height);for(let et=0;et<6;et++){ft=ct[et].mipmaps;for(let wt=0;wt<ft.length;wt++){let yt=ft[wt];p.format!==ze?Tt!==null?N?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,yt.width,yt.height,Tt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ct,yt.width,yt.height,0,yt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,yt.width,yt.height,Tt,Pt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ct,yt.width,yt.height,0,Tt,Pt,yt.data)}}}else{if(ft=p.mipmaps,N&&ot){ft.length>0&&lt++;let et=jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ct,et.width,et.height)}for(let et=0;et<6;et++)if(bt){N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct[et].width,ct[et].height,Tt,Pt,ct[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ct,ct[et].width,ct[et].height,0,Tt,Pt,ct[et].data);for(let wt=0;wt<ft.length;wt++){let ee=ft[wt].image[et].image;N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,ee.width,ee.height,Tt,Pt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ct,ee.width,ee.height,0,Tt,Pt,ee.data)}}else{N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt,Pt,ct[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ct,Tt,Pt,ct[et]);for(let wt=0;wt<ft.length;wt++){let yt=ft[wt];N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Tt,Pt,yt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ct,Tt,Pt,yt.image[et])}}}d(p)&&_(i.TEXTURE_CUBE_MAP),it.__version=H.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function mt(T,p,F,k,H,it){let st=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Z=y(F.internalFormat,st,K,F.normalized,F.colorSpace),rt=n.get(p),bt=n.get(F);if(bt.__renderTarget=p,!rt.__hasExternalTextures){let ct=Math.max(1,p.width>>it),at=Math.max(1,p.height>>it);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,it,Z,ct,at,p.depth,0,st,K,null):e.texImage2D(H,it,Z,ct,at,0,st,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ue(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,H,bt.__webglTexture,0,ae(p)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,H,bt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,p,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),p.depthBuffer){let k=p.depthTexture,H=k&&k.isDepthTexture?k.type:null,it=b(p.stencilBuffer,H),st=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(p),it,p.width,p.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(p),it,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,it,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,T)}else{let k=p.textures;for(let H=0;H<k.length;H++){let it=k[H],st=r.convert(it.format,it.colorSpace),K=r.convert(it.type),Z=y(it.internalFormat,st,K,it.normalized,it.colorSpace);ue(p)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(p),Z,p.width,p.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(p),Z,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,Z,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,p,F){let k=p.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(p.depthTexture);if(H.__renderTarget=p,(!H.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),k){if(H.__webglInit===void 0&&(H.__webglInit=!0,p.depthTexture.addEventListener("dispose",P)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,p.depthTexture);let rt=r.convert(p.depthTexture.format),bt=r.convert(p.depthTexture.type),ct;p.depthTexture.format===an?ct=i.DEPTH_COMPONENT24:p.depthTexture.format===kn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,p.width,p.height,0,rt,bt,null)}}else tt(p.depthTexture,0);let it=H.__webglTexture,st=ae(p),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Z=p.depthTexture.format===kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===an)ue(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,it,0);else if(p.depthTexture.format===kn)ue(p)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,K,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Z,K,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(T){let p=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),k){let H=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,k.removeEventListener("dispose",H)};k.addEventListener("dispose",H),p.__depthDisposeCallback=H}p.__boundDepthTexture=k}if(T.depthTexture&&!p.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)pe(p.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?pe(p.__webglFramebuffer[0],T,0):pe(p.__webglFramebuffer,T,0)}else if(F){p.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[k]),p.__webglDepthbuffer[k]===void 0)p.__webglDepthbuffer[k]=i.createRenderbuffer(),Ft(p.__webglDepthbuffer[k],T,!1);else{let H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=p.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Ft(p.__webglDepthbuffer,T,!1);else{let H=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,p,F){let k=n.get(T);p!==void 0&&mt(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ot(T)}function te(T){let p=T.texture,F=n.get(T),k=n.get(p);T.addEventListener("dispose",S);let H=T.textures,it=T.isWebGLCubeRenderTarget===!0,st=H.length>1;if(st||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=p.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Z=0;Z<p.mipmaps.length;Z++)F.__webglFramebuffer[K][Z]=i.createFramebuffer()}else F.__webglFramebuffer[K]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<p.mipmaps.length;K++)F.__webglFramebuffer[K]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(st)for(let K=0,Z=H.length;K<Z;K++){let rt=n.get(H[K]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ue(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<H.length;K++){let Z=H[K];F.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let rt=r.convert(Z.format,Z.colorSpace),bt=r.convert(Z.type),ct=y(Z.internalFormat,rt,bt,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),at=ae(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,p);for(let K=0;K<6;K++)if(p.mipmaps&&p.mipmaps.length>0)for(let Z=0;Z<p.mipmaps.length;Z++)mt(F.__webglFramebuffer[K][Z],T,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else mt(F.__webglFramebuffer[K],T,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(p)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let K=0,Z=H.length;K<Z;K++){let rt=H[K],bt=n.get(rt),ct=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,bt.__webglTexture),Bt(ct,rt),mt(F.__webglFramebuffer,T,rt,i.COLOR_ATTACHMENT0+K,ct,0),d(rt)&&_(ct)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),Bt(K,p),p.mipmaps&&p.mipmaps.length>0)for(let Z=0;Z<p.mipmaps.length;Z++)mt(F.__webglFramebuffer[Z],T,p,i.COLOR_ATTACHMENT0,K,Z);else mt(F.__webglFramebuffer,T,p,i.COLOR_ATTACHMENT0,K,0);d(p)&&_(K),e.unbindTexture()}T.depthBuffer&&Ot(T)}function Wt(T){let p=T.textures;for(let F=0,k=p.length;F<k;F++){let H=p[F];if(d(H)){let it=E(T),st=n.get(H).__webglTexture;e.bindTexture(it,st),_(it),e.unbindTexture()}}}let re=[],ve=[];function Ne(T){if(T.samples>0){if(ue(T)===!1){let p=T.textures,F=T.width,k=T.height,H=i.COLOR_BUFFER_BIT,it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(T),K=p.length>1;if(K)for(let rt=0;rt<p.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let Z=T.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<p.length;rt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let bt=n.get(p[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,H,i.NEAREST),c===!0&&(re.length=0,ve.length=0,re.push(i.COLOR_ATTACHMENT0+rt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(re.push(it),ve.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<p.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let bt=n.get(p[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let p=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function ae(T){return Math.min(s.maxSamples,T.samples)}function ue(T){let p=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function U(T){let p=a.render.frame;h.get(T)!==p&&(h.set(T,p),T.update())}function ye(T,p){let F=T.colorSpace,k=T.format,H=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ii&&F!==yn&&(kt.getTransfer(F)===Yt?(k!==ze||H!==ke)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",F)),p}function jt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.getTextureUnits=V,this.setTextureUnits=I,this.setTexture2D=tt,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function dm(i,t){function e(n,s=yn){let r,a=kt.getTransfer(s);if(n===ke)return i.UNSIGNED_BYTE;if(n===Ar)return i.UNSIGNED_SHORT_4_4_4_4;if(n===br)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ao)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===so)return i.BYTE;if(n===ro)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===yr)return i.INT;if(n===Qe)return i.UNSIGNED_INT;if(n===$e)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===lo)return i.ALPHA;if(n===co)return i.RGB;if(n===ze)return i.RGBA;if(n===an)return i.DEPTH_COMPONENT;if(n===kn)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===Tr)return i.RED_INTEGER;if(n===In)return i.RG;if(n===Mr)return i.RG_INTEGER;if(n===wr)return i.RGBA_INTEGER;if(n===ss||n===rs||n===as||n===os)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_r||n===Pr||n===Lr||n===Er)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Ur||n===Cr||n===Rr||n===Vr||n===ls||n===Fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Ur)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rr)return r.COMPRESSED_R11_EAC;if(n===Vr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ls)return r.COMPRESSED_RG11_EAC;if(n===Fr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Or||n===Dr||n===Wr||n===kr||n===Ir||n===qr||n===Br||n===Xr||n===Jr||n===zr||n===Hr||n===Gr||n===Kr||n===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Or)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Br)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===Zr||n===Qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jr)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$r||n===ta||n===cs||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function gm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,mo(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,E,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&g(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),A(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ee&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ee&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=t.get(d),E=_.envMap,y=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uc),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function A(m,d){let _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let M=b.program;n.uniformBlockBinding(y,M)}function l(y,b){let M=s[y.id];M===void 0&&(m(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",_));let P=b.program;n.updateUBOMapping(y,P);let S=t.render.frame;r[y.id]!==S&&(u(y),r[y.id]=S)}function h(y){let b=f();y.__bindingPointIndex=b;let M=i.createBuffer(),P=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],M=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,w=M.length;S<w;S++){let C=M[S];if(Array.isArray(C))for(let R=0,O=C.length;R<O;R++)g(C[R],S,R,P);else g(C,S,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,b,M,P){if(A(y,b,M,P)===!0){let S=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let R=0;R<w.length;R++){let O=w[R],J=d(O);v(O,y.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function v(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function A(y,b,M,P){let S=y.value,w=b+"_"+M;if(P[w]===void 0)return typeof S=="number"||typeof S=="boolean"?P[w]=S:ArrayBuffer.isView(S)?P[w]=S.slice():P[w]=S.clone(),!0;{let C=P[w];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return P[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function m(y){let b=y.uniforms,M=0,P=16;for(let w=0,C=b.length;w<C;w++){let R=Array.isArray(b[w])?b[w]:[b[w]];for(let O=0,J=R.length;O<J;O++){let V=R[O],I=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,B=I.length;Y<B;Y++){let tt=I[Y],z=d(tt),Q=M%P,nt=Q%z.boundary,_t=Q+nt;M+=nt,_t!==0&&P-_t<z.storage&&(M+=P-_t),V.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=z.storage}}}let S=M%P;return S>0&&(M+=P-S),y.__size=M,y.__cache={},this}function d(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",y),b}function _(y){let b=y.target;b.removeEventListener("dispose",_);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:E}}function Sm(){return dn===null&&(dn=new $s(xm,16,16,In,tn),dn.name="DFG_LUT",dn.minFilter=fe,dn.magFilter=fe,dn.wrapS=rn,dn.wrapT=rn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}var Uu,Cu,Ru,Vu,Fu,Ou,Du,Wu,ku,Iu,qu,Bu,Xu,Ju,zu,Hu,Gu,Ku,Yu,ju,Zu,Qu,$u,th,eh,nh,ih,sh,rh,ah,oh,lh,ch,uh,hh,dh,fh,ph,mh,gh,vh,xh,Sh,yh,Ah,bh,Th,Mh,wh,_h,Ph,Lh,Eh,Nh,Uh,Ch,Rh,Vh,Fh,Oh,Dh,Wh,kh,Ih,qh,Bh,Xh,Jh,zh,Hh,Gh,Kh,Yh,jh,Zh,Qh,$h,td,ed,nd,id,sd,rd,ad,od,ld,cd,ud,hd,dd,fd,pd,md,gd,vd,xd,Sd,yd,Ad,bd,Td,Md,wd,_d,Pd,Ld,Ed,Nd,Ud,Cd,Rd,Vd,Fd,Od,Dd,Wd,kd,Id,qd,Bd,Xd,Jd,zd,Hd,Gd,Kd,Yd,jd,Zd,Qd,$d,tf,ef,nf,sf,rf,af,of,lf,cf,uf,hf,Vt,ut,fn,sa,df,_c,Ui,xf,Sf,yf,hs,sc,wo,_o,Po,Lo,Af,ti,aa,oa,Cf,Pc,Uo,Lc,Ec,Nc,lc,cc,uc,hc,dc,Co,Ro,Vo,Eo,Ci,Ap,bp,mc,_p,ra,Cp,Rp,Fp,Dp,kp,qp,Xp,Gp,Oo,Do,em,rm,am,om,lm,Mc,ds,No,fm,pm,Wo,ko,mm,Uc,xm,dn,la,Cc=pa(()=>{Mo();Mo();Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ju=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$d=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Uu,alphahash_pars_fragment:Cu,alphamap_fragment:Ru,alphamap_pars_fragment:Vu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Du,aomap_pars_fragment:Wu,batching_pars_vertex:ku,batching_vertex:Iu,begin_vertex:qu,beginnormal_vertex:Bu,bsdfs:Xu,iridescence_fragment:Ju,bumpmap_pars_fragment:zu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Yu,color_fragment:ju,color_pars_fragment:Zu,color_pars_vertex:Qu,color_vertex:$u,common:th,cube_uv_reflection_fragment:eh,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:sh,emissivemap_fragment:rh,emissivemap_pars_fragment:ah,colorspace_fragment:oh,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:uh,envmap_pars_fragment:hh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:Th,envmap_vertex:fh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_pars_fragment:Sh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Ah,lights_pars_begin:bh,lights_toon_fragment:Mh,lights_toon_pars_fragment:wh,lights_phong_fragment:_h,lights_phong_pars_fragment:Ph,lights_physical_fragment:Lh,lights_physical_pars_fragment:Eh,lights_fragment_begin:Nh,lights_fragment_maps:Uh,lights_fragment_end:Ch,lightprobes_pars_fragment:Rh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Dh,map_fragment:Wh,map_pars_fragment:kh,map_particle_fragment:Ih,map_particle_pars_fragment:qh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:Xh,morphinstance_vertex:Jh,morphcolor_vertex:zh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Kh,normal_fragment_begin:Yh,normal_fragment_maps:jh,normal_pars_fragment:Zh,normal_pars_vertex:Qh,normal_vertex:$h,normalmap_pars_fragment:td,clearcoat_normal_fragment_begin:ed,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,iridescence_pars_fragment:sd,opaque_fragment:rd,packing:ad,premultiplied_alpha_fragment:od,project_vertex:ld,dithering_fragment:cd,dithering_pars_fragment:ud,roughnessmap_fragment:hd,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:fd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:Sd,skinnormal_vertex:yd,specularmap_fragment:Ad,specularmap_pars_fragment:bd,tonemapping_fragment:Td,tonemapping_pars_fragment:Md,transmission_fragment:wd,transmission_pars_fragment:_d,uv_pars_fragment:Pd,uv_pars_vertex:Ld,uv_vertex:Ed,worldpos_vertex:Nd,background_vert:Ud,background_frag:Cd,backgroundCube_vert:Rd,backgroundCube_frag:Vd,cube_vert:Fd,cube_frag:Od,depth_vert:Dd,depth_frag:Wd,distance_vert:kd,distance_frag:Id,equirect_vert:qd,equirect_frag:Bd,linedashed_vert:Xd,linedashed_frag:Jd,meshbasic_vert:zd,meshbasic_frag:Hd,meshlambert_vert:Gd,meshlambert_frag:Kd,meshmatcap_vert:Yd,meshmatcap_frag:jd,meshnormal_vert:Zd,meshnormal_frag:Qd,meshphong_vert:$d,meshphong_frag:tf,meshphysical_vert:ef,meshphysical_frag:nf,meshtoon_vert:sf,meshtoon_frag:rf,points_vert:af,points_frag:of,shadow_vert:lf,shadow_frag:cf,sprite_vert:uf,sprite_frag:hf},ut={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},fn={basic:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:we([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:we([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:we([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:we([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:we([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:we([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:we([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:we([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:we([ut.common,ut.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:we([ut.lights,ut.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};fn.physical={uniforms:we([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};sa={r:0,b:0,g:0},df=new ce,_c=new Nt;_c.set(-1,0,0,0,1,0,0,0,1);Ui=4,xf=6,Sf=20,yf=256,hs=new jn,sc=new Jt,wo=null,_o=0,Po=0,Lo=!1,Af=new q,ti=new q,aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Af}=r;wo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,_o,Po),this._renderer.xr.enabled=Lo,t.scissorTest=!1,Ni(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:tn,format:ze,colorSpace:Ii,depthBuffer:!1},s=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bf(r)),this._blurMaterial=Mf(r,t,e),this._ggxMaterial=Tf(r,t,e)}return s}_compileMaterial(t){let e=new Ve(new cn,t);this._renderer.compile(e,hs)}_sceneToCubeUV(t,e,n,s,r){let c=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,g=f.toneMapping;f.getClearColor(sc),f.toneMapping=We,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Mi,new Ki({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,m=A.material,d=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,d=!0):(m.color.copy(sc),d=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Ni(s,y*b,E>2?b:0,b,b),f.setRenderTarget(s),d&&f.render(A,c),f.render(t,c)}f.toneMapping=g,f.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Dn||t.mapping===Qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ni(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,hs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,g=f*u,{_lodMax:v}=this,A=this._sizeLods[n],m=3*A*(n>v-Ui?n-v+Ui:0),d=4*(this._cubeSize-A);c.envMap.value=t.texture,c.roughness.value=g,c.mipInt.value=v-e,Ni(r,m,d,3*A,2*A),s.setRenderTarget(r),s.render(o,hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,Ni(t,m,d,3*A,2*A),s.setRenderTarget(t),s.render(o,hs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ui?s-this._lodMax+Ui:0),u=4*(this._cubeSize-h);Ni(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,hs)}};oa=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ji(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mi(5,5,5),r=new Le({name:"CubemapFromEquirect",uniforms:$n(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:hn});r.uniforms.tEquirect.value=e;let a=new Ve(s,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=fe),new pr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};Cf={[ja]:"LINEAR_TONE_MAPPING",[Za]:"REINHARD_TONE_MAPPING",[Qa]:"CINEON_TONE_MAPPING",[$a]:"ACES_FILMIC_TONE_MAPPING",[eo]:"AGX_TONE_MAPPING",[no]:"NEUTRAL_TONE_MAPPING",[to]:"CUSTOM_TONE_MAPPING"};Pc=new Pe,Uo=new Cn(1,1),Lc=new Xi,Ec=new Zs,Nc=new ji,lc=[],cc=[],uc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);Co=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$f(e.type)}},Ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sp(e.type)}},Vo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Eo=/(\w+)(\])?(\[|\.)?/g;Ci=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);yp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};Ap=37297,bp=0;mc=new Nt;_p={[ja]:"Linear",[Za]:"Reinhard",[Qa]:"Cineon",[$a]:"ACESFilmic",[eo]:"AgX",[no]:"Neutral",[to]:"Custom"};ra=new q;Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;Rp=new Map;Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Dp={[es]:"SHADOWMAP_TYPE_PCF",[_i]:"SHADOWMAP_TYPE_VSM"};kp={[Dn]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE_UV"};qp={[Qn]:"ENVMAP_MODE_REFRACTION"};Xp={[Ya]:"ENVMAP_BLENDING_MULTIPLY",[Dl]:"ENVMAP_BLENDING_MIX",[Wl]:"ENVMAP_BLENDING_ADD"};Gp=0,Oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Do(t),e.set(t,n)),n}},Do=class{constructor(t){this.id=Gp++,this.code=t,this.usedTimes=0}};em=0;rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,om=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],lm=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Mc=new ce,ds=new q,No=new q;fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zi(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Le({vertexShader:fm,fragmentShader:pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ko=class extends on{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,g=null,v=null,A=typeof XRWebGLBinding<"u",m=new Wo,d={},_=e.getContextAttributes(),E=null,y=null,b=[],M=[],P=new It,S=null,w=null,C=new Ce;C.viewport=new oe;let R=new Ce;R.viewport=new oe;let O=[C,R],J=new mr,V=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=b[G];return $===void 0&&($=new bi,b[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=b[G];return $===void 0&&($=new bi,b[G]=$),$.getGripSpace()},this.getHand=function(G){let $=b[G];return $===void 0&&($=new bi,b[G]=$),$.getHandSpace()};function Y(G){let $=M.indexOf(G.inputSource);if($===-1)return;let vt=b[$];vt!==void 0&&(vt.update(G.inputSource,G.frame,l||a),vt.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",tt);for(let G=0;G<b.length;G++){let $=M[G];$!==null&&(M[G]=null,b[G].disconnect($))}V=null,I=null,m.reset();for(let G in d)delete d[G];if(t.setRenderTarget(E),g=null,u=null,f=null,s=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),w!==null){let G=w.camera;G.fov=w.fov,G.zoom=w.zoom,G.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return f===null&&A&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",B),s.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ut=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?kn:an,Ut=_.stencil?Ei:Qe);let Ft={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Re(u.textureWidth,u.textureHeight,{format:ze,type:ke,depthTexture:new Cn(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),y=new Re(g.framebufferWidth,g.framebufferHeight,{format:ze,type:ke,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(G){for(let $=0;$<G.removed.length;$++){let vt=G.removed[$],Ut=M.indexOf(vt);Ut>=0&&(M[Ut]=null,b[Ut].disconnect(vt))}for(let $=0;$<G.added.length;$++){let vt=G.added[$],Ut=M.indexOf(vt);if(Ut===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=M.length){M.push(vt),Ut=Ft;break}else if(M[Ft]===null){M[Ft]=vt,Ut=Ft;break}if(Ut===-1)break}let mt=b[Ut];mt&&mt.connect(vt)}}let z=new q,Q=new q;function nt(G,$,vt){z.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);let Ut=z.distanceTo(Q),mt=$.projectionMatrix.elements,Ft=vt.projectionMatrix.elements,pe=mt[14]/(mt[10]-1),Ot=mt[14]/(mt[10]+1),zt=(mt[9]+1)/mt[5],te=(mt[9]-1)/mt[5],Wt=(mt[8]-1)/mt[0],re=(Ft[8]+1)/Ft[0],ve=pe*Wt,Ne=pe*re,ae=Ut/(-Wt+re),ue=ae*-Wt;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ue),G.translateZ(ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),mt[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let U=pe+ae,ye=Ot+ae,jt=ve-ue,T=Ne+(Ut-ue),p=zt*Ot/ye*U,F=te*Ot/ye*U;G.projectionMatrix.makePerspective(jt,T,p,F,U,ye),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function _t(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,vt=G.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),J.near=R.near=C.near=$,J.far=R.far=C.far=vt,(V!==J.near||I!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),V=J.near,I=J.far),J.layers.mask=G.layers.mask|6,C.layers.mask=J.layers.mask&-5,R.layers.mask=J.layers.mask&-3;let Ut=G.parent,mt=J.cameras;_t(J,Ut);for(let Ft=0;Ft<mt.length;Ft++)_t(mt[Ft],Ut);mt.length===2?nt(J,C,R):J.projectionMatrix.copy(C.projectionMatrix),w===null&&G.isPerspectiveCamera&&(w={camera:G,fov:G.fov,zoom:G.zoom}),Mt(G,J,Ut)};function Mt(G,$,vt){vt===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(vt.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ks*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(G){return d[G]};let $t=null;function Bt(G,$){if(h=$.getViewerPose(l||a),v=$,h!==null){let vt=h.views;g!==null&&(t.setRenderTargetFramebuffer(y,g.framebuffer),t.setRenderTarget(y));let Ut=!1;vt.length!==J.cameras.length&&(J.cameras.length=0,Ut=!0);for(let Ot=0;Ot<vt.length;Ot++){let zt=vt[Ot],te=null;if(g!==null)te=g.getViewport(zt);else{let re=f.getViewSubImage(u,zt);te=re.viewport,Ot===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let Wt=O[Ot];Wt===void 0&&(Wt=new Ce,Wt.layers.enable(Ot),Wt.viewport=new oe,O[Ot]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(J.matrix.copy(Wt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ut===!0&&J.cameras.push(Wt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){f=n.getBinding();let Ot=f.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(mt&&mt.includes("camera-access")&&A){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<vt.length;Ot++){let zt=vt[Ot].camera;if(zt){let te=d[zt];te||(te=new Zi,d[zt]=te);let Wt=f.getCameraImage(zt);te.sourceTexture=Wt}}}}for(let vt=0;vt<b.length;vt++){let Ut=M[vt],mt=b[vt];Ut!==null&&mt!==void 0&&mt.update(Ut,$,l||a)}$t&&$t(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}let Ht=new wc;Ht.setAnimationLoop(Bt),this.setAnimationLoop=function(G){$t=G},this.dispose=function(){}}},mm=new ce,Uc=new Nt;Uc.set(-1,0,0,0,1,0,0,0,1);xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dn=null;la=class{constructor(t={}){let{canvas:e=jl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:g=ke}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let A=g,m=new Set([wr,Mr,Tr]),d=new Set([ke,Qe,Li,Ei,Ar,br]),_=new Uint32Array(4),E=new Int32Array(4),y=new q,b=null,M=null,P=[],S=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=We,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,O=null,J=null,V=null,I=null;this._outputColorSpace=Me;let Y=0,B=0,tt=null,z=-1,Q=null,nt=new oe,_t=new oe,Mt=null,$t=new Jt(0),Bt=0,Ht=e.width,G=e.height,$=1,vt=null,Ut=null,mt=new oe(0,0,Ht,G),Ft=new oe(0,0,Ht,G),pe=!1,Ot=new Yi,zt=!1,te=!1,Wt=new ce,re=new q,ve=new oe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function ue(){return tt===null?$:1}let U=n;function ye(x,L){return e.getContext(x,L)}let jt,T,p,F,k,H,it,st,K,Z,rt,bt,ct,at,Tt,Pt,Ct,N,ot,j,lt,ft,et;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",He,!1),U===null){let L="webgl2";if(U=ye(L,x),U===null)throw ye(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(x){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",He,!1),Et("WebGLRenderer: "+x.message),x}function wt(){jt=new _f(U),jt.init(),lt=new dm(U,jt),T=new gf(U,jt,t,lt),p=new um(U,jt),T.reversedDepthBuffer&&u&&p.buffers.depth.setReversed(!0),J=U.createFramebuffer(),V=U.createFramebuffer(),I=U.createFramebuffer(),F=new Ef(U),k=new jp,H=new hm(U,jt,p,k,T,lt,F),it=new wf(C),st=new Nu(U),ft=new pf(U,st),K=new Pf(U,st,F,ft),Z=new Uf(U,K,st,ft,F),N=new Nf(U,T,H),Tt=new vf(k),rt=new Yp(C,it,jt,T,ft,Tt),bt=new gm(C,k),ct=new Qp,at=new sm(jt),Ct=new ff(C,it,p,Z,v,c),Pt=new cm(C,Z,T),et=new vm(U,F,T,p),ot=new mf(U,jt,F),j=new Lf(U,jt,F),F.programs=rt.programs,C.capabilities=T,C.extensions=jt,C.properties=k,C.renderLists=ct,C.shadowMap=Pt,C.state=p,C.info=F}A!==ke&&(w=new Rf(A,e.width,e.height,o,s,r));let yt=new ko(C,U);this.xr=yt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let x=jt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=jt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(x){x!==void 0&&($=x,this.setSize(Ht,G,!1))},this.getSize=function(x){return x.set(Ht,G)},this.setSize=function(x,L,X=!0){if(yt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=x,G=L,e.width=Math.floor(x*$),e.height=Math.floor(L*$),X===!0&&(e.style.width=x+"px",e.style.height=L+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Ht*$,G*$).floor()},this.setDrawingBufferSize=function(x,L,X){Ht=x,G=L,$=X,e.width=Math.floor(x*X),e.height=Math.floor(L*X),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(A===ke){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(nt)},this.getViewport=function(x){return x.copy(mt)},this.setViewport=function(x,L,X,D){x.isVector4?mt.set(x.x,x.y,x.z,x.w):mt.set(x,L,X,D),p.viewport(nt.copy(mt).multiplyScalar($).round())},this.getScissor=function(x){return x.copy(Ft)},this.setScissor=function(x,L,X,D){x.isVector4?Ft.set(x.x,x.y,x.z,x.w):Ft.set(x,L,X,D),p.scissor(_t.copy(Ft).multiplyScalar($).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(x){p.setScissorTest(pe=x)},this.setOpaqueSort=function(x){vt=x},this.setTransparentSort=function(x){Ut=x},this.getClearColor=function(x){return x.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,X=!0){let D=0;if(x){let W=!1;if(tt!==null){let dt=tt.texture.format;W=m.has(dt)}if(W){let dt=tt.texture.type,gt=d.has(dt),ht=Ct.getClearColor(),xt=Ct.getClearAlpha(),At=ht.r,Rt=ht.g,Dt=ht.b;gt?(_[0]=At,_[1]=Rt,_[2]=Dt,_[3]=xt,U.clearBufferuiv(U.COLOR,0,_)):(E[0]=At,E[1]=Rt,E[2]=Dt,E[3]=xt,U.clearBufferiv(U.COLOR,0,E))}else D|=U.COLOR_BUFFER_BIT}L&&(D|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(D|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&U.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",He,!1),Ct.dispose(),ct.dispose(),at.dispose(),k.dispose(),it.dispose(),Z.dispose(),ft.dispose(),et.dispose(),rt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",qo),yt.removeEventListener("sessionend",Bo),qn.stop()};function ee(x){x.preventDefault(),po("WebGLRenderer: Context Lost."),R=!0}function Gt(){po("WebGLRenderer: Context Restored."),R=!1;let x=F.autoReset,L=Pt.enabled,X=Pt.autoUpdate,D=Pt.needsUpdate,W=Pt.type;wt(),F.autoReset=x,Pt.enabled=L,Pt.autoUpdate=X,Pt.needsUpdate=D,Pt.type=W}function He(x){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function en(x){let L=x.target;L.removeEventListener("dispose",en),kc(L)}function kc(x){Ic(x),k.remove(x)}function Ic(x){let L=k.get(x).programs;L!==void 0&&(L.forEach(function(X){rt.releaseProgram(X)}),x.isShaderMaterial&&rt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,X,D,W,dt){L===null&&(L=Ne);let gt=W.isMesh&&W.matrixWorld.determinantAffine()<0,ht=Xc(x,L,X,D,W);p.setMaterial(D,gt);let xt=X.index,At=1;if(D.wireframe===!0){if(xt=K.getWireframeAttribute(X),xt===void 0)return;At=2}let Rt=X.drawRange,Dt=X.attributes.position,St=Rt.start*At,Kt=(Rt.start+Rt.count)*At;dt!==null&&(St=Math.max(St,dt.start*At),Kt=Math.min(Kt,(dt.start+dt.count)*At)),xt!==null?(St=Math.max(St,0),Kt=Math.min(Kt,xt.count)):Dt!=null&&(St=Math.max(St,0),Kt=Math.min(Kt,Dt.count));let he=Kt-St;if(he<0||he===1/0)return;ft.setup(W,D,ht,X,xt);let ie,Qt=ot;if(xt!==null&&(ie=st.get(xt),Qt=j,Qt.setIndex(ie)),W.isMesh)D.wireframe===!0?(p.setLineWidth(D.wireframeLinewidth*ue()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(W.isLine){let Ae=D.linewidth;Ae===void 0&&(Ae=1),p.setLineWidth(Ae*ue()),W.isLineSegments?Qt.setMode(U.LINES):W.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else W.isPoints?Qt.setMode(U.POINTS):W.isSprite&&Qt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ae=W._multiDrawStarts,pt=W._multiDrawCounts,_e=W._multiDrawCount,Xt=xt?st.get(xt).bytesPerElement:1,Ie=k.get(D).currentProgram.getUniforms();for(let nn=0;nn<_e;nn++)Ie.setValue(U,"_gl_DrawID",nn),Qt.render(Ae[nn]/Xt,pt[nn])}else if(W.isInstancedMesh)Qt.renderInstances(St,he,W.count);else if(X.isInstancedBufferGeometry){let Ae=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pt=Math.min(X.instanceCount,Ae);Qt.renderInstances(St,he,pt)}else Qt.render(St,he)};function Io(x,L,X,D){O!==null&&x.isNodeMaterial&&O.setObject(D,x),zt===!0&&Tt.setState(x,X,!1),x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Ee,x.needsUpdate=!0,ms(x,L,D),x.side=On,x.needsUpdate=!0,ms(x,L,D),x.side=un):ms(x,L,D)}this.compile=function(x,L,X=null){X===null&&(X=x),O!==null&&O.renderStart(x,L,X),M=at.get(X),M.init(L),S.push(M),X.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),x!==X&&x.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),O!==null&&O.updateLights(M.state.lightsArray),te=this.localClippingEnabled,zt=Tt.init(this.clippingPlanes,te),zt===!0&&Tt.setGlobalState(this.clippingPlanes,L),O!==null&&Pt.render(M.state.shadowsArray,X,L);let D=new Set;return x.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let dt=W.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ht=dt[gt];Io(ht,X,L,W),D.add(ht)}else Io(dt,X,L,W),D.add(dt)}),M=S.pop(),O!==null&&O.renderEnd(),D},this.compileAsync=function(x,L,X=null){let D=this.compile(x,L,X);return new Promise(W=>{function dt(){if(D.forEach(function(gt){let xt=k.get(gt).currentProgram;(xt===void 0||xt.isReady())&&D.delete(gt)}),D.size===0){W(x);return}setTimeout(dt,10)}jt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let da=null;function qc(x){da&&da(x)}function qo(){qn.stop()}function Bo(){qn.start()}let qn=new wc;qn.setAnimationLoop(qc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(x){da=x,yt.setAnimationLoop(x),x===null?qn.stop():qn.start()},yt.addEventListener("sessionstart",qo),yt.addEventListener("sessionend",Bo),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(x,L);let X=yt.enabled===!0&&yt.isPresenting===!0,D=w!==null&&(tt===null||X)&&w.begin(C,tt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(L),L=yt.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,L,tt),M=at.get(x,S.length),M.init(L),M.state.textureUnits=H.getTextureUnits(),S.push(M),Wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ot.setFromProjectionMatrix(Wt,Ze,L.reversedDepth),te=this.localClippingEnabled,zt=Tt.init(this.clippingPlanes,te),b=ct.get(x,P.length),b.init(),P.push(b),yt.enabled===!0&&yt.isPresenting===!0){let gt=C.xr.getDepthSensingMesh();gt!==null&&fa(gt,L,-1/0,C.sortObjects)}fa(x,L,0,C.sortObjects),b.finish(),O!==null&&O.updateLights(M.state.lightsArray),C.sortObjects===!0&&b.sort(vt,Ut),ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ae&&Ct.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Tt.beginShadows();let W=M.state.shadowsArray;if(Pt.render(W,x,L),zt===!0&&Tt.endShadows(),(D&&w.hasRenderPass())===!1){let gt=b.opaque,ht=b.transmissive;if(M.setupLights(),L.isArrayCamera){let xt=L.cameras;if(ht.length>0)for(let At=0,Rt=xt.length;At<Rt;At++){let Dt=xt[At];Jo(gt,ht,x,Dt)}ae&&Ct.render(x);for(let At=0,Rt=xt.length;At<Rt;At++){let Dt=xt[At];Xo(b,x,Dt,Dt.viewport)}}else ht.length>0&&Jo(gt,ht,x,L),ae&&Ct.render(x),Xo(b,x,L)}tt!==null&&B===0&&(H.updateMultisampleRenderTarget(tt),H.updateRenderTargetMipmap(tt)),D&&w.end(C),x.isScene===!0&&x.onAfterRender(C,x,L),ft.resetDefaultState(),z=-1,Q=null,S.pop(),S.length>0?(M=S[S.length-1],H.setTextureUnits(M.state.textureUnits),zt===!0&&Tt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,O!==null&&O.renderEnd()};function fa(x,L,X,D){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Ot)){D&&ve.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Wt);let gt=Z.update(x),ht=x.material;ht.visible&&b.push(x,gt,ht,X,ve.z,null,L)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Ot))){let gt=Z.update(x),ht=x.material;if(D&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ve.copy(x.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ve.copy(gt.boundingSphere.center)),ve.applyMatrix4(x.matrixWorld).applyMatrix4(Wt)),Array.isArray(ht)){let xt=gt.groups;for(let At=0,Rt=xt.length;At<Rt;At++){let Dt=xt[At],St=ht[Dt.materialIndex];St&&St.visible&&b.push(x,gt,St,X,ve.z,Dt,L)}}else ht.visible&&b.push(x,gt,ht,X,ve.z,null,L)}}let dt=x.children;for(let gt=0,ht=dt.length;gt<ht;gt++)fa(dt[gt],L,X,D)}function Xo(x,L,X,D){let{opaque:W,transmissive:dt,transparent:gt}=x;M.setupLightsView(X),zt===!0&&Tt.setGlobalState(C.clippingPlanes,X),D&&p.viewport(nt.copy(D)),W.length>0&&ps(W,L,X),dt.length>0&&ps(dt,L,X),gt.length>0&&ps(gt,L,X),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Jo(x,L,X,D){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[D.id]===void 0){let St=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[D.id]=new Re(1,1,{generateMipmaps:!0,type:St?tn:ke,minFilter:Wn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}let dt=M.state.transmissionRenderTarget[D.id],gt=D.viewport||nt;dt.setSize(gt.z*C.transmissionResolutionScale,gt.w*C.transmissionResolutionScale);let ht=C.getRenderTarget(),xt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor($t),Bt=C.getClearAlpha(),Bt<1&&C.setClearColor(16777215,.5),C.clear(),ae&&Ct.render(X);let Rt=C.toneMapping;C.toneMapping=We;let Dt=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),M.setupLightsView(D),zt===!0&&Tt.setGlobalState(C.clippingPlanes,D),ps(x,X,D),H.updateMultisampleRenderTarget(dt),H.updateRenderTargetMipmap(dt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Kt=0,he=L.length;Kt<he;Kt++){let ie=L[Kt],{object:Qt,geometry:Ae,material:pt,group:_e}=ie;if(pt.side===un&&Qt.layers.test(D.layers)){let Xt=pt.side;pt.side=Ee,pt.needsUpdate=!0,zo(Qt,X,D,Ae,pt,_e),pt.side=Xt,pt.needsUpdate=!0,St=!0}}St===!0&&(H.updateMultisampleRenderTarget(dt),H.updateRenderTargetMipmap(dt))}C.setRenderTarget(ht,xt,At),C.setClearColor($t,Bt),Dt!==void 0&&(D.viewport=Dt),C.toneMapping=Rt}function ps(x,L,X){let D=L.isScene===!0?L.overrideMaterial:null;for(let W=0,dt=x.length;W<dt;W++){let gt=x[W],{object:ht,geometry:xt,group:At}=gt,Rt=gt.material;Rt.allowOverride===!0&&D!==null&&(Rt=D),ht.layers.test(X.layers)&&zo(ht,L,X,xt,Rt,At)}}function zo(x,L,X,D,W,dt){O!==null&&W.isNodeMaterial&&O.setObject(x,W),x.onBeforeRender(C,L,X,D,W,dt),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),W.onBeforeRender(C,L,X,D,x,dt),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Ee,W.needsUpdate=!0,C.renderBufferDirect(X,L,D,W,x,dt),W.side=On,W.needsUpdate=!0,C.renderBufferDirect(X,L,D,W,x,dt),W.side=un):C.renderBufferDirect(X,L,D,W,x,dt),x.onAfterRender(C,L,X,D,W,dt)}function ms(x,L,X){L.isScene!==!0&&(L=Ne);let D=k.get(x),W=M.state.lights,dt=M.state.shadowsArray,gt=W.state.version,ht=rt.getParameters(x,W.state,dt,L,X,M.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ht),At=D.programs;D.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,D.fog=L.fog;let Rt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;D.envMap=it.get(x.envMap||D.environment,Rt),D.envMapRotation=D.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,At===void 0&&(x.addEventListener("dispose",en),At=new Map,D.programs=At);let Dt=At.get(xt);if(Dt!==void 0){if(D.currentProgram===Dt&&D.lightsStateVersion===gt)return Go(x,ht),Dt}else ht.uniforms=rt.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,X,ht),x.onBeforeCompile(ht,C),Dt=rt.acquireProgram(ht,xt),At.set(xt,Dt),D.uniforms=ht.uniforms;let St=D.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=Tt.uniform),Go(x,ht),D.needsLights=zc(x),D.lightsStateVersion=gt,D.needsLights&&(St.ambientLightColor.value=W.state.ambient,St.lightProbe.value=W.state.probe,St.sunLights.value=W.state.sun,St.sunLightShadows.value=W.state.sunShadow,St.directionalLights.value=W.state.directional,St.directionalLightShadows.value=W.state.directionalShadow,St.spotLights.value=W.state.spot,St.spotLightShadows.value=W.state.spotShadow,St.rectAreaLights.value=W.state.rectArea,St.ltc_1.value=W.state.rectAreaLTC1,St.ltc_2.value=W.state.rectAreaLTC2,St.pointLights.value=W.state.point,St.pointLightShadows.value=W.state.pointShadow,St.hemisphereLights.value=W.state.hemi,St.sunShadowMatrix.value=W.state.sunShadowMatrix,St.sunShadowCascade.value=W.state.sunShadowCascade,St.directionalShadowMatrix.value=W.state.directionalShadowMatrix,St.spotLightMatrix.value=W.state.spotLightMatrix,St.spotLightMap.value=W.state.spotLightMap,St.pointShadowMatrix.value=W.state.pointShadowMatrix),D.lightProbeGrid=M.state.lightProbeGridArray.length>0,D.currentProgram=Dt,D.uniformsList=null,Dt}function Ho(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Ci.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Go(x,L){let X=k.get(x);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function Bc(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let X=0,D=x.length;X<D;X++){let W=x[X];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Xc(x,L,X,D,W){L.isScene!==!0&&(L=Ne),H.resetTextureUnits();let dt=L.fog,gt=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?L.environment:null,ht=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:kt.workingColorSpace,xt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,At=it.get(D.envMap||gt,xt),Rt=D.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Dt=!!X.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),St=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,he=!!X.morphAttributes.color,ie=We;D.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ie=C.toneMapping);let Qt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ae=Qt!==void 0?Qt.length:0,pt=k.get(D),_e=M.state.lights;if(zt===!0&&(te===!0||x!==Q)){let ne=x===Q&&D.id===z;Tt.setState(D,x,ne)}let Xt=!1;D.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==_e.state.version||pt.outputColorSpace!==ht||W.isBatchedMesh&&pt.batching===!1||!W.isBatchedMesh&&pt.batching===!0||W.isBatchedMesh&&pt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&pt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&pt.instancing===!1||!W.isInstancedMesh&&pt.instancing===!0||W.isSkinnedMesh&&pt.skinning===!1||!W.isSkinnedMesh&&pt.skinning===!0||W.isInstancedMesh&&pt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&pt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&pt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&pt.instancingMorph===!1&&W.morphTexture!==null||pt.envMap!==At||D.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Tt.numPlanes||pt.numIntersection!==Tt.numIntersection)||pt.vertexAlphas!==Rt||pt.vertexTangents!==Dt||pt.morphTargets!==St||pt.morphNormals!==Kt||pt.morphColors!==he||pt.toneMapping!==ie||pt.morphTargetsCount!==Ae||!!pt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Xt=!0):(Xt=!0,pt.__version=D.version);let Ie=pt.currentProgram;Xt===!0&&(Ie=ms(D,L,W),O&&D.isNodeMaterial&&O.onUpdateProgram(D,Ie,pt));let nn=!1,An=!1,ei=!1,Zt=Ie.getUniforms(),le=pt.uniforms;if(p.useProgram(Ie.program)&&(nn=!0,An=!0,ei=!0),D.id!==z&&(z=D.id,An=!0),pt.needsLights){let ne=Bc(M.state.lightProbeGridArray,W);pt.lightProbeGrid!==ne&&(pt.lightProbeGrid=ne,An=!0)}if(nn||Q!==x){p.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Zt.setValue(U,"projectionMatrix",x.projectionMatrix),Zt.setValue(U,"viewMatrix",x.matrixWorldInverse);let Tn=Zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,re.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&Zt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Zt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,An=!0,ei=!0)}if(pt.needsLights&&(_e.state.sunShadowMap.length>0&&Zt.setValue(U,"sunShadowMap",_e.state.sunShadowMap,H),_e.state.directionalShadowMap.length>0&&Zt.setValue(U,"directionalShadowMap",_e.state.directionalShadowMap,H),_e.state.spotShadowMap.length>0&&Zt.setValue(U,"spotShadowMap",_e.state.spotShadowMap,H),_e.state.pointShadowMap.length>0&&Zt.setValue(U,"pointShadowMap",_e.state.pointShadowMap,H)),W.isSkinnedMesh){Zt.setOptional(U,W,"bindMatrix"),Zt.setOptional(U,W,"bindMatrixInverse");let ne=W.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),Zt.setValue(U,"boneTexture",ne.boneTexture,H))}W.isBatchedMesh&&(Zt.setOptional(U,W,"batchingTexture"),Zt.setValue(U,"batchingTexture",W._matricesTexture,H),Zt.setOptional(U,W,"batchingIdTexture"),Zt.setValue(U,"batchingIdTexture",W._indirectTexture,H),Zt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Zt.setValue(U,"batchingColorTexture",W._colorsTexture,H));let bn=X.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&N.update(W,X,Ie),(An||pt.receiveShadow!==W.receiveShadow)&&(pt.receiveShadow=W.receiveShadow,Zt.setValue(U,"receiveShadow",W.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&L.environment!==null&&(le.envMapIntensity.value=L.environmentIntensity),le.dfgLUT!==void 0&&(le.dfgLUT.value=Sm()),An){if(Zt.setValue(U,"toneMappingExposure",C.toneMappingExposure),pt.needsLights&&Jc(le,ei),dt&&D.fog===!0&&bt.refreshFogUniforms(le,dt),bt.refreshMaterialUniforms(le,D,$,G,M.state.transmissionRenderTarget[x.id]),pt.needsLights&&pt.lightProbeGrid){let ne=pt.lightProbeGrid;le.probesSH.value=ne.texture,le.probesMin.value.copy(ne.boundingBox.min),le.probesMax.value.copy(ne.boundingBox.max),le.probesResolution.value.copy(ne.resolution)}Ci.upload(U,Ho(pt),le,H)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ci.upload(U,Ho(pt),le,H),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Zt.setValue(U,"center",W.center),Zt.setValue(U,"modelViewMatrix",W.modelViewMatrix),Zt.setValue(U,"normalMatrix",W.normalMatrix),Zt.setValue(U,"modelMatrix",W.matrixWorld),D.uniformsGroups!==void 0){let ne=D.uniformsGroups;for(let Tn=0,ni=ne.length;Tn<ni;Tn++){let Yo=ne[Tn];et.update(Yo,Ie),et.bind(Yo,Ie)}}return Ie}function Jc(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.sunLights.needsUpdate=L,x.sunLightShadows.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function zc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(x,L,X){let D=k.get(x);D.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),k.get(x.texture).__webglTexture=L,k.get(x.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:X,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let X=k.get(x);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,X=0){tt=x,Y=L,B=X;let D=null,W=!1,dt=!1;if(x){let ht=k.get(x);if(ht.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),nt.copy(x.viewport),_t.copy(x.scissor),Mt=x.scissorTest,p.viewport(nt),p.scissor(_t),p.setScissorTest(Mt),z=-1;return}else if(ht.__webglFramebuffer===void 0)H.setupRenderTarget(x);else if(ht.__hasExternalTextures)H.rebindTextures(x,k.get(x.texture).__webglTexture,k.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Rt=x.depthTexture;if(ht.__boundDepthTexture!==Rt){if(Rt!==null&&k.has(Rt)&&(x.width!==Rt.image.width||x.height!==Rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(x)}}let xt=x.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let At=k.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(At[L])?D=At[L][X]:D=At[L],W=!0):x.samples>0&&H.useMultisampledRTT(x)===!1?D=k.get(x).__webglMultisampledFramebuffer:Array.isArray(At)?D=At[X]:D=At,nt.copy(x.viewport),_t.copy(x.scissor),Mt=x.scissorTest}else nt.copy(mt).multiplyScalar($).floor(),_t.copy(Ft).multiplyScalar($).floor(),Mt=pe;if(X!==0&&(D=J),p.bindFramebuffer(U.FRAMEBUFFER,D)&&p.drawBuffers(x,D),p.viewport(nt),p.scissor(_t),p.setScissorTest(Mt),W){let ht=k.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ht.__webglTexture,X)}else if(dt){let ht=L;for(let xt=0;xt<x.textures.length;xt++){let At=k.get(x.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,At.__webglTexture,X,ht)}}else if(x!==null&&X!==0){let ht=k.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,X)}z=-1};function Ko(x){let L=k.get(x);return(L.__readFormat!==x.format||L.__readType!==x.type)&&(L.__readFormat=x.format,L.__readType=x.type,L.__formatReadable=T.textureFormatReadable(x.format),L.__typeReadable=T.textureTypeReadable(x.type)),L}this.readRenderTargetPixels=function(x,L,X,D,W,dt,gt,ht=0){if(!(x&&x.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){p.bindFramebuffer(U.FRAMEBUFFER,xt);try{let At=x.textures[ht],Rt=At.format,Dt=At.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let St=Ko(At);if(St.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-D&&X>=0&&X<=x.height-W&&U.readPixels(L,X,D,W,lt.convert(Rt),lt.convert(Dt),dt)}finally{let At=tt!==null?k.get(tt).__webglFramebuffer:null;p.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(x,L,X,D,W,dt,gt,ht=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(L>=0&&L<=x.width-D&&X>=0&&X<=x.height-W){p.bindFramebuffer(U.FRAMEBUFFER,xt);let At=x.textures[ht],Rt=At.format,Dt=At.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);let St=Ko(At);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(L,X,D,W,lt.convert(Rt),lt.convert(Dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let he=tt!==null?k.get(tt).__webglFramebuffer:null;p.bindFramebuffer(U.FRAMEBUFFER,he);let ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ql(U,ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Kt),U.deleteSync(ie),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,X=0){let D=Math.pow(2,-X),W=Math.floor(x.image.width*D),dt=Math.floor(x.image.height*D),gt=L!==null?L.x:0,ht=L!==null?L.y:0;H.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,gt,ht,W,dt),p.unbindTexture()},this.copyTextureToTexture=function(x,L,X=null,D=null,W=0,dt=0){let gt,ht,xt,At,Rt,Dt,St,Kt,he,ie=x.isCompressedTexture?x.mipmaps[dt]:x.image;if(X!==null)gt=X.max.x-X.min.x,ht=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,Rt=X.min.y,Dt=X.isBox3?X.min.z:0;else{let le=Math.pow(2,-W);gt=Math.floor(ie.width*le),ht=Math.floor(ie.height*le),x.isDataArrayTexture?xt=ie.depth:x.isData3DTexture?xt=Math.floor(ie.depth*le):xt=1,At=0,Rt=0,Dt=0}D!==null?(St=D.x,Kt=D.y,he=D.z):(St=0,Kt=0,he=0);let Qt=lt.convert(L.format),Ae=lt.convert(L.type),pt;L.isData3DTexture?(H.setTexture3D(L,0),pt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(H.setTexture2DArray(L,0),pt=U.TEXTURE_2D_ARRAY):(H.setTexture2D(L,0),pt=U.TEXTURE_2D),p.activeTexture(U.TEXTURE0),p.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),p.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),p.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let _e=p.getParameter(U.UNPACK_ROW_LENGTH),Xt=p.getParameter(U.UNPACK_IMAGE_HEIGHT),Ie=p.getParameter(U.UNPACK_SKIP_PIXELS),nn=p.getParameter(U.UNPACK_SKIP_ROWS),An=p.getParameter(U.UNPACK_SKIP_IMAGES);p.pixelStorei(U.UNPACK_ROW_LENGTH,ie.width),p.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie.height),p.pixelStorei(U.UNPACK_SKIP_PIXELS,At),p.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),p.pixelStorei(U.UNPACK_SKIP_IMAGES,Dt);let ei=x.isDataArrayTexture||x.isData3DTexture,Zt=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let le=k.get(x),bn=k.get(L),ne=k.get(le.__renderTarget),Tn=k.get(bn.__renderTarget);p.bindFramebuffer(U.READ_FRAMEBUFFER,ne.__webglFramebuffer),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let ni=0;ni<xt;ni++)ei&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(x).__webglTexture,W,Dt+ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(L).__webglTexture,dt,he+ni)),U.blitFramebuffer(At,Rt,gt,ht,St,Kt,gt,ht,U.DEPTH_BUFFER_BIT,U.NEAREST);p.bindFramebuffer(U.READ_FRAMEBUFFER,null),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||x.isRenderTargetTexture||k.has(x)){let le=k.get(x),bn=k.get(L);p.bindFramebuffer(U.READ_FRAMEBUFFER,V),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let ne=0;ne<xt;ne++)ei?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.__webglTexture,W,Dt+ne):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,le.__webglTexture,W),Zt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bn.__webglTexture,dt,he+ne):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bn.__webglTexture,dt),W!==0?U.blitFramebuffer(At,Rt,gt,ht,St,Kt,gt,ht,U.COLOR_BUFFER_BIT,U.NEAREST):Zt?U.copyTexSubImage3D(pt,dt,St,Kt,he+ne,At,Rt,gt,ht):U.copyTexSubImage2D(pt,dt,St,Kt,At,Rt,gt,ht);p.bindFramebuffer(U.READ_FRAMEBUFFER,null),p.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Zt?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(pt,dt,St,Kt,he,gt,ht,xt,Qt,Ae,ie.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(pt,dt,St,Kt,he,gt,ht,xt,Qt,ie.data):U.texSubImage3D(pt,dt,St,Kt,he,gt,ht,xt,Qt,Ae,ie):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,St,Kt,gt,ht,Qt,Ae,ie.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,St,Kt,ie.width,ie.height,Qt,ie.data):U.texSubImage2D(U.TEXTURE_2D,dt,St,Kt,gt,ht,Qt,Ae,ie);p.pixelStorei(U.UNPACK_ROW_LENGTH,_e),p.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xt),p.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),p.pixelStorei(U.UNPACK_SKIP_ROWS,nn),p.pixelStorei(U.UNPACK_SKIP_IMAGES,An),dt===0&&L.generateMipmaps&&U.generateMipmap(pt),p.unbindTexture()},this.initRenderTarget=function(x){k.get(x).__webglFramebuffer===void 0&&H.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?H.setTextureCube(x,0):x.isData3DTexture?H.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?H.setTexture2DArray(x,0):H.setTexture2D(x,0),p.unbindTexture()},this.resetState=function(){Y=0,B=0,tt=null,p.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}});var Dc={};Gc(Dc,{LOOP_SECONDS:()=>Rc,coverScale:()=>Oc,fragmentShader:()=>Fc,mountCloudScene:()=>ym,vertexShader:()=>Vc});function Oc(i,t,e,n){let s=i/t,r=e/n;return[Math.min(1,s/r),Math.min(1,r/s)]}function ym(i,{imageUrl:t,onReady:e,onError:n}){let s=new la({alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power",preserveDrawingBuffer:!1});s.outputColorSpace=Me,s.toneMapping=We,s.setClearColor(14937584,1);let r=s.domElement;r.setAttribute("aria-hidden","true"),i.replaceChildren(r);let a=new zi,o=new jn(-1,1,1,-1,0,1),c=new Yn(2,2),l={uClouds:{value:null},uCover:{value:new It(1,1)},uPointer:{value:new It},uPresence:{value:0},uPhase:{value:0},uAspect:{value:1}},h=new Le({uniforms:l,vertexShader:Vc,fragmentShader:Fc,depthTest:!1,depthWrite:!1,toneMapped:!1}),f=new Ve(c,h);f.frustumCulled=!1,a.add(f);let u=new It,g=0,v=null,A=!1,m=!1,d=!1,_=!1,E=0,y=0,b=0,M=1920,P=1280,S=1e3/60;s.debug.onShaderError=()=>{_=!0};let w=()=>{A||(Y.dispose(),n())},C=()=>{if(!(A||!d)&&(l.uPhase.value=b,s.render(a,o),_))throw new Error("Cloud shader unavailable")},R=()=>{if(A)return;let{width:B,height:tt}=i.getBoundingClientRect();if(!B||!tt)return;let z=B<=700,Q=z||navigator.deviceMemory&&navigator.deviceMemory<=4?1.25:1.5;s.setPixelRatio(Math.min(window.devicePixelRatio||1,Q)),s.setSize(B,tt,!1),l.uCover.value.set(...Oc(B,tt,M,P)),l.uAspect.value=B/tt,S=1e3/(z?30:60);try{C()}catch{w()}},O=B=>{if(E=0,A||!m||!d)return;let tt=B-y;if(tt>=S-1){let z=Math.min(tt/1e3,.05);y=B,b=(b+z*Math.PI*2/Rc)%(Math.PI*2);let Q=1-Math.exp(-z*5);l.uPointer.value.lerp(u,Q),l.uPresence.value+=(g-l.uPresence.value)*Q;try{C()}catch{w();return}}E=requestAnimationFrame(O)},J=()=>{m&&d&&!A&&!E&&(y=performance.now(),E=requestAnimationFrame(O))},V=B=>{B.preventDefault(),w()};r.addEventListener("webglcontextlost",V);let I=typeof ResizeObserver=="function"?new ResizeObserver(R):null;I?.observe(i),I||window.addEventListener("resize",R,{passive:!0});let Y={setActive(B){A||m===B||(m=B,m?J():(cancelAnimationFrame(E),E=0))},setPointer(B,tt){A||(u.set(B,tt),g=1)},resetPointer(){u.set(0,0),g=0},dispose(){A||(A=!0,cancelAnimationFrame(E),I?.disconnect(),I||window.removeEventListener("resize",R),r.removeEventListener("webglcontextlost",V),c.dispose(),h.dispose(),v?.dispose(),s.dispose(),s.forceContextLoss(),r.remove())}};return R(),v=new $i().load(t,B=>{if(A){B.dispose();return}v=B,v.colorSpace=Me,v.minFilter=fe,v.magFilter=fe,v.generateMipmaps=!1,M=v.image.naturalWidth||v.image.width,P=v.image.naturalHeight||v.image.height,l.uClouds.value=v,d=!0,R(),A||(e(),J())},void 0,w),Y}var Rc,Vc,Fc,Wc=pa(()=>{Cc();Rc=96,Vc=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Fc=`
  uniform sampler2D uClouds;
  uniform vec2 uCover;
  uniform vec2 uPointer;
  uniform float uPresence;
  uniform float uPhase;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    // Overscan the supplied photograph, keeping every sample inside its edges.
    vec2 imageUv = (vUv - 0.5) * uCover * 0.9 + 0.5;
    float clouds = 1.0 - smoothstep(0.28, 0.46, imageUv.y);
    float foreground = 1.0 - smoothstep(0.07, 0.30, imageUv.y);
    float depth = mix(0.12, 1.0, foreground) * clouds;

    // Traveling waves share a closed phase: position AND velocity agree at
    // the loop boundary. No repeated image tiles, video reset, or edge seam.
    vec2 wind = vec2(
      sin(imageUv.x * 7.0 + imageUv.y * 3.0 - uPhase) * 0.016
        + sin(imageUv.y * 13.0 - uPhase * 2.0) * 0.004,
      sin(imageUv.x * 8.0 + imageUv.y * 5.0 - uPhase) * 0.004
        + sin(imageUv.x * 12.0 - uPhase * 2.0) * 0.002
    );
    imageUv += wind * mix(0.26, 1.0, foreground) * clouds;
    imageUv -= uPointer * uCover * (0.003 + depth * 0.021);

    // Clouds billow gently around the cursor, in addition to depth parallax.
    // The sky and the live HTML reading layer remain steady.
    vec2 cursorUv = uPointer * 0.5 + 0.5;
    vec2 delta = vUv - cursorUv;
    vec2 distanceUv = delta * vec2(uAspect, 1.0);
    float influence = exp(-dot(distanceUv, distanceUv) * 12.0) * uPresence * clouds;
    imageUv += delta * influence * 0.012;
    imageUv = clamp(imageUv, vec2(0.002), vec2(0.998));

    gl_FragColor = vec4(texture2D(uClouds, imageUv).rgb, 1.0);
    #include <colorspace_fragment>
  }
`});var ha=new Map,Am="data:image/jpeg;base64,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";function bm(i,t){if(ha.has(i)){let R=ha.get(i);return t&&R.setMotionReader(t),R}let e=i.querySelector("[data-hero-live]"),n=i.querySelector("[data-cloud-pause]");if(!e)return null;let s=matchMedia("(prefers-reduced-motion: reduce)"),r=matchMedia("(hover: hover) and (pointer: fine)"),a=navigator.connection,o=t,c=!0,l=!1,h=!1,f=!1,u=!1,g=!1,v=null,A=()=>s.matches||!!a?.saveData||/(^|-)2g$/.test(a?.effectiveType||"")||!!o?.(),m=()=>!l&&!A()&&!u&&c&&!document.hidden,d=()=>{n&&(n.hidden=A()||f,n.setAttribute("aria-label",u?"Resume background animation":"Pause background animation"),n.title=u?"Resume background animation":"Pause background animation",n.dataset.paused=String(u))},_=()=>{i.dataset.visualMode="poster"},E=()=>{l||(f=!0,g=!1,v?.dispose(),v=null,_(),d())},y=async()=>{if(!(h||f||v||!m())){h=!0;try{let{mountCloudScene:R}=await Promise.resolve().then(()=>(Wc(),Dc));if(!m())return;v=R(e,{imageUrl:Am,onReady(){l||(g=!0,b())},onError:E}),v.setActive(m())}catch{E()}finally{h=!1}}};function b(){l||(d(),v?.setActive(m()),A()||f?_():g?i.dataset.visualMode="webgl":(_(),y()),(!r.matches||A())&&v?.resetPointer())}let M=R=>{if(!m()||!r.matches||R.pointerType==="touch")return;let O=i.getBoundingClientRect();!O.width||!O.height||v?.setPointer(Math.max(-1,Math.min(1,((R.clientX-O.left)/O.width-.5)*2)),Math.max(-1,Math.min(1,(.5-(R.clientY-O.top)/O.height)*2)))},P=()=>v?.resetPointer(),S=()=>{u=!u,b()},w=typeof IntersectionObserver=="function"?new IntersectionObserver(R=>{c=R[0]?.isIntersecting??!0,c||P(),b()},{threshold:.08}):null;w?.observe(i),i.addEventListener("pointermove",M,{passive:!0}),i.addEventListener("pointerleave",P,{passive:!0}),n?.addEventListener("click",S),document.addEventListener("visibilitychange",b),s.addEventListener("change",b),r.addEventListener("change",b),a?.addEventListener?.("change",b);let C={updateMotion:b,setMotionReader(R){o=R,b()},dispose(){l||(l=!0,w?.disconnect(),v?.dispose(),v=null,i.removeEventListener("pointermove",M),i.removeEventListener("pointerleave",P),n?.removeEventListener("click",S),document.removeEventListener("visibilitychange",b),s.removeEventListener("change",b),r.removeEventListener("change",b),a?.removeEventListener?.("change",b),delete i.dataset.visualMode,ha.delete(i))}};return ha.set(i,C),_(),b(),C}window.ArcboundHeroMark={mount:bm};window.dispatchEvent(new Event("arcbound:hero-ready"));})();
