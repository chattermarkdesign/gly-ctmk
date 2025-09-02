
(function(){
var els = document.querySelectorAll('.sidebarwrapper');
if (!els.length) return;
els.forEach(function(el){
// état initial si element est display:none
el.style.display = 'block';
el.style.transform = 'translateX(50px)';
el.style.transition = 'transform 0.5s ease-in';
el.style.willChange = 'transform';
});
window.addEventListener('load', function(){
setTimeout(function(){
els.forEach(function(el){
el.style.transform = 'translateX(0)';
});
}, 2000);
});
})();
