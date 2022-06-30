import React, { Component } from 'react';

export class Navbar extends Component {

    render() {
        return (
            <>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">
                        <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                            Bootstrap
                    </a>
                </nav>
            </>
        )
    }
}

export default Navbar;
