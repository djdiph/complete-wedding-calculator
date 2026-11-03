const LABELS={photography:'Photography',videography:'Videography',DJ:'DJ / MC',photo_booth:'Photo Booth',coordination:'Coordination'};
const state={services:{},addons:{},open:'photography'};
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const INCLUDED={photo_premium:['photo_engagement','photo_second','photo_rush','photo_book'],video_premium:['video_drone','video_ceremony'],dj_plus:['dj_audio_book'],dj_premium:['dj_specific'],booth_plus:['booth_prints'],booth_premium:['booth_prints']};
function included(cat,id){return (INCLUDED[state.services[cat]]||[]).includes(id)}
function calculate(services=state.services,addons=state.addons){
 const rows=Object.entries(services).flatMap(([category,id])=>{const p=SERVICES_DATA[category]?.find(x=>x.id===id);return p?[{category,...p}]:[]});
 const extra=rows.flatMap(p=>(addons[p.category]||[]).flatMap(id=>{const a=ADDONS_DATA[p.category]?.find(x=>x.id===id);return a&&!(INCLUDED[p.id]||[]).includes(id)?[{category:p.category,...a}]:[]}));
 const count=rows.length,subtotal=[...rows,...extra].reduce((s,x)=>s+x.price,0);
 let percent=count<2?0:({2:5,3:10,4:12,5:18}[count]||0);
 if(count>=4&&rows.every(x=>x.id.endsWith('_premium')))percent=20;
 const discount=Math.round(subtotal*percent/100);
 return {rows,extra,count,subtotal,percent,discount,total:Math.max(0,subtotal-discount)};
}
function select(cat,id){state.services[cat]=state.services[cat]===id?null:id;if(!state.services[cat])delete state.addons[cat];else state.addons[cat]=(state.addons[cat]||[]).filter(x=>!included(cat,x));render()}
function render(){
 const p=calculate();
 document.querySelector('#services').innerHTML=Object.entries(SERVICES_DATA).map(([cat,items],i)=>{
 const chosen=items.find(x=>x.id===state.services[cat]); const open=state.open===cat;
 return '<article class="service '+(chosen?'selected':'')+'"><button class="service-head" data-open="'+cat+'" aria-expanded="'+open+'" aria-controls="body-'+cat+'"><span class="service-number">'+(chosen?'✓':'0'+(i+1))+'</span><span><h3>'+LABELS[cat]+'</h3><small>'+(chosen?esc(chosen.name):'Find your perfect fit')+'</small></span><span class="head-price">'+(chosen?money(chosen.price):'From '+money(items[0].price))+'</span><span class="chevron">'+(open?'−':'+')+'</span></button><div class="service-body" id="body-'+cat+'" '+(open?'':'hidden')+'><div class="tiers">'+items.map((t,j)=>'<button class="tier '+(chosen?.id===t.id?'chosen':'')+'" data-cat="'+cat+'" data-service="'+t.id+'" aria-pressed="'+(chosen?.id===t.id)+'"><small>'+(j===1?'A LITTLE MORE OF EVERYTHING':j===2?'THE FULL EXPERIENCE':'THE ESSENTIALS')+'</small><strong>'+esc(t.name)+'</strong><span class="price">'+money(t.price)+'</span><ul>'+t.features.map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul><span class="choose">'+(chosen?.id===t.id?'✓ Selected':'Select package +')+'</span></button>').join('')+'</div>'+
 (chosen?'<h4 class="addon-title">The finishing touches</h4>'+ADDONS_DATA[cat].map(a=>'<label class="addon '+(included(cat,a.id)?'included':'')+'"><input type="checkbox" data-addon="'+a.id+'" data-cat="'+cat+'" '+(included(cat,a.id)||state.addons[cat]?.includes(a.id)?'checked':'')+' '+(included(cat,a.id)?'disabled':'')+'><span>'+esc(a.name)+'<small>'+esc(a.description)+'</small></span><b>'+(included(cat,a.id)?'Included':'+ '+money(a.price))+'</b></label>').join('')+'<button class="remove-service" data-remove="'+cat+'">Remove '+LABELS[cat]+'</button>':'')+'</div></article>';
 }).join('');
 document.querySelector('#summary').innerHTML='<p class="eyebrow">YOUR DAY, COMING TOGETHER</p><h2>Your wedding package</h2><p class="summary-note">A few great choices. One seamless celebration.</p><div class="progress">'+[1,2,3,4,5].map(i=>'<i class="'+(p.count>=i?'active':'')+'"></i>').join('')+'</div><span class="progress-label">'+p.count+' of 5 services selected</span><div class="summary-lines">'+(p.count?p.rows.map(r=>'<div class="line"><span>'+LABELS[r.category]+'<small>'+esc(r.name)+' · <button data-edit="'+r.category+'">Edit</button></small></span><span>'+money(r.price)+'</span></div>'+p.extra.filter(a=>a.category===r.category).map(a=>'<div class="line addon-line"><span>+ '+esc(a.name)+'</span><span>'+money(a.price)+'</span></div>').join('')).join(''):'<p class="empty">Your day is a blank canvas.<br>Choose a service to get started.</p>')+'</div><div class="totals"><div class="line"><span>Subtotal</span><span>'+money(p.subtotal)+'</span></div><div class="line discount"><span>Bundle savings'+(p.percent?' · '+p.percent+'%':'')+'</span><span>−'+money(p.discount)+'</span></div><div class="grand"><span>Estimated total</span><strong>'+money(p.total)+'</strong></div><p class="saved">'+(p.discount?'You’re saving '+money(p.discount)+' by celebrating together.':p.count===1?'Add a second service to unlock 5% savings.':'Your perfect package starts with one choice.')+'</p><button class="primary" id="contact-open" '+(!p.count?'disabled':'')+'>Talk about my wedding <span>↗</span></button><button class="secondary" id="download" '+(!p.count?'disabled':'')+'>Download my estimate ↓</button><button class="reset" id="reset" '+(!p.count?'disabled':'')+'>Start fresh</button><p class="estimate-note">An estimate, subject to availability and final confirmation.</p></div>';
 document.querySelector('#mobile-amount').textContent=money(p.total);
}
function quote(){const p=calculate();return 'COMPLETE WEDDINGS + EVENTS — SEATTLE\nWedding Quote Estimate\n\n'+p.rows.map(r=>LABELS[r.category]+': '+r.name+' — '+money(r.price)+'\n'+p.extra.filter(a=>a.category===r.category).map(a=>'  + '+a.name+' — '+money(a.price)).join('\n')).join('\n\n')+'\n\nSubtotal: '+money(p.subtotal)+'\nBundle discount ('+p.percent+'%): -'+money(p.discount)+'\nESTIMATED TOTAL: '+money(p.total)+'\n\nJoe McKinney\n(253) 248-7040\njoe.mckinney@completewedo.com\n\nGenerated: '+new Date().toLocaleString()+'\nPrices current as of Feb 1, 2026. Estimate only. Final pricing, applicable taxes, travel, requirements, and availability are confirmed with your consultant.'}
let toastTimer;
function notify(t){document.querySelector('#status').textContent=t;clearTimeout(toastTimer);toastTimer=setTimeout(()=>document.querySelector('#status').textContent='',4000)}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.open){state.open=state.open===b.dataset.open?null:b.dataset.open;render()}
 if(b.dataset.service){select(b.dataset.cat,b.dataset.service);notify('Package updated')}
 if(b.dataset.remove){select(b.dataset.remove,state.services[b.dataset.remove]);notify('Service and its add-ons removed')}
 if(b.dataset.edit){state.open=b.dataset.edit;render();document.getElementById('body-'+state.open).parentElement.scrollIntoView({behavior:'smooth',block:'start'})}
 if(b.dataset.bundle){const idx=b.dataset.bundle==='premium'?2:1;const cats=b.dataset.bundle==='essentials'?['photography','DJ']:b.dataset.bundle==='story'?['photography','videography','DJ']:Object.keys(SERVICES_DATA);state.services=Object.fromEntries(cats.map(c=>[c,SERVICES_DATA[c][idx].id]));state.addons={};state.open=cats[0];render();notify('Bundle selected. Customize any package below.')}
 if(b.id==='reset'){state.services={};state.addons={};state.open='photography';render();notify('Your package has been reset')}
 if(b.id==='contact-open')document.querySelector('#contact').showModal();
 if(b.id==='download'){const url=URL.createObjectURL(new Blob([quote()],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='complete-wedding-estimate-'+new Date().toISOString().slice(0,10)+'.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Your estimate is ready to download')}
});
document.addEventListener('change',e=>{if(!e.target.dataset.addon)return;const {cat,addon}=e.target.dataset;if(!state.services[cat])return;state.addons[cat]=e.target.checked?[...new Set([...(state.addons[cat]||[]),addon])]:(state.addons[cat]||[]).filter(x=>x!==addon);render()});
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const body='Name: '+f.get('name')+'\nEmail: '+f.get('email')+'\nWedding date: '+(f.get('date')||'Not set')+'\nVenue / notes: '+(f.get('notes')||'None')+'\n\n'+quote();window.location.href='mailto:joe.mckinney@completewedo.com?subject='+encodeURIComponent('My wedding package estimate')+'&body='+encodeURIComponent(body);notify('Review and send the draft in your email app.')});
render();

