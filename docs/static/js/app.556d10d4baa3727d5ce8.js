webpackJsonp([0],{"0gqF":function(t,e,i){"use strict";var a=i("qYbc"),n=i("8OJl"),s=i("VU/8"),o=s(a.a,n.a,!1,null,null,null);e.a=o.exports},"154F":function(t,e,i){"use strict";function a(t){i("XExH")}var n=i("s6yP"),s=i("7kg/"),o=i("VU/8"),r=a,l=o(n.a,s.a,!1,r,"data-v-c9c92826",null);e.a=l.exports},"4T0B":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("div",{staticClass:"container main"},[i("div",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column",attrs:{id:"input-info"}},[i("h3",{staticClass:"subtitle"},[t._v("Input Information")]),t._v(" "),i("inputInformation",{attrs:{fullName:t.fullName,title:t.title,mobilePhone:t.mobilePhone,phone:t.phone,email:t.email,mobilePhoneSwitch:t.mobilePhoneSwitch},on:{"update:fullName":function(e){t.fullName=e},"update:title":function(e){t.title=e},"update:mobilePhone":function(e){t.mobilePhone=e},"update:phone":function(e){t.phone=e},"update:email":function(e){t.email=e},"update:mobilePhoneSwitch":function(e){t.mobilePhoneSwitch=e},changeTitle:function(e){t.updateTitle(e)}}}),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:!t.mobilePhoneSwitch,expression:"!mobilePhoneSwitch"}],staticClass:"button is-success",attrs:{type:"submit",disabled:!t.isValid},on:{click:function(e){t.toggleShow,t.$modal.show("output")}}},[t._v("\n        Copy Signature\n    ")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:t.mobilePhoneSwitch,expression:"mobilePhoneSwitch"}],staticClass:"button is-success",attrs:{type:"submit",disabled:!t.isValidAss},on:{click:function(e){t.toggleShow,t.$modal.show("output")}}},[t._v("\n        Copy Signature\n    ")]),t._v(" "),i("button",{staticClass:"button is-success",attrs:{type:"submit",disabled:!t.isReset},on:{click:function(e){e.preventDefault(),t.reset(e)}}},[t._v("\n        Reset\n    ")])],1),t._v(" "),i("div",{staticClass:"column"},[i("h3",{staticClass:"subtitle"},[t._v("Output Signature")]),t._v(" "),i("outputSignature",{attrs:{fullName:t.fullName,title:t.title,mobilePhone:t.mobilePhone,phone:t.phone,email:t.email,mobilePhoneSwitch:t.mobilePhoneSwitch},on:{"update:fullName":function(e){t.fullName=e},"update:title":function(e){t.title=e},"update:mobilePhone":function(e){t.mobilePhone=e},"update:phone":function(e){t.phone=e},"update:email":function(e){t.email=e},"update:mobilePhoneSwitch":function(e){t.mobilePhoneSwitch=e},changeTitle:function(e){t.updateTitle(e)}}})],1)])]),t._v(" "),i("modal",{attrs:{name:"output",height:500}},[i("div",{staticClass:"sign-box level-item has-text-centered"},[i("div",{staticClass:"output-btn"},[i("p",{staticClass:"field"},[i("a",{staticClass:"button is-small",on:{click:function(e){t.$modal.hide("output")}}},[i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fa fa-times"})])])])]),t._v(" "),i("outputSignature",{attrs:{fullName:t.fullName,title:t.title,mobilePhone:t.mobilePhone,phone:t.phone,email:t.email,mobilePhoneSwitch:t.mobilePhoneSwitch},on:{"update:fullName":function(e){t.fullName=e},"update:title":function(e){t.title=e},"update:mobilePhone":function(e){t.mobilePhone=e},"update:phone":function(e){t.phone=e},"update:email":function(e){t.email=e},"update:mobilePhoneSwitch":function(e){t.mobilePhoneSwitch=e},changeTitle:function(e){t.updateTitle(e)}}})],1),t._v(" "),i("div",{staticClass:"gif-box level-item has-text-centered"},[i("ul",[i("li",[t._v("1. Place cursor at the top-left corner of Healthy Basement Systems logo and click & drag to bottom-right corner of the disclaimer")]),t._v(" "),i("li",[t._v("2. Paste into Outlook signatures in preferences panel")]),t._v(" "),i("li",[t._v("3. Adjust logo size if needed")])]),t._v(" "),i("img",{attrs:{src:"http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/sign-copy3.gif",alt:""}})])])],1),t._v(" "),t._m(1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"hero is-primary"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"th-logo has-text-centered"},[i("img",{staticStyle:{width:"250px"},attrs:{src:"https://cdn.treehouseinternetgroup.com/cms_images/48/LJHealthyBS-Logo-Services-RGB.png",alt:""}})]),t._v(" "),i("h1",{staticClass:"sub-text title has-text-centered"},[i("p",[t._v("Signature Generator")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{attrs:{id:"footer"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"content has-text-centered"},[i("p",[t._v("\n                    ©2020 Healthy Basement Systems\n                ")])])])])}],s={render:a,staticRenderFns:n};e.a=s},"7kg/":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",[i("table",{staticStyle:{background:"none","border-width":"0px",border:"0px",margin:"0",padding:"0"},attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[i("tr",[i("td",{staticStyle:{"padding-top":"0","padding-bottom":"0","padding-left":"0","padding-right":"7px","border-top":"0","border-bottom":"0: border-left: 0"},attrs:{valign:"top"}},[i("a",{attrs:{href:"https://www.cnlive18.com/"}},[i("img",{staticStyle:{width:"175px","max-width":"175px !175important",height:"96px","max-height":"96px !important"},attrs:{width:"175",height:"96",id:"preview-image-url",src:"http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/1583/CNLive_Convention_logo_new4.jpg",name:"preview-image-url"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"padding-top":"5px"},attrs:{colspan:"2"}},[i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.facebook.com/basementsystemsinc",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"20",height:"20",src:"http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/cnlive-fb.png"}})]),t._v("  "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://twitter.com/basementsystems",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"20",height:"20",src:"http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/cnlive-twitter.png"}})]),t._v("  "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.instagram.com/contractor.nation/",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"20",height:"20",src:"http://d6449bb3dc657045bfc9-290115cc0d6de62a29c33db202ae565c.r80.cf1.rackcdn.com/687/cnlive-instagram.png"}})])])])])])])])])}],s={render:a,staticRenderFns:n};e.a=s},"8OJl":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",[i("g",{attrs:{fill:t.iconColorOne}},[i("path",{staticClass:"cn-orange",attrs:{d:"M24.1,59.8c-3.1,0-5.8-0.3-8-1c-2.2-0.7-4-1.6-5.4-2.8c-1.4-1.2-2.4-2.6-3-4.2c-0.6-1.6-0.9-3.4-0.9-5.4V17.7\n      c0-2,0.3-3.8,0.9-5.4c0.6-1.6,1.6-3,3-4.2C12,6.9,13.8,6,16,5.3s4.9-1,8-1h44.7v8.2H24.1c-4.6,0-6.9,1.7-6.9,5.1v28.8\n      c0,3.4,2.3,5.1,6.9,5.1h44.7v8.2H24.1z"}}),t._v(" "),i("path",{staticClass:"cn-orange",attrs:{d:"M145.8,59.8L86.7,16.6v43.2h-9.1V4.3h9.1l55.2,41.2V4.3h9.1v55.4H145.8z"}})]),t._v(" "),i("g",{attrs:{fill:t.iconColorTwo}},[i("path",{staticClass:"cn-white",attrs:{d:"M161.2,59.8V4.3h10.6v47.3h45v8.2H161.2z"}}),t._v(" "),i("path",{staticClass:"cn-white",attrs:{d:"M224.4,59.8V4.3h10.5v55.4H224.4z"}}),t._v(" "),i("path",{staticClass:"cn-white",attrs:{d:"M277.2,59.8L240.4,4.3h11.9l29,44.7l28.7-44.7h11.6l-36.6,55.4H277.2z"}}),t._v(" "),i("path",{staticClass:"cn-white",attrs:{d:"M326.6,59.8V4.3h57v8.2h-46.5v13.9h44.2v8.2h-44.2v17h46.5v8.2H326.6z"}})])])},n=[],s={render:a,staticRenderFns:n};e.a=s},"8j5l":function(t,e,i){"use strict";function a(t){i("QefY")}var n=i("rhSM"),s=i("aGW0"),o=i("VU/8"),r=a,l=o(n.a,s.a,!1,r,"data-v-2e1a3bda",null);e.a=l.exports},"9V+V":function(t,e,i){"use strict";function a(t){i("JA2R")}var n=i("vPwH"),s=i("TQYu"),o=i("VU/8"),r=a,l=o(n.a,s.a,!1,r,"data-v-2d0656f1",null);e.a=l.exports},Imx1:function(t,e,i){"use strict";e.a={props:{iconName:{type:String,default:"logo"},width:{type:[Number,String],default:350}}}},JA2R:function(t,e){},M93x:function(t,e,i){"use strict";function a(t){i("c4c3")}var n=i("xJD8"),s=i("4T0B"),o=i("VU/8"),r=a,l=o(n.a,s.a,!1,r,"data-v-7a68e301",null);e.a=l.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("M93x"),s=i("9V+V"),o=i("8j5l"),r=i("154F"),l=i("sf9a"),c=i("0gqF"),h=i("rifk"),d=i.n(h);a.a.use(d.a),a.a.config.productionTip=!1,a.a.component("inputInformation",s.a),a.a.component("outputSignature",o.a),a.a.component("outputBadge",r.a),a.a.component("IconBase",l.a),a.a.component("cnliveLogo",c.a),new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},QefY:function(t,e){},TQYu:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",[i("form",{on:{submit:function(e){e.preventDefault(),t.validateBeforeSubmit(e)}}},[i("div",{staticClass:"field"},[i("div",{staticClass:"control has-icons-left has-icons-right"},[i("input",{staticClass:"input",attrs:{onblur:"if (this.value == '') {this.value = 'Full Name';}",onfocus:"if (this.value == 'Full Name') {this.value = '';}",type:"text"},domProps:{value:t.fullName},on:{input:function(e){t.$emit("update:fullName",e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"control has-icons-left has-icons-right"},[i("input",{staticClass:"input",attrs:{onblur:"if (this.value == '') {this.value = 'Title';}",onfocus:"if (this.value == 'Title') {this.value = '';}",type:"text"},domProps:{value:t.title},on:{input:function(e){t.$emit("update:title",e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.mobilePhoneSwitch,expression:"!mobilePhoneSwitch"}]}),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"control has-icons-left has-icons-right"},[i("input",{staticClass:"input",attrs:{onblur:"if (this.value == '') {this.value = 'Office';}",onfocus:"if (this.value == 'Office') {this.value = '';}",type:"text"},domProps:{value:t.phone},on:{input:function(e){t.$emit("update:phone",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.mobilePhoneSwitch,expression:"mobilePhoneSwitch"}]},[i("div",{staticClass:"field",staticStyle:{"margin-bottom":".75rem"}},[i("div",{staticClass:"control has-icons-left has-icons-right"},[i("input",{staticClass:"input",attrs:{onblur:"if (this.value == '') {this.value = 'Mobile';}",onfocus:"if (this.value == 'Mobile') {this.value = '';}",type:"text"},domProps:{value:t.mobilePhone},on:{input:function(e){t.$emit("update:mobilePhone",e.target.value)}}}),t._v(" "),t._m(3)])])]),t._v(" "),i("div",{staticClass:"field"},[i("div",{staticClass:"control has-icons-left has-icons-right"},[i("input",{staticClass:"input",attrs:{onblur:"if (this.value == '') {this.value = 'Email';}",onfocus:"if (this.value == 'Email') {this.value = '';}",type:"text"},domProps:{value:t.email},on:{input:function(e){t.$emit("update:email",e.target.value)}}}),t._v(" "),t._m(4)])])])]),t._v(" "),i("button",{on:{click:t.changeTitle}},[t._v("Add/Remove: Mobile Phone")])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fa fa-user"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fa fa-id-badge"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fa fa-phone"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fa fa-mobile fa-lg"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon is-small is-left"},[i("i",{staticClass:"fa fa-envelope"})])}],s={render:a,staticRenderFns:n};e.a=s},XExH:function(t,e){},aGW0:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",[i("table",{staticStyle:{background:"none","border-width":"0px",border:"0px",margin:"0",padding:"0"},attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[i("tr",[i("td",{staticStyle:{"padding-top":"0","padding-bottom":"0","padding-left":"0","padding-right":"7px","border-top":"0","border-bottom":"0: border-left: 0"},attrs:{valign:"top"}},[i("a",{attrs:{href:"https://www.healthybasementsystems.com/",target:"_blank"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.mobilePhoneSwitch,expression:"mobilePhoneSwitch"}],staticStyle:{width:"220px","max-width":"220px !important",height:"139px","max-height":"139px !important","margin-top":"5px"},attrs:{width:"220",height:"139",id:"preview-image-url",src:"https://cdn.treehouseinternetgroup.com/cms_images/48/healthy-signature_logo-bar.png",name:"preview-image-url"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.mobilePhoneSwitch,expression:"!mobilePhoneSwitch"}],staticStyle:{width:"190px","max-width":"190px !important",height:"121px","max-height":"121px !important","margin-top":"5px"},attrs:{width:"190",height:"121",id:"preview-image-url",src:"https://cdn.treehouseinternetgroup.com/cms_images/48/healthy-signature_logo-bar.png",name:"preview-image-url"}})])]),t._v(" "),i("td",{staticStyle:{"padding-top":"0","padding-bottom":"0","padding-left":"5px","padding-right":"0"}},[i("table",{staticStyle:{background:"none","border-width":"0px",border:"0px",margin:"0",padding:"0"},attrs:{cellpadding:"0",cellspacing:"0",border:"0"}},[i("tr",[i("td",{staticStyle:{"padding-bottom":"5px",color:"#013d63","font-size":"18px","font-family":"Arial, Helvetica, sans-serif"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.fullName)+"\n                ")])]),t._v(" "),i("tr",[i("td",{staticStyle:{color:"#333333","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{colspan:"2"}},[i("em",[t._v(t._s(t.title))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.mobilePhoneSwitch,expression:"!mobilePhoneSwitch"}]}),t._v(" "),i("tr",[i("td",{staticStyle:{"vertical-align":"top",width:"20px",color:"#013d63","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{width:"20",valign:"top"}},[t._v("\n                Office:\n                ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"top",color:"#333333","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{valign:"top"}},[t._v("\n                "+t._s(t.phone)+"\n                ")])]),t._v(" "),i("tr",{directives:[{name:"show",rawName:"v-show",value:t.mobilePhoneSwitch,expression:"mobilePhoneSwitch"}]},[i("td",{staticStyle:{"vertical-align":"top",width:"20px",color:"#013d63","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{width:"20",valign:"top"}},[t._v("\n                Mobile:\n                ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"top",color:"#333333","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{valign:"top"}},[t._v("\n                "+t._s(t.mobilePhone)+"\n                ")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"vertical-align":"top",width:"20px",color:"#013d63","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{width:"20",valign:"top"}},[t._v("\n                  Email:\n                  ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"top",color:"#333333","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{valign:"top"}},[i("a",{staticStyle:{color:"#333333","text-decoration":"none","font-weight":"normal","font-size":"14px"},attrs:{href:"mailto:"+this.email}},[t._v(t._s(t.email))]),t._v("\n                      \n                  ")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])]),t._v(" "),t._m(2),t._v(" "),i("p",{staticStyle:{"font-size":"10px",color:"#000","line-height":"12px","text-align":"left",width:"450px"},attrs:{width:"450"}},[t._v("This message contains confidential information and is intended only for the intended recipients. If you are not an intended recipient you should not disseminate, distribute or copy this e-mail. Please notify us immediately by e-mail if you have received this e-mail by mistake and delete this e-mail from your system. E-mail transmission cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. Therefore we do not accept liability for any errors or omissions in the contents of this message, which arise as a result of e-mail transmission. If verification is required please request a hard-copy version.")])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{"vertical-align":"top",width:"20px",color:"#013d63","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{width:"20",valign:"top"}},[t._v("\n                Web:\n                ")]),t._v(" "),i("td",{staticStyle:{"vertical-align":"top",color:"#333333","font-size":"14px","font-family":"Arial, Helvetica, sans-serif"},attrs:{valign:"top"}},[i("a",{staticStyle:{color:"#333333","text-decoration":"none","font-weight":"normal","font-size":"14px"},attrs:{href:"https://www.healthybasementsystems.com/",target:"_blank"}},[t._v("\n                  healthybasementsystems.com")]),t._v("\n                    \n                ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{"padding-top":"5px"},attrs:{colspan:"2"}},[i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.facebook.com/healthybasementsystems",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"25",height:"25",src:"https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/2822/icon-facebook_30x30-2.png"}})]),t._v(" "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.linkedin.com/company/larry-janeskys-healthy-basement-systems",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"25",height:"25",src:"https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/2822/icon-linkedin_30x30-2.png"}})]),t._v(" "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.instagram.com/healthybasementsystems/",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"25",height:"25",src:"https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/2822/icon-instagram_30x30.png"}})]),t._v(" "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.youtube.com/channel/UCgmszJizjhPE8jwcUvNvzew",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"25",height:"25",src:"https://cdn.treehouseinternetgroup.com/cms_images/48/sign-youtube-icon.png"}})]),t._v(" "),i("a",{staticStyle:{"border-width":"0px",border:"0px","text-decoration":"none"},attrs:{href:"https://www.tiktok.com/@healthybasementsystems?lang=en",target:"_blank"}},[i("img",{staticStyle:{border:"none",width:"25px","max-width":"25px !important",height:"25px","max-height":"25px !important"},attrs:{width:"25",height:"25",src:"https://cdn.treehouseinternetgroup.com/cms_images/48/tiktok-icon.png"}})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{staticStyle:{"font-weight":"bold",color:"#000"},attrs:{href:"https://www.healthybasementsystems.com/refer-give-to-get.html"}},[t._v("We "),i("i",[t._v("LOVE Referrals")]),i("img",{staticStyle:{border:"none",width:"20px","max-width":"20px !important",height:"20px","max-height":"20px !important"},attrs:{width:"20",height:"20",src:"https://cdn.treehouseinternetgroup.com/cms_images/48/cursor-click.png"}})])])}],s={render:a,staticRenderFns:n};e.a=s},c4c3:function(t,e){},deuE:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,viewBox:"0 0 391 65","aria-labelledby":t.iconName,role:"presentation"}},[i("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),t._v(" "),t._t("default")],2)},n=[],s={render:a,staticRenderFns:n};e.a=s},goAt:function(t,e){},qYbc:function(t,e,i){"use strict";e.a={props:{iconColorOne:{type:String,default:"#FF7F30"},iconColorTwo:{type:String,default:"#FFF"}}}},rhSM:function(t,e,i){"use strict";e.a={name:"outputSignature",props:{fullName:{type:String,required:!0},title:{type:String,required:!0},mobilePhone:{type:String,required:!0},phone:{type:String,required:!0},email:{type:String,required:!0},mobilePhoneSwitch:{type:Boolean,required:!0}}}},s6yP:function(t,e,i){"use strict";e.a={name:"outputBadge"}},sf9a:function(t,e,i){"use strict";function a(t){i("goAt")}var n=i("Imx1"),s=i("deuE"),o=i("VU/8"),r=a,l=o(n.a,s.a,!1,r,"data-v-4fd21beb",null);e.a=l.exports},vPwH:function(t,e,i){"use strict";e.a={name:"inputInformation",props:{fullName:{type:String,required:!0},title:{type:String,required:!0},mobilePhone:{type:String,required:!0},phone:{type:String,required:!0},email:{type:String,required:!0},mobilePhoneSwitch:{type:Boolean,required:!0}},methods:{changeTitle:function(){this.$emit("changeTitle",this.mobilePhoneSwitch=!this.mobilePhoneSwitch)}}}},xJD8:function(t,e,i){"use strict";e.a={name:"app",data:function(){return{fullName:"Full Name",title:"Title",mobilePhone:"Mobile",phone:"Office",email:"Email",isShowing:!1,mobilePhoneSwitch:!1}},computed:{isValid:function(){return"Full Name"!==this.fullName&&"Title"!==this.title&&"Office"!==this.phone&&"Email"!==this.email},isValidAss:function(){return"Full Name"!==this.fullName&&"Title"!==this.title&&"Mobile"!==this.mobilePhone&&"Office"!==this.phone&&"Email"!==this.email},isReset:function(){return"Full Name"!==this.fullName||"Title"!==this.title||"Mobile"!==this.mobilePhone||"Office"!==this.phone||"Email"!==this.email}},methods:{toggleShow:function(){this.isShowing=!this.isShowing},show:function(){this.$modal.show("output")},hide:function(){this.$modal.hide("output")},reset:function(){this.fullName="Full Name",this.title="Title",this.mobilePhone="Mobile",this.phone="Office",this.email="Email"},updateTitle:function(t){this.mobilePhoneSwitch=t}}}}},["NHnr"]);
//# sourceMappingURL=app.556d10d4baa3727d5ce8.js.map