class MainView {
  constructor(controller) {
    this.controller = controller;
    this.setScrollingLinks();
  }

  render() {
    let projects    = this.controller.getProjects(),
        size        = 180,
        container   = $('#projects'),
        node;
    for (let p of projects) {
      node = new Image();
      node.src = p.imageUrl;
      node.className = "project-image";
      container.append(node);
    }
  }

  setScrollingLinks() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }
}

export default MainView;
