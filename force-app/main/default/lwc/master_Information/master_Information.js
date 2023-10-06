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
 import Med from '@salesforce/apex/RefDocList.medicine';
 import modelChildMedicines from 'c/modelChildMedicines';
 //Medicines tab logic end

 //Doceges tab logic start
 import Dose from '@salesforce/apex/RefDocList.Dosage';
 import modelChildDosages from 'c/modelChildDosages';
 //Dosages tab logic end

 //Advice tab logic start
 import Adv from '@salesforce/apex/RefDocList.Advices';
 import modelChildAdvice from 'c/modelChildAdvice';
 //Advice tab logic end

 //Consultant tab logic start
 import Consult from '@salesforce/apex/RefDocList.Consultant';
 import modelChildConsultant from 'c/modelChildConsultant';
 //Consultant tab logic end

 //Diagnosis tab logic start
 import Diagnosis from '@salesforce/apex/RefDocList.diagnosis';
 import modelChildDignosis from 'c/modelChildDignosis';
 //Diagnosis tab logic end

 //Dosage Instruction tab logic start
 import DoseInst from '@salesforce/apex/RefDocList.dosIns';
 import modelChildDosageInstruction from 'c/modelChildDosageInstruction';
 //Dosage Instruction tab logic end

 //OPD Collection Head tab logic start
 import OPDHead from '@salesforce/apex/RefDocList.opdColHead';
 import modelChildOPDCollHead from 'c/modelChildOPDCollHead';
 //OPD Collection Head tab logic end
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

