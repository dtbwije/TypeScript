import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

class ValidatedForm extends React.Component {
     state = {
        department: '',
        message: '',
        agreedToTerms: false,
        departmentValidatedMessage: 'null',
        messageValidatedMessage: 'null',
        agreedToTermdsValidationMessage: 'null',
     };

    handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        const { name, value, type } = target;
        const newValue = type === 'checkbox' && target instanceof HTMLInputElement ? target.checked : value;
        this.setState({ [name]: newValue });   
    }

    handleBlur = (
        event: React.FocusEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        this.validate();
        console.log(event);
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!this.isValid()) {
            return;
        }
        console.log(this.state);
    };

    isValid = () => {
        const {
            departmentValidatedMessage,
            messageValidatedMessage,
            agreedToTermdsValidationMessage,
        } = this.state;
        return (
            departmentValidatedMessage === null &&
            messageValidatedMessage === null &&
            agreedToTermdsValidationMessage === null
        );
    };

    validate() {
        const { department, message, agreedToTerms } = this.state;
        this.setState({
        departmentValidatedMessage: null,
        messageValidatedMessage: null,
        agreedToTermdsValidationMessage: null,
        });
        if (!department) {
        this.setState({ departmentValidatedMessage: 'Department is required.' });
        }
        if (!message) {
        this.setState({ messageValidatedMessage: 'A message is required.' });
        }
        if (agreedToTerms === false) {
        this.setState({
            agreedToTermdsValidationMessage:
            'You must agree to the terms and conditions.',
        });
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <select
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            >
            <option value="">Select...</option>
            <option value="hr">Human Resources</option>
            <option value="pr">Public Relations</option>
            <option value="support">Support</option>
            </select>
            <br />
            {this.state.departmentValidatedMessage && (
            <p className="alert">{this.state.departmentValidatedMessage}</p>
            )}
            <br />
            <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                cols={30}
                rows={10}
            />
            <br />
            {this.state.messageValidatedMessage && (
            <p className="alert">{this.state.messageValidatedMessage}</p>
            )}
            <input
                type="checkbox"
                name="agreedToTerms"
                checked={this.state.agreedToTerms}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
            I agree to the terms and conditions.
            <br />
            {this.state.agreedToTermdsValidationMessage && (
            <p className="alert">{this.state.agreedToTermdsValidationMessage}</p>
            )}
            <button>Send</button>
            <pre>{JSON.stringify(this.state, null, ' ')}</pre>
        </form>
        );
    }
}

export default ValidatedForm;