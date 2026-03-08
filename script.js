// ===== REVEAL ANIMATION =====
const reveals=document.querySelectorAll('.reveal');
function revealOnScroll(){
  const trigger=window.innerHeight*0.85;
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<trigger){
      el.classList.add('active')
    }
  });
}
window.addEventListener('load',revealOnScroll);
window.addEventListener('scroll',revealOnScroll);

// ===== RIPPLE EFFECT =====
document.querySelectorAll('.btn, .project, .card, .tool').forEach(el=>{
  el.classList.add('ripple');
  el.addEventListener('click',function(e){
    const circle=document.createElement('span');
    const diameter=Math.max(this.clientWidth,this.clientHeight);
    circle.style.width=circle.style.height=diameter+'px';
    circle.style.left=e.clientX-this.offsetLeft-diameter/2+'px';
    circle.style.top=e.clientY-this.offsetTop-diameter/2+'px';
    this.appendChild(circle);
    setTimeout(()=>circle.remove(),600);
  });
});

// ===== MAGNETIC BUTTON =====
const magnets=document.querySelectorAll('.btn');
magnets.forEach(btn=>{
  btn.classList.add('magnetic');
  btn.addEventListener('mousemove',e=>{
    const pos=btn.getBoundingClientRect();
    const x=e.clientX-pos.left-pos.width/2;
    const y=e.clientY-pos.top-pos.height/2;
    btn.style.transform=`translate(${x*0.2}px,${y*0.3}px)`;
  });
  btn.addEventListener('mouseleave',()=>{
    btn.style.transform='translate(0,0)';
  });
});

// ===== CURSOR GLOW =====
const glow=document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);
document.addEventListener('mousemove',e=>{
  glow.style.left=e.clientX+'px';
  glow.style.top=e.clientY+'px';
});

// ===== 3D TILT EFFECT =====
document.querySelectorAll('.card, .project').forEach(card=>{
  card.classList.add('tilt');
  card.addEventListener('mousemove',e=>{
    const rect=card.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    const centerX=rect.width/2;
    const centerY=rect.height/2;
    const rotateX=(y-centerY)/12;
    const rotateY=(centerX-x)/12;
    card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='rotateX(0) rotateY(0)';
  });
});

// ===== NAVBAR BLUR =====
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.navbar');
  if(window.scrollY>50){nav.classList.add('scrolled')}
  else{nav.classList.remove('scrolled')}
});

// ===== PARALLAX =====
document.addEventListener('mousemove',e=>{
  document.querySelectorAll('.parallax').forEach(layer=>{
    const speed=layer.getAttribute('data-speed');
    const x=(window.innerWidth-e.pageX*speed)/100;
    const y=(window.innerHeight-e.pageY*speed)/100;
    layer.style.transform=`translateX(${x}px) translateY(${y}px)`;
  });
});

// ===== LOADER HIDE =====
window.addEventListener('load',()=>{
  const loader=document.querySelector('.loader-wrap');
  setTimeout(()=>loader.classList.add('hide'),900);
});

// ===== DARK MODE TOGGLE =====
const toggle=document.getElementById('darkToggle');
const icon=toggle.querySelector('i');

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }else{
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// ===== PROGRESS BAR STABLE =====
window.addEventListener('load', () => {
  document.querySelectorAll('.progress span').forEach(bar => {
    const percent = bar.dataset.percent;
    bar.style.width = percent + '%';
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click',()=>{
  navMenu.classList.toggle('show');
});