(this.webpackJsonplab2salsali=this.webpackJsonplab2salsali||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),s=n.n(i),l=(n(13),n(3)),c=n(4),u=n(7),o=n(5),d=n(6),h=(n(14),n(0));function j(e,t,n,a){return null!==e&&e===t&&e===n&&e===a}function b(e){return Object(h.jsx)("div",{className:"Hole",children:Object(h.jsx)("div",{className:e.value,children:Object(h.jsx)("button",{className:"piece"})})})}function f(e){return Object(h.jsx)("div",{className:"Slat",onClick:function(){return e.handleClick()},children:Object(d.a)(Array(e.holes.length)).map((function(t,n){return Object(h.jsx)(b,{value:e.holes[n]},n)}))})}var v=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={boardState:new Array(7).fill(new Array(6).fill(null)),playerTurn:"Red",gameSelected:!1,winner:"",remainingSquares:42},e}return Object(c.a)(n,[{key:"selectedGame",value:function(){this.setState({gameSelected:!0,boardState:new Array(7).fill(new Array(6).fill(null)),remainingSquares:42})}},{key:"makeMove",value:function(e){var t=this.state.boardState.map((function(e){return e.slice()}));if(-1!==t[e].indexOf(null)){var n=t[e].reverse();n[n.indexOf(null)]=this.state.playerTurn,n.reverse();var a=this.state.remainingSquares-1;this.setState({playerTurn:"Red"===this.state.playerTurn?"Yellow":"Red",boardState:t,remainingSquares:a}),console.log(this.state.remainingSquares)}}},{key:"handleClick",value:function(e){""===this.state.winner&&this.makeMove(e)}},{key:"componentDidUpdate",value:function(){var e=function(e){console.log(e);for(var t=0;t<7;t++)for(var n=0;n<4;n++)if(j(e[t][n],e[t][n+1],e[t][n+2],e[t][n+3]))return e[t][n]+" wins!";for(var a=0;a<6;a++)for(var r=0;r<4;r++)if(j(e[r][a],e[r+1][a],e[r+2][a],e[r+3][a]))return e[r][a]+" wins!";return""}(this.state.boardState);this.state.winner!==e&&this.setState({winner:e}),0===this.state.remainingSquares&&(alert("All holes are full"),this.selectedGame())}},{key:"render",value:function(){var e,t=this;e=""!==this.state.winner?"winnerMessage appear":"winnerMessage";var n=Object(d.a)(Array(this.state.boardState.length)).map((function(e,n){return Object(h.jsx)(f,{holes:t.state.boardState[n],handleClick:function(){return t.handleClick(n)}},n)}));return Object(h.jsxs)("div",{children:[this.state.gameSelected&&Object(h.jsx)("div",{className:"Board",children:n}),Object(h.jsx)("div",{className:e,children:this.state.winner}),(!this.state.gameSelected||""!==this.state.winner)&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"playButton",onClick:function(){return t.selectedGame()},children:"Play Game"})})]})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{className:"Game",children:Object(h.jsx)(v,{})})})}}]),n}(a.Component),O=m,p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.03b27677.chunk.js.map