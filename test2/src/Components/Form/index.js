import { Formik, Form, Field } from 'formik';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import * as Yup from 'yup'

function Index() {
    const MyTextField = ({ label, ...props }) => {
        const classes = useStyles();
        return (
            <Field name={props.name}>
                {({ field, form }) => (
                    <TextField
                        label={label}
                        variant="outlined"
                        fullWidth
                        className={classes.root}
                        error={form.errors[field.name] && form.touched[field.name]}
                        helperText={form.errors[field.name] && form.touched[field.name] ? form.errors[field.name] : null}
                        {...field}
                        {...props}
                    />
                )}
            </Field>
        );
    };

    const initialValues = {
        name: '',
        number: '',
        email: '',
        password: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().matches(/^[a-zA-Z\s]*$/,'Name should not contain numbers or specialcharacters').required(),
        number: Yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("phone number can't include a decimal point").min(1000000000,"Phone number should be 10 digits").max(9999999999,"Phone number should be 10 digits").required(),
        email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email').required(),
        password: Yup.string().required(),
    });
    const useStyles = makeStyles({
        root: {
            marginTop: 20,
        },
    });
    return (
        <div className='container'>
            <Typography variant='h2' gutterBottom className='text-center ' style={{color:'black'}}>Form</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}><MyTextField name="name" label="Name" className='my-2' /></Grid>
                            <Grid item xs={12} md={6}><MyTextField name="number" label="Number" className='my-2' /></Grid>
                            <Grid item xs={12} md={6}><MyTextField name="email" label="Email" className='my-2' /></Grid>
                            <Grid item xs={12} md={6}><MyTextField name="password" label="Password" type="password" className='my-2' /></Grid>
                        </Grid>
                        <Button type="submit" variant="outlined" color="success" disabled={isSubmitting}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Index
