import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['green','yellow','black','red','white','blue'];

class ColorHeader extends React.Component {
    render() {
        return <h1>Color Tool</h1>;
    }
}

class ItemList extends React.Component {

    static propTypes = {
        items: React.PropTypes.array
    };

    render() {
        return <ul>
            {this.props.items.map(item =>
                <li>{item}</li>
            )}
        </ul>;
    }
}

class ColorForm extends React.Component {

    static propTypes = {
        addColor: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    addNewColor = () => {
        this.props.addColor(this.state.newColor);
        this.setState({
            newColor: ''
        });
    };

    render() {
        return <form>
            <div>
                <label htmlFor="new-color-input">New Color</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
            </div>
            <button type="button" onClick={this.addNewColor}>Add Color</button>
        </form>;
    }    

}

class ColorTool extends React.Component {

    static propTypes = {
        myColors: React.PropTypes.array
    };    

    constructor(props) {
        super(props);

        this.state = {
            colors: this.props.myColors.concat()
        };
    }

    addColor = (newColor) => {
        this.setState({
            colors: this.state.colors.concat(newColor)
        });
    }

    render() {

        return <div>
            <ColorHeader />
            <ItemList items={this.state.colors} />
            <ColorForm addColor={this.addColor} />
        </div>;
    }
}

ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'));