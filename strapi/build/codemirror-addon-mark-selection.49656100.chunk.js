(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5509],{64020:(C,x,y)=>{(function(l){l(y(4631))})(function(l){"use strict";l.defineOption("styleSelectedText",!1,function(e,t,r){var n=r&&r!=l.Init;t&&!n?(e.state.markedSelection=[],e.state.markedSelectionStyle=typeof t=="string"?t:"CodeMirror-selectedtext",p(e),e.on("cursorActivity",h),e.on("change",S)):!t&&n&&(e.off("cursorActivity",h),e.off("change",S),u(e),e.state.markedSelection=e.state.markedSelectionStyle=null)});function h(e){e.state.markedSelection&&e.operation(function(){_(e)})}function S(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation(function(){u(e)})}var f=8,k=l.Pos,o=l.cmpPos;function s(e,t,r,n){if(o(t,r)!=0)for(var a=e.state.markedSelection,i=e.state.markedSelectionStyle,c=t.line;;){var w=c==t.line?t:k(c,0),v=c+f,d=v>=r.line,b=d?r:k(v,0),g=e.markText(w,b,{className:i});if(n==null?a.push(g):a.splice(n++,0,g),d)break;c=v}}function u(e){for(var t=e.state.markedSelection,r=0;r<t.length;++r)t[r].clear();t.length=0}function p(e){u(e);for(var t=e.listSelections(),r=0;r<t.length;r++)s(e,t[r].from(),t[r].to())}function _(e){if(!e.somethingSelected())return u(e);if(e.listSelections().length>1)return p(e);var t=e.getCursor("start"),r=e.getCursor("end"),n=e.state.markedSelection;if(!n.length)return s(e,t,r);var a=n[0].find(),i=n[n.length-1].find();if(!a||!i||r.line-t.line<=f||o(t,i.to)>=0||o(r,a.from)<=0)return p(e);for(;o(t,a.from)>0;)n.shift().clear(),a=n[0].find();for(o(t,a.from)<0&&(a.to.line-t.line<f?(n.shift().clear(),s(e,t,a.to,0)):s(e,t,a.from,0));o(r,i.to)<0;)n.pop().clear(),i=n[n.length-1].find();o(r,i.to)>0&&(r.line-i.from.line<f?(n.pop().clear(),s(e,i.from,r)):s(e,i.to,r))}})}}]);
