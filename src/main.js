let sections = document.querySelectorAll("section")

let options = {
    rootMargin: '-50%',
}
const callback = (entries) => {
    entries.forEach(e => {
        let link = document.querySelector(`.link-item>a[href='#${e.target.id}']`)
        link.classList.toggle("active",e.isIntersecting)
    })
}

let observer = new IntersectionObserver(callback, options)
sections.forEach(l => observer.observe(l))
