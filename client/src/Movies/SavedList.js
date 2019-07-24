import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const SavedList = props => {
    return (
        <div className="saved-list">
            <h3>Saved Movies:</h3>
            {props.list.map(movie => (
                <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName='selected' className="saved-movie">{movie.title}</NavLink>
            ))}
            <Link to='/' className="home-button">Home</Link>
        </div>
    )
}

export default SavedList;
