const express = require('express')
const router = express.Router()


//Vx routing starts here
router.post(`/v24/create-account/account-type`, function (req, res) {
    const accountType = req.session.data['account-type'];
  
    if (accountType === 'Personal') {
        res.redirect(`/v24/create-account/name`);
    } else {
        res.redirect(`/v24/create-account/name`);
    }
  });
  
  
  // VERSION 24
  // ----
  // Run this code when a form is submitted to 'choose-provider-answer-npq'
  router.post(`/v24/choose-provider-answer-npq`, function (req, res) {
  
    // Make a variable and give it the value from 'choose-provider'
    var chooseProvider = req.session.data['choose-provider']
  
    // Check whether the variable matches a condition
    if (chooseProvider == "ambition institute"){
      // Send user to next page
      res.redirect('/v24/financial-statement-NPQ-v9')
    } else {
      // Send user to ineligible page
      res.redirect('/v24/financial-statement-NPQ-v9-page-unavailable')
    }
  
  })
  
  // Run this code when a form is submitted to 'choose-provider-answer-ecf'
  router.post('/v24/choose-provider-answer-ecf', function (req, res) {
  
    // Make a variable and give it the value from 'choose-provider'
    var chooseProvider = req.session.data['choose-provider']
  
    // Check whether the variable matches a condition
    if (chooseProvider == "ambition institute"){
      // Send user to next page
      res.redirect('/v24/financial-statement-ECF-v3-B2')
    } else {
      // Send user to ineligible page
      res.redirect('/v24/financial-statement-ECF-v3-B2-page-unavailable')
    }
  
  })
  
  // Run this code when a form is submitted to 'choose-programme-answer'
  router.post('/v24/choose-programme-answer', function (req, res) {
  
    // Make a variable and give it the value from 'ecf-or-npq'
    var chooseProgramme = req.session.data['ecf-or-npq']
  
    // Check whether the variable matches a condition
    if (chooseProgramme == "ecf payments"){
      // Send user to next page
      res.redirect('/v24/choose-provider-ecf')
    } else {
      // Send user to ineligible page
      res.redirect('/v24/choose-provider-npq')
    }
  
  })
  
  // Run this code when a form is submitted to 'add-adjustment-answer-1'
  router.post('/v24/add-adjustment-answer-1', function (req, res) {
  
    // Make a variable and give it the value from 'add-another'
    var needAnotherAdjustment = req.session.data['add-another']
  
    // Check whether the variable matches a condition
    if (needAnotherAdjustment == "no"){
      // Send user back to statement version/update with Additional adjustment added
      res.redirect('/v24/financial-statement-ECF-v3-B2-added-adjustment')
    } else {
      // Send user to back in loop to add another adjustment (add-adjustment-type-2)
      // Note: adding more than one adjustement is not yet available in prototype
      res.redirect('/v24/add-adjustment-type-2')
    }
  
  })
  
  // Run this code when a form is submitted to 'add-adjustment-answer-2'
  router.post('/add-adjustment-answer-2', function (req, res) {
  
    // Make a variable and give it the value from 'add-another'
    var needAnotherAdjustment = req.session.data['add-another']
  
    // Check whether the variable matches a condition
    if (needAnotherAdjustment == "no"){
      // Send user back to statement version/update with Additional adjustment added
      res.redirect('/page-unavailable-adding-more-than-one-adjustment')
    } else {
      // Send user to back in loop to add another adjustment (add-adjustment-type-2)
      // Note: adding more than one adjustement is not yet available in prototype
      res.redirect('/page-unavailable-adding-more-than-one-adjustment')
    }
  
  })
  
  // Run this code when a form is submitted to 'remove-adjustment-answer'
  router.post('/remove-adjustment-answer', function (req, res) {
  
    // Make a variable and give it the value from 'remove-adjustment'
    var removeAdjustment = req.session.data['remove-adjustment']
  
    // Check whether the variable matches a condition
    if (removeAdjustment == "no"){
      // Send user back to add to a list 
      res.redirect('/adjustments-add-to-a-list-1')
    } else {
      // Send user back to statement
      res.redirect('/financial-statement-ECF-v3-B2-0')
    }
  
  })
  
  // Run this code when a form is submitted to 'remove-adjustment-answer-2'
  router.post('/remove-adjustment-answer-2', function (req, res) {
  
    // Make a variable and give it the value from 'remove-adjustment'
    var removeAdjustment = req.session.data['remove-adjustment-2']
  
    // Check whether the variable matches a condition
    if (removeAdjustment == "no"){
      // Send user back to add to a list 
      res.redirect('/adjustments-add-to-a-list-2')
    } else {
      // Send user back to statement
      res.redirect('/financial-statement-ECF-v3-B2-added-adjustment')
    }
  
  })
  
  // require('./views/version-24/routes.js')(router);
  
  module.exports = router
  
