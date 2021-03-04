// scroll avec disparition du logo
      $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
            $("#logo").hide();
          } else {
              $("#logo").show();
          }
      });


// Menu actifs en background bleu

var $li = $("nav ul li a")

$li.click(function(){
    $li.removeClass("active");
    $(this).addClass("active");

});



// liste rareté tags


// mettre en surbrillance le tag selectionné

var $tag = $("#brawlers-liste > span")


$(".tag-red").click(function() {
    if ($(".tag-red").hasClass("tag-active")) {
        $(this).removeClass("tag-active");
    } else {
        $(this).addClass("tag-active");
        $(".tag-blue").removeClass("tag-active");
    }
});

$(".tag-blue").click(function(){
    if ($(this).hasClass("tag-active")) {
        $(this).removeClass("tag-active");
    } else {
        $(".tag-red").removeClass("tag-active");
        $(this).addClass("tag-active");
    }
})






// Fonction qui affiche tous les éléments
function noFilter() {  //lorsque tous est activé, on affiche tous les brawlers
  tous = true;  
  $(".tag").removeClass("tag-active");
  $("#tous").addClass("tag-active");
  $(".brawlers-items-grid img").show();
}

// Fonction qui gère les éléments à afficher selon les filtres
function filter() {  //lorsqu'un filtre est activé, on desactive le tag "tous", on filtre les bonnes images

  tous = false;
  $("#tous").removeClass("tag-active");
  $(".brawlers-items-grid img").hide();
  activeFilters.forEach(function(rarete) {
    $("."+rarete).show();
  });
}


// Gestion des filtres par tags
var activeFilters = new Array();
var tous = true;
$(".tag").click(function() {
  let rarete = $(this).attr('id');
  let index = activeFilters.indexOf(rarete);
  // CLIC sur "tous"
  if (rarete == "tous") {
    activeFilters = new Array();
    // On désactive le filtre
    if (tous) {
      filter();
    // On active le filtre
    } else {
      noFilter();
    }
  // CLIC sur un autre filtre
  } else {
    if (index == -1) { // s'il n'y est pas, on ajoute l'element dans le tableau
      activeFilters.push(rarete); 
      $(this).addClass("tag-active");
    } else {
      activeFilters.splice(index, 1); // s'il y est on le supprime (splice(index, 1) = autosuppression);
      $(this).removeClass("tag-active");
    }
    filter();
  }
});





// Faire apparaitre le bon Brawlers au click sur son image

