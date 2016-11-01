$(document).ready(function() {
    $('#pagepiling').pagepiling({
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
        scrollingSpeed: 700,
        onLeave: function(index, nextIndex, direction){
            if(index == 6 && direction =='down'){
              $('#music').on('ended', function() {
                  manageImageObjectsLevel();
              }).get(0).play();
            }
            if(index == 9 && direction =='down'){
              $('#music').on('ended', function() {
                  manageImageObjectsLevel();
              }).get(0).pause();
              
              $('#win').on('ended', function() {
                  manageImageObjectsLevel();
              }).get(0).play();
            }
        }
    });
});
