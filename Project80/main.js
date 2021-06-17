var Name_Of_The_Guest_Array = [];
function submit() {
   var Guest_name = document.getElementById("name_guest").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("display_name_with_commas").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function show() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("display_name_without_commas").innerHTML = i.toString();
}
function sorting() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("display_sort").innerHTML = i.toString();
}
function search() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("p1").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}