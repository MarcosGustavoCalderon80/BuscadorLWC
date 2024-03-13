public with sharing class AccountSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchTermAcc) {
        return [SELECT Id, Name, Description FROM Account WHERE Name LIKE :'%'+searchTermAcc+'%'];
    }
    }
