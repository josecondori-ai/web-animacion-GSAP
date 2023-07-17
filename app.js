gsap.defaults({
    duration:1,
})

    
 let tiempo=gsap.timeline()


 tiempo.addLabel('box',0)

 tiempo.to('#box1',{yPercent:-100},'box')
 tiempo.to('#box2',{yPercent:100},'box')

 tiempo.addLabel('special')

tiempo.from("#navegacion li",{
    duration:0.5,
    y:-50,
    opacity:0,
    stagger:0.2},
    'special'
    );


tiempo.from('#contenedor-info',{duration:0.5,y:100,opacity:0,ease:'none'},
'special'
);

tiempo.to('#contenedor-titulo',{y:-26,ease:"power4.out",yoyo:true,yoyoEase:'bounce',repeat:1},
'-=0.2'
)