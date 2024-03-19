import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import searchProducts from '@salesforce/apex/ProductSearchController.searchProducts';

export default class ProductSearch extends NavigationMixin (LightningElement) {
    @track products = [];
    @track searchTerm = '';

    handleSearchChange(event) {
        this.searchTerm = event.target.value;
        if (this.searchTerm === '') {
            this.products = []; 
        } else {
            this.searchProducts();
        }
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
    navigateToProduct(event) {
        const productId = event.currentTarget.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: productId,
                actionName: 'view'
            }
        });
    }
}