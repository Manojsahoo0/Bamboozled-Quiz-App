const music = document.getElementById("music").value
const modern = document.getElementById("modern").value
const coding = document.getElementById("coding").value
let counter;

const handleMusic = () => {
  localStorage.setItem("MUSIC",music)
}
const handleCoding = () => {
  localStorage.setItem("CODING",coding)
}
const handleModern = () => {
  localStorage.setItem("MODERN-ART",modern)
}
localStorage.clear();