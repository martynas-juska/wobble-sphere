/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _i={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pc=0,Va=1,mc=2,_c=0,sl=1,al=2,ln=3,An=0,Rt=1,un=2,bn=0,gi=1,Ga=2,Wa=3,Xa=4,gc=5,Hn=100,vc=101,xc=102,Mc=103,Sc=104,yc=200,Ec=201,bc=202,Tc=203,Ps=204,Ds=205,Ac=206,wc=207,Rc=208,Cc=209,Pc=210,Dc=211,Lc=212,Ic=213,Uc=214,Ls=0,Is=1,Us=2,yi=3,Ns=4,Fs=5,Os=6,Bs=7,ol=0,Nc=1,Fc=2,Tn=0,Oc=1,Bc=2,zc=3,ll=4,Hc=5,kc=6,Vc=7,cl=300,Ei=301,bi=302,zs=303,Hs=304,Fr=306,ks=1e3,Wn=1001,Vs=1002,Zt=1003,Gc=1004,er=1005,jt=1006,Gr=1007,En=1008,pn=1009,ul=1010,hl=1011,Wi=1012,xa=1013,qn=1014,hn=1015,ji=1016,Ma=1017,Sa=1018,Ti=1020,fl=35902,dl=1021,pl=1022,kt=1023,ml=1024,_l=1025,vi=1026,Ai=1027,gl=1028,ya=1029,vl=1030,Ea=1031,ba=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,Gs=35840,Ws=35841,Xs=35842,qs=35843,Ys=36196,js=37492,Zs=37496,Ks=37808,$s=37809,Js=37810,Qs=37811,ea=37812,ta=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,Cr=36492,ua=36494,ha=36495,xl=36283,fa=36284,da=36285,pa=36286,Wc=3200,Ml=3201,Sl=0,Xc=1,yn="",wt="srgb",wi="srgb-linear",Lr="linear",tt="srgb",$n=7680,qa=519,qc=512,Yc=513,jc=514,yl=515,Zc=516,Kc=517,$c=518,Jc=519,Ya=35044,ja="300 es",fn=2e3,Ir=2001;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Za=1234567;const ki=Math.PI/180,Xi=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function Ta(i,e){return(i%e+e)%e}function Qc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function eu(i,e,t){return i!==e?(t-i)/(e-i):0}function Vi(i,e,t){return(1-t)*i+t*e}function tu(i,e,t,n){return Vi(i,e,1-Math.exp(-t*n))}function nu(i,e=1){return e-Math.abs(Ta(i,e*2)-e)}function iu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function au(i,e){return i+Math.random()*(e-i)}function ou(i){return i*(.5-Math.random())}function lu(i){i!==void 0&&(Za=i);let e=Za+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cu(i){return i*ki}function uu(i){return i*Xi}function hu(i){return(i&i-1)===0&&i!==0}function fu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),f=s((e+n)/2),p=a((e+n)/2),_=s((e-n)/2),m=a((e-n)/2),g=s((n-e)/2),M=a((n-e)/2);switch(r){case"XYX":i.set(o*p,l*_,l*m,o*f);break;case"YZY":i.set(l*m,o*p,l*_,o*f);break;case"ZXZ":i.set(l*_,l*m,o*p,o*f);break;case"XZX":i.set(o*p,l*M,l*g,o*f);break;case"YXY":i.set(l*g,o*p,l*M,o*f);break;case"ZYZ":i.set(l*M,l*g,o*p,o*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const El={DEG2RAD:ki,RAD2DEG:Xi,generateUUID:Di,clamp:Ge,euclideanModulo:Ta,mapLinear:Qc,inverseLerp:eu,lerp:Vi,damp:tu,pingpong:nu,smoothstep:iu,smootherstep:ru,randInt:su,randFloat:au,randFloatSpread:ou,seededRandom:lu,degToRad:cu,radToDeg:uu,isPowerOfTwo:hu,ceilPowerOfTwo:fu,floorPowerOfTwo:du,setQuaternionFromProperEuler:pu,normalize:St,denormalize:di};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,a,o,l,f){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,f)}set(e,t,n,r,s,a,o,l,f){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=l,p[6]=n,p[7]=a,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],f=n[1],p=n[4],_=n[7],m=n[2],g=n[5],M=n[8],A=r[0],d=r[3],u=r[6],R=r[1],w=r[4],S=r[7],U=r[2],x=r[5],b=r[8];return s[0]=a*A+o*R+l*U,s[3]=a*d+o*w+l*x,s[6]=a*u+o*S+l*b,s[1]=f*A+p*R+_*U,s[4]=f*d+p*w+_*x,s[7]=f*u+p*S+_*b,s[2]=m*A+g*R+M*U,s[5]=m*d+g*w+M*x,s[8]=m*u+g*S+M*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],p=e[8];return t*a*p-t*o*f-n*s*p+n*o*l+r*s*f-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],p=e[8],_=p*a-o*f,m=o*l-p*s,g=f*s-a*l,M=t*_+n*m+r*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(r*f-p*n)*A,e[2]=(o*n-r*a)*A,e[3]=m*A,e[4]=(p*t-r*l)*A,e[5]=(r*s-o*t)*A,e[6]=g*A,e[7]=(n*l-f*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),f=Math.sin(s);return this.set(n*l,n*f,-n*(l*a+f*o)+a+e,-r*f,r*l,-r*(-f*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new He;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){const i=Ur("canvas");return i.style.display="block",i}const Ka={};function On(i){i in Ka||(Ka[i]=!0,console.warn(i))}function _u(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function gu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $a=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ja=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xu(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yn?Lr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}const Ke=xu();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Mu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Ur("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=dn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Su=0;class Aa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xr(r[a].image)):s.push(Xr(r[a]))}else s=Xr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class Ct extends Zn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Wn,r=Wn,s=jt,a=En,o=kt,l=pn,f=Ct.DEFAULT_ANISOTROPY,p=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Di(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=cl;Ct.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,f=l[0],p=l[4],_=l[8],m=l[1],g=l[5],M=l[9],A=l[2],d=l[6],u=l[10];if(Math.abs(p-m)<.01&&Math.abs(_-A)<.01&&Math.abs(M-d)<.01){if(Math.abs(p+m)<.1&&Math.abs(_+A)<.1&&Math.abs(M+d)<.1&&Math.abs(f+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,S=(g+1)/2,U=(u+1)/2,x=(p+m)/4,b=(_+A)/4,v=(M+d)/4;return w>S&&w>U?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=x/n,s=b/n):S>U?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=x/r,s=v/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=b/s,r=v/s),this.set(n,r,s,t),this}let R=Math.sqrt((d-M)*(d-M)+(_-A)*(_-A)+(m-p)*(m-p));return Math.abs(R)<.001&&(R=1),this.x=(d-M)/R,this.y=(_-A)/R,this.z=(m-p)/R,this.w=Math.acos((f+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends Zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Aa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bu extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],f=n[r+1],p=n[r+2],_=n[r+3];const m=s[a+0],g=s[a+1],M=s[a+2],A=s[a+3];if(o===0){e[t+0]=l,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(o===1){e[t+0]=m,e[t+1]=g,e[t+2]=M,e[t+3]=A;return}if(_!==A||l!==m||f!==g||p!==M){let d=1-o;const u=l*m+f*g+p*M+_*A,R=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const U=Math.sqrt(w),x=Math.atan2(U,u*R);d=Math.sin(d*x)/U,o=Math.sin(o*x)/U}const S=o*R;if(l=l*d+m*S,f=f*d+g*S,p=p*d+M*S,_=_*d+A*S,d===1-o){const U=1/Math.sqrt(l*l+f*f+p*p+_*_);l*=U,f*=U,p*=U,_*=U}}e[t]=l,e[t+1]=f,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],f=n[r+2],p=n[r+3],_=s[a],m=s[a+1],g=s[a+2],M=s[a+3];return e[t]=o*M+p*_+l*g-f*m,e[t+1]=l*M+p*m+f*_-o*g,e[t+2]=f*M+p*g+o*m-l*_,e[t+3]=p*M-o*_-l*m-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,f=o(n/2),p=o(r/2),_=o(s/2),m=l(n/2),g=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=m*p*_+f*g*M,this._y=f*g*_-m*p*M,this._z=f*p*M+m*g*_,this._w=f*p*_-m*g*M;break;case"YXZ":this._x=m*p*_+f*g*M,this._y=f*g*_-m*p*M,this._z=f*p*M-m*g*_,this._w=f*p*_+m*g*M;break;case"ZXY":this._x=m*p*_-f*g*M,this._y=f*g*_+m*p*M,this._z=f*p*M+m*g*_,this._w=f*p*_-m*g*M;break;case"ZYX":this._x=m*p*_-f*g*M,this._y=f*g*_+m*p*M,this._z=f*p*M-m*g*_,this._w=f*p*_+m*g*M;break;case"YZX":this._x=m*p*_+f*g*M,this._y=f*g*_+m*p*M,this._z=f*p*M-m*g*_,this._w=f*p*_-m*g*M;break;case"XZY":this._x=m*p*_-f*g*M,this._y=f*g*_-m*p*M,this._z=f*p*M+m*g*_,this._w=f*p*_+m*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],f=t[2],p=t[6],_=t[10],m=n+o+_;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(p-l)*g,this._y=(s-f)*g,this._z=(a-r)*g}else if(n>o&&n>_){const g=2*Math.sqrt(1+n-o-_);this._w=(p-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+f)/g}else if(o>_){const g=2*Math.sqrt(1+o-n-_);this._w=(s-f)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+p)/g}else{const g=2*Math.sqrt(1+_-n-o);this._w=(a-r)/g,this._x=(s+f)/g,this._y=(l+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,f=t._z,p=t._w;return this._x=n*p+a*o+r*f-s*l,this._y=r*p+a*l+s*o-n*f,this._z=s*p+a*f+n*l-r*o,this._w=a*p-n*o-r*l-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const f=Math.sqrt(l),p=Math.atan2(f,o),_=Math.sin((1-t)*p)/f,m=Math.sin(t*p)/f;return this._w=a*_+this._w*m,this._x=n*_+this._x*m,this._y=r*_+this._y*m,this._z=s*_+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,f=2*(a*r-o*n),p=2*(o*t-s*r),_=2*(s*n-a*t);return this.x=t+l*f+a*_-o*p,this.y=n+l*p+o*f-s*_,this.z=r+l*_+s*p-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new k,Qa=new jn;class Zi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),nr.subVectors(this.max,Fi),Qn.subVectors(e.a,Fi),ei.subVectors(e.b,Fi),ti.subVectors(e.c,Fi),mn.subVectors(ei,Qn),_n.subVectors(ti,ei),Dn.subVectors(Qn,ti);let t=[0,-mn.z,mn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,mn.z,0,-mn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-mn.y,mn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!Yr(t,Qn,ei,ti,nr)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,Qn,ei,ti,nr))?!1:(ir.crossVectors(mn,_n),t=[ir.x,ir.y,ir.z],Yr(t,Qn,ei,ti,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new k,new k,new k,new k,new k,new k,new k,new k],Wt=new k,tr=new Zi,Qn=new k,ei=new k,ti=new k,mn=new k,_n=new k,Dn=new k,Fi=new k,nr=new k,ir=new k,Ln=new k;function Yr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const o=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),l=e.dot(Ln),f=t.dot(Ln),p=n.dot(Ln);if(Math.max(-Math.max(l,f,p),Math.min(l,f,p))>o)return!1}return!0}const Tu=new Zi,Oi=new k,jr=new k;class wa{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Oi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(jr)),this.expandByPoint(Oi.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new k,Zr=new k,rr=new k,gn=new k,Kr=new k,sr=new k,$r=new k;class Al{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zr.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=gn.dot(this.direction),l=-gn.dot(rr),f=gn.lengthSq(),p=Math.abs(1-a*a);let _,m,g,M;if(p>0)if(_=a*l-o,m=a*o-l,M=s*p,_>=0)if(m>=-M)if(m<=M){const A=1/p;_*=A,m*=A,g=_*(_+a*m+2*o)+m*(a*_+m+2*l)+f}else m=s,_=Math.max(0,-(a*m+o)),g=-_*_+m*(m+2*l)+f;else m=-s,_=Math.max(0,-(a*m+o)),g=-_*_+m*(m+2*l)+f;else m<=-M?(_=Math.max(0,-(-a*s+o)),m=_>0?-s:Math.min(Math.max(-s,-l),s),g=-_*_+m*(m+2*l)+f):m<=M?(_=0,m=Math.min(Math.max(-s,-l),s),g=m*(m+2*l)+f):(_=Math.max(0,-(a*s+o)),m=_>0?s:Math.min(Math.max(-s,-l),s),g=-_*_+m*(m+2*l)+f);else m=a>0?-s:s,_=Math.max(0,-(a*m+o)),g=-_*_+m*(m+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Zr).addScaledVector(rr,m),g}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),p>=0?(s=(e.min.y-m.y)*p,a=(e.max.y-m.y)*p):(s=(e.max.y-m.y)*p,a=(e.min.y-m.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),_>=0?(o=(e.min.z-m.z)*_,l=(e.max.z-m.z)*_):(o=(e.max.z-m.z)*_,l=(e.min.z-m.z)*_),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,s){Kr.subVectors(t,e),sr.subVectors(n,e),$r.crossVectors(Kr,sr);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,e);const l=o*this.direction.dot(sr.crossVectors(gn,sr));if(l<0)return null;const f=o*this.direction.dot(Kr.cross(gn));if(f<0||l+f>a)return null;const p=-o*gn.dot($r);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,a,o,l,f,p,_,m,g,M,A,d){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,f,p,_,m,g,M,A,d)}set(e,t,n,r,s,a,o,l,f,p,_,m,g,M,A,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=f,u[6]=p,u[10]=_,u[14]=m,u[3]=g,u[7]=M,u[11]=A,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),f=Math.sin(r),p=Math.cos(s),_=Math.sin(s);if(e.order==="XYZ"){const m=a*p,g=a*_,M=o*p,A=o*_;t[0]=l*p,t[4]=-l*_,t[8]=f,t[1]=g+M*f,t[5]=m-A*f,t[9]=-o*l,t[2]=A-m*f,t[6]=M+g*f,t[10]=a*l}else if(e.order==="YXZ"){const m=l*p,g=l*_,M=f*p,A=f*_;t[0]=m+A*o,t[4]=M*o-g,t[8]=a*f,t[1]=a*_,t[5]=a*p,t[9]=-o,t[2]=g*o-M,t[6]=A+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*p,g=l*_,M=f*p,A=f*_;t[0]=m-A*o,t[4]=-a*_,t[8]=M+g*o,t[1]=g+M*o,t[5]=a*p,t[9]=A-m*o,t[2]=-a*f,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*p,g=a*_,M=o*p,A=o*_;t[0]=l*p,t[4]=M*f-g,t[8]=m*f+A,t[1]=l*_,t[5]=A*f+m,t[9]=g*f-M,t[2]=-f,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,g=a*f,M=o*l,A=o*f;t[0]=l*p,t[4]=A-m*_,t[8]=M*_+g,t[1]=_,t[5]=a*p,t[9]=-o*p,t[2]=-f*p,t[6]=g*_+M,t[10]=m-A*_}else if(e.order==="XZY"){const m=a*l,g=a*f,M=o*l,A=o*f;t[0]=l*p,t[4]=-_,t[8]=f*p,t[1]=m*_+A,t[5]=a*p,t[9]=g*_-M,t[2]=M*_-g,t[6]=o*p,t[10]=A*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,wu)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),vn.crossVectors(n,Dt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),vn.crossVectors(n,Dt)),vn.normalize(),ar.crossVectors(Dt,vn),r[0]=vn.x,r[4]=ar.x,r[8]=Dt.x,r[1]=vn.y,r[5]=ar.y,r[9]=Dt.y,r[2]=vn.z,r[6]=ar.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],f=n[12],p=n[1],_=n[5],m=n[9],g=n[13],M=n[2],A=n[6],d=n[10],u=n[14],R=n[3],w=n[7],S=n[11],U=n[15],x=r[0],b=r[4],v=r[8],h=r[12],c=r[1],y=r[5],I=r[9],O=r[13],G=r[2],W=r[6],B=r[10],Z=r[14],X=r[3],re=r[7],se=r[11],ve=r[15];return s[0]=a*x+o*c+l*G+f*X,s[4]=a*b+o*y+l*W+f*re,s[8]=a*v+o*I+l*B+f*se,s[12]=a*h+o*O+l*Z+f*ve,s[1]=p*x+_*c+m*G+g*X,s[5]=p*b+_*y+m*W+g*re,s[9]=p*v+_*I+m*B+g*se,s[13]=p*h+_*O+m*Z+g*ve,s[2]=M*x+A*c+d*G+u*X,s[6]=M*b+A*y+d*W+u*re,s[10]=M*v+A*I+d*B+u*se,s[14]=M*h+A*O+d*Z+u*ve,s[3]=R*x+w*c+S*G+U*X,s[7]=R*b+w*y+S*W+U*re,s[11]=R*v+w*I+S*B+U*se,s[15]=R*h+w*O+S*Z+U*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],f=e[13],p=e[2],_=e[6],m=e[10],g=e[14],M=e[3],A=e[7],d=e[11],u=e[15];return M*(+s*l*_-r*f*_-s*o*m+n*f*m+r*o*g-n*l*g)+A*(+t*l*g-t*f*m+s*a*m-r*a*g+r*f*p-s*l*p)+d*(+t*f*_-t*o*g-s*a*_+n*a*g+s*o*p-n*f*p)+u*(-r*o*p-t*l*_+t*o*m+r*a*_-n*a*m+n*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],f=e[7],p=e[8],_=e[9],m=e[10],g=e[11],M=e[12],A=e[13],d=e[14],u=e[15],R=_*d*f-A*m*f+A*l*g-o*d*g-_*l*u+o*m*u,w=M*m*f-p*d*f-M*l*g+a*d*g+p*l*u-a*m*u,S=p*A*f-M*_*f+M*o*g-a*A*g-p*o*u+a*_*u,U=M*_*l-p*A*l-M*o*m+a*A*m+p*o*d-a*_*d,x=t*R+n*w+r*S+s*U;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=R*b,e[1]=(A*m*s-_*d*s-A*r*g+n*d*g+_*r*u-n*m*u)*b,e[2]=(o*d*s-A*l*s+A*r*f-n*d*f-o*r*u+n*l*u)*b,e[3]=(_*l*s-o*m*s-_*r*f+n*m*f+o*r*g-n*l*g)*b,e[4]=w*b,e[5]=(p*d*s-M*m*s+M*r*g-t*d*g-p*r*u+t*m*u)*b,e[6]=(M*l*s-a*d*s-M*r*f+t*d*f+a*r*u-t*l*u)*b,e[7]=(a*m*s-p*l*s+p*r*f-t*m*f-a*r*g+t*l*g)*b,e[8]=S*b,e[9]=(M*_*s-p*A*s-M*n*g+t*A*g+p*n*u-t*_*u)*b,e[10]=(a*A*s-M*o*s+M*n*f-t*A*f-a*n*u+t*o*u)*b,e[11]=(p*o*s-a*_*s-p*n*f+t*_*f+a*n*g-t*o*g)*b,e[12]=U*b,e[13]=(p*A*r-M*_*r+M*n*m-t*A*m-p*n*d+t*_*d)*b,e[14]=(M*o*r-a*A*r-M*n*l+t*A*l+a*n*d-t*o*d)*b,e[15]=(a*_*r-p*o*r+p*n*l-t*_*l-a*n*m+t*o*m)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,f=s*a,p=s*o;return this.set(f*a+n,f*o-r*l,f*l+r*o,0,f*o+r*l,p*o+n,p*l-r*a,0,f*l-r*o,p*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,f=s+s,p=a+a,_=o+o,m=s*f,g=s*p,M=s*_,A=a*p,d=a*_,u=o*_,R=l*f,w=l*p,S=l*_,U=n.x,x=n.y,b=n.z;return r[0]=(1-(A+u))*U,r[1]=(g+S)*U,r[2]=(M-w)*U,r[3]=0,r[4]=(g-S)*x,r[5]=(1-(m+u))*x,r[6]=(d+R)*x,r[7]=0,r[8]=(M+w)*b,r[9]=(d-R)*b,r[10]=(1-(m+A))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const a=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const f=1/s,p=1/a,_=1/o;return Xt.elements[0]*=f,Xt.elements[1]*=f,Xt.elements[2]*=f,Xt.elements[4]*=p,Xt.elements[5]*=p,Xt.elements[6]*=p,Xt.elements[8]*=_,Xt.elements[9]*=_,Xt.elements[10]*=_,t.setFromRotationMatrix(Xt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=fn){const l=this.elements,f=2*s/(t-e),p=2*s/(n-r),_=(t+e)/(t-e),m=(n+r)/(n-r);let g,M;if(o===fn)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ir)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=_,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=fn){const l=this.elements,f=1/(t-e),p=1/(n-r),_=1/(a-s),m=(t+e)*f,g=(n+r)*p;let M,A;if(o===fn)M=(a+s)*_,A=-2*_;else if(o===Ir)M=s*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=A,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new k,Xt=new lt,Au=new k(0,0,0),wu=new k(1,1,1),vn=new k,ar=new k,Dt=new k,eo=new lt,to=new jn;class en{constructor(e=0,t=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],f=r[5],p=r[9],_=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-_,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,g),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return to.setFromEuler(this),this.setFromQuaternion(to,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const no=new k,ii=new jn,sn=new lt,or=new k,Bi=new k,Cu=new k,Pu=new jn,io=new k(1,0,0),ro=new k(0,1,0),so=new k(0,0,1),ao={type:"added"},Du={type:"removed"},ri={type:"childadded",child:null},Jr={type:"childremoved",child:null};class xt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new k,t=new en,n=new jn,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(io,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(so,e)}translateOnAxis(e,t){return no.copy(e).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(io,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(so,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Bi,or,this.up):sn.lookAt(or,Bi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(sn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ao),ri.child=e,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ao),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Cu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let f=0,p=l.length;f<p;f++){const _=l[f];s(e.shapes,_)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,f=this.material.length;l<f;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),f=a(e.textures),p=a(e.images),_=a(e.shapes),m=a(e.skeletons),g=a(e.animations),M=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(o){const l=[];for(const f in o){const p=o[f];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xt.DEFAULT_UP=new k(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new k,an=new k,Qr=new k,on=new k,si=new k,ai=new k,oo=new k,es=new k,ts=new k,ns=new k,is=new ot,rs=new ot,ss=new ot;class Yt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){qt.subVectors(r,t),an.subVectors(n,t),Qr.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(an),l=qt.dot(Qr),f=an.dot(an),p=an.dot(Qr),_=a*f-o*o;if(_===0)return s.set(0,0,0),null;const m=1/_,g=(f*l-o*p)*m,M=(a*p-o*l)*m;return s.set(1-g-M,M,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return is.setScalar(0),rs.setScalar(0),ss.setScalar(0),is.fromBufferAttribute(e,t),rs.fromBufferAttribute(e,n),ss.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(is,s.x),a.addScaledVector(rs,s.y),a.addScaledVector(ss,s.z),a}static isFrontFacing(e,t,n,r){return qt.subVectors(n,t),an.subVectors(e,t),qt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),qt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;si.subVectors(r,n),ai.subVectors(s,n),es.subVectors(e,n);const l=si.dot(es),f=ai.dot(es);if(l<=0&&f<=0)return t.copy(n);ts.subVectors(e,r);const p=si.dot(ts),_=ai.dot(ts);if(p>=0&&_<=p)return t.copy(r);const m=l*_-p*f;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(si,a);ns.subVectors(e,s);const g=si.dot(ns),M=ai.dot(ns);if(M>=0&&g<=M)return t.copy(s);const A=g*f-l*M;if(A<=0&&f>=0&&M<=0)return o=f/(f-M),t.copy(n).addScaledVector(ai,o);const d=p*M-g*_;if(d<=0&&_-p>=0&&g-M>=0)return oo.subVectors(s,r),o=(_-p)/(_-p+(g-M)),t.copy(r).addScaledVector(oo,o);const u=1/(d+A+m);return a=A*u,o=m*u,t.copy(n).addScaledVector(si,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=Ta(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ke.fromWorkingColorSpace(vt.copy(this),e),Math.round(Ge(vt.r*255,0,255))*65536+Math.round(Ge(vt.g*255,0,255))*256+Math.round(Ge(vt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,f;const p=(o+a)/2;if(o===a)l=0,f=0;else{const _=a-o;switch(f=p<=.5?_/(a+o):_/(2-a-o),a){case n:l=(r-s)/_+(r<s?6:0);break;case r:l=(s-n)/_+2;break;case s:l=(n-r)/_+4;break}l/=6}return e.h=l,e.s=f,e.l=p,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=wt){Ke.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(lr);const n=Vi(xn.h,lr.h,t),r=Vi(xn.s,lr.s,t),s=Vi(xn.l,lr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Xe;Xe.NAMES=Rl;let Lu=0;class Li extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=gi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ps,this.blendDst=Ds,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ps&&(n.blendSrc=this.blendSrc),this.blendDst!==Ds&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cl extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new k,cr=new Fe;let Iu=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class Pl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uu=0;const zt=new lt,os=new xt,oi=new k,Lt=new Zi,zi=new Zi,pt=new k;class Rn extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Dl:Pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Lt.min,zi.min),Lt.expandByPoint(pt),pt.addVectors(Lt.max,zi.max),Lt.expandByPoint(pt)):(Lt.expandByPoint(zi.min),Lt.expandByPoint(zi.max))}Lt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let f=0,p=o.count;f<p;f++)pt.fromBufferAttribute(o,f),l&&(oi.fromBufferAttribute(e,f),pt.add(oi)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new k,l[v]=new k;const f=new k,p=new k,_=new k,m=new Fe,g=new Fe,M=new Fe,A=new k,d=new k;function u(v,h,c){f.fromBufferAttribute(n,v),p.fromBufferAttribute(n,h),_.fromBufferAttribute(n,c),m.fromBufferAttribute(s,v),g.fromBufferAttribute(s,h),M.fromBufferAttribute(s,c),p.sub(f),_.sub(f),g.sub(m),M.sub(m);const y=1/(g.x*M.y-M.x*g.y);isFinite(y)&&(A.copy(p).multiplyScalar(M.y).addScaledVector(_,-g.y).multiplyScalar(y),d.copy(_).multiplyScalar(g.x).addScaledVector(p,-M.x).multiplyScalar(y),o[v].add(A),o[h].add(A),o[c].add(A),l[v].add(d),l[h].add(d),l[c].add(d))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let v=0,h=R.length;v<h;++v){const c=R[v],y=c.start,I=c.count;for(let O=y,G=y+I;O<G;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const w=new k,S=new k,U=new k,x=new k;function b(v){U.fromBufferAttribute(r,v),x.copy(U);const h=o[v];w.copy(h),w.sub(U.multiplyScalar(U.dot(h))).normalize(),S.crossVectors(x,h);const y=S.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,y)}for(let v=0,h=R.length;v<h;++v){const c=R[v],y=c.start,I=c.count;for(let O=y,G=y+I;O<G;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,f=new k,p=new k,_=new k;if(e)for(let m=0,g=e.count;m<g;m+=3){const M=e.getX(m+0),A=e.getX(m+1),d=e.getX(m+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,d),p.subVectors(a,s),_.subVectors(r,s),p.cross(_),o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,A),f.fromBufferAttribute(n,d),o.add(p),l.add(p),f.add(p),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(d,f.x,f.y,f.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),p.subVectors(a,s),_.subVectors(r,s),p.cross(_),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const f=o.array,p=o.itemSize,_=o.normalized,m=new f.constructor(l.length*p);let g=0,M=0;for(let A=0,d=l.length;A<d;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*p;for(let u=0;u<p;u++)m[M++]=f[g++]}return new Jt(m,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],f=e(l,n);t.setAttribute(o,f)}const s=this.morphAttributes;for(const o in s){const l=[],f=s[o];for(let p=0,_=f.length;p<_;p++){const m=f[p],g=e(m,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const f=a[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(e[f]=l[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const f=n[l];e.data.attributes[l]=f.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],p=[];for(let _=0,m=f.length;_<m;_++){const g=f[_];p.push(g.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(t))}const s=e.morphAttributes;for(const f in s){const p=[],_=s[f];for(let m=0,g=_.length;m<g;m++)p.push(_[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,p=a.length;f<p;f++){const _=a[f];this.addGroup(_.start,_.count,_.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new lt,In=new Al,ur=new wa,co=new k,hr=new k,fr=new k,dr=new k,ls=new k,pr=new k,uo=new k,mr=new k;class $t extends xt{constructor(e=new Rn,t=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){pr.set(0,0,0);for(let l=0,f=s.length;l<f;l++){const p=o[l],_=s[l];p!==0&&(ls.fromBufferAttribute(_,e),a?pr.addScaledVector(ls,p):pr.addScaledVector(ls.sub(t),p))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(ur.containsPoint(In.origin)===!1&&(In.intersectSphere(ur,co)===null||In.origin.distanceToSquared(co)>(e.far-e.near)**2))&&(lo.copy(s).invert(),In.copy(e.ray).applyMatrix4(lo),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,f=s.attributes.uv,p=s.attributes.uv1,_=s.attributes.normal,m=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,A=m.length;M<A;M++){const d=m[M],u=a[d.materialIndex],R=Math.max(d.start,g.start),w=Math.min(o.count,Math.min(d.start+d.count,g.start+g.count));for(let S=R,U=w;S<U;S+=3){const x=o.getX(S),b=o.getX(S+1),v=o.getX(S+2);r=_r(this,u,e,n,f,p,_,x,b,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const M=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let d=M,u=A;d<u;d+=3){const R=o.getX(d),w=o.getX(d+1),S=o.getX(d+2);r=_r(this,a,e,n,f,p,_,R,w,S),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,A=m.length;M<A;M++){const d=m[M],u=a[d.materialIndex],R=Math.max(d.start,g.start),w=Math.min(l.count,Math.min(d.start+d.count,g.start+g.count));for(let S=R,U=w;S<U;S+=3){const x=S,b=S+1,v=S+2;r=_r(this,u,e,n,f,p,_,x,b,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const M=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let d=M,u=A;d<u;d+=3){const R=d,w=d+1,S=d+2;r=_r(this,a,e,n,f,p,_,R,w,S),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Nu(i,e,t,n,r,s,a,o){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===An,o),l===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(mr);return f<t.near||f>t.far?null:{distance:f,point:mr.clone(),object:i}}function _r(i,e,t,n,r,s,a,o,l,f){i.getVertexPosition(o,hr),i.getVertexPosition(l,fr),i.getVertexPosition(f,dr);const p=Nu(i,e,t,n,hr,fr,dr,uo);if(p){const _=new k;Yt.getBarycoord(uo,hr,fr,dr,_),r&&(p.uv=Yt.getInterpolatedAttribute(r,o,l,f,_,new Fe)),s&&(p.uv1=Yt.getInterpolatedAttribute(s,o,l,f,_,new Fe)),a&&(p.normal=Yt.getInterpolatedAttribute(a,o,l,f,_,new k),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:o,b:l,c:f,normal:new k,materialIndex:0};Yt.getNormal(hr,fr,dr,m.normal),p.face=m,p.barycoord=_}return p}class Ki extends Rn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],f=[],p=[],_=[];let m=0,g=0;M("z","y","x",-1,-1,n,t,e,a,s,0),M("z","y","x",1,-1,n,t,-e,a,s,1),M("x","z","y",1,1,e,n,t,r,a,2),M("x","z","y",1,-1,e,n,-t,r,a,3),M("x","y","z",1,-1,e,t,n,r,s,4),M("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(_,2));function M(A,d,u,R,w,S,U,x,b,v,h){const c=S/b,y=U/v,I=S/2,O=U/2,G=x/2,W=b+1,B=v+1;let Z=0,X=0;const re=new k;for(let se=0;se<B;se++){const ve=se*y-O;for(let Be=0;Be<W;Be++){const We=Be*c-I;re[A]=We*R,re[d]=ve*w,re[u]=G,f.push(re.x,re.y,re.z),re[A]=0,re[d]=0,re[u]=x>0?1:-1,p.push(re.x,re.y,re.z),_.push(Be/b),_.push(1-se/v),Z+=1}}for(let se=0;se<v;se++)for(let ve=0;ve<b;ve++){const Be=m+ve+W*se,We=m+ve+W*(se+1),K=m+(ve+1)+W*(se+1),ce=m+(ve+1)+W*se;l.push(Be,We,ce),l.push(We,K,ce),X+=6}o.addGroup(g,X,h),g+=X,m+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const r in n)e[r]=n[r]}return e}function Fu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ll(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Ou={clone:Ri,merge:yt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Fu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Il extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new k,ho=new Fe,fo=new Fe;class Ht extends Il{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,ho,fo),t.subVectors(fo,ho)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/f,r*=a.width/l,n*=a.height/f}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ci=1;class Ul extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(li,ci,e,t);r.layers=this.layers,this.add(r);const s=new Ht(li,ci,e,t);s.layers=this.layers,this.add(s);const a=new Ht(li,ci,e,t);a.layers=this.layers,this.add(a);const o=new Ht(li,ci,e,t);o.layers=this.layers,this.add(o);const l=new Ht(li,ci,e,t);l.layers=this.layers,this.add(l);const f=new Ht(li,ci,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const f of t)this.remove(f);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,f,p]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(_,m,g),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Nl extends Ct{constructor(e,t,n,r,s,a,o,l,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,r,s,a,o,l,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fl extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ki(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:bn});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===En&&(t.minFilter=jt),new Ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class gr extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hu={type:"move"};class cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const A of e.hand.values()){const d=t.getJointPose(A,n),u=this._getHandJoint(f,A);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=p.position.distanceTo(_.position),g=.02,M=.005;f.inputState.pinching&&m>g+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=g-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ku extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const us=new k,Vu=new k,Gu=new He;class Sn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=us.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gu.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new wa,vr=new k;class Ra{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,a=new Sn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],f=r[4],p=r[5],_=r[6],m=r[7],g=r[8],M=r[9],A=r[10],d=r[11],u=r[12],R=r[13],w=r[14],S=r[15];if(n[0].setComponents(l-s,m-f,d-g,S-u).normalize(),n[1].setComponents(l+s,m+f,d+g,S+u).normalize(),n[2].setComponents(l+a,m+p,d+M,S+R).normalize(),n[3].setComponents(l-a,m-p,d-M,S-R).normalize(),n[4].setComponents(l-o,m-_,d-A,S-w).normalize(),t===fn)n[5].setComponents(l+o,m+_,d+A,S+w).normalize();else if(t===Ir)n[5].setComponents(o,_,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(vr.x=r.normal.x>0?e.max.x:e.min.x,vr.y=r.normal.y>0?e.max.y:e.min.y,vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ol extends Ct{constructor(e,t,n,r,s,a,o,l,f,p=vi){if(p!==vi&&p!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===vi&&(n=qn),n===void 0&&p===Ai&&(n=Ti),super(null,r,s,a,o,l,p,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ca extends Rn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),f(n),p(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(R){const w=new k,S=new k,U=new k;for(let x=0;x<t.length;x+=3)g(t[x+0],w),g(t[x+1],S),g(t[x+2],U),l(w,S,U,R)}function l(R,w,S,U){const x=U+1,b=[];for(let v=0;v<=x;v++){b[v]=[];const h=R.clone().lerp(S,v/x),c=w.clone().lerp(S,v/x),y=x-v;for(let I=0;I<=y;I++)I===0&&v===x?b[v][I]=h:b[v][I]=h.clone().lerp(c,I/y)}for(let v=0;v<x;v++)for(let h=0;h<2*(x-v)-1;h++){const c=Math.floor(h/2);h%2===0?(m(b[v][c+1]),m(b[v+1][c]),m(b[v][c])):(m(b[v][c+1]),m(b[v+1][c+1]),m(b[v+1][c]))}}function f(R){const w=new k;for(let S=0;S<s.length;S+=3)w.x=s[S+0],w.y=s[S+1],w.z=s[S+2],w.normalize().multiplyScalar(R),s[S+0]=w.x,s[S+1]=w.y,s[S+2]=w.z}function p(){const R=new k;for(let w=0;w<s.length;w+=3){R.x=s[w+0],R.y=s[w+1],R.z=s[w+2];const S=d(R)/2/Math.PI+.5,U=u(R)/Math.PI+.5;a.push(S,1-U)}M(),_()}function _(){for(let R=0;R<a.length;R+=6){const w=a[R+0],S=a[R+2],U=a[R+4],x=Math.max(w,S,U),b=Math.min(w,S,U);x>.9&&b<.1&&(w<.2&&(a[R+0]+=1),S<.2&&(a[R+2]+=1),U<.2&&(a[R+4]+=1))}}function m(R){s.push(R.x,R.y,R.z)}function g(R,w){const S=R*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function M(){const R=new k,w=new k,S=new k,U=new k,x=new Fe,b=new Fe,v=new Fe;for(let h=0,c=0;h<s.length;h+=9,c+=6){R.set(s[h+0],s[h+1],s[h+2]),w.set(s[h+3],s[h+4],s[h+5]),S.set(s[h+6],s[h+7],s[h+8]),x.set(a[c+0],a[c+1]),b.set(a[c+2],a[c+3]),v.set(a[c+4],a[c+5]),U.copy(R).add(w).add(S).divideScalar(3);const y=d(U);A(x,c+0,R,y),A(b,c+2,w,y),A(v,c+4,S,y)}}function A(R,w,S,U){U<0&&R.x===1&&(a[w]=R.x-1),S.x===0&&S.z===0&&(a[w]=U/2/Math.PI+.5)}function d(R){return Math.atan2(R.z,-R.x)}function u(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.vertices,e.indices,e.radius,e.details)}}class Pa extends Ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pa(e.radius,e.detail)}}class Or extends Rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),f=o+1,p=l+1,_=e/o,m=t/l,g=[],M=[],A=[],d=[];for(let u=0;u<p;u++){const R=u*m-a;for(let w=0;w<f;w++){const S=w*_-s;M.push(S,-R,0),A.push(0,0,1),d.push(w/o),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let R=0;R<o;R++){const w=R+f*u,S=R+f*(u+1),U=R+1+f*(u+1),x=R+1+f*u;g.push(w,S,x),g.push(S,U,x)}this.setIndex(g),this.setAttribute("position",new Qt(M,3)),this.setAttribute("normal",new Qt(A,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xu extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bl extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qu extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zl extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hs=new lt,po=new k,mo=new k;class Yu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;po.setFromMatrixPosition(e.matrixWorld),t.position.copy(po),mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mo),t.updateMatrixWorld(),hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hl extends Il{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ju extends Yu{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zu extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ku extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class $u{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_o();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _o(){return performance.now()}class cn{constructor(e){this.value=e}clone(){return new cn(this.value.clone===void 0?this.value:this.value.clone())}}class go{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ju extends Zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function vo(i,e,t,n){const r=Qu(n);switch(t){case dl:return i*e;case ml:return i*e;case _l:return i*e*2;case gl:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case vl:return i*e*2/r.components*r.byteLength;case Ea:return i*e*2/r.components*r.byteLength;case pl:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case ba:return i*e*4/r.components*r.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:case qs:return Math.max(i,16)*Math.max(e,8)/4;case Gs:case Xs:return Math.max(i,8)*Math.max(e,8)/2;case Ys:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cr:case ua:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xl:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qu(i){switch(i){case pn:case ul:return{byteLength:1,components:1};case Wi:case hl:case ji:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case qn:case xa:case hn:return{byteLength:4,components:1};case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"174"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="174");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function eh(i){const e=new WeakMap;function t(o,l){const f=o.array,p=o.usage,_=f.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,f,p),o.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,l,f){const p=l.array,_=l.updateRanges;if(i.bindBuffer(f,o),_.length===0)i.bufferSubData(f,0,p);else{_.sort((g,M)=>g.start-M.start);let m=0;for(let g=1;g<_.length;g++){const M=_[m],A=_[g];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,_[m]=A)}_.length=m+1;for(let g=0,M=_.length;g<M;g++){const A=_[g];i.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=e.get(o);if(f===void 0)e.set(o,t(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,o,l),f.version=o.version}}return{get:r,remove:s,update:a}}var th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nh=`#ifdef USE_ALPHAHASH
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
#endif`,ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oh=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ph=`#ifdef USE_IRIDESCENCE
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
#endif`,mh=`#ifdef USE_BUMPMAP
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ah=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ef=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hf=`#if defined( USE_POINTS_UV )
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
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,_d=`uniform vec3 diffuse;
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
}`,gd=`#define LAMBERT
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
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,xd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ed=`#define PHONG
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
}`,bd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Td=`#define STANDARD
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
}`,Ad=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,wd=`#define TOON
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
}`,Rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Cd=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Dd=`#include <common>
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
}`,Ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Id=`uniform float rotation;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:th,alphahash_pars_fragment:nh,alphamap_fragment:ih,alphamap_pars_fragment:rh,alphatest_fragment:sh,alphatest_pars_fragment:ah,aomap_fragment:oh,aomap_pars_fragment:lh,batching_pars_vertex:ch,batching_vertex:uh,begin_vertex:hh,beginnormal_vertex:fh,bsdfs:dh,iridescence_fragment:ph,bumpmap_pars_fragment:mh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:vh,clipping_planes_vertex:xh,color_fragment:Mh,color_pars_fragment:Sh,color_pars_vertex:yh,color_vertex:Eh,common:bh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:Ah,displacementmap_pars_vertex:wh,displacementmap_vertex:Rh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Ph,colorspace_fragment:Dh,colorspace_pars_fragment:Lh,envmap_fragment:Ih,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Yh,envmap_vertex:Oh,fog_vertex:Bh,fog_pars_vertex:zh,fog_fragment:Hh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Wh,lights_lambert_pars_fragment:Xh,lights_pars_begin:qh,lights_toon_fragment:jh,lights_toon_pars_fragment:Zh,lights_phong_fragment:Kh,lights_phong_pars_fragment:$h,lights_physical_fragment:Jh,lights_physical_pars_fragment:Qh,lights_fragment_begin:ef,lights_fragment_maps:tf,lights_fragment_end:nf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:of,map_fragment:lf,map_pars_fragment:cf,map_particle_fragment:uf,map_particle_pars_fragment:hf,metalnessmap_fragment:ff,metalnessmap_pars_fragment:df,morphinstance_vertex:pf,morphcolor_vertex:mf,morphnormal_vertex:_f,morphtarget_pars_vertex:gf,morphtarget_vertex:vf,normal_fragment_begin:xf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:yf,normal_vertex:Ef,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Rf,opaque_fragment:Cf,packing:Pf,premultiplied_alpha_fragment:Df,project_vertex:Lf,dithering_fragment:If,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Hf,skinbase_vertex:kf,skinning_pars_vertex:Vf,skinning_vertex:Gf,skinnormal_vertex:Wf,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:jf,transmission_fragment:Zf,transmission_pars_fragment:Kf,uv_pars_fragment:$f,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:ed,background_vert:td,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:rd,cube_vert:sd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:ud,equirect_vert:hd,equirect_frag:fd,linedashed_vert:dd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:_d,meshlambert_vert:gd,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:yd,meshphong_vert:Ed,meshphong_frag:bd,meshphysical_vert:Td,meshphysical_frag:Ad,meshtoon_vert:wd,meshtoon_frag:Rd,points_vert:Cd,points_frag:Pd,shadow_vert:Dd,shadow_frag:Ld,sprite_vert:Id,sprite_frag:Ud},he={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Kt={basic:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:yt([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:yt([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:yt([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:yt([he.common,he.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:yt([he.lights,he.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Kt.physical={uniforms:yt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const xr={r:0,b:0,g:0},Nn=new en,Nd=new lt;function Fd(i,e,t,n,r,s,a){const o=new Xe(0);let l=s===!0?0:1,f,p,_=null,m=0,g=null;function M(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function A(w){let S=!1;const U=M(w);U===null?u(o,l):U&&U.isColor&&(u(U,1),S=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(w,S){const U=M(S);U&&(U.isCubeTexture||U.mapping===Fr)?(p===void 0&&(p=new $t(new Ki(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ri(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(x,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Nn.copy(S.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(Nn)),p.material.toneMapped=Ke.getTransfer(U.colorSpace)!==tt,(_!==U||m!==U.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,_=U,m=U.version,g=i.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(f===void 0&&(f=new $t(new Or(2,2),new wn({name:"BackgroundMaterial",uniforms:Ri(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=U,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.toneMapped=Ke.getTransfer(U.colorSpace)!==tt,U.matrixAutoUpdate===!0&&U.updateMatrix(),f.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||m!==U.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,_=U,m=U.version,g=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function u(w,S){w.getRGB(xr,Ll(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,S,a)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:A,addToRenderList:d,dispose:R}}function Od(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(c,y,I,O,G){let W=!1;const B=_(O,I,y);s!==B&&(s=B,f(s.object)),W=g(c,O,I,G),W&&M(c,O,I,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(c,y,I,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function f(c){return i.bindVertexArray(c)}function p(c){return i.deleteVertexArray(c)}function _(c,y,I){const O=I.wireframe===!0;let G=n[c.id];G===void 0&&(G={},n[c.id]=G);let W=G[y.id];W===void 0&&(W={},G[y.id]=W);let B=W[O];return B===void 0&&(B=m(l()),W[O]=B),B}function m(c){const y=[],I=[],O=[];for(let G=0;G<t;G++)y[G]=0,I[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:I,attributeDivisors:O,object:c,attributes:{},index:null}}function g(c,y,I,O){const G=s.attributes,W=y.attributes;let B=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){const se=G[X];let ve=W[X];if(ve===void 0&&(X==="instanceMatrix"&&c.instanceMatrix&&(ve=c.instanceMatrix),X==="instanceColor"&&c.instanceColor&&(ve=c.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function M(c,y,I,O){const G={},W=y.attributes;let B=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){let se=W[X];se===void 0&&(X==="instanceMatrix"&&c.instanceMatrix&&(se=c.instanceMatrix),X==="instanceColor"&&c.instanceColor&&(se=c.instanceColor));const ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),G[X]=ve,B++}s.attributes=G,s.attributesNum=B,s.index=O}function A(){const c=s.newAttributes;for(let y=0,I=c.length;y<I;y++)c[y]=0}function d(c){u(c,0)}function u(c,y){const I=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;I[c]=1,O[c]===0&&(i.enableVertexAttribArray(c),O[c]=1),G[c]!==y&&(i.vertexAttribDivisor(c,y),G[c]=y)}function R(){const c=s.newAttributes,y=s.enabledAttributes;for(let I=0,O=y.length;I<O;I++)y[I]!==c[I]&&(i.disableVertexAttribArray(I),y[I]=0)}function w(c,y,I,O,G,W,B){B===!0?i.vertexAttribIPointer(c,y,I,G,W):i.vertexAttribPointer(c,y,I,O,G,W)}function S(c,y,I,O){A();const G=O.attributes,W=I.getAttributes(),B=y.defaultAttributeValues;for(const Z in W){const X=W[Z];if(X.location>=0){let re=G[Z];if(re===void 0&&(Z==="instanceMatrix"&&c.instanceMatrix&&(re=c.instanceMatrix),Z==="instanceColor"&&c.instanceColor&&(re=c.instanceColor)),re!==void 0){const se=re.normalized,ve=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const We=Be.buffer,K=Be.type,ce=Be.bytesPerElement,xe=K===i.INT||K===i.UNSIGNED_INT||re.gpuType===xa;if(re.isInterleavedBufferAttribute){const ue=re.data,J=ue.stride,T=re.offset;if(ue.isInstancedInterleavedBuffer){for(let D=0;D<X.locationSize;D++)u(X.location+D,ue.meshPerAttribute);c.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let D=0;D<X.locationSize;D++)d(X.location+D);i.bindBuffer(i.ARRAY_BUFFER,We);for(let D=0;D<X.locationSize;D++)w(X.location+D,ve/X.locationSize,K,se,J*ce,(T+ve/X.locationSize*D)*ce,xe)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)u(X.location+ue,re.meshPerAttribute);c.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<X.locationSize;ue++)d(X.location+ue);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ue=0;ue<X.locationSize;ue++)w(X.location+ue,ve/X.locationSize,K,se,ve*ce,ve/X.locationSize*ue*ce,xe)}}else if(B!==void 0){const se=B[Z];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(X.location,se);break;case 3:i.vertexAttrib3fv(X.location,se);break;case 4:i.vertexAttrib4fv(X.location,se);break;default:i.vertexAttrib1fv(X.location,se)}}}}R()}function U(){v();for(const c in n){const y=n[c];for(const I in y){const O=y[I];for(const G in O)p(O[G].object),delete O[G];delete y[I]}delete n[c]}}function x(c){if(n[c.id]===void 0)return;const y=n[c.id];for(const I in y){const O=y[I];for(const G in O)p(O[G].object),delete O[G];delete y[I]}delete n[c.id]}function b(c){for(const y in n){const I=n[y];if(I[c.id]===void 0)continue;const O=I[c.id];for(const G in O)p(O[G].object),delete O[G];delete I[c.id]}}function v(){h(),a=!0,s!==r&&(s=r,f(s.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:v,resetDefaultState:h,dispose:U,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:A,enableAttribute:d,disableUnusedAttributes:R}}function Bd(i,e,t){let n;function r(f){n=f}function s(f,p){i.drawArrays(n,f,p),t.update(p,n,1)}function a(f,p,_){_!==0&&(i.drawArraysInstanced(n,f,p,_),t.update(p,n,_))}function o(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,_);let g=0;for(let M=0;M<_;M++)g+=p[M];t.update(g,n,1)}function l(f,p,_,m){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<f.length;M++)a(f[M],p[M],m[M]);else{g.multiDrawArraysInstancedWEBGL(n,f,0,p,0,m,0,_);let M=0;for(let A=0;A<_;A++)M+=p[A]*m[A];t.update(M,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==kt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const v=b===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==pn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hn&&!v)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=l(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:U,maxSamples:x}}function Hd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Sn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const g=_.length!==0||m||n!==0||r;return r=m,n=_.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(_,m){t=p(_,m,0)},this.setState=function(_,m,g){const M=_.clippingPlanes,A=_.clipIntersection,d=_.clipShadows,u=i.get(_);if(!r||M===null||M.length===0||s&&!d)s?p(null):f();else{const R=s?0:n,w=R*4;let S=u.clippingState||null;l.value=S,S=p(M,m,w,g);for(let U=0;U!==w;++U)S[U]=t[U];u.clippingState=S,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function f(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(_,m,g,M){const A=_!==null?_.length:0;let d=null;if(A!==0){if(d=l.value,M!==!0||d===null){const u=g+A*4,R=m.matrixWorldInverse;o.getNormalMatrix(R),(d===null||d.length<u)&&(d=new Float32Array(u));for(let w=0,S=g;w!==A;++w,S+=4)a.copy(_[w]).applyMatrix4(R,o),a.normal.toArray(d,S),d[S+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,d}}function kd(i){let e=new WeakMap;function t(a,o){return o===zs?a.mapping=Ei:o===Hs&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zs||o===Hs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new Fl(l.height);return f.fromEquirectangularTexture(i,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const mi=4,xo=[.125,.215,.35,.446,.526,.582],kn=20,fs=new Hl,Mo=new Xe;let ds=null,ps=0,ms=0,_s=!1;const Bn=(1+Math.sqrt(5))/2,ui=1/Bn,So=[new k(-Bn,ui,0),new k(Bn,ui,0),new k(-ui,0,Bn),new k(ui,0,Bn),new k(0,Bn,-ui),new k(0,Bn,ui),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Vd=new k;class yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Vd}=s;ds=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds,ps,ms),this._renderer.xr.enabled=_s,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget(),ps=this._renderer.getActiveCubeFace(),ms=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ji,format:kt,colorSpace:wi,depthBuffer:!1},r=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(s)),this._blurMaterial=Wd(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,n,r,s){const l=new Ht(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,g=_.toneMapping;_.getClearColor(Mo),_.toneMapping=Tn,_.autoClear=!1;const M=new Cl({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),A=new $t(new Ki,M);let d=!1;const u=e.background;u?u.isColor&&(M.color.copy(u),e.background=null,d=!0):(M.color.copy(Mo),d=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(l.up.set(0,f[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[R],s.y,s.z)):w===1?(l.up.set(0,0,f[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[R],s.z)):(l.up.set(0,f[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[R]));const S=this._cubeSize;Mr(r,w*S,R>2?S:0,S,S),_.setRenderTarget(r),d&&_.render(A,l),_.render(e,l)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=g,_.autoClear=m,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===bi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=So[(r-s-1)%So.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new $t(this._lodPlanes[r],f),m=f.uniforms,g=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kn-1),A=s/M,d=isFinite(s)?1+Math.floor(p*A):kn;d>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${kn}`);const u=[];let R=0;for(let b=0;b<kn;++b){const v=b/A,h=Math.exp(-v*v/2);u.push(h),b===0?R+=h:b<d&&(R+=2*h)}for(let b=0;b<u.length;b++)u[b]=u[b]/R;m.envMap.value=e.texture,m.samples.value=d,m.weights.value=u,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:w}=this;m.dTheta.value=M,m.mipInt.value=w-n;const S=this._sizeLods[r],U=3*S*(r>w-mi?r-w+mi:0),x=4*(this._cubeSize-S);Mr(t,U,x,3*S,2*S),l.setRenderTarget(t),l.render(_,fs)}}function Gd(i){const e=[],t=[],n=[];let r=i;const s=i-mi+1+xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-mi?l=xo[a-i+mi-1]:a===0&&(l=0),n.push(l);const f=1/(o-2),p=-f,_=1+f,m=[p,p,_,p,_,_,p,p,_,_,p,_],g=6,M=6,A=3,d=2,u=1,R=new Float32Array(A*M*g),w=new Float32Array(d*M*g),S=new Float32Array(u*M*g);for(let x=0;x<g;x++){const b=x%3*2/3-1,v=x>2?0:-1,h=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];R.set(h,A*M*x),w.set(m,d*M*x);const c=[x,x,x,x,x,x];S.set(c,u*M*x)}const U=new Rn;U.setAttribute("position",new Jt(R,A)),U.setAttribute("uv",new Jt(w,d)),U.setAttribute("faceIndex",new Jt(S,u)),e.push(U),r>mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Wd(i,e,t){const n=new Float32Array(kn),r=new k(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function bo(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function To(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,f=l===zs||l===Hs,p=l===Ei||l===bi;if(f||p){let _=e.get(o);const m=_!==void 0?_.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new yo(i)),_=f?t.fromEquirectangular(o,_):t.fromCubemap(o,_),_.texture.pmremVersion=o.pmremVersion,e.set(o,_),_.texture;if(_!==void 0)return _.texture;{const g=o.image;return f&&g&&g.height>0||p&&g&&r(g)?(t===null&&(t=new yo(i)),_=f?t.fromEquirectangular(o):t.fromCubemap(o),_.texture.pmremVersion=o.pmremVersion,e.set(o,_),o.addEventListener("dispose",s),_.texture):null}}}return o}function r(o){let l=0;const f=6;for(let p=0;p<f;p++)o[p]!==void 0&&l++;return l===f}function s(o){const l=o.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&On("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yd(i,e,t,n){const r={},s=new WeakMap;function a(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(_,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function l(_){const m=_.attributes;for(const g in m)e.update(m[g],i.ARRAY_BUFFER)}function f(_){const m=[],g=_.index,M=_.attributes.position;let A=0;if(g!==null){const R=g.array;A=g.version;for(let w=0,S=R.length;w<S;w+=3){const U=R[w+0],x=R[w+1],b=R[w+2];m.push(U,x,x,b,b,U)}}else if(M!==void 0){const R=M.array;A=M.version;for(let w=0,S=R.length/3-1;w<S;w+=3){const U=w+0,x=w+1,b=w+2;m.push(U,x,x,b,b,U)}}else return;const d=new(bl(m)?Dl:Pl)(m,1);d.version=A;const u=s.get(_);u&&e.remove(u),s.set(_,d)}function p(_){const m=s.get(_);if(m){const g=_.index;g!==null&&m.version<g.version&&f(_)}else f(_);return s.get(_)}return{get:o,update:l,getWireframeAttribute:p}}function jd(i,e,t){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,g){i.drawElements(n,g,s,m*a),t.update(g,n,1)}function f(m,g,M){M!==0&&(i.drawElementsInstanced(n,g,s,m*a,M),t.update(g,n,M))}function p(m,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,M);let d=0;for(let u=0;u<M;u++)d+=g[u];t.update(d,n,1)}function _(m,g,M,A){if(M===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<m.length;u++)f(m[u]/a,g[u],A[u]);else{d.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,A,0,M);let u=0;for(let R=0;R<M;R++)u+=g[R]*A[R];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function Zd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Kd(i,e,t){const n=new WeakMap,r=new ot;function s(a,o,l){const f=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=p!==void 0?p.length:0;let m=n.get(o);if(m===void 0||m.count!==_){let c=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",c)};var g=c;m!==void 0&&m.texture.dispose();const M=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;M===!0&&(S=1),A===!0&&(S=2),d===!0&&(S=3);let U=o.attributes.position.count*S,x=1;U>e.maxTextureSize&&(x=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const b=new Float32Array(U*x*4*_),v=new Tl(b,U,x,_);v.type=hn,v.needsUpdate=!0;const h=S*4;for(let y=0;y<_;y++){const I=u[y],O=R[y],G=w[y],W=U*x*4*y;for(let B=0;B<I.count;B++){const Z=B*h;M===!0&&(r.fromBufferAttribute(I,B),b[W+Z+0]=r.x,b[W+Z+1]=r.y,b[W+Z+2]=r.z,b[W+Z+3]=0),A===!0&&(r.fromBufferAttribute(O,B),b[W+Z+4]=r.x,b[W+Z+5]=r.y,b[W+Z+6]=r.z,b[W+Z+7]=0),d===!0&&(r.fromBufferAttribute(G,B),b[W+Z+8]=r.x,b[W+Z+9]=r.y,b[W+Z+10]=r.z,b[W+Z+11]=G.itemSize===4?r.w:1)}}m={count:_,texture:v,size:new Fe(U,x)},n.set(o,m),o.addEventListener("dispose",c)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let M=0;for(let d=0;d<f.length;d++)M+=f[d];const A=o.morphTargetsRelative?1:1-M;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function $d(i,e,t,n){let r=new WeakMap;function s(l){const f=n.render.frame,p=l.geometry,_=e.get(l,p);if(r.get(_)!==f&&(e.update(_),r.set(_,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return _}function a(){r=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}const Vl=new Ct,Ao=new Ol(1,1),Gl=new Tl,Wl=new bu,Xl=new Nl,wo=[],Ro=[],Co=new Float32Array(16),Po=new Float32Array(9),Do=new Float32Array(4);function Ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wo[r];if(s===void 0&&(s=new Float32Array(r),wo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Do.set(n),i.uniformMatrix2fv(this.addr,!1,Do),dt(t,n)}}function ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Po.set(n),i.uniformMatrix3fv(this.addr,!1,Po),dt(t,n)}}function rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),dt(t,n)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=yl,s=Ao):s=Vl,t.setTexture2D(e||s,r)}function pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function _p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gl,r)}function gp(i){switch(i){case 5126:return Jd;case 35664:return Qd;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return rp;case 5124:case 35670:return sp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return up;case 36295:return hp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return _p}}function vp(i,e){i.uniform1fv(this.addr,e)}function xp(i,e){const t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function Mp(i,e){const t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function Sp(i,e){const t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function yp(i,e){const t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ep(i,e){const t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bp(i,e){const t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tp(i,e){i.uniform1iv(this.addr,e)}function Ap(i,e){i.uniform2iv(this.addr,e)}function wp(i,e){i.uniform3iv(this.addr,e)}function Rp(i,e){i.uniform4iv(this.addr,e)}function Cp(i,e){i.uniform1uiv(this.addr,e)}function Pp(i,e){i.uniform2uiv(this.addr,e)}function Dp(i,e){i.uniform3uiv(this.addr,e)}function Lp(i,e){i.uniform4uiv(this.addr,e)}function Ip(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vl,s[a])}function Up(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wl,s[a])}function Np(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Xl,s[a])}function Fp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ft(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gl,s[a])}function Op(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Mp;case 35666:return Sp;case 35674:return yp;case 35675:return Ep;case 35676:return bp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return wp;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Pp;case 36295:return Dp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}class Bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gp(t.type)}}class zp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Op(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const gs=/(\w+)(\])?(\[|\.)?/g;function Lo(i,e){i.seq.push(e),i.map[e.id]=e}function kp(i,e,t){const n=i.name,r=n.length;for(gs.lastIndex=0;;){const s=gs.exec(n),a=gs.lastIndex;let o=s[1];const l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===r){Lo(t,f===void 0?new Bp(o,i,e):new zp(o,i,e));break}else{let _=t.map[o];_===void 0&&(_=new Hp(o),Lo(t,_)),t=_}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);kp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Vp=37297;let Gp=0;function Wp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uo=new He;function Xp(i){Ke._getMatrix(Uo,Ke.workingColorSpace,i);const e=`mat3( ${Uo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function No(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Wp(i.getShaderSource(e),a)}else return r}function qp(i,e){const t=Xp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yp(i,e){let t;switch(e){case Oc:t="Linear";break;case Bc:t="Reinhard";break;case zc:t="Cineon";break;case ll:t="ACESFilmic";break;case kc:t="AgX";break;case Vc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new k;function jp(){Ke.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function Kp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $p(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function Fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(i){return i.replace(Jp,em)}const Qp=new Map;function em(i,e){let t=Ve[e];if(t===void 0){const n=Qp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ma(t)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(i){return i.replace(tm,nm)}function nm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zo(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function im(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function rm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case bi:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function am(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ol:e="ENVMAP_BLENDING_MULTIPLY";break;case Nc:e="ENVMAP_BLENDING_MIX";break;case Fc:e="ENVMAP_BLENDING_ADD";break}return e}function om(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=im(t),f=rm(t),p=sm(t),_=am(t),m=om(t),g=Zp(t),M=Kp(s),A=r.createProgram();let d,u,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Hi).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Hi).join(`
`),u.length>0&&(u+=`
`)):(d=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),u=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,qp("linearToOutputTexel",t.outputColorSpace),jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=ma(a),a=Fo(a,t),a=Oo(a,t),o=ma(o),o=Fo(o,t),o=Oo(o,t),a=Bo(a),o=Bo(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=R+d+a,S=R+u+o,U=Io(r,r.VERTEX_SHADER,w),x=Io(r,r.FRAGMENT_SHADER,S);r.attachShader(A,U),r.attachShader(A,x),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function b(y){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(A).trim(),O=r.getShaderInfoLog(U).trim(),G=r.getShaderInfoLog(x).trim();let W=!0,B=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,U,x);else{const Z=No(r,U,"vertex"),X=No(r,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+I+`
`+Z+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||G==="")&&(B=!1);B&&(y.diagnostics={runnable:W,programLog:I,vertexShader:{log:O,prefix:d},fragmentShader:{log:G,prefix:u}})}r.deleteShader(U),r.deleteShader(x),v=new Pr(r,A),h=$p(r,A)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let h;this.getAttributes=function(){return h===void 0&&b(this),h};let c=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return c===!1&&(c=r.getProgramParameter(A,Vp)),c},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gp++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=x,this}let cm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hm(e),t.set(e,n)),n}}class hm{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}}function fm(i,e,t,n,r,s,a){const o=new wl,l=new um,f=new Set,p=[],_=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(h){return f.add(h),h===0?"uv":`uv${h}`}function d(h,c,y,I,O){const G=I.fog,W=O.geometry,B=h.isMeshStandardMaterial?I.environment:null,Z=(h.isMeshStandardMaterial?t:e).get(h.envMap||B),X=Z&&Z.mapping===Fr?Z.image.height:null,re=M[h.type];h.precision!==null&&(g=r.getMaxPrecision(h.precision),g!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",g,"instead."));const se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=se!==void 0?se.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let We,K,ce,xe;if(re){const Qe=Kt[re];We=Qe.vertexShader,K=Qe.fragmentShader}else We=h.vertexShader,K=h.fragmentShader,l.update(h),ce=l.getVertexShaderID(h),xe=l.getFragmentShaderID(h);const ue=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),T=O.isInstancedMesh===!0,D=O.isBatchedMesh===!0,N=!!h.map,Q=!!h.matcap,j=!!Z,L=!!h.aoMap,Pe=!!h.lightMap,Te=!!h.bumpMap,we=!!h.normalMap,oe=!!h.displacementMap,De=!!h.emissiveMap,fe=!!h.metalnessMap,P=!!h.roughnessMap,E=h.anisotropy>0,V=h.clearcoat>0,te=h.dispersion>0,ie=h.iridescence>0,ee=h.sheen>0,Ae=h.transmission>0,me=E&&!!h.anisotropyMap,Se=V&&!!h.clearcoatMap,Ye=V&&!!h.clearcoatNormalMap,le=V&&!!h.clearcoatRoughnessMap,ye=ie&&!!h.iridescenceMap,Le=ie&&!!h.iridescenceThicknessMap,Ue=ee&&!!h.sheenColorMap,Ee=ee&&!!h.sheenRoughnessMap,qe=!!h.specularMap,ke=!!h.specularColorMap,it=!!h.specularIntensityMap,F=Ae&&!!h.transmissionMap,de=Ae&&!!h.thicknessMap,$=!!h.gradientMap,ne=!!h.alphaMap,ge=h.alphaTest>0,_e=!!h.alphaHash,ze=!!h.extensions;let st=Tn;h.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(st=i.toneMapping);const _t={shaderID:re,shaderType:h.type,shaderName:h.name,vertexShader:We,fragmentShader:K,defines:h.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:g,batching:D,batchingColor:D&&O._colorsTexture!==null,instancing:T,instancingColor:T&&O.instanceColor!==null,instancingMorph:T&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:wi,alphaToCoverage:!!h.alphaToCoverage,map:N,matcap:Q,envMap:j,envMapMode:j&&Z.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:Pe,bumpMap:Te,normalMap:we,displacementMap:m&&oe,emissiveMap:De,normalMapObjectSpace:we&&h.normalMapType===Xc,normalMapTangentSpace:we&&h.normalMapType===Sl,metalnessMap:fe,roughnessMap:P,anisotropy:E,anisotropyMap:me,clearcoat:V,clearcoatMap:Se,clearcoatNormalMap:Ye,clearcoatRoughnessMap:le,dispersion:te,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:Le,sheen:ee,sheenColorMap:Ue,sheenRoughnessMap:Ee,specularMap:qe,specularColorMap:ke,specularIntensityMap:it,transmission:Ae,transmissionMap:F,thicknessMap:de,gradientMap:$,opaque:h.transparent===!1&&h.blending===gi&&h.alphaToCoverage===!1,alphaMap:ne,alphaTest:ge,alphaHash:_e,combine:h.combine,mapUv:N&&A(h.map.channel),aoMapUv:L&&A(h.aoMap.channel),lightMapUv:Pe&&A(h.lightMap.channel),bumpMapUv:Te&&A(h.bumpMap.channel),normalMapUv:we&&A(h.normalMap.channel),displacementMapUv:oe&&A(h.displacementMap.channel),emissiveMapUv:De&&A(h.emissiveMap.channel),metalnessMapUv:fe&&A(h.metalnessMap.channel),roughnessMapUv:P&&A(h.roughnessMap.channel),anisotropyMapUv:me&&A(h.anisotropyMap.channel),clearcoatMapUv:Se&&A(h.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&A(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&A(h.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&A(h.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&A(h.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(h.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&A(h.sheenRoughnessMap.channel),specularMapUv:qe&&A(h.specularMap.channel),specularColorMapUv:ke&&A(h.specularColorMap.channel),specularIntensityMapUv:it&&A(h.specularIntensityMap.channel),transmissionMapUv:F&&A(h.transmissionMap.channel),thicknessMapUv:de&&A(h.thicknessMap.channel),alphaMapUv:ne&&A(h.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(we||E),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(N||ne),fog:!!G,useFog:h.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:J,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numSpotLightMaps:c.spotLightMap.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numDirLightShadows:c.directionalShadowMap.length,numPointLightShadows:c.pointShadowMap.length,numSpotLightShadows:c.spotShadowMap.length,numSpotLightShadowsWithMaps:c.numSpotLightShadowsWithMaps,numLightProbes:c.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:h.dithering,shadowMapEnabled:i.shadowMap.enabled&&y.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:N&&h.map.isVideoTexture===!0&&Ke.getTransfer(h.map.colorSpace)===tt,decodeVideoTextureEmissive:De&&h.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(h.emissiveMap.colorSpace)===tt,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===un,flipSided:h.side===Rt,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:ze&&h.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&h.extensions.multiDraw===!0||D)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return _t.vertexUv1s=f.has(1),_t.vertexUv2s=f.has(2),_t.vertexUv3s=f.has(3),f.clear(),_t}function u(h){const c=[];if(h.shaderID?c.push(h.shaderID):(c.push(h.customVertexShaderID),c.push(h.customFragmentShaderID)),h.defines!==void 0)for(const y in h.defines)c.push(y),c.push(h.defines[y]);return h.isRawShaderMaterial===!1&&(R(c,h),w(c,h),c.push(i.outputColorSpace)),c.push(h.customProgramCacheKey),c.join()}function R(h,c){h.push(c.precision),h.push(c.outputColorSpace),h.push(c.envMapMode),h.push(c.envMapCubeUVHeight),h.push(c.mapUv),h.push(c.alphaMapUv),h.push(c.lightMapUv),h.push(c.aoMapUv),h.push(c.bumpMapUv),h.push(c.normalMapUv),h.push(c.displacementMapUv),h.push(c.emissiveMapUv),h.push(c.metalnessMapUv),h.push(c.roughnessMapUv),h.push(c.anisotropyMapUv),h.push(c.clearcoatMapUv),h.push(c.clearcoatNormalMapUv),h.push(c.clearcoatRoughnessMapUv),h.push(c.iridescenceMapUv),h.push(c.iridescenceThicknessMapUv),h.push(c.sheenColorMapUv),h.push(c.sheenRoughnessMapUv),h.push(c.specularMapUv),h.push(c.specularColorMapUv),h.push(c.specularIntensityMapUv),h.push(c.transmissionMapUv),h.push(c.thicknessMapUv),h.push(c.combine),h.push(c.fogExp2),h.push(c.sizeAttenuation),h.push(c.morphTargetsCount),h.push(c.morphAttributeCount),h.push(c.numDirLights),h.push(c.numPointLights),h.push(c.numSpotLights),h.push(c.numSpotLightMaps),h.push(c.numHemiLights),h.push(c.numRectAreaLights),h.push(c.numDirLightShadows),h.push(c.numPointLightShadows),h.push(c.numSpotLightShadows),h.push(c.numSpotLightShadowsWithMaps),h.push(c.numLightProbes),h.push(c.shadowMapType),h.push(c.toneMapping),h.push(c.numClippingPlanes),h.push(c.numClipIntersection),h.push(c.depthPacking)}function w(h,c){o.disableAll(),c.supportsVertexTextures&&o.enable(0),c.instancing&&o.enable(1),c.instancingColor&&o.enable(2),c.instancingMorph&&o.enable(3),c.matcap&&o.enable(4),c.envMap&&o.enable(5),c.normalMapObjectSpace&&o.enable(6),c.normalMapTangentSpace&&o.enable(7),c.clearcoat&&o.enable(8),c.iridescence&&o.enable(9),c.alphaTest&&o.enable(10),c.vertexColors&&o.enable(11),c.vertexAlphas&&o.enable(12),c.vertexUv1s&&o.enable(13),c.vertexUv2s&&o.enable(14),c.vertexUv3s&&o.enable(15),c.vertexTangents&&o.enable(16),c.anisotropy&&o.enable(17),c.alphaHash&&o.enable(18),c.batching&&o.enable(19),c.dispersion&&o.enable(20),c.batchingColor&&o.enable(21),h.push(o.mask),o.disableAll(),c.fog&&o.enable(0),c.useFog&&o.enable(1),c.flatShading&&o.enable(2),c.logarithmicDepthBuffer&&o.enable(3),c.reverseDepthBuffer&&o.enable(4),c.skinning&&o.enable(5),c.morphTargets&&o.enable(6),c.morphNormals&&o.enable(7),c.morphColors&&o.enable(8),c.premultipliedAlpha&&o.enable(9),c.shadowMapEnabled&&o.enable(10),c.doubleSided&&o.enable(11),c.flipSided&&o.enable(12),c.useDepthPacking&&o.enable(13),c.dithering&&o.enable(14),c.transmission&&o.enable(15),c.sheen&&o.enable(16),c.opaque&&o.enable(17),c.pointsUvs&&o.enable(18),c.decodeVideoTexture&&o.enable(19),c.decodeVideoTextureEmissive&&o.enable(20),c.alphaToCoverage&&o.enable(21),h.push(o.mask)}function S(h){const c=M[h.type];let y;if(c){const I=Kt[c];y=Ou.clone(I.uniforms)}else y=h.uniforms;return y}function U(h,c){let y;for(let I=0,O=p.length;I<O;I++){const G=p[I];if(G.cacheKey===c){y=G,++y.usedTimes;break}}return y===void 0&&(y=new lm(i,c,h,s),p.push(y)),y}function x(h){if(--h.usedTimes===0){const c=p.indexOf(h);p[c]=p[p.length-1],p.pop(),h.destroy()}}function b(h){l.remove(h)}function v(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:S,acquireProgram:U,releaseProgram:x,releaseShaderCache:b,programs:p,dispose:v}}function dm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ko(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(_,m,g,M,A,d){let u=i[e];return u===void 0?(u={id:_.id,object:_,geometry:m,material:g,groupOrder:M,renderOrder:_.renderOrder,z:A,group:d},i[e]=u):(u.id=_.id,u.object=_,u.geometry=m,u.material=g,u.groupOrder=M,u.renderOrder=_.renderOrder,u.z=A,u.group=d),e++,u}function o(_,m,g,M,A,d){const u=a(_,m,g,M,A,d);g.transmission>0?n.push(u):g.transparent===!0?r.push(u):t.push(u)}function l(_,m,g,M,A,d){const u=a(_,m,g,M,A,d);g.transmission>0?n.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function f(_,m){t.length>1&&t.sort(_||pm),n.length>1&&n.sort(m||Ho),r.length>1&&r.sort(m||Ho)}function p(){for(let _=e,m=i.length;_<m;_++){const g=i[_];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:p,sort:f}}function mm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ko,i.set(n,[a])):r>=s.length?(a=new ko,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Xe};break;case"SpotLight":t={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vm=0;function xm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mm(i){const e=new _m,t=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new k);const r=new k,s=new lt,a=new lt;function o(f){let p=0,_=0,m=0;for(let h=0;h<9;h++)n.probe[h].set(0,0,0);let g=0,M=0,A=0,d=0,u=0,R=0,w=0,S=0,U=0,x=0,b=0;f.sort(xm);for(let h=0,c=f.length;h<c;h++){const y=f[h],I=y.color,O=y.intensity,G=y.distance,W=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)p+=I.r*O,_+=I.g*O,m+=I.b*O;else if(y.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(y.sh.coefficients[B],O);b++}else if(y.isDirectionalLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Z=y.shadow,X=t.get(y);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=y.shadow.matrix,R++}n.directional[g]=B,g++}else if(y.isSpotLight){const B=e.get(y);B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(I).multiplyScalar(O),B.distance=G,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,n.spot[A]=B;const Z=y.shadow;if(y.map&&(n.spotLightMap[U]=y.map,U++,Z.updateMatrices(y),y.castShadow&&x++),n.spotLightMatrix[A]=Z.matrix,y.castShadow){const X=t.get(y);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[A]=X,n.spotShadowMap[A]=W,S++}A++}else if(y.isRectAreaLight){const B=e.get(y);B.color.copy(I).multiplyScalar(O),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),n.rectArea[d]=B,d++}else if(y.isPointLight){const B=e.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),B.distance=y.distance,B.decay=y.decay,y.castShadow){const Z=y.shadow,X=t.get(y);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[M]=X,n.pointShadowMap[M]=W,n.pointShadowMatrix[M]=y.shadow.matrix,w++}n.point[M]=B,M++}else if(y.isHemisphereLight){const B=e.get(y);B.skyColor.copy(y.color).multiplyScalar(O),B.groundColor.copy(y.groundColor).multiplyScalar(O),n.hemi[u]=B,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=_,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==g||v.pointLength!==M||v.spotLength!==A||v.rectAreaLength!==d||v.hemiLength!==u||v.numDirectionalShadows!==R||v.numPointShadows!==w||v.numSpotShadows!==S||v.numSpotMaps!==U||v.numLightProbes!==b)&&(n.directional.length=g,n.spot.length=A,n.rectArea.length=d,n.point.length=M,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+U-x,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=b,v.directionalLength=g,v.pointLength=M,v.spotLength=A,v.rectAreaLength=d,v.hemiLength=u,v.numDirectionalShadows=R,v.numPointShadows=w,v.numSpotShadows=S,v.numSpotMaps=U,v.numLightProbes=b,n.version=vm++)}function l(f,p){let _=0,m=0,g=0,M=0,A=0;const d=p.matrixWorldInverse;for(let u=0,R=f.length;u<R;u++){const w=f[u];if(w.isDirectionalLight){const S=n.directional[_];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),_++}else if(w.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(w.isRectAreaLight){const S=n.rectArea[M];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(d),a.identity(),s.copy(w.matrixWorld),s.premultiply(d),a.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(w.isPointLight){const S=n.point[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){const S=n.hemi[A];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(d),A++}}}return{setup:o,setupView:l,state:n}}function Vo(i){const e=new Mm(i),t=[],n=[];function r(p){f.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function a(p){n.push(p)}function o(){e.setup(t)}function l(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Sm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vo(i),e.set(r,[o])):s>=a.length?(o=new Vo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bm(i,e,t){let n=new Ra;const r=new Fe,s=new Fe,a=new ot,o=new Bl({depthPacking:Ml}),l=new qu,f={},p=t.maxTextureSize,_={[An]:Rt,[Rt]:An,[un]:un},m=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:ym,fragmentShader:Em}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const M=new Rn;M.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $t(M,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let u=this.type;this.render=function(x,b,v){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const h=i.getRenderTarget(),c=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),I=i.state;I.setBlending(bn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=u!==ln&&this.type===ln,G=u===ln&&this.type!==ln;for(let W=0,B=x.length;W<B;W++){const Z=x[W],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();if(r.multiply(re),s.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/re.x),r.x=s.x*re.x,X.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/re.y),r.y=s.y*re.y,X.mapSize.y=s.y)),X.map===null||O===!0||G===!0){const ve=this.type!==ln?{minFilter:Zt,magFilter:Zt}:{};X.map!==null&&X.map.dispose(),X.map=new Yn(r.x,r.y,ve),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const se=X.getViewportCount();for(let ve=0;ve<se;ve++){const Be=X.getViewport(ve);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),I.viewport(a),X.updateMatrices(Z,ve),n=X.getFrustum(),S(b,v,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ln&&R(X,v),X.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(h,c,y)};function R(x,b){const v=e.update(A);m.defines.VSM_SAMPLES!==x.blurSamples&&(m.defines.VSM_SAMPLES=x.blurSamples,g.defines.VSM_SAMPLES=x.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Yn(r.x,r.y)),m.uniforms.shadow_pass.value=x.map.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,v,m,A,null),g.uniforms.shadow_pass.value=x.mapPass.texture,g.uniforms.resolution.value=x.mapSize,g.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,v,g,A,null)}function w(x,b,v,h){let c=null;const y=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(y!==void 0)c=y;else if(c=v.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const I=c.uuid,O=b.uuid;let G=f[I];G===void 0&&(G={},f[I]=G);let W=G[O];W===void 0&&(W=c.clone(),G[O]=W,b.addEventListener("dispose",U)),c=W}if(c.visible=b.visible,c.wireframe=b.wireframe,h===ln?c.side=b.shadowSide!==null?b.shadowSide:b.side:c.side=b.shadowSide!==null?b.shadowSide:_[b.side],c.alphaMap=b.alphaMap,c.alphaTest=b.alphaTest,c.map=b.map,c.clipShadows=b.clipShadows,c.clippingPlanes=b.clippingPlanes,c.clipIntersection=b.clipIntersection,c.displacementMap=b.displacementMap,c.displacementScale=b.displacementScale,c.displacementBias=b.displacementBias,c.wireframeLinewidth=b.wireframeLinewidth,c.linewidth=b.linewidth,v.isPointLight===!0&&c.isMeshDistanceMaterial===!0){const I=i.properties.get(c);I.light=v}return c}function S(x,b,v,h,c){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&c===ln)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);const O=e.update(x),G=x.material;if(Array.isArray(G)){const W=O.groups;for(let B=0,Z=W.length;B<Z;B++){const X=W[B],re=G[X.materialIndex];if(re&&re.visible){const se=w(x,re,h,c);x.onBeforeShadow(i,x,b,v,O,se,X),i.renderBufferDirect(v,null,O,se,x,X),x.onAfterShadow(i,x,b,v,O,se,X)}}}else if(G.visible){const W=w(x,G,h,c);x.onBeforeShadow(i,x,b,v,O,W,null),i.renderBufferDirect(v,null,O,W,x,null),x.onAfterShadow(i,x,b,v,O,W,null)}}const I=x.children;for(let O=0,G=I.length;O<G;O++)S(I[O],b,v,h,c)}function U(x){x.target.removeEventListener("dispose",U);for(const v in f){const h=f[v],c=x.target.uuid;c in h&&(h[c].dispose(),delete h[c])}}}const Tm={[Ls]:Is,[Us]:Os,[Ns]:Bs,[yi]:Fs,[Is]:Ls,[Os]:Us,[Bs]:Ns,[Fs]:yi};function Am(i,e){function t(){let F=!1;const de=new ot;let $=null;const ne=new ot(0,0,0,0);return{setMask:function(ge){$!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){F=ge},setClear:function(ge,_e,ze,st,_t){_t===!0&&(ge*=st,_e*=st,ze*=st),de.set(ge,_e,ze,st),ne.equals(de)===!1&&(i.clearColor(ge,_e,ze,st),ne.copy(de))},reset:function(){F=!1,$=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,de=!1,$=null,ne=null,ge=null;return{setReversed:function(_e){if(de!==_e){const ze=e.get("EXT_clip_control");de?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const st=ge;ge=null,this.setClear(st)}de=_e},getReversed:function(){return de},setTest:function(_e){_e?ue(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(_e){$!==_e&&!F&&(i.depthMask(_e),$=_e)},setFunc:function(_e){if(de&&(_e=Tm[_e]),ne!==_e){switch(_e){case Ls:i.depthFunc(i.NEVER);break;case Is:i.depthFunc(i.ALWAYS);break;case Us:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case Ns:i.depthFunc(i.EQUAL);break;case Fs:i.depthFunc(i.GEQUAL);break;case Os:i.depthFunc(i.GREATER);break;case Bs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=_e}},setLocked:function(_e){F=_e},setClear:function(_e){ge!==_e&&(de&&(_e=1-_e),i.clearDepth(_e),ge=_e)},reset:function(){F=!1,$=null,ne=null,ge=null,de=!1}}}function r(){let F=!1,de=null,$=null,ne=null,ge=null,_e=null,ze=null,st=null,_t=null;return{setTest:function(Qe){F||(Qe?ue(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!F&&(i.stencilMask(Qe),de=Qe)},setFunc:function(Qe,Vt,tn){($!==Qe||ne!==Vt||ge!==tn)&&(i.stencilFunc(Qe,Vt,tn),$=Qe,ne=Vt,ge=tn)},setOp:function(Qe,Vt,tn){(_e!==Qe||ze!==Vt||st!==tn)&&(i.stencilOp(Qe,Vt,tn),_e=Qe,ze=Vt,st=tn)},setLocked:function(Qe){F=Qe},setClear:function(Qe){_t!==Qe&&(i.clearStencil(Qe),_t=Qe)},reset:function(){F=!1,de=null,$=null,ne=null,ge=null,_e=null,ze=null,st=null,_t=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,f=new WeakMap;let p={},_={},m=new WeakMap,g=[],M=null,A=!1,d=null,u=null,R=null,w=null,S=null,U=null,x=null,b=new Xe(0,0,0),v=0,h=!1,c=null,y=null,I=null,O=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Z>=2);let re=null,se={};const ve=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),We=new ot().fromArray(ve),K=new ot().fromArray(Be);function ce(F,de,$,ne){const ge=new Uint8Array(4),_e=i.createTexture();i.bindTexture(F,_e),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<$;ze++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(de+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return _e}const xe={};xe[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(yi),Te(!1),we(Va),ue(i.CULL_FACE),L(bn);function ue(F){p[F]!==!0&&(i.enable(F),p[F]=!0)}function J(F){p[F]!==!1&&(i.disable(F),p[F]=!1)}function T(F,de){return _[F]!==de?(i.bindFramebuffer(F,de),_[F]=de,F===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=de),F===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=de),!0):!1}function D(F,de){let $=g,ne=!1;if(F){$=m.get(de),$===void 0&&($=[],m.set(de,$));const ge=F.textures;if($.length!==ge.length||$[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ze=ge.length;_e<ze;_e++)$[_e]=i.COLOR_ATTACHMENT0+_e;$.length=ge.length,ne=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ne=!0);ne&&i.drawBuffers($)}function N(F){return M!==F?(i.useProgram(F),M=F,!0):!1}const Q={[Hn]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};Q[Mc]=i.MIN,Q[Sc]=i.MAX;const j={[yc]:i.ZERO,[Ec]:i.ONE,[bc]:i.SRC_COLOR,[Ps]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[Ds]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Lc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Uc]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,de,$,ne,ge,_e,ze,st,_t,Qe){if(F===bn){A===!0&&(J(i.BLEND),A=!1);return}if(A===!1&&(ue(i.BLEND),A=!0),F!==gc){if(F!==d||Qe!==h){if((u!==Hn||S!==Hn)&&(i.blendEquation(i.FUNC_ADD),u=Hn,S=Hn),Qe)switch(F){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,w=null,U=null,x=null,b.set(0,0,0),v=0,d=F,h=Qe}return}ge=ge||de,_e=_e||$,ze=ze||ne,(de!==u||ge!==S)&&(i.blendEquationSeparate(Q[de],Q[ge]),u=de,S=ge),($!==R||ne!==w||_e!==U||ze!==x)&&(i.blendFuncSeparate(j[$],j[ne],j[_e],j[ze]),R=$,w=ne,U=_e,x=ze),(st.equals(b)===!1||_t!==v)&&(i.blendColor(st.r,st.g,st.b,_t),b.copy(st),v=_t),d=F,h=!1}function Pe(F,de){F.side===un?J(i.CULL_FACE):ue(i.CULL_FACE);let $=F.side===Rt;de&&($=!$),Te($),F.blending===gi&&F.transparent===!1?L(bn):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),De(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(F){c!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),c=F)}function we(F){F!==pc?(ue(i.CULL_FACE),F!==y&&(F===Va?i.cullFace(i.BACK):F===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),y=F}function oe(F){F!==I&&(B&&i.lineWidth(F),I=F)}function De(F,de,$){F?(ue(i.POLYGON_OFFSET_FILL),(O!==de||G!==$)&&(i.polygonOffset(de,$),O=de,G=$)):J(i.POLYGON_OFFSET_FILL)}function fe(F){F?ue(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+W-1),re!==F&&(i.activeTexture(F),re=F)}function E(F,de,$){$===void 0&&(re===null?$=i.TEXTURE0+W-1:$=re);let ne=se[$];ne===void 0&&(ne={type:void 0,texture:void 0},se[$]=ne),(ne.type!==F||ne.texture!==de)&&(re!==$&&(i.activeTexture($),re=$),i.bindTexture(F,de||xe[F]),ne.type=F,ne.texture=de)}function V(){const F=se[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){We.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),We.copy(F))}function Ee(F){K.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function qe(F,de){let $=f.get(de);$===void 0&&($=new WeakMap,f.set(de,$));let ne=$.get(F);ne===void 0&&(ne=i.getUniformBlockIndex(de,F.name),$.set(F,ne))}function ke(F,de){const ne=f.get(de).get(F);l.get(de)!==ne&&(i.uniformBlockBinding(de,ne,F.__bindingPointIndex),l.set(de,ne))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},re=null,se={},_={},m=new WeakMap,g=[],M=null,A=!1,d=null,u=null,R=null,w=null,S=null,U=null,x=null,b=new Xe(0,0,0),v=0,h=!1,c=null,y=null,I=null,O=null,G=null,We.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:J,bindFramebuffer:T,drawBuffers:D,useProgram:N,setBlending:L,setMaterial:Pe,setFlipSided:Te,setCullFace:we,setLineWidth:oe,setPolygonOffset:De,setScissorTest:fe,activeTexture:P,bindTexture:E,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Le,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:Ye,texStorage3D:le,texSubImage2D:ee,texSubImage3D:Ae,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Ue,viewport:Ee,reset:it}}function wm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Fe,p=new WeakMap;let _;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return g?new OffscreenCanvas(P,E):Ur("canvas")}function A(P,E,V){let te=1;const ie=fe(P);if((ie.width>V||ie.height>V)&&(te=V/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(te*ie.width),Ae=Math.floor(te*ie.height);_===void 0&&(_=M(ee,Ae));const me=E?M(ee,Ae):_;return me.width=ee,me.height=Ae,me.getContext("2d").drawImage(P,0,0,ee,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Ae+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function d(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,E,V,te,ie=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=E;if(E===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),E===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),E===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),E===i.RGBA){const Ae=ie?Lr:Ke.getTransfer(te);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=Ae===tt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(P,E){let V;return P?E===null||E===qn||E===Ti?V=i.DEPTH24_STENCIL8:E===hn?V=i.DEPTH32F_STENCIL8:E===Wi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qn||E===Ti?V=i.DEPTH_COMPONENT24:E===hn?V=i.DEPTH_COMPONENT32F:E===Wi&&(V=i.DEPTH_COMPONENT16),V}function U(P,E){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==jt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function x(P){const E=P.target;E.removeEventListener("dispose",x),v(E),E.isVideoTexture&&p.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),c(E)}function v(P){const E=n.get(P);if(E.__webglInit===void 0)return;const V=P.source,te=m.get(V);if(te){const ie=te[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&h(P),Object.keys(te).length===0&&m.delete(V)}n.remove(P)}function h(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const V=P.source,te=m.get(V);delete te[E.__cacheKey],a.memory.textures--}function c(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ie=0;ie<E.__webglFramebuffer[te].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[te][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)i.deleteFramebuffer(E.__webglFramebuffer[te]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let te=0,ie=V.length;te<ie;te++){const ee=n.get(V[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(V[te])}n.remove(P)}let y=0;function I(){y=0}function O(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function G(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function W(P,E){const V=n.get(P);if(P.isVideoTexture&&oe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,P,E);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function B(P,E){const V=n.get(P);if(P.version>0&&V.__version!==P.version){K(V,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function Z(P,E){const V=n.get(P);if(P.version>0&&V.__version!==P.version){K(V,P,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function X(P,E){const V=n.get(P);if(P.version>0&&V.__version!==P.version){ce(V,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const re={[ks]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},se={[Zt]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},ve={[qc]:i.NEVER,[Jc]:i.ALWAYS,[Yc]:i.LESS,[yl]:i.LEQUAL,[jc]:i.EQUAL,[$c]:i.GEQUAL,[Zc]:i.GREATER,[Kc]:i.NOTEQUAL};function Be(P,E){if(E.type===hn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jt||E.magFilter===Gr||E.magFilter===er||E.magFilter===En||E.minFilter===jt||E.minFilter===Gr||E.minFilter===er||E.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,re[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,se[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Zt||E.minFilter!==er&&E.minFilter!==En||E.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",x));const te=E.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const ee=G(E);if(ee!==P.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[ee].usedTimes++;const Ae=ie[P.__cacheKey];Ae!==void 0&&(ie[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&h(E)),P.__cacheKey=ee,P.__webglTexture=ie[ee].texture}return V}function K(P,E,V){let te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=i.TEXTURE_3D);const ie=We(P,E),ee=E.source;t.bindTexture(te,P.__webglTexture,i.TEXTURE0+V);const Ae=n.get(ee);if(ee.version!==Ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);const me=Ke.getPrimaries(Ke.workingColorSpace),Se=E.colorSpace===yn?null:Ke.getPrimaries(E.colorSpace),Ye=E.colorSpace===yn||me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let le=A(E.image,!1,r.maxTextureSize);le=De(E,le);const ye=s.convert(E.format,E.colorSpace),Le=s.convert(E.type);let Ue=w(E.internalFormat,ye,Le,E.colorSpace,E.isVideoTexture);Be(te,E);let Ee;const qe=E.mipmaps,ke=E.isVideoTexture!==!0,it=Ae.__version===void 0||ie===!0,F=ee.dataReady,de=U(E,le);if(E.isDepthTexture)Ue=S(E.format===Ai,E.type),it&&(ke?t.texStorage2D(i.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,Le,null));else if(E.isDataTexture)if(qe.length>0){ke&&it&&t.texStorage2D(i.TEXTURE_2D,de,Ue,qe[0].width,qe[0].height);for(let $=0,ne=qe.length;$<ne;$++)Ee=qe[$],ke?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,ye,Le,Ee.data):t.texImage2D(i.TEXTURE_2D,$,Ue,Ee.width,Ee.height,0,ye,Le,Ee.data);E.generateMipmaps=!1}else ke?(it&&t.texStorage2D(i.TEXTURE_2D,de,Ue,le.width,le.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,ye,Le,le.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,le.width,le.height,0,ye,Le,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ue,qe[0].width,qe[0].height,le.depth);for(let $=0,ne=qe.length;$<ne;$++)if(Ee=qe[$],E.format!==kt)if(ye!==null)if(ke){if(F)if(E.layerUpdates.size>0){const ge=vo(Ee.width,Ee.height,E.format,E.type);for(const _e of E.layerUpdates){const ze=Ee.data.subarray(_e*ge/Ee.data.BYTES_PER_ELEMENT,(_e+1)*ge/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,_e,Ee.width,Ee.height,1,ye,ze)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,le.depth,ye,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ue,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,le.depth,ye,Le,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ue,Ee.width,Ee.height,le.depth,0,ye,Le,Ee.data)}else{ke&&it&&t.texStorage2D(i.TEXTURE_2D,de,Ue,qe[0].width,qe[0].height);for(let $=0,ne=qe.length;$<ne;$++)Ee=qe[$],E.format!==kt?ye!==null?ke?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,ye,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ue,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee.width,Ee.height,ye,Le,Ee.data):t.texImage2D(i.TEXTURE_2D,$,Ue,Ee.width,Ee.height,0,ye,Le,Ee.data)}else if(E.isDataArrayTexture)if(ke){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ue,le.width,le.height,le.depth),F)if(E.layerUpdates.size>0){const $=vo(le.width,le.height,E.format,E.type);for(const ne of E.layerUpdates){const ge=le.data.subarray(ne*$/le.data.BYTES_PER_ELEMENT,(ne+1)*$/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,le.width,le.height,1,ye,Le,ge)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Le,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,ye,Le,le.data);else if(E.isData3DTexture)ke?(it&&t.texStorage3D(i.TEXTURE_3D,de,Ue,le.width,le.height,le.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Le,le.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,ye,Le,le.data);else if(E.isFramebufferTexture){if(it)if(ke)t.texStorage2D(i.TEXTURE_2D,de,Ue,le.width,le.height);else{let $=le.width,ne=le.height;for(let ge=0;ge<de;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ue,$,ne,0,ye,Le,null),$>>=1,ne>>=1}}else if(qe.length>0){if(ke&&it){const $=fe(qe[0]);t.texStorage2D(i.TEXTURE_2D,de,Ue,$.width,$.height)}for(let $=0,ne=qe.length;$<ne;$++)Ee=qe[$],ke?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ye,Le,Ee):t.texImage2D(i.TEXTURE_2D,$,Ue,ye,Le,Ee);E.generateMipmaps=!1}else if(ke){if(it){const $=fe(le);t.texStorage2D(i.TEXTURE_2D,de,Ue,$.width,$.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Le,le)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ye,Le,le);d(E)&&u(te),Ae.__version=ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ce(P,E,V){if(E.image.length!==6)return;const te=We(P,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);const ee=n.get(ie);if(ie.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+V);const Ae=Ke.getPrimaries(Ke.workingColorSpace),me=E.colorSpace===yn?null:Ke.getPrimaries(E.colorSpace),Se=E.colorSpace===yn||Ae===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ne=0;ne<6;ne++)!Ye&&!le?ye[ne]=A(E.image[ne],!0,r.maxCubemapSize):ye[ne]=le?E.image[ne].image:E.image[ne],ye[ne]=De(E,ye[ne]);const Le=ye[0],Ue=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),qe=w(E.internalFormat,Ue,Ee,E.colorSpace),ke=E.isVideoTexture!==!0,it=ee.__version===void 0||te===!0,F=ie.dataReady;let de=U(E,Le);Be(i.TEXTURE_CUBE_MAP,E);let $;if(Ye){ke&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,Le.width,Le.height);for(let ne=0;ne<6;ne++){$=ye[ne].mipmaps;for(let ge=0;ge<$.length;ge++){const _e=$[ge];E.format!==kt?Ue!==null?ke?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,0,0,_e.width,_e.height,Ue,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,0,0,_e.width,_e.height,Ue,Ee,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge,qe,_e.width,_e.height,0,Ue,Ee,_e.data)}}}else{if($=E.mipmaps,ke&&it){$.length>0&&de++;const ne=fe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){ke?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye[ne].width,ye[ne].height,Ue,Ee,ye[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,ye[ne].width,ye[ne].height,0,Ue,Ee,ye[ne].data);for(let ge=0;ge<$.length;ge++){const ze=$[ge].image[ne].image;ke?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,0,0,ze.width,ze.height,Ue,Ee,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,qe,ze.width,ze.height,0,Ue,Ee,ze.data)}}else{ke?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Ee,ye[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ue,Ee,ye[ne]);for(let ge=0;ge<$.length;ge++){const _e=$[ge];ke?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,0,0,Ue,Ee,_e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge+1,qe,Ue,Ee,_e.image[ne])}}}d(E)&&u(i.TEXTURE_CUBE_MAP),ee.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function xe(P,E,V,te,ie,ee){const Ae=s.convert(V.format,V.colorSpace),me=s.convert(V.type),Se=w(V.internalFormat,Ae,me,V.colorSpace),Ye=n.get(E),le=n.get(V);if(le.__renderTarget=E,!Ye.__hasExternalTextures){const ye=Math.max(1,E.width>>ee),Le=Math.max(1,E.height>>ee);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ee,Se,ye,Le,E.depth,0,Ae,me,null):t.texImage2D(ie,ee,Se,ye,Le,0,Ae,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),we(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ie,le.__webglTexture,0,Te(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ie,le.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(P,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const te=E.depthTexture,ie=te&&te.isDepthTexture?te.type:null,ee=S(E.stencilBuffer,ie),Ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Te(E);we(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ee,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,P)}else{const te=E.textures;for(let ie=0;ie<te.length;ie++){const ee=te[ie],Ae=s.convert(ee.format,ee.colorSpace),me=s.convert(ee.type),Se=w(ee.internalFormat,Ae,me,ee.colorSpace),Ye=Te(E);V&&we(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Se,E.width,E.height):we(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(E.depthTexture);te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const ie=te.__webglTexture,ee=Te(E);if(E.depthTexture.format===vi)we(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ai)we(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function T(P){const E=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=te}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");J(E.__webglFramebuffer,P)}else if(V){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=i.createRenderbuffer(),ue(E.__webglDepthbuffer[te],P,!1);else{const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ue(E.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(P,E,V){const te=n.get(P);E!==void 0&&xe(te.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&T(P)}function N(P){const E=P.texture,V=n.get(P),te=n.get(E);P.addEventListener("dispose",b);const ie=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=E.version,a.memory.textures++),ee){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let Se=0;Se<E.mipmaps.length;Se++)V.__webglFramebuffer[me][Se]=i.createFramebuffer()}else V.__webglFramebuffer[me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)V.__webglFramebuffer[me]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let me=0,Se=ie.length;me<Se;me++){const Ye=n.get(ie[me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&we(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const Se=ie[me];V.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const Ye=s.convert(Se.format,Se.colorSpace),le=s.convert(Se.type),ye=w(Se.internalFormat,Ye,le,Se.colorSpace,P.isXRRenderTarget===!0),Le=Te(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,V.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Be(i.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)xe(V.__webglFramebuffer[me][Se],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else xe(V.__webglFramebuffer[me],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);d(E)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let me=0,Se=ie.length;me<Se;me++){const Ye=ie[me],le=n.get(Ye);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Be(i.TEXTURE_2D,Ye),xe(V.__webglFramebuffer,P,Ye,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),d(Ye)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),Be(me,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)xe(V.__webglFramebuffer[Se],P,E,i.COLOR_ATTACHMENT0,me,Se);else xe(V.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,me,0);d(E)&&u(me),t.unbindTexture()}P.depthBuffer&&T(P)}function Q(P){const E=P.textures;for(let V=0,te=E.length;V<te;V++){const ie=E[V];if(d(ie)){const ee=R(P),Ae=n.get(ie).__webglTexture;t.bindTexture(ee,Ae),u(ee),t.unbindTexture()}}}const j=[],L=[];function Pe(P){if(P.samples>0){if(we(P)===!1){const E=P.textures,V=P.width,te=P.height;let ie=i.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(P),me=E.length>1;if(me)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Ye=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,V,te,0,0,V,te,ie,i.NEAREST),l===!0&&(j.length=0,L.length=0,j.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(ee),L.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Se]);const Ye=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function we(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(P){const E=a.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function De(P,E){const V=P.colorSpace,te=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==wi&&V!==yn&&(Ke.getTransfer(V)===tt?(te!==kt||ie!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=we}function Rm(i,e){function t(n,r=yn){let s;const a=Ke.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.BYTE;if(n===hl)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===pl)return i.RGB;if(n===kt)return i.RGBA;if(n===ml)return i.LUMINANCE;if(n===_l)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===vl)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===wr||n===Rr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gs||n===Ws||n===Xs||n===qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===js||n===Zs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ys||n===js)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ks||n===$s||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ks)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$s)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Js)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===ua||n===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===fa||n===da||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ct,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wn({vertexShader:Cm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lm extends Zn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,f=null,p=null,_=null,m=null,g=null,M=null;const A=new Dm,d=t.getContextAttributes();let u=null,R=null;const w=[],S=[],U=new Fe;let x=null;const b=new Ht;b.viewport=new ot;const v=new Ht;v.viewport=new ot;const h=[b,v],c=new Ku;let y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=w[K];return ce===void 0&&(ce=new cs,w[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=w[K];return ce===void 0&&(ce=new cs,w[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=w[K];return ce===void 0&&(ce=new cs,w[K]=ce),ce.getHandSpace()};function O(K){const ce=S.indexOf(K.inputSource);if(ce===-1)return;const xe=w[ce];xe!==void 0&&(xe.update(K.inputSource,K.frame,f||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",W);for(let K=0;K<w.length;K++){const ce=S[K];ce!==null&&(S[K]=null,w[K].disconnect(ce))}y=null,I=null,A.reset(),e.setRenderTarget(u),g=null,m=null,_=null,r=null,R=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(K){f=K},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ue=null,J=null;d.depth&&(J=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=d.stencil?Ai:vi,ue=d.stencil?Ti:qn);const T={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};_=new XRWebGLBinding(r,t),m=_.createProjectionLayer(T),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Yn(m.textureWidth,m.textureHeight,{format:kt,type:pn,depthTexture:new Ol(m.textureWidth,m.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const xe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new Yn(g.framebufferWidth,g.framebufferHeight,{format:kt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function W(K){for(let ce=0;ce<K.removed.length;ce++){const xe=K.removed[ce],ue=S.indexOf(xe);ue>=0&&(S[ue]=null,w[ue].disconnect(xe))}for(let ce=0;ce<K.added.length;ce++){const xe=K.added[ce];let ue=S.indexOf(xe);if(ue===-1){for(let T=0;T<w.length;T++)if(T>=S.length){S.push(xe),ue=T;break}else if(S[T]===null){S[T]=xe,ue=T;break}if(ue===-1)break}const J=w[ue];J&&J.connect(xe)}}const B=new k,Z=new k;function X(K,ce,xe){B.setFromMatrixPosition(ce.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const ue=B.distanceTo(Z),J=ce.projectionMatrix.elements,T=xe.projectionMatrix.elements,D=J[14]/(J[10]-1),N=J[14]/(J[10]+1),Q=(J[9]+1)/J[5],j=(J[9]-1)/J[5],L=(J[8]-1)/J[0],Pe=(T[8]+1)/T[0],Te=D*L,we=D*Pe,oe=ue/(-L+Pe),De=oe*-L;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),J[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const fe=D+oe,P=N+oe,E=Te-De,V=we+(ue-De),te=Q*N/P*fe,ie=j*N/P*fe;K.projectionMatrix.makePerspective(E,V,te,ie,fe,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ce=K.near,xe=K.far;A.texture!==null&&(A.depthNear>0&&(ce=A.depthNear),A.depthFar>0&&(xe=A.depthFar)),c.near=v.near=b.near=ce,c.far=v.far=b.far=xe,(y!==c.near||I!==c.far)&&(r.updateRenderState({depthNear:c.near,depthFar:c.far}),y=c.near,I=c.far),b.layers.mask=K.layers.mask|2,v.layers.mask=K.layers.mask|4,c.layers.mask=b.layers.mask|v.layers.mask;const ue=K.parent,J=c.cameras;re(c,ue);for(let T=0;T<J.length;T++)re(J[T],ue);J.length===2?X(c,b,v):c.projectionMatrix.copy(b.projectionMatrix),se(K,c,ue)};function se(K,ce,xe){xe===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return c},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(K){l=K,m!==null&&(m.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(c)};let ve=null;function Be(K,ce){if(p=ce.getViewerPose(f||a),M=ce,p!==null){const xe=p.views;g!==null&&(e.setRenderTargetFramebuffer(R,g.framebuffer),e.setRenderTarget(R));let ue=!1;xe.length!==c.cameras.length&&(c.cameras.length=0,ue=!0);for(let D=0;D<xe.length;D++){const N=xe[D];let Q=null;if(g!==null)Q=g.getViewport(N);else{const L=_.getViewSubImage(m,N);Q=L.viewport,D===0&&(e.setRenderTargetTextures(R,L.colorTexture,m.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(R))}let j=h[D];j===void 0&&(j=new Ht,j.layers.enable(D),j.viewport=new ot,h[D]=j),j.matrix.fromArray(N.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(N.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),D===0&&(c.matrix.copy(j.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale)),ue===!0&&c.cameras.push(j)}const J=r.enabledFeatures;if(J&&J.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){const D=_.getDepthInformation(xe[0]);D&&D.isValid&&D.texture&&A.init(e,D,r.renderState)}}for(let xe=0;xe<w.length;xe++){const ue=S[xe],J=w[xe];ue!==null&&J!==void 0&&J.update(ue,ce,f||a)}ve&&ve(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),M=null}const We=new kl;We.setAnimationLoop(Be),this.setAnimationLoop=function(K){ve=K},this.dispose=function(){}}}const Fn=new en,Im=new lt;function Um(i,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,Ll(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,R,w,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),_(d,u)):u.isMeshPhongMaterial?(s(d,u),p(d,u)):u.isMeshStandardMaterial?(s(d,u),m(d,u),u.isMeshPhysicalMaterial&&g(d,u,S)):u.isMeshMatcapMaterial?(s(d,u),M(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),A(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?l(d,u,R,w):u.isSpriteMaterial?f(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Rt&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Rt&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const R=e.get(u),w=R.envMap,S=R.envMapRotation;w&&(d.envMap.value=w,Fn.copy(S),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),d.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(Fn)),d.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,R,w){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*R,d.scale.value=w*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function f(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function p(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function _(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function m(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,R){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=R.texture,d.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function M(d,u){u.matcap&&(d.matcap.value=u.matcap)}function A(d,u){const R=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(R.matrixWorld),d.nearDistance.value=R.shadow.camera.near,d.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Nm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const S=w.program;n.uniformBlockBinding(R,S)}function f(R,w){let S=r[R.id];S===void 0&&(M(R),S=p(R),r[R.id]=S,R.addEventListener("dispose",d));const U=w.program;n.updateUBOMapping(R,U);const x=e.render.frame;s[R.id]!==x&&(m(R),s[R.id]=x)}function p(R){const w=_();R.__bindingPointIndex=w;const S=i.createBuffer(),U=R.__size,x=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,U,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function _(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const w=r[R.id],S=R.uniforms,U=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,b=S.length;x<b;x++){const v=Array.isArray(S[x])?S[x]:[S[x]];for(let h=0,c=v.length;h<c;h++){const y=v[h];if(g(y,x,h,U)===!0){const I=y.__offset,O=Array.isArray(y.value)?y.value:[y.value];let G=0;for(let W=0;W<O.length;W++){const B=O[W],Z=A(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+G,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):(B.toArray(y.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,w,S,U){const x=R.value,b=w+"_"+S;if(U[b]===void 0)return typeof x=="number"||typeof x=="boolean"?U[b]=x:U[b]=x.clone(),!0;{const v=U[b];if(typeof x=="number"||typeof x=="boolean"){if(v!==x)return U[b]=x,!0}else if(v.equals(x)===!1)return v.copy(x),!0}return!1}function M(R){const w=R.uniforms;let S=0;const U=16;for(let b=0,v=w.length;b<v;b++){const h=Array.isArray(w[b])?w[b]:[w[b]];for(let c=0,y=h.length;c<y;c++){const I=h[c],O=Array.isArray(I.value)?I.value:[I.value];for(let G=0,W=O.length;G<W;G++){const B=O[G],Z=A(B),X=S%U,re=X%Z.boundary,se=X+re;S+=re,se!==0&&U-se<Z.storage&&(S+=U-se),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Z.storage}}}const x=S%U;return x>0&&(S+=U-x),R.__size=S,R.__cache={},this}function A(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function d(R){const w=R.target;w.removeEventListener("dispose",d);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:l,update:f,dispose:u}}class Fm{constructor(e={}){const{canvas:t=mu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=new Uint32Array(4),A=new Int32Array(4);let d=null,u=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=Tn,this.toneMappingExposure=1;const S=this;let U=!1,x=0,b=0,v=null,h=-1,c=null;const y=new ot,I=new ot;let O=null;const G=new Xe(0);let W=0,B=t.width,Z=t.height,X=1,re=null,se=null;const ve=new ot(0,0,B,Z),Be=new ot(0,0,B,Z);let We=!1;const K=new Ra;let ce=!1,xe=!1;this.transmissionResolutionScale=1;const ue=new lt,J=new lt,T=new k,D=new ot,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function j(){return v===null?X:1}let L=n;function Pe(C,z){return t.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r174"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const z="webgl2";if(L=Pe(z,C),L===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,we,oe,De,fe,P,E,V,te,ie,ee,Ae,me,Se,Ye,le,ye,Le,Ue,Ee,qe,ke,it,F;function de(){Te=new qd(L),Te.init(),ke=new Rm(L,Te),we=new zd(L,Te,e,ke),oe=new Am(L,Te),we.reverseDepthBuffer&&m&&oe.buffers.depth.setReversed(!0),De=new Zd(L),fe=new dm,P=new wm(L,Te,oe,fe,we,ke,De),E=new kd(S),V=new Xd(S),te=new eh(L),it=new Od(L,te),ie=new Yd(L,te,De,it),ee=new $d(L,ie,te,De),Ue=new Kd(L,we,P),le=new Hd(fe),Ae=new fm(S,E,V,Te,we,it,le),me=new Um(S,fe),Se=new mm,Ye=new Sm(Te),Le=new Fd(S,E,V,oe,ee,g,l),ye=new bm(S,ee,we),F=new Nm(L,De,we,oe),Ee=new Bd(L,Te,De),qe=new jd(L,Te,De),De.programs=Ae.programs,S.capabilities=we,S.extensions=Te,S.properties=fe,S.renderLists=Se,S.shadowMap=ye,S.state=oe,S.info=De}de();const $=new Lm(S,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(B,Z,!1))},this.getSize=function(C){return C.set(B,Z)},this.setSize=function(C,z,q=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Z=z,t.width=Math.floor(C*X),t.height=Math.floor(z*X),q===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(B*X,Z*X).floor()},this.setDrawingBufferSize=function(C,z,q){B=C,Z=z,X=q,t.width=Math.floor(C*q),t.height=Math.floor(z*q),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(ve)},this.setViewport=function(C,z,q,Y){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,z,q,Y),oe.viewport(y.copy(ve).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(Be)},this.setScissor=function(C,z,q,Y){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,z,q,Y),oe.scissor(I.copy(Be).multiplyScalar(X).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){oe.setScissorTest(We=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,q=!0){let Y=0;if(C){let H=!1;if(v!==null){const ae=v.texture.format;H=ae===ba||ae===Ea||ae===ya}if(H){const ae=v.texture.type,pe=ae===pn||ae===qn||ae===Wi||ae===Ti||ae===Ma||ae===Sa,Me=Le.getClearColor(),be=Le.getClearAlpha(),Ne=Me.r,Oe=Me.g,Re=Me.b;pe?(M[0]=Ne,M[1]=Oe,M[2]=Re,M[3]=be,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=Ne,A[1]=Oe,A[2]=Re,A[3]=be,L.clearBufferiv(L.COLOR,0,A))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Le.dispose(),Se.dispose(),Ye.dispose(),fe.dispose(),E.dispose(),V.dispose(),ee.dispose(),it.dispose(),F.dispose(),Ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Na),$.removeEventListener("sessionend",Fa),Cn.stop()};function ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const C=De.autoReset,z=ye.enabled,q=ye.autoUpdate,Y=ye.needsUpdate,H=ye.type;de(),De.autoReset=C,ye.enabled=z,ye.autoUpdate=q,ye.needsUpdate=Y,ye.type=H}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const z=C.target;z.removeEventListener("dispose",ze),st(z)}function st(C){_t(C),fe.remove(C)}function _t(C){const z=fe.get(C).programs;z!==void 0&&(z.forEach(function(q){Ae.releaseProgram(q)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,q,Y,H,ae){z===null&&(z=N);const pe=H.isMesh&&H.matrixWorld.determinant()<0,Me=lc(C,z,q,Y,H);oe.setMaterial(Y,pe);let be=q.index,Ne=1;if(Y.wireframe===!0){if(be=ie.getWireframeAttribute(q),be===void 0)return;Ne=2}const Oe=q.drawRange,Re=q.attributes.position;let je=Oe.start*Ne,$e=(Oe.start+Oe.count)*Ne;ae!==null&&(je=Math.max(je,ae.start*Ne),$e=Math.min($e,(ae.start+ae.count)*Ne)),be!==null?(je=Math.max(je,0),$e=Math.min($e,be.count)):Re!=null&&(je=Math.max(je,0),$e=Math.min($e,Re.count));const ct=$e-je;if(ct<0||ct===1/0)return;it.setup(H,Y,Me,q,be);let at,Ze=Ee;if(be!==null&&(at=te.get(be),Ze=qe,Ze.setIndex(at)),H.isMesh)Y.wireframe===!0?(oe.setLineWidth(Y.wireframeLinewidth*j()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(H.isLine){let Ce=Y.linewidth;Ce===void 0&&(Ce=1),oe.setLineWidth(Ce*j()),H.isLineSegments?Ze.setMode(L.LINES):H.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else H.isPoints?Ze.setMode(L.POINTS):H.isSprite&&Ze.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)On("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ze.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ce=H._multiDrawStarts,mt=H._multiDrawCounts,Je=H._multiDrawCount,Gt=be?te.get(be).bytesPerElement:1,Kn=fe.get(Y).currentProgram.getUniforms();for(let Pt=0;Pt<Je;Pt++)Kn.setValue(L,"_gl_DrawID",Pt),Ze.render(Ce[Pt]/Gt,mt[Pt])}else if(H.isInstancedMesh)Ze.renderInstances(je,ct,H.count);else if(q.isInstancedBufferGeometry){const Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mt=Math.min(q.instanceCount,Ce);Ze.renderInstances(je,ct,mt)}else Ze.render(je,ct)};function Qe(C,z,q){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=Rt,C.needsUpdate=!0,Qi(C,z,q),C.side=An,C.needsUpdate=!0,Qi(C,z,q),C.side=un):Qi(C,z,q)}this.compile=function(C,z,q=null){q===null&&(q=C),u=Ye.get(q),u.init(z),w.push(u),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),C!==q&&C.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights();const Y=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ae=H.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Me=ae[pe];Qe(Me,q,H),Y.add(Me)}else Qe(ae,q,H),Y.add(ae)}),u=w.pop(),Y},this.compileAsync=function(C,z,q=null){const Y=this.compile(C,z,q);return new Promise(H=>{function ae(){if(Y.forEach(function(pe){fe.get(pe).currentProgram.isReady()&&Y.delete(pe)}),Y.size===0){H(C);return}setTimeout(ae,10)}Te.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Vt=null;function tn(C){Vt&&Vt(C)}function Na(){Cn.stop()}function Fa(){Cn.start()}const Cn=new kl;Cn.setAnimationLoop(tn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(C){Vt=C,$.setAnimationLoop(C),C===null?Cn.stop():Cn.start()},$.addEventListener("sessionstart",Na),$.addEventListener("sessionend",Fa),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(z),z=$.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,z,v),u=Ye.get(C,w.length),u.init(z),w.push(u),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(J),xe=this.localClippingEnabled,ce=le.init(this.clippingPlanes,xe),d=Se.get(C,R.length),d.init(),R.push(d),$.enabled===!0&&$.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&kr(ae,z,-1/0,S.sortObjects)}kr(C,z,0,S.sortObjects),d.finish(),S.sortObjects===!0&&d.sort(re,se),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Le.addToRenderList(d,C),this.info.render.frame++,ce===!0&&le.beginShadows();const q=u.state.shadowsArray;ye.render(q,C,z),ce===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=d.opaque,H=d.transmissive;if(u.setupLights(),z.isArrayCamera){const ae=z.cameras;if(H.length>0)for(let pe=0,Me=ae.length;pe<Me;pe++){const be=ae[pe];Ba(Y,H,C,be)}Q&&Le.render(C);for(let pe=0,Me=ae.length;pe<Me;pe++){const be=ae[pe];Oa(d,C,be,be.viewport)}}else H.length>0&&Ba(Y,H,C,z),Q&&Le.render(C),Oa(d,C,z);v!==null&&b===0&&(P.updateMultisampleRenderTarget(v),P.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(S,C,z),it.resetDefaultState(),h=-1,c=null,w.pop(),w.length>0?(u=w[w.length-1],ce===!0&&le.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?d=R[R.length-1]:d=null};function kr(C,z,q,Y){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){Y&&D.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const pe=ee.update(C),Me=C.material;Me.visible&&d.push(C,pe,Me,q,D.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const pe=ee.update(C),Me=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),D.copy(C.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),D.copy(pe.boundingSphere.center)),D.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Me)){const be=pe.groups;for(let Ne=0,Oe=be.length;Ne<Oe;Ne++){const Re=be[Ne],je=Me[Re.materialIndex];je&&je.visible&&d.push(C,pe,je,q,D.z,Re)}}else Me.visible&&d.push(C,pe,Me,q,D.z,null)}}const ae=C.children;for(let pe=0,Me=ae.length;pe<Me;pe++)kr(ae[pe],z,q,Y)}function Oa(C,z,q,Y){const H=C.opaque,ae=C.transmissive,pe=C.transparent;u.setupLightsView(q),ce===!0&&le.setGlobalState(S.clippingPlanes,q),Y&&oe.viewport(y.copy(Y)),H.length>0&&Ji(H,z,q),ae.length>0&&Ji(ae,z,q),pe.length>0&&Ji(pe,z,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ba(C,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new Yn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?ji:pn,minFilter:En,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=u.state.transmissionRenderTarget[Y.id],pe=Y.viewport||y;ae.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const Me=S.getRenderTarget();S.setRenderTarget(ae),S.getClearColor(G),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Q&&Le.render(q);const be=S.toneMapping;S.toneMapping=Tn;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),ce===!0&&le.setGlobalState(S.clippingPlanes,Y),Ji(C,q,Y),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Re=0,je=z.length;Re<je;Re++){const $e=z[Re],ct=$e.object,at=$e.geometry,Ze=$e.material,Ce=$e.group;if(Ze.side===un&&ct.layers.test(Y.layers)){const mt=Ze.side;Ze.side=Rt,Ze.needsUpdate=!0,za(ct,q,Y,at,Ze,Ce),Ze.side=mt,Ze.needsUpdate=!0,Oe=!0}}Oe===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}S.setRenderTarget(Me),S.setClearColor(G,W),Ne!==void 0&&(Y.viewport=Ne),S.toneMapping=be}function Ji(C,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ae=C.length;H<ae;H++){const pe=C[H],Me=pe.object,be=pe.geometry,Ne=Y===null?pe.material:Y,Oe=pe.group;Me.layers.test(q.layers)&&za(Me,z,q,be,Ne,Oe)}}function za(C,z,q,Y,H,ae){C.onBeforeRender(S,z,q,Y,H,ae),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(S,z,q,Y,C,ae),H.transparent===!0&&H.side===un&&H.forceSinglePass===!1?(H.side=Rt,H.needsUpdate=!0,S.renderBufferDirect(q,z,Y,H,C,ae),H.side=An,H.needsUpdate=!0,S.renderBufferDirect(q,z,Y,H,C,ae),H.side=un):S.renderBufferDirect(q,z,Y,H,C,ae),C.onAfterRender(S,z,q,Y,H,ae)}function Qi(C,z,q){z.isScene!==!0&&(z=N);const Y=fe.get(C),H=u.state.lights,ae=u.state.shadowsArray,pe=H.state.version,Me=Ae.getParameters(C,H.state,ae,z,q),be=Ae.getProgramCacheKey(Me);let Ne=Y.programs;Y.environment=C.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(C.isMeshStandardMaterial?V:E).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ne===void 0&&(C.addEventListener("dispose",ze),Ne=new Map,Y.programs=Ne);let Oe=Ne.get(be);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===pe)return ka(C,Me),Oe}else Me.uniforms=Ae.getUniforms(C),C.onBeforeCompile(Me,S),Oe=Ae.acquireProgram(Me,be),Ne.set(be,Oe),Y.uniforms=Me.uniforms;const Re=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=le.uniform),ka(C,Me),Y.needsLights=uc(C),Y.lightsStateVersion=pe,Y.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Ha(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Pr.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function ka(C,z){const q=fe.get(C);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function lc(C,z,q,Y,H){z.isScene!==!0&&(z=N),P.resetTextureUnits();const ae=z.fog,pe=Y.isMeshStandardMaterial?z.environment:null,Me=v===null?S.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:wi,be=(Y.isMeshStandardMaterial?V:E).get(Y.envMap||pe),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,$e=!!q.morphAttributes.color;let ct=Tn;Y.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(ct=S.toneMapping);const at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ze=at!==void 0?at.length:0,Ce=fe.get(Y),mt=u.state.lights;if(ce===!0&&(xe===!0||C!==c)){const Mt=C===c&&Y.id===h;le.setState(Y,C,Mt)}let Je=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mt.state.version||Ce.outputColorSpace!==Me||H.isBatchedMesh&&Ce.batching===!1||!H.isBatchedMesh&&Ce.batching===!0||H.isBatchedMesh&&Ce.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ce.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ce.instancing===!1||!H.isInstancedMesh&&Ce.instancing===!0||H.isSkinnedMesh&&Ce.skinning===!1||!H.isSkinnedMesh&&Ce.skinning===!0||H.isInstancedMesh&&Ce.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ce.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ce.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ce.instancingMorph===!1&&H.morphTexture!==null||Ce.envMap!==be||Y.fog===!0&&Ce.fog!==ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==Oe||Ce.morphTargets!==Re||Ce.morphNormals!==je||Ce.morphColors!==$e||Ce.toneMapping!==ct||Ce.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ce.__version=Y.version);let Gt=Ce.currentProgram;Je===!0&&(Gt=Qi(Y,z,H));let Kn=!1,Pt=!1,Ni=!1;const rt=Gt.getUniforms(),Ot=Ce.uniforms;if(oe.useProgram(Gt.program)&&(Kn=!0,Pt=!0,Ni=!0),Y.id!==h&&(h=Y.id,Pt=!0),Kn||c!==C){oe.buffers.depth.getReversed()?(ue.copy(C.projectionMatrix),gu(ue),vu(ue),rt.setValue(L,"projectionMatrix",ue)):rt.setValue(L,"projectionMatrix",C.projectionMatrix),rt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Et=rt.map.cameraPosition;Et!==void 0&&Et.setValue(L,T.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&rt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&rt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),c!==C&&(c=C,Pt=!0,Ni=!0)}if(H.isSkinnedMesh){rt.setOptional(L,H,"bindMatrix"),rt.setOptional(L,H,"bindMatrixInverse");const Mt=H.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),rt.setValue(L,"boneTexture",Mt.boneTexture,P))}H.isBatchedMesh&&(rt.setOptional(L,H,"batchingTexture"),rt.setValue(L,"batchingTexture",H._matricesTexture,P),rt.setOptional(L,H,"batchingIdTexture"),rt.setValue(L,"batchingIdTexture",H._indirectTexture,P),rt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&rt.setValue(L,"batchingColorTexture",H._colorsTexture,P));const Bt=q.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&Ue.update(H,q,Gt),(Pt||Ce.receiveShadow!==H.receiveShadow)&&(Ce.receiveShadow=H.receiveShadow,rt.setValue(L,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ot.envMap.value=be,Ot.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Ot.envMapIntensity.value=z.environmentIntensity),Pt&&(rt.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&cc(Ot,Ni),ae&&Y.fog===!0&&me.refreshFogUniforms(Ot,ae),me.refreshMaterialUniforms(Ot,Y,X,Z,u.state.transmissionRenderTarget[C.id]),Pr.upload(L,Ha(Ce),Ot,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pr.upload(L,Ha(Ce),Ot,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&rt.setValue(L,"center",H.center),rt.setValue(L,"modelViewMatrix",H.modelViewMatrix),rt.setValue(L,"normalMatrix",H.normalMatrix),rt.setValue(L,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Mt=Y.uniformsGroups;for(let Et=0,Vr=Mt.length;Et<Vr;Et++){const Pn=Mt[Et];F.update(Pn,Gt),F.bind(Pn,Gt)}}return Gt}function cc(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function uc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,z,q){fe.get(C.texture).__webglTexture=z,fe.get(C.depthTexture).__webglTexture=q;const Y=fe.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const q=fe.get(C);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const hc=L.createFramebuffer();this.setRenderTarget=function(C,z=0,q=0){v=C,x=z,b=q;let Y=!0,H=null,ae=!1,pe=!1;if(C){const be=fe.get(C);if(be.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(be.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(be.__hasExternalTextures)P.rebindTextures(C,fe.get(C.texture).__webglTexture,fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Re=C.depthTexture;if(be.__boundDepthTexture!==Re){if(Re!==null&&fe.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Oe=fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?H=Oe[z][q]:H=Oe[z],ae=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?H=fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[q]:H=Oe,y.copy(C.viewport),I.copy(C.scissor),O=C.scissorTest}else y.copy(ve).multiplyScalar(X).floor(),I.copy(Be).multiplyScalar(X).floor(),O=We;if(q!==0&&(H=hc),oe.bindFramebuffer(L.FRAMEBUFFER,H)&&Y&&oe.drawBuffers(C,H),oe.viewport(y),oe.scissor(I),oe.setScissorTest(O),ae){const be=fe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,q)}else if(pe){const be=fe.get(C.texture),Ne=z;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.__webglTexture,q,Ne)}else if(C!==null&&q!==0){const be=fe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,q)}h=-1},this.readRenderTargetPixels=function(C,z,q,Y,H,ae,pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){oe.bindFramebuffer(L.FRAMEBUFFER,Me);try{const be=C.texture,Ne=be.format,Oe=be.type;if(!we.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-Y&&q>=0&&q<=C.height-H&&L.readPixels(z,q,Y,H,ke.convert(Ne),ke.convert(Oe),ae)}finally{const be=v!==null?fe.get(v).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,z,q,Y,H,ae,pe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const be=C.texture,Ne=be.format,Oe=be.type;if(!we.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-Y&&q>=0&&q<=C.height-H){oe.bindFramebuffer(L.FRAMEBUFFER,Me);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ae.byteLength,L.STREAM_READ),L.readPixels(z,q,Y,H,ke.convert(Ne),ke.convert(Oe),0);const je=v!==null?fe.get(v).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,je);const $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _u(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ae),L.deleteBuffer(Re),L.deleteSync($e),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,z=null,q=0){C.isTexture!==!0&&(On("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(C.image.width*Y),ae=Math.floor(C.image.height*Y),pe=z!==null?z.x:0,Me=z!==null?z.y:0;P.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,pe,Me,H,ae),oe.unbindTexture()};const fc=L.createFramebuffer(),dc=L.createFramebuffer();this.copyTextureToTexture=function(C,z,q=null,Y=null,H=0,ae=null){C.isTexture!==!0&&(On("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],z=arguments[2],ae=arguments[3]||0,q=null),ae===null&&(H!==0?(On("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=H,H=0):ae=0);let pe,Me,be,Ne,Oe,Re,je,$e,ct;const at=C.isCompressedTexture?C.mipmaps[ae]:C.image;if(q!==null)pe=q.max.x-q.min.x,Me=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Oe=q.min.y,Re=q.isBox3?q.min.z:0;else{const Bt=Math.pow(2,-H);pe=Math.floor(at.width*Bt),Me=Math.floor(at.height*Bt),C.isDataArrayTexture?be=at.depth:C.isData3DTexture?be=Math.floor(at.depth*Bt):be=1,Ne=0,Oe=0,Re=0}Y!==null?(je=Y.x,$e=Y.y,ct=Y.z):(je=0,$e=0,ct=0);const Ze=ke.convert(z.format),Ce=ke.convert(z.type);let mt;z.isData3DTexture?(P.setTexture3D(z,0),mt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),mt=L.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),mt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Je=L.getParameter(L.UNPACK_ROW_LENGTH),Gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pt=L.getParameter(L.UNPACK_SKIP_ROWS),Ni=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const rt=C.isDataArrayTexture||C.isData3DTexture,Ot=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){const Bt=fe.get(C),Mt=fe.get(z),Et=fe.get(Bt.__renderTarget),Vr=fe.get(Mt.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,Et.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let Pn=0;Pn<be;Pn++)rt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fe.get(C).__webglTexture,H,Re+Pn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fe.get(z).__webglTexture,ae,ct+Pn)),L.blitFramebuffer(Ne,Oe,pe,Me,je,$e,pe,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||fe.has(C)){const Bt=fe.get(C),Mt=fe.get(z);oe.bindFramebuffer(L.READ_FRAMEBUFFER,fc),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,dc);for(let Et=0;Et<be;Et++)rt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,H,Re+Et):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bt.__webglTexture,H),Ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,ae,ct+Et):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,ae),H!==0?L.blitFramebuffer(Ne,Oe,pe,Me,je,$e,pe,Me,L.COLOR_BUFFER_BIT,L.NEAREST):Ot?L.copyTexSubImage3D(mt,ae,je,$e,ct+Et,Ne,Oe,pe,Me):L.copyTexSubImage2D(mt,ae,je,$e,Ne,Oe,pe,Me);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ot?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(mt,ae,je,$e,ct,pe,Me,be,Ze,Ce,at.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(mt,ae,je,$e,ct,pe,Me,be,Ze,at.data):L.texSubImage3D(mt,ae,je,$e,ct,pe,Me,be,Ze,Ce,at):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ae,je,$e,pe,Me,Ze,Ce,at.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ae,je,$e,at.width,at.height,Ze,at.data):L.texSubImage2D(L.TEXTURE_2D,ae,je,$e,pe,Me,Ze,Ce,at);L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ni),ae===0&&z.generateMipmaps&&L.generateMipmap(mt),oe.unbindTexture()},this.copyTextureToTexture3D=function(C,z,q=null,Y=null,H=0){return C.isTexture!==!0&&(On("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],z=arguments[3],H=arguments[4]||0),On('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,z,q,Y,H)},this.initRenderTarget=function(C){fe.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),oe.unbindTexture()},this.resetState=function(){x=0,b=0,v=null,oe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Go={type:"change"},Ia={type:"start"},ql={type:"end"},yr=new Al,Wo=new Sn,Om=Math.cos(70*El.DEG2RAD),ht=new k,bt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vs=1e-6;class Bm extends Ju{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new jn,this._lastTargetPosition=new k,this._quat=new jn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new go,this._sphericalDelta=new go,this._scale=1,this._panOffset=new k,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new k,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hm.bind(this),this._onPointerDown=zm.bind(this),this._onPointerUp=km.bind(this),this._onContextMenu=jm.bind(this),this._onMouseWheel=Wm.bind(this),this._onKeyDown=Xm.bind(this),this._onTouchStart=qm.bind(this),this._onTouchMove=Ym.bind(this),this._onMouseDown=Vm.bind(this),this._onMouseMove=Gm.bind(this),this._interceptControlDown=Zm.bind(this),this._interceptControlUp=Km.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Go),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;ht.copy(t).sub(this.target),ht.applyQuaternion(this._quat),this._spherical.setFromVector3(ht),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=bt:n>Math.PI&&(n-=bt),r<-Math.PI?r+=bt:r>Math.PI&&(r-=bt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ht.setFromSpherical(this._spherical),ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ht.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const f=new k(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(o),this.object.updateMatrixWorld(),a=ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(yr.origin.copy(this.object.position),yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yr.direction))<Om?this.object.lookAt(this.target):(Wo.setFromNormalAndCoplanarPoint(this.object.up,this.target),yr.intersectPlane(Wo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vs||this._lastTargetPosition.distanceToSquared(this.target)>vs?(this.dispatchEvent(Go),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bt/60*this.autoRotateSpeed*e:bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ht.setFromMatrixColumn(t,0),ht.multiplyScalar(-e),this._panOffset.add(ht)}_panUp(e,t){this.screenSpacePanning===!0?ht.setFromMatrixColumn(t,1):(ht.setFromMatrixColumn(t,0),ht.crossVectors(this.object.up,ht)),ht.multiplyScalar(e),this._panOffset.add(ht)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ht.copy(r).sub(this.target);let s=ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Hm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function km(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ql),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case _i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case _i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ia)}function Gm(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wm(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(Ia),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ql))}function Xm(i){this.enabled!==!1&&this._handleKeyDown(i)}function qm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ia)}function Ym(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function jm(i){this.enabled!==!1&&i.preventDefault()}function Zm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Km(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $m(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let a=0;const o=Object.keys(i.attributes),l={},f={},p=[],_=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let R=0,w=o.length;R<w;R++){const S=o[R],U=i.attributes[S];l[S]=new U.constructor(new U.array.constructor(U.count*U.itemSize),U.itemSize,U.normalized);const x=i.morphAttributes[S];x&&(f[S]||(f[S]=[]),x.forEach((b,v)=>{const h=new b.array.constructor(b.count*b.itemSize);f[S][v]=new b.constructor(h,b.itemSize,b.normalized)}))}const g=e*.5,M=Math.log10(1/e),A=Math.pow(10,M),d=g*A;for(let R=0;R<s;R++){const w=n?n.getX(R):R;let S="";for(let U=0,x=o.length;U<x;U++){const b=o[U],v=i.getAttribute(b),h=v.itemSize;for(let c=0;c<h;c++)S+=`${~~(v[_[c]](w)*A+d)},`}if(S in t)p.push(t[S]);else{for(let U=0,x=o.length;U<x;U++){const b=o[U],v=i.getAttribute(b),h=i.morphAttributes[b],c=v.itemSize,y=l[b],I=f[b];for(let O=0;O<c;O++){const G=_[O],W=m[O];if(y[W](a,v[G](w)),h)for(let B=0,Z=h.length;B<Z;B++)I[B][W](a,h[B][G](w))}}t[S]=a,p.push(a),a++}}const u=i.clone();for(const R in i.attributes){const w=l[R];if(u.setAttribute(R,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),R in f)for(let S=0;S<f[R].length;S++){const U=f[R][S];u.morphAttributes[R][S]=new U.constructor(U.array.slice(0,a*U.itemSize),U.itemSize,U.normalized)}}return u.setIndex(p),u}function zr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Er(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xs={exports:{}},Xo;function Jm(){return Xo||(Xo=1,(function(i,e){(function(t){i.exports=t()})(function(){return(function t(n,r,s){function a(f,p){if(!r[f]){if(!n[f]){var _=typeof Er=="function"&&Er;if(!p&&_)return _(f,!0);if(o)return o(f,!0);throw new Error("Cannot find module '"+f+"'")}p=r[f]={exports:{}},n[f][0].call(p.exports,function(m){var g=n[f][1][m];return a(g||m)},p,p.exports,t,n,r,s)}return r[f].exports}for(var o=typeof Er=="function"&&Er,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){var M=t("crypto");function A(x,b){b=R(x,b);var v;return(v=b.algorithm!=="passthrough"?M.createHash(b.algorithm):new U).write===void 0&&(v.write=v.update,v.end=v.update),S(b,v).dispatch(x),v.update||v.end(""),v.digest?v.digest(b.encoding==="buffer"?void 0:b.encoding):(x=v.read(),b.encoding!=="buffer"?x.toString(b.encoding):x)}(r=n.exports=A).sha1=function(x){return A(x)},r.keys=function(x){return A(x,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(x){return A(x,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(x){return A(x,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var d=M.getHashes?M.getHashes().slice():["sha1","md5"],u=(d.push("passthrough"),["buffer","hex","binary","base64"]);function R(x,b){var v={};if(v.algorithm=(b=b||{}).algorithm||"sha1",v.encoding=b.encoding||"hex",v.excludeValues=!!b.excludeValues,v.algorithm=v.algorithm.toLowerCase(),v.encoding=v.encoding.toLowerCase(),v.ignoreUnknown=b.ignoreUnknown===!0,v.respectType=b.respectType!==!1,v.respectFunctionNames=b.respectFunctionNames!==!1,v.respectFunctionProperties=b.respectFunctionProperties!==!1,v.unorderedArrays=b.unorderedArrays===!0,v.unorderedSets=b.unorderedSets!==!1,v.unorderedObjects=b.unorderedObjects!==!1,v.replacer=b.replacer||void 0,v.excludeKeys=b.excludeKeys||void 0,x===void 0)throw new Error("Object argument required.");for(var h=0;h<d.length;++h)d[h].toLowerCase()===v.algorithm.toLowerCase()&&(v.algorithm=d[h]);if(d.indexOf(v.algorithm)===-1)throw new Error('Algorithm "'+v.algorithm+'"  not supported. supported values: '+d.join(", "));if(u.indexOf(v.encoding)===-1&&v.algorithm!=="passthrough")throw new Error('Encoding "'+v.encoding+'"  not supported. supported values: '+u.join(", "));return v}function w(x){if(typeof x=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(x))!=null}function S(x,b,v){v=v||[];function h(c){return b.update?b.update(c,"utf8"):b.write(c,"utf8")}return{dispatch:function(c){return this["_"+((c=x.replacer?x.replacer(c):c)===null?"null":typeof c)](c)},_object:function(c){var y,I=Object.prototype.toString.call(c),O=/\[object (.*)\]/i.exec(I);if(O=(O=O?O[1]:"unknown:["+I+"]").toLowerCase(),0<=(I=v.indexOf(c)))return this.dispatch("[CIRCULAR:"+I+"]");if(v.push(c),o!==void 0&&o.isBuffer&&o.isBuffer(c))return h("buffer:"),h(c);if(O==="object"||O==="function"||O==="asyncfunction")return I=Object.keys(c),x.unorderedObjects&&(I=I.sort()),x.respectType===!1||w(c)||I.splice(0,0,"prototype","__proto__","constructor"),x.excludeKeys&&(I=I.filter(function(G){return!x.excludeKeys(G)})),h("object:"+I.length+":"),y=this,I.forEach(function(G){y.dispatch(G),h(":"),x.excludeValues||y.dispatch(c[G]),h(",")});if(!this["_"+O]){if(x.ignoreUnknown)return h("["+O+"]");throw new Error('Unknown object type "'+O+'"')}this["_"+O](c)},_array:function(c,G){G=G!==void 0?G:x.unorderedArrays!==!1;var I=this;if(h("array:"+c.length+":"),!G||c.length<=1)return c.forEach(function(W){return I.dispatch(W)});var O=[],G=c.map(function(W){var B=new U,Z=v.slice();return S(x,B,Z).dispatch(W),O=O.concat(Z.slice(v.length)),B.read().toString()});return v=v.concat(O),G.sort(),this._array(G,!1)},_date:function(c){return h("date:"+c.toJSON())},_symbol:function(c){return h("symbol:"+c.toString())},_error:function(c){return h("error:"+c.toString())},_boolean:function(c){return h("bool:"+c.toString())},_string:function(c){h("string:"+c.length+":"),h(c.toString())},_function:function(c){h("fn:"),w(c)?this.dispatch("[native]"):this.dispatch(c.toString()),x.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(c.name)),x.respectFunctionProperties&&this._object(c)},_number:function(c){return h("number:"+c.toString())},_xml:function(c){return h("xml:"+c.toString())},_null:function(){return h("Null")},_undefined:function(){return h("Undefined")},_regexp:function(c){return h("regex:"+c.toString())},_uint8array:function(c){return h("uint8array:"),this.dispatch(Array.prototype.slice.call(c))},_uint8clampedarray:function(c){return h("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(c))},_int8array:function(c){return h("int8array:"),this.dispatch(Array.prototype.slice.call(c))},_uint16array:function(c){return h("uint16array:"),this.dispatch(Array.prototype.slice.call(c))},_int16array:function(c){return h("int16array:"),this.dispatch(Array.prototype.slice.call(c))},_uint32array:function(c){return h("uint32array:"),this.dispatch(Array.prototype.slice.call(c))},_int32array:function(c){return h("int32array:"),this.dispatch(Array.prototype.slice.call(c))},_float32array:function(c){return h("float32array:"),this.dispatch(Array.prototype.slice.call(c))},_float64array:function(c){return h("float64array:"),this.dispatch(Array.prototype.slice.call(c))},_arraybuffer:function(c){return h("arraybuffer:"),this.dispatch(new Uint8Array(c))},_url:function(c){return h("url:"+c.toString())},_map:function(c){return h("map:"),c=Array.from(c),this._array(c,x.unorderedSets!==!1)},_set:function(c){return h("set:"),c=Array.from(c),this._array(c,x.unorderedSets!==!1)},_file:function(c){return h("file:"),this.dispatch([c.name,c.size,c.type,c.lastModfied])},_blob:function(){if(x.ignoreUnknown)return h("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return h("domwindow")},_bigint:function(c){return h("bigint:"+c.toString())},_process:function(){return h("process")},_timer:function(){return h("timer")},_pipe:function(){return h("pipe")},_tcp:function(){return h("tcp")},_udp:function(){return h("udp")},_tty:function(){return h("tty")},_statwatcher:function(){return h("statwatcher")},_securecontext:function(){return h("securecontext")},_connection:function(){return h("connection")},_zlib:function(){return h("zlib")},_context:function(){return h("context")},_nodescript:function(){return h("nodescript")},_httpparser:function(){return h("httpparser")},_dataview:function(){return h("dataview")},_signal:function(){return h("signal")},_fsevent:function(){return h("fsevent")},_tlswrap:function(){return h("tlswrap")}}}function U(){return{buf:"",write:function(x){this.buf+=x},end:function(x){this.buf+=x},read:function(){return this.buf}}}r.writeToStream=function(x,b,v){return v===void 0&&(v=b,b={}),S(b=R(x,b),v).dispatch(x)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){(function(M){var A=typeof Uint8Array<"u"?Uint8Array:Array,d=43,u=47,R=48,w=97,S=65,U=45,x=95;function b(v){return v=v.charCodeAt(0),v===d||v===U?62:v===u||v===x?63:v<R?-1:v<R+10?v-R+26+26:v<S+26?v-S:v<w+26?v-w+26:void 0}M.toByteArray=function(v){var h,c;if(0<v.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var y=v.length,y=v.charAt(y-2)==="="?2:v.charAt(y-1)==="="?1:0,I=new A(3*v.length/4-y),O=0<y?v.length-4:v.length,G=0;function W(B){I[G++]=B}for(h=0;h<O;h+=4,0)W((16711680&(c=b(v.charAt(h))<<18|b(v.charAt(h+1))<<12|b(v.charAt(h+2))<<6|b(v.charAt(h+3))))>>16),W((65280&c)>>8),W(255&c);return y==2?W(255&(c=b(v.charAt(h))<<2|b(v.charAt(h+1))>>4)):y==1&&(W((c=b(v.charAt(h))<<10|b(v.charAt(h+1))<<4|b(v.charAt(h+2))>>2)>>8&255),W(255&c)),I},M.fromByteArray=function(v){var h,c,y,I,O=v.length%3,G="";function W(B){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(B)}for(h=0,y=v.length-O;h<y;h+=3)c=(v[h]<<16)+(v[h+1]<<8)+v[h+2],G+=W((I=c)>>18&63)+W(I>>12&63)+W(I>>6&63)+W(63&I);switch(O){case 1:G=(G+=W((c=v[v.length-1])>>2))+W(c<<4&63)+"==";break;case 2:G=(G=(G+=W((c=(v[v.length-2]<<8)+v[v.length-1])>>10))+W(c>>4&63))+W(c<<2&63)+"="}return G}})(r===void 0?this.base64js={}:r)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,r){(function(s,a,d,l,f,p,_,m,g){var M=t("base64-js"),A=t("ieee754");function d(T,D,N){if(!(this instanceof d))return new d(T,D,N);var Q,j,L,Pe,Te=typeof T;if(D==="base64"&&Te=="string")for(T=(Pe=T).trim?Pe.trim():Pe.replace(/^\s+|\s+$/g,"");T.length%4!=0;)T+="=";if(Te=="number")Q=X(T);else if(Te=="string")Q=d.byteLength(T,D);else{if(Te!="object")throw new Error("First argument needs to be a number, array or string.");Q=X(T.length)}if(d._useTypedArrays?j=d._augment(new Uint8Array(Q)):((j=this).length=Q,j._isBuffer=!0),d._useTypedArrays&&typeof T.byteLength=="number")j._set(T);else if(re(Pe=T)||d.isBuffer(Pe)||Pe&&typeof Pe=="object"&&typeof Pe.length=="number")for(L=0;L<Q;L++)d.isBuffer(T)?j[L]=T.readUInt8(L):j[L]=T[L];else if(Te=="string")j.write(T,0,D);else if(Te=="number"&&!d._useTypedArrays&&!N)for(L=0;L<Q;L++)j[L]=0;return j}function u(T,D,N,Q){return d._charsWritten=We((function(j){for(var L=[],Pe=0;Pe<j.length;Pe++)L.push(255&j.charCodeAt(Pe));return L})(D),T,N,Q)}function R(T,D,N,Q){return d._charsWritten=We((function(j){for(var L,Pe,Te=[],we=0;we<j.length;we++)Pe=j.charCodeAt(we),L=Pe>>8,Pe=Pe%256,Te.push(Pe),Te.push(L);return Te})(D),T,N,Q)}function w(T,D,N){var Q="";N=Math.min(T.length,N);for(var j=D;j<N;j++)Q+=String.fromCharCode(T[j]);return Q}function S(T,D,N,L){L||(J(typeof N=="boolean","missing or invalid endian"),J(D!=null,"missing offset"),J(D+1<T.length,"Trying to read beyond buffer length"));var j,L=T.length;if(!(L<=D))return N?(j=T[D],D+1<L&&(j|=T[D+1]<<8)):(j=T[D]<<8,D+1<L&&(j|=T[D+1])),j}function U(T,D,N,L){L||(J(typeof N=="boolean","missing or invalid endian"),J(D!=null,"missing offset"),J(D+3<T.length,"Trying to read beyond buffer length"));var j,L=T.length;if(!(L<=D))return N?(D+2<L&&(j=T[D+2]<<16),D+1<L&&(j|=T[D+1]<<8),j|=T[D],D+3<L&&(j+=T[D+3]<<24>>>0)):(D+1<L&&(j=T[D+1]<<16),D+2<L&&(j|=T[D+2]<<8),D+3<L&&(j|=T[D+3]),j+=T[D]<<24>>>0),j}function x(T,D,N,Q){if(Q||(J(typeof N=="boolean","missing or invalid endian"),J(D!=null,"missing offset"),J(D+1<T.length,"Trying to read beyond buffer length")),!(T.length<=D))return Q=S(T,D,N,!0),32768&Q?-1*(65535-Q+1):Q}function b(T,D,N,Q){if(Q||(J(typeof N=="boolean","missing or invalid endian"),J(D!=null,"missing offset"),J(D+3<T.length,"Trying to read beyond buffer length")),!(T.length<=D))return Q=U(T,D,N,!0),2147483648&Q?-1*(4294967295-Q+1):Q}function v(T,D,N,Q){return Q||(J(typeof N=="boolean","missing or invalid endian"),J(D+3<T.length,"Trying to read beyond buffer length")),A.read(T,D,N,23,4)}function h(T,D,N,Q){return Q||(J(typeof N=="boolean","missing or invalid endian"),J(D+7<T.length,"Trying to read beyond buffer length")),A.read(T,D,N,52,8)}function c(T,D,N,Q,j){if(j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+1<T.length,"trying to write beyond buffer length"),ce(D,65535)),j=T.length,!(j<=N))for(var L=0,Pe=Math.min(j-N,2);L<Pe;L++)T[N+L]=(D&255<<8*(Q?L:1-L))>>>8*(Q?L:1-L)}function y(T,D,N,Q,j){if(j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+3<T.length,"trying to write beyond buffer length"),ce(D,4294967295)),j=T.length,!(j<=N))for(var L=0,Pe=Math.min(j-N,4);L<Pe;L++)T[N+L]=D>>>8*(Q?L:3-L)&255}function I(T,D,N,Q,j){j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+1<T.length,"Trying to write beyond buffer length"),xe(D,32767,-32768)),T.length<=N||c(T,0<=D?D:65535+D+1,N,Q,j)}function O(T,D,N,Q,j){j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+3<T.length,"Trying to write beyond buffer length"),xe(D,2147483647,-2147483648)),T.length<=N||y(T,0<=D?D:4294967295+D+1,N,Q,j)}function G(T,D,N,Q,j){j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+3<T.length,"Trying to write beyond buffer length"),ue(D,34028234663852886e22,-34028234663852886e22)),T.length<=N||A.write(T,D,N,Q,23,4)}function W(T,D,N,Q,j){j||(J(D!=null,"missing value"),J(typeof Q=="boolean","missing or invalid endian"),J(N!=null,"missing offset"),J(N+7<T.length,"Trying to write beyond buffer length"),ue(D,17976931348623157e292,-17976931348623157e292)),T.length<=N||A.write(T,D,N,Q,52,8)}r.Buffer=d,r.SlowBuffer=d,r.INSPECT_MAX_BYTES=50,d.poolSize=8192,d._useTypedArrays=(function(){try{var T=new ArrayBuffer(0),D=new Uint8Array(T);return D.foo=function(){return 42},D.foo()===42&&typeof D.subarray=="function"}catch{return!1}})(),d.isEncoding=function(T){switch(String(T).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.isBuffer=function(T){return!(T==null||!T._isBuffer)},d.byteLength=function(T,D){var N;switch(T+="",D||"utf8"){case"hex":N=T.length/2;break;case"utf8":case"utf-8":N=ve(T).length;break;case"ascii":case"binary":case"raw":N=T.length;break;case"base64":N=Be(T).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":N=2*T.length;break;default:throw new Error("Unknown encoding")}return N},d.concat=function(T,D){if(J(re(T),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),T.length===0)return new d(0);if(T.length===1)return T[0];if(typeof D!="number")for(j=D=0;j<T.length;j++)D+=T[j].length;for(var N=new d(D),Q=0,j=0;j<T.length;j++){var L=T[j];L.copy(N,Q),Q+=L.length}return N},d.prototype.write=function(T,D,N,Q){isFinite(D)?isFinite(N)||(Q=N,N=void 0):(we=Q,Q=D,D=N,N=we),D=Number(D)||0;var j,L,Pe,Te,we=this.length-D;switch((!N||we<(N=Number(N)))&&(N=we),Q=String(Q||"utf8").toLowerCase()){case"hex":j=(function(oe,De,fe,P){fe=Number(fe)||0;var E=oe.length-fe;(!P||E<(P=Number(P)))&&(P=E),J((E=De.length)%2==0,"Invalid hex string"),E/2<P&&(P=E/2);for(var V=0;V<P;V++){var te=parseInt(De.substr(2*V,2),16);J(!isNaN(te),"Invalid hex string"),oe[fe+V]=te}return d._charsWritten=2*V,V})(this,T,D,N);break;case"utf8":case"utf-8":L=this,Pe=D,Te=N,j=d._charsWritten=We(ve(T),L,Pe,Te);break;case"ascii":case"binary":j=u(this,T,D,N);break;case"base64":L=this,Pe=D,Te=N,j=d._charsWritten=We(Be(T),L,Pe,Te);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":j=R(this,T,D,N);break;default:throw new Error("Unknown encoding")}return j},d.prototype.toString=function(T,D,N){var Q,j,L,Pe,Te=this;if(T=String(T||"utf8").toLowerCase(),D=Number(D)||0,(N=N!==void 0?Number(N):Te.length)===D)return"";switch(T){case"hex":Q=(function(we,oe,De){var fe=we.length;(!oe||oe<0)&&(oe=0),(!De||De<0||fe<De)&&(De=fe);for(var P="",E=oe;E<De;E++)P+=se(we[E]);return P})(Te,D,N);break;case"utf8":case"utf-8":Q=(function(we,oe,De){var fe="",P="";De=Math.min(we.length,De);for(var E=oe;E<De;E++)we[E]<=127?(fe+=K(P)+String.fromCharCode(we[E]),P=""):P+="%"+we[E].toString(16);return fe+K(P)})(Te,D,N);break;case"ascii":case"binary":Q=w(Te,D,N);break;case"base64":j=Te,Pe=N,Q=(L=D)===0&&Pe===j.length?M.fromByteArray(j):M.fromByteArray(j.slice(L,Pe));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":Q=(function(we,oe,De){for(var fe=we.slice(oe,De),P="",E=0;E<fe.length;E+=2)P+=String.fromCharCode(fe[E]+256*fe[E+1]);return P})(Te,D,N);break;default:throw new Error("Unknown encoding")}return Q},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},d.prototype.copy=function(T,D,N,Q){if(D=D||0,(Q=Q||Q===0?Q:this.length)!==(N=N||0)&&T.length!==0&&this.length!==0){J(N<=Q,"sourceEnd < sourceStart"),J(0<=D&&D<T.length,"targetStart out of bounds"),J(0<=N&&N<this.length,"sourceStart out of bounds"),J(0<=Q&&Q<=this.length,"sourceEnd out of bounds"),Q>this.length&&(Q=this.length);var j=(Q=T.length-D<Q-N?T.length-D+N:Q)-N;if(j<100||!d._useTypedArrays)for(var L=0;L<j;L++)T[L+D]=this[L+N];else T._set(this.subarray(N,N+j),D)}},d.prototype.slice=function(T,D){var N=this.length;if(T=Z(T,N,0),D=Z(D,N,N),d._useTypedArrays)return d._augment(this.subarray(T,D));for(var Q=D-T,j=new d(Q,void 0,!0),L=0;L<Q;L++)j[L]=this[L+T];return j},d.prototype.get=function(T){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(T)},d.prototype.set=function(T,D){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(T,D)},d.prototype.readUInt8=function(T,D){if(D||(J(T!=null,"missing offset"),J(T<this.length,"Trying to read beyond buffer length")),!(T>=this.length))return this[T]},d.prototype.readUInt16LE=function(T,D){return S(this,T,!0,D)},d.prototype.readUInt16BE=function(T,D){return S(this,T,!1,D)},d.prototype.readUInt32LE=function(T,D){return U(this,T,!0,D)},d.prototype.readUInt32BE=function(T,D){return U(this,T,!1,D)},d.prototype.readInt8=function(T,D){if(D||(J(T!=null,"missing offset"),J(T<this.length,"Trying to read beyond buffer length")),!(T>=this.length))return 128&this[T]?-1*(255-this[T]+1):this[T]},d.prototype.readInt16LE=function(T,D){return x(this,T,!0,D)},d.prototype.readInt16BE=function(T,D){return x(this,T,!1,D)},d.prototype.readInt32LE=function(T,D){return b(this,T,!0,D)},d.prototype.readInt32BE=function(T,D){return b(this,T,!1,D)},d.prototype.readFloatLE=function(T,D){return v(this,T,!0,D)},d.prototype.readFloatBE=function(T,D){return v(this,T,!1,D)},d.prototype.readDoubleLE=function(T,D){return h(this,T,!0,D)},d.prototype.readDoubleBE=function(T,D){return h(this,T,!1,D)},d.prototype.writeUInt8=function(T,D,N){N||(J(T!=null,"missing value"),J(D!=null,"missing offset"),J(D<this.length,"trying to write beyond buffer length"),ce(T,255)),D>=this.length||(this[D]=T)},d.prototype.writeUInt16LE=function(T,D,N){c(this,T,D,!0,N)},d.prototype.writeUInt16BE=function(T,D,N){c(this,T,D,!1,N)},d.prototype.writeUInt32LE=function(T,D,N){y(this,T,D,!0,N)},d.prototype.writeUInt32BE=function(T,D,N){y(this,T,D,!1,N)},d.prototype.writeInt8=function(T,D,N){N||(J(T!=null,"missing value"),J(D!=null,"missing offset"),J(D<this.length,"Trying to write beyond buffer length"),xe(T,127,-128)),D>=this.length||(0<=T?this.writeUInt8(T,D,N):this.writeUInt8(255+T+1,D,N))},d.prototype.writeInt16LE=function(T,D,N){I(this,T,D,!0,N)},d.prototype.writeInt16BE=function(T,D,N){I(this,T,D,!1,N)},d.prototype.writeInt32LE=function(T,D,N){O(this,T,D,!0,N)},d.prototype.writeInt32BE=function(T,D,N){O(this,T,D,!1,N)},d.prototype.writeFloatLE=function(T,D,N){G(this,T,D,!0,N)},d.prototype.writeFloatBE=function(T,D,N){G(this,T,D,!1,N)},d.prototype.writeDoubleLE=function(T,D,N){W(this,T,D,!0,N)},d.prototype.writeDoubleBE=function(T,D,N){W(this,T,D,!1,N)},d.prototype.fill=function(T,D,N){if(D=D||0,N=N||this.length,J(typeof(T=typeof(T=T||0)=="string"?T.charCodeAt(0):T)=="number"&&!isNaN(T),"value is not a number"),J(D<=N,"end < start"),N!==D&&this.length!==0){J(0<=D&&D<this.length,"start out of bounds"),J(0<=N&&N<=this.length,"end out of bounds");for(var Q=D;Q<N;Q++)this[Q]=T}},d.prototype.inspect=function(){for(var T=[],D=this.length,N=0;N<D;N++)if(T[N]=se(this[N]),N===r.INSPECT_MAX_BYTES){T[N+1]="...";break}return"<Buffer "+T.join(" ")+">"},d.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(d._useTypedArrays)return new d(this).buffer;for(var T=new Uint8Array(this.length),D=0,N=T.length;D<N;D+=1)T[D]=this[D];return T.buffer};var B=d.prototype;function Z(T,D,N){return typeof T!="number"?N:D<=(T=~~T)?D:0<=T||0<=(T+=D)?T:0}function X(T){return(T=~~Math.ceil(+T))<0?0:T}function re(T){return(Array.isArray||function(D){return Object.prototype.toString.call(D)==="[object Array]"})(T)}function se(T){return T<16?"0"+T.toString(16):T.toString(16)}function ve(T){for(var D=[],N=0;N<T.length;N++){var Q=T.charCodeAt(N);if(Q<=127)D.push(T.charCodeAt(N));else for(var j=N,L=(55296<=Q&&Q<=57343&&N++,encodeURIComponent(T.slice(j,N+1)).substr(1).split("%")),Pe=0;Pe<L.length;Pe++)D.push(parseInt(L[Pe],16))}return D}function Be(T){return M.toByteArray(T)}function We(T,D,N,Q){for(var j=0;j<Q&&!(j+N>=D.length||j>=T.length);j++)D[j+N]=T[j];return j}function K(T){try{return decodeURIComponent(T)}catch{return"�"}}function ce(T,D){J(typeof T=="number","cannot write a non-number as a number"),J(0<=T,"specified a negative value for writing an unsigned value"),J(T<=D,"value is larger than maximum value for type"),J(Math.floor(T)===T,"value has a fractional component")}function xe(T,D,N){J(typeof T=="number","cannot write a non-number as a number"),J(T<=D,"value larger than maximum allowed value"),J(N<=T,"value smaller than minimum allowed value"),J(Math.floor(T)===T,"value has a fractional component")}function ue(T,D,N){J(typeof T=="number","cannot write a non-number as a number"),J(T<=D,"value larger than maximum allowed value"),J(N<=T,"value smaller than minimum allowed value")}function J(T,D){if(!T)throw new Error(D||"Failed assertion")}d._augment=function(T){return T._isBuffer=!0,T._get=T.get,T._set=T.set,T.get=B.get,T.set=B.set,T.write=B.write,T.toString=B.toString,T.toLocaleString=B.toString,T.toJSON=B.toJSON,T.copy=B.copy,T.slice=B.slice,T.readUInt8=B.readUInt8,T.readUInt16LE=B.readUInt16LE,T.readUInt16BE=B.readUInt16BE,T.readUInt32LE=B.readUInt32LE,T.readUInt32BE=B.readUInt32BE,T.readInt8=B.readInt8,T.readInt16LE=B.readInt16LE,T.readInt16BE=B.readInt16BE,T.readInt32LE=B.readInt32LE,T.readInt32BE=B.readInt32BE,T.readFloatLE=B.readFloatLE,T.readFloatBE=B.readFloatBE,T.readDoubleLE=B.readDoubleLE,T.readDoubleBE=B.readDoubleBE,T.writeUInt8=B.writeUInt8,T.writeUInt16LE=B.writeUInt16LE,T.writeUInt16BE=B.writeUInt16BE,T.writeUInt32LE=B.writeUInt32LE,T.writeUInt32BE=B.writeUInt32BE,T.writeInt8=B.writeInt8,T.writeInt16LE=B.writeInt16LE,T.writeInt16BE=B.writeInt16BE,T.writeInt32LE=B.writeInt32LE,T.writeInt32BE=B.writeInt32BE,T.writeFloatLE=B.writeFloatLE,T.writeFloatBE=B.writeFloatBE,T.writeDoubleLE=B.writeDoubleLE,T.writeDoubleBE=B.writeDoubleBE,T.fill=B.fill,T.inspect=B.inspect,T.toArrayBuffer=B.toArrayBuffer,T}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,r){(function(s,a,M,l,f,p,_,m,g){var M=t("buffer").Buffer,A=4,d=new M(A);d.fill(0),n.exports={hash:function(u,R,w,S){for(var U=R((function(c,y){c.length%A!=0&&(I=c.length+(A-c.length%A),c=M.concat([c,d],I));for(var I,O=[],G=y?c.readInt32BE:c.readInt32LE,W=0;W<c.length;W+=A)O.push(G.call(c,W));return O})(u=M.isBuffer(u)?u:new M(u),S),8*u.length),R=S,x=new M(w),b=R?x.writeInt32BE:x.writeInt32LE,v=0;v<U.length;v++)b.call(x,U[v],4*v,!0);return x}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,r){(function(s,a,M,l,f,p,_,m,g){var M=t("buffer").Buffer,A=t("./sha"),d=t("./sha256"),u=t("./rng"),R={sha1:A,sha256:d,md5:t("./md5")},w=64,S=new M(w);function U(c,y){var I=R[c=c||"sha1"],O=[];return I||x("algorithm:",c,"is not yet supported"),{update:function(G){return M.isBuffer(G)||(G=new M(G)),O.push(G),G.length,this},digest:function(G){var W=M.concat(O),W=y?(function(B,Z,X){M.isBuffer(Z)||(Z=new M(Z)),M.isBuffer(X)||(X=new M(X)),Z.length>w?Z=B(Z):Z.length<w&&(Z=M.concat([Z,S],w));for(var re=new M(w),se=new M(w),ve=0;ve<w;ve++)re[ve]=54^Z[ve],se[ve]=92^Z[ve];return X=B(M.concat([re,X])),B(M.concat([se,X]))})(I,y,W):I(W);return O=null,G?W.toString(G):W}}}function x(){var c=[].slice.call(arguments).join(" ");throw new Error([c,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}S.fill(0),r.createHash=function(c){return U(c)},r.createHmac=U,r.randomBytes=function(c,y){if(!y||!y.call)return new M(u(c));try{y.call(this,void 0,new M(u(c)))}catch(I){y(I)}};var b,v=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],h=function(c){r[c]=function(){x("sorry,",c,"is not implemented yet")}};for(b in v)h(v[b])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){var M=t("./helpers");function A(x,b){x[b>>5]|=128<<b%32,x[14+(b+64>>>9<<4)]=b;for(var v=1732584193,h=-271733879,c=-1732584194,y=271733878,I=0;I<x.length;I+=16){var O=v,G=h,W=c,B=y,v=u(v,h,c,y,x[I+0],7,-680876936),y=u(y,v,h,c,x[I+1],12,-389564586),c=u(c,y,v,h,x[I+2],17,606105819),h=u(h,c,y,v,x[I+3],22,-1044525330);v=u(v,h,c,y,x[I+4],7,-176418897),y=u(y,v,h,c,x[I+5],12,1200080426),c=u(c,y,v,h,x[I+6],17,-1473231341),h=u(h,c,y,v,x[I+7],22,-45705983),v=u(v,h,c,y,x[I+8],7,1770035416),y=u(y,v,h,c,x[I+9],12,-1958414417),c=u(c,y,v,h,x[I+10],17,-42063),h=u(h,c,y,v,x[I+11],22,-1990404162),v=u(v,h,c,y,x[I+12],7,1804603682),y=u(y,v,h,c,x[I+13],12,-40341101),c=u(c,y,v,h,x[I+14],17,-1502002290),v=R(v,h=u(h,c,y,v,x[I+15],22,1236535329),c,y,x[I+1],5,-165796510),y=R(y,v,h,c,x[I+6],9,-1069501632),c=R(c,y,v,h,x[I+11],14,643717713),h=R(h,c,y,v,x[I+0],20,-373897302),v=R(v,h,c,y,x[I+5],5,-701558691),y=R(y,v,h,c,x[I+10],9,38016083),c=R(c,y,v,h,x[I+15],14,-660478335),h=R(h,c,y,v,x[I+4],20,-405537848),v=R(v,h,c,y,x[I+9],5,568446438),y=R(y,v,h,c,x[I+14],9,-1019803690),c=R(c,y,v,h,x[I+3],14,-187363961),h=R(h,c,y,v,x[I+8],20,1163531501),v=R(v,h,c,y,x[I+13],5,-1444681467),y=R(y,v,h,c,x[I+2],9,-51403784),c=R(c,y,v,h,x[I+7],14,1735328473),v=w(v,h=R(h,c,y,v,x[I+12],20,-1926607734),c,y,x[I+5],4,-378558),y=w(y,v,h,c,x[I+8],11,-2022574463),c=w(c,y,v,h,x[I+11],16,1839030562),h=w(h,c,y,v,x[I+14],23,-35309556),v=w(v,h,c,y,x[I+1],4,-1530992060),y=w(y,v,h,c,x[I+4],11,1272893353),c=w(c,y,v,h,x[I+7],16,-155497632),h=w(h,c,y,v,x[I+10],23,-1094730640),v=w(v,h,c,y,x[I+13],4,681279174),y=w(y,v,h,c,x[I+0],11,-358537222),c=w(c,y,v,h,x[I+3],16,-722521979),h=w(h,c,y,v,x[I+6],23,76029189),v=w(v,h,c,y,x[I+9],4,-640364487),y=w(y,v,h,c,x[I+12],11,-421815835),c=w(c,y,v,h,x[I+15],16,530742520),v=S(v,h=w(h,c,y,v,x[I+2],23,-995338651),c,y,x[I+0],6,-198630844),y=S(y,v,h,c,x[I+7],10,1126891415),c=S(c,y,v,h,x[I+14],15,-1416354905),h=S(h,c,y,v,x[I+5],21,-57434055),v=S(v,h,c,y,x[I+12],6,1700485571),y=S(y,v,h,c,x[I+3],10,-1894986606),c=S(c,y,v,h,x[I+10],15,-1051523),h=S(h,c,y,v,x[I+1],21,-2054922799),v=S(v,h,c,y,x[I+8],6,1873313359),y=S(y,v,h,c,x[I+15],10,-30611744),c=S(c,y,v,h,x[I+6],15,-1560198380),h=S(h,c,y,v,x[I+13],21,1309151649),v=S(v,h,c,y,x[I+4],6,-145523070),y=S(y,v,h,c,x[I+11],10,-1120210379),c=S(c,y,v,h,x[I+2],15,718787259),h=S(h,c,y,v,x[I+9],21,-343485551),v=U(v,O),h=U(h,G),c=U(c,W),y=U(y,B)}return Array(v,h,c,y)}function d(x,b,v,h,c,y){return U((b=U(U(b,x),U(h,y)))<<c|b>>>32-c,v)}function u(x,b,v,h,c,y,I){return d(b&v|~b&h,x,b,c,y,I)}function R(x,b,v,h,c,y,I){return d(b&h|v&~h,x,b,c,y,I)}function w(x,b,v,h,c,y,I){return d(b^v^h,x,b,c,y,I)}function S(x,b,v,h,c,y,I){return d(v^(b|~h),x,b,c,y,I)}function U(x,b){var v=(65535&x)+(65535&b);return(x>>16)+(b>>16)+(v>>16)<<16|65535&v}n.exports=function(x){return M.hash(x,A,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){n.exports=function(M){for(var A,d=new Array(M),u=0;u<M;u++)(3&u)==0&&(A=4294967296*Math.random()),d[u]=A>>>((3&u)<<3)&255;return d}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){var M=t("./helpers");function A(R,w){R[w>>5]|=128<<24-w%32,R[15+(w+64>>9<<4)]=w;for(var S,U,x,b=Array(80),v=1732584193,h=-271733879,c=-1732584194,y=271733878,I=-1009589776,O=0;O<R.length;O+=16){for(var G=v,W=h,B=c,Z=y,X=I,re=0;re<80;re++){b[re]=re<16?R[O+re]:u(b[re-3]^b[re-8]^b[re-14]^b[re-16],1);var se=d(d(u(v,5),(se=h,U=c,x=y,(S=re)<20?se&U|~se&x:!(S<40)&&S<60?se&U|se&x|U&x:se^U^x)),d(d(I,b[re]),(S=re)<20?1518500249:S<40?1859775393:S<60?-1894007588:-899497514)),I=y,y=c,c=u(h,30),h=v,v=se}v=d(v,G),h=d(h,W),c=d(c,B),y=d(y,Z),I=d(I,X)}return Array(v,h,c,y,I)}function d(R,w){var S=(65535&R)+(65535&w);return(R>>16)+(w>>16)+(S>>16)<<16|65535&S}function u(R,w){return R<<w|R>>>32-w}n.exports=function(R){return M.hash(R,A,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){function M(w,S){var U=(65535&w)+(65535&S);return(w>>16)+(S>>16)+(U>>16)<<16|65535&U}function A(w,S){var U,x=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),b=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),v=new Array(64);w[S>>5]|=128<<24-S%32,w[15+(S+64>>9<<4)]=S;for(var h,c,y=0;y<w.length;y+=16){for(var I=b[0],O=b[1],G=b[2],W=b[3],B=b[4],Z=b[5],X=b[6],re=b[7],se=0;se<64;se++)v[se]=se<16?w[se+y]:M(M(M((c=v[se-2],u(c,17)^u(c,19)^R(c,10)),v[se-7]),(c=v[se-15],u(c,7)^u(c,18)^R(c,3))),v[se-16]),U=M(M(M(M(re,u(c=B,6)^u(c,11)^u(c,25)),B&Z^~B&X),x[se]),v[se]),h=M(u(h=I,2)^u(h,13)^u(h,22),I&O^I&G^O&G),re=X,X=Z,Z=B,B=M(W,U),W=G,G=O,O=I,I=M(U,h);b[0]=M(I,b[0]),b[1]=M(O,b[1]),b[2]=M(G,b[2]),b[3]=M(W,b[3]),b[4]=M(B,b[4]),b[5]=M(Z,b[5]),b[6]=M(X,b[6]),b[7]=M(re,b[7])}return b}var d=t("./helpers"),u=function(w,S){return w>>>S|w<<32-S},R=function(w,S){return w>>>S};n.exports=function(w){return d.hash(w,A,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){r.read=function(M,A,d,u,y){var w,S,U=8*y-u-1,x=(1<<U)-1,b=x>>1,v=-7,h=d?y-1:0,c=d?-1:1,y=M[A+h];for(h+=c,w=y&(1<<-v)-1,y>>=-v,v+=U;0<v;w=256*w+M[A+h],h+=c,v-=8);for(S=w&(1<<-v)-1,w>>=-v,v+=u;0<v;S=256*S+M[A+h],h+=c,v-=8);if(w===0)w=1-b;else{if(w===x)return S?NaN:1/0*(y?-1:1);S+=Math.pow(2,u),w-=b}return(y?-1:1)*S*Math.pow(2,w-u)},r.write=function(M,A,d,u,R,I){var S,U,x=8*I-R-1,b=(1<<x)-1,v=b>>1,h=R===23?Math.pow(2,-24)-Math.pow(2,-77):0,c=u?0:I-1,y=u?1:-1,I=A<0||A===0&&1/A<0?1:0;for(A=Math.abs(A),isNaN(A)||A===1/0?(U=isNaN(A)?1:0,S=b):(S=Math.floor(Math.log(A)/Math.LN2),A*(u=Math.pow(2,-S))<1&&(S--,u*=2),2<=(A+=1<=S+v?h/u:h*Math.pow(2,1-v))*u&&(S++,u/=2),b<=S+v?(U=0,S=b):1<=S+v?(U=(A*u-1)*Math.pow(2,R),S+=v):(U=A*Math.pow(2,v-1)*Math.pow(2,R),S=0));8<=R;M[d+c]=255&U,c+=y,U/=256,R-=8);for(S=S<<R|U,x+=R;0<x;M[d+c]=255&S,c+=y,S/=256,x-=8);M[d+c-y]|=128*I}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,r){(function(s,a,o,l,f,p,_,m,g){var M,A,d;function u(){}(s=n.exports={}).nextTick=(A=typeof window<"u"&&window.setImmediate,d=typeof window<"u"&&window.postMessage&&window.addEventListener,A?function(R){return window.setImmediate(R)}:d?(M=[],window.addEventListener("message",function(R){var w=R.source;w!==window&&w!==null||R.data!=="process-tick"||(R.stopPropagation(),0<M.length&&M.shift()())},!0),function(R){M.push(R),window.postMessage("process-tick","*")}):function(R){setTimeout(R,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=u,s.addListener=u,s.once=u,s.off=u,s.removeListener=u,s.removeAllListeners=u,s.emit=u,s.binding=function(R){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(R){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(xs)),xs.exports}var Qm=Jm();const e_=zr(Qm);var Ms,qo;function Yl(){return qo||(qo=1,Ms=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]),Ms}var Ss,Yo;function t_(){return Yo||(Yo=1,Ss=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]),Ss}var ys,jo;function jl(){return jo||(jo=1,ys=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]),ys}var Es,Zo;function n_(){if(Zo)return Es;Zo=1;var i=Yl();return Es=i.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Es}var bs,Ko;function i_(){if(Ko)return bs;Ko=1;var i=jl();return i=i.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),bs=i.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),bs}var Ts,$o;function r_(){if($o)return Ts;$o=1,Ts=S;var i=Yl(),e=t_(),t=jl(),n=n_(),r=i_(),s=999,a=9999,o=0,l=1,f=2,p=3,_=4,m=5,g=6,M=7,A=8,d=9,u=10,R=11,w=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function S(U){var x=0,b=0,v=s,h,c,y=[],I=[],O=1,G=0,W=0,B=!1,Z=!1,X="",re;U=U||{};var se=t,ve=i;U.version==="300 es"&&(se=r,ve=n);for(var Be={},We={},x=0;x<se.length;x++)Be[se[x]]=!0;for(var x=0;x<ve.length;x++)We[ve[x]]=!0;return function(oe){return I=[],oe!==null?ce(oe):xe()};function K(oe){oe.length&&I.push({type:w[v],data:oe,position:W,line:O,column:G})}function ce(oe){x=0,oe.toString&&(oe=oe.toString()),X+=oe.replace(/\r\n/g,`
`),re=X.length;for(var De;h=X[x],x<re;){switch(De=x,v){case o:x=N();break;case l:x=D();break;case f:x=T();break;case p:x=Q();break;case _:x=Pe();break;case R:x=L();break;case m:x=Te();break;case a:x=we();break;case d:x=J();break;case s:x=ue();break}if(De!==x)switch(X[De]){case`
`:G=0,++O;break;default:++G;break}}return b+=x,X=X.slice(x),I}function xe(oe){return y.length&&K(y.join("")),v=u,K("(eof)"),I}function ue(){return y=y.length?[]:y,c==="/"&&h==="*"?(W=b+x-1,v=o,c=h,x+1):c==="/"&&h==="/"?(W=b+x-1,v=l,c=h,x+1):h==="#"?(v=f,W=b+x,x):/\s/.test(h)?(v=d,W=b+x,x):(B=/\d/.test(h),Z=/[^\w_]/.test(h),W=b+x,v=B?_:Z?p:a,x)}function J(){return/[^\s]/g.test(h)?(K(y.join("")),v=s,x):(y.push(h),c=h,x+1)}function T(){return(h==="\r"||h===`
`)&&c!=="\\"?(K(y.join("")),v=s,x):(y.push(h),c=h,x+1)}function D(){return T()}function N(){return h==="/"&&c==="*"?(y.push(h),K(y.join("")),v=s,x+1):(y.push(h),c=h,x+1)}function Q(){if(c==="."&&/\d/.test(h))return v=m,x;if(c==="/"&&h==="*")return v=o,x;if(c==="/"&&h==="/")return v=l,x;if(h==="."&&y.length){for(;j(y););return v=m,x}if(h===";"||h===")"||h==="("){if(y.length)for(;j(y););return K(h),v=s,x+1}var oe=y.length===2&&h!=="=";if(/[\w_\d\s]/.test(h)||oe){for(;j(y););return v=s,x}return y.push(h),c=h,x+1}function j(oe){var De=0,fe,P;do{if(fe=e.indexOf(oe.slice(0,oe.length+De).join("")),P=e[fe],fe===-1){if(De--+oe.length>0)continue;P=oe.slice(0,1).join("")}return K(P),W+=P.length,y=y.slice(P.length),y.length}while(!0)}function L(){return/[^a-fA-F0-9]/.test(h)?(K(y.join("")),v=s,x):(y.push(h),c=h,x+1)}function Pe(){return h==="."||/[eE]/.test(h)?(y.push(h),v=m,c=h,x+1):h==="x"&&y.length===1&&y[0]==="0"?(v=R,y.push(h),c=h,x+1):/[^\d]/.test(h)?(K(y.join("")),v=s,x):(y.push(h),c=h,x+1)}function Te(){return h==="f"&&(y.push(h),c=h,x+=1),/[eE]/.test(h)||(h==="-"||h==="+")&&/[eE]/.test(c)?(y.push(h),c=h,x+1):/[^\d]/.test(h)?(K(y.join("")),v=s,x):(y.push(h),c=h,x+1)}function we(){if(/[^\d\w_]/.test(h)){var oe=y.join("");return We[oe]?v=A:Be[oe]?v=M:v=g,K(y.join("")),v=s,x}return y.push(h),c=h,x+1}}return Ts}var As,Jo;function s_(){if(Jo)return As;Jo=1;var i=r_();As=e;function e(t,n){var r=i(n),s=[];return s=s.concat(r(t)),s=s.concat(r(null)),s}return As}var a_=s_();const o_=zr(a_);var ws,Qo;function l_(){if(Qo)return ws;Qo=1,ws=i;function i(e){for(var t=[],n=0;n<e.length;n++)e[n].type!=="eof"&&t.push(e[n].data);return t.join("")}return ws}var c_=l_();const el=zr(c_);var Rs,tl;function u_(){if(tl)return Rs;tl=1,Rs=i;function i(n){var r=null,s=null,a=0,o=0,l=0,f=0,p=0,_=[],m,g,M;for(m=0,g;m<n.length;m++)if(M=n[m],M.data==="{"){if(a&&a++||(g=d(m,e(")"),e()),g<0)||(f=g,g=d(g,e("("),e(")")),g<0)||(p=g,g=d(g,t),g<0)||n[g].type!=="ident"||(s=n[g].data,g=d(g,t),g<0))continue;a=1,o=m,r=n[g].data,l=g;var A=d(g,t);switch(n[A]&&n[A].data){case"lowp":case"highp":case"mediump":l=A}}else if(a&&M.data==="}"){if(--a)continue;_.push({name:s,type:r,body:[o+1,m],args:[p,f+1],outer:[l,m+1]})}for(m=0;m<n.length;m++)if(M=n[m],M.data===";"){if(g=d(m,e(")"),e()),g<0||(f=g,g=d(g,e("("),e(")")),g<0)||(p=g,g=d(g,t),g<0)||n[g].type!=="ident"||(s=n[g].data,g=d(g,t),g<0)||n[g].type==="operator"||n[g].data==="return")continue;r=n[g].data,_.push({name:s,type:r,body:!1,args:[p,f+1],outer:[g,m+1]})}return _.sort(function(u,R){return u.outer[0]-R.outer[0]});function d(u,R,w){for(var S=u-1;S>=0;S--){if(R(n[S]))return S;if(w&&w(n[S]))return-1}return-1}}function e(n){return function(r){return r.type==="operator"&&(!n||r.data===n)}}function t(n){return n.type!=="whitespace"}return Rs}var h_=u_();const f_=zr(h_);function d_(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Zl(i){var e=d_(i,"string");return typeof e=="symbol"?e:String(e)}function et(i,e,t){return e=Zl(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function nl(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function hi(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nl(Object(t),!0).forEach(function(n){et(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):nl(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function p_(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function m_(i,e){if(i==null)return{};var t=p_(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function __(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function g_(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Zl(n.key),n)}}function v_(i,e,t){return e&&g_(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Kl(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function _a(i,e){return _a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},_a(i,e)}function x_(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&_a(i,e)}function Nr(i){return Nr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Nr(i)}function M_(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S_(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Kl(i)}function y_(i){var e=M_();return function(){var n=Nr(i),r;if(e){var s=Nr(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return S_(this,r)}}var Ie={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},Tt,fi,E_=(Tt={},et(Tt,"".concat(Ie.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ie.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),et(Tt,"".concat(Ie.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ie.position,`;
  `)}),et(Tt,"".concat(Ie.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ie.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),et(Tt,"".concat(Ie.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ie.pointSize,`;
    `)}),et(Tt,"".concat(Ie.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ie.diffuseColor,`;
  `)}),et(Tt,"".concat(Ie.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ie.fragColor,`;
  `)}),et(Tt,"".concat(Ie.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ie.emissive,`;
    `)}),et(Tt,"".concat(Ie.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ie.roughness,`;
    `)}),et(Tt,"".concat(Ie.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ie.metalness,`;
    `)}),et(Tt,"".concat(Ie.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ie.ao,`;
    `)}),et(Tt,"".concat(Ie.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ie.bump," - (dot(").concat(Ie.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),et(Tt,"".concat(Ie.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ie.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ie.depthAlpha,`;
    `)}),Tt),b_=(fi={},et(fi,"".concat(Ie.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ie.position,`, 1.0 );
  `)}),et(fi,"".concat(Ie.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ie.position,`;
  `)}),et(fi,"".concat(Ie.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ie.diffuseColor,`;
  `)}),et(fi,"".concat(Ie.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ie.fragColor,`;
  `)}),fi),T_=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,A_=`
    varying mat4 csm_internal_vModelViewMatrix;
`,w_=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,R_=`
    varying mat4 csm_internal_vModelViewMatrix;
`,C_=`
    
`,At,P_=(At={},et(At,"".concat(Ie.position),"*"),et(At,"".concat(Ie.positionRaw),"*"),et(At,"".concat(Ie.normal),"*"),et(At,"".concat(Ie.pointSize),["PointsMaterial"]),et(At,"".concat(Ie.diffuseColor),"*"),et(At,"".concat(Ie.fragColor),"*"),et(At,"".concat(Ie.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),et(At,"".concat(Ie.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),et(At,"".concat(Ie.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),et(At,"".concat(Ie.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),et(At,"".concat(Ie.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),et(At,"".concat(Ie.depthAlpha),"*"),At),D_=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],L_=function(e,t,n){return e.split(t).join(n)},I_=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},U_=function(e,t){return new RegExp("\\b".concat(I_(t),"\\b")).test(e)};function N_(i){try{new i}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function F_(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",a=typeof r[1].set=="function",o=typeof r[1].value=="function",l=r[0]==="constructor";return(s||a||o)&&!l}).forEach(function(r){if(typeof i[r[0]]=="function"){t||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function O_(i){var e=i.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function il(i){return i.replace(/\s/g,"")}function B_(i,e,t){var n=i.lastIndexOf(e);return n===-1?i:i.substring(0,n)+t+i.substring(n+e.length)}var $l=(function(i){x_(t,i);var e=y_(t);function t(n){var r,s=n.baseMaterial,a=n.fragmentShader,o=n.vertexShader,l=n.uniforms,f=n.patchMap,p=n.cacheKey,_=n.silent,m=m_(n,D_);__(this,t);var g;if(N_(s)?g=new s(m):(g=s,Object.assign(g,m)),g.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=e.call(this),F_(Kl(r),g,_),r.__csm={patchMap:f||{},fragmentShader:a||"",vertexShader:o||"",cacheKey:p,baseMaterial:s,instanceID:El.generateUUID(),type:g.type,isAlreadyExtended:!O_(g.onBeforeCompile),cacheHash:"",silent:_},r.uniforms=hi(hi({},r.uniforms||{}),l||{});{var M=r.__csm,A=M.fragmentShader,d=M.vertexShader,u=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(A,d,u)}return r}return v_(t,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,a=s.fragmentShader,o=s.vertexShader,l=this.uniforms,f=this.getCacheHash();this.__csm.cacheHash=f,this.generateMaterial(a,o,l)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,a=r.vertexShader,o=this.uniforms,l=Object.values(o).reduce(function(p,_){var m=_.value;return p+JSON.stringify(m)},""),f=il(s)+il(a)+l;return f.trim().length>0?e_(f):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,a){var o=this,l=this.parseShader(r),f=this.parseShader(s);this.uniforms=a||{},this.customProgramCacheKey=function(){return o.__csm.cacheHash};var p=function(g){try{if(l){var M=o.patchShader(l,g.fragmentShader,!0);g.fragmentShader=o.getMaterialDefine()+M}if(f){var A=o.patchShader(f,g.vertexShader);g.vertexShader=`#define IS_VERTEX;
`+A,g.vertexShader=o.getMaterialDefine()+g.vertexShader}g.uniforms=hi(hi({},g.uniforms),o.uniforms),o.uniforms=g.uniforms}catch(d){console.error(d)}};if(this.__csm.isAlreadyExtended){var _=this.onBeforeCompile;this.onBeforeCompile=function(m,g){_(m,g),p(m)}}else this.onBeforeCompile=p;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,a){var o=this,l=s,f=hi(hi({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(f).forEach(function(m){Object.keys(f[m]).forEach(function(g){var M=P_[m],A=o.__csm.type;if(m==="*"||U_(r.main,m))if(!M||Array.isArray(M)&&M.includes(A)||M==="*")l=L_(l,g,f[m][g]);else throw new Error("CSM: ".concat(m," is not available in ").concat(A,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(a?R_:A_,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(T_,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(a?C_:w_,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var p=this.__csm.isAlreadyExtended,_=l.includes("// CSM_END");return p&&_?l=B_(l,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),l=r.defines+l,l}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),a=o_(s),o=f_(a),l=o.map(function(_){return _.name}).indexOf("main"),f=el(a.slice(0,l>=0?o[l].outer[0]:void 0)),p=l>=0?this.getShaderFromIndex(a,o[l].body):"";return{defines:"",header:f,main:p}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return b_;default:return E_}}},{key:"getShaderFromIndex",value:function(r,s){return el(r.slice(s[0],s[1]))}}]),t})(Li),Jl=`uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uTimeFrequency;\r
uniform float uStrength;\r
uniform float uWarpPositionFrequency;\r
uniform float uWarpTimeFrequency;\r
uniform float uWarpStrength;\r

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v){
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -  i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,  ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)               ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

vec3 getWobble(vec3 position) {

    vec3 warpedPosition = position;

    warpedPosition += simplexNoise4d(vec4(\r
        position * uWarpPositionFrequency,\r
        uTime * uWarpTimeFrequency\r
    )) * uWarpStrength;

    
    
    
    

    

    vec3 travelingPosition = warpedPosition + vec3(\r
        uTime * 0.1,  
        uTime * 0.08,  
        uTime * 0.06  
    );

    
    
    

    float noiseX = simplexNoise4d(vec4(\r
        travelingPosition * uPositionFrequency,\r
        uTime * uTimeFrequency\r
    ));

    float noiseY = simplexNoise4d(vec4(\r
        travelingPosition * uPositionFrequency + 200.0,\r
        uTime * uTimeFrequency + 200.0\r
    ));

    float noiseZ = simplexNoise4d(vec4(\r
        travelingPosition * uPositionFrequency + 200.0,\r
        uTime * uTimeFrequency + 200.0\r
    ));

    
    vec3 oppositeTravel = warpedPosition - vec3(\r
        uTime * 0.08,\r
        uTime * 0.05,\r
        uTime * 0.07\r
    );

    float flowX = simplexNoise4d(vec4(\r
        oppositeTravel * uPositionFrequency * 0.5,\r
        uTime * uTimeFrequency * 0.8\r
    )) * 0.8;

    float flowY = simplexNoise4d(vec4(\r
        oppositeTravel * uPositionFrequency * 0.5 + 300.0,\r
        uTime * uTimeFrequency * 0.8 + 300.0\r
    )) * 0.8;

    float flowZ = simplexNoise4d(vec4(\r
        oppositeTravel * uPositionFrequency * 0.5 + 400.0,\r
        uTime * uTimeFrequency * 0.8 + 400.0\r
    )) * 0.8;

    
    \r
    float detailX = simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency * 2.0,\r
        uTime * uTimeFrequency * 1.5\r
    )) * 0.3;

    float detailY = simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency * 2.0 + 300.0,\r
        uTime * uTimeFrequency * 1.5 + 300.0\r
    )) * 0.3;

    float detailZ = simplexNoise4d(vec4(\r
        warpedPosition * uPositionFrequency * 2.0 + 400.0,\r
        uTime * uTimeFrequency * 1.5 + 400.0\r
    )) * 0.3;

    

    return vec3(\r
        noiseX + detailX + flowX,\r
        noiseY + detailY + flowY,\r
        noiseZ + detailZ + flowZ\r
    ) * uStrength;

}

void main() {

    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift = 0.01;\r
    vec3 positionA = csm_Position + tangent.xyz * shift;\r
    vec3 positionB = csm_Position + biTangent.xyz * shift;

    
    vec3 wobble3D = getWobble(csm_Position);

    
    csm_Position += wobble3D.x * normal * 1.0;        
    csm_Position += wobble3D.y * tangent.xyz * 1.0;   
    csm_Position += wobble3D.z * biTangent * 1.0;     
    \r
    
    vec3 wobbleA = getWobble(positionA);\r
    positionA += wobbleA.x * normal;\r
    positionA += wobbleA.y * tangent.xyz;\r
    positionA += wobbleA.z * biTangent;\r
    \r
    vec3 wobbleB = getWobble(positionB);\r
    positionB += wobbleB.x * normal;\r
    positionB += wobbleB.y * tangent.xyz;\r
    positionB += wobbleB.z * biTangent;\r
 \r
    
    
    
    
    

    

    vec3 toA = normalize(positionA - csm_Position);\r
    vec3 toB = normalize(positionB - csm_Position);\r
    csm_Normal = cross(toA, toB);

    
    
    vWobble = length(wobble3D) / uStrength;

}`,z_=`varying float vWobble;

void main() {\r
    

    
    float wobbleIntensity = vWobble * 0.3;

    
    float surfaceTension = smoothstep(0.3, 0.7, wobbleIntensity);

    
    vec3 baseTint = vec3(0.85, 0.85, 0.84);   
    vec3 peakTint = vec3(0.90, 0.92, 0.95);   
    vec3 valleyTint = vec3(0.78, 0.78, 0.77); 

    
    vec3 tint = mix(\r
        mix(valleyTint, baseTint, surfaceTension),\r
        peakTint,\r
        wobbleIntensity\r
    );\r
    \r
    
    
    
    
    
    
    \r
    csm_DiffuseColor.rgb *= tint;\r
    \r
    
    csm_Roughness = mix(0.18, 0.05, wobbleIntensity);

    
    csm_Metalness = mix(0.95, 1.0, wobbleIntensity * 0.5);

}`;const Mi=navigator.userAgent.toLowerCase(),H_=/iphone|ipod|android.*mobile/i.test(Mi),Ql=/ipad|android(?!.*mobile)/i.test(Mi),qi=window.innerWidth,k_=qi>991,V_=qi>=768&&qi<=991,G_=qi<768,Dr="ontouchstart"in window||navigator.maxTouchPoints>0,Cs=navigator.hardwareConcurrency||4,ec=Mi.includes("mac")&&Dr&&!Mi.includes("iphone")||Mi.includes("ipad"),W_=Ql&&Mi.includes("android");let Vn="desktop";H_&&!Ql?Vn="mobile":ec||W_?Vn="tablet":G_&&Dr?Vn="mobile":V_&&Dr?Vn="tablet":(k_||!Dr)&&(Vn="desktop");let zn="high";Vn==="desktop"?zn="high":Vn==="tablet"?Cs>=6||ec&&qi>=1024?zn="high":Cs>=4?zn="medium":zn="low":Cs>=6?zn="medium":zn="low";const X_={high:{subdivisions:65,cubeMapSize:128,enableCubeCamera:!0,cubeCameraUpdateInterval:1,enableShadows:!0,pixelRatio:2,antialias:!0},medium:{subdivisions:45,cubeMapSize:64,enableCubeCamera:!0,cubeCameraUpdateInterval:3,enableShadows:!0,pixelRatio:2,antialias:!0},low:{subdivisions:35,cubeMapSize:0,enableCubeCamera:!1,cubeCameraUpdateInterval:0,enableShadows:!1,pixelRatio:1,antialias:!1}},Nt=X_[zn],$i=document.querySelector("canvas.webgl"),Ut=new ku;Ut.background=new Xe("#0a1628");const Ua={uTime:new cn(0),uPositionFrequency:new cn(.233),uTimeFrequency:new cn(.13),uStrength:new cn(.492),uWarpPositionFrequency:new cn(.4),uWarpTimeFrequency:new cn(.3),uWarpStrength:new cn(1.8)},Gn=new $l({baseMaterial:Xu,vertexShader:Jl,fragmentShader:z_,uniforms:Ua,silent:!0,metalness:1,roughness:.4,color:"#68707A",transmission:0,ior:10,thickness:0,transparent:!0,wireframe:!1,clearcoat:0,clearcoatRoughness:0}),tc=new $l({baseMaterial:Bl,vertexShader:Jl,uniforms:Ua,silent:!0,depthPacking:Ml});let Yi=new Pa(2.5,Nt.subdivisions);Yi=$m(Yi);Yi.computeTangents();const Ci=new $t(Yi,Gn);Ci.customDepthMaterial=tc;Ci.receiveShadow=Nt.enableShadows;Ci.castShadow=Nt.enableShadows;Ut.add(Ci);const Ui=new Da("#ffffff",25);Ui.castShadow=Nt.enableShadows;Ui.shadow.mapSize.set(512,512);Ui.shadow.camera.far=15;Ui.shadow.normalBias=.05;Ui.position.set(3,4,-3);Ut.add(Ui);const nc=new Da("#4a7c9e",10);nc.position.set(-4,2,3);Ut.add(nc);const ic=new Da("#8bb8d8",3);ic.position.set(0,-1,-4);Ut.add(ic);const q_=new Zu("#AAAAEE",2.5);Ut.add(q_);const br=$i.parentElement||document.body,It={width:br.clientWidth>0?br.clientWidth:window.innerWidth,height:br.clientHeight>0?br.clientHeight:window.innerHeight,pixelRatio:Math.min(window.devicePixelRatio,Nt.pixelRatio)},Pi=new Ht(35,It.width/It.height,.1,100);Pi.position.set(13,-3,-5);Ut.add(Pi);const Hr=new Bm(Pi,$i);Hr.enableDamping=!0;Hr.enabled=!1;const Ft=new Fm({canvas:$i,antialias:Nt.antialias,alpha:!0,powerPreference:"high-performance",stencil:!1,depth:!0});Ft.shadowMap.enabled=Nt.enableShadows;Ft.shadowMap.type=Nt.enableShadows?al:_c;Ft.toneMapping=ll;Ft.toneMappingExposure=2.5;Ft.outputColorSpace=wt;Ft.setSize(It.width,It.height);Ft.setPixelRatio(It.pixelRatio);let Xn=null,Si=null;Nt.enableCubeCamera?(Si=new Fl(Nt.cubeMapSize,{format:kt,generateMipmaps:!0,minFilter:En,magFilter:jt,colorSpace:wt}),Xn=new Ul(.1,100,Si),Ut.add(Xn),Gn.envMap=Si.texture,Gn.envMapIntensity=1,Gn.needsUpdate=!0):(Gn.envMap=null,Gn.envMapIntensity=0);let rc=!0,sc=!0;const ac=()=>{rc=!document.hidden},Y_=document.querySelector(".webgl-hero"),j_=Y_||$i,ga=new IntersectionObserver(i=>{i.forEach(e=>{sc=e.isIntersecting})},{threshold:.1});ga.observe(j_);const oc=()=>{const i=$i.parentElement||document.body;It.width=i.clientWidth>0?i.clientWidth:window.innerWidth,It.height=i.clientHeight>0?i.clientHeight:window.innerHeight,It.pixelRatio=Math.min(window.devicePixelRatio,Nt.pixelRatio),Pi.aspect=It.width/It.height,Pi.updateProjectionMatrix(),Ft.setSize(It.width,It.height),Ft.setPixelRatio(It.pixelRatio)};window.addEventListener("resize",oc);document.addEventListener("visibilitychange",ac);const Z_=new $u;let rl=0,Gi=null;const va=()=>{if(!rc||!sc){Gi=window.requestAnimationFrame(va);return}const i=Z_.getElapsedTime();Ua.uTime.value=i,Hr.update(),Xn&&(Nt.cubeCameraUpdateInterval===1||rl%Nt.cubeCameraUpdateInterval===0)&&(Ci.visible=!1,Xn.update(Ft,Ut),Ci.visible=!0),rl++,Ft.render(Ut,Pi),Gi=window.requestAnimationFrame(va)};va();const K_=()=>{Gi!==null&&(window.cancelAnimationFrame(Gi),Gi=null),window.removeEventListener("resize",oc),document.removeEventListener("visibilitychange",ac),ga&&ga.disconnect(),Yi.dispose(),Gn.dispose(),tc.dispose(),Xn&&(Ut.remove(Xn),Xn=null),Si&&(Si.dispose(),Si=null),Hr.dispose(),Ut.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(e=>e.dispose()):i.material.dispose())}),Ut.clear(),Ft.dispose(),Ft.forceContextLoss()};window.addEventListener("beforeunload",K_);
