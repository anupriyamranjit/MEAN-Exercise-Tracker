import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render (){
        return(
        <nav className = "navbar navbar-dark bg-dark navbar-expand-ig">
            <Link to="/" className="navbar-brand">ExerciseTracker</Link>
            <div className="collpase navbar-collpase">
            <ul className="nav">
                <li className="nav-item">
                <Link to="/" className="nav-link">Exercises</Link>
                </li>
                <li className="nav-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                </li>
                <li className="nav-item">
                <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
}