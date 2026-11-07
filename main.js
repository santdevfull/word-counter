import { metadata, fields, compute } from './tool.mjs';
document.title=metadata.title+' | santdev';
document.querySelector('#title').textContent=metadata.title;
document.querySelector('#description').textContent=metadata.description;
document.querySelector('#repo').href='https://github.com/santdevfull/'+metadata.slug;
const form=document.querySelector('#form'),out=document.querySelector('#output');
for(const f of fields){
 const box=document.createElement('div'),label=document.createElement('label');
 label.setAttribute('for',f.name);label.textContent=f.label;
 const element=document.createElement(f.type==='textarea'?'textarea':f.type==='select'?'select':'input');
 element.name=f.name;element.id=f.name;
 if(f.type==='number'){element.type='number';element.step='any';}
 if(f.type==='select')for(const option of (f.options||[])){const o=document.createElement('option');o.textContent=option;o.value=option;element.appendChild(o)}
 element.value=f.value??'';box.append(label,element);form.appendChild(box)
}
const button=document.createElement('button');button.type='submit';button.textContent='Calculate result';form.appendChild(button);
form.addEventListener('submit',e=>{e.preventDefault();const input=Object.fromEntries(new FormData(form).entries());
for(const f of fields)if(f.type==='number')input[f.name]=Number(input[f.name]);
try{out.style.color='#bdf1c4';out.textContent=JSON.stringify(compute(input),null,2)}
catch(err){out.style.color='#ffb3b3';out.textContent=err.message}});
form.dispatchEvent(new Event('submit',{cancelable:true}));
