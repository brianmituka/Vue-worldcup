webpackJsonp([1],{"7zck":function(t,e){},Kk2W:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("3EgV"),o=s.n(n),i=(s("7zck"),s("IHMs")),r=s.n(i),l=s("zL8q"),c=s.n(l),u=(s("tvR6"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var d=s("VU/8")({name:"App"},u,!1,function(t){s("Kk2W")},null,null).exports,v=s("/ocq"),_=s("mtWM"),h=s.n(_),m={name:"Home",data:function(){return{todaysMatches:[],currentMatches:[]}},methods:{getTodaysMatches:function(){var t=this;h.a.get("http://worldcup.sfg.io/matches/today").then(function(e){console.log(e.data),e.data.forEach(function(e){t.todaysMatches.push(e),console.log(t.todaysMatches)})}).catch(function(t){console.log(t)})},getResults:function(){h.a.get("http://worldcup.sfg.io//teams/results").then(function(t){console.log("RESULTS",t)}).catch(function(t){})}},beforeMount:function(){this.getTodaysMatches(),this.getResults()}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",[s("v-toolbar-side-icon",{attrs:{to:"/",color:"`primary"}}),t._v(" "),s("v-toolbar-title",{attrs:{color:"red"}},[t._v("Russia World Cup 2018")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{attrs:{to:"/results",flat:""}},[t._v("Results")])],1)],1),t._v(" "),t._l(t.todaysMatches,function(e,a){return s("v-layout",{key:a},[s("v-flex",{staticClass:"match-card",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-media",{attrs:{src:"/static/fifa18.jpg",height:"700px"}}),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.home_team.country)+" Vs "+t._s(e.away_team.country))]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(" Status: "+t._s(e.status))]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(" Location: "+t._s(e.location))]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.home_team.country)+" - Goals: "+t._s(e.home_team.goals)+" ")]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.away_team.country)+" - Goals: "+t._s(e.away_team.goals)+" ")]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(" Time: "+t._s(e.time))]),t._v(" "),s("h3",{staticClass:"headline mb-0"},[t._v(" Winner: "+t._s(e.winner))])])]),t._v(" "),s("v-card-actions")],1)],1)],1)})],2)},staticRenderFns:[]};var p=s("VU/8")(m,f,!1,function(t){s("eOr0")},null,null).exports,g={name:"Home",data:function(){return{headers:[{text:"Country",align:"left",sortable:!1,value:"country"},{text:"Draws",value:"draws"},{text:"Fifa Code",value:"fifa_code"},{text:"Games Played",value:"games_played"},{text:"Group",value:"group_letter"},{text:"Points",value:"points"},{text:"Losses",value:"losses"},{text:"Wins",value:"wins"}],results:[]}},methods:{getResults:function(){var t=this;h.a.get("http://worldcup.sfg.io//teams/results").then(function(e){e.data.forEach(function(e){t.results.push(e)}),console.log("RESULTS",e.data)}).catch(function(t){console.log(t)})}},created:function(){this.getResults()}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-toolbar",[s("v-toolbar-side-icon",{attrs:{to:"/"}}),t._v(" "),s("v-toolbar-title",{attrs:{color:"red"}},[t._v("Russia World Cup 2018")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{attrs:{to:"/results",flat:""}},[t._v("Results")])],1)],1),t._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.results,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",[t._v(t._s(e.item.country))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.draws))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.fifa_code))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.games_played))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.group_letter))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.points))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.losses))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.wins))])]}}])})],1)},staticRenderFns:[]};var y=s("VU/8")(g,x,!1,function(t){s("e28L")},null,null).exports;a.default.use(v.a);var b=new v.a({routes:[{path:"/",name:"Home",component:p},{path:"/results",name:"Results",component:y}]});a.default.config.productionTip=!1,a.default.use(c.a),a.default.use(o.a,{theme:{primary:r.a.red.darken1,secondary:r.a.red.lighten4,accent:r.a.indigo.base}}),new a.default({el:"#app",router:b,components:{App:d},template:"<App/>"})},e28L:function(t,e){},eOr0:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6136f47ed69e485b4697.js.map