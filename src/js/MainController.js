import Model from './model';
import MainView from './mainview';

class MainController {
  constructor(){
    this.model = new Model();
    this.view  = new MainView(this);
    this.view.render();
  }

  render() {
    this.view.render();
  }

  getProjects() {
    return this.model.projects;
  }
}

export default MainController;
