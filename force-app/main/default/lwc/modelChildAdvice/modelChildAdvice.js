import { LightningElement } from 'lwc';

import Advice__OBJECT from '@salesforce/schema/advices__c';
import LightningModal11 from 'lightning/modal';
import advice from '@salesforce/schema/advices__c.advice__c';

export default class ModelChildAdvice extends LightningModal11 {
    objectApiName = Advice__OBJECT;
    fields=[advice];
}