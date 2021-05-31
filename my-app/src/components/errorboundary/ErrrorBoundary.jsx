import React from 'react';
class ErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null};
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }
    render () {
        if (this.state.errorInfo) {
            return (
                <div className="container">
                    <h2 className="text-danger">Something Went Wrong </h2>
                    <details style={{ whitespace: "pre-wrap"}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;