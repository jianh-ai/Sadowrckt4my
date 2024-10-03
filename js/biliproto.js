// 2024-10
(()=>{
    console.time=function(r){
        this._times=this._times||{},this._times[r]=Date.now()
    };
    
    console.timeEnd=function(r){
        if(this._times&&this._times[r]){let e=Date.now()-this._times[r];console.log(`${r}: ${e}ms`),delete this._times[r]}
    
        else console.log(`Timer with label ${r} does not exist.`)
    };

function ir(r){
    "use strict";function e(){}function t(){}

    var i=String.fromCharCode,n={}.toString,s=n.call(r.SharedArrayBuffer),f=n(),o=r.Uint8Array,l=o||Array,a=o?ArrayBuffer:l,c=a.isView||function(v){return v&&"length"in v},g=n.call(a.prototype);a=t.prototype;

    var w=r.TextEncoder,y=new(o?Uint16Array:l)(32);

    e.prototype.decode=function(v){if(!c(v)){var L=n.call(v);if(L!==g&&L!==s&&L!==f)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");v=o?new l(v):v||[]}for(var B=L="",k=0,T=v.length|0,V=T-32|0,E,U,F=0,K=0,C,A=0,W=-1;k<T;){for(E=k<=V?32:T-k|0;A<E;k=k+1|0,A=A+1|0){switch(U=v[k]&255,U>>4){case 15:if(C=v[k=k+1|0]&255,C>>6!==2||247<U){k=k-1|0;break}F=(U&7)<<6|C&63,K=5,U=256;case 14:C=v[k=k+1|0]&255,F<<=6,F|=(U&15)<<6|C&63,K=C>>6===2?K+4|0:24,U=U+256&768;case 13:case 12:C=v[k=k+1|0]&255,F<<=6,F|=(U&31)<<6|C&63,K=K+7|0,k<T&&C>>6===2&&F>>K&&1114112>F?(U=F,F=F-65536|0,0<=F&&(W=(F>>10)+55296|0,U=(F&1023)+56320|0,31>A?(y[A]=W,A=A+1|0,W=-1):(C=W,W=U,U=C))):(U>>=8,k=k-U-1|0,U=65533),F=K=0,E=k<=V?32:T-k|0;default:y[A]=U;continue;case 11:case 10:case 9:case 8:}y[A]=65533}if(B+=i(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15],y[16],y[17],y[18],y[19],y[20],y[21],y[22],y[23],y[24],y[25],y[26],y[27],y[28],y[29],y[30],y[31]),32>A&&(B=B.slice(0,A-32|0)),k<T){if(y[0]=W,A=~W>>>31,W=-1,B.length<L.length)continue}else W!==-1&&(B+=i(W));L+=B,B=""}return L},
    
    a.encode=function(v){v=v===void 0?"":""+v;var L=v.length|0,B=new l((L<<1)+8|0),k,T=0,V=!o;for(k=0;k<L;k=k+1|0,T=T+1|0){var E=v.charCodeAt(k)|0;if(127>=E)B[T]=E;else{if(2047>=E)B[T]=192|E>>6;else{e:{if(55296<=E)if(56319>=E){var U=v.charCodeAt(k=k+1|0)|0;if(56320<=U&&57343>=U){if(E=(E<<10)+U-56613888|0,65535<E){B[T]=240|E>>18,B[T=T+1|0]=128|E>>12&63,B[T=T+1|0]=128|E>>6&63,B[T=T+1|0]=128|E&63;continue}break e}E=65533}else 57343>=E&&(E=65533);!V&&k<<1<T&&k<<1<(T-7|0)&&(V=!0,U=new l(3*L),U.set(B),B=U)}B[T]=224|E>>12,B[T=T+1|0]=128|E>>6&63}B[T=T+1|0]=128|E&63}}return o?B.subarray(0,T):B.slice(0,T)},r.TextDecoder=e,r.TextEncoder=t
}
    
var b=ir(globalThis);

var $=Uint8Array,
    ae=Uint16Array,
    rr=Int32Array,
    li=new $([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0])
    fi=new $([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),
    sr=new $([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),
    ui=function(r,e){for(var t=new ae(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new rr(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return{b:t,r:n}},
    ci=ui(li,2),hi=ci.b,or=ci.r;hi[28]=258,or[258]=28;

var di=ui(fi,0),
    ar=di.b,
    Cr=di.r,
    
    je=new ae(32768);
    
    for(x=0;x<32768;++x)
        J=(x&43690)>>1|(x&21845)<<1,
        J=(J&52428)>>2|(J&13107)<<2,
        J=(J&61680)>>4|(J&3855)<<4,
        je[x]=((J&65280)>>8|(J&255)<<8)>>1;
    
var J,
    
    x,

    he=function(r,e,t){
        for(var i=r.length,n=0,s=new ae(e);n<i;++n)
            r[n]&&++s[r[n]-1];
    
        var f=new ae(e);for(n=1;n<e;++n)f[n]=f[n-1]+s[n-1]<<1;var o;
    
        if(t){
            o=new ae(1<<e);

            var l=15-e;

            for(n=0;n<i;++n)
                if(r[n])
                    for(var a=n<<4|r[n],c=e-r[n],g=f[r[n]-1]++<<c,w=g|(1<<c)-1;g<=w;++g)
                        o[je[g]>>l]=a
        }else for(o=new ae(i),n=0;n<i;++n)
            r[n]&&(o[n]=je[f[r[n]-1]++]>>15-r[n]);
            return o
    },
    
    de=new $(288);for(x=0;x<144;++x) de[x]=8;

var x;for(x=144;x<256;++x)de[x]=9;

var x;for(x=256;x<280;++x)de[x]=7;

var x;for(x=280;x<288;++x)de[x]=8;

var x,pi=new $(32);for(x=0;x<32;++x)pi[x]=5;

var x;var lr=he(de,9,1);

var fr=he(pi,5,1),
    
    _e=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},
    
    z=function(r,e,t){var i=e/8|0;return(r[i]|r[i+1]<<8)>>(e&7)&t},
    $e=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},
    ur=function(r){return(r+7)/8|0},
    cr=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new $(r.subarray(e,t))};
    
var hr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],
    G=function(r,e,t){var i=new Error(e||hr[r]);if(i.code=r,Error.captureStackTrace&&Error.captureStackTrace(i,G),!t)throw i;return i},

    dr=function(r,e,t,i){
        var n=r.length,s=i?i.length:0;
        if(!n||e.f&&!e.l)return t||new $(0);
        var f=!t,o=f||e.i!=2,l=e.i;f&&(t=new $(n*3));
        var a=function(si){
            var oi=t.length;if(si>oi){var ai=new $(Math.max(oi*2,si));ai.set(t),t=ai}
        },
        c=e.f||0,g=e.p||0,w=e.b||0,y=e.l,v=e.d,L=e.m,B=e.n,k=n*8;do{if(!y){c=z(r,g,1);
        
        var T=z(r,g+1,3);
        if(g+=3,T)if(T==1)y=lr,v=fr,L=9,B=5;

        else if(T==2){
            var F=z(r,g,31)+257,K=z(r,g+10,15)+4,C=F+z(r,g+5,31)+1;g+=14;
            for(var A=new $(C),W=new $(19),M=0;M<K;++M)W[sr[M]]=z(r,g+M*3,7);g+=K*3;
            for(var Qn=_e(W),Hi=(1<<Qn)-1,Qi=he(W,Qn,1),M=0;M<C;){
                var ei=Qi[z(r,g,Hi)];g+=ei&15;var V=ei>>4;
                if(V<16)A[M++]=V;else{var se=0,ke=0;for(V==16?(ke=3+z(r,g,3),g+=2,se=A[M-1]):V==17?(ke=3+z(r,g,7),g+=3):V==18&&(ke=11+z(r,g,127),g+=7);ke--;)A[M++]=se}
            }

            var ti=A.subarray(0,F),X=A.subarray(F);L=_e(ti),B=_e(X),y=he(ti,L,1),v=he(X,B,1)
        }
            
        else G(1);else{var V=ur(g)+4,E=r[V-4]|r[V-3]<<8,U=V+E;if(U>n){l&&G(0);break}o&&a(w+E),t.set(r.subarray(V,U),w),e.b=w+=E,e.p=g=U*8,e.f=c;continue}if(g>k){l&&G(0);break}}o&&a(w+131072);for(var er=(1<<L)-1,tr=(1<<B)-1,Ce=g;;Ce=g){var se=y[$e(r,g)&er],oe=se>>4;if(g+=se&15,g>k){l&&G(0);break}if(se||G(2),oe<256)t[w++]=oe;else if(oe==256){Ce=g,y=null;break}else{var ni=oe-254;if(oe>264){var M=oe-257,ce=li[M];ni=z(r,g,(1<<ce)-1)+hi[M],g+=ce}var We=v[$e(r,g)&tr],Pe=We>>4;We||G(3),g+=We&15;var X=ar[Pe];if(Pe>3){var ce=fi[Pe];X+=$e(r,g)&(1<<ce)-1,g+=ce}if(g>k){l&&G(0);break}o&&a(w+131072);var ii=w+ni;if(w<X){var ri=s-X,nr=Math.min(X,ii);for(ri+w<0&&G(3);w<nr;++w)t[w]=i[ri+w]}for(;w<ii;++w)t[w]=t[w-X]}}e.l=y,e.p=Ce,e.b=w,e.f=c,y&&(c=1,e.m=L,e.d=v,e.n=B)}while(!c);return w!=t.length&&f?cr(t,0,w):t.subarray(0,w)
    };

var pr=new $(0);

var mr=function(r){(r[0]!=31||r[1]!=139||r[2]!=8)&&G(6,"invalid gzip data");var e=r[3],t=10;e&4&&(t+=(r[10]|r[11]<<8)+2);for(var i=(e>>3&1)+(e>>4&1);i>0;i-=!r[t++]);return t+(e&2)},

    gr=function(r){var e=r.length;return(r[e-4]|r[e-3]<<8|r[e-2]<<16|r[e-1]<<24)>>>0};

function mi(r,e){var t=mr(r);return t+8>r.length&&G(6,"invalid gzip data"),dr(r.subarray(t,-8),{i:2},e&&e.out||new $(gr(r)),e&&e.dictionary)}var yr=typeof TextDecoder<"u"&&new TextDecoder,wr=0;try{yr.decode(pr,{stream:!0}),wr=1}catch{}

function Q(r){let e=typeof r;if(e=="object"){if(Array.isArray(r))return"array";if(r===null)return"null"}return e}

function le(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}var q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),ve=[];for(let r=0;r<q.length;r++)ve[q[r].charCodeAt(0)]=r;ve["-".charCodeAt(0)]=q.indexOf("+");ve["_".charCodeAt(0)]=q.indexOf("/");

function gi(r){let e=r.length*3/4;r[r.length-2]=="="?e-=2:r[r.length-1]=="="&&(e-=1);let t=new Uint8Array(e),i=0,n=0,s,f=0;for(let o=0;o<r.length;o++){if(s=ve[r.charCodeAt(o)],s===void 0)switch(r[o]){case"=":n=0;case``:case"\r":case" ":case" ":continue;default:throw Error("invalid base64 string.")}switch(n){case 0:f=s,n=1;break;case 1:t[i++]=f<<2|(s&48)>>4,f=s,n=2;break;case 2:t[i++]=(f&15)<<4|(s&60)>>2,f=s,n=3;break;case 3:t[i++]=(f&3)<<6|s,n=0;break}}if(n==1)throw Error("invalid base64 string.");return t.subarray(0,i)}

function yi(r){let e="",t=0,i,n=0;for(let s=0;s<r.length;s++)switch(i=r[s],t){case 0:e+=q[i>>2],n=(i&3)<<4,t=1;break;case 1:e+=q[n|i>>4],n=(i&15)<<2,t=2;break;case 2:e+=q[n|i>>6],e+=q[i&63],t=0;break}return t&&(e+=q[n],e+="=",t==1&&(e+="=")),e}

var h;(function(r){r.symbol=Symbol.for("protobuf-ts/unknown"),r.onRead=(t,i,n,s,f)=>{(e(i)?i[r.symbol]:i[r.symbol]=[]).push({no:n,wireType:s,data:f})},r.onWrite=(t,i,n)=>{for(let{no:s,wireType:f,data:o}of r.list(i))n.tag(s,f).raw(o)},r.list=(t,i)=>{if(e(t)){let n=t[r.symbol];return i?n.filter(s=>s.no==i):n}return[]},r.last=(t,i)=>r.list(t,i).slice(-1)[0];let e=t=>t&&Array.isArray(t[r.symbol])})(h||(h={}));

var u;(function(r){r[r.Varint=0]="Varint",r[r.Bit64=1]="Bit64",r[r.LengthDelimited=2]="LengthDelimited",r[r.StartGroup=3]="StartGroup",r[r.EndGroup=4]="EndGroup",r[r.Bit32=5]="Bit32"})(u||(u={}));

function wi(){let r=0,e=0;for(let i=0;i<28;i+=7){let n=this.buf[this.pos++];if(r|=(n&127)<<i,!(n&128))return this.assertBounds(),[r,e]}let t=this.buf[this.pos++];if(r|=(t&15)<<28,e=(t&112)>>4,!(t&128))return this.assertBounds(),[r,e];for(let i=3;i<=31;i+=7){let n=this.buf[this.pos++];if(e|=(n&127)<<i,!(n&128))return this.assertBounds(),[r,e]}throw new Error("invalid varint")}

function Be(r,e,t){for(let s=0;s<28;s=s+7){let f=r>>>s,o=!(!(f>>>7)&&e==0),l=(o?f|128:f)&255;if(t.push(l),!o)return}let i=r>>>28&15|(e&7)<<4,n=!!(e>>3);if(t.push((n?i|128:i)&255),!!n){for(let s=3;s<31;s=s+7){let f=e>>>s,o=!!(f>>>7),l=(o?f|128:f)&255;if(t.push(l),!o)return}t.push(e>>>31&1)}}var Ne=65536*65536;

function Me(r){let e=r[0]=="-";e&&(r=r.slice(1));let t=1e6,i=0,n=0;
    
function s(f,o){let l=Number(r.slice(f,o));n*=t,i=i*t+l,i>=Ne&&(n=n+(i/Ne|0),i=i%Ne)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),[e,i,n]}

function Te(r,e){if(e>>>0<=2097151)return""+(Ne*e+(r>>>0));let t=r&16777215,i=(r>>>24|e<<8)>>>0&16777215,n=e>>16&65535,s=t+i*6777216+n*6710656,f=i+n*8147497,o=n*2,l=1e7;s>=l&&(f+=Math.floor(s/l),s%=l),f>=l&&(o+=Math.floor(f/l),f%=l);
    
function a(c,g){let w=c?String(c):"";return g?"0000000".slice(w.length)+w:w}return a(o,0)+a(f,o)+a(s,1)}

function ze(r,e){if(r>=0){for(;r>127;)e.push(r&127|128),r=r>>>7;e.push(r)}else{for(let t=0;t<9;t++)e.push(r&127|128),r=r>>7;e.push(1)}}

function bi(){let r=this.buf[this.pos++],e=r&127;if(!(r&128))return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<7,!(r&128))return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<14,!(r&128))return this.assertBounds(),e;if(r=this.buf[this.pos++],e|=(r&127)<<21,!(r&128))return this.assertBounds(),e;r=this.buf[this.pos++],e|=(r&15)<<28;for(let t=5;r&128&&t<10;t++)r=this.buf[this.pos++];if(r&128)throw new Error("invalid varint");return this.assertBounds(),e>>>0}

var O;

function br(){
    let r=new DataView(new ArrayBuffer(8));
    O=globalThis.BigInt!==void 0&&typeof r.getBigInt64=="function"&&typeof r.getBigUint64=="function"&&typeof r.setBigInt64=="function"&&typeof r.setBigUint64=="function"?{
        MIN:BigInt("-9223372036854775808"),
        MAX:BigInt("9223372036854775807"),
        UMIN:BigInt("0"),
        UMAX:BigInt("18446744073709551615"),
        C:BigInt,
        V:r
    }:void 0
}

br();
    
function ki(r){if(!r)throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")}
    
var vi=/^-?[0-9]+$/,Ie=4294967296,xe=2147483648,Ue=class{constructor(e,t){this.lo=e|0,this.hi=t|0}isZero(){return this.lo==0&&this.hi==0}toNumber(){let e=this.hi*Ie+(this.lo>>>0);if(!Number.isSafeInteger(e))throw new Error("cannot convert to safe number");return e}},

R=class extends Ue{static from(e){if(O)switch(typeof e){case"string":if(e=="0")return this.ZERO;if(e=="")throw new Error("string is no integer");e=O.C(e);case"number":if(e===0)return this.ZERO;e=O.C(e);case"bigint":if(!e)return this.ZERO;if(e<O.UMIN)throw new Error("signed value for ulong");if(e>O.UMAX)throw new Error("ulong too large");return O.V.setBigUint64(0,e,!0),new R(O.V.getInt32(0,!0),O.V.getInt32(4,!0))}else switch(typeof e){case"string":if(e=="0")return this.ZERO;if(e=e.trim(),!vi.test(e))throw new Error("string is no integer");let[t,i,n]=Me(e);if(t)throw new Error("signed value for ulong");return new R(i,n);case"number":if(e==0)return this.ZERO;if(!Number.isSafeInteger(e))throw new Error("number is no integer");if(e<0)throw new Error("signed value for ulong");return new R(e,e/Ie)}throw new Error("unknown value "+typeof e)}toString(){return O?this.toBigInt().toString():Te(this.lo,this.hi)}toBigInt(){return ki(O),O.V.setInt32(0,this.lo,!0),O.V.setInt32(4,this.hi,!0),O.V.getBigUint64(0,!0)}};R.ZERO=new R(0,0);
    
var I=class extends Ue{static from(e){if(O)switch(typeof e){case"string":if(e=="0")return this.ZERO;if(e=="")throw new Error("string is no integer");e=O.C(e);case"number":if(e===0)return this.ZERO;e=O.C(e);case"bigint":if(!e)return this.ZERO;if(e<O.MIN)throw new Error("signed long too small");if(e>O.MAX)throw new Error("signed long too large");return O.V.setBigInt64(0,e,!0),new I(O.V.getInt32(0,!0),O.V.getInt32(4,!0))}else switch(typeof e){case"string":if(e=="0")return this.ZERO;if(e=e.trim(),!vi.test(e))throw new Error("string is no integer");let[t,i,n]=Me(e);if(t){if(n>xe||n==xe&&i!=0)throw new Error("signed long too small")}else if(n>=xe)throw new Error("signed long too large");let s=new I(i,n);return t?s.negate():s;case"number":if(e==0)return this.ZERO;if(!Number.isSafeInteger(e))throw new Error("number is no integer");return e>0?new I(e,e/Ie):new I(-e,-e/Ie).negate()}throw new Error("unknown value "+typeof e)}isNegative(){return(this.hi&xe)!==0}negate(){let e=~this.hi,t=this.lo;return t?t=~t+1:e+=1,new I(t,e)}toString(){if(O)return this.toBigInt().toString();if(this.isNegative()){let e=this.negate();return"-"+Te(e.lo,e.hi)}return Te(this.lo,this.hi)}toBigInt(){return ki(O),O.V.setInt32(0,this.lo,!0),O.V.setInt32(4,this.hi,!0),O.V.getBigInt64(0,!0)}};I.ZERO=new I(0,0);var Ni={readUnknownField:!0,readerFactory:r=>new Ge(r)};

function Bi(r){return r?Object.assign(Object.assign({},Ni),r):Ni}
    
var Ge=class{

    constructor(e,t){
        this.varint64=wi,this.uint32=bi,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength),this.textDecoder=t??new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})
    }

    tag(){
        let e=this.uint32(),t=e>>>3,i=e&7;if(t<=0||i<0||i>5)throw new Error("illegal tag: field no "+t+" wire type "+i);return[t,i]
    }

    skip(e){
        let t=this.pos;switch(e){
                case u.Varint:for(;this.buf[this.pos++]&128;);break;
                case u.Bit64:this.pos+=4;case u.Bit32:this.pos+=4;break;
                case u.LengthDelimited:let i=this.uint32();this.pos+=i;break;
                case u.StartGroup:let n;for(;(n=this.tag()[1])!==u.EndGroup;)this.skip(n);break;
                default:throw new Error("cant skip wire type "+e)
            }

        return this.assertBounds(),this.buf.subarray(t,this.pos)
    }
        
    assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}
    int32(){return this.uint32()|0}
    sint32(){let e=this.uint32();return e>>>1^-(e&1)}
    int64(){return new I(...this.varint64())}uint64(){return new R(...this.varint64())}
    sint64(){let[e,t]=this.varint64(),i=-(e&1);return e=(e>>>1|(t&1)<<31)^i,t=t>>>1^i,new I(e,t)}bool(){let[e,t]=this.varint64();return e!==0||t!==0}
    fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}
    sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}
    fixed64(){return new R(this.sfixed32(),this.sfixed32())}
    sfixed64(){return new I(this.sfixed32(),this.sfixed32())}
    float(){return this.view.getFloat32((this.pos+=4)-4,!0)}
    double(){return this.view.getFloat64((this.pos+=8)-8,!0)}
    bytes(){let e=this.uint32(),t=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(t,t+e)}
    string(){return this.textDecoder.decode(this.bytes())}
};
    
