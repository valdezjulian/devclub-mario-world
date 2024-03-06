let closeForm = document.querySelector(".close-btn")
let closeVideo = document.querySelector(".close-btn2")
let form = document.querySelector(".contact")
let gradient = document.querySelector(".gradient-form")
let video = document.querySelector(".video")
function displayForm() {
  closeForm.style.display = "block"
  form.style.display = "flex"
  gradient.style.display = "block"
}
function hideForm() {
  closeForm.style.display = "none"
  form.style.display = "none"
  gradient.style.display = "none"
}
function displayVideo() {
  closeVideo.style.display = "block"
  video.style.display = "block"
  gradient.style.display = "block"
}
function hideVideo() {
  closeVideo.style.display = "none"
  video.style.display = "none"
  gradient.style.display = "none"
}