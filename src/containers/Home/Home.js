import React, { Component } from 'react';

import './Home.less';

const members = [{
  title: 'RD.',
  name: 'Hyman',
  link: 'https://github.com/chnbohwr',
}, {
  title: 'RD.',
  name: 'Andy',
  link: 'https://github.com/bbandydd',
}, {
  title: 'PM.',
  name: 'Giant',
  link: 'https://github.com/TKDchampion',
}, {
  title: 'RD.',
  name: 'Jimmy',
}, {
  title: 'RD.',
  name: 'Winsome',
}];

const links = [{
  name: 'Facebook',
  link: 'https://www.facebook.com/ReactMaker',
}, {
  name: 'Github',
  link: 'https://github.com/ReactMaker',
}];

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>ReactMaker</h2>
        <nav className="top">
          <div className="dropdownBackground">
            <span className="arrow" />
          </div>

          <ul className="cool">
            <li>
              <a href="/">About Me</a>
              <div className="dropdown dropdown1">
                <div className="bio">
                  <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/18485897_1862593137327686_6065322153761024487_n.png?oh=d9b26097a2435d7d9af2ad5ccdf24a8f&oe=59CD1F73" alt="" />
                  <p>在高雄有一群對 React JS 有興趣的人們組成的一個小小社團！</p>
                </div>
              </div>
            </li>
            <li>
              <a href="/">Members</a>
              <ul className="dropdown courses">
                {
                  members.map((member, index) => (
                    <li key={index}>
                      <span className="code">{member.title}</span>
                      <a href={member.link || '/'}>{member.name}</a>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li>
              <a href="/">Other Links</a>
              <ul className="dropdown dropdown3">
                {
                  links.map((link, index) => (
                    <li key={index}>
                      <a className="button" href={link.link}>{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
