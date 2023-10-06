import { LightningElement } from 'lwc';

import OPDCollHead__OBJECT from '@salesforce/schema/opd_collection_head__c';
import LightningModal7 from 'lightning/modal';
import Particulars from '@salesforce/schema/opd_collection_head__c.particulars__c';
import Charges from '@salesforce/schema/opd_collection_head__c.charges__c';


export default class ModelChildOPDCollHead extends LightningModal7 {
    objectApiName = OPDCollHead__OBJECT;
    fields=[Particulars, Charges];
}