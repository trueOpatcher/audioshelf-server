"use strict";(self.webpackChunkmyBookshelf=self.webpackChunkmyBookshelf||[]).push([[285],{8285:(E,f,l)=>{l.r(f),l.d(f,{AudiostoreModule:()=>J});var g=l(9808),a=l(3075),d=l(0),x=l(7448),t=l(5e3),p=l(4320),m=l(1663),b=l(384);function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",12),t.TgZ(1,"button",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).$implicit;return t.oxw().onClickEdit(i.folderName)}),t._uU(2,"Edit"),t.qZA(),t.qZA()}}function v(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"label",6),t._UZ(1,"img",7),t.TgZ(2,"div",8),t.TgZ(3,"div",9),t._uU(4),t.qZA(),t.TgZ(5,"div",10),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",11),t.TgZ(8,"div",12),t.TgZ(9,"button",13),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit;return t.oxw().onClickView(i)}),t._uU(10,"More"),t.qZA(),t.qZA(),t.YNc(11,M,3,0,"div",14),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(),o=e.index,i=e.$implicit,s=t.oxw();t.s9C("for",o),t.xp6(1),t.Q6J("src",i.faceImage,t.LSH),t.xp6(3),t.Oqu(i.bookName),t.xp6(2),t.Oqu(i.author),t.xp6(5),t.Q6J("ngIf",s.isUserAdmin)}}function O(n,c){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"input",4),t.YNc(2,v,12,5,"label",5),t.qZA()),2&n){const e=c.$implicit,o=c.index;t.xp6(1),t.s9C("id",o),t.xp6(1),t.Q6J("ngIf",e)}}function P(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().onCreateFolder()}),t._uU(2,"New"),t.qZA(),t.qZA()}}let u=(()=>{class n{constructor(e,o,i,s){this.audiostoreService=e,this.router=o,this.playlistService=i,this.authService=s,this.folders=[],this.isUserAdmin=!1}ngOnInit(){this.audiostoreService.fetchFolders().subscribe(e=>{this.folders=e}),this.authService.isUserAdmin().subscribe(e=>{this.isUserAdmin=e})}onClickEdit(e){!e||""===e||(console.log(e),this.router.navigate(["audiostore/edit",e]))}onCreateFolder(){this.router.navigate(["audiostore/edit"])}onClickView(e){this.playlistService.folder.next(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.v),t.Y36(d.F0),t.Y36(m.r),t.Y36(b.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalog"]],decls:4,vars:2,consts:[[1,"container"],[1,"center","list","flex-column"],[4,"ngFor","ngForOf"],["class","newFolder",4,"ngIf"],["type","radio","name","radio",3,"id"],["class","card flex-row open",3,"for",4,"ngIf"],[1,"card","flex-row","open",3,"for"],["alt","",1,"book",3,"src"],[1,"flex-column","info"],[1,"title"],[1,"author"],[1,"buttons"],[1,"bottom"],[1,"simple",3,"click"],["class","bottom",4,"ngIf"],[1,"newFolder"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,O,3,2,"div",2),t.YNc(3,P,3,0,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.folders),t.xp6(1),t.Q6J("ngIf",o.isUserAdmin))},directives:[g.sg,g.O5],styles:[".container[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding-right:0;box-shadow:0 2px 10px #0000004d}body[_ngcontent-%COMP%]{background-color:#131325}.flex-row[_ngcontent-%COMP%]{display:flex;flex-flow:row;align-items:center}.flex-column[_ngcontent-%COMP%]{display:flex;flex-flow:column}.center[_ngcontent-%COMP%]{align-items:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.list[_ngcontent-%COMP%]{border-radius:3px;height:100%;overflow-y:auto}.list[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer;min-width:470px;max-width:470px;margin-top:10px;perspective:600px;transition:all .1s;background-color:#212140;box-shadow:0 2px 10px #0003;overflow:hidden;height:90px}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{height:0px;overflow:hidden;font-size:12px;color:#777;font-weight:400}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.simple[_ngcontent-%COMP%]{width:65px;float:right;cursor:pointer;color:#ccc;border:none;outline:none;border-radius:4px;background-color:#1ea94b;padding:12px 15px;font-family:Montserrat;font-weight:700;transition:all .1s}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.simple[_ngcontent-%COMP%]:hover{box-shadow:0 15px 20px -5px #0000004d;transform:translateY(-2px)}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]{height:150px;width:120px;box-shadow:0 2px 10px #0000004d;overflow:hidden}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{transition:all .2s;min-width:200px;padding:0 15px;font-family:Montserrat;font-weight:700}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;font-size:1em;color:#fff;letter-spacing:1px}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#888}.list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{margin-left:auto}.list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked ~ .open[_ngcontent-%COMP%]{padding:15px;height:auto}.list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked ~ .open[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{margin-left:auto;white-space:initial;margin-top:10px;height:100%;overflow:visible}.list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked ~ .open[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{transform:translateY(-10px)}.buttons[_ngcontent-%COMP%]{float:right;display:flex;flex-direction:column}.newFolder[_ngcontent-%COMP%]{display:flex;margin-top:25px;justify-content:center;overflow:hidden;font-size:12px;color:#777;font-weight:400}.newFolder[_ngcontent-%COMP%]   button.simple[_ngcontent-%COMP%]{width:65px;cursor:pointer;color:#ccc;border:none;outline:none;border-radius:4px;background-color:#1ea94b;padding:12px 15px;font-family:Montserrat;font-weight:700;transition:all .1s}.newFolder[_ngcontent-%COMP%]   button.simple[_ngcontent-%COMP%]:hover{box-shadow:0 15px 20px -5px #0000004d;transform:translateY(-2px)}"]}),n})();var r=l(1777),_=l(3874);function Z(n,c){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.folder.faceImage,t.LSH)("@faceImg",e.anmStart?"start":"end")}}function w(n,c){if(1&n&&(t.TgZ(0,"div",12),t._UZ(1,"img",13),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.folder.backImage,t.LSH)("@backImg",e.anmStart?"start":"end")}}function T(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.YNc(2,Z,2,2,"div",3),t.YNc(3,w,2,2,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"mat-icon",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.onClickGo(i.folder)}),t._uU(6,"source"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t._uU(9),t.qZA(),t.TgZ(10,"div",9),t._uU(11),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.folder.faceImage),t.xp6(1),t.Q6J("ngIf",e.folder.backImage),t.xp6(1),t.Q6J("@info",e.anmStart?"folder":"start"),t.xp6(4),t.Q6J("@info",e.anmStart?"name":"start"),t.xp6(1),t.hij(" ",e.folder.bookName,""),t.xp6(1),t.Q6J("@info",e.anmStart?"author":"start"),t.xp6(1),t.hij(" ",e.folder.author,""),t.xp6(1),t.Q6J("@info",e.anmStart?"description":"start"),t.xp6(1),t.hij(" ",e.folder.description,"")}}let h=(()=>{class n{constructor(e,o,i){this.audiostoreService=e,this.playlistService=o,this.router=i,this.anmStart=!1}ngOnInit(){this.sub=this.playlistService.folder.subscribe(e=>{if(null!=e){if(e===this.folder)return;this.anmStart=!1,setTimeout(()=>{this.folder=e},300),setTimeout(()=>{this.anmStart=!0},500)}})}onClickGo(e){this.playlistService.folder.next(e),this.router.navigate(["/dashboard"])}ngOnDestroy(){this.sub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.v),t.Y36(m.r),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-review"]],decls:1,vars:1,consts:[["class","content",4,"ngIf"],[1,"content"],[1,"images"],[4,"ngIf"],["class","backImage",4,"ngIf"],[1,"go"],[3,"click"],[1,"desc"],[1,"name"],[1,"author"],[1,"description"],["alt","",1,"faceImage",3,"src"],[1,"backImage"],["alt","",1,"backImage",3,"src"]],template:function(e,o){1&e&&t.YNc(0,T,14,9,"div",0),2&e&&t.Q6J("ngIf",o.folder)},directives:[g.O5,_.Hw],styles:[".content[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:hidden;color:#fff;display:flex;flex-direction:column;align-items:center;padding:10px;white-space:nowrap;height:100%;font-size:18px;letter-spacing:1px;font-family:Montserrat;font-weight:700}.content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;width:500px}.content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%]{display:flex;margin-left:20px;align-items:center;cursor:pointer;opacity:0}.content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .faceImage[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .backImage[_ngcontent-%COMP%]{height:300px;width:250px}.content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{opacity:0}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:15px;width:100%;padding:10px 10px 10px 30px;margin-right:44px;text-align:center}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:20px;color:#fff}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{font-size:16px}.content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{padding-top:20px;display:block;white-space:initial;overflow-wrap:break-word}"],data:{animation:[(0,r.X$)("faceImg",[(0,r.SB)("end",(0,r.oB)({transform:"perspective(200px) rotateY( -90deg )",transformOrigin:"100% 0%"})),(0,r.SB)("start",(0,r.oB)({transform:"perspective(200px) rotateY( 0deg )"})),(0,r.eR)("* => *",(0,r.jt)("300ms cubic-bezier(0.645, 0.045, 0.355, 1)"))]),(0,r.X$)("backImg",[(0,r.SB)("end",(0,r.oB)({transform:"perspective(200px) rotateY(90deg)",transformOrigin:"0% 0%"})),(0,r.SB)("start",(0,r.oB)({transform:"perspective(200px) rotateY( 0deg )"})),(0,r.eR)("* => *",(0,r.jt)("300ms cubic-bezier(0.645, 0.045, 0.355, 1)"))]),(0,r.X$)("info",[(0,r.SB)("start",(0,r.oB)({opacity:"0"})),(0,r.SB)("name",(0,r.oB)({opacity:"1"})),(0,r.SB)("author",(0,r.oB)({opacity:"1"})),(0,r.SB)("description",(0,r.oB)({opacity:"1"})),(0,r.SB)("folder",(0,r.oB)({opacity:"1"})),(0,r.eR)("start => name",(0,r.jt)("2000ms ease-out")),(0,r.eR)("start => author",(0,r.jt)("2000ms 0.4s ease-out")),(0,r.eR)("start => description",(0,r.jt)("2000ms 0.8s ease-out")),(0,r.eR)("start => folder",(0,r.jt)("2000ms ease-out"))])]}}),n})(),y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-audiostore"]],decls:5,vars:0,consts:[[1,"page"],[1,"catalog"],[1,"review"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-catalog"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-review"),t.qZA(),t.qZA())},directives:[u,h],styles:[".page[_ngcontent-%COMP%]{display:flex;width:100%;height:calc(100% - 60px);background-color:#000}.page[_ngcontent-%COMP%]   .catalog[_ngcontent-%COMP%]{position:relative;min-width:480px;height:100%;background-color:#0b0c1b}.page[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]{min-width:550px;background-color:#131325;height:100%;flex-grow:1}"]}),n})();const A=["inputField"];function k(n,c){if(1&n&&(t.TgZ(0,"ul"),t.TgZ(1,"li"),t._UZ(2,"input",20),t.TgZ(3,"label",21),t._uU(4),t.qZA(),t.qZA(),t.qZA()),2&n){const e=c.$implicit,o=c.index;t.xp6(2),t.MGl("id","",o,"+"),t.xp6(1),t.s9C("for",o),t.xp6(1),t.Oqu(e.name)}}function I(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"li"),t._UZ(1,"input",13),t.TgZ(2,"label",14),t._uU(3),t.qZA(),t.YNc(4,k,5,3,"ul",15),t.TgZ(5,"ul"),t.TgZ(6,"li"),t.TgZ(7,"label",16),t.TgZ(8,"mat-icon",17),t._uU(9,"upload"),t.qZA(),t.TgZ(10,"input",18),t.NdJ("change",function(i){return t.CHM(e),t.oxw().onSelectFile(i)}),t.qZA(),t.qZA(),t.TgZ(11,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSendAudio()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.folder.folderName),t.xp6(1),t.Q6J("ngForOf",e.folder.files),t.xp6(7),t.Q6J("disabled",!e.folderToUpload)}}function F(n,c){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",36),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.folder.faceImage,t.LSH)}}function q(n,c){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",36),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.folder.backImage,t.LSH)}}function S(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",22),t.TgZ(1,"form",23),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(2,"div",24),t.TgZ(3,"label",25),t._uU(4,"Face Image"),t.qZA(),t.TgZ(5,"input",26),t.NdJ("change",function(i){return t.CHM(e),t.oxw().onSelectFaceImage(i)}),t.qZA(),t.qZA(),t.YNc(6,F,2,1,"div",3),t.TgZ(7,"div",24),t.TgZ(8,"label",27),t._uU(9,"Back Image"),t.qZA(),t.TgZ(10,"input",28),t.NdJ("change",function(i){return t.CHM(e),t.oxw().onSelectBackImage(i)}),t.qZA(),t.qZA(),t.YNc(11,q,2,1,"div",3),t.TgZ(12,"div",24),t.TgZ(13,"label",29),t._uU(14,"Name"),t.qZA(),t._UZ(15,"input",30),t.qZA(),t.TgZ(16,"div",24),t.TgZ(17,"label",31),t._uU(18,"Author"),t.qZA(),t._UZ(19,"input",32),t.qZA(),t.TgZ(20,"div",24),t.TgZ(21,"label",33),t._uU(22,"Description"),t.qZA(),t._UZ(23,"input",34),t.qZA(),t.TgZ(24,"button",35),t._uU(25,"Submit"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.editForm),t.xp6(5),t.Q6J("ngIf",e.folder.faceImage),t.xp6(5),t.Q6J("ngIf",e.folder.backImage)}}let C=(()=>{class n{constructor(e,o,i){this.audiostoreService=e,this.router=o,this.route=i,this.folderToUpload=null,this.editForm=new a.cw({faceImage:new a.NI(null,a.kI.required),backImage:new a.NI(null),name:new a.NI(null,a.kI.required),author:new a.NI(null,a.kI.required),description:new a.NI(null,a.kI.required)})}ngOnInit(){this.sub=this.route.params.subscribe(e=>{e&&this.audiostoreService.fetchFolder(e.name).subscribe(i=>{null!==i&&(console.log(i),this.folder=i,this.updateContent(i))})})}onCreateFolder(){const e=this.input.nativeElement.value;""===e||this.folder||this.audiostoreService.createFolder(e).subscribe(o=>{console.log("created"),this.router.navigate(["audiostore/edit",o.folderName])})}onSendAudio(){this.audiostoreService.uploadAudio(this.folderToUpload).subscribe(()=>{this.update()})}onSubmit(){if(!this.editForm.valid)return;const e=this.dataToUploadHandler();console.log(e),this.audiostoreService.uploadFolderData(e).subscribe(()=>{console.log("done"),this.update(),this.router.navigate(["/audiostore"])})}dataToUploadHandler(){return{folderName:this.folder.folderName,metaData:{bookName:this.editForm.value.name,author:this.editForm.value.author,description:this.editForm.value.description},images:{faceImage:this.editForm.value.faceImage,backImage:this.editForm.value.backImage}}}onSelectFile(e){const o=e.target.files[0];null!==o&&(this.folderToUpload={folderName:this.folder.folderName,file:o})}onSelectFaceImage(e){e.target.files.length>0&&this.editForm.patchValue({faceImage:e.target.files[0]})}onSelectBackImage(e){e.target.files.length>0&&this.editForm.patchValue({backImage:e.target.files[0]})}updateContent(e){console.log(e),this.editForm.patchValue({faceImage:e.faceImage}),this.editForm.patchValue({backImage:e.backImage}),this.editForm.patchValue({name:e.bookName}),this.editForm.patchValue({author:e.author}),this.editForm.patchValue({description:e.description})}update(){this.audiostoreService.fetchFolder(this.folder.folderName).subscribe(o=>{this.folder=o})}ngOnDestroy(){this.sub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.v),t.Y36(d.F0),t.Y36(d.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit"]],viewQuery:function(e,o){if(1&e&&t.Gf(A,7),2&e){let i;t.iGM(i=t.CRH())&&(o.input=i.first)}},decls:16,vars:2,consts:[[1,"page"],[1,"catalog"],[1,"tree"],[4,"ngIf"],[1,"folder-wrapper"],["for","folder-toggle"],[1,"folder-icon"],["type","checkbox","id","folder-toggle"],["type","text",1,"inputField"],["inputField",""],[1,"folderButton",3,"click"],[1,"review"],["class","container",4,"ngIf"],["type","checkbox","id","folder"],["for","folder",1,"tree_label"],[4,"ngFor","ngForOf"],["for","file"],[1,"addAudioFile"],["type","file","id","file","accept",".mp3",1,"form-control","inputAudioFile",3,"change"],["type","submit",1,"uploadButton",3,"disabled","click"],["type","checkbox",3,"id"],[1,"name","tree_label",3,"for"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","faceImage"],["type","file","id","faceImage",1,"form-control",3,"change"],["for","backImage"],["type","file","id","backImage",1,"form-control",3,"change"],["for","name"],["type","text","formControlName","name","id","name",1,"form-control"],["for","author"],["type","text","formControlName","author","id","author",1,"form-control"],["for","description"],["type","textarea","formControlName","description","id","description",1,"form-control"],["type","submit",1,"btn","btn-primary"],[2,"width","200px","height","200px",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"ul",2),t.YNc(3,I,14,3,"li",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"label",5),t.TgZ(6,"mat-icon",6),t._uU(7,"create_new_folder"),t.qZA(),t.qZA(),t._UZ(8,"input",7),t._UZ(9,"input",8,9),t.TgZ(11,"button",10),t.NdJ("click",function(){return o.onCreateFolder()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t.YNc(15,S,26,3,"div",12),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.folder),t.xp6(12),t.Q6J("ngIf",o.folder))},directives:[g.O5,_.Hw,g.sg,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{margin:30px;font-family:sans-serif}.tree[_ngcontent-%COMP%]{margin:1em;font-size:16px}.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0)}.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ ul[_ngcontent-%COMP%]{display:none}.tree[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ ul[_ngcontent-%COMP%]{display:block}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1;position:relative;padding:0 0 1em 1em}.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1em 0 0 1em}.tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{padding-bottom:0}.tree_label[_ngcontent-%COMP%]{color:#fff;position:relative;display:inline-block}label.tree_label[_ngcontent-%COMP%]:hover{color:#666}label.tree_label[_ngcontent-%COMP%]:before{background:#10122b;color:#fff;position:relative;z-index:1;float:left;margin:0 1em 0 -2em;width:1em;height:1em;border-radius:1em;content:"+";text-align:center;line-height:.9em}[_ngcontent-%COMP%]:checked ~ label.tree_label[_ngcontent-%COMP%]:before{content:"\\2013"}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{position:absolute;top:0;bottom:0;left:-.5em;display:block;width:0;border-left:1px solid #777;content:""}.tree_label[_ngcontent-%COMP%]:after{position:absolute;top:0;left:-1.5em;display:block;height:.5em;width:calc(1em + 1px);border-bottom:1px solid #777;border-left:1px solid #777;border-radius:0 0 0 .3em;content:""}label.tree_label[_ngcontent-%COMP%]:after{border-bottom:0}[_ngcontent-%COMP%]:checked ~ label.tree_label[_ngcontent-%COMP%]:after{border-radius:0 .3em 0 0;border-top:1px solid #777;border-right:1px solid #777;border-bottom:0;border-left:0;bottom:0;top:.5em;height:auto}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before{height:2em;bottom:auto}.tree[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child:before{display:none}.tree_custom[_ngcontent-%COMP%]{display:block;background:#eee;padding:1em;border-radius:.3em}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;border:0}.page[_ngcontent-%COMP%]{color:#fff;display:flex;width:100%;height:calc(100% - 60px);background-color:#000}.page[_ngcontent-%COMP%]   .catalog[_ngcontent-%COMP%]{width:30%;height:100%;background-color:#0b0c1b;min-width:200px}.page[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]{width:70%;height:100%;white-space:nowrap;overflow-y:scroll}.page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px}.form-group[_ngcontent-%COMP%]{margin-top:10px}.name[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis}.uploadWrapper[_ngcontent-%COMP%]{position:relative;float:left}.addAudioFile[_ngcontent-%COMP%]{cursor:pointer;margin:0 1em 0 -2em;line-height:1em}.uploadButton[_ngcontent-%COMP%]{padding:0;border:0;background:none}.uploadButton[_ngcontent-%COMP%]:disabled{display:none}form[_ngcontent-%COMP%]{display:inline-block}.folderButton[_ngcontent-%COMP%]{font-size:16px;color:#fff;padding:0;border:0;background:none;display:block}.folder-icon[_ngcontent-%COMP%]{background-color:#0b0c1b;color:#fff;margin-right:10px;cursor:pointer}#folder-toggle[_ngcontent-%COMP%]{visibility:hidden}.folderButton[_ngcontent-%COMP%]{margin-left:7px;visibility:hidden}.inputField[_ngcontent-%COMP%]{width:100px}.inputField[_ngcontent-%COMP%]{visibility:hidden}#folder-toggle[_ngcontent-%COMP%]:checked ~ .inputField[_ngcontent-%COMP%]{visibility:visible}#folder-toggle[_ngcontent-%COMP%]:checked ~ .folderButton[_ngcontent-%COMP%]{visibility:visible}.folder-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row}.inputAudioFile[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.mat-icon[_ngcontent-%COMP%]{font-size:16px;background:#10122b;color:#fff;position:relative;z-index:1;width:1em;height:1em;border-radius:1em;text-align:center;line-height:.9em}']}),n})();const U=[{path:"",component:y,children:[{path:""},{path:"catalog",component:u},{path:"review",component:h}]},{path:"edit",component:C},{path:"edit/:name",component:C}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(U)],d.Bz]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,d.Bz,N,a.UX,x.q]]}),n})()}}]);