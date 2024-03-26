public with sharing class CreateContactController {
    @AuraEnabled
    public static Contact createContact(String firstName, String lastName, String email, String phone) {
        Contact newContact = new Contact(FirstName = firstName, LastName = lastName, Email = email, Phone = phone);
        insert newContact;
        return newContact;
    }
}