function N(r,e){if(!r)throw new Error(e)}

var kr=34028234663852886e22,vr=-34028234663852886e22,Nr=4294967295,Br=2147483647,Tr=-2147483648;

function Z(r){if(typeof r!="number")throw new Error("invalid int 32: "+typeof r);if(!Number.isInteger(r)||r>Br||r<Tr)throw new Error("invalid int 32: "+r)}

function ee(r){if(typeof r!="number")throw new Error("invalid uint 32: "+typeof r);if(!Number.isInteger(r)||r>Nr||r<0)throw new Error("invalid uint 32: "+r)}

function fe(r){if(typeof r!="number")throw new Error("invalid float 32: "+typeof r);if(Number.isFinite(r)&&(r>kr||r<vr))throw new Error("invalid float 32: "+r)}

var Ti={writeUnknownFields:!0,writerFactory:()=>new Ke};

function xi(r){return r?Object.assign(Object.assign({},Ti),r):Ti}

var Ke=class{constructor(e){this.stack=[],this.textEncoder=e??new TextEncoder,this.chunks=[],this.buf=[]}finish(){this.chunks.push(new Uint8Array(this.buf));let e=0;for(let n=0;n<this.chunks.length;n++)e+=this.chunks[n].length;let t=new Uint8Array(e),i=0;for(let n=0;n<this.chunks.length;n++)t.set(this.chunks[n],i),i+=this.chunks[n].length;return this.chunks=[],t}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),t=this.stack.pop();if(!t)throw new Error("invalid state, fork stack empty");return this.chunks=t.chunks,this.buf=t.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,t){return this.uint32((e<<3|t)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(ee(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return Z(e),ze(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let t=this.textEncoder.encode(e);return this.uint32(t.byteLength),this.raw(t)}float(e){fe(e);let t=new Uint8Array(4);return new DataView(t.buffer).setFloat32(0,e,!0),this.raw(t)}double(e){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e,!0),this.raw(t)}fixed32(e){ee(e);let t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e,!0),this.raw(t)}sfixed32(e){Z(e);let t=new Uint8Array(4);return new DataView(t.buffer).setInt32(0,e,!0),this.raw(t)}sint32(e){return Z(e),e=(e<<1^e>>31)>>>0,ze(e,this.buf),this}sfixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),n=I.from(e);return i.setInt32(0,n.lo,!0),i.setInt32(4,n.hi,!0),this.raw(t)}fixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),n=R.from(e);return i.setInt32(0,n.lo,!0),i.setInt32(4,n.hi,!0),this.raw(t)}int64(e){let t=I.from(e);return Be(t.lo,t.hi,this.buf),this}sint64(e){let t=I.from(e),i=t.hi>>31,n=t.lo<<1^i,s=(t.hi<<1|t.lo>>>31)^i;return Be(n,s,this.buf),this}uint64(e){let t=R.from(e);return Be(t.lo,t.hi,this.buf),this}};

var Ii={emitDefaultValues:!1,enumAsInteger:!1,useProtoFieldName:!1,prettySpaces:0},Ui={ignoreUnknownFields:!1};

function Je(r){return r?Object.assign(Object.assign({},Ui),r):Ui}

function pe(r){return r?Object.assign(Object.assign({},Ii),r):Ii}

var Ee=Symbol.for("protobuf-ts/message-type");

function qe(r){let e=!1,t=[];for(let i=0;i<r.length;i++){let n=r.charAt(i);n=="_"?e=!0:/\d/.test(n)?(t.push(n),e=!0):e?(t.push(n.toUpperCase()),e=!1):i==0?t.push(n.toLowerCase()):t.push(n)}return t.join("")}

var d;(function(r){r[r.DOUBLE=1]="DOUBLE",r[r.FLOAT=2]="FLOAT",r[r.INT64=3]="INT64",r[r.UINT64=4]="UINT64",r[r.INT32=5]="INT32",r[r.FIXED64=6]="FIXED64",r[r.FIXED32=7]="FIXED32",r[r.BOOL=8]="BOOL",r[r.STRING=9]="STRING",r[r.BYTES=12]="BYTES",r[r.UINT32=13]="UINT32",r[r.SFIXED32=15]="SFIXED32",r[r.SFIXED64=16]="SFIXED64",r[r.SINT32=17]="SINT32",r[r.SINT64=18]="SINT64"})(d||(d={}));

var S;(function(r){r[r.BIGINT=0]="BIGINT",r[r.STRING=1]="STRING",r[r.NUMBER=2]="NUMBER"})(S||(S={}));

var me;(function(r){r[r.NO=0]="NO",r[r.PACKED=1]="PACKED",r[r.UNPACKED=2]="UNPACKED"})(me||(me={}));

function Ei(r){var e,t,i,n;return r.localName=(e=r.localName)!==null&&e!==void 0?e:qe(r.name),r.jsonName=(t=r.jsonName)!==null&&t!==void 0?t:qe(r.name),r.repeat=(i=r.repeat)!==null&&i!==void 0?i:me.NO,r.opt=(n=r.opt)!==null&&n!==void 0?n:r.repeat||r.oneof?!1:r.kind=="message",r}

function Oi(r){
    if(typeof r!="object"||r===null||!r.hasOwnProperty("oneofKind"))return!1;
    switch(typeof r.oneofKind){case"string":return r[r.oneofKind]===void 0?!1:Object.keys(r).length==2;case"undefined":return Object.keys(r).length==1;default:return!1}
}
        
