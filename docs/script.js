(()=>{"use strict";(()=>{const e=Vue;var t=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("div",[r("form",{attrs:{method:"post",action:"#",enctype:"multipart/form-data"}},[r("div",{on:{dragover:e.dragover,dragleave:e.dragleave,drop:e.drop,change:e.onChange}},[r("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",name:"files[]",id:"file",multiple:""}}),e._v(" "),e._m(1),e._v(" file "),r("em",[e._v("or")]),e._v(" drop it here.\n          ")])])]),e._v(" "),r("div",{staticClass:"result"},[r("div",[this.filelist.length?r("ul",{},e._l(e.filelist,(function(t){return r("li",{key:t},[e._v("\n              see console.log "),r("span",{domProps:{innerHTML:e._s(t.name)}}),e._v(" "),r("button",{attrs:{type:"button",title:"Remove file"},on:{click:function(r){e.remove(e.filelist.indexOf(t))}}},[e._v("remove")])])})),0):e._e()])])])]),e._v(" "),r("div",{staticClass:"footer"},[e._v("\n    ...\n  ")])])};t._withStripped=!0;var r=function(e,t,r,a,s,n,i,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bar"},[r("div",[r("h1",[e._v("ttf"),r("span",[e._v("Meta")])])]),e._v(" "),r("div",[e._v("\n      ...\n    ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"file"}},[e._v("Choose "),r("span",[e._v("fonts")])])}],c._compiled=!0),l)if(c.functional){c._injectStyles=l;var f=c.render;c.render=function(e,t){return l.call(t),f(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}({data:()=>({filelist:[]}),components:{},methods:{onChange(){this.filelist=[...this.$refs.file.files];for(const t of this.filelist){var e=new FileReader;e.onload=function(e){var t=e.target.result,r=new DataView(t,0,t.byteLength);window.ttfMeta.promise(r).then((e=>console.log(e))).catch((e=>console.log("error",e)))},e.readAsArrayBuffer(t)}},remove(e){this.filelist.splice(e,1)},dragover(e){e.preventDefault(),e.currentTarget.classList.contains("bg-green-300")||(e.currentTarget.classList.remove("bg-gray-100"),e.currentTarget.classList.add("bg-green-300"))},dragleave(e){e.currentTarget.classList.add("bg-gray-100"),e.currentTarget.classList.remove("bg-green-300")},drop(e){e.preventDefault(),this.$refs.file.files=e.dataTransfer.files,this.onChange(),e.currentTarget.classList.add("bg-gray-100"),e.currentTarget.classList.remove("bg-green-300")},formatBytes(e,t=2){if(0===e)return"0 Byte";const r=0>t?0:t,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(r))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}}},t);r.options.__file="assets/script/layout.vue";const a=r.exports;e.config.productionTip=!0,e.config.devtools=!0,e.use(VueRouter),new e({router:new VueRouter({mode:"history",routes:[]}),data:{ready:!1,loading:!0,message:null,error:null},methods:{metadata(){}},watch:{},render:e=>e(a)}).$mount("#app")})()})();