import * as plivo from "plivo";

const authId = process.env.PLIVO_AUTH_ID;
const authToken = process.env.PLIVO_AUTH_TOKEN;
const sendPhoneNumber = "JMISKN";

const smstemp = (token) => {
  return `${token} - OTP to verify your number to access the ISKCON App, powered by META JUPITER SOFTWARE SOLUTIONS PRIVATE LIMITED. Do not share.`;
};
//SEND OTP FUNCTION
const sendOtp = async ( dst, otp) => {
    const client = new plivo.Client(authId, authToken);
    const dltParams = {
      dlt_entity_id: process.env.PLIVO_DLT_ENTITY_ID,
      dlt_template_id: process.env.PLIV0_TEMPLATE_ID,
      dlt_template_category: process.env.PLIV0_TEMPLATE_CATEGORY,
    };
    const number = `91${dst}`;
    const messageParams = {
      src: sendPhoneNumber,
      dst: number,
      text: smstemp(otp),
      ...dltParams,
    };
    const messageCreated = await client.messages.create(messageParams);
    console.log("Message send status", messageCreated);
    return{ message: messageCreated.messageUuid }
};

export default {
  sendOtp,
};
