import React, { Component } from 'react';

export class Userdetails extends Component {

    render() {
        let { name, email, avatar, ids } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={avatar ? avatar : "https://static.euronews.com/articles/stories/06/45/61/46/1000x563_cmsv2_61a37ce1-f79f-5c70-b236-9b0e536172b4-6456146.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <p className="btn btn-sm btn-dark btn-primary">ID NO: {ids}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userdetails;
