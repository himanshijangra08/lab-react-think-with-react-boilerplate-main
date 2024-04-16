class ReactContainer extends React.Component {
    render() {
        return (
            <div>
                Hello! Welcome to Kalvium<br></br>
                lets rock and roll this is a babel.
            </div>
        );
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container);    
