public with sharing class RefDocList {
   //Refer Doctor tab logic start
    @AuraEnabled(cacheable=true)
    public static List<ref_by__c> refDocData(){
       return [SELECT Id, firstName__c, lastName__c FROM ref_by__c];
  }
    //Refer Doctor tab logic end

    //Past History tab logic start
  @AuraEnabled(cacheable=true)
    public static List<past_history__c> pastHis(){
       return [SELECT pastHistory__c FROM past_history__c];
  }
  //Past History tab logic end

  //Past Complaint tab logic start
  @AuraEnabled(cacheable=true)
    public static List<complaints__c> complaint(){
       return [SELECT complaint__c FROM complaints__c];
  }
  //Past Complaint tab logic end 
}
