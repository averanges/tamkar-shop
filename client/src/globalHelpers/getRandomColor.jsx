export const getRandomColor = () => {
    const colors = ['#DCFFD2','#FFEDB4','#DFE4FF','#FFEACC','#FFDAE0', '#EDB7A1']
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}