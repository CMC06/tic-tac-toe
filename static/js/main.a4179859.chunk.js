(this["webpackJsonptic-tak-toe"]=this["webpackJsonptic-tak-toe"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),s=a.n(r),i=(a(12),a(6)),j=a(3),o=(a(13),a(0)),l=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Tic Tac Toe"})})},b=function(e){var t=e.markSpace,a=e.id;return Object(o.jsx)("button",{className:"sqButton",onClick:function(e){return t(a,e)},children:Object(o.jsx)("p",{children:""})})},d=function(e){var t=e.markSpace,a=e.id;return Object(o.jsx)("div",{className:"square",children:Object(o.jsx)(b,{markSpace:t,id:a})})},u=function(e){var t=e.markSpace;return Object(o.jsxs)("div",{className:"board",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{id:0,markSpace:t}),Object(o.jsx)(d,{id:3,markSpace:t}),Object(o.jsx)(d,{id:6,markSpace:t})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{id:1,markSpace:t}),Object(o.jsx)(d,{id:4,markSpace:t}),Object(o.jsx)(d,{id:7,markSpace:t})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{id:2,markSpace:t}),Object(o.jsx)(d,{id:5,markSpace:t}),Object(o.jsx)(d,{id:8,markSpace:t})]})]})},O=function(e){var t=e.player,a=e.newGame,c=e.winner;e.moveCount;return Object(o.jsxs)("footer",{className:"footer",children:["There isn't a winner yet."===c?Object(o.jsxs)("p",{children:["Player ",t?"O":"X",", it's your turn!"]}):null,"There isn't a winner yet."===c?Object(o.jsx)("p",{className:"smallP",children:"Can you mark 3 spaces in a row? The first player to mark 3 spaces in a row, wins!"}):null,Object(o.jsx)("p",{children:c}),Object(o.jsx)("button",{onClick:a,children:"New Game"})]})};var p=function(){var e=Object(c.useState)([2,2,2,2,2,2,2,2,2]),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(0),s=Object(j.a)(r,2),b=s[0],d=s[1],p=Object(c.useState)("There isn't a winner yet."),m=Object(j.a)(p,2),h=m[0],x=m[1],f=Object(c.useState)(0),k=Object(j.a)(f,2),v=k[0],w=k[1],S=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],y=function(e,t){t<5||(S.forEach((function(t){if(console.log(e[t[0]]+" "+e[t[1]]+" "+e[t[2]]),e[t[0]]===e[t[1]]&&e[t[1]]===e[t[2]]){if(0===e[t[0]])return void x("Player X wins!");if(1===e[t[0]])return void x("Player O wins!")}})),9===t&&x("This game is a tie! Everyone wins (and loses)..."))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{markSpace:function(e,t){if("<p></p>"===t.target.innerHTML){t.preventDefault(),0===b?t.target.innerHTML="X":1===b&&(t.target.innerHTML="O");var c=v+1;w(c);var r=Object(i.a)(a);r[e]=b,n(Object(i.a)(r)),y(r,c),d((b+1)%2)}else alert("You cannot move here, this spot is taken by another player. Try another space.")}}),Object(o.jsx)(O,{player:b,newGame:function(){window.location.reload()},winner:h,moveCount:v})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4179859.chunk.js.map