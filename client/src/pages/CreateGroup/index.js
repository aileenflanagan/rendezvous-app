import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavbarHome from '../../components/NavbarHome';
import API from '../../utils/API';
import "./style.css";

class CreateGroup extends Component {
    state = {
        groupName: "",
        groupLocation: "",
        groupDescription: "",
        groupMeeting: "",
        privacySetting: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    newGroup = () => {
        let pSetting = false;

        if (this.state.privacySetting === "private") {
            pSetting = true;
        }

        let newGroup = {
            groupName: this.state.groupName,
            description: this.state.groupDescription,
            location: this.state.groupLocation,
            meeting: this.state.groupMeeting,
            private: pSetting,
            adminID: sessionStorage.userDBId
        }

        API.createNewGroup(newGroup).then(() => {
            window.location.href = "/";
        })
    }

    render() {
        return (
            <div id="main-create-container">
                <NavbarHome />
                <div className="row" id="main-create-row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8" id="sub-create-container">
                        <h3>Create A New Group</h3>
                        <form>
                            <div className="form-group">
                                <label for="grp-name-input">Group Name</label>
                                <input type="text" className="form-control" id="grp-name-input" placeholder="" name="groupName" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="grp-location-input">General Location</label>
                                <input type="text" className="form-control" id="grp-location-input" placeholder="City, State" name="groupLocation" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="grp-mtg-input">Recurring Meeting (Optional) </label>
                                <input type="text" className="form-control" id="grp-mtg-input" placeholder="ex: Every Friday 4-6pm" name="groupMeeting" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="description-input">Group Description</label>
                                <textarea className="form-control" id="description-input" rows="3" name="groupDescription" onChange={this.handleInputChange}></textarea>
                            </div>
                            <div id="radios">
                                <label for="radios">Privacy Settings</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="privacySetting" id="private-radio" value="private" onChange={this.handleInputChange}></input>
                                    <label className="form-check-label" for="private-radio">
                                        Public- anyone can join this group
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="privacySetting" id="public-radio" value="public" onChange={this.handleInputChange}></input>
                                    <label className="form-check-label" for="public-radio">
                                        Private- members must request to join
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
                            <button className="btn btn-success" id="create-group-btn" onClick={this.newGroup}>Create</button>
                        </form>

                    </div>

                    <div className="col-md-2"></div>

                </div>
            </div>
        )
    }
}

export default CreateGroup;