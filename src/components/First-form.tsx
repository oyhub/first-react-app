import { useState } from 'react';

function FirstForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    // function onFirstNameChange(event: any) {
    //     setFirstName(event.target.value);
    // }
    // function onLastNameChange(event: any) {
    //     setLastName(event.target.value);
    // }
    // function onCityChange(event: any) {
    //     setCity(event.target.value);
    // }

    function onTextInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        switch (name) {
            case 'first-name':
                setFirstName(value);
                break;
            case 'last-name':
                setLastName(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'body':
                setBody(value);
                break;
        }
    }


    function onFormSubmit(event: any) {
        event.preventDefault();

        const formBody = {
            firstName,
            lastName,
            subject,
            body,
        };

        //Basic fetch example
        // fetch('http://www.example.com', {
        //     method: 'POST',
        //     body: JSON.stringify(formBody)
        // });

        console.log('Submitting form')
        console.log(formBody)
    }
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="first-name">First name</label>
            <input type="text"
                   name="first-name"
                   value={firstName}
                   placeholder="Your first name"
                   onChange={onTextInputChange}
            />
            <label htmlFor="last-name">Last name</label>
            <input type="text"
                   name="last-name"
                   value={lastName}
                   placeholder="Your last name"
                   onChange={onTextInputChange}
            />
            <label htmlFor="subject">Subject</label>
            <input type="text"
                   name="subject"
                   value={subject}
                   placeholder="Your subject"
                   onChange={onTextInputChange}
            />
            <label htmlFor="body">Body</label>
            <textarea name="body"
                      value={body}
                      placeholder="Your body"
                      onChange={onTextInputChange}
            ></textarea>
            <button>Submit</button>
        </form>
    )
}

export default FirstForm;