import { projects } from './projects';
import { text } from './pagetext';

class Model {
  constructor() {
    this.projects = projects;
    this.language = 'EN';
    this.text     = text;
  }

  changeLanguage(lang) {
    this.language = lang;
  }

  getText() {
    return this.text[this.language];
  }
}

export default Model;
