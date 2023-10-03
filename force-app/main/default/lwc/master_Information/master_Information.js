import { LightningElement,wire, track } from 'lwc';

 //Refer Doctor tab logic start
import refDocData from '@salesforce/apex/RefDocList.refDocData';

import modelChildRefDoc from 'c/modelChildRefDoc';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
 //Refer Doctor tab logic end

 //Past History tab logic start
 import pastHistory from '@salesforce/apex/RefDocList.pastHis';
 import modelChildPastHistry from 'c/modelChildPastHistry';
 //Past History tab logic end
export default class Master_Information extends LightningElement {
    //Refer Doctor tab logic start

    @track refDocObj;
    @track Column = [
        {label:'First Name', fieldName:'firstName__c', type:'text', editable:true},
        {label:'Last Name', fieldName:'lastName__c', type:'text',  editable:true},
    ];
  
    @wire (refDocData) cons(refDoc){
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

    //Past History tab logic start
    @track pastHistoryObj;
    @track pastHis = [
      {label:'Past Histry', fieldName:'pastHistory__c', type:'text', editable:true}];

      @wire (pastHistory) cons1(pHis){
        this.pastHistoryObj=pHis;
        if(pHis.error){
          this.pastHistoryObj=undefined;
        }
      };

      fieldsItemValue1=[];
      handleSave1(event){
        this.fieldsItemValue1=event.detail.draftValues;
        const inputItems=this.fieldsItemValue1.slice().map(draft =>{
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
          return this.refresh1(); 
        }).catch(error =>{
          console.log('error',error);
          this.dispatchEvent(new ShowToastEvent({
              title: 'Error',
              message:'An Error Occured!!',
              variant:'error'
          }));
        }).finally(() =>{
          this.fieldsItemValue1=[];
        });
      }
      async refresh1(){
          await refreshApex(this.pastHistoryObj)
      }

      async click1(){
        const result=await modelChildPastHistry.open({
         size:"small"
        });
        this.refresh1(); 
                  
        }
   //Past History tab logic end


    }