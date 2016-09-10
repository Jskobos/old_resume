class TextView {
    constructor(controller) {
      this.controller = controller;
      this.container  = $('#banner-textbox');
      this.heading    = $('#banner-textbox h1');
      this.subheading = $('#banner-textbox h2');
      this.bodyText   = $('#banner-textbox p.banner-body');

    }
}

export default TextView;
