document.addEventListener('alpine:init', () => {
    Alpine.data('wordWidget', function(){
        return {
            sentence:'',
            longMessage:'',
            longestWordCheck(){
                this.longMessage = longestWord(this.sentence);

                setTimeout(() =>{
                    this.longMessage = '';
                }, 3000)
        
            }
           }
    })
})