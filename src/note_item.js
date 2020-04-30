import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faExpandArrowsAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';
import marked from 'marked';


class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false, text: this.props.note.text, title: this.props.note.title, x: this.props.note.x, y: this.props.note.y,
    };
  }

  editBoxSubmit = (event) => {
    const updates = {};
    updates[this.props.id] = {
      title: this.state.title, text: this.state.text, x: this.state.x, y: this.state.y,
    };
    this.props.update(updates);
    this.setState({ isEditing: false });
  }

  myhandleDrag = (e, data) => {
    this.setState({
      x: data.x,
      y: data.y,
    });
    const updates = {};
    updates[this.props.id] = {
      title: this.state.title, text: this.state.text, x: this.state.x, y: this.state.y,
    };
    this.props.update(updates);
  }

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  editBox = () => {
    if (this.state.isEditing) {
      return (<textarea onChange={this.onInputChange} onBlur={this.editBoxSubmit} tabIndex="0" value={this.state.text} />);
    } else {
      return (<div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.state.text || '') }} />);
    }
  };

  editClick = () => {
    this.setState({ isEditing: true });
  };

  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        position={{ x: this.state.x, y: this.state.y }}
        grid={[25, 25]}
        scale={1}
        onStart={this.myhandleStart}
        onDrag={this.myhandleDrag}
        onStop={this.handleStop}
      >
        <div className="note">
          <div>
            {this.state.title}
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} onClick={() => { this.props.del(this.props.id); }} />
            <FontAwesomeIcon icon={faPencilAlt} onClick={this.editClick} />
            <FontAwesomeIcon icon={faExpandArrowsAlt} className="handle" />
          </div>
          <div>
            {this.editBox()}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default NoteItem;
