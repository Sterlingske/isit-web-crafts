import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from './MakeHtmlDropDowns.js';
import MakeHtmlHomeButton from './MakeHtmlHomeButton.js';

class MakeHtml extends React.Component {
    render() {

        return (
          <MuiThemeProvider>
            <div>

            <MakeHtmlHomeButton/>
            <MakeHtmlDropDowns/>

            </div>
        </MuiThemeProvider>
    )};
}

export default MakeHtml;
