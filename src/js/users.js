export default [

  {
    type: 'Manager',
    firstName: 'Frank',
    lastName: 'Underwood',
    employeeId: 1,
    role: 'POTUS',
    subordinates: [
      'Doug',
      'Michem'
    ]
  },
  {
    type: 'Manager',
    firstName: 'Doug',
    lastName: 'Stamper',
    employeeId: 2,
    role: 'Assistant',
    subordinates: [
      'Seth'
    ]
  },
  {
    type: 'Employee',
    firstName: 'Tyler',
    lastName: 'Durden',
    employeeId: 3,
    role: 'Soap Salesman',
    managers: 'Edward Nortan',
    salesRecord: '3023 YTD'
  },
  {
    type: 'Employee',
    firstName: 'Marla',
    lastName: 'Singer',
    employeeId: 4,
    role: 'Meals on Wheels',
    managers: 'Robert Paulson',
    salesRecord: 'Embezzeling'
  },
  {
    type: 'Customer',
    firstName: 'Meat',
    lastName: 'Loaf',
    purchaseHistory: [
      'Krispy Kreme',
      'Ski Mask',
      'Black socks'
    ]
  },{
    type: 'Customer',
    firstName: 'Jared',
    lastName: 'Leto',
    purchaseHistory: [
      'Bleach',
      'Dentures'
    ]
  }
];
