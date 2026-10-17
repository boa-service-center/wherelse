document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.querySelector('span').textContent=open?'−':'＋';});}
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const top=document.querySelector('.back-top');
 if(top){window.addEventListener('scroll',()=>top.classList.toggle('visible',window.scrollY>500),{passive:true});top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
 document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const message=form.querySelector('.form-message');if(!form.checkValidity()){form.reportValidity();return;}if(message)message.textContent='Demo confirmation only. This form is not connected to a service and no data was sent or stored.';form.reset();}));
 const revealTargets=document.querySelectorAll('.card,.resource-card,.split-section,.band-inner,.service-row');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}}),{threshold:.08});revealTargets.forEach(el=>observer.observe(el));}
});
