import { LightningElement } from 'lwc';
import Past_History__OBJECT from '@salesforce/schema/past_history__c';
import LightningModal1 from 'lightning/modal';
import Past_History from '@salesforce/schema/past_history__c.pastHistory__c';

export default class ModelChildPastHistry extends LightningModal1  {
    objectApiName=Past_History__OBJECT;
    fields=[Past_History];
}