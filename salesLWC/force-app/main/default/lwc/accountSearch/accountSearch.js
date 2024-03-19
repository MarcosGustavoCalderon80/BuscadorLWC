import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import searchAccounts from '@salesforce/apex/AccountSearchController.searchAccounts';

export default class AccountSearch extends NavigationMixin(LightningElement) {
    @track accounts = [];
    @track searchTermAcc = '';

    handleSearchChangeAcc(event) {
        this.searchTermAcc = event.target.value;
        if (this.searchTermAcc === '') {
            this.accounts = []; 
        } else {
            this.searchAccounts();
        }
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

    navigateToAccount(event) {
        const accountId = event.currentTarget.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: accountId,
                actionName: 'view'
            }
        });
    }
}
