# 03 JavaScript: Password Generator

This document was prepared by Terry Cetoute. The code that will be generated is for allowing a user to be able to generate passwords based on the complexity that the user seeks. They will be able to copy the generated password for their personal usage or leverage this program as a third party source. The password can be generated as many times as the user would like.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
    * GIVEN I need a new, secure password
    * WHEN I click the button to generate a password
    * THEN I am presented with a series of prompts for password criteria
    * WHEN prompted for password criteria
    * THEN I select which criteria to include in the password
    * WHEN prompted for the length of the password
    * THEN I choose a length of at least 8 characters and no more than 128 characters
    * WHEN prompted for character types to include in the password
    * THEN I choose lowercase, uppercase, numeric, and/or special characters
    * WHEN I answer each prompt
    * THEN my input should be validated and at least one character type should be selected
    * WHEN all prompts are answered
    * THEN a password is generated that matches the selected criteria
    * WHEN the password is generated
    * THEN the password is either displayed in an alert or written to the page
```

This document successfully achieves all the criteria above given by the Client.

## Achievements

Using Javascript, CSS, and HTML, the following deliverables were met:

* Prompts to guide the user to setup the level of complexity of the password being generated

* Verification code to verify the validity of the users entry

* Alerts and break code to prevent entries that are deemed invalid

## Methodology

For the task given, it started with the idea of allowing the user to respond to a prompt of a list of character types. This quickly became convoluted and needed to much statements and conditions to take care of endless possible solutions. I simplified it by asking a simple yes or no. Once this was completed, then I created some "exit" code to allow for the user to start over.

Then I generated the password with the information received. I used the function "console.log" quite often to test and to debug the code. I learn how to debug code and work through issues. I overcame several issues,such as the concatenation of the generated password if the process was completed several times.

### Technology

The following technology is being used

  * HTML 5
  * CSS
  * Javascript

### Links

Github pages link:

   * <https://terry212.github.io/HW-WK3/>

Go to the link above
Navigate to Week 3 HW link and click on it

Repo link:

   * <https://github.com/terry212/Coursework-CetouteT/tree/master/WK3/02-Homework>

- - -

© Copyright 2020. All Rights Reserved.