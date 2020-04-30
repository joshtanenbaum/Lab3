// import $ from 'jquery';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import AddNoteBar from './addnote_bar';
import NoteList from './note_list';
import * as db from './services/datastore';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line new-cap
      notes: Map(),
    };
  }

  componentDidMount() {
    db.fetchnotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Map(notes) });
    });
  }

  render() {
    return (
      <div>
        <AddNoteBar add={db.add} />
        <ul>
          <NoteList notes={this.state.notes} del={db.del} update={db.update} />
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
