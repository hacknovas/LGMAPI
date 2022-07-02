import React, { Component } from 'react';
import Userdetails from './Userdetails';

export class UserS extends Component {
    data = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ];

    constructor() {
        super();
        this.state = {
            data: this.data,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://reqres.in/api/users?page=1";
        let datas = await fetch(url);
        let parseData = await datas.json();
        this.setState({ data: parseData.data, total: parseData.total });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > (Math.ceil(this.state.total / 6))) {

        }
        else {
            let url = `https://reqres.in/api/users?page=${this.state.page + 1}`;
            let datas = await fetch(url);
            let parseData = await datas.json();
            this.setState({ data: parseData.data });

            this.setState({
                data: parseData.data,
                page: this.state.page + 1
            })
        }

    }

    handlePreClick = async () => {
        let url = `https://reqres.in/api/users?page=${this.state.page - 1}`;
        let datas = await fetch(url);
        let parseData = await datas.json();
        this.setState({ data: parseData.data });

        this.setState({
            data: parseData.data,
            page: this.state.page - 1
        })
    }

    render() {
        return (
            <div className="container my-3 ">
                <h2 className='text-white bg-dark text-center'>All Users</h2>
                <div className="row">
                    {this.state.data.map((element) => {
                        return <div className="col-md-4" key={element.id}>
                            <Userdetails name={element.first_name ? element.first_name : ""} email={element.email ? element.email : ""} avatar={element.avatar ? element.avatar : ""} ids={element.id} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark " onClick={this.handlePreClick}>Previous Page</button>
                    <button type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next Page</button>
                </div>
            </div>
        )
    }
}

export default UserS;
