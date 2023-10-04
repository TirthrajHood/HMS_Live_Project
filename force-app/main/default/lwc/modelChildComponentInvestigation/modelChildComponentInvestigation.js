import { LightningElement } from 'lwc';

import investigation__OBJECT from '@salesforce/schema/investigation__c';
import LightningModal3 from 'lightning/modal';
import Invastigation from '@salesforce/schema/investigation__c.investigations__c';


export default class ModelChildComponentInvestigation extends LightningModal3 {
    objectApiName=investigation__OBJECT;
    fields=[Invastigation];
}