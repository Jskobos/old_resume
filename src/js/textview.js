class TextView {
    constructor(controller) {
      this.controller = controller;
      this.portfolio         = $('#portfolio-link');
      this.contact           = $('#contact-link');
      this.language          = $('#language');
      this.heading           = $('#banner-textbox h1');
      this.subheading        = $('#banner-textbox h2');
      this.bodyText          = $('banner-body');
      this.bannerLinks       = $('.banner-footer').children('a');
      this.modalSiteLink     = $('.live-link a');
      this.modalSiteSource   = $('.source-link a');
      this.footerCopyright   = $('#copyright');
      this.footerCredits     = $('#credits');
    }

    render() {
      let text = this.controller.getText();
      this.portfolio.text(text.portfolio);
      this.contact.text(text.contact);
      this.language.text(text.language);
      this.language.attr('data-language',text.code);
      this.heading.text(text.bannerHead);
      this.subheading.text(text.bannerSubhead);
      this.bodyText.text(text.bio);
      this.modalSiteLink.text(text.projectHover);
      this.modalSiteSource.text(text.sourceHover);
      this.footerCredits.html(text.footerCredits);
      this.footerCopyright.text(text.footerCopyright);
    }
}

export default TextView;
