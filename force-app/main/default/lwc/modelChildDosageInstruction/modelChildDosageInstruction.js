import { LightningElement } from 'lwc';

import DosIns__OBJECT from '@salesforce/schema/dosage_instructions__c';
import LightningModal6 from 'lightning/modal';
import Dosage_Instruction from '@salesforce/schema/dosage_instructions__c.dosageInstruction__c';

export default class ModelChildDosageInstruction extends LightningModal6 {
    objectApiName = DosIns__OBJECT;
    fields=[Dosage_Instruction];
}