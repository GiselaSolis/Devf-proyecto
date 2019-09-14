import React, { Component } from 'react';
import PokeList from './PokeList';



export class Navigation extends Component {
    state = {
        consultar: false
    }
    

    sendButton = (e) =>{
       this.setState({
           consultar: !this.state.consultar
       })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Pokemones API</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className= "nav-item">
                                <form onSubmit= {this.sendButton}>
                                    <button type= "submit" className="nav-link btn btn-primary" style= {{color: '#FFFFFF'}} >Consultar</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
                <PokeList mostrar = {this.state.consultar} />
            </div>
        );
    }
}

export default Navigation;
