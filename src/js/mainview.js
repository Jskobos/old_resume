class MainView {
  constructor(controller) {
    this.controller = controller;
    this.setScrollingLinks();
    this.setModal();
  }

  render() {
    let projects    = this.controller.getProjects(),
        size        = 180,
        container   = $('#projects'),
        figure, img, caption;
    for (let p of projects) {
      figure = document.createElement('figure');
      caption = document.createElement('figcaption');
      img = new Image();
      img.src = p.imageUrl;
      img.className = "project-image";
      figure.addEventListener('click', function(e) {
        e.defaultPrevented;
        $('#project-modal').fadeIn();
        e.stopPropagation();
      });
      figure.appendChild(img);
      figure.appendChild(caption);
      caption.innerHTML = p.name;
      container.append(figure);
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


  setModal() {
    $(document).click(function(event) {
    if(!$(event.target).closest('#project-modal').length) {
        if($('#project-modal').is(":visible")) {
            $('#project-modal').fadeOut();
        }
      }
    })
  }
}

export default MainView;
