import React, {Component} from 'react';
import './Film.css';

class Film extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name
    };

    render () {
        return (
            <div className="film-item">
                 <input className="film-name" value={this.props.name} onChange={(event) => this.props.change(event, this.props.id)} type="text"/>
                 <button className="btn-delete" onClick={() => this.props.remove(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Film;