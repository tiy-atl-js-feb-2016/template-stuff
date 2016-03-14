export function manager(user) {
  
  var subs = user.subordinates;

  var subsHtml = subs.map(function(sub) {
    return `<li>${sub}</li>`;
  });

  subsHtml = subsHtml.join('');

  return `
    <div class="user manager">
      <div class="first-name">${user.firstName}</div>
      <div class="last-name">${user.lastName}</div>
      <div class="employee-id">${user.employeeId}</div>
      <div class="role">${user.role}</div>
      <ul class="subordinates">
        ${subsHtml}
      </ul>
    </div>
  `;
}

export function employee(user) {
  return `
    <div class="user employee">
      <div class="first-name">${user.firstName}</div>
      <div class="last-name">${user.lastName}</div>
      <div class="employee-id">${user.employeeId}</div>
      <div class="role">${user.role}</div>
      <div class="sales-record">${user.salesRecord}</div>
    </div>
  `;
}

export function customer(user) {
  var purs = user.purchaseHistory;

  var pursHtml = purs.map(function(pur) {
    return `<li>${pur}</li>`;
  });

  pursHtml = pursHtml.join('');

  return `
    <div class="user customer">
      <div class="first-name">${user.firstName}</div>
      <div class="last-name">${user.lastName}</div>
      <ul class="purchase-history">
        ${pursHtml}
      </ul>
    </div>
  `;
}