$(".brawlers-items-grid img").click(function() {
    // Récupération du nom du brawler
    let brawler = $(this).attr("alt");
    // Liste des brawlers avec leurs statistiques
    let brawlers = {
      "Arkad": {
        "description": "A.R.K.A.D. est un brawler commun, il se débloque dès que vous passez le cap relativement accessible des 6000 trophées. Ces 6000 trophées devraient être obtenus en quelques semaines de jeu tout au plus.",
        "image": "arkad2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 1
      },
      "Bartaba": {
        "description": "Avec Bartaba, tout est dans la discrétion alors activez votre super à l'abri des regards ! Lancez Fumigène depuis un buisson par exemple, effet garanti.",
        "image": "bartaba2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 2
      },
      "Béa": {
        "description": "Béa est un brawler rare. Dans Brawl Stars, rare signifie en réalité commun. À la manière d'El Costo, vous ne mettrez vraiment pas beaucoup de temps pour la débloquer. Attention, brawler commun ne veut pas dire brawler faible. Pour Rosa c'est même tout l'inverse.",
        "image": "bea2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 2
      },
      "Billie": {
        "description": "Billie est un brawler de rareté épique. Ce qui signifie qu'elle n'est pas facile à obtenir mais que vous devriez tout de même l'avoir assez rapidement, quelques semaines ou quelques mois de jeu suffiront. Et quelques mois d'expérience ne seront pas de trop pour bien appréhender un brawler aussi complexe. En effet, Billie est l'un des personnages les moins intuitifs à jouer de tout Brawl Stars!",
        "image": "billie2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 3
      },
      "Bo": {
        "description": "Vous débloquerez Bo une fois que vous aurez atteint les 3000 trophées. Cela peut être long, nous vous recommandons notre guide sur comment progresser rapidement sans dépenser d'argent et de suivre les les astuces du meilleur joueur de France de Brawl Stars afin de les atteindre le plus vite possible ! Bo est le dernier personnage déblocable par niveau de trophée, et c'est un comble car c'est probablement le moins puissant de tous tout en étant pas si difficile à jouer.",
        "image": "bo2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 2
      },
      "Brock": {
        "description": "Vous débloquez Brock une fois que vous avez atteint 1000 trophées. Si vous suivez les conseils du meilleur joueur français de Brawl Stars que nous avons récoltés pour vous, cela devrait être fait assez rapidement. Brock est un personnage à distance, comme Colt mais il est un petit peu plus simple à jouer.",
        "image": "brock2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 2
      },
      "Bull": {
        "description": "Avec ou sans son chapeau (les deux skins sont disponibles quand vous obtenez le personnage), Bull reste un brawler mythique. Ce qui fait de lui l'un des personnages les plus rares du jeu, et même si la plupart des joueurs finissent par l'obtenir au bout de quelques mois, vous vous exclamerez de joie à coup sûr en le voyant tourner fièrement sur votre écran. Mais votre joie sera de courte durée car vous vous rendrez vite compte que Bull n'a pas usurpé sa renommée de brawler le plus difficile à jouer de tout Brawl Stars.",
        "image": "bull2.png",
        "sante": 3,
        "degats": 3,
        "vitesse": 3
      },
      "Carl": {
        "description": "Carl est un brawler super rare. Il n'est donc pas si dificile que cela à récupérer. Et pourtant, c'est l'un des tous meilleurs personnages de Brawl Stars.",
        "image": "carl2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 2
      },
      "Colt": {
        "description": "Colt est l'un des tout premiers brawlers que vous tousez débloquer dans Brawl Stars. Mais ça ne veut pas dire qu'il est facile à utiliser, au contraire ! Dans les mains d'un bon joueur, Colt est un personnage polyvalent et très puissant, recommandé par le meilleur joueur de France, Sun Bentley. Mais avant de bien jouer Colt, il faut bien le connaître.",
        "image": "colt2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 2
      },
      "Corbac": {
        "description": "Corbac est un brawler légendaire. Et vu votre faible pourcentage de chances de l'avoir, que nous vous décrivions en détail dans notre article sur l'explication de toutes les probabilités de Brawl Stars, nous n'avons aucun doute sur le fait que vous avez hurlé en le voyant tournoyer sur votre écran. Cependant, sachez que lorsque Supercell choisit la rareté d'un brawler, ce n'est pas en fonction de sa puissance mais de son originalité. Corbac est donc un personnage particulièrement subtil qu'il est nécessaire de bien connaître avant de pouvoir être efficace en le jouant.",
        "image": "corbac2.png",
        "sante": 1,
        "degats": 1,
        "vitesse": 3
      },
      "Darryl": {
        "description": "Darryl est l'un des brawlers les plus durs à jouer de tout Brawl Stars. Les nouveaux joueurs le considèrent souvent comme étant le pire, mais il est loin d'être mauvais quand on sait comment l'utiliser. Ce guide est justement là pour vous donner tous nos conseils et toutes nos astuces pour bien jouer Darryl !",
        "image": "darryl2.png",
        "sante": 2,
        "degats": 3,
        "vitesse": 3
      },
      "Djinn": {
        "description": "DJinn est un brawler mythique. C'est donc l'un des plus rares de tout Brawl Stars (seulement 0,25% de chance de l'obtenir en ouvrant une boîte !). Brawl Stars est un jeu dans lequel la rareté des personnages est décidée en fonction de leur originalité. D'Jinn est donc un personnage assez particulier, qu'il convient de connnaître pour bien le jouer et le contrer.",
        "image": "djinn2.png",
        "sante": 3,
        "degats": 3,
        "vitesse": 1
      },
      "Dynamike": {
        "description": "Dynamike se débloque à 2000 trophées. C'est relativement beaucoup mais vous pouvez les avoir assez vite, comptez environ 2 mois de jeu sans dépenser d'argent. Dynamike est un lanceur, et si c'est votre premier lanceur, vous devez apprendre une toute nouvelle façon de jouer à Brawl Stars. Ici, l'attaque automatique n'est absolument plus permise et la prudence sera votre maître mot.",
        "image": "dynamike2.png",
        "sante": 3,
        "degats": 2,
        "vitesse": 1
      },
      "El Costo": {
        "description": "El Costo est un brawler rare. C'est doncl'un des plus simples à avoir dans une boîte, et vous devriez l'obtenir assez rapidement. El Costo est probablement le tank préféré des débutants de Brawl Stars.",
        "image": "el-costo2.png",
        "sante": 2,
        "degats": 3,
        "vitesse": 2
      },
      "Eliza": {
        "description": "En théorie, Elisa devrait être le deuxième personnage que vous débloquez dans Brawl Stars. Elle est donc très facile à jouer tout en étant assez différente de Shelly. Les débutants font souvent l'erreur de trop attaquer ; ce n'est pas un problème avec Elisa puisque c'est son rôle, presque tous les match up lui sont favorables. La chose principale à retenir pour Elisa, c'est que c'est un personnage agressif qui a pour but principal de mettre la pression et faire reculer ses adversaires grâce à son ours et sa large zone d'attaque.",
        "image": "eliza2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 1
      },
      "Emeri": {
        "description": "Émeri est un brawler légendaire, il se débloque dans les boîtes avec un taux de probabilité qui varie en fonction de l'obtention de vos précédents brawlers. Comme tous les légendaires, il est tout de même extrêmement rare. Et vu la densité du personnage, vaut bien cette rareté exceptionnelle. En effet, quoi que vous puissiez penser, nous povons vous assurer que Émeri est plus difficile à maîtriser qu'il en a l'air.",
        "image": "emeri2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 2
      },
      "Frank": {
        "description": "Frank est un brawler de rareté épique. Ce qui signifie qu'il n'est pas facile à obtenir mais que vous devriez tout de même l'avoir assez rapidement, quelques semaines ou quelques mois de jeu suffiront. Et pourtant, Frank est l'un des brawlers les plus difficiles à jouer de tout Brawl Stars à cause du grand délais qu'il y a entre le moment où vous lancez votre attaque et le moment où le marteau de Frank frappe le sol. ",
        "image": "frank2.png",
        "sante": 3,
        "degats": 1,
        "vitesse": 1
      },
      "Jessie": {
        "description": "Jessie est déblocable à 500 trophées. Si vous suivez les astuces du meilleur joueur français de Brawl Stars que nous avons récoltés pour vous, cela devrait être fait en moins d'une semaine de jeu ! Si tous vos personnages débloqués le sont grâce à votre nombre de trophées, Jessie est votre premier personnage qui n'est pas offensif. Vous devez apprendre une toute nouvelle façon de jouer, bien plus prudente et bien plus concentrée sur le travail d'équipe",
        "image": "jessie2.png",
        "sante": 1,
        "degats": 2,
        "vitesse": 2
      },
      "Leon": {
        "description": "Vous le savez, Léon est un brawler légendaire Et vu votre faible pourcentage de chances de l'avoir, que nous vous décrivions en détail dans notre article qui explique toutes les probabilités de Brawl Stars, nous n'avons aucun doute sur le fait que vous avez sauté de joie en le voyant tournoyer sur votre écran. Cependant, sachez que lorsque Supercell choisit la rareté d'un brawler, ce n'est pas en fonction de sa puissance mais de son originalité et de sa polyvalence. Léon est donc un personnage particulièrement subtil qu'il est nécessaire de bien connaître avant de pouvoir être efficace en le jouant.",
        "image": "leon2.png",
        "sante": 2,
        "degats": 3,
        "vitesse": 3
      },
      "Mortis": {
        "description": "Avec ou sans son chapeau (les deux skins sont disponibles quand vous obtenez le personnage), Mortis reste un brawler mythique. Ce qui fait de lui l'un des personnages les plus rares du jeu, et même si la plupart des joueurs finissent par l'obtenir au bout de quelques mois, vous vous exclamerez de joie à coup sûr en le voyant tourner fièrement sur votre écran. Mais votre joie sera de courte durée car vous vous rendrez vite compte que Mortis n'a pas usurpé sa renommée de brawler le plus difficile à jouer de tout Brawl Stars.",
        "image": "mortis2.png",
        "sante": 3,
        "degats": 1,
        "vitesse": 3
      },
      "Nita": {
        "description": "En théorie, Nita devrait être le deuxième personnage que vous débloquez dans Brawl Stars. Elle est donc très facile à jouer tout en étant assez différente de Shelly. Les débutants font souvent l'erreur de trop attaquer ; ce n'est pas un problème avec Nita puisque c'est son rôle, presque tous les match up lui sont favorables. La chose principale à retenir pour Nita, c'est que c'est un personnage agressif qui a pour but principal de mettre la pression et faire reculer ses adversaires grâce à son ours et sa large zone d'attaque.",
        "image": "nita2.png",
        "sante": 1,
        "degats": 2,
        "vitesse": 3
      },
      "Pam": {
        "description": "Pam est un brawler de rareté épique. Ce qui signifie qu'elle est assez difficile à obtenir mais qu'en quelques mois de jeu assidus, si vous suivez notre guide pour progresser le plus rapidement possible sans dépenser d'argent, vous l'aurez à coup sûr. Pam est prablement la meilleure porteuse de gemmes de tout Brawl Stars. Mais pour qu'elle le soit aussi pour vous, il faut savoir la jouer",
        "image": "pam2.png",
        "sante": 2,
        "degats": 3,
        "vitesse": 2
      },
      "Penny": {
        "description": "Penny est un brawler super rare. Ne vous laissez pas avoir par cet intitulé, elle est relativement simple à obtenir : vous devriez l'avoir quelques semaines après avoir commencé Brawl Stars. Penny est souvent comparée à Jessie puisque ce sont deux « invocatrices ». La plupart des débutants pensent d'ailleurs que Penny n'est rien de plus qu'une « sous-Jessie ». En réalité, ces deux brawlers se jouent assez différemment et Penny est tout aussi puissante que Jessie si elle est bien jouée (et même parfois plus selon les maps et les modes).",
        "image": "penny2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 1
      },
      "Poco": {
        "description": "Poco est un brawler rare, donc déblocable assez facilement en ouvrant des boîtes. Dans Brawl Stars, il n'y a que deux personnages qui peuvent soigner leurs coéquipiers. Poco est probablement moins puissant que l'épique Pam sur la majorité des maps et modes de jeu mais il est aussi plus simple à obtenir. Jouer Poco demande de prêter une attention particulière à la situation de vos partenaires. La large attaque de Poco donne du contrôle et exige une bonne gestion du risque. C'est donc un personnage génial pour les débutants puisqu'il est, à l'image Brawl Stars, facile à jouer mais difficile à maîtriser.",
        "image": "poco2.png",
        "sante": 2,
        "degats": 1,
        "vitesse": 1
      },
      "Polly": {
        "description": "Polly est un brawler épique. Elle est donc assez difficile à avoir mais en général, tous les joueurs finissent par l'obtenir quelques mois après avoir débuté Brawl Stars. Polly est le sniper de Brawl Stars, et comme tous les snipers, elle est appréciée, beaucoup jouée, mais difficile à manier correctement.",
        "image": "polly2.png",
        "sante": 1,
        "degats": 3,
        "vitesse": 2
      },
      "Ricochet": {
        "description": "Rico est un brawler super rare. En général, les gens le débloquent quelques semaines après avoir débuté Brawl Stars. Il est souvent comparé à Colt, et à raison, mais il est légèrement plus difficile à jouer puisque son gameplay est plus subtile : il a moins de vie, les btouses sont plus lentes, vont plus loin et surtout : elles ricochent.",
        "image": "ricochet2.png",
        "sante": 1,
        "degats": 2,
        "vitesse": 2
      },
      "Rosa": {
        "description": "Rosa est un brawler rare. Dans Brawl Stars, rare signifie en réalité commun. À la manière d'El Costo, vous ne mettrez vraiment pas beaucoup de temps pour la débloquer. Attention, brawler commun ne veut pas dire brawler faible. Pour Rosa c'est même tout l'inverse.",
        "image": "rosa2.png",
        "sante": 1,
        "degats": 1,
        "vitesse": 3
      },
      "Shelly": {
        "description": "Si vous venez d'insttouser Brawl Stars, vous n'avez qu'un brawler : Shelly. Et si vous cherchez des astuces et des conseils pour mieux la jouer, vous êtes au bon endroit. Brawl Stars ne vous donne pas Shelly en premier pour rien : elle est le personnage le plus simple à jouer du jeu. Polyvalente, Shelly est jouable dans tous les modes de jeu et sur presque toutes les cartes.",
        "image": "shelly2.png",
        "sante": 2,
        "degats": 2,
        "vitesse": 2
      },
      "Spike": {
        "description": "Vous le savez, Spike est un brawler légendaire. Et vu votre faible pourcentage de chances de l'avoir (que nous vous décrivions en détails dans notre article sur toutes les probabilités de Brawl Stars), nous n'avons aucun doute sur le fait que vous avez hurlé en le voyant tournoyer sur votre écran. Cependant, sachez que lorsque Supercell choisit la rareté d'un brawler, ce n'est pas en fonction de sa puissance mais de son originalité. Spike est donc un personnage particulièrement subtil qu'il est nécessaire de bien connaître avant de pouvoir être efficace en le jouant.",
        "image": "spike2.png",
        "sante": 3,
        "degats": 3,
        "vitesse": 1
      },
      "Tara": {
        "description": "Tara est un brawler de rareté mythique. Elle est donc l'un des personnages les plus durs à avoir de tout Brawl Stars. En plus d'être l'un des plus rares, c'est aussi l'un des plus puissants. Du moins, c'est ce que nous disait le meilleur joueur de France, Sun Bentley, dansl'interview qu'il nous a accordée. Une Tara bien jouée peut portée son équipe à elle seule et retourner une partie en mode Brawl Btous ou en mode Razzia de Gemmes.",
        "image": "tara2.png",
        "sante": 3,
        "degats": 1,
        "vitesse": 2
      },
      "Tick": {
        "description": "Tick est un brawler commun, il se débloque dès que vous passez le cap relativement accessible des 4000 trophées. Ces 4000 trophées devraient être obtenus en quelques mois de jeu tout au plus. Et quelques mois d'expérience ne seront pas de trop pour bien appréhender un brawler aussi complexe. Vous tousez le voir tout de suite, Tick a beau être un brawler commun, c'est l'un des moins facile à prendre en main de tout Brawl Stars.",
        "image": "tick2.png",
        "sante": 2,
        "degats": 3,
        "vitesse": 1
      }
    }
       // Mise à jour du brawler zoomé
       $("#brawler-zoom-nom").html(brawler);
       $("#brawlers-zoom-image").attr("src", "src/images/brawlers/" + brawlers[brawler].image);
       $("#brawler-zoom-description").html(brawlers[brawler].description);
       $("#sante").val(brawlers[brawler].sante);
       $("#degats").val(brawlers[brawler].degats);
       $("#vitesse").val(brawlers[brawler].vitesse);
       $(".brawlers-items-grid img").removeClass("brawler-active");
       $(this).addClass("brawler-active");
     });



