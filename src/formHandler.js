import * as Yup from 'yup';

export const onSubmit = values => {
    console.log(values)
};

export const initialValues = {
    username: "",
    email: "",
    password: "",
    description: "",
    feedback: "",
    profiles: {
        linkedin: "",
        facebook: ""
    },
    contact: [""]
}

export const validate = values => {
    // should return a object having errors
    // values.username values.email values.password
    // error.username error.email error.password
    const { username, email, password } = values
    const emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i
    let error = {}

    if (!username) {
        error.username = "username is required"
    }

    if (!email) {
        error.email = "email is required"
    } else if (!emailRegex.test(values.email)) {
        error.email = "enter a valid email"
    }

    if (!password) {
        error.password = "password is required"
    }

    console.log(error)
    return error
}

export const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("enter a valid email").required("email is required"),
    password: Yup.string().required("password is required"),
    description: Yup.string().required("description is required"),
    feedback: Yup.string().required("feedback is required"),
});