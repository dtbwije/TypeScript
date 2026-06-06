
import React from "react";

function ExampleForm() {
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };