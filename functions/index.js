const logger = require("firebase-functions/logger");

const admin = require("firebase-admin");
const {onCall} = require("firebase-functions/v2/https");


admin.initializeApp();

// Creating our backend code
exports.linkAccounts = onCall(async (data, context) => {
  const email = data.email;

  try {
    // Get the user with the email
    const userMetaData = await admin.auth().getUserByEmail(email);
    const uid = userMetaData.uid;
    // Create a custom token that will be used for signing the user in
    const customToken = await admin.auth().createCustomToken(uid);
    // Return the custom token to be used to sign the user in
    return {
      customToken: customToken,
    };
  } catch (error) {
    logger.info(error.code, error.message);
  }
});
