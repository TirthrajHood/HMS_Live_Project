import { LightningElement,wire, track,api } from 'lwc';

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

 //Past Complaint tab logic start
 import comp from '@salesforce/apex/RefDocList.complaint';
 import modelChildComplaints from 'c/modelChildComplaints';
 import { deleteRecord } from 'lightning/uiRecordApi';
 //Past Complaint tab logic end

 //Past Investigation tab logic start
 import Invest from '@salesforce/apex/RefDocList.invest';
 import modelChildComponentInvestigation from 'c/modelChildComponentInvestigation';
 //Past Investigation tab logic end

 //Medicines tab logic start

 //Medicines tab logic end
export default class Master_Information extends LightningElement {

//Past Complaint tab logic start
  @track complaintObj;
  @track comp1 = [
    {label:'Complaints', fieldName:'complaint__c', type:'text', editable:true},
    {
     type: "button-icon", label: '', initialWidth: 20, typeAttributes: {
         label: 'Delete',
         name: 'Delete',
         title: 'Delete',
         disabled: false,
         value: 'delete',
         iconPosition: 'left',
         iconName:'utility:delete',
         variant:'destructive' }
     }];

    @wire (comp) cons2(com){
      this.complaintObj=com;
      if(com.error){
        this.complaintObj=undefined;
      }
    };

    fieldsItemValue2=[];
    handleSave2(event){
      this.fieldsItemValue2=event.detail.draftValues;
      const inputItems=this.fieldsItemValue2.slice().map(draft =>{
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
        this.fieldsItemValue2=[];
        return this.refresh2(); 
      }).catch(error =>{
        console.log('error',error);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error',
            message:'An Error Occured!!',
            variant:'error'
        }));
      }).finally(() =>{
        this.fieldsItemValue2=[];
      });
    }
    async refresh2(){
        await refreshApex(this.complaintObj)
    }

    async click2(){
      const result=await modelChildComplaints.open({
       size:"small"
      });
      this.refresh2(); 
                
      }

      handleRowAction(event){
       const recId = event.detail.row.Id;
       const actionName = event.detail.action.name;
       if (actionName === 'Delete') {
           this.handleDeleteRow(recId);
       }
     }

       handleDeleteRow(recordIdToDelete) {
         deleteRecord(recordIdToDelete)
             .then(result => {
                 this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
                 return this.refresh2(); 
             }).catch(error => {
                 this.error = error;
             });
            }

              showToast(title, message, variant, mode) {
            const evt = new ShowToastEvent({
                title: title,
                message: message,
                variant: variant,
                mode: mode
            });
            this.dispatchEvent(evt);
      }

 //Past Complaint tab logic end

//Past Investigation tab logic start
  @track InvastObj;
  @track inv = [
  {label:'Invastigations', fieldName:'investigations__c', type:'text', editable:true},
  {
    type: "button-icon", label: '', initialWidth: 20, typeAttributes: {
        label: 'Delete',
        name: 'Delete',
        title: 'Delete',
        disabled: false,
        value: 'delete',
        iconPosition: 'left',
        iconName:'utility:delete',
        variant:'destructive' }
    }];

  @wire (Invest) cons3(invs){
    this.InvastObj=invs;
    if(invs.error){
      this.InvastObj=undefined;
    }
  };

  fieldsItemValue3=[];
  handleSave3(event){
    this.fieldsItemValue3=event.detail.draftValues;
    const inputItems=this.fieldsItemValue3.slice().map(draft =>{
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
      this.fieldsItemValue3=[];
      return this.refresh3(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      this.fieldsItemValue3=[];
    });
  }
  async refresh3(){
      await refreshApex(this.InvastObj)
  }

  async click3(){
    const result=await modelChildComponentInvestigation.open({
     size:"small"
    });
    this.refresh3(); 
              
    }

    handleRowAction1(event){
      const recId = event.detail.row.Id;
      const actionName = event.detail.action.name;
      if (actionName === 'Delete') {
          this.handleDeleteRow1(recId);
      }
    }

      handleDeleteRow1(recordIdToDelete) {
        deleteRecord(recordIdToDelete)
            .then(result => {
                this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
                return this.refresh3();
            }).catch(error => {
                this.error = error;
            });
          }

          showToast(title, message, variant, mode) {
            const evt = new ShowToastEvent({
                title: title,
                message: message,
                variant: variant,
                mode: mode
            });
            this.dispatchEvent(evt);
          }

//Past Investigation tab logic end

//Medicines tab logic start

   
 //Medicines tab logic end

//Past History tab logic start
@track pastHistoryObj;
@track pastHis = [
  {label:'Past Histry', fieldName:'pastHistory__c', type:'text', editable:true},
  {
    type: "button-icon", label: '', initialWidth: 20, typeAttributes: {
        label: 'Delete',
        name: 'Delete',
        title: 'Delete',
        disabled: false,
        value: 'delete',
        iconPosition: 'left',
        iconName:'utility:delete',
        variant:'destructive' }
    }];

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
      this.fieldsItemValue1=[];
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

  handleRowAction4(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow4(recId);
    }
  }

    handleDeleteRow4(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh1();
          }).catch(error => {
              this.error = error;
          });
        }

        showToast(title, message, variant, mode) {
          const evt = new ShowToastEvent({
              title: title,
              message: message,
              variant: variant,
              mode: mode
          });
          this.dispatchEvent(evt);
        }
             
//Past History tab logic end

//Refer Doctor tab logic start

    @track refDocObj;
    @track Column = [
        {label:'First Name', fieldName:'firstName__c', type:'text', editable:true},
        {label:'Last Name', fieldName:'lastName__c', type:'text',  editable:true}, 
        {
          type: "button-icon", label: '', initialWidth: 20, typeAttributes: {
              label: 'Delete',
              name: 'Delete',
              title: 'Delete',
              disabled: false,
              value: 'delete',
              iconPosition: 'left',
              iconName:'utility:delete',
              variant:'destructive' }
          }
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

                handleRowAction14(event){
                  const recId = event.detail.row.Id;
                  const actionName = event.detail.action.name;
                  if (actionName === 'Delete') {
                      this.handleDeleteRow14(recId);
                  }
                }
            
                  handleDeleteRow14(recordIdToDelete) {
                    deleteRecord(recordIdToDelete)
                        .then(result => {
                            this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
                            return this.refresh();
                        }).catch(error => {
                            this.error = error;
                        });
                      }
            
                      showToast(title, message, variant, mode) {
                        const evt = new ShowToastEvent({
                            title: title,
                            message: message,
                            variant: variant,
                            mode: mode
                        });
                        this.dispatchEvent(evt);
                      }
          
   //Refer Doctor tab logic end

 }