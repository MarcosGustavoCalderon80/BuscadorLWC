import { LightningElement, track } from 'lwc';
import searchProducts from '@salesforce/apex/ProductSearchController.searchProducts';

export default class ProductSearch extends LightningElement {
    @track products = [];
    @track searchTerm = '';

    handleSearchChange(event) {
        this.searchTerm = event.target.value;
        this.searchProducts();
    }

    searchProducts() {
        searchProducts({ searchTerm: this.searchTerm })
            .then(result => {
                this.products = result;
            })
            .catch(error => {
                console.error('Error searching products', error);
            });
    }
}
