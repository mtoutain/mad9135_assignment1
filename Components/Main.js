/**
 * Created by Mitch on 2017-10-01.
 */

var ListItem = React.createClass({
    propTypes: {
        key: React.PropTypes.number,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        info: React.PropTypes.string
    },

    render: function(){
        return(
            React.createElement('li',{},
                React.createElement('a',{ className:'menu-item', href: '#/item/' + this.props.id},
                    React.createElement('h2',{className:'h2'},this.props.name),
                    React.createElement('div',{className:'price'},this.props.price),
                    React.createElement('div',{className:'info'},this.props.info)
                )
            )
        );
    }
});

var List = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function() {
        return (
            React.createElement('ul', {}, this.props.items.map(i => React.createElement(ListItem, i)))
        );
    }

});

var MainView = React.createClass({
    propTypes: { items: React.PropTypes.array.isRequried},

    render: function(){
        return(

            React.createElement(List,{items: this.props.items})
        );
    }
});



