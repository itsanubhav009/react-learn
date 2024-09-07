
import React  , {Component} from 'react'
class ClickCounterTwo extends Component {
   

    render() {
        const { count } = this.props;
        return (
            <div>
                <button onClick={this.props.incrementCount}>Click Me</button>
                <p>Clicked {count} times</p>
            </div>
        );
    }
}

export default ClickCounterTwo;