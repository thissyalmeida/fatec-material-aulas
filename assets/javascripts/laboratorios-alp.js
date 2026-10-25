(function(){
"use strict";
function setup(id,fn){function run(){const r=document.getElementById(id);if(r&&r.dataset.ready!=="1"){r.dataset.ready="1";fn(r)}}if(typeof document$!=="undefined")document$.subscribe(run);else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run()}
const el=(tag,txt,cls)=>{const n=document.createElement(tag);if(txt!==undefined)n.textContent=txt;if(cls)n.className=cls;return n};

setup("lab-decimal-binario",r=>{
 const input=r.querySelector("#decbin-input"),out=r.querySelector("#decbin-output"),tbody=r.querySelector("#decbin-steps"),msg=r.querySelector("#decbin-msg");
 function convert(){tbody.replaceChildren();msg.className="lab-message";let raw=input.value.trim();if(!/^\d+$/.test(raw)||Number(raw)>255){out.textContent="—";msg.classList.add("error");msg.textContent="Digite um inteiro entre 0 e 255.";return}
 let n=Number(raw),cur=n,rows=[];if(cur===0)rows.push([0,0,0]);while(cur>0){let q=Math.floor(cur/2);rows.push([cur,q,cur%2]);cur=q}
 rows.forEach(x=>{let tr=el("tr");[x[0],"÷ 2",x[1],x[2]].forEach(v=>tr.appendChild(el("td",String(v))));tbody.appendChild(tr)});
 out.textContent=rows.map(x=>x[2]).reverse().join("");msg.classList.add("success");msg.textContent=`${raw} em decimal = ${out.textContent} em binário. Leia os restos de baixo para cima.`}
 r.querySelector("#decbin-go").addEventListener("click",convert);input.addEventListener("keydown",e=>{if(e.key==="Enter")convert()});convert();
});

setup("lab-memoria",r=>{
 const size=r.querySelector("#mem-size"),base=r.querySelector("#mem-base"),grid=r.querySelector("#mem-grid"),detail=r.querySelector("#mem-detail");
 function render(){let count=Number(size.value),start=Math.max(0,Number(base.value)||0);grid.replaceChildren();for(let i=0;i<count;i++){let c=el("button",String(i%2),"memory-cell");c.type="button";c.title=`Endereço ${start+i}`;c.addEventListener("click",()=>{grid.querySelectorAll("button").forEach(b=>b.classList.remove("active"));c.classList.add("active");detail.textContent=`Endereço ${start+i}: célula ilustrativa de 1 byte. Valor demonstrativo: ${c.textContent}.`});grid.appendChild(c)}r.querySelector("#mem-count").textContent=count;r.querySelector("#mem-bits").textContent=count*8;r.querySelector("#mem-range").textContent=`${start} a ${start+count-1}`;detail.textContent="Selecione uma célula para consultar o endereço."}
 size.addEventListener("change",render);base.addEventListener("input",render);render();
});

setup("lab-logica",r=>{
 const tasks=[
 ["Se idade = 17, qual é a saída? idade >= 18 ? 'Maior' : 'Menor'","menor","17 é menor que 18, então a condição é falsa e a saída é Menor."],
 ["Qual é o valor final de x? x = 4; se x > 2, x = x + 3","7","Como 4 > 2 é verdadeiro, x recebe 4 + 3, resultando em 7."],
 ["Quantas vezes executa um laço de 1 até 4, incluindo 4?","4","Os valores são 1, 2, 3 e 4: quatro repetições."],
 ["Qual é a soma final? soma = 0; para i de 1 até 3: soma = soma + i","6","A soma acumula 1 + 2 + 3, resultando em 6."],
 ["Se nota = 6, a condição nota >= 7 é verdadeira ou falsa?","falsa","6 não é maior nem igual a 7, portanto a condição é falsa."],
 ["Quantas vezes executa um laço de 0 até 2, incluindo 2?","3","Os valores são 0, 1 e 2: três execuções."]
 ];
 let idx=0,points=0,done=false;const q=r.querySelector("#logic-question"),ans=r.querySelector("#logic-answer"),fb=r.querySelector("#logic-feedback"),why=r.querySelector("#logic-why"),check=r.querySelector("#logic-check");
 function show(){q.textContent=tasks[idx][0];ans.value="";ans.disabled=false;check.disabled=false;fb.textContent="";fb.className="lab-message";why.hidden=true;done=false}
 check.addEventListener("click",()=>{if(done)return;let val=ans.value.trim().toLowerCase();if(!val){fb.className="lab-message error";fb.textContent="Digite uma resposta.";return}done=true;let t=tasks[idx];if(val===t[1]){points++;r.querySelector("#logic-score").textContent=points;fb.className="lab-message success";fb.textContent="Correto! +1 ponto."}else{fb.className="lab-message error";fb.textContent=`Resposta esperada: ${t[1]}.`}why.textContent=t[2];why.hidden=false;ans.disabled=true;check.disabled=true});
 r.querySelector("#logic-next").addEventListener("click",()=>{idx=(idx+1)%tasks.length;show()});ans.addEventListener("keydown",e=>{if(e.key==="Enter")check.click()});show();
});

setup("lab-bubble-sort",r=>{
 const input=r.querySelector("#sort-input"),bars=r.querySelector("#sort-bars"),status=r.querySelector("#sort-status"),stepLabel=r.querySelector("#sort-step"),next=r.querySelector("#sort-next");
 let steps=[],pos=0;
 function load(){let raw=input.value.split(",").map(s=>s.trim());if(raw.length<2||raw.length>8||raw.some(s=>! /^-?\d+$/.test(s))||raw.some(s=>Math.abs(Number(s))>999)){status.className="lab-message error";status.textContent="Digite de 2 a 8 inteiros entre -999 e 999, separados por vírgula.";return}
 let a=raw.map(Number);steps=[];for(let p=0;p<a.length-1;p++){for(let k=0;k<a.length-1-p;k++){let before=a.slice(),swap=a[k]>a[k+1];steps.push({a:before,i:k,j:k+1,swap,pass:p+1});if(swap)[a[k],a[k+1]]=[a[k+1],a[k]]}}steps.push({a:a.slice(),i:-1,j:-1,done:true});pos=0;draw()}
 function draw(){let s=steps[pos];bars.replaceChildren();let max=Math.max(1,...s.a.map(Math.abs));s.a.forEach((v,k)=>{let b=el("div",String(v),"sort-bar"+((k===s.i||k===s.j)?" compare":"")+(s.done?" sorted":""));b.style.height=(35+Math.abs(v)/max*100)+"px";bars.appendChild(b)});if(s.done){status.textContent="Ordenação concluída!";stepLabel.textContent=`Passo ${pos+1} de ${steps.length}: vetor ordenado.`}else{status.textContent=`Comparando ${s.a[s.i]} e ${s.a[s.j]}: ${s.swap?"os elementos serão trocados.":"não é necessária troca."}`;stepLabel.textContent=`Passo ${pos+1} de ${steps.length} · passada ${s.pass}.`}next.disabled=pos===steps.length-1}
 r.querySelector("#sort-start").addEventListener("click",load);r.querySelector("#sort-reset").addEventListener("click",()=>{input.value="5, 2, 8, 1, 4";load()});next.addEventListener("click",()=>{if(pos<steps.length-1){pos++;draw()}});load();
});
})();
