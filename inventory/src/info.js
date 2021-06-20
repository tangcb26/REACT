import React from "react";
class Info extends React.Component {
    render() {
        const title = "This is my title.";
        const showTitle = true;
        if (showTitle) {
            return (
                <div>
                    {title}
                    <h1>{title}</h1>
                    <p>Manage your stuff</p>
                </div>
            );
        } else {
            return <p>empty</p>;
        }
    }
}

export default Info; //if want to import the function in some other files, remember to import it here
