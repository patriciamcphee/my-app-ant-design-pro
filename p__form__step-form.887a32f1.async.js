(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(T,i,e){"use strict";var m=e(22122),n=e(28991),p=e(81253),t=e(67294),_=e(97519),P=["fieldProps","min","proFieldProps","max"],a=function(l,E){var x=l.fieldProps,s=l.min,D=l.proFieldProps,o=l.max,r=(0,p.Z)(l,P);return t.createElement(_.Z,(0,m.Z)({mode:"edit",valueType:"digit",fieldProps:(0,n.Z)({min:s,max:o},x),ref:E,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:D},r))};i.Z=t.forwardRef(a)},64317:function(T,i,e){"use strict";var m=e(22122),n=e(28991),p=e(81253),t=e(96202),_=e(67294),P=e(66758),a=e(97519),F=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],l=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],E=_.forwardRef(function(r,d){var R=r.fieldProps,c=r.children,h=r.params,g=r.proFieldProps,C=r.mode,f=r.valueEnum,L=r.request,M=r.showSearch,I=r.options,W=(0,p.Z)(r,F),O=(0,_.useContext)(P.Z);return _.createElement(a.Z,(0,m.Z)({mode:"edit",valueEnum:(0,t.h)(f),request:L,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:I,mode:C,showSearch:M,getPopupContainer:O.getPopupContainer},R),ref:d,proFieldProps:g},W),c)}),x=_.forwardRef(function(r,d){var R=r.fieldProps,c=r.children,h=r.params,g=r.proFieldProps,C=r.mode,f=r.valueEnum,L=r.request,M=r.options,I=(0,p.Z)(r,l),W=(0,n.Z)({options:M,mode:C||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},R),O=(0,_.useContext)(P.Z);return _.createElement(a.Z,(0,m.Z)({mode:"edit",valueEnum:(0,t.h)(f),request:L,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({getPopupContainer:O.getPopupContainer},W),ref:d,proFieldProps:g},I),c)}),s=E,D=x,o=s;o.SearchSelect=D,o.displayName="ProFormComponent",i.Z=o},5966:function(T,i,e){"use strict";var m=e(22122),n=e(81253),p=e(67294),t=e(97519),_=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],a="text",F=function(s){var D=s.fieldProps,o=s.proFieldProps,r=(0,n.Z)(s,_);return p.createElement(t.Z,(0,m.Z)({mode:"edit",valueType:a,fieldProps:D,filedConfig:{valueType:a},proFieldProps:o},r))},l=function(s){var D=s.fieldProps,o=s.proFieldProps,r=(0,n.Z)(s,P);return p.createElement(t.Z,(0,m.Z)({mode:"edit",valueType:"password",fieldProps:D,proFieldProps:o,filedConfig:{valueType:a}},r))},E=F;E.Password=l,E.displayName="ProFormComponent",i.Z=E},88227:function(T){T.exports={card:"card___2gwEq",result:"result___OtC7Q"}},33208:function(T,i,e){"use strict";e.r(i);var m=e(58024),n=e(91894),p=e(48736),t=e(27049),_=e(17462),P=e(76772),a=e(3182),F=e(2824),l=e(57106),E=e(99683),x=e(57663),s=e(71577),D=e(95300),o=e(7277),r=e(98858),d=e(4914),R=e(94043),c=e.n(R),h=e(67294),g=e(75362),C=e(65554),f=e(64317),L=e(952),M=e(5966),I=e(31199),W=e(88227),O=e.n(W),u=e(85893),V=function(B){var A=B.stepData,Z=B.bordered,b=A.payAccount,N=A.receiverAccount,j=A.receiverName,$=A.amount;return(0,u.jsxs)(d.Z,{column:1,bordered:Z,children:[(0,u.jsxs)(d.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",b]}),(0,u.jsxs)(d.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",N]}),(0,u.jsxs)(d.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",j]}),(0,u.jsx)(d.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,u.jsx)(o.Z,{value:$,suffix:(0,u.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},H=function(B){return(0,u.jsx)(E.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Z,{type:"primary",onClick:B.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,u.jsx)(s.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:O().result,children:B.children})},J=function(){var B=(0,h.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),A=(0,F.Z)(B,2),Z=A[0],b=A[1],N=(0,h.useState)(0),j=(0,F.Z)(N,2),$=j[0],G=j[1],Q=(0,h.useRef)();return(0,u.jsx)(g.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,u.jsxs)(n.Z,{bordered:!1,children:[(0,u.jsxs)(C.L,{current:$,onCurrentChange:G,submitter:{render:function(v,K){return v.step===2?null:K}},children:[(0,u.jsxs)(C.L.StepForm,{formRef:Q,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:Z,onFinish:function(){var y=(0,a.Z)(c().mark(function v(K){return c().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return b(K),S.abrupt("return",!0);case 2:case"end":return S.stop()}},v)}));return function(v){return y.apply(this,arguments)}}(),children:[(0,u.jsx)(f.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,u.jsxs)(L.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,u.jsx)(f.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,u.jsx)(M.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,u.jsx)(M.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,u.jsx)(I.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,u.jsx)(C.L.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,u.jsxs)("div",{className:O().result,children:[(0,u.jsx)(P.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,u.jsx)(V,{stepData:Z,bordered:!0}),(0,u.jsx)(t.Z,{style:{margin:"24px 0"}}),(0,u.jsx)(M.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,u.jsx)(C.L.StepForm,{title:"\u5B8C\u6210",children:(0,u.jsx)(H,{onFinish:(0,a.Z)(c().mark(function y(){var v;return c().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:G(0),(v=Q.current)===null||v===void 0||v.resetFields();case 2:case"end":return U.stop()}},y)})),children:(0,u.jsx)(V,{stepData:Z})})})]}),(0,u.jsx)(t.Z,{style:{margin:"40px 0 24px"}}),(0,u.jsxs)("div",{className:O().desc,children:[(0,u.jsx)("h3",{children:"\u8BF4\u660E"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};i.default=J}}]);
