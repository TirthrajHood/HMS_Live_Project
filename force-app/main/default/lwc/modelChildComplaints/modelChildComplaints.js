import { LightningElement } from 'lwc';
import Complaint__OBJECT from '@salesforce/schema/complaints__c';
import LightningModal2 from 'lightning/modal';
import complaint from '@salesforce/schema/complaints__c.complaint__c';

export default class ModelChildComplaints extends LightningModal2 {
    objectApiName=Complaint__OBJECT;
    fields=[complaint];
}