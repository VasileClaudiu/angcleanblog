import{a as tt,b as ot}from"./chunk-GIKWWMMQ.js";import{A as Me,Aa as Qe,B as Z,Ba as U,C as n,Ca as pe,D as r,Da as Ye,E as m,Ea as et,F as se,G as le,H as E,I as b,J as h,K as Oe,L as Fe,M as me,N as l,O as v,P as y,Q as B,R as z,S as ce,T as Ae,U as He,V as C,W as j,X as Ne,Y as Re,Z as Te,a as O,ba as Be,c as ve,d as ae,da as L,fa as $,g as F,ga as k,h as A,ha as J,i as H,ia as ze,j as N,k as R,ka as V,l as d,m as T,n as Se,na as je,o as xe,oa as Q,p as P,pa as Le,q as S,qa as $e,r as we,ra as Ve,s as Ee,sa as Ue,t as ke,ta as We,u as De,ua as qe,va as Ge,w as a,wa as Xe,x as p,xa as Ke,y as u,ya as Ze,z as s,za as Je}from"./chunk-ZA6ACCJL.js";var it=(()=>{class t{get nativeWindow(){return window}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac}),t})(),bt=3,nt=(()=>{class t{constructor(e,i,c){this.element=e,this._window=i,this._zone=c,this.onlyGrow=!1,this.useImportant=!1,this.resized=new we,this.autosize=!0,this.retries=0,this._destroyed=!1,this.element.nativeElement.tagName!=="TEXTAREA"?this._findNestedTextArea():(this.textAreaEl=this.element.nativeElement,this.textAreaEl.style["overflow-y"]="hidden",this._onTextAreaFound())}set minRows(e){this._minRows=+e,this.textAreaEl&&(this.textAreaEl.rows=this._minRows)}set _autosize(e){this.autosize=typeof e=="boolean"?e:!0}onInput(e){this.adjust()}ngOnDestroy(){this._destroyed=!0,this._windowResizeHandler&&this._window.nativeWindow.removeEventListener("resize",this._windowResizeHandler,!1)}ngAfterContentChecked(){this.adjust()}ngOnChanges(e){this.adjust(!0)}_findNestedTextArea(){if(this.textAreaEl=this.element.nativeElement.querySelector("TEXTAREA"),!this.textAreaEl&&this.element.nativeElement.shadowRoot&&(this.textAreaEl=this.element.nativeElement.shadowRoot.querySelector("TEXTAREA")),!this.textAreaEl){this.retries>=bt?console.warn("ngx-autosize: textarea not found"):(this.retries++,setTimeout(()=>{this._findNestedTextArea()},100));return}this.textAreaEl.style["overflow-y"]="hidden",this._onTextAreaFound()}_onTextAreaFound(){this._addWindowResizeHandler(),setTimeout(()=>{this.adjust()})}_addWindowResizeHandler(){this._windowResizeHandler=ht(()=>{this._zone.run(()=>{this.adjust()})},200),this._zone.runOutsideAngular(()=>{this._window.nativeWindow.addEventListener("resize",this._windowResizeHandler,!1)})}adjust(e=!1){if(this.autosize&&!this._destroyed&&this.textAreaEl&&this.textAreaEl.parentNode){let i=this.textAreaEl.value;if(e===!1&&i===this._oldContent&&this.textAreaEl.offsetWidth===this._oldWidth)return;this._oldContent=i,this._oldWidth=this.textAreaEl.offsetWidth;let c=this.textAreaEl.cloneNode(!0),M=this.textAreaEl.parentNode;c.style.width=this.textAreaEl.offsetWidth+"px",c.style.visibility="hidden",c.style.position="absolute",c.textContent=i,M.appendChild(c),c.style["overflow-y"]="hidden",c.style.height="auto";let I=c.scrollHeight,K=this._window.nativeWindow.getComputedStyle(c,null);I+=parseInt(K.getPropertyValue("border-top-width")),I+=parseInt(K.getPropertyValue("border-bottom-width")),K.getPropertyValue("box-sizing")==="content-box"&&(I-=parseInt(K.getPropertyValue("padding-top")),I-=parseInt(K.getPropertyValue("padding-bottom")));let _e=this.textAreaEl.offsetHeight,ut=I>_e;if(this.onlyGrow===!1||ut){let he=this._getLineHeight(),Ie=I/he;if(this._minRows&&this._minRows>=Ie)I=this._minRows*he;else if(this.maxRows&&this.maxRows<=Ie){let Pe=this.maxRows*he;I=this.onlyGrow?Math.max(Pe,_e):Pe,this.textAreaEl.style["overflow-y"]="auto"}else this.textAreaEl.style["overflow-y"]="hidden";let gt=I+"px",ft=this.useImportant?"important":"";this.textAreaEl.style.setProperty("height",gt,ft),this.resized.emit(I)}M.removeChild(c)}}_getLineHeight(){let e=parseInt(this.textAreaEl.style.lineHeight,10);if(isNaN(e)&&this._window.nativeWindow.getComputedStyle){let i=this._window.nativeWindow.getComputedStyle(this.textAreaEl);e=parseInt(i.lineHeight,10)}if(isNaN(e)){let i=this._window.nativeWindow.getComputedStyle(this.textAreaEl,null).getPropertyValue("font-size");e=Math.floor(parseInt(i.replace("px",""),10)*1.5)}return e}}return t.\u0275fac=function(e){return new(e||t)(p(ke),p(it),p(Ee))},t.\u0275dir=Se({type:t,selectors:[["","autosize",""]],hostBindings:function(e,i){e&1&&b("input",function(M){return i.onInput(M.target)})},inputs:{minRows:"minRows",_autosize:[0,"autosize","_autosize"],maxRows:"maxRows",onlyGrow:"onlyGrow",useImportant:"useImportant"},outputs:{resized:"resized"},features:[xe]}),t})();function ht(t,o){let e;return(...i)=>{clearTimeout(e),e=setTimeout(()=>{t(...i)},o)}}var rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=T({type:t}),t.\u0275inj=N({providers:[it],imports:[[]]}),t})();var f=class t{constructor(o,e,i){this.http=o;this.configService=e;this.router=i}url="https://flask-hello-world-ten-zeta-15.vercel.app/";getPosts$(){return this.http.get(`${this.url}api/blog/posts`).pipe(ae(o=>o.map(e=>e)))}getPost$(o){let e=new Re().set("findBy","slug");return this.http.get(`${this.configService.config.sbCleanBlogNodeURL}/api/latest/posts/${o}`,{params:e}).pipe(ae(i=>i))}createPost$(o){return this.http.post(`${this.url}api/blog/posts`,o).pipe(A(e=>this.router.navigate([`/${e.slug}`])),ae(e=>e))}updatePost$(o,e){return this.http.put(`${this.configService.config.sbCleanBlogNodeURL}/api/latest/posts/${o.id}`,e).pipe(A(i=>this.router.navigate([`/${o.slug}`])))}deletePost$(o){return this.http.delete(`${this.configService.config.sbCleanBlogNodeURL}/api/latest/posts/${o}`).pipe(A(e=>this.router.navigate(["/"])))}static \u0275fac=function(e){return new(e||t)(R(Te),R(ze),R($))};static \u0275prov=H({token:t,factory:t.\u0275fac})};var at=[f];var G=class t{constructor(o){this.blogService=o}canActivate(o,e){return this._canActivate(o,e)}_canActivate(o,e){return this.blogService.getPost$(o.params.post).pipe(F(i=>i?ve(!0):ve(!1)))}static \u0275fac=function(e){return new(e||t)(R(f))};static \u0275prov=H({token:t,factory:t.\u0275fac})};var st=[G];var de=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=T({type:t});static \u0275inj=N({providers:[...at,...st],imports:[Ne,J,Xe,Ge,Ye.forChild(),rt,et,ot]})};var yt=()=>["fas","bars"];function _t(t,o){if(t&1){let e=E();n(0,"li",7)(1,"a",13),b("click",function(){P(e);let c=h();return S(c.editPost())}),l(2,"Edit Post"),r()()}}function It(t,o){t&1&&(n(0,"form",14)(1,"a",15),l(2,"New Post"),r()())}var D=class t{constructor(o,e,i,c){this.navigationService=o;this.authUtilsService=e;this.route=i;this.router=c}subscription=new O;isLoggedIn=!1;isOnPost=!1;isMenuCollapsed=!0;ngOnInit(){this.subscription.add(this.navigationService.currentComponent$().subscribe(o=>{this.isOnPost=o==="PostComponent"})),this.subscription.add(this.authUtilsService.isLoggedIn$().subscribe(o=>{this.isLoggedIn=o})),this.authUtilsService.checkToken()}ngOnDestroy(){this.subscription.unsubscribe()}editPost(){this.router.navigateByUrl(`/edit/${this.route.snapshot.params.post}`)}static \u0275fac=function(e){return new(e||t)(p(tt),p(V),p(L),p($))};static \u0275cmp=d({type:t,selectors:[["sb-top-nav"]],decls:19,vars:5,consts:[["id","mainNav",1,"navbar","navbar-expand-lg","navbar-light","fixed-top"],[1,"container"],["routerLink","/",1,"navbar-brand"],["type","button","aria-controls","navbarResponsive","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-toggler-right",3,"click"],[1,"ml-1",3,"icon"],[1,"collapse","navbar-collapse",3,"ngbCollapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["routerLink","/",1,"nav-link"],["routerLink","/about",1,"nav-link"],["routerLink","/contact",1,"nav-link"],["class","nav-item",4,"ngIf"],["class","form-inline ml-lg-2",4,"ngIf"],[1,"nav-link","pointer",3,"click"],[1,"form-inline","ml-lg-2"],["routerLink","/new",1,"btn","btn-primary"]],template:function(e,i){e&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"MyBlog"),r(),n(4,"button",3),b("click",function(){return i.isMenuCollapsed=!i.isMenuCollapsed}),m(5,"fa-icon",4),r(),n(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),l(10,"Home"),r()(),n(11,"li",7)(12,"a",9),l(13,"About"),r()(),n(14,"li",7)(15,"a",10),l(16,"Contact"),r()(),u(17,_t,3,0,"li",11),r(),u(18,It,3,0,"form",12),r()()()),e&2&&(a(5),s("icon",y(4,yt)),a(),s("ngbCollapse",i.isMenuCollapsed),a(11),s("ngIf",i.isLoggedIn&&i.isOnPost),a(),s("ngIf",i.isLoggedIn))},dependencies:[C,k,U,Ke],styles:["[_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;vertical-align:text-top}[_nghost-%COMP%]   a.icon[_ngcontent-%COMP%]{padding:0 10px!important}"]})};var ye=()=>["fas","circle"],Pt=()=>["fab","twitter"],St=()=>["fab","facebook-f"],xt=()=>["fab","github"],ue=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-footer"]],decls:22,vars:12,consts:[[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"],[1,"list-inline","text-center"],[1,"list-inline-item"],["href","https://twitter.com/sbootstrap","target","_blank"],["size","lg"],["stackItemSize","2x",1,"fa-stack-2x",3,"icon"],["stackItemSize","1x",1,"fa-stack-1x","fa-inverse",3,"icon"],[3,"routerLink"],["href","https://github.com/vasileclaudiu","target","_blank"],[1,"copyright","text-muted"]],template:function(e,i){e&1&&(n(0,"footer")(1,"div",0)(2,"div",1)(3,"div",2)(4,"ul",3)(5,"li",4)(6,"a",5)(7,"fa-stack",6),m(8,"fa-icon",7)(9,"fa-icon",8),r()()(),n(10,"li",4)(11,"a",9)(12,"fa-stack",6),m(13,"fa-icon",7)(14,"fa-icon",8),r()()(),n(15,"li",4)(16,"a",10)(17,"fa-stack",6),m(18,"fa-icon",7)(19,"fa-icon",8),r()()()(),n(20,"p",11),l(21,"Copyright \xA9 Meserie Website 2024"),r()()()()()),e&2&&(a(8),s("icon",y(6,ye)),a(),s("icon",y(7,Pt)),a(4),s("icon",y(8,ye)),a(),s("icon",y(9,St)),a(4),s("icon",y(10,ye)),a(),s("icon",y(11,xt)))},dependencies:[k,U,Qe,Je],changeDetection:0})};var Et=["*"],x=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-layout-blog"]],ngContentSelectors:Et,decls:3,vars:0,template:function(e,i){e&1&&(Oe(),m(0,"sb-top-nav"),Fe(1),m(2,"sb-footer"))},dependencies:[D,ue],changeDetection:0})};function kt(t,o){if(t&1&&(se(0),n(1,"div",7)(2,"h1"),l(3),r(),n(4,"span",8),l(5),r(),m(6,"div",9),r(),le()),t&2){let e=h();a(3),v(e.heading),a(2),v(e.subHeading),a(),s("innerHtml",e.siteContent,De)}}function Dt(t,o){if(t&1&&(n(0,"div",10)(1,"h1"),l(2),r(),n(3,"h2",8),l(4),r(),n(5,"span",11),l(6),r()()),t&2){let e=h();a(2),v(e.heading),a(2),v(e.subHeading),a(2),v(e.meta)}}var w=class t{constructor(o){this.domSanitizer=o}backgroundImage;heading;subHeading;meta;siteHeading=!1;siteContent;safeBackgroudImage;ngOnInit(){this.safeBackgroudImage=this.domSanitizer.bypassSecurityTrustStyle(this.backgroundImage)}static \u0275fac=function(e){return new(e||t)(p(Be))};static \u0275cmp=d({type:t,selectors:[["sb-clean-blog-header"]],inputs:{backgroundImage:"backgroundImage",heading:"heading",subHeading:"subHeading",meta:"meta",siteHeading:"siteHeading",siteContent:"siteContent"},decls:8,vars:4,consts:[["postHeading",""],[1,"masthead"],[1,"overlay"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"],[4,"ngIf","ngIfElse"],[1,"site-heading"],[1,"subheading"],[1,"siteContent",3,"innerHtml"],[1,"post-heading"],[1,"meta"]],template:function(e,i){if(e&1&&(n(0,"header",1),m(1,"div",2),n(2,"div",3)(3,"div",4)(4,"div",5),u(5,kt,7,3,"ng-container",6),r()()()(),u(6,Dt,7,3,"ng-template",null,0,ce)),e&2){let c=me(7);Me("background-image",i.safeBackgroudImage),a(5),s("ngIf",i.siteHeading)("ngIfElse",c)}},dependencies:[C],changeDetection:0})};var be=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-demo-info"]],decls:2,vars:0,consts:[["routerLink","/auth/login","type","button",1,"btn","btn-outline-primary"]],template:function(e,i){e&1&&(n(0,"button",0),l(1,"Try logging in"),r())},dependencies:[k],styles:["[_nghost-%COMP%]{position:fixed;top:100px;right:0;background-color:#fff}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{border-right:none}"],changeDetection:0})};function Ot(t,o){t&1&&m(0,"sb-demo-info")}function Ft(t,o){if(t&1&&(n(0,"div",6)(1,"a",7)(2,"h2",8),l(3),r(),n(4,"h3",9),l(5),r()(),n(6,"p",10),l(7),r()()),t&2){let e=o.$implicit;a(),s("routerLink",e.slug),a(2),v(e.heading),a(2),v(e.subHeading),a(2),v(e.meta)}}function At(t,o){if(t&1&&(se(0),n(1,"div",2)(2,"div",3)(3,"div",4),u(4,Ft,8,4,"div",5),r()()(),le()),t&2){let e=o.ngIf;a(4),s("ngForOf",e)}}var ee=class t{constructor(o,e,i){this.blogService=o;this.authUtilsService=e;this.changeDetectorRef=i}subscription=new O;isLoggedIn=!1;posts$;ngOnInit(){this.posts$=this.blogService.getPosts$(),this.subscription.add(this.authUtilsService.isLoggedIn$().subscribe(o=>{this.isLoggedIn=o,this.changeDetectorRef.detectChanges()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(e){return new(e||t)(p(f),p(V),p(Ae))};static \u0275cmp=d({type:t,selectors:[["sb-home"]],decls:5,vars:5,consts:[["backgroundImage",'url("assets/img/home-bg.jpg")',"heading","Clean MyBlog","subHeading","Blog Theme Bootstrap",3,"siteHeading"],[4,"ngIf"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"],["class","post-preview",4,"ngFor","ngForOf"],[1,"post-preview"],[3,"routerLink"],[1,"post-title"],[1,"post-subtitle"],[1,"post-meta"]],template:function(e,i){e&1&&(n(0,"sb-layout-blog"),m(1,"sb-clean-blog-header",0),u(2,Ot,1,0,"sb-demo-info",1)(3,At,5,1,"ng-container",1),B(4,"async"),r()),e&2&&(a(),s("siteHeading",!0),a(),s("ngIf",!i.isLoggedIn),a(),s("ngIf",z(4,3,i.posts$)))},dependencies:[He,C,k,x,w,be,j],changeDetection:0})};function Nt(t,o){if(t&1){let e=E();n(0,"button",6),b("click",function(){P(e);let c=h(2);return S(c.editPost())}),l(1,"Edit Post"),r()}}function Rt(t,o){if(t&1&&(n(0,"sb-layout-blog"),m(1,"sb-clean-blog-header",1),n(2,"article")(3,"div",2)(4,"div",3)(5,"div",4)(6,"markdown"),l(7),r(),u(8,Nt,2,0,"button",5),r()()()()()),t&2){let e=o.ngIf,i=h();a(),s("backgroundImage",e.backgroundImage)("heading",e.heading)("subHeading",e.subHeading)("meta",e.meta),a(6),v(e.body),a(),s("ngIf",i.isLoggedIn)}}var te=class t{constructor(o,e,i,c){this.route=o;this.router=e;this.blogService=i;this.authUtilsService=c}static id="PostComponent";subscription=new O;isLoggedIn=!1;post$;post;ngOnInit(){this.post$=this.route.paramMap.pipe(A(o=>this.post=o.get("post")),F(o=>this.blogService.getPost$(o.get("post")))),this.subscription.add(this.authUtilsService.isLoggedIn$().subscribe(o=>{this.isLoggedIn=o}))}ngOnDestroy(){this.subscription.unsubscribe()}editPost(){this.router.navigateByUrl(`/edit/${this.post}`)}static \u0275fac=function(e){return new(e||t)(p(L),p($),p(f),p(V))};static \u0275cmp=d({type:t,selectors:[["sb-post"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"backgroundImage","heading","subHeading","meta"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"],["class","btn btn-primary","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,i){e&1&&(u(0,Rt,9,6,"sb-layout-blog",0),B(1,"async")),e&2&&s("ngIf",z(1,1,i.post$))},dependencies:[C,pe,x,w,j],changeDetection:0})};var oe=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-about"]],decls:2,vars:1,consts:[["backgroundImage",'url("assets/img/about-bg.jpg")',"heading","About Me","subHeading","This is what I do",3,"siteHeading"]],template:function(e,i){e&1&&(n(0,"sb-layout-blog"),m(1,"sb-clean-blog-header",0),r()),e&2&&(a(),s("siteHeading",!0))},dependencies:[x,w],changeDetection:0})};var ie=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-contact"]],decls:2,vars:1,consts:[["backgroundImage",'url("assets/img/contact-bg.jpg")',"heading","Contact Me","subHeading","This is what I do","siteContent",'<a href="mailto:claudiu.vasile@gmail.com?Subject=Hello%20Clean%20Blog">Mail to: claudiu.vasile@gmail.com</a>',3,"siteHeading"]],template:function(e,i){e&1&&(n(0,"sb-layout-blog"),m(1,"sb-clean-blog-header",0),r()),e&2&&(a(),s("siteHeading",!0))},dependencies:[x,w],styles:["header.masthead[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8.col-md-10.mx-auto[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]{color:#000!important}header.masthead[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-lg-8.col-md-10.mx-auto[_ngcontent-%COMP%]   .site-heading[_ngcontent-%COMP%]   .siteContent[_ngcontent-%COMP%]{color:#000!important}"],changeDetection:0})};var Tt=()=>["fab","markdown"];function Bt(t,o){t&1&&(n(0,"div",16),l(1,"Heading required"),r())}function zt(t,o){t&1&&(n(0,"div",16),l(1,"Heading is not valid"),r())}function jt(t,o){t&1&&(n(0,"div",16),l(1,"Subheading required"),r())}function Lt(t,o){t&1&&(n(0,"div",16),l(1,"Subheading is not valid"),r())}function $t(t,o){t&1&&(n(0,"div",16),l(1,"Background image required"),r())}function Vt(t,o){t&1&&(n(0,"div",16),l(1,"Background image is not valid"),r())}function Ut(t,o){t&1&&(n(0,"div",16),l(1,"Body content required"),r())}function Wt(t,o){t&1&&(n(0,"div",16),l(1,"Body content is not valid"),r())}function qt(t,o){if(t&1&&(n(0,"button",17),l(1,"Create Post"),r()),t&2){let e=h();s("disabled",e.newPostForm.invalid)}}function Gt(t,o){if(t&1&&(n(0,"button",18),l(1,"Update Post"),r()),t&2){let e=h();s("disabled",e.newPostForm.invalid)}}function Xt(t,o){if(t&1){let e=E();n(0,"button",19),b("click",function(){P(e);let c=h(),M=me(32);return S(c.open(M,{backdrop:"static"}))}),l(1,"Delete Post"),r()}}function Kt(t,o){if(t&1){let e=E();n(0,"div",20)(1,"h5",21),l(2,"Confirm Delete"),r(),n(3,"button",22),b("click",function(){let c=P(e).$implicit;return S(c.dismiss("CANCEL"))}),n(4,"span",23),l(5,"\xD7"),r()()(),n(6,"div",24)(7,"div",25),l(8,"Warning: Deleting a post is permamnent. This action cannot be undone."),r()(),n(9,"div",26)(10,"button",27),b("click",function(){let c=P(e).$implicit;return S(c.close("CONFIRM"))}),l(11,"Delete Post"),r(),n(12,"button",28),b("click",function(){let c=P(e).$implicit;return S(c.close("CANCEL"))}),l(13,"Cancel"),r()()}}var X=class t{constructor(o,e,i){this.fb=o;this.blogService=e;this.modalService=i;this.newPostForm=this.fb.group({heading:["",[Q.required]],subHeading:["",[Q.required]],backgroundImage:["",[Q.required]],body:["",[Q.required]]})}post;newPostForm;ngOnInit(){this.post&&this.newPostForm.setValue({heading:this.post.heading,subHeading:this.post.subHeading,backgroundImage:this.post.backgroundImage.replace(/^url\("(.+)"\)/,"$1"),body:this.post.body})}onSubmit(){this.newPostForm.status==="VALID"&&(this.post?this.blogService.updatePost$(this.post,this.newPostForm.value).subscribe(o=>console.log(o)):this.blogService.createPost$(this.newPostForm.value).subscribe(o=>console.log(o)));for(let o in this.newPostForm.controls)this.newPostForm.controls[o].markAllAsTouched()}deletePost(){this.blogService.deletePost$(this.post.id).subscribe(o=>console.log(o))}open(o,e={}){this.modalService.open(o,e).result.then(i=>{i==="CONFIRM"&&this.deletePost()},i=>{})}get headingControl(){return this.newPostForm.get("heading")}get headingControlValid(){return this.headingControl.touched&&!this.headingControlInvalid}get headingControlInvalid(){return this.headingControl.touched&&(this.headingControl.hasError("required")||this.headingControl.hasError("heading"))}get subHeadingControl(){return this.newPostForm.get("subHeading")}get subHeadingControlValid(){return this.subHeadingControl.touched&&!this.subHeadingControlInvalid}get subHeadingControlInvalid(){return this.subHeadingControl.touched&&(this.subHeadingControl.hasError("required")||this.subHeadingControl.hasError("subHeading"))}get backgroundImageControl(){return this.newPostForm.get("backgroundImage")}get backgroundImageControlValid(){return this.backgroundImageControl.touched&&!this.backgroundImageControlInvalid}get backgroundImageControlInvalid(){return this.backgroundImageControl.touched&&(this.backgroundImageControl.hasError("required")||this.backgroundImageControl.hasError("backgroundImage"))}get bodyControl(){return this.newPostForm.get("body")}get bodyControlValid(){return this.bodyControl.touched&&!this.bodyControlInvalid}get bodyControlInvalid(){return this.bodyControl.touched&&(this.bodyControl.hasError("required")||this.bodyControl.hasError("body"))}static \u0275fac=function(e){return new(e||t)(p(qe),p(f),p(Ze))};static \u0275cmp=d({type:t,selectors:[["sb-post-form"]],inputs:{post:"post"},decls:33,vars:31,consts:[["modalDeletePostWarning",""],["id","newPostForm",1,"mb-5",3,"ngSubmit","formGroup"],[1,"text-white","mb-4"],[1,"form-group"],["id","headingInput","data-cy","headingInput","type","text","placeholder","Post heading","formControlName","heading",1,"form-control","py-4"],["class","invalid-feedback",4,"ngIf"],["id","subHeadingInput","data-cy","subHeadingInput","type","text","placeholder","Post subheading","formControlName","subHeading",1,"form-control","py-4"],["id","backgroundImageInput","data-cy","backgroundImageInput","type","text","placeholder","Post background image (enter a URL)","formControlName","backgroundImage",1,"form-control","py-4"],[1,"form-text","text-white-50"],["id","bodyInput","autosize","","data-cy","bodyInput","placeholder","Post body text (markdown supported)","formControlName","body",1,"form-control","py-3"],[1,"mr-1",3,"icon"],[1,"form-group","d-flex","align-items-center","justify-content-between"],["class","btn btn-primary","data-cy","createButton","type","submit",3,"disabled",4,"ngIf"],["class","btn btn-primary","data-cy","updateButton","type","submit",3,"disabled",4,"ngIf"],["id","newPostPreview",1,"p-4","mb-4",3,"data"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"invalid-feedback"],["data-cy","createButton","type","submit",1,"btn","btn-primary",3,"disabled"],["data-cy","updateButton","type","submit",1,"btn","btn-primary",3,"disabled"],[1,"btn","btn-danger",3,"click"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","small"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(e,i){if(e&1){let c=E();n(0,"form",1),b("ngSubmit",function(){return P(c),S(i.onSubmit())}),n(1,"h2",2),l(2,"Post Content"),r(),n(3,"div",3),m(4,"input",4),u(5,Bt,2,0,"div",5)(6,zt,2,0,"div",5),r(),n(7,"div",3),m(8,"input",6),u(9,jt,2,0,"div",5)(10,Lt,2,0,"div",5),r(),n(11,"div",3),m(12,"input",7),n(13,"div",8),l(14,"Use an image URL (ex. https://source.unsplash.com/WLUHO9A_xik/1600x900)"),r(),u(15,$t,2,0,"div",5)(16,Vt,2,0,"div",5),r(),n(17,"div",3),m(18,"textarea",9),n(19,"div",8),m(20,"fa-icon",10),l(21,"Markdown supported"),r(),u(22,Ut,2,0,"div",5)(23,Wt,2,0,"div",5),r(),n(24,"div",11),u(25,qt,2,1,"button",12)(26,Gt,2,1,"button",13),r()(),n(27,"h2",2),l(28,"Post Preview"),r(),m(29,"markdown",14),u(30,Xt,2,0,"button",15)(31,Kt,14,0,"ng-template",null,0,ce)}e&2&&(s("formGroup",i.newPostForm),a(4),Z("is-valid",i.headingControlValid)("is-invalid",i.headingControlInvalid),a(),s("ngIf",i.headingControl.hasError("required")),a(),s("ngIf",i.headingControl.hasError("heading")),a(2),Z("is-valid",i.subHeadingControlValid)("is-invalid",i.subHeadingControlInvalid),a(),s("ngIf",i.subHeadingControl.hasError("required")),a(),s("ngIf",i.subHeadingControl.hasError("subHeading")),a(2),Z("is-valid",i.backgroundImageControlValid)("is-invalid",i.backgroundImageControlInvalid),a(3),s("ngIf",i.backgroundImageControl.hasError("required")),a(),s("ngIf",i.backgroundImageControl.hasError("backgroundImage")),a(2),Z("is-valid",i.bodyControlValid)("is-invalid",i.bodyControlInvalid),a(2),s("icon",y(30,Tt)),a(2),s("ngIf",i.bodyControl.hasError("required")),a(),s("ngIf",i.bodyControl.hasError("body")),a(2),s("ngIf",!i.post),a(),s("ngIf",i.post),a(3),s("data",i.bodyControl.value),a(),s("ngIf",i.post))},dependencies:[C,Ve,je,Le,$e,Ue,We,pe,nt,U],styles:["#newPostForm[_ngcontent-%COMP%]{margin-top:10rem}#bodyInput[_ngcontent-%COMP%]{width:100%}#newPostPreview[_ngcontent-%COMP%]{width:100%;display:block;background-color:#fff;border-radius:0}.form-text[_ngcontent-%COMP%]{font-size:.8rem}"],changeDetection:0})};var ne=class t{constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=d({type:t,selectors:[["sb-new-post"]],decls:6,vars:0,consts:[[1,"full-background"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"]],template:function(e,i){e&1&&(m(0,"sb-top-nav"),n(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),m(5,"sb-post-form"),r()()()())},dependencies:[D,X],changeDetection:0})};function Zt(t,o){if(t&1&&(n(0,"div",2)(1,"div",3)(2,"div",4),m(3,"sb-post-form",5),r()()()),t&2){let e=o.ngIf;a(3),s("post",e)}}var re=class t{constructor(o,e){this.route=o;this.blogService=e}post$;ngOnInit(){this.post$=this.route.paramMap.pipe(F(o=>this.blogService.getPost$(o.get("post"))))}static \u0275fac=function(e){return new(e||t)(p(L),p(f))};static \u0275cmp=d({type:t,selectors:[["sb-edit-post"]],decls:4,vars:3,consts:[[1,"full-background"],["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-10","mx-auto"],[3,"post"]],template:function(e,i){e&1&&(m(0,"sb-top-nav"),n(1,"div",0),u(2,Zt,4,1,"div",1),B(3,"async"),r()),e&2&&(a(2),s("ngIf",z(3,1,i.post$)))},dependencies:[C,D,X,j],changeDetection:0})};var Qt=[{path:"",component:ee},{path:"about",component:oe},{path:"contact",component:ie},{path:"new",component:ne},{path:"edit/:post",component:re},{path:":post",canActivate:[G],component:te}],dt=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=T({type:t});static \u0275inj=N({imports:[de,J.forChild(Qt),J]})};export{dt as BlogRoutingModule,Qt as ROUTES};
