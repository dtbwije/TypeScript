import React from 'react';

function UncontrolledForm() {
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`Input ref: ${inputRef.current}`);
        console.log(`Input value: ${inputRef.current?.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input defaultValue="INITIAL_VALUE" type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;