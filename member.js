function skillsMember() {
    var skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "React",
        "Angular",
        "Vue.js",
        "Python",
        "Django",
        "Flask",
        "Ruby on Rails",
        "Java",
        "Spring Boot",
        "C#",
        ".NET Core",
        "PHP",
        "Laravel",
        "Go",
        "Rust",
        "Swift",
        "Kotlin"
    ];

    var skillList = document.getElementById("skill-list");

    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var li = document.createElement("li");
        li.textContent = skill;
        skillList.appendChild(li);
    }
}