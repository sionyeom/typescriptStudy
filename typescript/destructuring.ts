function printProfile(obj) {
  var name = "";
  var nationality = "";

  name = obj.name == undefined ? "anonymous" : obj.name;
  nationality = obj.nationality == undefined ? "?" : obj.nationality;

  console.log(name);
  console.log(nationality);
}

printProfile({ name: "happy" });
