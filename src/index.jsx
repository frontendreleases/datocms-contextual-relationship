import React, {Component, render} from 'preact-compat';

window.DatoCmsPlugin.init().then((plugin) => {
  plugin.startAutoResizer();

  class ContextualRelationships extends Component {

    render() {
      return (
        <p>
          ok
        </p>
      );
    }
  }

  render(<ContextualRelationships />, document.body);
});
