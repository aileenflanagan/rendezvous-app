import React, { Component } from 'react';
import NavbarGroup from '../../components/NavbarGroup';

class CreateGroup extends Component {
    state = {

        // get info from database and set state

    };

    // const newGroup = {
    //     name:name,
    //     //any other info sending to schema
    //   };

    //API Call for creating new group

    handleInputChange = event => {
        this.setState({ something: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(`Search for: ${this.state.search}`);
        // API.newGroup(this.state.search)
        //   .then(res => {

        //   })
        //   .catch(err => console.log(err))
    };

    render() {
        return (
            <>
                <NavbarGroup />
                <div className="container">
                    <h3>Create A New Group</h3>
                    <form>
                        <div className="form-group">
                            <label for="grp-name-input">Group Name</label>
                            <input type="text" className="form-control" id="grp-name-input" placeholder=""></input>
                        </div>
                        <div className="form-group">
                            <label for="grp-location-input">General Location</label>
                            <input type="text" className="form-control" id="grp-location-input" placeholder="City, State"></input>
                        </div>
                        <div className="form-group">
                            <label for="grp-mtg-input">Recurring Meeting (Optional) </label>
                            <input type="text" className="form-control" id="grp-mtg-input" placeholder="ex: Every Friday 4-6pm"></input>
                        </div>
                        <div className="form-group">
                            <label for="description-input">Group Description</label>
                            <textarea className="form-control" id="description-input" rows="3"></textarea>
                        </div>
                        <div id="radios">
                            <label for="radios">Privacy Settings</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="private-radio" value="option1" checked></input>
                                <label className="form-check-label" for="private-radio">
                                    Public- anyone can join this group
                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="public-radio" value="option2"></input>
                                <label className="form-check-label" for="public-radio">
                                    Private- members request to join and must be approved by the admin
                        </label>
                            </div>
                        </div>
                                            {/*Insert Group Photo! how to upload??? Probably needs to be changed*/}
                    <hr></hr>
                    <label for="upload-section">Upload a Group Photo</label>
                    <div className="form-row align-items-center" id="upload-section">
                        
                        <div className="col-auto">
                            <label className="sr-only" for="inlineFormInput">Name</label>
                            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder=""></input>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-2">Upload</button>
                        </div>
                    </div>
                    <hr></hr>
                    <button className="btn btn-success">Create</button>
                    </form>




                </div>
            </>
        )
    }
}

export default CreateGroup;