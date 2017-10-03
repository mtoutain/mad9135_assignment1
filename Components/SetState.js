/**
 * Created by Mitch on 2017-10-02.
 */
let state = {};

function setState(changes) {
    let component;
    let componentProperties = {};

    Object.assign(state, changes);

    let splittedUrl = state.location.replace(/^#\/?|\/$/g, '').split('/');
    switch (splittedUrl[0]) {

    case 'addItem': {
        component = AddNewItemPage;
        componentProperties = {
            bananaItem: state.bananaItem,
            onNewMenuItemChange: function (item) {
                setState({bananaItem: item,});
            },
            onSubmitNewItem: function (item) {
                let List = state.items;
                const newKey = List.length + 1;
                List.push(Object.assign({}, {key: newKey, id: newKey}, item));
                setState({items: List, bananaItem: {name: '', description: '', price: ''}});
            }
        };
        break;
    }
    case 'item': {
        component = ItemInfo;
        componentProperties = bananaItems.find(i => i.key == splittedUrl[1]);

        break;
    }
    default: {
        component = MainView;
        componentProperties = {items: state.items};
    }
    }
    let rootElements =
        React.createElement('div', {},
            React.createElement(NavBar, {}),
            React.createElement(component, componentProperties)
        );

    ReactDOM.render(rootElements, document.getElementById('react-app'));
}

window.addEventListener('hashchange', () =>setState({location: location.hash}));
//Start the app by declaring the initial state
setState({bananaItem: {name: '', description: '', price: ''}, location: location.hash, items: bananaItems});