document.addEventListener('click',function(event){let target=event.target;while(target&&!target.hasAttribute('ctmk-tab-link')){target=target.parentElement}
if(target){const navigateUrl=target.getAttribute('ctmk-tab-link');if(navigateUrl){event.preventDefault();window.open(navigateUrl,'_self')}}});function addActiveClass(element){const menu=element.closest('[ctmk-menu]');if(menu){const dropdownToggle=menu.querySelector('.w-dropdown-toggle');if(dropdownToggle){dropdownToggle.classList.add('ctmk-active')}}}
document.querySelectorAll('[ctmk-child]').forEach(child=>{if(child.hasAttribute('ctmk-tab-link')){if(child.getAttribute('ctmk-tab-link')===window.location.pathname){addActiveClass(child)}}else{if(child.getAttribute('href')===window.location.pathname){addActiveClass(child)}}})

    