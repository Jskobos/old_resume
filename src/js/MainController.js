import Model from './model';
import MainView from './mainview';
import TextView from './textview';

class MainController {
  constructor(){
    this.model = new Model();
    this.view  = new MainView(this);
    this.textView = new TextView(this);
    this.view.render();
    this.textView.render();
  }

  render() {
    this.view.render();
    this.textView.render();
  }

  getProjects() {
    return this.model.projects;
  }

  getText() {
    return this.model.getText();
  }

  getLanguage() {
    return this.model.language;
  }

  changeLanguage(lang) {
    this.model.changeLanguage(lang);
    this.render();
  }
}

export default MainController;
