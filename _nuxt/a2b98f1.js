(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,6,12],{294:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("9bbe1f80",content,!0,{sourceMap:!1})},295:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("1b9c5a20",content,!0,{sourceMap:!1})},296:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("0446e900",content,!0,{sourceMap:!1})},305:function(t,e,n){"use strict";n(294)},306:function(t,e,n){var o=n(39),r=n(307),c=n(308),l=o(!1),d=r(c);l.push([t.i,"#mockup{height:33vh;margin-top:4rem}#open_demo{z-index:1;position:relative}#waves{display:none;height:25vh;width:100vw;background-color:var(--background-color-accent);-webkit-mask-image:url("+d+");-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:cover;mask-image:url("+d+");mask-position:center;mask-size:cover;mask-repeat:no-repeat;margin-top:-13rem}#features{display:flex;flex-wrap:wrap;align-content:flex-start;z-index:1;margin-top:1rem}#features>*{margin:.25rem;background:#fff;color:var(--background-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:35px;font-size:1rem;border-radius:50px;font-weight:700;padding:5px 8px;line-height:1.5}#hero_container{padding-bottom:5rem;background:var(--background-color);color:#fff}#hero,#hero_container{height:100%;display:flex;flex-direction:column}#hero{flex-grow:1;text-align:center;margin-top:9rem}#hero_container #nav .link{color:#fff}@media screen and (max-width:600px){#hero{padding-top:0}#waves{visibility:hidden}#features>*{width:160px;font-size:.9rem;height:27px;padding:3px 5px}}",""]),t.exports=l},307:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},308:function(t,e,n){t.exports=n.p+"img/waves.45d7c7f.svg"},309:function(t,e,n){"use strict";n(295)},310:function(t,e,n){var o=n(39)(!1);o.push([t.i,"#announcement{padding:5rem 2rem 0}",""]),t.exports=o},311:function(t,e,n){t.exports=n.p+"img/mindmap.3287e19.svg"},312:function(t,e,n){t.exports=n.p+"img/version_control.bfad7ea.svg"},313:function(t,e,n){t.exports=n.p+"img/configurable.e1a82bb.svg"},314:function(t,e,n){t.exports=n.p+"img/selfhostable.d24fa10.svg"},315:function(t,e,n){t.exports=n.p+"img/decentralized.bb6f296.svg"},316:function(t,e,n){t.exports=n.p+"img/foss.f1df953.svg"},317:function(t,e,n){t.exports=n.p+"img/encrypted.01e61d0.svg"},318:function(t,e,n){t.exports=n.p+"img/security.ac610af.svg"},319:function(t,e,n){t.exports=n.p+"img/privacy.f6c553d.svg"},320:function(t,e,n){t.exports=n.p+"img/extendable.3b91128.svg"},321:function(t,e,n){t.exports=n.p+"img/themeable.dbc5dc8.svg"},322:function(t,e,n){t.exports=n.p+"img/discord-compatible.8eea4c2.svg"},323:function(t,e,n){t.exports=n.p+"img/faq.00df169.svg"},324:function(t,e,n){"use strict";n(296)},325:function(t,e,n){var o=n(39)(!1);o.push([t.i,".container-feature[data-v-6d3431ac]{margin:7rem auto}#contribute_text[data-v-6d3431ac]{padding-right:9rem}@media screen and (max-width:600px){#contribute_text[data-v-6d3431ac]{padding-right:0}.container-feature img[data-v-6d3431ac]{margin-top:2rem}#faq[data-v-6d3431ac]{text-align:justify}#button-docs[data-v-6d3431ac]{margin-bottom:.5rem}}#button-docs[data-v-6d3431ac]{margin-right:.5rem}ul[data-v-6d3431ac]{line-height:1.5;margin-top:20px;margin-bottom:20px}ul>li[data-v-6d3431ac]{margin-top:10px;margin-bottom:10px}",""]),t.exports=o},332:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(50),n(16),n(93),{data:function(){return{stars:0}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/fosscord/fosscord");case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,t.stars=n.stargazers_count;case 7:case"end":return e.stop()}}),e)})))()}))}),c=r,l=(n(309),n(15)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"announcement"}},[n("div",{staticClass:"container px-xl-0"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-xl-12 col-lg-8 col-md-9 mt-4 mt-md-0 text-center",attrs:{id:"section_content"}},[n("h2",{staticClass:"small"},[t._v("\n          Thanks for "),n("span",{staticClass:"fg-fosscord"},[t._v(t._s(t.stars))]),t._v(" Github\n          stars!\n        ")]),t._v(" "),n("div",{staticClass:"description"},[n("div",[t._v("\n            Fosscord has reached "+t._s(t.stars)+" stars on Github in such a short\n            time. "),n("br"),t._v("Thanks to you.\n          ")])]),t._v(" "),n("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{href:"https://github.com/fosscord/fosscord",target:"_blank",id:"button_"}},[t._v("Github")])])])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);n(305);var o=n(15),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"hero_container"}},[n("section",{staticClass:"container",attrs:{id:"hero"}},[n("h2",{attrs:{id:"main_header"}},[t._v("\n        Fosscord\n      ")]),t._v(" "),n("span",{attrs:{id:"main_header_sub"}},[t._v("For better and secure communication")]),t._v(" "),n("div",{staticStyle:{"margin-top":"2rem"}},[n("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{id:"open_demo",href:"https://dev.fosscord.com"}},[t._v("Open Demo")])])])]),t._v(" "),n("div",{attrs:{id:"waves"}})])}],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          Fosscord is free and open source software compatible with\n          "),n("a",{attrs:{href:"https://discord.com"}},[t._v("Discord")]),t._v(". It's a chat, voice and\n          video platform similar to Slack and Rocket.chat.\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6 col-md-12"},[e("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(311)}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature",attrs:{id:"contribute"}},[o("div",{staticClass:"row",attrs:{id:"contribution_container"}},[o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(312)}})]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-10",attrs:{id:"contribute_text"}},[o("h2",{staticClass:"small"},[t._v("Contribute now!")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          Currently fosscord is still in development and we can't say when we\n          will be able to release fosscord completely. In total,\n          "),o("span",{staticClass:"fg-fosscord"},[t._v("20")]),t._v(" developers are working on this\n          project. Feel free to check out the\n          "),o("a",{attrs:{href:"https://docs.fosscord.com"}},[t._v("documentation")]),t._v(" or the\n          "),o("a",{attrs:{href:"https://github.com/fosscord"}},[t._v("GitHub repositories")]),t._v(".\n        ")]),t._v(" "),o("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{href:"https://github.com/fosscord/fosscord/issues/10",id:"button_"}},[t._v("Contribute")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Configurable")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe that anyone should be able to configure their own\n          instance exactly to their needs. That's why the instance admin can\n          change nearly every default value in the settings without changing\n          the source code.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(313)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row left"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Selfhostable")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe that anyone should have the option to host their own\n          instance without any restrictions. That’s why we provide an easy\n          "),o("a",{attrs:{href:"https://github.com/fosscord/fosscord-server/releases"}},[t._v("one-click server installer")]),t._v("\n          to have full control over the instance and its data.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(314)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Decentralized")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe that a central approach leads to a single point of\n          failure and abuse of power. That’s why Fosscord is decentralized and\n          the client is able to connect to multiple servers simultaneously.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(315)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row left"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Free Open Source")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe that the best way to make software is to make it follow\n          GPL principles and let everyone contribute to it. Additionally we\n          represent a libre position so that anyone can do whatever they want\n          with Fosscord as long as you publish all changes under the\n          "),o("a",{attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.html"}},[t._v("GNU Affero General Public License v3.0")]),t._v(".\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(316)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Encrypted")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe that communication should be private and no third party\n          should be able to intercept and read the content of it. That’s why\n          Fosscord is end-to-end encrypted based on the concept “don’t trust\n          the server”. (Currently work in progress)\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(317)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row left"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Security")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe publicly audited and hosted FOSS software is the future\n          in terms of security. That's why we choose this approach to create a\n          transparent foundation between the user and the project.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(318)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Privacy")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe data privacy is a human right, therefore the user needs\n          to opt into data collection and analytics via the client settings\n          and it's disabled by default.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(319)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row left"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Extendable")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe anyone should be able to extend their clients with\n          features that we currently do not provide. That’s why we integrate a\n          secure and cross-platform plugin system.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(320)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Themeable")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v("\n          We believe anyone should be able to adjust the look and feel of\n          their client. That’s why we integrate a cross-platform theme system.\n          Additionally we provide a design editor for easier creation of\n          client themes.\n        ")])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(321)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature"},[o("div",{staticClass:"row left"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("Discord compatible")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[t._v('\n          We believe that to create a successful communication platform that\n          users will migrate to you either need a large user base or a unique\n          selling point. We have both features by customizing the client\n          however you like and being backwards compatible to discord, which\n          means you can use the client to communicate with all friends who are\n          "still" using discord.com and also connect to other Fosscord\n          servers.\n        ')])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(322)}})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container px-xl-0 container-feature",attrs:{id:"faq"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-10"},[o("h2",{staticClass:"small"},[t._v("FAQ")]),t._v(" "),o("div",{staticClass:"mt-25 mb-35 f-22 color-heading text-adaptive description"},[o("h4",{staticClass:"white"},[t._v("Why did you develop Fosscord?")]),t._v(" "),o("br"),t._v("\n          Personal opinion:\n          "),o("ul",[o("li",[t._v("\n              Discord abuses their power and censors things they don't like\n            ")]),t._v(" "),o("li",[t._v("Discord prohibits client modifications")]),t._v(" "),o("li",[t._v("Discord being slow in development of new features")]),t._v(" "),o("li",[t._v("Discord not listening to their community")]),t._v(" "),o("li",[t._v("\n              Free and open source version that you can have a look, trust and\n              adjust\n            ")]),t._v(" "),o("li",[t._v("\n              Self host your own server to have complete control over it and\n              its data\n            ")]),t._v(" "),o("li",[t._v("\n              Add additional features like end to end encryption and a secure\n              and cross platform plugin/theme system\n            ")]),t._v(" "),o("li",[t._v("\n              Discord making use of Electron and other bloated RAM hungry\n              technologies\n            ")])]),t._v(" "),o("h4",{staticClass:"white"},[t._v("How do you make money?")]),t._v(" "),o("ul",[o("li",[t._v("\n              We don’t, we are volunteers providing a better and secure way of\n              communication and are supported by donations.\n            ")])])])]),t._v(" "),o("div",{staticClass:"col-lg-5 col-md-12"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(323)}})])])])}],r=(n(324),n(15)),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container px-xl-0 container-feature"},[n("div",{staticClass:"row",attrs:{id:"concept_main_container"}},[n("div",{staticClass:"col-lg-6 col-md-10",attrs:{id:"concept_second_container"}},[n("h2",{staticClass:"small"},[t._v("About Fosscord")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"mb-30 mb-md-0 d-sm-flex align-items-center buttons"},[n("a",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{href:"https://docs.fosscord.com/",id:"button-docs"}},[t._v("Documentation")]),t._v(" "),n("NuxtLink",{staticClass:"btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1",attrs:{to:"/about/",id:"button_ button-readMore"}},[t._v("Read More")])],1)]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])}),o,!1,null,"6d3431ac",null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var o={},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"full_size"},[n("hero"),t._v(" "),n("announcement"),t._v(" "),n("sections")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Hero:n(334).default,Announcement:n(332).default,Sections:n(335).default})}}]);