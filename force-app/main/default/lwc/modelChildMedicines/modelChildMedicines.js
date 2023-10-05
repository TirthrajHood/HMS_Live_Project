import { LightningElement } from 'lwc';
import Medicine__OBJECT from '@salesforce/schema/medicines__c';
import LightningModal4 from 'lightning/modal';
import Name from '@salesforce/schema/medicines__c.name__c';
import Prefix from '@salesforce/schema/medicines__c.prefix__c';
import Generic from '@salesforce/schema/medicines__c.generic__c';


export default class ModelChildMedicines extends LightningModal4 {
    objectApiName = Medicine__OBJECT;
    fields=[Name, Prefix, Generic ];

}