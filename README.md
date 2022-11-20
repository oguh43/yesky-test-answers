# yesky-test-answers
Koho to má baviť, po jednom si pozerať odpovede... Načo je tam ten hover efect?<br>
Tento script Vám extrahuje a stiahne správne odpovede.<br>
Stačí vložiť riadok dolu do url a je to :) **POZOR NA TO, ABY VÁM PO VLOŽENÍ ZOSTAL NA ZAČIATKU "javascript:"!!**<br>
```
javascript:!function(){if(null!==document.querySelector('button[type="submit"]').offsetParent){alert("Please submit the test first!");return}let e=Array.prototype.slice.call(document.getElementsByClassName("grafeon-generate-test")[0].children),t=!1,l=[];e.forEach(e=>{if(!t){"h2"==e.tagName.toLowerCase()&&(t=!0);return}"input"==e.tagName.toLowerCase()&&(t=!1),l.push(e)}),l.shift(),l=l.filter(e=>"div"==e.tagName.toLowerCase());let o={};for(let a=0;a<l.length;a++){o[a]={};let r=Array.prototype.slice.call(l[a].getElementsByClassName("yesky_popover"));for(let n=0;n<r.length;n++)o[a][n]=r[n].dataset.content}let s=window.document.createElement("a");s.href=window.URL.createObjectURL(new Blob([JSON.stringify(o,void 0,2)],{type:"text/plain"})),s.download="odpovede.txt",document.body.appendChild(s),s.click(),document.body.removeChild(s)}();
```







