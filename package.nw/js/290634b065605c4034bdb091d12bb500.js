'use strict';!function(require,directRequire){async function a(){return i.Allow}const b=require('./common/locales/index.js'),c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./3bfffbe88b3d923921f851c0697974fe.js'),e=require('./eda58163e223e41c62255b89f8e4a1c3.js'),f=require('./15ba1827c7f6564a45df6bd44da3a977.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i={NoAllow:0,Allow:1,UserCancel:2,AuthFail:3};module.exports={exec:function(d){let{api:f,callbackID:g}=d,h='';return(j)=>{a(f,j).then((a)=>{if(a==i.Allow){if(e[f])return e[f](j,d);throw h=b.config.API_NOT_SUPPORT,b.config.API_NOT_SUPPORT}else if(a==i.NoAllow)throw h='auth deny',b.config.API_NOT_ALLOW;else if(a==i.UserCancel)throw h='auth deny',b.config.API_USER_CANCEL}).then((a)=>{a&&j({type:c.ASSDK_CALLBACK,res:a,callbackID:g})}).catch(()=>{j({type:c.ASSDK_CALLBACK,res:{errMsg:`${f}:fail ${h}`},callbackID:g})})}}}}(require('lazyload'),require);