(function(){try{
var ID='d2c1f69e-dfe4-4cff-93cc-a087322e034b';
if(/[?&]nocount=1/.test(location.search)){try{localStorage.setItem('mw-no-count','1')}catch(e){}}
try{if(localStorage.getItem('mw-no-count')==='1')return}catch(e){}
if(location.hostname!=='listen.morwell.net')return;
var s=document.createElement('script');s.defer=true;s.src='https://cloud.umami.is/script.js';
s.setAttribute('data-website-id',ID);s.setAttribute('data-auto-track','false');s.setAttribute('data-domains','listen.morwell.net');
s.onload=function(){try{umami.track(function(p){p.url=location.pathname;return p})}catch(e){}};
document.head.appendChild(s);
document.addEventListener('click',function(e){try{var a=e.target.closest('a[data-svc]');if(!a||!window.umami)return;
umami.track('listen',{release:document.body.dataset.code,service:a.dataset.svc})}catch(x){}},true);
}catch(e){}})();
