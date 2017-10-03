/**
 * Created by Mitch on 2017-10-01.
 */

let AddNewItem = React.createClass({
    propTypes: {
        bananaItem: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.bananaItem, {name: e.target.value}));
    },
    onPriceChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.bananaItem, {price: e.target.value}));
    },
    onDescriptionChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.bananaItem, {description: e.target.value}));
    },
    onSubmit: function() {
        this.props.onSubmit(this.props.bananaItem);
    },
    render: function() {
        return (
            React.createElement('form', {},
                React.createElement('input', {className:'input',type: 'text', placeholder: 'Name', value: this.props.bananaItem.name,
                    onChange: this.onNameChange}),
                React.createElement('input', {type: 'text', placeholder: 'Price', value: this.props.bananaItem.price,
                    onChange: this.onPriceChange}),
                React.createElement('textarea', {placeholder: 'Description', value: this.props.bananaItem.description,
                    onChange: this.onDescriptionChange}),
                React.createElement('button', {type: 'button', onClick: this.onSubmit}, 'Submit')
            )
        );
    }
});

let AddNewItemPage = React.createClass({
    propTypes: {
        menuItem: React.PropTypes.object.isRequired,
        onNewMenuItemChange: React.PropTypes.func.isRequired,
        onSubmitNewItem: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement(AddNewItem, {bananaItem: this.props.bananaItem, onChange: this.props.onNewMenuItemChange, onSubmit: this.props.onSubmitNewItem})
            )
        );
    }
});

