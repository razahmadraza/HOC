import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { initialValues, onSubmit, validate, validationSchema } from './formHandler';
import FieldError from './FieldError';

export default function FormikTagComponent() {
    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        console.log(username)
                        <Field
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="Enter user name"
                        />
                        
                        <ErrorMessage name="username" component={FieldError} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                        />
                        <ErrorMessage name="email">
                            {
                                (errmsg) => <div style={{ color: "red" }}>{errmsg}</div>
                            }
                        </ErrorMessage>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                        />
                        <ErrorMessage name="password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <Field
                            as="textarea"
                            className="form-control"
                            id="description"
                            name="description"
                        />
                        <ErrorMessage name="description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="feedback">Feedback</label>
                        <Field name="feedback">
                            {
                                (props) => {
                                    const { field, form, meta } = props;
                                    return <div>
                                        <input className="form-control" type="text" {...field} />
                                        {meta.touched && meta.error && <div style={{ color: "red" }}>{meta.error}</div>}
                                    </div>
                                }
                            }
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="linkedin">Linkedin</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="linkedin"
                            name="profiles.linkedin"
                        />
                        <ErrorMessage name="profiles.linkedin" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="facebook">Facebook</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="facebook"
                            name="profiles.facebook"
                        />
                        <ErrorMessage name="profiles.facebook" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact">Primary Phone</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="contact"
                            name="contact[0]"
                        />
                        <ErrorMessage name="contact" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact">Secondary Phone</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="contact"
                            name="contact[1]"
                        />
                        <ErrorMessage name="profiles.facebook" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
