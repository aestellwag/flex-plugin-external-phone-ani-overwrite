import { Actions } from '@twilio/flex-ui';

// Listening before they accept the task as we want to overwrite the FROM to be the ANI of the customer (customer's number) and not the DNIS (Dial number)
// so that it will show the proper number on the external phone
Actions.addListener('beforeAcceptTask', (payload) => {
    console.log(`Before Accept Task listener activated, setting the proper ANI`);

    // Overwriting the payload conferenceOptions.from and replacing with the payload.task.attributes.from
    // attributes.from is the Customers ANI we want to show up for the external sip phone
    payload.conferenceOptions.from = payload.task.attributes.from;
});