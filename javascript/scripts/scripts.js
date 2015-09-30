class Assigner {

  constructor(circle, students) {
    console.log("Constructor called");

    this.circle = this.shuffle(circle);
    this.students = this.shuffle(students);
    this.groups = [];
    this.groupSize = Math.ceil(this.students.length / this.circle.length);
  }

  shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  assignStudentsToTeachers() {

    this.circle.forEach((teacher)=> {
      let sentence = `Currently assigning ${teacher}`;
      

      console.info(sentence);
      var group = {
        teacher : teacher,
        students : students.splice(0,this.groupSize)
      };
      this.groups.push(group); // scoped this!
    });
  }

  display(template, circles) {
    var source   = document.querySelector(template).innerHTML;
    var template = Handlebars.compile(source);
    var html = template({groups : ass.groups});
    document.querySelector(circles).innerHTML = html;
  }

  animate(selector) {
    var items = document.querySelectorAll(selector);
    var i = 0;
    var animate = setInterval(function() {
      if(!items[i]) {
        clearInterval(animate);
        return;
      }
      items[i].className += " open";
      i++;
    }, 150);
  }

}

var teachers = ["Uncle Drew","Wes"];
var projects = ["Master","Luxen", "Solido", "Pioneer"];

var students = ["Allison", "Andrea", "Anna", "Hannah", "Heather", "Ian", "Jenny", "Jeremy North", "Jordan", "Jordyn", "Karley", "Kate", "Kevin", "Laura", "Lisa", "Lucas", "Nate", "Omar", "Ross", "Sarah", "Steph", "Trudy", "Vivien", "Winston", "Tammy", "Sarah"];

// pass the assigner a circle array (teacher, project, classroom..) and an array of students
var ass = new Assigner(teachers, students);
ass.assignStudentsToTeachers();
ass.display("#entry-template",".groups");
ass.animate(".group li");
