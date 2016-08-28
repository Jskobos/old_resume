class MainView {
  constructor(controller) {
    this.controller = controller;
  }

  render() {
    let projects    = this.controller.getProjects(),
        size        = 200,
        container   = $('#projects div'),
        node;
    for (let p of projects) {
      node = new Image(size,size);
      node.src = p.imageUrl;
      node.className = "project-image";
      container.append(node);
    }
  }
}

export default MainView;
