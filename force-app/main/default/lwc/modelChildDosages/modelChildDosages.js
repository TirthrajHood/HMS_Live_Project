import { LightningElement } from 'lwc';
import Dosages__OBJECT from '@salesforce/schema/dosages__c';
import LightningModal5 from 'lightning/modal';
import Dosage from '@salesforce/schema/dosages__c.dosage__c';

export default class ModelChildDosages extends LightningModal5 {
    objectApiName = Dosages__OBJECT;
    fields=[Dosage];
}