/**
 * Created by Mitch on 2017-10-01.
 */
let ItemInfo = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    },

    render: function(){
        return(
            React.createElement('div',{ },
                React.createElement('h2',{className:'h2Info'}, this.props.name),
                React.createElement('p',{className:'pInfo'},this.props.description),
                React.createElement('p',{className:'priceInfo'},'Price: ' + this.props.price)
            )
        );
    }
});