var Oe=class{constructor(e){var t;this.fields=(t=e.fields)!==null&&t!==void 0?t:[]}prepare(){if(this.data)return;let e=[],t=[],i=[];for(let n of this.fields)if(n.oneof)i.includes(n.oneof)||(i.push(n.oneof),e.push(n.oneof),t.push(n.oneof));else switch(t.push(n.localName),n.kind){case"scalar":case"enum":(!n.opt||n.repeat)&&e.push(n.localName);break;case"message":n.repeat&&e.push(n.localName);break;case"map":e.push(n.localName);break}this.data={req:e,known:t,oneofs:Object.values(i)}}is(e,t,i=!1){if(t<0)return!0;if(e==null||typeof e!="object")return!1;this.prepare();let n=Object.keys(e),s=this.data;if(n.length<s.req.length||s.req.some(f=>!n.includes(f))||!i&&n.some(f=>!s.known.includes(f)))return!1;if(t<1)return!0;for(let f of s.oneofs){let o=e[f];if(!Oi(o))return!1;if(o.oneofKind===void 0)continue;let l=this.fields.find(a=>a.localName===o.oneofKind);if(!l||!this.field(o[o.oneofKind],l,i,t))return!1}for(let f of this.fields)if(f.oneof===void 0&&!this.field(e[f.localName],f,i,t))return!1;return!0}field(e,t,i,n){let s=t.repeat;switch(t.kind){case"scalar":return e===void 0?t.opt:s?this.scalars(e,t.T,n,t.L):this.scalar(e,t.T,t.L);case"enum":return e===void 0?t.opt:s?this.scalars(e,d.INT32,n):this.scalar(e,d.INT32);case"message":return e===void 0?!0:s?this.messages(e,t.T(),i,n):this.message(e,t.T(),i,n);case"map":if(typeof e!="object"||e===null)return!1;if(n<2)return!0;if(!this.mapKeys(e,t.K,n))return!1;switch(t.V.kind){case"scalar":return this.scalars(Object.values(e),t.V.T,n,t.V.L);case"enum":return this.scalars(Object.values(e),d.INT32,n);case"message":return this.messages(Object.values(e),t.V.T(),i,n)}break}return!0}message(e,t,i,n){return i?t.isAssignable(e,n):t.is(e,n)}messages(e,t,i,n){if(!Array.isArray(e))return!1;if(n<2)return!0;if(i){for(let s=0;s<e.length&&s<n;s++)if(!t.isAssignable(e[s],n-1))return!1}else for(let s=0;s<e.length&&s<n;s++)if(!t.is(e[s],n-1))return!1;return!0}scalar(e,t,i){let n=typeof e;switch(t){case d.UINT64:case d.FIXED64:case d.INT64:case d.SFIXED64:case d.SINT64:switch(i){case S.BIGINT:return n=="bigint";case S.NUMBER:return n=="number"&&!isNaN(e);default:return n=="string"}case d.BOOL:return n=="boolean";case d.STRING:return n=="string";case d.BYTES:return e instanceof Uint8Array;case d.DOUBLE:case d.FLOAT:return n=="number"&&!isNaN(e);default:return n=="number"&&Number.isInteger(e)}}scalars(e,t,i,n){if(!Array.isArray(e))return!1;if(i<2)return!0;if(Array.isArray(e)){for(let s=0;s<e.length&&s<i;s++)if(!this.scalar(e[s],t,n))return!1}return!0}mapKeys(e,t,i){let n=Object.keys(e);switch(t){case d.INT32:case d.FIXED32:case d.SFIXED32:case d.SINT32:case d.UINT32:return this.scalars(n.slice(0,i).map(s=>parseInt(s)),t,i);case d.BOOL:return this.scalars(n.slice(0,i).map(s=>s=="true"?!0:s=="false"?!1:s),t,i);default:return this.scalars(n,t,i,S.STRING)}}};

function P(r,e){switch(e){case S.BIGINT:return r.toBigInt();case S.NUMBER:return r.toNumber();default:return r.toString()}}

var Re=class{
    constructor(e){
        this.info=e
    }prepare(){
        var e;
        if(this.fMap===void 0){
            this.fMap={};
            let t=(e=this.info.fields)!==null&&e!==void 0?e:[];
            for(let i of t)
                this.fMap[i.name]=i,
                this.fMap[i.jsonName]=i,
                this.fMap[i.localName]=i
        }
    }assert(e,t,i){
        if(!e){
            let n=Q(i);
            throw(n=="number"||n=="boolean")&&(n=i.toString()),new Error(`Cannot parse JSON ${n} for ${this.info.typeName}#${t}`)
        }
    }read(e,t,i){
        this.prepare();
        let n=[];
        for(let[s,f]of Object.entries(e)){
            let o=this.fMap[s];
            if(!o){
                if(!i.ignoreUnknownFields)throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);continue
            }let l=o.localName,a;if(o.oneof){
                if(f===null&&(o.kind!=="enum"||o.T()[0]!=="google.protobuf.NullValue"))continue;
                if(n.includes(o.oneof))throw new Error(`Multiple members of the oneof group "${o.oneof}" of ${this.info.typeName} are present in JSON.`);
                n.push(o.oneof),
                a=t[o.oneof]={oneofKind:l}
            }else a=t;
            if(o.kind=="map"){
                if(f===null)continue;this.assert(le(f),o.name,f);
                    let c=a[l];
                for(let[g,w]of Object.entries(f)){
                    this.assert(w!==null,o.name+" map value",null);
                    let y;
                    switch(o.V.kind){case"message":y=o.V.T().internalJsonRead(w,i);break;
                    case"enum":if(y=this.enum(o.V.T(),w,o.name,i.ignoreUnknownFields),y===!1)continue;break;
                    case"scalar":y=this.scalar(w,o.V.T,o.V.L,o.name);break}this.assert(y!==void 0,o.name+" map value",w);
                    let v=g;
                    o.K==d.BOOL&&(v=v=="true"?!0:v=="false"?!1:v),v=this.scalar(v,o.K,S.STRING,o.name).toString(),c[v]=y
                }
            }else if(o.repeat){
                if(f===null)continue;
                this.assert(Array.isArray(f),o.name,f);
                let c=a[l];
                for(let g of f){
                    this.assert(g!==null,o.name,null);
                    let w;switch(o.kind){
                        case"message":w=o.T().internalJsonRead(g,i);break;
                        case"enum":if(w=this.enum(o.T(),g,o.name,i.ignoreUnknownFields),w===!1)continue;break;
                        case"scalar":w=this.scalar(g,o.T,o.L,o.name);break}this.assert(w!==void 0,o.name,f),c.push(w)
                    }
            }else switch(o.kind){
                case"message":if(f===null&&o.T().typeName!="google.protobuf.Value"){
                    this.assert(o.oneof===void 0,o.name+" (oneof member)",null);continue
                }
                a[l]=o.T().internalJsonRead(f,i,a[l]);break;
                case"enum":let c=this.enum(o.T(),f,o.name,i.ignoreUnknownFields);if(c===!1)continue;a[l]=c;break;
                case"scalar":a[l]=this.scalar(f,o.T,o.L,o.name);break
            }
        }
    }enum(e,t,i,n){
        if(e[0]=="google.protobuf.NullValue"&&N(t===null||t==="NULL_VALUE",`Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} only accepts null.`),t===null)return 0;
        switch(typeof t){
            case"number":return N(Number.isInteger(t),`Unable to parse field ${this.info.typeName}#${i}, enum can only be integral number, got ${t}.`),t;
            case"string":let s=t;e[2]&&t.substring(0,e[2].length)===e[2]&&(s=t.substring(e[2].length));let f=e[1][s];return typeof f>"u"&&n?!1:(N(typeof f=="number",`Unable to parse field ${this.info.typeName}#${i}, enum ${e[0]} has no value for "${t}".`),f)}N(!1,`Unable to parse field ${this.info.typeName}#${i}, cannot parse enum value from ${typeof t}".`)
    }scalar(e,t,i,n){
        let s;try{switch(t){
            case d.DOUBLE:
            case d.FLOAT:
                    if(e===null)return 0;
                    if(e==="NaN")return Number.NaN;
                    if(e==="Infinity")return Number.POSITIVE_INFINITY;
                    if(e==="-Infinity")return Number.NEGATIVE_INFINITY;if(e===""){s="empty string";break}
                    if(typeof e=="string"&&e.trim().length!==e.length){s="extra whitespace";break}
                    if(typeof e!="string"&&typeof e!="number")break;let f=Number(e);
                    if(Number.isNaN(f)){s="not a number";break}
                    if(!Number.isFinite(f)){s="too large or small";break}
                    return t==d.FLOAT&&fe(f),f;
                
            case d.INT32:
            case d.FIXED32:
            case d.SFIXED32:
            case d.SINT32:
            case d.UINT32:if(e===null)return 0;let o;if(typeof e=="number"?o=e:e===""?s="empty string":typeof e=="string"&&(e.trim().length!==e.length?s="extra whitespace":o=Number(e)),o===void 0)break;return t==d.UINT32?ee(o):Z(o),o;
            case d.INT64:
            case d.SFIXED64:
            case d.SINT64:if(e===null)return P(I.ZERO,i);if(typeof e!="number"&&typeof e!="string")break;return P(I.from(e),i);
            case d.FIXED64:
            case d.UINT64:if(e===null)return P(R.ZERO,i);if(typeof e!="number"&&typeof e!="string")break;return P(R.from(e),i);
            case d.BOOL:if(e===null)return!1;if(typeof e!="boolean")break;return e;
            case d.STRING:if(e===null)return"";if(typeof e!="string"){s="extra whitespace";break}try{encodeURIComponent(e)}catch(l){l="invalid UTF8";break}return e;
            case d.BYTES:if(e===null||e==="")return new Uint8Array(0);if(typeof e!="string")break;return gi(e)}}catch(f){s=f.message}this.assert(!1,n+(s?" - "+s:""),e)
    }
};

var Le=class{constructor(e){var t;this.fields=(t=e.fields)!==null&&t!==void 0?t:[]}write(e,t){let i={},n=e;for(let s of this.fields){if(!s.oneof){let a=this.field(s,n[s.localName],t);a!==void 0&&(i[t.useProtoFieldName?s.name:s.jsonName]=a);continue}let f=n[s.oneof];if(f.oneofKind!==s.localName)continue;let o=s.kind=="scalar"||s.kind=="enum"?Object.assign(Object.assign({},t),{emitDefaultValues:!0}):t,l=this.field(s,f[s.localName],o);N(l!==void 0),i[t.useProtoFieldName?s.name:s.jsonName]=l}return i}field(e,t,i){let n;if(e.kind=="map"){N(typeof t=="object"&&t!==null);let s={};switch(e.V.kind){case"scalar":for(let[l,a]of Object.entries(t)){let c=this.scalar(e.V.T,a,e.name,!1,!0);N(c!==void 0),s[l.toString()]=c}break;
    case"message":let f=e.V.T();for(let[l,a]of Object.entries(t)){let c=this.message(f,a,e.name,i);N(c!==void 0),s[l.toString()]=c}break;
    case"enum":let o=e.V.T();for(let[l,a]of Object.entries(t)){N(a===void 0||typeof a=="number");let c=this.enum(o,a,e.name,!1,!0,i.enumAsInteger);N(c!==void 0),s[l.toString()]=c}break}(i.emitDefaultValues||Object.keys(s).length>0)&&(n=s)}else if(e.repeat){N(Array.isArray(t));let s=[];switch(e.kind){case"scalar":for(let l=0;l<t.length;l++){let a=this.scalar(e.T,t[l],e.name,e.opt,!0);N(a!==void 0),s.push(a)}break;case"enum":let f=e.T();for(let l=0;l<t.length;l++){N(t[l]===void 0||typeof t[l]=="number");let a=this.enum(f,t[l],e.name,e.opt,!0,i.enumAsInteger);N(a!==void 0),s.push(a)}break;case"message":let o=e.T();for(let l=0;l<t.length;l++){let a=this.message(o,t[l],e.name,i);N(a!==void 0),s.push(a)}break}(i.emitDefaultValues||s.length>0||i.emitDefaultValues)&&(n=s)}else switch(e.kind){case"scalar":n=this.scalar(e.T,t,e.name,e.opt,i.emitDefaultValues);break;case"enum":n=this.enum(e.T(),t,e.name,e.opt,i.emitDefaultValues,i.enumAsInteger);break;case"message":n=this.message(e.T(),t,e.name,i);break}return n}enum(e,t,i,n,s,f){if(e[0]=="google.protobuf.NullValue")return!s&&!n?void 0:null;if(t===void 0){N(n);return}if(!(t===0&&!s&&!n))return N(typeof t=="number"),N(Number.isInteger(t)),f||!e[1].hasOwnProperty(t)?t:e[2]?e[2]+e[1][t]:e[1][t]}message(e,t,i,n){return t===void 0?n.emitDefaultValues?null:void 0:e.internalJsonWrite(t,n)}scalar(e,t,i,n,s){if(t===void 0){N(n);return}let f=s||n;switch(e){case d.INT32:case d.SFIXED32:case d.SINT32:return t===0?f?0:void 0:(Z(t),t);case d.FIXED32:case d.UINT32:return t===0?f?0:void 0:(ee(t),t);case d.FLOAT:fe(t);case d.DOUBLE:return t===0?f?0:void 0:(N(typeof t=="number"),Number.isNaN(t)?"NaN":t===Number.POSITIVE_INFINITY?"Infinity":t===Number.NEGATIVE_INFINITY?"-Infinity":t);case d.STRING:return t===""?f?"":void 0:(N(typeof t=="string"),t);case d.BOOL:return t===!1?f?!1:void 0:(N(typeof t=="boolean"),t);case d.UINT64:case d.FIXED64:N(typeof t=="number"||typeof t=="string"||typeof t=="bigint");let o=R.from(t);return o.isZero()&&!f?void 0:o.toString();case d.INT64:case d.SFIXED64:case d.SINT64:N(typeof t=="number"||typeof t=="string"||typeof t=="bigint");let l=I.from(t);return l.isZero()&&!f?void 0:l.toString();case d.BYTES:return N(t instanceof Uint8Array),t.byteLength?yi(t):f?"":void 0}}};

function ge(r,e=S.STRING){switch(r){case d.BOOL:return!1;case d.UINT64:case d.FIXED64:return P(R.ZERO,e);case d.INT64:case d.SFIXED64:case d.SINT64:return P(I.ZERO,e);case d.DOUBLE:case d.FLOAT:return 0;case d.BYTES:return new Uint8Array(0);case d.STRING:return"";default:return 0}}

