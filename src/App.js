import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id:2,
      subject:  {title: 'WEB', desc: 'world wide web'},
      welcome: {title: 'welcome', desc: 'hello, reactjs!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is 1'},
        {id:2, title:'CSS', desc:'CSS is 2'},
        {id:3, title:'JAVASCRIPT', desc:'Javascript is 3'}
      ]
    };
  }

  render () {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      for (var i = 0; i < this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={function(e) {
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>
        </Subject>
        {/*<header>
          <h1><a href="/" onClick="">{this.state.subject.title}</h1>
          {this.state.subject.desc}
        </header>*/}
        <TOC onChangePage={function(id) {
          this.setState({
            mode:'read',
            selected_content_id:parseInt(id)
          })
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
    </div>
    );
  }
}

export default App;
