import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment'

class VitalForm extends Component {
    constructor(props){
        super(props)
        this.state={
            id: 0,
            systolic: 0,
            diastolic: 0,
            spo2: 0,
            pulse: 0,
            respirations: 0,
            temperature: 0,
            date: moment(new Date()).format('YYYY-MM-DD'),
            time: moment(new Date()).format('LTS')
        }
    }

    onSubmit = (values) => {
        console.log(values);
    }

    validate = (values) => {
        let errors = {}
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
            errors.date = "Please enter a valid date."
        }
        console.log(values);
        return errors
    }

    render(){
  
        let {systolic, diastolic, spo2, pulse, respirations, temperature, date, time} = this.state

        return(
            <div>
                <h1>Record Vital Set</h1>
                <div className="container">
                    <Formik 
                        initialValues={{
                            systolic: "",
                            diastolic: "",
                            spo2: "",
                            pulse: "",
                            respirations: "",
                            temperature: "",
                            date, 
                            time
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
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
                                    <ErrorMessage name="date" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="date"/>
                                    </fieldset>
                                    <ErrorMessage name="time" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Time</label>
                                        <Field className="form-control" type="text" name="time"/>
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