import { LightningElement } from 'lwc';

import Dignosis__OBJECT from '@salesforce/schema/diagnosiss__c';
import LightningModal13 from 'lightning/modal';
import Dignosis from '@salesforce/schema/diagnosiss__c.diagnosis__c';

export default class ModelChildDignosis extends LightningModal13 {
    objectApiName = Dignosis__OBJECT;
    fields=[Dignosis];
}