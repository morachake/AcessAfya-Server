const clinics = [
    {
      id: '1',
      staffId: '1',
    name: 'Kiambuu',
    vists:'10',
      issue:
        'Opened late',
     
    },
    {
      id: '2',
      staffId: '2',
      name: 'Mkuru kwa Reuben',  
      vists:'25',
      issue:
            'Late Check in',        
     
    },
    {
      id: '3',
      staffId: '3',
      name: 'Mukuru kwa Njenga',
      vists:'96',
      issue:
        'Bad Receipts',
      
    },
    {
      id: '4',
      staffId: '4',
      name: 'Baba Dogo',
      vists:'35',
      issue:
        'Careless waste handling',
       
    },
    {
      id: '5',
      staffId: '5',
      name: 'Kibra',
      vists:'30',
      issue:
        'Wrong Prescription',
      
    },
  ];
  
  // staff
  const staffs = [
    {
      id: '1',
      name: 'Tony Stark',
      efficiencydelta: '90%',
      npsdelta: '3.5',
      efficiency:'20%',
      reportedissues:'35'
    },
    {
      id: '2',
      name: 'Natasha Romanova',
      efficiencydelta: '90%',
      npsdelta: '3.5',
      efficiency:'20%',
      reportedissues:'35'
    },
    {
      id: '3',
      name: 'Thor Odinson',
      efficiencydelta: '90%',
      npsdelta: '3.5',
      efficiency:'20%',
      reportedissues:'35'
    },
    {
      id: '4',
      name:'moses Odinson',
      efficiencydelta: '90%',
      npsdelta: '3.5',
      efficiency:'20%',
      reportedissues:'35'
    },
    {
      id: '5',
      name: 'Bruce Banner',
      efficiencydelta: '55%',
      npsdelta: '3.5',
      efficiency:'20',
      reportedissues:'35'
    },
    
];
  
const reports= [
  {
    id: '1',
    month: 'jan',
    patients: '100',
    revenue: '100',
    
  },
  {
    id: '2',
    month: 'jan',
    patients: '100',
    revenue: '100',
    
  },
  {
    id: '2',
    month: 'feb',
    patients: '80',
    revenue: '40',
    
  },
  
];
  
  module.exports = { staffs, clinics,reports };