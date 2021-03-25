const panels = document.querySelectorAll('.panel')
    //  isme ek constant banaya hai
    // aur document ki query me all select kiya hai apan ne 


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}