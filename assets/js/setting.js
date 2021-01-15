// document.querySelector('body').style.display = "block"
window.onload = ()=>{
    const body = document.querySelector('body')
    setTimeout(()=>{
        body.style.opacity = 1
        body.style.transition = ".5s"
    },100)
}  
document.getElementById('home').addEventListener('click',()=>{
    window.location.href = "/index.html"
})
document.getElementById('reset').addEventListener('click',()=>{
    localStorage.clear()
    window.location.reload()
    window.location.href = "/index.html"
})