const { staffs, clinics,reports } = require('../main/sampledata')
const Staff = require('../models/Staff');
const Clinic = require('../models/Clinic');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

//clinic type 
const ClinicType = new GraphQLObjectType({
    name: 'Clinic',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        staffId: { type: GraphQLString },
        issue: { type: GraphQLString },
        vists: { type: GraphQLString },
        status: { type: GraphQLString },
        staff: {
            type: StaffType,
            resolve(parent, args) {
                return staffs.find(staff => staff.id === parent.staffId);
                //return staffs.findById(parent.staffId)
            }
        
        },
    })
});

// staff type
const StaffType = new GraphQLObjectType({
    name: 'Staff',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        efficiency: { type: GraphQLString },
        npsdelta: { type: GraphQLString },
        efficiencydelta: { type: GraphQLString },
        reportedissues: { type: GraphQLString },
    })
});

//reports type 
const ReportType = new GraphQLObjectType({
    name: 'Report',
    fields: () => ({
        id: { type: GraphQLString },
        month: { type: GraphQLString },
        patients: { type: GraphQLString },
        revenue: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        clinics: {
            type: new GraphQLList(ClinicType),
            resolve(parent, args) {
                return clinics;
                //return Clinic.find();
            },
        },
        clinic: {
            type: StaffType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clinics.find((clinic) => clinic.id === args.id)
                //return Clinic.findById(args.id);
            }
        },
        staffs: {
            type: new GraphQLList(StaffType),
            resolve(parent, args) {
                return staffs;
               // return Staff.find();
            },
        },
        staff: {
            type: StaffType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return staffs.find((staff) => staff.id === args.id)
                //return Staff.findById(args.id);
            }
        },
        reports: {
            type: new GraphQLList(ReportType),
            resolve(parent, args) {
                return reports;
               // return Staff.find();
            },
        },
        report: {
            type: ReportType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return staffs.find((report) => report.id === args.id)
                //return Staff.findById(args.id);
            }
        },
        
    }
});

//mutations

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Add a clinic
      addClinic: {
        type: ClinicType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
          issue: { type: GraphQLNonNull(GraphQLString) },
          visits: { type: GraphQLNonNull(GraphQLString) },
          staffid: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const clinic = new Clinic({
            name: args.name,
            issue: args.issue,
            vists: args.vists,
          });
  
          return clinic.save();
        },
      },
        
      // Add a Staff
      addStaff: {
        type: StaffType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
          efficiency: { type: GraphQLNonNull(GraphQLString) },
            efficiencydelta: { type: GraphQLNonNull(GraphQLString) },
            npsdelta: { type: GraphQLNonNull(GraphQLString) },
            reportedissues: { type: GraphQLNonNull(GraphQLString) },
          Id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          const staff = new Staff({
            name: args.name,
            efficiency: args.efficiency,
            efficiencydelta: args.efficiencydelta,
            id: args.id,
          });
  
          return staff.save();
        },
      },
      // Delete a staff
      deleteStafft: {
        type: StaffType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Staff.findByIdAndRemove(args.id);
        },
      },
      // Update a staff
      updateStaff: {
        type: StaffType,
        args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            efficiency: { type: GraphQLNonNull(GraphQLString) },
              efficiencydelta: { type: GraphQLNonNull(GraphQLString) },
              npsdelta: { type: GraphQLNonNull(GraphQLString) },
              reportedissues: { type: GraphQLNonNull(GraphQLString) },
            Id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Staff.findByIdAndUpdate(
            args.id,
            {
              $set: {
                name: args.name,
                efficiency: args.efficiency,
                efficiencydelta: args.efficiencydelta,
              },
            },
            { new: true }
          );
        },
      },
    },
  });


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})