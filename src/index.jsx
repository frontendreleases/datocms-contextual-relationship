import React, {Component, render} from 'preact-compat';
import Rating from 'react-star-rating-component';

window.DatoCmsPlugin.init().then((plugin) => {
  plugin.startAutoResizer();

  class Input extends Component {

    render() {
      return (
        <p>
          ok
        </p>
      );
    }
  }

  render(<Input />, document.body);
});
