(this.webpackJsonpcovid_frontend=this.webpackJsonpcovid_frontend||[]).push([[0],{162:function(e,t,a){},282:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(4),i=a.n(n),c=a(44),s=a.n(c),o=(a(282),a(162),a(154)),d=a(129),l=a(241),j=a(20),b=a(347),u=a(355),h=a(362),x=a(363),p=a(356),m=a(357),O=a(360),g=a(107),f=a(350),v=a(358),y=a(359),w=a(361),C=a(354),k=a(252),D=a.n(k),S=a(254),N=a.n(S),F=a(253),R=a.n(F),B=a(367),T=a(343),A=a(344),I=a(345),L=a(242),_=a.n(L),W=a(243),E=a.n(W),H=a(244),Y=a.n(H),P=a(245),z=a.n(P),X=a(246),J=a.n(X),G=a(218),q=a.n(G),M=Object(r.jsxs)("div",{children:[Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(_.a,{})}),Object(r.jsx)(A.a,{primary:"Dashboard"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(E.a,{})}),Object(r.jsx)(A.a,{primary:"Orders"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(Y.a,{})}),Object(r.jsx)(A.a,{primary:"Customers"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(z.a,{})}),Object(r.jsx)(A.a,{primary:"Reports"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(J.a,{})}),Object(r.jsx)(A.a,{primary:"Integrations"})]})]}),V=Object(r.jsxs)("div",{children:[Object(r.jsx)(I.a,{inset:!0,children:"Saved reports"}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(q.a,{})}),Object(r.jsx)(A.a,{primary:"Current month"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(q.a,{})}),Object(r.jsx)(A.a,{primary:"Last quarter"})]}),Object(r.jsxs)(B.a,{button:!0,children:[Object(r.jsx)(T.a,{children:Object(r.jsx)(q.a,{})}),Object(r.jsx)(A.a,{primary:"Year-end sale"})]})]}),K=a(144),U=a(366),Q=a(364),Z=a(346),$=a(365),ee=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(U.a,{children:[Object(r.jsx)(Q.a,{active:!0,inverted:!0,children:Object(r.jsx)(Z.a,{inverted:!0,content:"Loading"})}),Object(r.jsx)($.a,{src:"/images/wireframe/short-paragraph.png"})]})})},te=a(36),ae=a(55),re=a(156),ne=a(127),ie=a(152),ce=a.n(ie),se=a(296),oe=a(352),de=a(348),le=a(349),je=a(351),be=a(217);function ue(){var e=Object(K.a)(["   \n    query{\n           actuals{\n               Date,Confirmed,Recovered,Deceased,Type\n             }\n         }\n       "]);return ue=function(){return e},e}te.m(re.a);var he=Object(b.a)((function(e){return{root:{maxWidth:"100%"},header:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},media:{height:0,paddingTop:"25.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:be.a[500]}}})),xe=ce()(ue());function pe(e){var t=Object(n.useRef)(null),a=he(),i="";return console.log("In CreateChart: ".concat(e.btnname)),i="Confirmed"===e.btnname?"Covid Confirmed Cases Trend":"Recovered"===e.btnname?"Covid Recovered Cases Trend":"Covid Death Cases Trend",Object(n.useLayoutEffect)((function(){var a=te.i("chartdiv",ae.g);a.paddingRight=20,a.data=e.data;var r=a.xAxes.push(new ae.c);r.renderer.grid.template.location=0;var n=a.yAxes.push(new ae.f);n.tooltip.disabled=!0,n.renderer.minWidth=35;var i=a.series.push(new ae.e);i.dataFields.dateX="Date",i.dataFields.valueY=e.btnname,i.tooltipText="{valueY.value}",a.cursor=new ae.i;var c=new ae.h;c.series.push(i),a.scrollbarX=c;var s=r.axisRanges.push(new ae.d);s.grid.stroke=a.colors.getIndex(0),s.grid.strokeOpacity=1;var o=r.createSeriesRange(i);o.contents.strokeDasharray="2,3",o.contents.stroke=a.colors.getIndex(8),o.contents.strokeWidth=1,s.bullet=new te.e,s.bullet.background.fill=a.colors.getIndex(0),s.bullet.background.states.copyFrom(a.zoomOutButton.background.states),s.bullet.minX=0,s.bullet.adapter.add("minY",(function(e,t){return t.maxY=a.plotContainer.maxHeight,t.maxX=a.plotContainer.maxWidth,a.plotContainer.maxHeight}));var d=e.data.reduce((function(e,t){return(new Date(e.Date)&&"Acutals"===e.Type)>(new Date(t.Date)&&"Acutals"===t.Type)?e:t})),l=e.data.reduce((function(e,t){return(new Date(e.Date)&&"Acutals"===e.Type)<(new Date(t.Date)&&"Acutals"===t.Type)?e:t}));return console.log("min_act:".concat(JSON.stringify(d)," mix_act").concat(JSON.stringify(l))),s.date=new Date(d.Date),o.date=new Date(d.Date),o.endDate=new Date(l.Date),t.current=a,function(){a.dispose()}}),[e.btnname,e.data]),Object(r.jsx)("div",{children:Object(r.jsxs)(de.a,{className:a.root,children:[Object(r.jsx)(le.a,{className:a.header,title:i,subheader:"For the Year 2020"}),Object(r.jsx)(f.a,{}),Object(r.jsx)(je.a,{id:"chartdiv",style:{width:"100%",height:"500px"}})]})})}var me=function(){var e=Object(ne.a)(xe),t=e.loading,a=e.error,i=e.data,c=Object(n.useState)("Confirmed"),s=Object(o.a)(c,2),d=s[0],l=s[1];if(t)return Object(r.jsx)("div",{className:"loader_graph",children:"Loading..."});if(a)return console.error(a),Object(r.jsx)("div",{children:"Error"});var j=function(e,t){l(e)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(oe.a,{color:"secondary","aria-label":"outlined secondary button group",children:[Object(r.jsx)(se.a,{onClick:function(){return j("Confirmed",i.actuals)},children:"Confirmed"}),Object(r.jsx)(se.a,{onClick:function(){return j("Recovered",i.actuals)},children:"Recovered"}),Object(r.jsx)(se.a,{onClick:function(){return j("Deceased",i.actuals)},children:"Deceased"})]}),Object(r.jsx)(pe,{data:i.actuals,btnname:d})]})})},Oe=a(258),ge=a(353);function fe(){var e=Object(K.a)(["   \n    query{\n           actuals{\n               Date,Confirmed,Recovered,Deceased,Type\n             }\n         }\n       "]);return fe=function(){return e},e}te.m(re.a);var ve=Object(b.a)((function(e){var t;return{root:{maxWidth:"100%",flexGrow:1},media:{height:0,paddingTop:"25.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:be.a[500]},paper:(t={padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:"auto",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",borderRadius:3,border:0},Object(d.a)(t,"color","white"),Object(d.a)(t,"boxShadow","0 3px 5px 2px rgba(33, 203, 243, .3)"),t)}})),ye=ce()(fe());function we(e){var t=ve();return Object(r.jsx)("div",{className:t.root,children:Object(r.jsxs)(ge.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsx)(ge.a,{item:!0,xs:6,sm:3,children:Object(r.jsxs)(Oe.a,{className:t.paper,children:[Object(r.jsx)(Ce,{chtname:"test1",color:"#800080",title:"Active Cases per 1K",value:1})," "]})}),Object(r.jsx)(ge.a,{item:!0,xs:6,sm:3,children:Object(r.jsx)(Oe.a,{className:t.paper,children:Object(r.jsx)(Ce,{chtname:"test2",color:"#34a4eb",title:"New Cases per 1K",value:.3})})}),Object(r.jsx)(ge.a,{item:!0,xs:6,sm:3,children:Object(r.jsx)(Oe.a,{className:t.paper,children:Object(r.jsx)(Ce,{chtname:"test3",color:"#3333cc",title:"Deaths per 1K",value:.03})})})]})})}function Ce(e){var t=Object(n.useRef)(null);return Object(n.useLayoutEffect)((function(){var a=1e3,r=e.value,n=te.i(e.chtname,te.b);n.width=te.l(100),n.height=te.l(100);var i=n.createChild(te.b);i.x=te.l(50),i.y=te.l(50);var c=i.createChild(te.a);c.fill=te.h("#dadada");var s=i.createChild(te.a),o=i.createChild(te.g);o.fill=te.h(e.color),o.mask=s,o.horizontalCenter="middle",o.waveHeight=10,o.waveLength=30,o.y=500,s.y=-500,n.events.on("maxsizechanged",(function(){var e=Math.min(n.pixelWidth,n.pixelHeight),t=.8*e/2;c.radius=t,s.radius=t,o.height=e,o.width=Math.max(n.pixelWidth,n.pixelHeight);var i=t+15;j.path=te.k.moveTo({x:-i,y:0})+te.k.arcToPoint({x:i,y:0},i,i),j.locationOnPath=.5,function(e){var t=-c.radius-o.waveHeight+(1-e/a)*c.pixelRadius*2;o.animate([{property:"y",to:t},{property:"waveHeight",to:10,from:15},{property:"x",from:-50,to:0}],5e3,te.j.elasticOut),s.animate([{property:"y",to:-t},{property:"x",from:50,to:0}],5e3,te.j.elasticOut)}(r)}));var d=i.createChild(te.c),l=n.numberFormatter.format(r,"#.#a");l=l.toUpperCase(),d.text=r,d.fill=te.h("#fff"),d.fontSize=30,d.horizontalCenter="middle";var j=i.createChild(te.c);n.numberFormatter.format(a,"#.#a").toUpperCase();return console.log(e.title),j.text=e.title,j.fill=te.h("#ffffff"),j.fontSize=20,j.textAlign="middle",j.padding(0,0,0,0),t.current=n,function(){n.dispose()}}),[e.data,e.chtname]),Object(r.jsx)("div",{id:e.chtname})}var ke=function(){var e=Object(ne.a)(ye),t=e.loading,a=e.error,n=e.data;return t?Object(r.jsx)("div",{className:"loader_graph",children:"Loading..."}):a?(console.error(a),Object(r.jsx)("div",{children:"Error"})):Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(we,{data:n.actuals})]})};function De(){var e=Object(K.a)(["   \nquery{\n  mobility{\n         Date,Retail_Recreation,Grocery_Pharmacy,Parks,Transit_Stations,Workplaces,Residential\n       \n   }\n   mobility_summary{\n    Category,Value\n     }\n    }\n       "]);return De=function(){return e},e}te.m(re.a);var Se=Object(b.a)((function(e){return{root:{maxWidth:"100%",flexGrow:1},header:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},headermain:{background:"linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .30)",color:"white"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:be.a[500]},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary,margin:"auto"}}})),Ne=ce()(De());function Fe(e){var t=Object(n.useRef)(null),a=Se();return Object(n.useLayoutEffect)((function(){var a=te.i(e.titlename,ae.g);a.width=te.l(100),a.height=te.l(100),console.log("titlename:".concat(e.titlename)),a.data=e.data,console.log("chart.data[0]: ".concat(JSON.stringify(a.data[0].Date)));var r=a.xAxes.push(new ae.c),n=(a.yAxes.push(new ae.f),a.series.push(new ae.e));n.dataFields.valueY=e.titlename,n.dataFields.dateX="Date",n.strokeWidth=1,n.minBulletDistance=10,n.tooltipText="{valueY.value}",n.fillOpacity=.1,n.tooltip.pointerOrientation="vertical",n.tooltip.background.cornerRadius=20,n.tooltip.background.fillOpacity=.5,n.tooltip.label.padding(12,12,12,12);var i=r.createSeriesRange(n);i.contents.strokeDasharray="2,3",i.contents.stroke=a.colors.getIndex(8),i.contents.strokeWidth=1;var c=new te.d;c.rotation=-45,c.stroke=i.contents.stroke,c.width=100,c.height=100,c.gap=6,i.contents.fill=c,i.contents.fillOpacity=.5,a.scrollbarX=new te.f;var s=r.axisRanges.push(new ae.d);return s.grid.stroke=a.colors.getIndex(0),s.grid.strokeOpacity=1,t.current=a,function(){a.dispose()}}),[e.titlename,e.data]),Object(r.jsx)("div",{children:Object(r.jsxs)(de.a,{className:a.root,children:[Object(r.jsx)(le.a,{className:a.header,title:e.titlename.replace("_"," ")}),Object(r.jsx)(f.a,{}),Object(r.jsx)(je.a,{id:e.titlename,style:{width:"100%",height:"200px"}})]})})}function Re(e){Object(n.useRef)(null);var t=Se();return Object(n.useLayoutEffect)((function(){var t=te.i(e.titlename,ae.g);t.hiddenState.properties.opacity=0,t.data=e.data;var a=t.xAxes.push(new ae.a);a.renderer.grid.template.location=0,a.dataFields.category="Category",a.renderer.minGridDistance=40;t.yAxes.push(new ae.f);var r=t.series.push(new ae.b);r.dataFields.categoryX="Category",r.dataFields.valueY="Value",r.tooltipText="{valueY.Value}",r.columns.template.strokeOpacity=0,r.columns.template.fillOpacity=.75;var n=r.columns.template.states.create("hover");return n.properties.fillOpacity=1,n.properties.tension=.4,t.cursor=new ae.i,r.columns.template.adapter.add("fill",(function(e,a){return t.colors.getIndex(a.dataItem.index)})),function(){t.dispose()}}),[e.data,e.titlename]),Object(r.jsx)("div",{children:Object(r.jsxs)(de.a,{className:t.root,children:[Object(r.jsx)(le.a,{className:t.header,title:e.titlename.replace("_"," ")}),Object(r.jsx)(f.a,{}),Object(r.jsx)(je.a,{id:e.titlename,style:{width:"100%",height:"500px"}})]})})}var Be=function(){var e=Se(),t=Object(n.useState)("Summary"),a=Object(o.a)(t,2),i=a[0],c=a[1],s=Object(ne.a)(Ne),d=s.loading,l=s.error,j=s.data;if(console.log("mobilitysummmary: ".concat(l)),d)return Object(r.jsx)("div",{children:Object(r.jsx)(ee,{})});if(l)return console.error(l),Object(r.jsx)("div",{children:"Error"});console.log("mobility data".concat(JSON.stringify(j.mobility_summary)));var b=function(e){c(e),console.log("btn clicked ".concat(e," ").concat(JSON.stringify(j.mobility_summary)))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(oe.a,{color:"secondary","aria-label":"outlined secondary button group",children:[Object(r.jsx)(se.a,{onClick:function(){return b("Summary")},children:"Summery"}),Object(r.jsx)(se.a,{onClick:function(){return b("Details")},children:"Details"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(de.a,{className:e.root,children:[Object(r.jsx)(le.a,{className:e.headermain,title:"Mobility Analytics"}),Object(r.jsx)(f.a,{})]})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(ge.a,{container:!0,spacing:2,justify:"center",children:"Summary"===i?Object(r.jsx)(ge.a,{item:!0,xs:12,sm:12,children:Object(r.jsx)(Re,{data:j.mobility_summary,btnname:i,titlename:i})}):Object.keys(j.mobility[0]).slice(1,-1).map((function(e,t){return Object(r.jsx)(ge.a,{item:!0,xs:3,sm:4,children:Object(r.jsx)(Fe,{data:j.mobility,btnname:i,titlename:e})},t)}))})})]})})};function Te(){return Object(r.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(r.jsx)(C.a,{color:"inherit",href:"https://material-ui.com/",children:"Novartis"})," ",(new Date).getFullYear(),"."]})}var Ae=Object(b.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ie(){var e=Ae(),t=i.a.useState(!0),a=Object(o.a)(t,2),n=a[0],c=a[1];Object(j.a)(e.paper,e.fixedHeight);return Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsx)(u.a,{}),Object(r.jsx)(p.a,{position:"absolute",className:Object(j.a)(e.appBar,n&&e.appBarShift),children:Object(r.jsxs)(m.a,{className:e.toolbar,children:[Object(r.jsx)(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(j.a)(e.menuButton,n&&e.menuButtonHidden),children:Object(r.jsx)(D.a,{})}),Object(r.jsx)(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"COVID Back to Offie Analytics"}),Object(r.jsx)(v.a,{color:"inherit",children:Object(r.jsx)(y.a,{badgeContent:4,color:"secondary",children:Object(r.jsx)(R.a,{})})})]})}),Object(r.jsxs)(h.a,{variant:"permanent",classes:{paper:Object(j.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object(r.jsx)("div",{className:e.toolbarIcon,children:Object(r.jsx)(v.a,{onClick:function(){c(!1)},children:Object(r.jsx)(N.a,{})})}),Object(r.jsx)(f.a,{}),Object(r.jsx)(O.a,{children:M}),Object(r.jsx)(f.a,{}),Object(r.jsx)(O.a,{children:V})]}),Object(r.jsxs)("main",{className:e.content,children:[Object(r.jsx)("div",{className:e.appBarSpacer}),Object(r.jsxs)(w.a,{maxWidth:"lg",className:e.container,children:[Object(r.jsx)(ke,{}),Object(r.jsx)(me,{}),Object(r.jsx)(Be,{}),Object(r.jsx)(x.a,{pt:4,children:Object(r.jsx)(Te,{})})]})]})]})}a(290);var Le=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(Ie,{})})},_e=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,570)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))},We=a(121),Ee=a(255),He=a(256),Ye=a(72),Pe=(a(291),new Ee.a),ze=new He.a({uri:"http://hfa-backend-hfa.statwb-dev.eu.novartis.net/graphql"}),Xe=new We.a({cache:Pe,link:ze});s.a.render(Object(r.jsx)(Ye.a,{client:Xe,children:Object(r.jsx)(i.a.Fragment,{children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Le,{})})})}),document.getElementById("root")),_e()}},[[293,1,3]]]);
//# sourceMappingURL=main.e6750933.chunk.js.map