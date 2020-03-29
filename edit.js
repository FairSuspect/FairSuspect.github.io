<<<<<<< HEAD
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
=======
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
>>>>>>> 57c97215f8b254e9702b50f6533eae4607dd259a
ReactDOM.render(e(LikeButton), domContainer);