let d = new Array()
window.onload = ()=>{
    const body = document.querySelector('body')
    const notes = document.getElementById('notes')
    setTimeout(()=>{
        body.style.opacity = 1
        body.style.transition = '.5s'
        notes.style.color = "yellow"
        notes.style.borderBottom = "1px solid yellow"
    },100)
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
        d.push(localStorage.getItem( localStorage.key( i )))
    }
    d.forEach(data=>{
        const h = document.createElement('h2')
        const div = document.createElement('div')
        const btn = document.createElement('button')
        
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.width = "100%"
        div.style.marginTop = "1em"
        div.style.padding = ".4em"
        div.style.paddingLeft = "1em"
        div.style.background = "white"
        div.style.borderRadius = ".3em"
        
        h.style.color = "black"
        h.style.fontSize = "1.2em"
        h.style.fontWeight= "500"
        h.innerText = data.replace(/['"]+/g, '')

        btn.style.background = "transparent"
        btn.style.border = "none"
        btn.style.outline = "none"
        btn.style.color = "red"
        btn.style.fontSize = "1.3em"
        btn.innerHTML = '<i class="fas fa-minus-circle"></i>'
        btn.addEventListener('click',()=>{
            let i = localStorage.length;
            while (i-- > 0) {
                let key = localStorage.key(i);
                if (localStorage.getItem(key) === data) {
                    localStorage.removeItem(key);
                }
            }
            window.location.reload()
        })
        div.appendChild(h)
        div.appendChild(btn)
        document.querySelector('.container').append(div)
    })
}
document.getElementById('settings').addEventListener('click',()=>{
    console.log("In settings")
    window.location.href = "/assets/setting.html"
})
let m  =  new Array()
let i = localStorage.length;
const insert = (val)=>{
    const list = val
    localStorage.setItem(i,JSON.stringify(list))
    i++
}
let Saved_data = localStorage.getItem(i)
let data = JSON.parse(Saved_data)
document.getElementById('add').addEventListener('click',()=>{
    const val = document.getElementById('note').value
        insert(val)
        document.getElementById('note').value = ""
        window.location.reload()
})