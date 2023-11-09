import { useState } from 'react';

export function usePerson() {
    const [firstName, setFirstName] = useState('');

    function greetPerson() {
        console.log(`Hello ${firstName}`);
    }

    return { setFirstName, greetPerson };
}

