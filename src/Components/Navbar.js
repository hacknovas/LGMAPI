import React, { Component } from 'react';

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav class="navbar bg-muted">
                    <a class="navbar-brand" href='/'>
                        <img class="d-inline-block align-top" width='30' height='30' src="https://lh3.googleusercontent.com/a-/AOh14GhfGrrJBUbFavefA8nte6O_vcBaz7JRNxQGYSQa=s96-c-rg-br100" ></img>
                        <span class="text-white badge"> API</span>

                    </a>
                    <a href="mailto:creatives.doni@gmail.com">
                        <span class="text-white badge">creatives.doni@gmail.com</span>
                    </a>
                </nav>
            </>
        )
    }
}

export default Navbar;
