(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sudoku.39a50c9c.png"},function(e,t,a){e.exports=a.p+"static/media/personal_site.fd564b3e.png"},,,,,,,,,,function(e,t,a){e.exports=a(59)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),r=a(21),o=a.n(r);a(42);a(43),a(13);var c=function(){return i.a.createElement("div",{className:"horizontal-center",id:"about-me"},i.a.createElement("h3",{className:"headings",id:"top-header"},".about-me"),i.a.createElement("div",{id:"about-me-body"},i.a.createElement("div",{id:"portrait"}),i.a.createElement("div",{id:"about-me-text"},i.a.createElement("p",{className:"body"},"Hi, I'm Gift! I\u2019m currently a sophomore Computer Science student at ",i.a.createElement("a",{id:"columbia",target:"_blank",href:"https://www.cs.columbia.edu/"},"Columbia University"),", currently taking Fundamentals of Computer Systems, Discrete Math, and Data Structures."),i.a.createElement("p",{className:"body technologies"},"I started programming in my senior year of high school with Java in AP Computer Science A. After practicing a bit, I've expanded into other programming languages through my college coursework and self-studying. At the moment, I\u2019ve worked with ",i.a.createElement("span",{id:"html5"},"HTML"),", ",i.a.createElement("span",{id:"css"},"CSS"),", ",i.a.createElement("span",{id:"js"},"JavaScript"),", ",i.a.createElement("span",{id:"java"},"Java"),", ",i.a.createElement("span",{id:"c-sharp"},"C#"),", ",i.a.createElement("span",{id:"python"},"Python"),", and ",i.a.createElement("span",{id:"three-js"},"THREE.js")," so far."),i.a.createElement("p",{className:"body"},"I\u2019m interested in app development (mainly front-end), and computer graphics. I also like playing video games (especially Mario Kart) and \u2013 though I\u2019m new to them \u2013 music production and creating 3D designs."))))};a(44);var l=function(){return i.a.createElement("div",{id:"credits"},i.a.createElement("p",{className:"body",id:"creditText"},"designed by gift giwa."),i.a.createElement("p",{className:"body",id:"creditText"},"liked the site? ",i.a.createElement("a",{id:"source-link",target:"_blank",href:"https://github.com/GiftGiwa/gift-giwa"},"check out the source code!")))};a(45),a(46);var s=function(e){return i.a.createElement("div",{style:{backgroundColor:e.color},id:"experience-card"},i.a.createElement("h5",{style:{color:e.bgcolor}},e.count),i.a.createElement("p",{className:"positions"},i.a.createElement("span",{style:{color:e.companyColor}},e.company,","),i.a.createElement("br",null),e.position),i.a.createElement("p",{className:"description"},e.bullets[0]),i.a.createElement("p",{className:"description"},e.bullets[1]),i.a.createElement("p",{className:"description"},e.bullets[2]))};var m=function(){var e=[{count:"01",company:"Sharp Performance",companyColor:"#5cbcf2",position:"SWE Intern",date:"",bullets:["Designed mobile application in Unity and C# with cognitive performance exercises to strengthen the user\u2019s mental fortitude, based on methods delivered to U.S. Military Special Operations personnel.","Improved average login time by 4 seconds with back-end login system built in C# and MySQL.","Increased user base by 300% by extending compatibility to iOS devices."]},{count:"02",company:"BetterMeet",companyColor:"#3ae0bf",position:"SWE Intern",date:"",bullets:["Programmed UI for BetterMeet Chrome extension in JavaScript and CSS, enabling employees of organizations to intuitively provide feedback on virtual meetings\u2019 productivity.","Coded data access from AWS cloud database containing analytics on employee feedback for 1,000 businesses using Flask.","Maintained goal achievement rate and reduced meeting times for organizations by 33% on average."]},{count:"03",company:"",position:"SWE Intern",bullets:["???","???","???"]},{count:"04",company:"???",position:"???",bullets:["???","???","???"]}];return i.a.createElement("div",{className:"horizontal-center",id:"experience"},i.a.createElement("h3",{className:"headings",id:"experience-header"},".experience"),i.a.createElement("div",{id:"cards"},i.a.createElement(s,{color:"rgba(54, 165, 224, 0.15)",bgcolor:"rgb(54, 165, 224)",id:"build-lab",date:e[0].date,count:e[0].count,companyColor:e[0].companyColor,company:e[0].company,position:e[0].position,bullets:e[0].bullets}),i.a.createElement(s,{color:"rgba(58, 224, 191, 0.15)",bgcolor:"rgb(58, 224, 191)",id:"build-lab",date:e[1].date,count:e[1].count,companyColor:e[1].companyColor,company:e[1].company,position:e[1].position,bullets:e[1].bullets}),i.a.createElement("div",{id:"xp-filler"},i.a.createElement("p",{id:"xp-ellipsis"},"..."))))},d=(a(47),a(22)),u=a.n(d),p=a(23),g=a.n(p);a(48);var h=function(e){return i.a.createElement("div",{style:{backgroundColor:e.bgcolor},className:"filler"},i.a.createElement("p",{className:"horizontal-center",id:"ellipsis"},"\u2022\u2022\u2022"))};a(49);var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"project",id:e.project},i.a.createElement("img",{className:"images",src:e.imageSource})),i.a.createElement("div",{className:"desc",id:e.projectDesc},i.a.createElement("a",{className:"body project_body header",style:{color:e.headerColor}},e.name),i.a.createElement("p",{className:"body project_body"},e.info)))};var E=function(){setTimeout(function(){var e=document.querySelectorAll(".desc");document.addEventListener("mousemove",function(t){var a=document.getElementById("projects").getBoundingClientRect();e.forEach(function(e){void 0!==a.left&&void 0!==a.top&&0!==a.top&&0!==a.left&&(e.style.left=t.clientX-a.left+30+"px",e.style.top=t.clientY-a.top+30+"px"),e.addEventListener("click",function(e){console.log("click")})})})},50);var e=[["Sudoku","A sudoku puzzle generator/checker webpage. Made in HTML, CSS, and vanilla JavaScript."],["Personal Website (here)","A showcase of my experience, projects and current/future programming endeavors. Made in React.js."]];return i.a.createElement("div",{className:"horizontal-center",id:"my-creations"},i.a.createElement("h3",{className:"headings",id:"creations-header"},".my-creations"),i.a.createElement("div",{id:"projects-body"},i.a.createElement("div",{id:"projects"},i.a.createElement("a",{href:"https://giftgiwa.github.io/Sudoku/sudoku.html",target:"_blank"},i.a.createElement(f,{project:"sudoku",projectDesc:"sudoku_desc",imageSource:u.a,headerColor:"#4FC1FF",name:e[0][0],info:e[0][1]})),i.a.createElement(f,{project:"personalSite",projectDesc:"personal_desc",imageSource:g.a,headerColor:"#FFE600",name:e[1][0],info:e[1][1]}),i.a.createElement(h,{bgcolor:"rgba(255, 255, 255, 0.06)"}),i.a.createElement(h,{bgcolor:"rgba(255, 255, 255, 0.04)"}),i.a.createElement(h,{bgcolor:"rgba(255, 255, 255, 0.025)"}))))},b=(a(50),a(24)),v=a.n(b),y=a(26),w=a.n(y),k=a(27),S=a.n(k);var C=function(){return i.a.createElement("div",{id:"navbar"},i.a.createElement("h4",null,"GiftGiwa"),i.a.createElement("ul",null,i.a.createElement("li",{className:"sections"},i.a.createElement("a",{href:"#about-me"},"01  .about-me")),i.a.createElement("li",{className:"sections"},i.a.createElement("a",{href:"#experience"},"02  .experience")),i.a.createElement("li",{className:"sections"},i.a.createElement("a",{href:"#my-creations"},"03  .my-creations"))),i.a.createElement("div",{id:"media"},i.a.createElement("a",{target:"_blank",href:"https://github.com/GiftGiwa"},i.a.createElement(v.a,{id:"github"})),i.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/gift-g-426146166/"},i.a.createElement(w.a,{id:"linkedin"})),i.a.createElement("a",{target:"_blank",href:"https://mail.google.com/mail/u/0/?fs=1&to=gdg2131@columbia.edu&tf=cm"},i.a.createElement(S.a,{id:"email"}))))},x=a(1),j=a(4),N=a(3),M=a(0),I=a(2),F=a(9),z=function(e){function t(){return Object(x.a)(this,t),Object(N.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=new F.i,t=new F.g(60,window.innerWidth/window.innerHeight,.1,1e3);t.position.z=-30,t.lookAt(0,0,100);var a=new F.l({alpha:!0});a.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",function(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)},!1),this.mount.appendChild(a.domElement);var n,i=new F.j(5,40,20),r=(new F.f({metalness:0,transmission:1,roughness:0,depthTest:!0}),new F.e({color:3026478})),o=function(){var e=new F.k,t=new F.h,a=new F.k;return function(n){e.x=(50*Math.random()-25)*(window.innerWidth/window.innerHeight),e.y=50*Math.random()-25,e.z=(50*Math.random()-25)*(window.innerWidth/window.innerHeight),a.x=a.y=a.z=.5*Math.random()+.2,n.compose(e,t,a)}}(),c=new F.d;(n=new F.c(i,r,70)).instanceMatrix.setUsage(F.b);for(var l=0;l<70;l++)o(c),n.setMatrixAt(l,c);e.add(n);var s=new F.a(16777215);e.add(s);!function n(){requestAnimationFrame(n),.001,c.makeRotationY(.05*Math.PI/15),t.lookAt(new F.k(0,0,0)),t.position.applyMatrix4(c),a.render(e,t)}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"canvas",ref:function(t){return e.mount=t}})}}]),t}(n.Component);a(55);var A=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"left"}),i.a.createElement("div",{id:"right"}))};a(56);a(57);var W=function(){return i.a.createElement("div",{id:"frost"})};var _=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null),i.a.createElement(z,null),i.a.createElement(A,null),i.a.createElement(W,null),i.a.createElement(c,null),i.a.createElement(m,null),i.a.createElement(E,null),i.a.createElement(l,null))},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then(function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(_,null)),H()}],[[33,1,2]]]);
//# sourceMappingURL=main.4f5d121e.chunk.js.map