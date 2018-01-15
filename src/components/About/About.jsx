import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="post">
        <h2>Just For Fun Projects</h2>
        <ul>
          <li><a href="/solarsystem/">CSS Solar System (CSS3 transitions &amp; animations)</a></li>
          <li><a href="http://twitterbday.soulwish.info" target="_blank" rel="noopener noreferrer">Twitter Birthday (PHP, JS, Twitter API)</a></li>
          <li><a href="/timer/">Timer (HTML5 canvases)</a></li>
          <li><a href="/zen/">Programming Zen (Native JS, Github API)</a></li>
          <li><a href="/speakit/">Speak It! (Speech Synthesis API, Native JS)</a></li>
        </ul>
        <hr />
        <h2>OSS Projects</h2>
        <ul>
          <li><a href="https://github.com/soul-wish/cutine" target="_blank" rel="noopener noreferrer">Cutine (a simple Facebook client for macOS)</a></li>
          <li><a href="https://github.com/soul-wish/postcss-important-shorthand" target="_blank" rel="noopener noreferrer">postcss-important-shorthand</a></li>
          <li><a href="https://github.com/soul-wish/grunt-stats" target="_blank" rel="noopener noreferrer">grunt-stats</a></li>
          <li><a href="https://github.com/soul-wish/angular-matchmedia" target="_blank" rel="noopener noreferrer">angular-matchmedia</a></li>
          <li><a href="https://github.com/soul-wish/is-bitbucket-down" target="_blank" rel="noopener noreferrer">is-bitbucket-down</a></li>
          <li><a href="https://github.com/soul-wish/font-awesome-icons" target="_blank" rel="noopener noreferrer">font-awesome-icons</a></li>
          <li><a href="https://github.com/soul-wish/trash-junk" target="_blank" rel="noopener noreferrer">trash-junk</a></li>
          <li><a href="https://github.com/soul-wish/trash-junk-cli" target="_blank" rel="noopener noreferrer">trash-junk-cli</a></li>
          <li><a href="https://github.com/soul-wish/user-styles-for-vk" target="_blank" rel="noopener noreferrer">user-styles-for-vk</a></li>
        </ul>
      </div>
    );
  }
}

export default About;
