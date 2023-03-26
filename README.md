# yesky-test-answers
Koho to má baviť, po jednom si pozerať odpovede... Načo je tam ten hover efect?<br>
Tento script Vám extrahuje a stiahne správne odpovede.<br>
Stačí vložiť riadok dolu do url a je to :) **POZOR NA TO, ABY VÁM PO VLOŽENÍ ZOSTAL NA ZAČIATKU "javascript:"!!**<br>
```
javascript:!function(){if(null!==document.querySelector('button[type="submit"]').offsetParent){alert("Please submit the test first!");return}let e=Array.prototype.slice.call(document.getElementsByClassName("grafeon-generate-test")[0].children),t=!1,n=[];e.forEach(e=>{if(!t){"h2"==e.tagName.toLowerCase()&&(t=!0);return}"input"==e.tagName.toLowerCase()&&(t=!1),n.push(e)}),n.shift(),n=n.filter(e=>"div"==e.tagName.toLowerCase());let l={};for(let r=0;r<n.length;r++){l[r]={};let a=Array.prototype.slice.call(n[r].getElementsByClassName("yesky_popover"));for(let o=0;o<a.length;o++)l[r][o]=a[o].dataset.content}let i=Array.prototype.slice.call(document.getElementsByClassName("correct wrong"));if(i.length>0){let s={};i.forEach(e=>{Object.keys(s).includes(e.parentElement.parentElement.children[0].children[0].children[0].innerText)||(s[e.parentElement.parentElement.children[0].children[0].children[0].innerText]=[]),s[e.parentElement.parentElement.children[0].children[0].children[0].innerText].push(e)}),count=Object.keys(l).length-(0==Object.keys(l[Object.keys(l).length-1]).length?1:0),Object.keys(s).forEach(e=>{l[count]={};for(let t=0;t<s[e].length;t++)l[count][t]=`Spr\xe1vne odpovede: ${s[e][t].innerText}`;count++})}let c=window.document.createElement("a");c.href=window.URL.createObjectURL(new Blob([JSON.stringify(l,void 0,2)],{type:"text/plain"})),c.download="odpovede.txt",document.body.appendChild(c),c.click(),document.body.removeChild(c)}();
```







