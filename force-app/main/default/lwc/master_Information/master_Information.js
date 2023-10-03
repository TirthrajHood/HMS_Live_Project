import { LightningElement,wire, track } from 'lwc';
import M2 from '@salesforce/apex/RefDocList.m2';

import modelChildRefDoc from 'c/modelChildRefDoc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
export default class Master_Information extends LightningElement {
    //Refer Doctor tab logic start

    @track refDocObj;
    @track Column = [
        {label:'First Name', fieldName:'firstName__c', type:'text', editable:true},
        {label:'Last Name', fieldName:'lastName__c', type:'text',  editable:true},
    ];
  
    @wire (M2) cons(refDoc){
      this.refDocObj=refDoc;
      if(refDoc.error){
        this.refDocObj=undefined;
      }
    };
    
   

    async click(){
        const result=await modelChildRefDoc.open({
         size:"small"
        });
        this.refresh(); 
                  
        }

        fieldsItemValue=[];

        handleSave(event){
                  this.fieldsItemValue=event.detail.draftValues;
                  const inputItems=this.fieldsItemValue.slice().map(draft =>{
                    const fields=Object.assign({}, draft);
                    return {fields};
                  });
                  const promises= inputItems.map(recordInput => updateRecord(recordInput));
                  Promise.all(promises).then(res =>{
                    console.log('rse',res);
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Success',
                        message:'Record Update Successfully!!',
                        variant:'success'
                    }));
                    this.fieldsItemValue=[];
                    return this.refresh(); 
                  }).catch(error =>{
                    console.log('error',error);
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Error',
                        message:'An Error Occured!!',
                        variant:'error'
                    }));
                  }).finally(() =>{
                    this.fieldsItemValue=[];
                  });
                }
                async refresh(){
                    await refreshApex(this.refDocObj)
                }

    //Refer Doctor tab logic end

   
    }