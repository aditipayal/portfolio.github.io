on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('navigation-menu')
    this.classList.toggle('icofont-x')
  })