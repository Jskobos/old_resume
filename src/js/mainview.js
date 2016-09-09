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
        $('#project-modal').removeClass('animated slideOutUp slideInDown');
        $('#project-modal').addClass('animated slideInDown');
        $('#project-modal').show();
        $('main').addClass('dim');
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
    if (project.liveUrl !== null) {
      $('.live-link').show();
      $('.live-link a').attr('href', project.liveUrl);
    }
    else {
      $('.live-link').hide();
    }
    $('.source-link a').attr('href', project.sourceUrl);
    $('.project-modal-header h3').text(`${project.name} (${project.year})`);
    $('.modal-image').attr('src', project.imageUrl);
    $('.project-description').text(project.description);
  }

  setModal() {
    $('.ion-close').click((event) => {
      this.hideModal();
    });
    $(document).click((event) => {
    if(!$(event.target).closest('#project-modal').length) {
        if($('#project-modal').is(":visible")) {
          this.hideModal();
        }
      }
    })
  }

  hideModal() {
    let $modal = $('#project-modal');
    $modal.removeClass('animated slideInDown slideOutUp');
    $modal.addClass('animated slideOutUp');
    $('main').removeClass('dim');
  }
}

export default MainView;
