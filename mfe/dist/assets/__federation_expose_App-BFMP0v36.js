import{r as a}from"./__federation_shared_react-CsUMYuEf.js";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=a,m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,f){var e,o={},s=null,_=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)x.call(r,e)&&!y.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:s,ref:_,props:o,_owner:d.current}}n.Fragment=c;n.jsx=l;n.jsxs=l;i.exports=n;var p=i.exports;function R(){return p.jsx(p.Fragment,{children:p.jsx("div",{className:"mfe__container",children:"MY REACT MF1 WORKS!!"})})}export{R as default,p as j};
