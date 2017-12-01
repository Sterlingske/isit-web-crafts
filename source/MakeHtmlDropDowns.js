import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import 'whatwg-fetch';

const styles = {
  customWidth: {
    width: 500,
  },
};

//const items = [];
const siteDirs = [];
const destinationDirs = [];

class MakeHtmlDropDowns extends React.Component {


  constructor() {
    super();
    this.state = {
      walk: 'Generate HTML',
      siteDirs: 'unknown',
      destinationDirs: 'unknown',
      configSummary: [],
      value: 1
    };
    this.handleSiteDir = this.handleSiteDir.bind(this);
    this.handleDestDir = this.handleDestDir.bind(this);
    this.generateHtml = this.generateHtml.bind(this);
  }

  handleSiteDir(event, index, value) {
    this.setState({
      value
    });
  }
  handleDestDir(event, index, value) {
    this.setState({
      value: value,
      destinationDirs: event.target.innerHTML,
      siteDir: destinationDirs[value].props.primaryText
    });
  }

  /**
  * @typedef {Object} configSummary
  * @property {Object} siteDirs
  * @property {Object} destinationDirs
  * @property {String} baseDir
  * @property {String} mostRecentDate
  */
  generateHtml() {
    console.log(this.state.value);
    console.log(destinationDirs[this.state.value]);
    console.log(siteDirs[this.state.value]);
    //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
    const query = '/makers/walk?siteDirsIndex=' + this.state.value;
    var that = this;
    fetch(query)
    .then(function(response) {
      return response.json();
    })
    .then(function(configSummary) {
      console.log(JSON.stringify(configSummary, null, 4));
      // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
    })
    .catch(function(ex) {
      console.log('parsing failed', ex);
    });

  loadConfig() {
    const that = this;
    fetch('/makers/config')
    .then(function(response) {
      return response.json();
    })
    .then(function(configSummary) {
      //console.log('parsed json', JSON.stringify(configSummary, null, 4));
      siteDirs.length = 0;
      configSummary.siteDirs.forEach(function(dir, index) {
        const showDir = configSummary.baseDir + dir;
        siteDirs.push( < MenuItem value = {index}
        key = {index}
        primaryText = {showDir}/>);
      });
      configSummary.destinationDirs.forEach(function(dir, index) {
        const showDir = configSummary.baseDir + dir;
        destinationDirs.push( < MenuItem value = {index}
        key = {index}
        primaryText = {showDir}/>);
      });
    })
    .catch(function(ex) {
      console.log('parsing failed', ex);
    });
  };
  
  componentDidMount() {
    this.loadConfig();
  }

  render() {
    return <MuiThemeProvider>
    <div>
    <h1> Home Page </h1>
    <DropDownMenu
    value = {this.state.value}
    onChange = {this.handleSiteDir}
    autoWidth = {true}
    style = {styles.customWidth}
    >
    {siteDirs}
    </DropDownMenu>

    <DropDownMenu
    value = {this.state.value}
    onChange = {this.handleDestDir}
    autoWidth = {true}
    style = {styles.customWidth}
    >
    {destinationDirs}
    </DropDownMenu>

    <RaisedButton
    style = {buttonStyle}
    primary = {true}
    onClick = {this.generateHtml}
    >
    Generate HTML
    </RaisedButton> <
    /div>
    </MuiThemeProvider>
  };
}

var buttonStyle = {
  margin: '15px'
};

export default MakeHtmlDropDowns;
