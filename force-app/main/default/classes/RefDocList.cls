public with sharing class RefDocList {
    @AuraEnabled(cacheable=true)
    public static List<ref_by__c> m2(){
       return [SELECT Id, firstName__c, lastName__c 
       FROM ref_by__c];
  }
}