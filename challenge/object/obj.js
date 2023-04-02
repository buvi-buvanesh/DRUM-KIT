

function BellBoy(name,age,workpermit,language){
    this.name=name;
    this.age=age;
    this.workpermit=workpermit;
    this.language=language;
}

var BellBoy1=new BellBoy("buvi",23,"yes",["tamil","english"]);

alert("iam"+BellBoy1.name+" iam"+BellBoy1.age+" old and "+BellBoy1.workpermit+" iam having and the languages i know was "+BellBoy1.language);

console.log(BellBoy1)