import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment'
import VitalDataService from '../api/VitalDataService'
import AuthenticationService from './AuthenticationService'

class VitalForm extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            patientName:'',
            systolic: 0,
            diastolic: 0,
            spo2: 0,
            pulse: 0,
            respirations: 0,
            temperature: 0,
            timeStamp: moment(new Date()).format('lll')
        }
    }

    onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName()

        let vitalset = {
            id: this.state.id,
            patientName: values.patientName,
            systolic: values.systolic,
            diastolic: values.diastolic,
            spo2: values.spo2,
            pulse: values.pulse,
            respirations: values.respirations,
            temperature: values.temperature,
            timeStamp: values.timeStamp
            }

            if (this.state.id === -1){
                VitalDataService.addVitalSet(username, vitalset)
                .then(() => this.props.history.push('/vitallist'))
            } else {
                VitalDataService.updateVitalSet(username, this.state.id, vitalset)
                .then(() => this.props.history.push('/vitallist'))
            }       
        }
    
    componentDidMount = () => {
        if (this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        VitalDataService.retrieveVitalSet(username, this.state.id)
            .then(response => this.setState({
                patientName: response.data.patientName,
                systolic: response.data.systolic,
                diastolic: response.data.diastolic,
                spo2: response.data.spo2,
                pulse: response.data.pulse,
                respirations: response.data.respirations,
                temperature: response.data.temperature,
                timeStamp: response.data.timeStamp
            }))
    }


    validate = (values) => {
        let errors = {}
        if(values.patientName === ""){
            errors.patientName = "Please enter the patient's name."
        }
        if(values.systolic === ""){
            errors.systolic = "Please enter a value for systolic blood pressure."
        }
        if(values.diastolic === ""){
            errors.diastolic = "Please enter a value for diastolic blood pressure."
        } 
        if(values.pulse === ""){
            errors.pulse = "Please enter a value for pulse."
        } 
        if(values.spo2 === ""){
            errors.spo2 = "Please enter a value for spo2."
        } 
        if(values.respirations === ""){
            errors.respirations = "Please enter a value for respirations."
        } 
        if(values.temperature === ""){
            errors.temperature = "Please enter a value for temperature."
        }

        if(!moment(values.date).isValid()){
            errors.date = "Please enter a valid date and time."
        }
        console.log(values);
        return errors
    }

    render(){
  
        let {patientName, systolic, diastolic, pulse, spo2, respirations, temperature, timeStamp} = this.state

        return(
            <div>
                <h1 className="heading">Record Vital Set</h1>
                <div className="container">
                    <Formik 
                        initialValues={{
                            patientName,
                            systolic,
                            diastolic,
                            spo2,
                            pulse,
                            respirations,
                            temperature,
                            timeStamp
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                     <ErrorMessage name="patientName" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Patient Name</label>
                                        <Field className="form-control" type="text" name="patientName"/>
                                    </fieldset>
                                    <ErrorMessage name="systolic" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Systolic Blood Pressure</label>
                                        <Field className="form-control" type="number" name="systolic"/>
                                    </fieldset>
                                    <ErrorMessage name="diastolic" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Diastolic Blood Pressure</label>
                                        <Field className="form-control" type="number" name="diastolic"/>
                                    </fieldset>
                                    <ErrorMessage name="pulse" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Pulse</label>
                                        <Field className="form-control" type="number" name="pulse"/>
                                    </fieldset>
                                    <ErrorMessage name="spo2" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>SpO2</label>
                                        <Field className="form-control" type="number" name="spo2"/>
                                    </fieldset>
                                    <ErrorMessage name="respirations" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Respirations</label>
                                        <Field className="form-control" type="number" name="respirations"/>
                                    </fieldset>
                                    <ErrorMessage name="temperature" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Temperature</label>
                                        <Field className="form-control" type="number" name="temperature"/>
                                    </fieldset>
                                    <ErrorMessage name="timeStamp" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Date & Time</label>
                                        <Field className="form-control" type="text" name="timeStamp"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default VitalForm