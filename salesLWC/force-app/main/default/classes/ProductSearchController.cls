public with sharing class ProductSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Product2> searchProducts(String searchTerm) {
        return [SELECT Id, Name, Description FROM Product2 WHERE Name LIKE :'%'+searchTerm+'%'];
    }
}
