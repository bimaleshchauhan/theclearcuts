const blog ={
    title: "create blog",
    id: "",
    fields: [{
            required: true,
            label: "First Name*",
            id: "fname",
            name: "fname",
            prefilled: "",
            validators: [{
                    name: "required",
                    message: "Enter First Name."
                },
                {
                    name: "regex",
                    expression: "^[a-zA-Z]*$",
                    message: "The name should start only with an alphabet. It should not contain any special character or space."
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z\\.'`\\-\\s]+$/",
                    message: "That doesn't look like a valid name. Try again?"
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z ]{1,}$/",
                    message: "Invalid characters"
                }
            ],
            type: "TextInput",
            maxLength: 20,
            isDisabled: null,
            minLength: 2,
        },
        {
            label: "Middle Name (Optional)",
            id: "mname",
            name: "mname",
            prefilled: "",
            validators: [{
                    name: "regex",
                    expression: "^[a-zA-Z]*$",
                    message: "The name should start only with an alphabet. It should not contain any special character or space."
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z\\.'`\\-\\s]+$/",
                    message: "That doesn't look like a valid name. Try again?"
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z ]{1,}$/",
                    message: "Invalid characters"
                }
            ],
            type: "TextInput",
            maxLength: 20,
            isDisabled: null,
            minLength: 2,
        },
        {
            required: true,
            label: "Last Name*",
            id: "lname",
            name: "lname",
            prefilled: "",
            validators: [{
                    name: "required",
                    message: "Enter Last Name."
                },
                {
                    name: "regex",
                    expression: "^[a-zA-Z]*$",
                    message: "The name should start only with an alphabet. It should not contain any special character or space."
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z\\.'`\\-\\s]+$/",
                    message: "That doesn't look like a valid name. Try again?"
                },
                {
                    name: "regex",
                    expression: "/^[A-Za-z ]{1,}$/",
                    message: "Invalid characters"
                }
            ],
            type: "TextInput",
            maxLength: 20,
            isDisabled: null,
            minLength: 2,
        },
        {
            required: true,
            // placeholder: "DD-MM-YYYY",
            label: "Date of Birth*",
            id: "dob",
            name: "dob",

            prefilled: "",

            validators: [{
                    name: "required",
                    message: "Enter Date of Birth."
                },
                {
                    name: "regex",
                    expression: "/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/",
                    message: "Enter Valid Date of Birth"
                }
            ],
            type: "DatePicker",
            maxLength: 10,
            isDisabled: null,
            minLength: 10,
        },
        {
            required: true,
            label: "Email Address*",
            id: "email_type",
            name: "email_type",
            prefilled: "",
            validators: [{
                    name: "required",
                    message: "Enter email."
                },
                {
                    name: "regex",
                    expression: "/^([A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*)@[A-Za-z0-9](([.-]?[A-Za-z0-9]){1,66})\\.([A-Za-z]{2,6})$/",
                    message: "Enter valid Email"
                }
            ],
            type: "TextInput",
            maxLength: 50,
            isDisabled: null
        },
        {
            required: true,
            label: "Occupation*",
            id: "occupation",
            name: "occupation",
            validators: [{
                name: "required",
                message: "Select Occupation."
            }, ],
            maxLength: 2,
            type: "SelectList",
            options: [{
                    id: "1",
                    text: "Salaried"
                },
                {
                    id: "3",
                    text: "Self Employed"
                },
                {
                    id: "9",
                    text: "Unemployed"
                },
                {
                    id: "5",
                    text: "Student"
                },
                {
                    id: "4",
                    text: "Housewife"
                },
                {
                    id: "06",
                    text: "Retired"
                }
            ],
            col: "6"
        },
        {
            required: true,
            label: "Education*",
            id: "edu",
            name: "edu",
            validators: [{
                name: "required",
                message: "Select Education."
            }, ],
            maxLength: 2,
            type: "SelectList",
            options: [{
                    text: "Below std X",
                    id: "5"
                },
                {
                    text: "Diploma",
                    id: "D"
                },
                {
                    text: "Graduate",
                    id: "2"
                },
                {
                    text: "Illiterate",
                    id: "6"
                },
                {
                    text: "Post graduate & above",
                    id: "1"
                },
                {
                    text: "Std X pass",
                    id: "4"
                },
                {
                    text: "Std XII Fail",
                    id: "T"
                },
                {
                    text: "Std XII pass",
                    id: "3"
                },
                {
                    text: "Below std X",
                    id: "5"
                },
                {
                    text: "Diploma",
                    id: "D"
                }
            ],
            col: "6"
        },
        {
            required: true,
            label: "Annual Income*",
            id: "annIncome",
            name: "annIncome",
            prefilled: "",
            validators: [{
                    name: "required",
                    message: "Enter Annual Income."
                },
                {
                    name: "regex",
                    expression: "/^[0-9]+$/",
                    message: "Enter valid annual income",
                }
            ],
            type: "TextInput",
            maxLength: 15,
            isDisabled: null,
            minimum: 6
        },
        {
            required: true,
            label: "Citizenship",
            id: "citizenship",
            name: "citizenship",
            validators: [{
                name: "required",
                message: "Select citizenship."
            }, ],
            maxLength: 2,
            type: "SelectList",
            options: [{
                id: "01",
                text: "Indian"
            }, ],
        },
        {
            required: true,
            label: "PAN Number*",
            id: "pan",
            name: "pan",
            prefilled: "",
            validators: [{
                    name: "required",
                    message: "Enter PAN Number."
                },
                {
                    name: "regex",
                    expression: "^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$",
                    message: "The pan should start only with an alphabet. It should not contain any special character or space."
                }
            ],
            type: "TextInput",
            maxLength: 10,
            isDisabled: null,
            minLength: 10,
        },
        {
            id: "SubmitButton",
            name: "SubmitButton",
            class: "sptepform btn",
            type: "SubmitButton",
            onclick: "createBlog"
        }
    ]
}
export default blog;