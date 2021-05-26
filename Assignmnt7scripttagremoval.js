var html = "<p><strong><em>SkillSanta Assignments</em></strong></p>";
var div = document.createElement("div");
div.innerHTML = html;
var text = div.textContent || div.innerText || "";
document.write(text)
