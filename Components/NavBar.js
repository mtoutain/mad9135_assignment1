/**
 * Created by Mitch on 2017-10-01.
 */
let NavBar = React.createClass({
    render: function () {
        return (
            React.createElement('div', {className: 'nav-bar'},
                React.createElement('span', {className:'nav-item'},
                    React.createElement('a', {href: '#'}, 'Banana Things')
                ),
                React.createElement('span', {className:'nav-item'},
                    React.createElement('a', {href: '#addItem'}, 'Add Banane?')
                )
            )
        );
    }
});