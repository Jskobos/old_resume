const projects = [{
    year: 2016,
    imageUrl: 'assets/img/frogger_landscape.png',
    liveUrl: '#',
    sourceUrl: 'https://github.com/Jskobos/frontend-nanodegree-arcade-game',
    EN: {
      name: 'Frogger',
      hover: 'Project from Udacity Javascript course.',
      description: 'This is a recommended project from the Udacity Frontend Engineer Nanodegree program. The game engine is provided by Udacity, and implementation is left to the students. I added scoring and gem rewards in addition to the basic game requirements.'
    },
    CN: {
      name: 'Frogger',
      hover: '优达学诚推荐的项目.',
      description: '这是个优达学诚纳米学位推荐的项目。他们提供游戏引擎以及照片，学生要实施。除了项目的要求意外，我加了点数系统与奖金系统。'
    }
}, {
    year: 2015,
    imageUrl: "assets/img/inventory.png",
    liveUrl: "https://shanghaipads.herokuapp.com",
    sourceUrl: "https://github.com/Jskobos/shanghai10",
    EN: {
      name: 'Reservation System',
      hover: 'Simple reservation app used at my old ESL school in Shanghai.',
      description: 'Computer reservation app I made for my old ESL school in Shanghai. Angular.js app with Firebase for backend storage. The only one of my solo projects with a small number of regular users. Sign into a test account with "test@email.com" and "password" to try it out.'
    },
    CN: {
      name: 'iPad预定管理系统',
      hover: 'iPad预定管理系统',
      description: '在我以前的英语学校，我们用这个系统管理学校用的iPads。这个网页使用Angular.js与Firebase数据库藏。我已经离开了学校，但有两个学校还用这个系统。你可以用“test@email.com”和”password“来试试看吧。'
    }
}, {
    year: 2015,
    imageUrl: "assets/img/rails-logo.png",
    liveUrl: null,
    sourceUrl: "https://github.com/Jskobos/shpads-api",
    EN: {
      name: 'Authentication API',
      hover: 'Rails API.',
      description: 'Rails API, used to replace the Firebase authentication system in my reservation tracking app when the requirements got too complicated.'
    },
    CN: {
      name: '验证API',
      hover: 'Rails API.',
      description: 'Rails API。我的iPad预定管理系统需求超过Firebase的验证系统以后，我做这个验证API来代替它。'
    }
}, {
    year: 2016,
    imageUrl: "assets/img/portfolio.jpg",
    liveUrl: "#",
    sourceUrl: "https://github.com/Jskobos/portfolio",
    EN: {
      name: 'Personal Website',
      hover: 'Source code for this website.',
      description: 'Interactive personal homepage/portfolio (you\'re looking at it right now!) Made with jQuery, Animate.css and ECMA2015 (Babel); simple MVC framework and all other effects coded from scratch.'
    },
    CN: {
      name: '个人主页',
      hover: '本页网站的源码.',
      description: '本页网站的源码'
    }
}];

export {
    projects
};