@track MedicinesObj;
@track med = [
{label:'Name', fieldName:'name__c', type:'text', editable:true},
{label:'Prefix', fieldName:'prefix__c', type:'text', editable:true},
{label:'Generic', fieldName:'generic__c', type:'text', editable:true},
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

@wire (Med) med1(meds1){
  this.MedicinesObj=meds1;
  if(meds1.error){
    this.MedicinesObj=undefined;
  }
};

fieldsItemValue4=[];
handleSave4(event){
  this.fieldsItemValue4=event.detail.draftValues;
  const inputItems=this.fieldsItemValue4.slice().map(draft =>{
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
    this.fieldsItemValue4=[];
    return this.refresh4(); 
  }).catch(error =>{
    console.log('error',error);
    this.dispatchEvent(new ShowToastEvent({
        title: 'Error',
        message:'An Error Occured!!',
        variant:'error'
    }));
  }).finally(() =>{
    this.fieldsItemValue4=[];
  });
}
async refresh4(){
    await refreshApex(this.MedicinesObj)
}

async click4(){
  const result=await modelChildMedicines.open({
   size:"small"
  });
  this.refresh4(); 
            
  }

  handleRowAction2(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow2(recId);
    }
  }

    handleDeleteRow2(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh4();
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

//Dosages tab logic start
@track dosagesObj;
@track dos = [
  {label:'Dosages', fieldName:'dosage__c', type:'text', editable:true},
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

  @wire (Dose) dos1(dosage){
    this.dosagesObj=dosage;
    if(dosage.error){
      this.dosagesObj=undefined;
    }
  };

  fieldsItemValue5=[];
  handleSave5(event){
    this.fieldsItemValue5=event.detail.draftValues;
    const inputItems=this.fieldsItemValue5.slice().map(draft =>{
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
      this.fieldsItemValue5=[];
      return this.refresh5(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      this.fieldsItemValue5=[];
    });
  }
  async refresh5(){
      await refreshApex(this.dosagesObj)
  }

  async click5(){
    const result=await modelChildDosages.open({
     size:"small"
    });
    this.refresh5(); 
  }

  handleRowAction5(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow5(recId);
    }
  }

    handleDeleteRow5(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh5();
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
//Dosages tab logic end

//Dosages Instruction tab logic start
@track dosagesInsObj;
@track dosInstr = [
  {label:'Dosages Instruction', fieldName:'dosageInstruction__c', type:'text', editable:true},
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

  @wire (DoseInst) dosInst1(dosageInst){
    this.dosagesInsObj=dosageInst;
    if(dosageInst.error){
      this.dosagesInsObj=undefined;
    }
  };

  fieldsItemValue6=[];
  handleSave6(event){
    this.fieldsItemValue6=event.detail.draftValues;
    const inputItems=this.fieldsItemValue6.slice().map(draft =>{
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
      this.fieldsItemValue6=[];
      return this.refresh6(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      this.fieldsItemValue6=[];
    });
  }
  async refresh6(){
      await refreshApex(this.dosagesInsObj)
  }

  async click6(){
    const result=await modelChildDosageInstruction.open({
     size:"small"
    });
    this.refresh6(); 
  }

  handleRowAction6(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow6(recId);
    }
  }

    handleDeleteRow6(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh6();
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
//Dosages Instruction tab logic end

//OPD Collection Head tab logic start
@track opHeadObj;
@track opHead = [
  {label:'Particulars', fieldName:'particulars__c', type:'text', editable:true},
  {label:'Charges', fieldName:'charges__c', type:'text', editable:true},
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

  @wire (OPDHead) opd1(opdh){
    this.opHeadObj=opdh;
    if(opdh.error){
      this.opHeadObj=undefined;
    }
  };

  fieldsItemValue7=[];
  handleSave7(event){
    this.fieldsItemValue7=event.detail.draftValues;
    const inputItems=this.fieldsItemValue7.slice().map(draft =>{
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
      this.fieldsItemValue7=[];
      return this.refresh7(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      this.fieldsItemValue7=[];
    });
  }
  async refresh7(){
      await refreshApex(this.opHeadObj)
  }

  async click7(){
    const result=await modelChildOPDCollHead.open({
     size:"small"
    });
    this.refresh7(); 
  }

  handleRowAction7(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow7(recId);
    }
  }

    handleDeleteRow7(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh7();
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
//OPD Collection Head tab logic end

//Advice tab logic start
@track adviceObj;
@track ad = [
  {label:'Advice', fieldName:'advice__c', type:'text', editable:true},
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

  @wire (Adv) adv1(advc){
    this.adviceObj=advc;
    if(advc.error){
      this.adviceObj=undefined;
    }
  };

  fieldsItemValue11=[];
  handleSave11(event){
    this.fieldsItemValue11=event.detail.draftValues;
    const inputItems=this.fieldsItemValue11.slice().map(draft =>{
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
      this.fieldsItemValue11=[];
      return this.refresh11(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      
      this.fieldsItemValue11=[];
    });
  }
   
  async refresh11(){
      await refreshApex(this.adviceObj)
  }

  async click11(){
    const result=await modelChildAdvice.open({
     size:"small"
    });
    this.refresh11(); 
  }

  handleRowAction11(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow11(recId);
    }
  }

    handleDeleteRow11(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh11();
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
//Advice tab logic end

//Consultant tab logic start
@track consultantObj;
@track cons = [
  {label:'Consultants', fieldName:'consultantName__c', type:'text', editable:true},
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

  @wire (Consult) co(co1){
    this.consultantObj=co1;
    if(co1.error){
      this.consultantObj=undefined;
    }
  };

  fieldsItemValue12=[];
  handleSave12(event){
    this.fieldsItemValue12=event.detail.draftValues;
    const inputItems=this.fieldsItemValue12.slice().map(draft =>{
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
      this.fieldsItemValue12=[];
      return this.refresh12(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      
      this.fieldsItemValue12=[];
    });
  }
   
  async refresh12(){
      await refreshApex(this.consultantObj)
  }

  async click12(){
    const result=await modelChildConsultant.open({
     size:"small"
    });
    this.refresh12(); 
  }

  handleRowAction12(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow12(recId);
    }
  }

    handleDeleteRow12(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh12();
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
//Consultant tab logic end

//Diagnosis tab logic start
@track diagnosisObj;
@track diag = [
  {label:'Diagnosis', fieldName:'diagnosis__c', type:'text', editable:true},
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

  @wire (Diagnosis) di(dia){
    this.diagnosisObj=dia;
    if(dia.error){
      this.diagnosisObj=undefined;
    }
  };

  fieldsItemValue13=[];
  handleSave13(event){
    this.fieldsItemValue13=event.detail.draftValues;
    const inputItems=this.fieldsItemValue13.slice().map(draft =>{
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
      this.fieldsItemValue13=[];
      return this.refresh13(); 
    }).catch(error =>{
      console.log('error',error);
      this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'An Error Occured!!',
          variant:'error'
      }));
    }).finally(() =>{
      
      this.fieldsItemValue13=[];
    });
  }
   
  async refresh13(){
      await refreshApex(this.diagnosisObj)
  }

  async click13(){
    const result=await modelChildDignosis.open({
     size:"small"
    });
    this.refresh13(); 
  }

  handleRowAction13(event){
    const recId = event.detail.row.Id;
    const actionName = event.detail.action.name;
    if (actionName === 'Delete') {
        this.handleDeleteRow13(recId);
    }
  }

    handleDeleteRow13(recordIdToDelete) {
      deleteRecord(recordIdToDelete)
          .then(result => {
              this.showToast('Success!!', 'Record deleted successfully!!', 'success', 'dismissable');
              return this.refresh13();
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
//Diagnosis tab logic end

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