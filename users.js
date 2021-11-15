function userLanguages(users){
    string ="";
    for (let j=0; j<users.length;j++){
        user= users[j];
        lang = "";
        ints= "";
        for(let i=0; i<user.languages.length; i++){
            if(i<user.languages.length-1){
                lang += user.languages[i] + ", "
            }
            else{
                lang += "and " + user.languages[i] + ".";
            }
        }
        
        for(let b=0; b<Object.keys(user.interests).length; b++){
            if(b<Object.keys(user.interests).length-1){
                for(let c=0; c<user.interests[Object.keys(user.interests)[b]].length;c++){
                    interest = user.interests[Object.keys(user.interests)[b]][c]
                    ints += interest+ ", "
                }
                
            }
            else{
                for(let c=0; c<user.interests[Object.keys(user.interests)[b]].length;c++){
                    interest = user.interests[Object.keys(user.interests)[b]][c];
                    if(c<user.interests[Object.keys(user.interests)[b]].length-1){
                    ints += interest + ", ";}
                    else{
                        ints += "and " + interest + ".";
                    }
                }
            }
        }

        string += `${user.fname} ${user.lname} knows ${lang} \n`;
        string +=  `${user.fname} ${user.lname} is also interested in ${ints} \n`;
    }
    return string;
}

users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

console.log(userLanguages(users));