var Fe=class{constructor(e){this.info=e}prepare(){var e;if(!this.fieldNoToField){let t=(e=this.info.fields)!==null&&e!==void 0?e:[];this.fieldNoToField=new Map(t.map(i=>[i.no,i]))}}read(e,t,i,n){this.prepare();let s=n===void 0?e.len:e.pos+n;for(;e.pos<s;){let[f,o]=e.tag(),l=this.fieldNoToField.get(f);if(!l){let w=i.readUnknownField;if(w=="throw")throw new Error(`Unknown field ${f} (wire type ${o}) for ${this.info.typeName}`);let y=e.skip(o);w!==!1&&(w===!0?h.onRead:w)(this.info.typeName,t,f,o,y);continue}let a=t,c=l.repeat,g=l.localName;switch(l.oneof&&(a=a[l.oneof],a.oneofKind!==g&&(a=t[l.oneof]={oneofKind:g})),l.kind){case"scalar":case"enum":let w=l.kind=="enum"?d.INT32:l.T,y=l.kind=="scalar"?l.L:void 0;if(c){let B=a[g];if(o==u.LengthDelimited&&w!=d.STRING&&w!=d.BYTES){let k=e.uint32()+e.pos;for(;e.pos<k;)B.push(this.scalar(e,w,y))}else B.push(this.scalar(e,w,y))}else a[g]=this.scalar(e,w,y);break;case"message":if(c){let B=a[g],k=l.T().internalBinaryRead(e,e.uint32(),i);B.push(k)}else a[g]=l.T().internalBinaryRead(e,e.uint32(),i,a[g]);break;case"map":let[v,L]=this.mapEntry(l,e,i);a[g][v]=L;break}}}mapEntry(e,t,i){let n=t.uint32(),s=t.pos+n,f,o;for(;t.pos<s;){let[l,a]=t.tag();switch(l){case 1:e.K==d.BOOL?f=t.bool().toString():f=this.scalar(t,e.K,S.STRING);break;case 2:switch(e.V.kind){case"scalar":o=this.scalar(t,e.V.T,e.V.L);break;case"enum":o=t.int32();break;case"message":o=e.V.T().internalBinaryRead(t,t.uint32(),i);break}break;default:throw new Error(`Unknown field ${l} (wire type ${a}) in map entry for ${this.info.typeName}#${e.name}`)}}if(f===void 0){let l=ge(e.K);f=e.K==d.BOOL?l.toString():l}if(o===void 0)switch(e.V.kind){case"scalar":o=ge(e.V.T,e.V.L);break;case"enum":o=0;break;case"message":o=e.V.T().create();break}return[f,o]}scalar(e,t,i){switch(t){case d.INT32:return e.int32();case d.STRING:return e.string();case d.BOOL:return e.bool();case d.DOUBLE:return e.double();case d.FLOAT:return e.float();case d.INT64:return P(e.int64(),i);case d.UINT64:return P(e.uint64(),i);case d.FIXED64:return P(e.fixed64(),i);case d.FIXED32:return e.fixed32();case d.BYTES:return e.bytes();case d.UINT32:return e.uint32();case d.SFIXED32:return e.sfixed32();case d.SFIXED64:return P(e.sfixed64(),i);case d.SINT32:return e.sint32();case d.SINT64:return P(e.sint64(),i)}}};

var Ae=class{constructor(e){this.info=e}prepare(){if(!this.fields){let e=this.info.fields?this.info.fields.concat():[];this.fields=e.sort((t,i)=>t.no-i.no)}}write(e,t,i){this.prepare();for(let s of this.fields){let f,o,l=s.repeat,a=s.localName;if(s.oneof){let c=e[s.oneof];if(c.oneofKind!==a)continue;f=c[a],o=!0}else f=e[a],o=!1;switch(s.kind){case"scalar":case"enum":let c=s.kind=="enum"?d.INT32:s.T;if(l)if(N(Array.isArray(f)),l==me.PACKED)this.packed(t,c,s.no,f);else for(let g of f)this.scalar(t,c,s.no,g,!0);else f===void 0?N(s.opt):this.scalar(t,c,s.no,f,o||s.opt);break;case"message":if(l){N(Array.isArray(f));for(let g of f)this.message(t,i,s.T(),s.no,g)}else this.message(t,i,s.T(),s.no,f);break;case"map":N(typeof f=="object"&&f!==null);for(let[g,w]of Object.entries(f))this.mapEntry(t,i,s,g,w);break}}let n=i.writeUnknownFields;n!==!1&&(n===!0?h.onWrite:n)(this.info.typeName,e,t)}mapEntry(e,t,i,n,s){e.tag(i.no,u.LengthDelimited),e.fork();let f=n;switch(i.K){case d.INT32:case d.FIXED32:case d.UINT32:case d.SFIXED32:case d.SINT32:f=Number.parseInt(n);break;case d.BOOL:N(n=="true"||n=="false"),f=n=="true";break}switch(this.scalar(e,i.K,1,f,!0),i.V.kind){case"scalar":this.scalar(e,i.V.T,2,s,!0);break;case"enum":this.scalar(e,d.INT32,2,s,!0);break;case"message":this.message(e,t,i.V.T(),2,s);break}e.join()}message(e,t,i,n,s){s!==void 0&&(i.internalBinaryWrite(s,e.tag(n,u.LengthDelimited).fork(),t),e.join())}scalar(e,t,i,n,s){let[f,o,l]=this.scalarInfo(t,n);(!l||s)&&(e.tag(i,f),e[o](n))}packed(e,t,i,n){if(!n.length)return;N(t!==d.BYTES&&t!==d.STRING),e.tag(i,u.LengthDelimited),e.fork();let[,s]=this.scalarInfo(t);for(let f=0;f<n.length;f++)e[s](n[f]);e.join()}scalarInfo(e,t){let i=u.Varint,n,s=t===void 0,f=t===0;switch(e){case d.INT32:n="int32";break;case d.STRING:f=s||!t.length,i=u.LengthDelimited,n="string";break;case d.BOOL:f=t===!1,n="bool";break;case d.UINT32:n="uint32";break;case d.DOUBLE:i=u.Bit64,n="double";break;case d.FLOAT:i=u.Bit32,n="float";break;case d.INT64:f=s||I.from(t).isZero(),n="int64";break;case d.UINT64:f=s||R.from(t).isZero(),n="uint64";break;case d.FIXED64:f=s||R.from(t).isZero(),i=u.Bit64,n="fixed64";break;case d.BYTES:f=s||!t.byteLength,i=u.LengthDelimited,n="bytes";break;case d.FIXED32:i=u.Bit32,n="fixed32";break;case d.SFIXED32:i=u.Bit32,n="sfixed32";break;case d.SFIXED64:f=s||I.from(t).isZero(),i=u.Bit64,n="sfixed64";break;case d.SINT32:n="sint32";break;case d.SINT64:f=s||I.from(t).isZero(),n="sint64";break}return[i,n,s||f]}};

function Ri(r){let e=r.messagePrototype?Object.create(r.messagePrototype):Object.defineProperty({},Ee,{value:r});for(let t of r.fields){let i=t.localName;if(!t.opt)if(t.oneof)e[t.oneof]={oneofKind:void 0};else if(t.repeat)e[i]=[];else switch(t.kind){case"scalar":e[i]=ge(t.T,t.L);break;case"enum":e[i]=0;break;case"map":e[i]={};break}}return e}

function p(r,e,t){let i,n=t,s;for(let f of r.fields){let o=f.localName;if(f.oneof){let l=n[f.oneof];if(l?.oneofKind==null)continue;if(i=l[o],s=e[f.oneof],s.oneofKind=l.oneofKind,i==null){delete s[o];continue}}else if(i=n[o],s=e,i==null)continue;switch(f.repeat&&(s[o].length=i.length),f.kind){case"scalar":case"enum":if(f.repeat)for(let a=0;a<i.length;a++)s[o][a]=i[a];else s[o]=i;break;case"message":let l=f.T();if(f.repeat)for(let a=0;a<i.length;a++)s[o][a]=l.create(i[a]);else s[o]===void 0?s[o]=l.create(i):l.mergePartial(s[o],i);break;case"map":switch(f.V.kind){case"scalar":case"enum":Object.assign(s[o],i);break;case"message":let a=f.V.T();for(let c of Object.keys(i))s[o][c]=a.create(i[c]);break}break}}}

function Ai(r,e,t){if(e===t)return!0;if(!e||!t)return!1;for(let i of r.fields){let n=i.localName,s=i.oneof?e[i.oneof][n]:e[n],f=i.oneof?t[i.oneof][n]:t[n];switch(i.kind){case"enum":case"scalar":let o=i.kind=="enum"?d.INT32:i.T;if(!(i.repeat?Li(o,s,f):Di(o,s,f)))return!1;break;case"map":if(!(i.V.kind=="message"?Fi(i.V.T(),De(s),De(f)):Li(i.V.kind=="enum"?d.INT32:i.V.T,De(s),De(f))))return!1;break;case"message":let l=i.T();if(!(i.repeat?Fi(l,s,f):l.equals(s,f)))return!1;break}}return!0}

var De=Object.values;

function Di(r,e,t){if(e===t)return!0;if(r!==d.BYTES)return!1;let i=e,n=t;if(i.length!==n.length)return!1;for(let s=0;s<i.length;s++)if(i[s]!=n[s])return!1;return!0}

function Li(r,e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!Di(r,e[i],t[i]))return!1;return!0}

function Fi(r,e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!r.equals(e[i],t[i]))return!1;return!0}

var xr=Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})),
    m=class{
        constructor(e,t,i){
            this.defaultCheckDepth=16,
            this.typeName=e,
            this.fields=t.map(Ei),
            this.options=i??{},
            this.messagePrototype=Object.create(null,Object.assign(Object.assign({},xr),{[Ee]:{value:this}})),
            this.refTypeCheck=new Oe(this),
            this.refJsonReader=new Re(this),
            this.refJsonWriter=new Le(this),
            this.refBinReader=new Fe(this),
            this.refBinWriter=new Ae(this)
        }create(e){
            let t=Ri(this);
            return e!==void 0&&p(this,t,e),t
        }clone(e){
            let t=this.create();
            return p(this,t,e),t
        }equals(e,t){
            return Ai(this,e,t)
        }is(e,t=this.defaultCheckDepth){
            return this.refTypeCheck.is(e,t,!1)
        }isAssignable(e,t=this.defaultCheckDepth){
            return this.refTypeCheck.is(e,t,!0)
        }mergePartial(e,t){
            p(this,e,t)
        }fromBinary(e,t){
            let i=Bi(t);return this.internalBinaryRead(i.readerFactory(e),e.byteLength,i)
        }fromJson(e,t){
            return this.internalJsonRead(e,Je(t))
        }fromJsonString(e,t){
            let i=JSON.parse(e);return this.fromJson(i,t)
        }toJson(e,t){
            return this.internalJsonWrite(e,pe(t))
        }toJsonString(e,t){
            var i;let n=this.toJson(e,t);return JSON.stringify(n,null,(i=t?.prettySpaces)!==null&&i!==void 0?i:0)
        }toBinary(e,t){
            let i=xi(t);return this.internalBinaryWrite(e,i.writerFactory(),i).finish()
        }internalJsonRead(e,t,i){
            if(e!==null&&typeof e=="object"&&!Array.isArray(e)){
                let n=i??this.create();return this.refJsonReader.read(e,n,t),n
            }throw new Error(`Unable to parse message ${this.typeName} from JSON ${Q(e)}.`)
        }internalJsonWrite(e,t){
            return this.refJsonWriter.write(e,t)
        }internalBinaryWrite(e,t,i){
            return this.refBinWriter.write(e,t,i),t
        }internalBinaryRead(e,t,i,n){
            let s=n??this.create();return this.refBinReader.read(e,s,i,t),s
        }
    };

