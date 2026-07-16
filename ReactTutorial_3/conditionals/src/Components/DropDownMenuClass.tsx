import React from 'react';

interface CurrentState {
    isOpen: boolean;
}

class DropDownMenuClass  extends React.Component<{}, CurrentState> {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState((currentState) => ({
            isOpen: !currentState.isOpen
        }))
    }

    render() {
        let menu;
        if (this.state.isOpen) {
            menu = (
                <ul>
                    <li>Edit</li>
                    <li>Remove</li>
                    <li>Archive</li>
                </ul>
            )
        }
        return (
            <div>
                <button onClick={this.handleClick}>Actions</button>
                {menu}
            </div>
        )
    }
}

export default DropDownMenuClass;