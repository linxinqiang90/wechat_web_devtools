"use strict";function init(){var e=require("../../../lib/react.js"),a=require("../../../cssStr/cssStr.js"),t=require("../../../stores/webviewStores.js"),r=require("../../../stores/windowStores.js"),i=(require("../../../actions/webviewActions.js"),require("../../../actions/leftviewActions.js"),require("../../../stores/leftviewStores.js"),require("../../../common/log/log.js")),d=(require("../../../common/jssdk/sdkNameTrans.js"),require("../../../config/errcodeConfig.js"),require("../../../config/urlConfig.js")),s=d.batchAddCardURL,c=require("../../../common/request/request.js"),n=require("querystring"),m=e.createClass({displayName:"AddCardView",getInitialState:function(){return{lazyLoaded:!1,show:!1,cardList:[]}},componentDidMount:function(){t.on("SHOW_ADD_CARD_VIEW",this._showAddCardView)},componentWillUnmount:function(){t.removeListener("SHOW_ADD_CARD_VIEW",this._showAddCardView)},_showAddCardView:function(e){this.callback=e.callback,this.setState({show:!0,lazyLoaded:!0,cardArgs:e.cardArgs,cardList:e.cardList})},cancel:function(){this.close(),this.callback({errMsg:"addCard:cancel"})},close:function(e){this.setState({show:!1})},batchAddCard:function(e){for(var a=this,t=this.props.project,r=t.appid,d=t.ext_appid,m=t.platform,l=this.state.cardArgs,o=l.cardList||[],w=[],v=0;v<o.length;v++){var _=o[v];w.push({card_id:_.card_id,card_ext:_.card_ext,is_succ:1})}var b={appid:d?d:r,acceptitem_list:w},u={isapp:1,platform:m?1:0,appid:r,ext_appid:d},p={url:s+"?"+n.stringify(u),body:JSON.stringify(b),method:"post",needToken:!0};c(p,function(e,t,r){if(e)i.error("WebviewCards.js batchAddCard request error "+JSON.stringify(e)),a.callback({errMsg:"addCard:fail; "+JSON.stringify(e)}),a.close();else{var d=JSON.parse(r),s=d.baseresponse||{};if(0===s.errcode){var c=d.resp_list;c=c.map(function(e,a){var t=w[a],r=JSON.parse(e.json_ret);return{cardId:t.card_id,cartExt:t.card_ext,code:r.encrypt_code,isSuccess:!0}}),a.callback({errMsg:"addCard:ok",cardList:c}),a.close()}else a.callback({errMsg:"addCard:fail "+s.errmsg}),a.close()}})},formatTime:function(e){var a=new Date(1e3*e);return a.getFullYear()+"."+(a.getMonth()+1)+"."+a.getDate()},cardDetail:function(e){var a=e.currentTarget,t=a.dataset,r=t.index;this.setState({showDetails:!0,cardIndex:r})},render:function(){var t=this;if(!this.state.lazyLoaded)return null;var i=this.state.show?{}:a.displayNone,d=r.getOffset();i=Object.assign({},i,{height:d.height+42,width:d.width});var s=this.state.cardList||[],c=!1,n=s.map(function(a,r){if(a.errmsg)return e.createElement("div",{className:"webview-card-add-item",key:r},e.createElement("div",{className:"webview-card-add-item_top"},e.createElement("div",{className:"webview-card-add-item_details"},e.createElement("div",{className:"webview-card-add-item_name"},"cardId: ",a.card_id),e.createElement("div",{className:"webview-card-add-item_info"},e.createElement("span",{className:"webview-card-add-item_intro"},"errmsg: ",a.errmsg)))),e.createElement("div",{className:"webview-card-add-item_bottom webview-card-add-item_bottom_error"},e.createElement("div",{className:"webview-card-add-item_button"},"错误卡券")));var i=a.card_tp_info,d=i.brand_name,s=i.title,n=i.logo_url,m=a.card_data_info,l=t.formatTime(i.begin_time),o=t.formatTime(i.end_time);return 0!=m.limit_num&&(c=!0),e.createElement("div",{key:r},e.createElement("div",{className:"webview-card-add-item_top"},e.createElement("div",{className:"webview-card-add-item_left"},e.createElement("img",{className:"webview-card-add-item_img",src:n})),e.createElement("div",{className:"webview-card-add-item_details"},e.createElement("div",{className:"webview-card-add-item_name"},d),e.createElement("div",{className:"webview-card-add-item_info"},e.createElement("span",{className:"webview-card-add-item_intro"},s),e.createElement("span",{className:"webview-card-add-item_num"},"X",a.amount)),e.createElement("div",{className:"webview-card-add-item_time"},l," - ",o))),e.createElement("div",{className:"webview-card-add-item_bottom webview-card-add-item_bottom_disable",style:{backgroundColor:i.color,display:0===m.limit_num?"":"none"}},e.createElement("div",{className:"webview-card-add-item_button_error"},i.limit_wording)))});return e.createElement("div",{className:"webview-card weapp-card-wrap",style:i},e.createElement("div",{className:"webview-card-add"},e.createElement("div",{className:"webview-card-add-header"},e.createElement("div",{className:"webview-card-add-header_button",onClick:this.cancel}," 取消 "),e.createElement("div",{className:"webview-card-add-header_title"}," 添加卡卷 ")),e.createElement("div",{className:"webview-card-add-container"},e.createElement("div",{className:"webview-card-add-item"},n,e.createElement("div",{onClick:this.batchAddCard,className:"webview-card-add-item_bottom",style:{display:c?"":"none"}},e.createElement("div",{className:"webview-card-add-item_button"},"领取到卡包"))))))}});_exports=m}var _exports;init(),module.exports=_exports;