var Ze=class extends m{
    constructor(){
        super("CommandDm",[
            {no:1,name:"id",kind:"scalar",T:3,L:0},
            {no:2,name:"oid",kind:"scalar",T:3,L:0},
            {no:3,name:"mid",kind:"scalar",T:3,L:0},
            {no:4,name:"command",kind:"scalar",T:9},
            {no:5,name:"content",kind:"scalar",T:9},
            {no:6,name:"progress",kind:"scalar",T:5},
            {no:7,name:"ctime",kind:"scalar",T:9},
            {no:8,name:"mtime",kind:"scalar",T:9},
            {no:9,name:"extra",kind:"scalar",T:9},
            {no:10,name:"idStr",kind:"scalar",T:9}])
    }create(e){
            let t=globalThis.Object.create(this.messagePrototype);
            return t.id=0n,t.oid=0n,t.mid=0n,t.command="",t.content="",t.progress=0,t.ctime="",t.mtime="",t.extra="",t.idStr="",e!==void 0&&p(this,t,e),t
    }internalBinaryRead(e,t,i,n){
            let s=n??this.create(),f=e.pos+t;
            for(;e.pos<f;){
                let[o,l]=e.tag();
                switch(o){
                    case 1:s.id=e.int64().toBigInt();break;
                    case 2:s.oid=e.int64().toBigInt();break;
                    case 3:s.mid=e.int64().toBigInt();break;
                    case 4:s.command=e.string();break;
                    case 5:s.content=e.string();break;
                    case 6:s.progress=e.int32();break;
                    case 7:s.ctime=e.string();break;
                    case 8:s.mtime=e.string();break;
                    case 9:s.extra=e.string();break;
                    case 10:s.idStr=e.string();break;
                    default:let a=i.readUnknownField;
                    if(a==="throw")
                        throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                    let c=e.skip(l);
                    a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)
                }
            }return s
    }internalBinaryWrite(e,t,i){
        e.id!==0n&&t.tag(1,u.Varint).int64(e.id),e.oid!==0n&&t.tag(2,u.Varint).int64(e.oid),e.mid!==0n&&t.tag(3,u.Varint).int64(e.mid),e.command!==""&&t.tag(4,u.LengthDelimited).string(e.command),e.content!==""&&t.tag(5,u.LengthDelimited).string(e.content),e.progress!==0&&t.tag(6,u.Varint).int32(e.progress),e.ctime!==""&&t.tag(7,u.LengthDelimited).string(e.ctime),e.mtime!==""&&t.tag(8,u.LengthDelimited).string(e.mtime),e.extra!==""&&t.tag(9,u.LengthDelimited).string(e.extra),e.idStr!==""&&t.tag(10,u.LengthDelimited).string(e.idStr);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t
    }
},te=new Ze,

    Ye=class extends m{constructor(){super("DmView",[{no:1,name:"commandDms",kind:"message",repeat:1,T:()=>te}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.commandDms=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.commandDms.push(te.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.commandDms.length;s++)te.internalBinaryWrite(e.commandDms[s],t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Xe=new Ye,

    He=class extends m{constructor(){super("DmViewReply",[{no:22,name:"dmView",kind:"message",T:()=>Xe}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 22:s.dmView=Xe.internalBinaryRead(e,e.uint32(),i,s.dmView);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.dmView&&Xe.internalBinaryWrite(e.dmView,t.tag(22,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Qe=new He;
    
var ye=class{constructor(r,e,t){this._times=new Map,this.name=r??"",this.debug=t?.debug??!1,r&&this.log(`${r} Start`),this.className=e??"",this.init()}static getInstance(r,e){let t=typeof $task<"u"?"QuanX":"Surge";return ye.instances[t]||(ye.instances[t]=ye.classNames[t](r,t,e)),ye.instances[t]}createProxy(r){return new Proxy(r,{get:this.getFn,set:this.setFn})}getFn(r,e,t){return r[e]}setFn(r,e,t,i){return r[e]=t,!0}getJSON(r,e={}){let t=this.getVal(r);return t?JSON.parse(t):e}setJSON(r,e){this.setVal(JSON.stringify(r),e)}msg(r=this.name,e="",t="",i){}log(r){this.debug&&(typeof r=="object"&&(r=JSON.stringify(r)),console.log(r))}timeStart(r){this._times.set(r,Date.now())}timeEnd(r){if(this._times?.has(r)){let e=Date.now()-this._times.get(r);this.log(`${r}: ${e}ms`),this._times.delete(r)}else this.log(`Timer with label ${r} does not exist.`)}exit(){$done({})}reject(){$done()}},H=ye;H.instances={},H.classNames={QuanX:(r,e,t)=>new Si(r,e,t),Surge:(r,e,t)=>new Vi(r,e,t)};

var et=class extends H{getFn(r,e,t){let i=et.clientAdapter[e]||e;return super.getFn(r,i,t)}setFn(r,e,t,i){let n=et.clientAdapter[e]||e;return super.setFn(r,n,t,i)}init(){try{this.request=this.createProxy($request),this.response=this.createProxy($response)}catch(r){this.log(r.toString())}}getVal(r){return $persistentStore.read(r)}setVal(r,e){$persistentStore.write(r,e)}msg(r=this.name,e="",t="",i){$notification.post(r,e,t,{url:i??""})}async fetch(r){return await new Promise((e,t)=>{let{method:i,body:n,bodyBytes:s,...f}=r,o=s??n,l=o instanceof Uint8Array;$httpClient[i.toLowerCase()]({...f,body:o,"binary-mode":l},(a,c,g)=>{a&&t(a);let w=l?"bodyBytes":"body";e({status:c.status,headers:c.headers,[w]:g})})})}done(r){let e=r.response??r,t,i;e.bodyBytes?(t=e.bodyBytes,delete e.bodyBytes,i={...r},i.response?i.response.body=t:i.body=t):i=r,$done(i)}},Vi=et;Vi.clientAdapter={bodyBytes:"body"};

var Y=class extends H{static transferBodyBytes(r,e){return r instanceof ArrayBuffer?e==="Uint8Array"?new Uint8Array(r):r:r instanceof Uint8Array&&e==="ArrayBuffer"?r.buffer.slice(r.byteOffset,r.byteLength+r.byteOffset):r}init(){try{this.request=this.createProxy($request),this.response=this.createProxy($response)}catch(r){this.log(r.toString())}}getFn(r,e,t){let i=Y.clientAdapter[e]||e,n=super.getFn(r,i,t);return e==="bodyBytes"&&(n=Y.transferBodyBytes(n,"Uint8Array")),n}setFn(r,e,t,i){let n=Y.clientAdapter[e]||e,s=t;return e==="bodyBytes"&&(s=Y.transferBodyBytes(s,"Uint8Array")),super.setFn(r,n,s,i)}getVal(r){return $prefs.valueForKey(r)?.replace(/\0/g,"")}setVal(r,e){$prefs.setValueForKey(r,e)}msg(r=this.name,e="",t="",i){$notify(r,e,t,{"open-url":i??""})}async fetch(r){return await new Promise(e=>{let t={url:"",method:"GET"};for(let[i,n]of Object.entries(r))i==="id"?t.sessionIndex=n:i==="bodyBytes"?t.bodyBytes=Y.transferBodyBytes(n,"ArrayBuffer"):t[i]=n;r.bodyBytes&&delete t.body,$task.fetch(t).then(i=>{let n={status:200,headers:{}};for(let[s,f]of Object.entries(i))s==="sessionIndex"?n.id=f:s==="bodyBytes"?n.bodyBytes=Y.transferBodyBytes(f,"Uint8Array"):s==="statusCode"?n.status=f:n[s]=f;e(n)})})}done(r){let e=r.response??r,t={};for(let[i,n]of Object.entries(e))i==="status"?t.status=`HTTP/1.1 ${n}`:i==="bodyBytes"?t.bodyBytes=Y.transferBodyBytes(n,"ArrayBuffer"):t[i]=n;$done(t)}},Si=Y;Si.clientAdapter={id:"sessionIndex",status:"statusCode"};

var Ir=H.getInstance("Bilibili Helper",{debug:!1});

function Ur(r){let e=Er(r.length),t=new Uint8Array(5+r.length);return t[0]=0,t.set(e,1),t.set(r,5),t}

function Er(r){let e=new ArrayBuffer(4);return new DataView(e).setUint32(0,r,!1),new Uint8Array(e)}

function _(r,e){let t=r.toBinary(e);Ir.done({bodyBytes:Ur(t)})}
    
var it=class extends m{constructor(){super("ModeStatus",[{no:1,name:"modes",kind:"message",repeat:1,T:()=>tt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.modes=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.modes.push(tt.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.modes.length;s++)tt.internalBinaryWrite(e.modes[s],t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ot=new it,
    
    rt=class extends m{constructor(){super("Mode",[{no:1,name:"id",kind:"scalar",T:5},{no:2,name:"name",kind:"scalar",T:9},{no:4,name:"f4",kind:"scalar",T:5},{no:5,name:"f5",kind:"message",T:()=>nt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.id=0,t.name="",t.f4=0,e!==void 0&&p(this,t,e),t}
    
    internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.id=e.int32();break;case 2:s.name=e.string();break;case 4:s.f4=e.int32();break;case 5:s.f5=nt.internalBinaryRead(e,e.uint32(),i,s.f5);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.id!==0&&t.tag(1,u.Varint).int32(e.id),e.name!==""&&t.tag(2,u.LengthDelimited).string(e.name),e.f4!==0&&t.tag(4,u.Varint).int32(e.f4),e.f5&&nt.internalBinaryWrite(e.f5,t.tag(5,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},tt=new rt,
    
    st=class extends m{constructor(){super("F5",[{no:1,name:"f1",kind:"scalar",T:5}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.f1=0,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.f1=e.int32();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.f1!==0&&t.tag(1,u.Varint).int32(e.f1);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},nt=new st;
    
var at=class extends m{
    constructor(){super("google.protobuf.Any",[
        {no:1,name:"type_url",kind:"scalar",T:9},
        {no:2,name:"value",kind:"scalar",T:12}])
    }pack(e,t){
        return{typeUrl:this.typeNameToUrl(t.typeName),value:t.toBinary(e)}
    }unpack(e,t,i){
        if(!this.contains(e,t))throw new Error("Cannot unpack google.protobuf.Any with typeUrl '"+e.typeUrl+"' as "+t.typeName+".");return t.fromBinary(e.value,i)
    }contains(e,t){
    if(!e.typeUrl.length)return!1;let i=typeof t=="string"?t:t.typeName,n=this.typeUrlToName(e.typeUrl);return i===n
    }internalJsonWrite(e,t){
        var i;if(e.typeUrl==="")return{};
        let n=this.typeUrlToName(e.typeUrl),s=pe(t),f=(i=s.typeRegistry)===null||i===void 0?void 0:i.find(a=>a.typeName===n);
        if(!f)throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '"+e.typeUrl+"' to JSON. The specified type "+n+" is not available in the type registry.");
        let o=f.fromBinary(e.value,{readUnknownField:!1}),l=f.internalJsonWrite(o,s);return(n.startsWith("google.protobuf.")||!le(l))&&(l={value:l}),l["@type"]=e.typeUrl,l
    }internalJsonRead(e,t,i){
        var n;if(!le(e))throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON "+Q(e)+".");if(typeof e["@type"]!="string"||e["@type"]=="")return this.create();
        let s=this.typeUrlToName(e["@type"]),f=(n=t?.typeRegistry)===null||n===void 0?void 0:n.find(l=>l.typeName==s);
        if(!f)throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type "+s+" is not available in the type registry.");
        let o;
        if(s.startsWith("google.protobuf.")&&e.hasOwnProperty("value"))o=f.fromJson(e.value,t);else{let l=Object.assign({},e);delete l["@type"],o=f.fromJson(l,t)}return i===void 0&&(i=this.create()),i.typeUrl=e["@type"],i.value=f.toBinary(o),i
    }typeNameToUrl(e){
        if(!e.length)throw new Error("invalid type name: "+e);return"type.googleapis.com/"+e
    }typeUrlToName(e){
        if(!e.length)throw new Error("invalid type url: "+e);let t=e.lastIndexOf("/"),i=t>0?e.substring(t+1):e;
        if(!i.length)throw new Error("invalid type url: "+e);return i
    }create(e){
        let t=globalThis.Object.create(this.messagePrototype);return t.typeUrl="",t.value=new Uint8Array(0),e!==void 0&&p(this,t,e),t
    }internalBinaryRead(e,t,i,n){
        let s=n??this.create(),f=e.pos+t;
        for(;e.pos<f;){
            let[o,l]=e.tag();
                switch(o){
                case 1:s.typeUrl=e.string();break;
                case 2:s.value=e.bytes();break;
                default:let a=i.readUnknownField;
                if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);
                let c=e.skip(l);
                a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}
            }return s
    }internalBinaryWrite(e,t,i){
        e.typeUrl!==""&&t.tag(1,u.LengthDelimited).string(e.typeUrl),e.value.length&&t.tag(2,u.LengthDelimited).bytes(e.value);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t
    }
},D=new at;
    
var mt=class extends m{constructor(){super("CM",[{no:1,name:"source_content",kind:"message",T:()=>D}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.sourceContent=D.internalBinaryRead(e,e.uint32(),i,s.sourceContent);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.sourceContent&&D.internalBinaryWrite(e.sourceContent,t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},j=new mt,
    
    gt=class extends m{constructor(){super("CMConfig",[{no:1,name:"ads_control",kind:"message",T:()=>D}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.adsControl=D.internalBinaryRead(e,e.uint32(),i,s.adsControl);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.adsControl&&D.internalBinaryWrite(e.adsControl,t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},lt=new gt,
    
    yt=class extends m{constructor(){super("CmIpad",[{no:1,name:"cm",kind:"message",T:()=>j},{no:4,name:"duration",kind:"scalar",T:3,L:0},{no:5,name:"aid",kind:"scalar",T:3,L:0}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.duration=0n,t.aid=0n,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.cm=j.internalBinaryRead(e,e.uint32(),i,s.cm);break;case 4:s.duration=e.int64().toBigInt();break;case 5:s.aid=e.int64().toBigInt();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.cm&&j.internalBinaryWrite(e.cm,t.tag(1,u.LengthDelimited).fork(),i).join(),e.duration!==0n&&t.tag(4,u.Varint).int64(e.duration),e.aid!==0n&&t.tag(5,u.Varint).int64(e.aid);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ft=new yt,
    
    wt=class extends m{constructor(){super("Relate",[{no:28,name:"cm",kind:"message",T:()=>j}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 28:s.cm=j.internalBinaryRead(e,e.uint32(),i,s.cm);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.cm&&j.internalBinaryWrite(e.cm,t.tag(28,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ut=new wt,
    
    bt=class extends m{constructor(){super("ViewReply",[{no:4,name:"req_user",kind:"message",T:()=>ct},{no:10,name:"relates",kind:"message",repeat:1,T:()=>ut},{no:23,name:"label",kind:"message",T:()=>dt},{no:30,name:"cms",kind:"message",repeat:1,T:()=>j},{no:31,name:"cm_config",kind:"message",T:()=>lt},{no:41,name:"cm_ipad",kind:"message",T:()=>ft},{no:50,name:"special_cell_new",kind:"message",repeat:1,T:()=>pt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.relates=[],t.cms=[],t.specialCellNew=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 4:s.reqUser=ct.internalBinaryRead(e,e.uint32(),i,s.reqUser);break;case 10:s.relates.push(ut.internalBinaryRead(e,e.uint32(),i));break;case 23:s.label=dt.internalBinaryRead(e,e.uint32(),i,s.label);break;case 30:s.cms.push(j.internalBinaryRead(e,e.uint32(),i));break;case 31:s.cmConfig=lt.internalBinaryRead(e,e.uint32(),i,s.cmConfig);break;case 41:s.cmIpad=ft.internalBinaryRead(e,e.uint32(),i,s.cmIpad);break;case 50:s.specialCellNew.push(pt.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.reqUser&&ct.internalBinaryWrite(e.reqUser,t.tag(4,u.LengthDelimited).fork(),i).join();for(let s=0;s<e.relates.length;s++)ut.internalBinaryWrite(e.relates[s],t.tag(10,u.LengthDelimited).fork(),i).join();e.label&&dt.internalBinaryWrite(e.label,t.tag(23,u.LengthDelimited).fork(),i).join();for(let s=0;s<e.cms.length;s++)j.internalBinaryWrite(e.cms[s],t.tag(30,u.LengthDelimited).fork(),i).join();e.cmConfig&&lt.internalBinaryWrite(e.cmConfig,t.tag(31,u.LengthDelimited).fork(),i).join(),e.cmIpad&&ft.internalBinaryWrite(e.cmIpad,t.tag(41,u.LengthDelimited).fork(),i).join();for(let s=0;s<e.specialCellNew.length;s++)pt.internalBinaryWrite(e.specialCellNew[s],t.tag(50,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Tt=new bt,
    
    kt=class extends m{constructor(){super("ReqUser",[{no:1,name:"attention",kind:"scalar",T:5},{no:2,name:"guest_attention",kind:"scalar",T:5},{no:3,name:"favorite",kind:"scalar",T:5},{no:4,name:"like",kind:"scalar",T:5},{no:5,name:"dislike",kind:"scalar",T:5},{no:6,name:"coin",kind:"scalar",T:5},{no:7,name:"attention_level",kind:"scalar",T:5},{no:8,name:"fav_season",kind:"scalar",T:5},{no:9,name:"elec_plus_btn",kind:"message",T:()=>ht}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.attention=0,t.guestAttention=0,t.favorite=0,t.like=0,t.dislike=0,t.coin=0,t.attentionLevel=0,t.favSeason=0,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.attention=e.int32();break;case 2:s.guestAttention=e.int32();break;case 3:s.favorite=e.int32();break;case 4:s.like=e.int32();break;case 5:s.dislike=e.int32();break;case 6:s.coin=e.int32();break;case 7:s.attentionLevel=e.int32();break;case 8:s.favSeason=e.int32();break;case 9:s.elecPlusBtn=ht.internalBinaryRead(e,e.uint32(),i,s.elecPlusBtn);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.attention!==0&&t.tag(1,u.Varint).int32(e.attention),e.guestAttention!==0&&t.tag(2,u.Varint).int32(e.guestAttention),e.favorite!==0&&t.tag(3,u.Varint).int32(e.favorite),e.like!==0&&t.tag(4,u.Varint).int32(e.like),e.dislike!==0&&t.tag(5,u.Varint).int32(e.dislike),e.coin!==0&&t.tag(6,u.Varint).int32(e.coin),e.attentionLevel!==0&&t.tag(7,u.Varint).int32(e.attentionLevel),e.favSeason!==0&&t.tag(8,u.Varint).int32(e.favSeason),e.elecPlusBtn&&ht.internalBinaryWrite(e.elecPlusBtn,t.tag(9,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ct=new kt,
    
    vt=class extends m{constructor(){super("Button",[{no:1,name:"title",kind:"scalar",T:9},{no:2,name:"uri",kind:"scalar",T:9},{no:3,name:"icon",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.title="",t.uri="",t.icon="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.title=e.string();break;case 2:s.uri=e.string();break;case 3:s.icon=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.title!==""&&t.tag(1,u.LengthDelimited).string(e.title),e.uri!==""&&t.tag(2,u.LengthDelimited).string(e.uri),e.icon!==""&&t.tag(3,u.LengthDelimited).string(e.icon);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ht=new vt,
    
    Nt=class extends m{constructor(){super("Label",[{no:1,name:"type",kind:"scalar",T:5},{no:2,name:"uri",kind:"scalar",T:9},{no:3,name:"icon",kind:"scalar",T:9},{no:4,name:"icon_night",kind:"scalar",T:9},{no:5,name:"icon_width",kind:"scalar",T:3,L:0},{no:6,name:"icon_height",kind:"scalar",T:3,L:0},{no:7,name:"lottie",kind:"scalar",T:9},{no:8,name:"lottie_night",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.type=0,t.uri="",t.icon="",t.iconNight="",t.iconWidth=0n,t.iconHeight=0n,t.lottie="",t.lottieNight="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.type=e.int32();break;case 2:s.uri=e.string();break;case 3:s.icon=e.string();break;case 4:s.iconNight=e.string();break;case 5:s.iconWidth=e.int64().toBigInt();break;case 6:s.iconHeight=e.int64().toBigInt();break;case 7:s.lottie=e.string();break;case 8:s.lottieNight=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.type!==0&&t.tag(1,u.Varint).int32(e.type),e.uri!==""&&t.tag(2,u.LengthDelimited).string(e.uri),e.icon!==""&&t.tag(3,u.LengthDelimited).string(e.icon),e.iconNight!==""&&t.tag(4,u.LengthDelimited).string(e.iconNight),e.iconWidth!==0n&&t.tag(5,u.Varint).int64(e.iconWidth),e.iconHeight!==0n&&t.tag(6,u.Varint).int64(e.iconHeight),e.lottie!==""&&t.tag(7,u.LengthDelimited).string(e.lottie),e.lottieNight!==""&&t.tag(8,u.LengthDelimited).string(e.lottieNight);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},dt=new Nt,
    
    Bt=class extends m{constructor(){super("SpecialCell",[])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){return n??this.create()}internalBinaryWrite(e,t,i){let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},pt=new Bt;
    
var xt=class extends m{constructor(){super("MainListReply",[{no:11,name:"cm",kind:"message",T:()=>j}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 11:s.cm=j.internalBinaryRead(e,e.uint32(),i,s.cm);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.cm&&j.internalBinaryWrite(e.cm,t.tag(11,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},It=new xt;

var Et=class extends m{constructor(){super("Item",[{no:4,name:"linktype",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.linktype="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 4:s.linktype=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.linktype!==""&&t.tag(4,u.LengthDelimited).string(e.linktype);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Ut=new Et,

    Ot=class extends m{constructor(){super("SearchAll",[{no:4,name:"items",kind:"message",repeat:1,T:()=>Ut}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.items=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 4:s.items.push(Ut.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.items.length;s++)Ut.internalBinaryWrite(e.items[s],t.tag(4,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Rt=new Ot;

var ne;(function(r){r[r.dyn_none=0]="dyn_none",r[r.forward=1]="forward",r[r.av=2]="av",r[r.pgc=3]="pgc",r[r.courses=4]="courses",r[r.fold=5]="fold",r[r.word=6]="word",r[r.draw=7]="draw",r[r.article=8]="article",r[r.music=9]="music",r[r.common_square=10]="common_square",r[r.common_vertical=11]="common_vertical",r[r.live=12]="live",r[r.medialist=13]="medialist",r[r.courses_season=14]="courses_season",r[r.ad=15]="ad",r[r.applet=16]="applet",r[r.subscription=17]="subscription",r[r.live_rcmd=18]="live_rcmd",r[r.banner=19]="banner",r[r.ugc_season=20]="ugc_season",r[r.subscription_new=21]="subscription_new",r[r.story=22]="story",r[r.topic_rcmd=23]="topic_rcmd"})(ne||(ne={}));

var Vt;(function(r){r[r.live_none=0]="live_none",r[r.live_live=1]="live_live",r[r.live_rotation=2]="live_rotation"})(Vt||(Vt={}));

var St=class extends m{constructor(){super("DynamicItem",[{no:1,name:"card_type",kind:"enum",T:()=>["DynamicType",ne]},{no:2,name:"item_type",kind:"enum",T:()=>["DynamicType",ne]},{no:5,name:"has_fold",kind:"scalar",T:5},{no:6,name:"server_info",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.cardType=0,t.itemType=0,t.hasFold=0,t.serverInfo="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.cardType=e.int32();break;case 2:s.itemType=e.int32();break;case 5:s.hasFold=e.int32();break;case 6:s.serverInfo=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.cardType!==0&&t.tag(1,u.Varint).int32(e.cardType),e.itemType!==0&&t.tag(2,u.Varint).int32(e.itemType),e.hasFold!==0&&t.tag(5,u.Varint).int32(e.hasFold),e.serverInfo!==""&&t.tag(6,u.LengthDelimited).string(e.serverInfo);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Lt=new St,

    Ct=class extends m{constructor(){super("DynamicList",[{no:1,name:"list",kind:"message",repeat:1,T:()=>Lt},{no:2,name:"update_num",kind:"scalar",T:3,L:0},{no:3,name:"history_offset",kind:"scalar",T:9},{no:4,name:"update_baseline",kind:"scalar",T:9},{no:5,name:"has_more",kind:"scalar",T:8}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.list=[],t.updateNum=0n,t.historyOffset="",t.updateBaseline="",t.hasMore=!1,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.list.push(Lt.internalBinaryRead(e,e.uint32(),i));break;case 2:s.updateNum=e.int64().toBigInt();break;case 3:s.historyOffset=e.string();break;case 4:s.updateBaseline=e.string();break;case 5:s.hasMore=e.bool();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.list.length;s++)Lt.internalBinaryWrite(e.list[s],t.tag(1,u.LengthDelimited).fork(),i).join();e.updateNum!==0n&&t.tag(2,u.Varint).int64(e.updateNum),e.historyOffset!==""&&t.tag(3,u.LengthDelimited).string(e.historyOffset),e.updateBaseline!==""&&t.tag(4,u.LengthDelimited).string(e.updateBaseline),e.hasMore!==!1&&t.tag(5,u.Varint).bool(e.hasMore);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Ft=new Ct,

    Wt=class extends m{constructor(){super("TopicList",[{no:1,name:"title",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.title="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.title=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.title!==""&&t.tag(1,u.LengthDelimited).string(e.title);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},At=new Wt,
    
    Pt=class extends m{constructor(){super("UpListItem",[{no:3,name:"name",kind:"scalar",T:9},{no:4,name:"uid",kind:"scalar",T:3,L:0},{no:5,name:"pos",kind:"scalar",T:3,L:0},{no:10,name:"live_state",kind:"enum",T:()=>["LiveState",Vt]},{no:11,name:"separator",kind:"scalar",T:8}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.name="",t.uid=0n,t.pos=0n,t.liveState=0,t.separator=!1,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 3:s.name=e.string();break;case 4:s.uid=e.int64().toBigInt();break;case 5:s.pos=e.int64().toBigInt();break;case 10:s.liveState=e.int32();break;case 11:s.separator=e.bool();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.name!==""&&t.tag(3,u.LengthDelimited).string(e.name),e.uid!==0n&&t.tag(4,u.Varint).int64(e.uid),e.pos!==0n&&t.tag(5,u.Varint).int64(e.pos),e.liveState!==0&&t.tag(10,u.Varint).int32(e.liveState),e.separator!==!1&&t.tag(11,u.Varint).bool(e.separator);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},ue=new Pt,
    
    _t=class extends m{constructor(){super("CardVideoUpList",[{no:2,name:"list",kind:"message",repeat:1,T:()=>ue},{no:4,name:"show_live_num",kind:"scalar",T:5},{no:10,name:"list_second",kind:"message",repeat:1,T:()=>ue}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.list=[],t.showLiveNum=0,t.listSecond=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 2:s.list.push(ue.internalBinaryRead(e,e.uint32(),i));break;case 4:s.showLiveNum=e.int32();break;case 10:s.listSecond.push(ue.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.list.length;s++)ue.internalBinaryWrite(e.list[s],t.tag(2,u.LengthDelimited).fork(),i).join();e.showLiveNum!==0&&t.tag(4,u.Varint).int32(e.showLiveNum);for(let s=0;s<e.listSecond.length;s++)ue.internalBinaryWrite(e.listSecond[s],t.tag(10,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Dt=new _t,
    
    $t=class extends m{constructor(){super("DynAllReply",[{no:1,name:"dynamic_list",kind:"message",T:()=>Ft},{no:2,name:"up_list",kind:"message",T:()=>Dt},{no:3,name:"topic_list",kind:"message",T:()=>At}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.dynamicList=Ft.internalBinaryRead(e,e.uint32(),i,s.dynamicList);break;case 2:s.upList=Dt.internalBinaryRead(e,e.uint32(),i,s.upList);break;case 3:s.topicList=At.internalBinaryRead(e,e.uint32(),i,s.topicList);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.dynamicList&&Ft.internalBinaryWrite(e.dynamicList,t.tag(1,u.LengthDelimited).fork(),i).join(),e.upList&&Dt.internalBinaryWrite(e.upList,t.tag(2,u.LengthDelimited).fork(),i).join(),e.topicList&&At.internalBinaryWrite(e.topicList,t.tag(3,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},jt=new $t;
    
var zt=class extends m{constructor(){super("ViewProgress",[{no:1,name:"dm",kind:"message",T:()=>Mt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.dm=Mt.internalBinaryRead(e,e.uint32(),i,s.dm);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.dm&&Mt.internalBinaryWrite(e.dm,t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Kt=new zt,

    Gt=class extends m{constructor(){super("DM",[{no:2,name:"commandDms",kind:"message",repeat:1,T:()=>te}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.commandDms=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 2:s.commandDms.push(te.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.commandDms.length;s++)te.internalBinaryWrite(e.commandDms[s],t.tag(2,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Mt=new Gt;

var sn;(function(r){r[r.TAB_NONE=0]="TAB_NONE",r[r.TAB_INTRODUCTION=1]="TAB_INTRODUCTION",r[r.TAB_REPLY=2]="TAB_REPLY",r[r.TAB_OGV_ACTIVITY=3]="TAB_OGV_ACTIVITY"})(sn||(sn={}));

var ie;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.OGV_INTRODUCTION=1]="OGV_INTRODUCTION",r[r.OGV_TITLE=2]="OGV_TITLE",r[r.UGC_HEADLINE=3]="UGC_HEADLINE",r[r.UGC_INTRODUCTION=4]="UGC_INTRODUCTION",r[r.KING_POSITION=5]="KING_POSITION",r[r.MASTER_USER_LIST=6]="MASTER_USER_LIST",r[r.STAFFS=7]="STAFFS",r[r.HONOR=8]="HONOR",r[r.OWNER=9]="OWNER",r[r.PAGE=10]="PAGE",r[r.ACTIVITY_RESERVE=11]="ACTIVITY_RESERVE",r[r.LIVE_ORDER=12]="LIVE_ORDER",r[r.POSITIVE=13]="POSITIVE",r[r.SECTION=14]="SECTION",r[r.RELATE=15]="RELATE",r[r.PUGV=16]="PUGV",r[r.COLLECTION_CARD=17]="COLLECTION_CARD",r[r.ACTIVITY=18]="ACTIVITY",r[r.CHARACTER=19]="CHARACTER",r[r.FOLLOW_LAYER=20]="FOLLOW_LAYER",r[r.OGV_SEASONS=21]="OGV_SEASONS",r[r.UGC_SEASON=22]="UGC_SEASON",r[r.OGV_LIVE_RESERVE=23]="OGV_LIVE_RESERVE",r[r.COMBINATION_EPISODE=24]="COMBINATION_EPISODE",r[r.SPONSOR=25]="SPONSOR",r[r.ACTIVITY_ENTRANCE=26]="ACTIVITY_ENTRANCE",r[r.THEATRE_HOT_TOPIC=27]="THEATRE_HOT_TOPIC",r[r.RELATED_RECOMMEND=28]="RELATED_RECOMMEND",r[r.PAY_BAR=29]="PAY_BAR",r[r.BANNER=30]="BANNER",r[r.AUDIO=31]="AUDIO",r[r.AGG_CARD=32]="AGG_CARD",r[r.SINGLE_EP=33]="SINGLE_EP",r[r.LIKE_COMMENT=34]="LIKE_COMMENT",r[r.ATTENTION_RECOMMEND=35]="ATTENTION_RECOMMEND",r[r.COVENANTER=36]="COVENANTER",r[r.SPECIALTAG=37]="SPECIALTAG"})(ie||(ie={}));

var re;(function(r){r[r.CARD_TYPE_UNKNOWN=0]="CARD_TYPE_UNKNOWN",r[r.AV=1]="AV",r[r.BANGUMI=2]="BANGUMI",r[r.RESOURCE=3]="RESOURCE",r[r.GAME=4]="GAME",r[r.CM_TYPE=5]="CM_TYPE",r[r.LIVE=6]="LIVE",r[r.AI_RECOMMEND=7]="AI_RECOMMEND",r[r.BANGUMI_AV=8]="BANGUMI_AV",r[r.BANGUMI_UGC=9]="BANGUMI_UGC",r[r.SPECIAL=10]="SPECIAL"})(re||(re={}));

var on=class extends m{constructor(){super("viewunite.v1.RelateCard",[{no:1,name:"relate_card_type",kind:"enum",T:()=>["viewunite.v1.RelateCardType",re]}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.relateCardType=0,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.relateCardType=e.int32();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.relateCardType!==0&&t.tag(1,u.Varint).int32(e.relateCardType);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Jt=new on,
    
    an=class extends m{constructor(){super("viewunite.v1.Relates",[{no:1,name:"cards",kind:"message",repeat:1,T:()=>Jt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.cards=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.cards.push(Jt.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.cards.length;s++)Jt.internalBinaryWrite(e.cards[s],t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},qt=new an,
    
    ln=class extends m{constructor(){super("viewunite.v1.Headline",[{no:1,name:"label",kind:"message",T:()=>Zt},{no:2,name:"content",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.content="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.label=Zt.internalBinaryRead(e,e.uint32(),i,s.label);break;case 2:s.content=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.label&&Zt.internalBinaryWrite(e.label,t.tag(1,u.LengthDelimited).fork(),i).join(),e.content!==""&&t.tag(2,u.LengthDelimited).string(e.content);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Xt=new ln,
    
    fn=class extends m{constructor(){super("viewunite.v1.Label",[])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){return n??this.create()}internalBinaryWrite(e,t,i){let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Zt=new fn,
    
    un=class extends m{constructor(){super("viewunite.v1.CommonModule",[{no:1,name:"type",kind:"enum",T:()=>["viewunite.v1.ModuleType",ie]},{no:5,name:"head_line",kind:"message",oneof:"data",T:()=>Xt},{no:22,name:"relates",kind:"message",oneof:"data",T:()=>qt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.type=0,t.data={oneofKind:void 0},e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.type=e.int32();break;case 5:s.data={oneofKind:"headLine",headLine:Xt.internalBinaryRead(e,e.uint32(),i,s.data.headLine)};break;case 22:s.data={oneofKind:"relates",relates:qt.internalBinaryRead(e,e.uint32(),i,s.data.relates)};break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.type!==0&&t.tag(1,u.Varint).int32(e.type),e.data.oneofKind==="headLine"&&Xt.internalBinaryWrite(e.data.headLine,t.tag(5,u.LengthDelimited).fork(),i).join(),e.data.oneofKind==="relates"&&qt.internalBinaryWrite(e.data.relates,t.tag(22,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Yt=new un,
    
    cn=class extends m{constructor(){super("viewunite.v1.IntroductionTab",[{no:1,name:"title",kind:"scalar",T:9},{no:2,name:"modules",kind:"message",repeat:1,T:()=>Yt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.title="",t.modules=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.title=e.string();break;case 2:s.modules.push(Yt.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.title!==""&&t.tag(1,u.LengthDelimited).string(e.title);for(let s=0;s<e.modules.length;s++)Yt.internalBinaryWrite(e.modules[s],t.tag(2,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Ht=new cn,
    
    hn=class extends m{constructor(){super("viewunite.v1.TabModule",[{no:1,name:"tab_type",kind:"enum",T:()=>["viewunite.v1.TabType",sn]},{no:2,name:"introduction",kind:"message",oneof:"tab",T:()=>Ht}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.tabType=0,t.tab={oneofKind:void 0},e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.tabType=e.int32();break;case 2:s.tab={oneofKind:"introduction",introduction:Ht.internalBinaryRead(e,e.uint32(),i,s.tab.introduction)};break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.tabType!==0&&t.tag(1,u.Varint).int32(e.tabType),e.tab.oneofKind==="introduction"&&Ht.internalBinaryWrite(e.tab.introduction,t.tag(2,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Qt=new hn,
    
    dn=class extends m{constructor(){super("viewunite.v1.Tab",[{no:1,name:"tab_module",kind:"message",repeat:1,T:()=>Qt}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.tabModule=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.tabModule.push(Qt.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.tabModule.length;s++)Qt.internalBinaryWrite(e.tabModule[s],t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},en=new dn,
    
    pn=class extends m{constructor(){super("viewunite.v1.CM",[{no:1,name:"cm_under_player",kind:"message",T:()=>D},{no:2,name:"ads_control",kind:"message",T:()=>D},{no:3,name:"source_content",kind:"message",repeat:1,T:()=>D}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.sourceContent=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.cmUnderPlayer=D.internalBinaryRead(e,e.uint32(),i,s.cmUnderPlayer);break;case 2:s.adsControl=D.internalBinaryRead(e,e.uint32(),i,s.adsControl);break;case 3:s.sourceContent.push(D.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.cmUnderPlayer&&D.internalBinaryWrite(e.cmUnderPlayer,t.tag(1,u.LengthDelimited).fork(),i).join(),e.adsControl&&D.internalBinaryWrite(e.adsControl,t.tag(2,u.LengthDelimited).fork(),i).join();for(let s=0;s<e.sourceContent.length;s++)D.internalBinaryWrite(e.sourceContent[s],t.tag(3,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},tn=new pn,
    
    mn=class extends m{constructor(){super("viewunite.v1.ReqUser",[{no:7,name:"elec_plus_btn",kind:"message",T:()=>rn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 7:s.elecPlusBtn=rn.internalBinaryRead(e,e.uint32(),i,s.elecPlusBtn);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.elecPlusBtn&&rn.internalBinaryWrite(e.elecPlusBtn,t.tag(7,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},nn=new mn,
    
    gn=class extends m{constructor(){super("viewunite.v1.Button",[])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){return n??this.create()}internalBinaryWrite(e,t,i){let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},rn=new gn,
    
    yn=class extends m{constructor(){super("viewunite.v1.ViewUniteReply",[{no:3,name:"req_user",kind:"message",T:()=>nn},{no:5,name:"tab",kind:"message",T:()=>en},{no:7,name:"cm",kind:"message",T:()=>tn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 3:s.reqUser=nn.internalBinaryRead(e,e.uint32(),i,s.reqUser);break;case 5:s.tab=en.internalBinaryRead(e,e.uint32(),i,s.tab);break;case 7:s.cm=tn.internalBinaryRead(e,e.uint32(),i,s.cm);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.reqUser&&nn.internalBinaryWrite(e.reqUser,t.tag(3,u.LengthDelimited).fork(),i).join(),e.tab&&en.internalBinaryWrite(e.tab,t.tag(5,u.LengthDelimited).fork(),i).join(),e.cm&&tn.internalBinaryWrite(e.cm,t.tag(7,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},wn=new yn;
    
var Nn=class extends m{constructor(){super("PlayViewReply",[{no:5,name:"play_arc",kind:"message",T:()=>bn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 5:s.playArc=bn.internalBinaryRead(e,e.uint32(),i,s.playArc);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.playArc&&bn.internalBinaryWrite(e.playArc,t.tag(5,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},In=new Nn,
    
    Bn=class extends m{constructor(){super("PlayArcConf",[{no:1,name:"background_play_conf",kind:"message",T:()=>kn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.backgroundPlayConf=kn.internalBinaryRead(e,e.uint32(),i,s.backgroundPlayConf);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.backgroundPlayConf&&kn.internalBinaryWrite(e.backgroundPlayConf,t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},bn=new Bn,
    
    Tn=class extends m{constructor(){super("ArcConf",[{no:1,name:"is_support",kind:"scalar",T:8},{no:2,name:"disabled",kind:"scalar",T:8},{no:3,name:"extra_content",kind:"message",T:()=>vn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.isSupport=!1,t.disabled=!1,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.isSupport=e.bool();break;case 2:s.disabled=e.bool();break;case 3:s.extraContent=vn.internalBinaryRead(e,e.uint32(),i,s.extraContent);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.isSupport!==!1&&t.tag(1,u.Varint).bool(e.isSupport),e.disabled!==!1&&t.tag(2,u.Varint).bool(e.disabled),e.extraContent&&vn.internalBinaryWrite(e.extraContent,t.tag(3,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},kn=new Tn,
    
    xn=class extends m{constructor(){super("ExtraContent",[{no:1,name:"disabled_reason",kind:"scalar",T:9},{no:2,name:"disabled_code",kind:"scalar",T:3,L:0}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.disabledReason="",t.disabledCode=0n,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.disabledReason=e.string();break;case 2:s.disabledCode=e.int64().toBigInt();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.disabledReason!==""&&t.tag(1,u.LengthDelimited).string(e.disabledReason),e.disabledCode!==0n&&t.tag(2,u.Varint).int64(e.disabledCode);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},vn=new xn;
    
var On=class extends m{constructor(){super("PlayViewUniteReply",[{no:2,name:"play_arc_conf",kind:"message",T:()=>Un}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 2:s.playArcConf=Un.internalBinaryRead(e,e.uint32(),i,s.playArcConf);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.playArcConf&&Un.internalBinaryWrite(e.playArcConf,t.tag(2,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},An=new On,

    Rn=class extends m{constructor(){super("PlayArcConf",[{no:1,name:"arc_conf",kind:"map",K:5,V:{kind:"message",T:()=>Ve}}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.arcConf={},e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:this.binaryReadMap1(s.arcConf,e,i);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}binaryReadMap1(e,t,i){let n=t.uint32(),s=t.pos+n,f,o;for(;t.pos<s;){let[l,a]=t.tag();switch(l){case 1:f=t.int32();break;case 2:o=Ve.internalBinaryRead(t,t.uint32(),i);break;default:throw new globalThis.Error("unknown map entry field for field PlayArcConf.arc_conf")}}e[f??0]=o??Ve.create()}internalBinaryWrite(e,t,i){for(let s of globalThis.Object.keys(e.arcConf))t.tag(1,u.LengthDelimited).fork().tag(1,u.Varint).int32(parseInt(s)),t.tag(2,u.LengthDelimited).fork(),Ve.internalBinaryWrite(e.arcConf[s],t,i),t.join().join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Un=new Rn,
    
    Ln=class extends m{constructor(){super("ArcConf",[{no:1,name:"is_support",kind:"scalar",T:8},{no:2,name:"disabled",kind:"scalar",T:8},{no:3,name:"extra_content",kind:"message",T:()=>En},{no:4,name:"unsupport_scene",kind:"scalar",repeat:1,T:5}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.isSupport=!1,t.disabled=!1,t.unsupportScene=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.isSupport=e.bool();break;case 2:s.disabled=e.bool();break;case 3:s.extraContent=En.internalBinaryRead(e,e.uint32(),i,s.extraContent);break;case 4:if(l===u.LengthDelimited)for(let g=e.int32()+e.pos;e.pos<g;)s.unsupportScene.push(e.int32());else s.unsupportScene.push(e.int32());break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){if(e.isSupport!==!1&&t.tag(1,u.Varint).bool(e.isSupport),e.disabled!==!1&&t.tag(2,u.Varint).bool(e.disabled),e.extraContent&&En.internalBinaryWrite(e.extraContent,t.tag(3,u.LengthDelimited).fork(),i).join(),e.unsupportScene.length){t.tag(4,u.LengthDelimited).fork();for(let s=0;s<e.unsupportScene.length;s++)t.int32(e.unsupportScene[s]);t.join()}let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Ve=new Ln,
    
    Fn=class extends m{constructor(){super("ExtraContent",[{no:1,name:"disabled_reason",kind:"scalar",T:9},{no:2,name:"disabled_code",kind:"scalar",T:3,L:0}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.disabledReason="",t.disabledCode=0n,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.disabledReason=e.string();break;case 2:s.disabledCode=e.int64().toBigInt();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.disabledReason!==""&&t.tag(1,u.LengthDelimited).string(e.disabledReason),e.disabledCode!==0n&&t.tag(2,u.Varint).int64(e.disabledCode);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},En=new Fn;
    
var Cn=class extends m{constructor(){super("PopularReply",[{no:1,name:"items",kind:"message",repeat:1,T:()=>Dn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.items=[],e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.items.push(Dn.internalBinaryRead(e,e.uint32(),i));break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){for(let s=0;s<e.items.length;s++)Dn.internalBinaryWrite(e.items[s],t.tag(1,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},$n=new Cn,

    Wn=class extends m{constructor(){super("Card",[{no:10,name:"rcmd_one_item",kind:"message",oneof:"item",T:()=>Vn},{no:12,name:"topic_list",kind:"message",oneof:"item",T:()=>Sn}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.item={oneofKind:void 0},e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 10:s.item={oneofKind:"rcmdOneItem",rcmdOneItem:Vn.internalBinaryRead(e,e.uint32(),i,s.item.rcmdOneItem)};break;case 12:s.item={oneofKind:"topicList",topicList:Sn.internalBinaryRead(e,e.uint32(),i,s.item.topicList)};break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.item.oneofKind==="rcmdOneItem"&&Vn.internalBinaryWrite(e.item.rcmdOneItem,t.tag(10,u.LengthDelimited).fork(),i).join(),e.item.oneofKind==="topicList"&&Sn.internalBinaryWrite(e.item.topicList,t.tag(12,u.LengthDelimited).fork(),i).join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Dn=new Wn,
    
    Pn=class extends m{constructor(){super("RcmdOneItem",[])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){return n??this.create()}internalBinaryWrite(e,t,i){let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Vn=new Pn,
    
    _n=class extends m{constructor(){super("PopularTopicList",[])}create(e){let t=globalThis.Object.create(this.messagePrototype);return e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){return n??this.create()}internalBinaryWrite(e,t,i){let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Sn=new _n;
    
var jn=class extends m{constructor(){super("DefaultWordsReply",[
    {no:1,name:"trackid",kind:"scalar",T:9},{no:2,name:"param",kind:"scalar",T:9},
    {no:3,name:"show",kind:"scalar",T:9},
    {no:4,name:"word",kind:"scalar",T:9},
    {no:5,name:"show_front",kind:"scalar",T:3,L:0},
    {no:6,name:"exp_str",kind:"scalar",T:9},
    {no:7,name:"goto",kind:"scalar",T:9},
    {no:8,name:"value",kind:"scalar",T:9},
    {no:9,name:"uri",kind:"scalar",T:9},
    {no:10,name:"enable_refresh",kind:"scalar",T:3,L:0},
    {no:11,name:"refresh_interval_milli",kind:"scalar",T:3,L:0},
    {no:12,name:"enable_animation",kind:"scalar",T:3,L:0},
    {no:13,name:"animation_time_milli",kind:"scalar",T:3,L:0}])
}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.trackid="",t.param="",t.show="",t.word="",t.showFront=0n,t.expStr="",t.goto="",t.value="",t.uri="",t.enableRefresh=0n,t.refreshIntervalMilli=0n,t.enableAnimation=0n,t.animationTimeMilli=0n,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.trackid=e.string();break;case 2:s.param=e.string();break;case 3:s.show=e.string();break;case 4:s.word=e.string();break;case 5:s.showFront=e.int64().toBigInt();break;case 6:s.expStr=e.string();break;case 7:s.goto=e.string();break;case 8:s.value=e.string();break;case 9:s.uri=e.string();break;case 10:s.enableRefresh=e.int64().toBigInt();break;case 11:s.refreshIntervalMilli=e.int64().toBigInt();break;case 12:s.enableAnimation=e.int64().toBigInt();break;case 13:s.animationTimeMilli=e.int64().toBigInt();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.trackid!==""&&t.tag(1,u.LengthDelimited).string(e.trackid),e.param!==""&&t.tag(2,u.LengthDelimited).string(e.param),e.show!==""&&t.tag(3,u.LengthDelimited).string(e.show),e.word!==""&&t.tag(4,u.LengthDelimited).string(e.word),e.showFront!==0n&&t.tag(5,u.Varint).int64(e.showFront),e.expStr!==""&&t.tag(6,u.LengthDelimited).string(e.expStr),e.goto!==""&&t.tag(7,u.LengthDelimited).string(e.goto),e.value!==""&&t.tag(8,u.LengthDelimited).string(e.value),e.uri!==""&&t.tag(9,u.LengthDelimited).string(e.uri),e.enableRefresh!==0n&&t.tag(10,u.Varint).int64(e.enableRefresh),e.refreshIntervalMilli!==0n&&t.tag(11,u.Varint).int64(e.refreshIntervalMilli),e.enableAnimation!==0n&&t.tag(12,u.Varint).int64(e.enableAnimation),e.animationTimeMilli!==0n&&t.tag(13,u.Varint).int64(e.animationTimeMilli);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Mn=new jn;

var Kn=class extends m{constructor(){super("TFInfoReply",[{no:1,name:"tips_id",kind:"scalar",T:3,L:0},{no:2,name:"tf_toast",kind:"message",T:()=>zn},{no:3,name:"tf_panel_customized",kind:"message",T:()=>Gn},{no:4,name:"user_flag_new",kind:"scalar",T:8}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.tipsId=0n,t.userFlagNew=!1,e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.tipsId=e.int64().toBigInt();break;case 2:s.tfToast=zn.internalBinaryRead(e,e.uint32(),i,s.tfToast);break;case 3:s.tfPanelCustomized=Gn.internalBinaryRead(e,e.uint32(),i,s.tfPanelCustomized);break;case 4:s.userFlagNew=e.bool();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.tipsId!==0n&&t.tag(1,u.Varint).int64(e.tipsId),e.tfToast&&zn.internalBinaryWrite(e.tfToast,t.tag(2,u.LengthDelimited).fork(),i).join(),e.tfPanelCustomized&&Gn.internalBinaryWrite(e.tfPanelCustomized,t.tag(3,u.LengthDelimited).fork(),i).join(),e.userFlagNew!==!1&&t.tag(4,u.Varint).bool(e.userFlagNew);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Zn=new Kn,

    Jn=class extends m{constructor(){super("TFToast",[{no:1,name:"btn_text",kind:"scalar",T:9},{no:2,name:"btn_link",kind:"scalar",T:9},{no:3,name:"title",kind:"scalar",T:9},{no:4,name:"description",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.btnText="",t.btnLink="",t.title="",t.description="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.btnText=e.string();break;case 2:s.btnLink=e.string();break;case 3:s.title=e.string();break;case 4:s.description=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.btnText!==""&&t.tag(1,u.LengthDelimited).string(e.btnText),e.btnLink!==""&&t.tag(2,u.LengthDelimited).string(e.btnLink),e.title!==""&&t.tag(3,u.LengthDelimited).string(e.title),e.description!==""&&t.tag(4,u.LengthDelimited).string(e.description);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},zn=new Jn,

    qn=class extends m{constructor(){super("TFPanelCustomized",[
        {no:1,name:"right_btn_img",kind:"scalar",T:9},
        {no:2,name:"right_btn_text",kind:"scalar",T:9},
        {no:3,name:"right_btn_text_color",kind:"scalar",T:9},
        {no:4,name:"right_btn_link",kind:"scalar",T:9},
        {no:5,name:"main_label",kind:"scalar",T:9},
        {no:6,name:"operator",kind:"scalar",T:9},
        {no:7,name:"sub_panel",kind:"map",K:9,V:{kind:"message",T:()=>Se}}])
    }create(e){let t=globalThis.Object.create(this.messagePrototype);return t.rightBtnImg="",t.rightBtnText="",t.rightBtnTextColor="",t.rightBtnLink="",t.mainLabel="",t.operator="",t.subPanel={},e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.rightBtnImg=e.string();break;case 2:s.rightBtnText=e.string();break;case 3:s.rightBtnTextColor=e.string();break;case 4:s.rightBtnLink=e.string();break;case 5:s.mainLabel=e.string();break;case 6:s.operator=e.string();break;case 7:this.binaryReadMap7(s.subPanel,e,i);break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}binaryReadMap7(e,t,i){let n=t.uint32(),s=t.pos+n,f,o;for(;t.pos<s;){let[l,a]=t.tag();switch(l){case 1:f=t.string();break;case 2:o=Se.internalBinaryRead(t,t.uint32(),i);break;default:throw new globalThis.Error("unknown map entry field for field TFPanelCustomized.sub_panel")}}e[f??""]=o??Se.create()}internalBinaryWrite(e,t,i){e.rightBtnImg!==""&&t.tag(1,u.LengthDelimited).string(e.rightBtnImg),e.rightBtnText!==""&&t.tag(2,u.LengthDelimited).string(e.rightBtnText),e.rightBtnTextColor!==""&&t.tag(3,u.LengthDelimited).string(e.rightBtnTextColor),e.rightBtnLink!==""&&t.tag(4,u.LengthDelimited).string(e.rightBtnLink),e.mainLabel!==""&&t.tag(5,u.LengthDelimited).string(e.mainLabel),e.operator!==""&&t.tag(6,u.LengthDelimited).string(e.operator);for(let s of globalThis.Object.keys(e.subPanel))t.tag(7,u.LengthDelimited).fork().tag(1,u.LengthDelimited).string(s),t.tag(2,u.LengthDelimited).fork(),Se.internalBinaryWrite(e.subPanel[s],t,i),t.join().join();let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Gn=new qn,
    
    Xn=class extends m{constructor(){super("subTFPanel",[{no:1,name:"right_btn_img",kind:"scalar",T:9},{no:2,name:"right_btn_text",kind:"scalar",T:9},{no:3,name:"right_btn_text_color",kind:"scalar",T:9},{no:4,name:"right_btn_link",kind:"scalar",T:9},{no:5,name:"main_label",kind:"scalar",T:9},{no:6,name:"operator",kind:"scalar",T:9}])}create(e){let t=globalThis.Object.create(this.messagePrototype);return t.rightBtnImg="",t.rightBtnText="",t.rightBtnTextColor="",t.rightBtnLink="",t.mainLabel="",t.operator="",e!==void 0&&p(this,t,e),t}internalBinaryRead(e,t,i,n){let s=n??this.create(),f=e.pos+t;for(;e.pos<f;){let[o,l]=e.tag();switch(o){case 1:s.rightBtnImg=e.string();break;case 2:s.rightBtnText=e.string();break;case 3:s.rightBtnTextColor=e.string();break;case 4:s.rightBtnLink=e.string();break;case 5:s.mainLabel=e.string();break;case 6:s.operator=e.string();break;default:let a=i.readUnknownField;if(a==="throw")throw new globalThis.Error(`Unknown field ${o} (wire type ${l}) for ${this.typeName}`);let c=e.skip(l);a!==!1&&(a===!0?h.onRead:a)(this.typeName,s,o,l,c)}}return s}internalBinaryWrite(e,t,i){e.rightBtnImg!==""&&t.tag(1,u.LengthDelimited).string(e.rightBtnImg),e.rightBtnText!==""&&t.tag(2,u.LengthDelimited).string(e.rightBtnText),e.rightBtnTextColor!==""&&t.tag(3,u.LengthDelimited).string(e.rightBtnTextColor),e.rightBtnLink!==""&&t.tag(4,u.LengthDelimited).string(e.rightBtnLink),e.mainLabel!==""&&t.tag(5,u.LengthDelimited).string(e.mainLabel),e.operator!==""&&t.tag(6,u.LengthDelimited).string(e.operator);let n=i.writeUnknownFields;return n!==!1&&(n==!0?h.onWrite:n)(this.typeName,e,t),t}},Se=new Xn;

function Ci(r){let e=Qe.fromBinary(r);e.dmView?.commandDms.length&&(e.dmView.commandDms.length=0,_(Qe,e))}

function Wi(r){let e=$n.fromBinary(r);e.items=e.items.filter(t=>!["topicList","rcmdOneItem"].includes(t.item.oneofKind)),_($n,e)}

function Pi(r){let e=ot.fromBinary(r),t=e.modes.find(i=>i.name==="teenagers");t?.f5?.f1&&(t.f5.f1=0,_(ot,e))}

function _i(r){let e=In.fromBinary(r),t=e.playArc?.backgroundPlayConf;t&&(!t.isSupport||t.disabled)&&(t.isSupport=!0,t.disabled=!1,t.extraContent=null,_(In,e))}

function $i(r){let e=An.fromBinary(r);e.playArcConf?.arcConf&&(Object.values(e.playArcConf.arcConf).forEach((t,i)=>{[2,9,23,36].includes(i)&&(t.isSupport=!0,t.disabled=!1,t.extraContent=null,t.unsupportScene.length=0)}),_(An,e))}

function ji(r){let e=Zn.fromBinary(r);e?.tipsId&&(delete e.tfToast,delete e.tfPanelCustomized,_(Zn,e))}

function Mi(r){let e=Mn.fromBinary(r);e.show="\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u6216up\u4E3B",delete e.word,delete e.goto,delete e.value,delete e.uri,_(Mn,e)}

function zi(r){let e=Tt.fromBinary(r);delete e.cmConfig,delete e.cmIpad,delete e.label,delete e.reqUser?.elecPlusBtn,e.specialCellNew.length=0,e.cms.length=0,e.relates=e.relates.filter(t=>!t.cm),_(Tt,e)}

function Gi(r){let e=It.fromBinary(r);delete e.cm,_(It,e)}

function Ki(r){let e=Rt.fromBinary(r);e.items=e.items.filter(t=>!t.linktype.endsWith("_ad")),_(Rt,e)}

function Ji(r,e){let t=jt.fromBinary(r);delete t.topicList,e.isIpad||(t.upList?.showLiveNum?t.upList.listSecond.length&&(t.upList.listSecond[t.upList.listSecond.length-1].separator=!0,t.upList.list.unshift(...t.upList.listSecond),t.upList.listSecond.length=0):delete t.upList),t.dynamicList.list=t.dynamicList.list.filter(i=>![ne.ad,ne.live_rcmd].includes(i.cardType)),_(jt,t)}

function qi(r){let e=Kt.fromBinary(r);delete e.dm,_(Kt,e)}

function Xi(r){let e=wn.fromBinary(r);delete e.cm,delete e.reqUser?.elecPlusBtn,e.tab?.tabModule.forEach(t=>{if(t.tab.oneofKind!=="introduction")return;t.tab.introduction.modules=t.tab.introduction.modules.filter(s=>s.type!==ie.SPECIALTAG);let i=t.tab.introduction.modules.find(s=>s.type===ie.RELATED_RECOMMEND);i?.data.oneofKind==="relates"&&(i.data.relates.cards=i.data.relates.cards.filter(s=>![re.GAME,re.CM_TYPE,re.LIVE].includes(s.relateCardType)));let n=t.tab.introduction.modules.find(s=>s.type===ie.UGC_HEADLINE);n?.data.oneofKind==="headLine"&&delete n.data.headLine.label}),_(wn,e)}

var Or=/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/,we=class{constructor(e=""){if(this.name="URL v1.0.2",!e)throw new Error("Empty URL");this.parse(e)}parse(e){let{scheme:t,host:i,path:n="",params:s}=e.match(Or)?.groups??{};this.scheme=t,this.host=i,this.path=n,this.params=s?s.split("&").reduce((f,o)=>{let[l,a]=o.split("=");return f[l]=a,f},{}):{}}toString(){let e=this.scheme+"://"+this.host+"/"+this.path;return this.params&&(e+="?"+Object.entries(this.params).reduce((t,[i,n],s)=>t+(s?"&":"")+i+"="+n,"")),e}};

var be=H.getInstance("Bilibili Helper",{debug:!1}),Rr=be.request.url,Zi=be.request.headers,Hn=be.response.bodyBytes;Hn||be.exit();

var Lr=new we(Rr).path,
    Fr=typeof $utils=="object"&&typeof $utils?.ungzip=="function"?$utils.ungzip:mi,
    Ar=Hn.slice(0,5),
    Yn=Hn.slice(5);
    Ar[0]&&(Yn=Fr(Yn));

var Dr=Zi["User-Agent"]||Zi["user-agent"],

    Vr={isIpad:Dr?.includes("bili-hd")},

    Yi={
        "v1.DM/DmView":Ci,
        "v1.Teenagers/ModeStatus":Pi,
        "v1.Reply/MainList":Gi,
        "v1.Search/SearchAll":Ki,
        "v2.Dynamic/DynAll":Ji,
        "viewunite.v1.View/View":Xi,
        "view.v1.View/ViewProgress":qi,
        "view.v1.View/View":zi,
        "view.v1.View/TFInfo":ji,
        "playurl.v1.PlayURL/PlayView":_i,
        "playerunite.v1.Player/PlayViewUnite":$i,
        "v1.Popular/Index":Wi,
        "interface.v1.Search/DefaultWords":Mi
    };

    for(let r in Yi)
        if(Lr.endsWith(r)){
            Yi[r](Yn,Vr);break
        }be.exit();

})();
