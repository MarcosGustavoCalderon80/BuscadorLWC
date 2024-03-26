public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> searchAccounts(String searchTerm) {
        String searchKey = '%' + searchTerm + '%';
        return [SELECT Id, Name, Phone, Website FROM Account WHERE Name LIKE :searchKey OR Phone LIKE :searchKey OR Website LIKE :searchKey LIMIT 1];
    }
}