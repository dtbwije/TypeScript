
import React from "react";

function ExampleForm() {
    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.toUpperCase());
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <pre>You entered: {JSON.stringify(value)}</pre>
        </form>
    );
}

export default ExampleForm;