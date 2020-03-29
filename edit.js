'use strict';

const e = React.createElement;
var field;
var text = document.getElementById("text");
class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edited: false };
  }

  render() {
    if (this.state.edited) {
        field = document.createElement("textarea");

      return 'You liked this.\n';
    }

    return e(
      'button',
      { onClick: () => this.setState({ edited: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);