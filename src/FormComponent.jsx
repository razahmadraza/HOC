import React from 'react'
import { useFormik } from 'formik';
import { initialValues, onSubmit, validate, validationSchema } from './formHandler';

export default function FormComponent() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema
    })

    console.log(formik)

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        {...formik.getFieldProps("username")}
                    />
                    {formik.touched.username && formik.errors.username && <div style={{ color: "red" }}>{formik.errors.username}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                    {formik.touched.password && formik.errors.password && <div style={{ color: "red" }}>{formik.errors.password}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
