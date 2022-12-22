


const btn = document.querySelector('.btn-clipBoard')
const id = 37510000625788;


btn.addEventListener('click', async () => {
    try {
        navigator.clipboard.writeText(`${id}`)
        alert(`ID ${id} copied to clipboard!`)
    } catch (err) {
        console.log(err)
    }
})

