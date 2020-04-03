const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('associations','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('MySQL connection successful.');
    })
    .catch((err) => {
        console.error('MySQL connection error: ',err);
    });


module.exports = {
    sequelize
}


const {Student} = require('./../models/student');
const {Group} = require('./../models/group');
const {Documentation} = require('./../models/documentation');
const {Project} = require('./../models/project');

//Associations

Group.hasMany(Student);
Student.belongsTo(Group);

//One-to-one
Student.hasOne(Documentation);

//Many-to-many
Student.belongsToMany(Project, {through: 'StudentProject'});
Project.belongsToMany(Student, {through: 'StudentProject'});


sequelize.sync();


//Callback -> Promise -> async/await
(async () => {


    //Create Group
    // await Group.create({name: '4to'});


    //Query existing Group
    // let group4 = await Group.findOne({
    //     where: {
    //         name: '4to'
    //     }
    // });

    // //Print a Group
    // console.log(JSON.stringify(group4));

    // //Print a Group's name
    // console.log(group4.name);



    //Create Students

    //let group4 = await Group.findOne({
     //   where: {
       //     name: '4to'
        //}
    //});

    //let pedro = await Student.create({name: 'Pedro'});
    //let cubano = await Student.create({name: 'Cubano'});
    //let juan = await Student.create({name: 'Juan'});
    //let erick = await Student.create({name: 'Erick'});
    //let jessy = await Student.create({name: 'Jessy'});
    //let benji = await Student.create({name: 'benji'});

    
    
    //group4.setStudents([pedro, cubano, juan, erick, jessy, benji]);
    //await group4.save();


    //let group4 = await Group.findOne({
      //  where: {
        //    name: '4to'
        //}
    //});

    //let studentsOf4to = await group4.getStudents();

    //4thGradeStudentNames
    //let nameOfStudentsOf4to = studentsOf4to.map(s => s.name);

    //console.log(nameOfStudentsOf4to);
    

        //Update Student name

      //  let benji = await Student.findOne({
      //      where: {
      //          name: 'benji'
      //      }
      //  });
      //  benji.name = 'Benji';
      //  await benji.save();
        

    //    let erick = await Student.findOne({
      //      where: {
      //         name: 'Erick'
      //      }
      //  })
    //
     //   await erick.destroy();
      //  



        //Create and "link" one-to-one

  //  let benji = await Student.findOne({
   //     where: {
   //         name: 'benji'
   //     }
  //  });

  //  let benjisDocumentation = await Documentation.create({
  //      name: 'Benji Documentation'
  //  });

  //  benji.setDocumentation(benjisDocumentation);
  //  await benji.save();
    

        //Create and assign a Project

        let pr1 = await Project.create({
            name: 'Proyecto Parcial 1'
        });
    
        let pr2 = await Project.create({
            name: 'Proyecto Parcial 2'
        });
    
        let benji = await Student.findOne({
            where: {
                name: 'Benji'
            }
        });
    
        let pedro = await Student.findOne({
            where: {
                name: 'Pedro'
            }
        });
    
        pr1.setStudents([benji, pedro]);
        
})();