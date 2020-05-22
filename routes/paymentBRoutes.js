const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {getUseryId} = require ("../controllers/user")

const { getToken, processPayment } = require("../controllers/paymentb");
// router.param("userId", getUseryId)
router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);


router.post(
  "payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);

module.exports = router;
