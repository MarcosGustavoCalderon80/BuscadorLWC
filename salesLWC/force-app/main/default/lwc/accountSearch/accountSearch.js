import { LightningElement, track } from 'lwc';
import searchAccounts from '@salesforce/apex/AccountSearchController.searchAccounts';

export default class AccountSearch extends LightningElement {

    @track accounts = [];
    @track searchTermAcc = '';

    handleSearchChangeAcc(event) {
        this.searchTermAcc = event.target.value;
        this.searchAccounts();
    }

    searchAccounts() {
        searchAccounts({ searchTermAcc: this.searchTermAcc })
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error('Error searching accounts', error);
            });
    }

}