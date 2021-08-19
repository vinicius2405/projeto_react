import React, { Component } from 'react';
import "./CardNota.css"
class CardNota extends Component {
    render() {
        return (
            <section className ="card-nota">
                <header>
                    <h3 className="card-nota_item">Titulo</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>);
    }
}

export default CardNota;

