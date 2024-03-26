/* eslint-disable no-sequences */
import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/CreateContactController.createContact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateContact extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track email = '';
    @track phone = '';
    
    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }
    
    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }
    
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    handlePhoneChange(event) {
        this.phone = event.target.value;
    }
    
    createContact() {
        createContact({ 
            firstName: this.firstName, lastName: this.lastName, email: this.email, phone : this.phone 
        })
        .then( success => {
            console.log(`Exito: ${success}`);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Exito',
                message: 'Se ha creado el contacto exitosamente',
                variant: 'success',
            }))
            console.log(this.firstName);
            this.clearInputField();

        })
        .catch( error => {
            console.log(`Error: ${error}`);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message: 'Ha ocurrido un error, complete todos los campos de forma correcta!',
                variant: 'Error',
            }))
        })
    }
    clearInputField(){
        // eslint-disable-next-line no-unused-expressions
        this.firstName = '',
        this.lastName = '',
        this.email = '',
        this.phone = ''
    }
}