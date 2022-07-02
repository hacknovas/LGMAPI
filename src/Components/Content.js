import React, { Component } from 'react';

export class content extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-light bg-secondary ">
                    <a class="navbar-brand text-light ">
                        <img src="https://lh3.googleusercontent.com/a-/AOh14GhfGrrJBUbFavefA8nte6O_vcBaz7JRNxQGYSQa=s96-c-rg-br100" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                        <b > creatives.doni@gmail.com</b>
                    </a>
                </nav>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <a class="btn btn-primary" href="/user" role="button" style={{ width: "100%" }}>Get Users</a>

                    <div>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default content;
