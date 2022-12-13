"use strict";(self.webpackChunkclimsoft_app=self.webpackChunkclimsoft_app||[]).push([[312],{4312:(P,T,a)=>{a.r(T),a.d(T,{PaperArchiveDefinitionModule:()=>w});var t=a(1850),_=a(2997),U=a(461),C=a(3067),g=a(9133),x=a(273),i=a(3668),u=a(4437),s=a(2606),r=a(6019),c=a(8063);function m(n,l){1&n&&(i.TgZ(0,"div"),i.O4$(),i._UZ(1,"svg",16),i._uU(2," Form ID is required."),i.qZA())}function v(n,l){if(1&n&&(i.TgZ(0,"div",14),i.YNc(1,m,3,0,"div",15),i.qZA()),2&n){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.f.form_id.errors.required)}}function A(n,l){1&n&&(i.TgZ(0,"div"),i.O4$(),i._UZ(1,"svg",16),i._uU(2," Description not selected."),i.qZA())}function D(n,l){if(1&n&&(i.TgZ(0,"div",14),i.YNc(1,A,3,0,"div",15),i.qZA()),2&n){const e=i.oxw();i.xp6(1),i.Q6J("ngIf",e.f.description.errors.required)}}const Z=function(n){return{"is-invalid":n}};let h=(()=>{class n{constructor(e){this.dialogRef=e,this.onClose=new x.x,this.submitted=!1}ngOnInit(){this.form=new g.cw({form_id:new g.NI("",g.kI.required),description:new g.NI("",g.kI.required)}),this.definition&&(this.form.patchValue(this.definition),this.f.form_id.disable())}get update(){return!!this.definition}get f(){return this.form.controls}onSubmit(e){this.submitted=!0,!this.form.invalid&&(this.onClose.next(this.update?this.f.description.value:this.form.value),this.dialogRef.hide())}onCancel(){this.onClose.next(!1),this.dialogRef.hide()}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u.UZ))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-archive-definition-form"]],inputs:{definition:"definition"},decls:26,vars:11,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],[1,"modal-body"],["cForm","","novalidate","",3,"formGroup","ngSubmit"],["xs","12"],[1,"mb-2"],["cLabel","","for","form_id"],["id","form_id","formControlName","form_id","aria-label","default input","cFormControl","","placeholder","Form ID",3,"ngClass"],["col","12","class","invalid-feedback",4,"ngIf"],["cLabel","","for","description"],["id","description","formControlName","description","aria-label","default input","cFormControl","","placeholder","Description","rows","3",3,"ngClass"],["xs","12",1,"text-end","pt-3"],["type","submit",1,"btn","btn-dark","mx-1"],["type","button",1,"btn","btn-dark",3,"click"],["col","12",1,"invalid-feedback"],[4,"ngIf"],["cIcon","","name","cilXCircle"]],template:function(e,o){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"h5",1),i._uU(2),i.qZA(),i.qZA(),i.TgZ(3,"div",2),i.TgZ(4,"form",3),i.NdJ("ngSubmit",function(d){return o.onSubmit(d)}),i.TgZ(5,"c-row"),i.TgZ(6,"c-col",4),i.TgZ(7,"div",5),i.TgZ(8,"label",6),i._uU(9,"Form ID"),i.qZA(),i._UZ(10,"input",7),i.YNc(11,v,2,1,"div",8),i.qZA(),i.qZA(),i.TgZ(12,"c-col",4),i.TgZ(13,"div",5),i.TgZ(14,"label",9),i._uU(15,"Description"),i.qZA(),i._UZ(16,"textarea",10),i.YNc(17,D,2,1,"div",8),i.qZA(),i.qZA(),i.qZA(),i.TgZ(18,"c-row"),i.TgZ(19,"c-col",4),i._UZ(20,"hr"),i.qZA(),i.TgZ(21,"c-col",11),i.TgZ(22,"button",12),i._uU(23),i.qZA(),i.TgZ(24,"button",13),i.NdJ("click",function(){return o.onCancel()}),i._uU(25,"Cancel"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.hij("",o.update?"Update":"Add"," Archive Definition"),i.xp6(2),i.Q6J("formGroup",o.form),i.xp6(6),i.Q6J("ngClass",i.VKq(7,Z,(o.submitted||o.f.form_id.touched)&&o.f.form_id.invalid)),i.xp6(1),i.Q6J("ngIf",o.f.form_id.errors),i.xp6(5),i.Q6J("ngClass",i.VKq(9,Z,(o.submitted||o.f.description.touched)&&o.f.description.invalid)),i.xp6(1),i.Q6J("ngIf",o.f.description.errors),i.xp6(6),i.Oqu(o.update?"Update":"Add"))},directives:[g._Y,g.JL,s.$_X,g.sg,s.iok,s.Yp0,s.eFW,g.Fj,s.oHf,g.JJ,g.u,r.mk,r.O5,c.ar],styles:[""]}),n})();var f=a(2719),F=a(4499),q=a(7384),O=a(453);let k=(()=>{class n{constructor(e){this.http=e,this.definitions$=new F.X({definitions:[],limit:10,page:1,pages:1}),this.init=!1;const o=this.definitions$.getValue();this.getDefinitions(o.page,o.limit)}get definitions(){return this.definitions$.asObservable()}getDefinitions(e,o){console.log(e,o),this.http.GET(`/v1/paper-archive-definitions?limit=${o}&offset=${(e-1)*o}`).subscribe(d=>{console.log(d),this.definitions$.next({definitions:d.result,limit:o,page:d.page,pages:d.pages}),this.init=!0})}addDefinition(e){return this.http.POST("/v1/paper-archive-definitions",e).pipe((0,q.b)(()=>{const o=this.definitions$.getValue();this.getDefinitions(o.page,o.limit)}))}updateDefinition(e,o){return this.http.PUT(`/v1/paper-archive-definitions/${e}`,o).pipe((0,q.b)(()=>{const p=this.definitions$.getValue();this.getDefinitions(p.page,p.limit)}))}removeDefinition(e){this.http.DELETE(`/v1/paper-archive-definitions/${e}`).pipe((0,q.b)(()=>{const o=this.definitions$.getValue();this.getDefinitions(o.page,o.limit)})).subscribe()}updateState(e){if(e.page){const o=this.definitions$.getValue().limit;this.getDefinitions(e.page,o)}e.limit&&this.getDefinitions(1,e.limit)}}return n.\u0275fac=function(e){return new(e||n)(i.LFG(O.O))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=a(5261);function I(n,l){if(1&n){const e=i.EpF();i.TgZ(0,"tr"),i._uU(1,"\n            "),i.TgZ(2,"th",13),i._uU(3),i.qZA(),i._uU(4,"\n            "),i.TgZ(5,"th",13),i._uU(6),i.qZA(),i._uU(7,"\n            "),i.TgZ(8,"td"),i._uU(9,"\n              "),i.TgZ(10,"button",14),i.NdJ("click",function(){const d=i.CHM(e).$implicit;return i.oxw(2).update(d)}),i._uU(11,"\n                "),i.O4$(),i._UZ(12,"svg",15),i._uU(13,"\n              "),i.qZA(),i._uU(14,"\n              "),i.kcU(),i.TgZ(15,"button",16),i.NdJ("click",function(){const d=i.CHM(e).$implicit;return i.oxw(2).remove(d)}),i._uU(16,"\n                "),i.O4$(),i._UZ(17,"svg",17),i._uU(18,"\n              "),i.qZA(),i._uU(19,"\n            "),i.qZA(),i._uU(20,"\n          "),i.qZA()}if(2&n){const e=l.$implicit;i.xp6(3),i.Oqu(e.form_id),i.xp6(3),i.Oqu(e.description)}}function J(n,l){1&n&&(i.TgZ(0,"c-alert",18),i.TgZ(1,"strong"),i._uU(2,"Info"),i.qZA(),i._uU(3," No paper archive records available to show. "),i.qZA())}function $(n,l){if(1&n){const e=i.EpF();i.O4$(),i.kcU(),i.TgZ(0,"c-card-body"),i._uU(1,"\n        "),i.TgZ(2,"app-paginator",8),i.NdJ("onPage",function(p){return i.CHM(e),i.oxw().onPage(p)}),i.qZA(),i._uU(3,"\n        "),i.TgZ(4,"table",9),i._uU(5,"\n          "),i.TgZ(6,"thead"),i._uU(7,"\n          "),i.TgZ(8,"tr"),i._uU(9,"\n            "),i.TgZ(10,"th",10),i._uU(11,"Form ID"),i.qZA(),i._uU(12,"\n            "),i.TgZ(13,"th",10),i._uU(14,"Description"),i.qZA(),i._uU(15,"\n            "),i._UZ(16,"th"),i._uU(17,"\n          "),i.qZA(),i._uU(18,"\n          "),i.qZA(),i._uU(19,"\n          "),i.TgZ(20,"tbody"),i._uU(21,"\n          "),i.YNc(22,I,21,2,"tr",11),i._uU(23,"\n          "),i.qZA(),i._uU(24,"\n        "),i.qZA(),i._uU(25,"\n        "),i.YNc(26,J,4,0,"c-alert",12),i._uU(27,"\n      "),i.qZA()}if(2&n){const e=l.$implicit,o=i.oxw();i.xp6(2),i.Q6J("limit",e.limit)("current",e.page)("pages",o.createPages(e.pages)),i.xp6(20),i.Q6J("ngForOf",e.definitions),i.xp6(4),i.Q6J("ngIf",!e.definitions.length)}}const S=[{path:"",component:(()=>{class n{constructor(e,o){this.modalService=e,this.defService=o,this.page=1,this.limit=10,this.state$=(0,_.of)({definitions:[],limit:1,page:1,pages:1})}ngOnInit(){this.state$=this.defService.definitions}add(){this.modalService.show(h,{initialState:{},class:"modal-sm",backdrop:"static",keyboard:!1}).content.onClose.pipe((0,U.h)(p=>!!p),(0,C.w)(p=>this.defService.addDefinition(p))).subscribe()}update(e){this.modalService.show(h,{initialState:{definition:e},class:"modal-sm",backdrop:"static",keyboard:!1}).content.onClose.pipe((0,U.h)(d=>!!d),(0,C.w)(d=>this.defService.updateDefinition(e.form_id,{description:d}))).subscribe()}remove(e){this.modalService.show(f.S,{initialState:{title:"Archive Definition Removal",message:"Operation cannot be undone. Are you sure you want to remove the selected archive definition?",confirm:"Go Ahead",cancel:"Cancel"}}).content.onClose.subscribe(d=>{d&&this.defService.removeDefinition(e.form_id)})}onPage(e){console.log(e),this.defService.updateState(e)}createPages(e){return[...Array(e).keys()].map(o=>o+1)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u.tT),i.Y36(k))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-archive-definitions"]],decls:31,vars:3,consts:[["xs","12","lg","12","xl","12"],[1,"mb-4"],["xs","6"],[1,"col-6"],["xs","6",1,"text-end"],[1,"btn","btn-sm","cs-btn-sm","btn-outline",3,"click"],["cIcon","","name","cilPlus"],[4,"ngIf"],[3,"limit","current","pages","onPage"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["color","primary",4,"ngIf"],["scope","row"],["cButton","","size","sm","color","light","shape","rounded-pill","cTooltip","Update Archive",3,"click"],["cIcon","","name","cilPencil","size","sm"],["cButton","","size","sm","color","light","shape","rounded-pill","cTooltip","Remove Archive",3,"click"],["cIcon","","name","cilTrash","size","sm",1,"text-danger"],["color","primary"]],template:function(e,o){1&e&&(i.TgZ(0,"c-row"),i._uU(1,"\n  "),i.TgZ(2,"c-col",0),i._uU(3,"\n    "),i.TgZ(4,"c-card",1),i._uU(5,"\n      "),i.TgZ(6,"c-card-header"),i._uU(7,"\n        "),i.TgZ(8,"c-row"),i._uU(9,"\n          "),i.TgZ(10,"c-col",2),i._uU(11,"\n            "),i.TgZ(12,"strong",3),i._uU(13,"Paper Archive Definitions"),i.qZA(),i._uU(14,"\n          "),i.qZA(),i._uU(15,"\n          "),i.TgZ(16,"c-col",4),i._uU(17,"\n            "),i.TgZ(18,"a",5),i.NdJ("click",function(){return o.add()}),i._uU(19," "),i.O4$(),i._UZ(20,"svg",6),i._uU(21," Add New "),i.qZA(),i._uU(22,"\n          "),i.qZA(),i._uU(23,"\n        "),i.qZA(),i._uU(24,"\n      "),i.qZA(),i._uU(25,"\n      "),i.YNc(26,$,28,5,"c-card-body",7),i.ALo(27,"async"),i._uU(28,"\n    "),i.qZA(),i._uU(29,"\n  "),i.qZA(),i._uU(30,"\n"),i.qZA()),2&e&&(i.xp6(26),i.Q6J("ngIf",i.lcZ(27,1,o.state$)))},directives:[s.iok,s.Yp0,s.AkF,s.nkx,c.ar,r.O5,s.yue,y.J,s.auY,r.sg,s.Hq3,s.i9q,s.wxo],pipes:[r.Ov],styles:[""]}),n})(),data:{title:"Paper Archive Definitions"}}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[t.Bz.forChild(S)],t.Bz]}),n})();var N=a(4333);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[r.ez,M,N.m]]}),n})()},5261:(P,T,a)=>{a.d(T,{J:()=>i});var t=a(3668),_=a(2606),U=a(8063),C=a(6019);function g(u,s){if(1&u){const r=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"li",12),t.TgZ(1,"a",3),t.NdJ("click",function(){const v=t.CHM(r).$implicit;return t.oxw().pageChange(v)}),t._uU(2),t.qZA(),t.qZA()}if(2&u){const r=s.$implicit,c=t.oxw();t.Q6J("active",c.current===r),t.xp6(2),t.Oqu(r)}}function x(u,s){if(1&u){const r=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){const v=t.CHM(r).$implicit;return t.oxw().onLimit(v)}),t._uU(1),t.qZA()}if(2&u){const r=s.$implicit,c=t.oxw();t.Q6J("active",r===c.limit),t.xp6(1),t.hij(" ",r," ")}}let i=(()=>{class u{constructor(){this.limits=[10,20,30,50],this.limit=10,this.current=1,this.pages=[1],this.onPage=new t.vpe}ngOnInit(){}pageChange(r){"..."!==r&&(this.current=r,this.ngOnInit(),this.onPage.emit({page:r}))}onLimit(r){this.limit=r,this.onPage.emit({limit:r})}getPages(){if(this.pages.length<=10)return this.pages;var h,r=this.current,c=this.pages.length,v=r-2,A=r+2+1,D=[],Z=[];for(let f=1;f<=c;f++)(1==f||f==c||f>=v&&f<A)&&D.push(f);for(let f of D)h&&(f-h==2?Z.push(h+1):f-h!=1&&Z.push("...")),Z.push(f),h=f;return Z}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-paginator"]],inputs:{limits:"limits",limit:"limit",current:"current",pages:"pages"},outputs:{onPage:"onPage"},decls:19,vars:6,consts:[["xs","12","md","8","xl","5"],["aria-label","navigation","size","sm",1,"justify-content-center"],["cPageItem","",3,"disabled"],["cPageLink","",3,"click"],["cIcon","","name","cilMediaStepBackward"],["cIcon","","name","cilMediaSkipBackward"],["cPageItem","",3,"active",4,"ngFor","ngForOf"],["cIcon","","name","cilMediaSkipForward"],["cIcon","","name","cilMediaStepForward"],["xs","12","md","4","xl","7",1,"text-end"],["aria-label","Basic outlined example","role","group","size","sm"],["cButton","","color","primary","variant","outline",3,"active","click",4,"ngFor","ngForOf"],["cPageItem","",3,"active"],["cButton","","color","primary","variant","outline",3,"active","click"]],template:function(r,c){1&r&&(t.TgZ(0,"c-row"),t.TgZ(1,"c-col",0),t.TgZ(2,"c-pagination",1),t.TgZ(3,"li",2),t.TgZ(4,"a",3),t.NdJ("click",function(){return c.pageChange(1)}),t.O4$(),t._UZ(5,"svg",4),t.qZA(),t.qZA(),t.kcU(),t.TgZ(6,"li",2),t.TgZ(7,"a",3),t.NdJ("click",function(){return c.pageChange(c.current-1)}),t.O4$(),t._UZ(8,"svg",5),t.qZA(),t.qZA(),t.YNc(9,g,3,2,"li",6),t.kcU(),t.TgZ(10,"li",2),t.TgZ(11,"a",3),t.NdJ("click",function(){return c.pageChange(c.current+1)}),t.O4$(),t._UZ(12,"svg",7),t.qZA(),t.qZA(),t.kcU(),t.TgZ(13,"li",2),t.TgZ(14,"a",3),t.NdJ("click",function(){return c.pageChange(c.pages.length)}),t.O4$(),t._UZ(15,"svg",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.kcU(),t.TgZ(16,"c-col",9),t.TgZ(17,"c-button-group",10),t.YNc(18,x,2,2,"button",11),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(3),t.Q6J("disabled",1===c.current),t.xp6(3),t.Q6J("disabled",1===c.current),t.xp6(3),t.Q6J("ngForOf",c.getPages()),t.xp6(1),t.Q6J("disabled",c.current===c.pages.length),t.xp6(3),t.Q6J("disabled",c.current===c.pages.length),t.xp6(5),t.Q6J("ngForOf",c.limits))},directives:[_.iok,_.Yp0,_.QtL,_.Qmh,_.YHm,U.ar,C.sg,_.KbJ,_.Hq3],styles:[".page-item[_ngcontent-%COMP%]{cursor:pointer}.page-item.disabled[_ngcontent-%COMP%]{cursor:not-allowed}"]}),u})()}}]);