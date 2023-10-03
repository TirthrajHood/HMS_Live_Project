import { LightningElement } from 'lwc';
import Ref_By__OBJECT from '@salesforce/schema/ref_by__c';
import LightningModal from 'lightning/modal';
import First_Name from '@salesforce/schema/ref_by__c.firstName__c';
import Last_Name from '@salesforce/schema/ref_by__c.lastName__c';

export default class ModelChildRefDoc extends LightningModal {
    objectApiName=Ref_By__OBJECT;
    fields=[First_Name, Last_Name];
}