// Цели/события для счётчиков (ЛР4, ЛР5). Подключите вызовы своего счётчика в track().
function track(name,extra){console.log('event:',name,extra||'');
 try{window._tmr&&window._tmr.push({type:'reachGoal',id:name});}catch(e){}
 try{window.ym&&0;}catch(e){}}
document.addEventListener('click',function(e){var t=e.target.closest('[data-event],#btn-search,#btn-subscribe');if(!t)return;
 var n=t.dataset.event||t.id;track(n,t.dataset.book||t.dataset.article||'');
 if(t.id==='btn-subscribe'){var m=document.getElementById('msg');if(m)m.textContent='Спасибо! Подписка оформлена (демо).';}
 if(t.tagName==='A'&&t.getAttribute('href')==='#')e.preventDefault();});