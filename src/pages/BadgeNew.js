import React from 'react';
import Navbar from '../Components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';

class BadgeNew extends React.Component {

    state = { form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                avatar="https://scontent.fmid3-1.fna.fbcdn.net/v/t1.0-9/p960x960/36430173_10155552199268483_1533129932547293184_o.jpg?_nc_cat=105&_nc_ohc=d_b0rMNgIMMAQnW_-nzScJAplsP4QHgE1wgvDyyWJAFmGcCcwDAJgYAeg&_nc_ht=scontent.fmid3-1.fna&oh=afa17dcf090c9988856da7beda8503c1&oe=5EA8FF7C"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;