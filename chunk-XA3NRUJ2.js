import{a as X,b as ee}from"./chunk-OHUWCLNY.js";import{b as Q}from"./chunk-R6DV6RQL.js";import{$a as k,E as s,F as d,Fa as u,G as x,Ga as Z,H as m,Ia as F,J as S,Ja as c,K as e,Ka as P,L as o,La as M,M as l,Na as O,Oa as I,Pa as E,Q as h,S as z,T as Y,Ta as L,Ua as $,Va as H,Y as i,_a as A,ab as D,bb as R,fb as J,i as U,la as _,na as K,q as B,r as w,t as p,u as y,xa as W,ya as N,za as C}from"./chunk-QMAUEOYF.js";var j=class t{constructor(a,n){this.authService=a;this.router=n;this.authService.logout().then(()=>{this.router.navigate(["/"])})}static \u0275fac=function(n){return new(n||t)(d(u),d(W))};static \u0275cmp=p({type:t,selectors:[["app-logout"]],decls:0,vars:0,template:function(n,r){},encapsulation:2})};var G=class t{canActivate(){return U(!0)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=B({token:t,factory:t.\u0275fac})};var oe=[G];var q=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=y({type:t});static \u0275inj=w({providers:[...Z,...oe],imports:[K,C,H,$,J,Q]})};var se=["*"],g=class t{constructor(){}ngOnInit(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=p({type:t,selectors:[["sb-layout-auth"]],ngContentSelectors:se,decls:6,vars:0,consts:[["id","layoutAuthentication"],["id","layoutAuthentication_content"]],template:function(n,r){n&1&&(z(),l(0,"sb-top-nav"),e(1,"div",0)(2,"div",1)(3,"main"),Y(4),o()()(),l(5,"sb-footer"))},dependencies:[X,ee],styles:["#layoutAuthentication[_ngcontent-%COMP%]{background-color:#212529;height:100vh}"],changeDetection:0})};function de(t,a){t&1&&(e(0,"div",23),i(1,"Password required."),o())}function pe(t,a){t&1&&(e(0,"div",23),i(1,"Password must be at least 8 characters."),o())}var v=class t{constructor(a,n){this.fb=a;this.authService=n;this.loginForm=this.fb.group({username:["",[c.required,c.minLength(3)]],password:["",[c.required,c.minLength(8)]]})}loginForm;faUser=D;faEnvelope=R;faLock=k;ngOnInit(){}onSubmit(){this.loginForm.status==="VALID"&&this.authService.login$({username:this.loginForm.value.username,password:this.loginForm.value.password}).subscribe();for(let a in this.loginForm.controls)this.loginForm.controls[a].markAllAsTouched()}get passwordControl(){return this.loginForm.get("password")}get passwordControlValid(){return this.passwordControl.touched&&!this.passwordControlInvalid}get passwordControlInvalid(){return this.passwordControl.touched&&(this.passwordControl.hasError("required")||this.passwordControl.hasError("minlength"))}static \u0275fac=function(n){return new(n||t)(d(L),d(u))};static \u0275cmp=p({type:t,selectors:[["sb-login"]],decls:37,vars:10,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"card","col-md-6","mx-auto","my-auto",2,"margin-top","7rem !important"],[1,"card-header","d-flex","flex-row","justify-content-center","align-items-center"],[1,"card-body"],[1,"form-inline","justify-content-between",3,"ngSubmit","formGroup"],[1,"form-group","mb-4","w-100"],["type","text","name","username","formControlName","username","placeholder","Username:",1,"form-control"],["for","username"],[3,"icon"],["id","inputPassword","data-cy","passwordInput","type","password","formControlName","password","placeholder","Password:","name","password",1,"form-control",3,"keydown.enter"],["for","password"],["class","invalid-feedback",4,"ngIf"],[1,"row","mb-3"],[1,"col-md-6","d-flex","flex-row","align-items-start"],[1,"form-group","d-flex","flex-row","justify-content-center","align-items-base-line"],["type","checkbox","name","rememberme",2,"width","20% !important"],[1,"col-md-6"],[1,"col-md-6","d-flex","flex-row","align-items-end"],["href","#",1,"text-white"],["type","submit","name","btn-submit",1,"btn","btn-primary","form-control","mb-3",3,"disabled"],[1,"row","d-flex","flex-row","justify-content-center","align-items-base-line"],["routerLink","/auth/register",1,"col-md-4",2,"color","white"],[1,"invalid-feedback"]],template:function(n,r){n&1&&(e(0,"sb-layout-auth")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),i(6,"Login"),o()(),e(7,"div",4)(8,"form",5),h("ngSubmit",function(){return r.onSubmit()}),e(9,"div",6),l(10,"input",7),e(11,"label",8),l(12,"fa-icon",9),i(13," Username"),o()(),e(14,"div",6)(15,"input",10),h("keydown.enter",function(){return r.onSubmit()}),o(),e(16,"label",11),l(17,"fa-icon",9),i(18," Password"),o(),x(19,de,2,0,"div",12)(20,pe,2,0,"div",12),o(),e(21,"div",13)(22,"div",14)(23,"div",15),l(24,"input",16),e(25,"span",17),i(26,"Remember me"),o()()(),e(27,"div",18)(28,"a",19),i(29,"Forgot Password?"),o()()(),e(30,"button",20),i(31,"Login"),o(),e(32,"div",21)(33,"p",17),i(34,"Don't have an account?"),o(),e(35,"a",22),i(36,"Register"),o()()()()()()()()),n&2&&(s(8),m("formGroup",r.loginForm),s(4),m("icon",r.faUser),s(3),S("is-valid",r.passwordControlValid)("is-invalid",r.passwordControlInvalid),s(2),m("icon",r.faLock),s(2),m("ngIf",r.passwordControl.hasError("required")),s(),m("ngIf",r.passwordControl.hasError("minlength")),s(10),m("disabled",r.loginForm.invalid))},dependencies:[_,N,O,F,P,M,I,E,A,g],styles:['#inputPassword[_ngcontent-%COMP%]{flex:.9 0 auto}#layoutAuthentication_content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;font-family:Arial,sans-serif;background:url("./media/background30-LZWGKOUO.jpg")!important;background-size:cover;background-attachment:fixed}.wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{flex:1;padding:20px}.form-group[_ngcontent-%COMP%]{position:relative;width:300px}input[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:5px;outline:none}input[_ngcontent-%COMP%]:focus{border-color:#007bff;color:#7fffd4}label[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;font-size:16px;color:#999;transform:translateY(100%);pointer-events:none;transition:.3s ease all}input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:-10px;left:10px;font-size:12px;color:#007bff;transform:translateY(-50%)}input[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{top:-10px;left:10px;font-size:12px;color:#007bff}.card[_ngcontent-%COMP%]{background-color:#ff00001a;color:#fff;border-radius:20px;border:1px solid white}.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]{padding:3rem}input[_ngcontent-%COMP%]{background-color:#f006!important}input[_ngcontent-%COMP%]::placeholder{color:#f006!important}.form-control.is-valid[_ngcontent-%COMP%]{color:#7fffd4}'],changeDetection:0})};function ue(t,a){t&1&&(e(0,"div",23),i(1,"Password required."),o())}function fe(t,a){t&1&&(e(0,"div",23),i(1,"Password must be at least 8 characters."),o())}var b=class t{constructor(a,n){this.fb=a;this.authService=n;this.registerForm=this.fb.group({firstName:["",[c.required,c.minLength(3)]],lastName:["",[c.required,c.minLength(3)]],username:["",[c.required,c.minLength(3)]],email:["",[c.required,c.minLength(3)]],password:["",[c.required,c.minLength(8)]]})}registerForm;faUser=D;faEnvelope=R;faLock=k;ngOnInit(){}onSubmit(){this.registerForm.status==="VALID"&&this.authService.register$({firstName:this.registerForm.value.firstName,lastName:this.registerForm.value.lastName,username:this.registerForm.value.username,email:this.registerForm.value.email,password:this.registerForm.value.password}).subscribe();for(let a in this.registerForm.controls)this.registerForm.controls[a].markAllAsTouched()}get passwordControl(){return this.registerForm.get("password")}get passwordControlValid(){return this.passwordControl.touched&&!this.passwordControlInvalid}get passwordControlInvalid(){return this.passwordControl.touched&&(this.passwordControl.hasError("required")||this.passwordControl.hasError("minlength"))}get firstNameControl(){return this.registerForm.get("firstName")}get firstNameControlValid(){return this.firstNameControl.touched&&!this.firstNameControlInvalid}get firstNameControlInvalid(){return this.firstNameControl.touched&&(this.firstNameControl.hasError("required")||this.firstNameControl.hasError("minlength"))}get lastNameControl(){return this.registerForm.get("lastName")}get lastNameControlValid(){return this.lastNameControl.touched&&!this.lastNameControlInvalid}get lastNameControlInvalid(){return this.lastNameControl.touched&&(this.lastNameControl.hasError("required")||this.lastNameControl.hasError("minlength"))}get emailControl(){return this.registerForm.get("email")}get emailControlValid(){return this.emailControl.touched&&!this.emailControlInvalid}get emailControlInvalid(){return this.emailControl.touched&&(this.emailControl.hasError("required")||this.emailControl.hasError("minlength"))}get usernameControl(){return this.registerForm.get("username")}get usernameControlValid(){return this.usernameControl.touched&&!this.usernameControlInvalid}get usernameControlInvalid(){return this.usernameControl.touched&&(this.usernameControl.hasError("required")||this.usernameControl.hasError("minlength"))}static \u0275fac=function(n){return new(n||t)(d(L),d(u))};static \u0275cmp=p({type:t,selectors:[["sb-register"]],decls:43,vars:13,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"card","col-md-6","mx-auto","my-auto",2,"margin-top","7rem !important"],[1,"card-header","d-flex","flex-row","justify-content-center","align-items-center"],[1,"card-body"],[1,"form-inline","justify-content-between",3,"ngSubmit","formGroup"],[1,"form-group","mb-4","w-100"],["type","text","name","firstName","formControlName","firstName","placeholder","First Name:",1,"form-control"],["for","firstName"],[3,"icon"],["type","text","name","lastName","formControlName","lastName","placeholder","Last Name:",1,"form-control"],["for","lastName"],["type","text","name","username","formControlName","username","placeholder","Username:",1,"form-control"],["for","username"],["type","text","name","email","formControlName","email","placeholder","Email:",1,"form-control"],["for","email"],["id","inputPassword","data-cy","passwordInput","type","password","formControlName","password","placeholder","Password:","name","password",1,"form-control"],["for","password"],["class","invalid-feedback",4,"ngIf"],["type","submit","name","btn-submit",1,"btn","btn-primary","form-control","mb-3",3,"disabled"],[1,"row","d-flex","flex-row","justify-content-center","align-items-base-line"],[1,"col-md-6"],["routerLink","/auth/login",1,"col-md-4",2,"color","white"],[1,"invalid-feedback"]],template:function(n,r){n&1&&(e(0,"sb-layout-auth")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),i(6,"Register"),o()(),e(7,"div",4)(8,"form",5),h("ngSubmit",function(){return r.onSubmit()}),e(9,"div",6),l(10,"input",7),e(11,"label",8),l(12,"fa-icon",9),i(13," First Name"),o()(),e(14,"div",6),l(15,"input",10),e(16,"label",11),l(17,"fa-icon",9),i(18," Last Name"),o()(),e(19,"div",6),l(20,"input",12),e(21,"label",13),l(22,"fa-icon",9),i(23," Username"),o()(),e(24,"div",6),l(25,"input",14),e(26,"label",15),l(27,"fa-icon",9),i(28," Email"),o()(),e(29,"div",6),l(30,"input",16),e(31,"label",17),l(32,"fa-icon",9),i(33," Password"),o(),x(34,ue,2,0,"div",18)(35,fe,2,0,"div",18),o(),e(36,"button",19),i(37,"Register"),o(),e(38,"div",20)(39,"p",21),i(40,"You have an account?"),o(),e(41,"a",22),i(42,"Login"),o()()()()()()()()),n&2&&(s(8),m("formGroup",r.registerForm),s(4),m("icon",r.faUser),s(5),m("icon",r.faUser),s(5),m("icon",r.faUser),s(5),m("icon",r.faEnvelope),s(3),S("is-valid",r.passwordControlValid)("is-invalid",r.passwordControlInvalid),s(2),m("icon",r.faLock),s(2),m("ngIf",r.passwordControl.hasError("required")),s(),m("ngIf",r.passwordControl.hasError("minlength")),s(),m("disabled",r.registerForm.invalid))},dependencies:[_,N,O,F,P,M,I,E,A,g],styles:['#inputPassword[_ngcontent-%COMP%]{flex:.9 0 auto}#layoutAuthentication_content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;font-family:Arial,sans-serif;background:url("./media/background30-LZWGKOUO.jpg")!important;background-size:cover;background-attachment:fixed}.wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}main[_ngcontent-%COMP%]{flex:1;padding:20px}.form-group[_ngcontent-%COMP%]{position:relative;width:300px}input[_ngcontent-%COMP%]{width:100%;padding:10px;font-size:16px;border:1px solid #ccc;border-radius:5px;outline:none}input[_ngcontent-%COMP%]:focus{border-color:#007bff;color:#7fffd4}label[_ngcontent-%COMP%]{position:absolute;top:50%;left:10px;font-size:16px;color:#999;transform:translateY(100%);pointer-events:none;transition:.3s ease all}input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{top:-10px;left:10px;font-size:12px;color:#007bff;transform:translateY(-50%)}input[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{top:-10px;left:10px;font-size:12px;color:#007bff}.card[_ngcontent-%COMP%]{background-color:#ff00001a;color:#fff;border-radius:20px;border:1px solid white}.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]{padding:3rem}input[_ngcontent-%COMP%]{background-color:#f006!important}input[_ngcontent-%COMP%]::placeholder{color:#f006!important}.form-control.is-valid[_ngcontent-%COMP%]{color:#7fffd4}'],changeDetection:0})};var he=[{path:"login",canActivate:[],component:v,data:{title:"Pages Login - SB Clean Blog Angular"}},{path:"register",canActivate:[],component:b,data:{title:"Pages Register - SB Clean Blog Angular"}},{path:"logout",canActivate:[],component:j}],ie=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=y({type:t});static \u0275inj=w({imports:[q,C.forChild(he),C]})};export{ie as AuthRoutingModule,he as ROUTES};