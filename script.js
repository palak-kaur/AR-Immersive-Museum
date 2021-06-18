AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker1 = document.querySelector("#1");
        const aEntity = document.querySelector("#1");

        animatedMarker.addEventListener('click', function(ev, target){
            document.getElementById("#1").innerHTML += 
                  "<div>Megaloceros (from Greek: μεγαλος megalos + κερας keras, literally Great Horn; see also Lister [1987]) is an extinct genus of deer whose members lived throughout Eurasia from the early Pleistocene to the beginning of the Holocene and were important herbivores during the Ice Ages. The largest species, Megaloceros giganteus, vernacularly known as the Irish elk or Giant elf, is also the best known. Fallow deer are thought to be their closest living relatives.[1][2][3] Megaloceros is part of the deer family which includes moose, elk, reindeer, and other cervids.</div>";
            
        });
}});