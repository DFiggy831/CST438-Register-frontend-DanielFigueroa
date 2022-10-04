import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, student: {} };
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (event) => {
        this.setState({ student: { name: event.target.value, email: event.target.value, statusCode: 0 } });
    }

    handleAdd = () => {
        this.props.addStudent(this.state.student);
        this.handleClose();
    }

    // save student info and close modal form
    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" style={{ margin: 10 }} onClick={this.handleClickOpen}>
                    Add Student
                </Button>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add Student</DialogTitle>
                    <DialogContent style={{ paddingTop: 20 }} >
                        <TextField autoFocus fullWidth label="Student Name" name="email" onChange={this.handleChange} />
                        <TextField autoFocus fullWidth label="Student Email" name="email" onChange={this.handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                        <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

AddStudent.propTypes = {
    addStudent: PropTypes.func.isRequired
}

export default AddStudent