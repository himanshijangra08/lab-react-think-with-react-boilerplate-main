class ReactContainer extends React.Component {
    render() {
        return (
            <div>
                Hello Kalvium
            </div>
        );
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container);    
