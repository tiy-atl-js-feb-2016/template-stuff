// Javascript Entry Point

import $ from 'jquery';

import users from './users';

import { manager, employee, customer, cool } from './templates';

var $app = $('.app');

var userTypeToTemplate = {
  'Manager': manager,
  'Employee': employee,
  'Customer': customer
}

users.forEach(function(user) {
  var template = userTypeToTemplate[user.type];
  var html = template(user);
  $app.append( html );
});

// users.forEach(function(user) {
//   var template;
//   if (user.type === 'Manager') {
//     template = manager;
//   } else if (user.type === 'Employee') {
//     template = employee;
//   } else if (user.type === 'Customer') {
//     template = customer;
//   }
//   var html = template(user);
//   $app.append( html );
// });
