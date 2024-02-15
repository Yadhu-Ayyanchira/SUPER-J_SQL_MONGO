# SUPER-J BACKEND

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jupiter-Meta/superj-backend.git

2. Install dependencies:

   ```bash
   npm install
   npm i -g nodemon

3. Create a .env file in the root directory with the following content:

   ```bash
   MONGO_URL = ************************

   JWTKEY_SECRET = "***************"

   PORT=****

   PLIVO_AUTH_ID = "******************"
   PLIVO_AUTH_TOKEN = *************************
   PLIVO_SENDER_ID = ********
   PLIVO_DLT_ENTITY_ID = **********************
   PLIV0_TEMPLATE_ID = ********************
   PLIV0_TEMPLATE_CATEGORY = *****************

3. To start the app

   ```bash
   npm start



# NOTE

   ```bash
      Always follow the structure

      #CONTROLLER FUNCTION
      const FnName = async (req, res, next) => {
      try {
        // Your code here
        return res.status(200).json({status: status, message:"your  message", data: data});
      } catch (error) {
        console.error("Error Message:", error);
        next(error);
         }
      }

      #SERVICE FUNCTION
      const serviceFn = async () => {
      // Your code here
      return data;
      }

