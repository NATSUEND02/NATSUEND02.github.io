export const CoreVue = {
    data: function(){
        return{
            msgInicio: "",
            cervezas: [
                {name: "Chopp", img: '/static/img/brahma/brahma-lata-chopp.png'},
                {name: "Lager", img: '/static/img/brahma/brahma_lager.png'},
                {name: "Malzbier", img: '/static/img/brahma/brahma_lager.png'},
            ]
        }
    },
    created: function(){
        setTimeout(()=>{
            this.cervezas
        }, 3000);

    }
}