const groceryList = [
    {
        items: 'Cereal',
        brand: 'General Mills',
        units: '64oz',
        quantity: 3,
        isPurchased: false
    },
    {
        items: 'Mac n Cheese',
        brand: 'Kraft',
        units: '8oz',
        quantity: 4,
        isPurchased: true
    },

    {
        items: 'Soft Drink',
        brand: 'Coca Cola',
        units: '16oz',
        quantity: 2,
        isPurchased: false
    }
]

class App extends React.Component {
    constructor(props) { // every time you add a method to a component, you NEED to bind it
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.toggleHiring = this.toggleHiring.bind(this)
    }

        state ={
                groceryList: groceryList,
                items: '',
                brand: '',
                units: '',
                quantity: 0,
                isPurchased: false
        }

        handleChange = (event) => {
            // this.state.value = e.target.value // this is wrong, we cannot mutate state directly
            this.setState({ [event.target.id]: event.target.value })
    
        }
    
        handleSubmit = (event) => {
            event.preventDefault()
            const newItem = {
                items: this.state.items,
                brand: this.state.brand,
                units: this.state.units,
                quantity: this.state.quantity
            }
            this.setState({
                groceryList: [newItem, ...this.state.groceryList],
                items: '',
                brand: '',
                units: '',
                quantity: 0
            })
           
        }

render(){
    return (
        <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='items'>Item Name</label>
                    <input type='text' value={this.state.items} onChange={this.handleChange} id='items' placeholder='name of product' />
                    <br />
                    <label htmlFor='brand'>Brand</label>
                    <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' />
                    <br />
                    <label htmlFor='units'>Units</label>
                    <input type='text' value={this.state.units} onChange={this.handleChange} id='units' placeholder='describe me'/><br/>
                    <br />
                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' /><br/>
                    <input type="submit" />
                </form>

            <h1>Test Text</h1>
            <h1>Grocery List</h1>
            <ul>
                {this.state.groceryList.map(listItem =>{
                    return(
                        <li>{listItem.items}</li>
                        )
                })}
            </ul>
            <br />

            <h1>Purchased</h1>
            <ul>
                {this.state.groceryList.map(listItem =>{
                    return(
                        <li>  
                        {listItem.isPurchased ? <span>{listItem.items}</span> : 'Item not purchased'}
                        </li>
                        )
                })}
            </ul>
        </div>
    )
}
}



ReactDOM.render (
    <App />,
    document.querySelector('.container')
)