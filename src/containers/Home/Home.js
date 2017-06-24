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

const defaultNav = {
  key: 0,
  width: null,
  height: null,
  transform: null,
};

export default class Home extends Component {
  state = {
    nav: { ...defaultNav },
  }

  handleEnter = (key) => {
    const dropdownCoords = this[`dropdown${key}`].getBoundingClientRect();
    const navCoords = this.nav.getBoundingClientRect();

    this.setState({
      nav: {
        key,
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        transform: `translate(${dropdownCoords.left - navCoords.left}px, ${dropdownCoords.top - navCoords.top}px)`,
      },
    });
  }

  handleLeave = (e) => {
    this.setState({
      nav: { ...defaultNav }
    });
  }

  isActive = key => (this.state.nav.key === key ? 'trigger-enter trigger-enter-active' : '');

  render() {
    const { nav: { key, width, height, transform } } = this.state;
    const background = {
      className: `dropdownBackground ${key !== 0 ? 'open' : ''}`,
      style: { width, height, transform },
    };

    return (
      <div>
        <h2>ReactMaker</h2>
        <nav className="top" ref={nav => (this.nav = nav)}>
          <div
            className={background.className}
            style={background.style}
          >
            <span className="arrow" />
          </div>

          <ul className="cool">
            <li
              className={this.isActive(1)}
              onMouseEnter={e => this.handleEnter(1)}
              onMouseLeave={this.handleLeave}
            >
              <a href="/">About Me</a>
              <div className="dropdown dropdown1" ref={e => (this.dropdown1 = e)}>
                <div className="bio">
                  <img src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/18485897_1862593137327686_6065322153761024487_n.png?oh=d9b26097a2435d7d9af2ad5ccdf24a8f&oe=59CD1F73" alt="" />
                  <p>在高雄有一群對 React JS 有興趣的人們組成的一個小小社團！</p>
                </div>
              </div>
            </li>
            <li
              className={this.isActive(2)}
              onMouseEnter={e => this.handleEnter(2)}
              onMouseLeave={this.handleLeave}
            >
              <a href="/">Members</a>
              <ul className="dropdown courses" ref={e => (this.dropdown2 = e)}>
                {
                  members.map((member, index) => (
                    <li key={index}>
                      <span className="code">{member.title}</span>
                      <a href={member.link || '/'} target="_blank" rel="noopener noreferrer">{member.name}</a>
                    </li>
                  ))
                }
              </ul>
            </li>
            <li
              className={this.isActive(3)}
              onMouseEnter={e => this.handleEnter(3)}
              onMouseLeave={this.handleLeave}
            >
              <a href="/">Other Links</a>
              <ul className="dropdown dropdown3" ref={e => (this.dropdown3 = e)}>
                {
                  links.map((link, index) => (
                    <li key={index}>
                      <a className="button" href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
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
