import { LightningElement } from 'lwc';

import Consultant__OBJECT from '@salesforce/schema/consultant__c';
import LightningModal12 from 'lightning/modal';
import Consultant_Name from '@salesforce/schema/consultant__c.consultantName__c';

export default class ModelChildConsultant extends LightningModal12 {
    objectApiName = Consultant__OBJECT;
    fields=[Consultant_Name];
}