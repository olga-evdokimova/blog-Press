(function(){
  const btn = document?.querySelector('[data-btn]');
  const list = document?.querySelector('[data-list]');

  btn?.addEventListener('click', (e) => {
    btn?.classList.toggle('_active-btn');
    list?.classList.toggle('_active-list');
  });
})();
