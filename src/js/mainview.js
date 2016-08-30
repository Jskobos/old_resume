class MainView {
  constructor(controller) {
    this.controller = controller;
    this.currentProject = '';
    this.setScrollingLinks();
    this.setModal();
  }

  render() {
    let projects    = this.controller.getProjects(),
        container   = $('#projects'),
        figure, img, caption;
    projects.forEach((p) => {
      figure = document.createElement('figure');
      caption = document.createElement('figcaption');
      img = new Image();
      img.src = p.imageUrl;
      img.className = "project-image";
      figure.addEventListener('click', (e) => {
        e.defaultPrevented;
        this.renderModalText(p);
        $('#project-modal').fadeIn();
        e.stopPropagation();
      });
      figure.appendChild(img);
      figure.appendChild(caption);
      caption.innerHTML = p.name;
      container.append(figure);
    });
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

  renderModalText(project) {
    console.log(project.description);
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
