
    var levelWords = {
      1: {2: [ "at", "in", "it", "no", "on", "to", "an" ],
          3: [ "ant", "eat", "eon", "ion", "not", "oat", "tan", "tea", "ten", "tie",
              "tin", "ton", "toe" ],
          4: [ "ante", "anti", "into", "neat", "nite", "note", "tone" ],
          5: [ "atone" ]
      },
      2: {2: ["ad","ae","ah","ai","al","an","ar","as","da","de","di","do","ed","eh",
              "el","en","er","es","ha","he","hi","ho","id","in","is","la","li","lo",
              "na","ne","no","od","oe","oh","oi","on","or","os","re","sh","si","so"],

          3: ["ace","ado","ads","ahi","ahs","aid","ail","ain","air","ais","ale",
              "all","als","and","ane","ani","arc","are","ars","ash","cad","can",
              "car","cel","chi","cis","cod","col","con","cor","cos","dah","dal",
              "dan","dei","del","den","des","die","din","dis","dna","doc","doe",
              "dol","don","dor","dos","ear","edh","eds","eld","ell","els","end",
              "ens","eon","era","ern","ers","had","hae","hao","has","hen","her",
              "hes","hic","hid","hie","hin","his","hod","hoe","hon","hos","ice",
              "ich","ids","ill","ins","ion","ire","lac","lad","lar","las","lea",
              "led","lei","les","lid","lie","lin","lis","nae","nah","nil","nod",
              "noh","nor","nos","oar","oca","oda","ode","ods","oes","ohs","oil",
              "old","ole","one","ons","ora","orc","ore","ors","ose","rad","rah",
              "rai","ran","ras","rec","red","rei","res","rho","ria","rid","rin",
              "roc","rod","roe","sac","sad","sae","sal","sea","sec","sei","sel",
              "sen","ser","sha","she","sic","sin","sir","sod","sol","son","sri"],

          4: ["aced", "aces", "ache", "acid", "acne", "acre", "ados", "aeon",
              "aero", "ahed", "ahis", "aide", "aids", "ails", "ains", "airn",
              "airs", "alec", "ales", "alls", "aloe", "also", "ands", "anes",
              "arch", "arco", "arcs", "ares", "arid", "aril",
              "arse", "asci", "cade", "cadi", "cads", "caid", "cain", "call",
              "calo", "cane", "cans", "card", "care", "carl", "carn", "cars",
              "case", "cash", "cedi", "ceil", "cell", "cels", "cero", "chad",
              "chai", "chao", "char", "chia", "chid", "chin", "chis", "chon",
              "ciao", "cine", "cion", "cire", "clad", "clan", "clod", "clon",
              "coal", "coda", "code", "cods", "coed", "coil", "coin", "coir",
              "cola", "cold", "cole", "cols", "cone", "coni", "cons", "cord",
              "core", "corn", "cors", "cosh", "cred", "cris", "dace", "dahl",
              "dahs", "dais", "dale", "dals", "dans", "dare", "darn", "dash",
              "deal", "dean", "dear", "deco", "deil", "deli", "dell", "dels",
              "deni", "dens", "dhal", "dial", "dice", "diel", "dies", "dill",
              "dine", "dino", "dins", "diol", "dire", "dirl", "disc", "dish",
              "docs", "doer", "does", "dole", "doll", "dols", "dona", "done",
              "dons", "dore", "dors", "dose", "each", "earl", "earn", "ears",
              "echo", "edhs", "elan", "elds", "elhi", "ells", "ends", "enol",
              "eons", "eras", "erns", "eros", "hade", "haed", "haen", "haes",
              "hail", "hair", "hale", "hall", "halo", "hand", "hard", "hare",
              "harl", "head", "heal", "hear", "heil", "heir", "held", "hell",
              "helo", "hens", "herd", "herl", "hern", "hero", "hers", "hide",
              "hied", "hies", "hila", "hill", "hind", "hins", "hire", "hisn",
              "hoar", "hods", "hoed", "hoer", "hoes", "hold", "hole", "hols",
              "hone", "hons", "hora", "horn", "hose", "iced", "ices", "ichs",
              "icon", "idea", "ides", "idle", "idol", "ilea", "ills", "inch",
              "inro", "ions", "ired", "ires", "iron", "isle", "lace", "lacs",
              "lade", "lads", "laic", "laid", "lain", "lair", "land", "lane",
              "lard", "lari", "lars", "lase", "lash", "lead", "leal", "lean",
              "lear", "leas", "lehr", "leis", "lend", "leno", "lens", "liar",
              "lice", "lich", "lido", "lids", "lied", "lien", "lier", "lies",
              "lilo", "line", "lino", "lins", "lion", "lira", "lire", "load",
              "loan", "loca", "loch", "loci", "lode", "loid", "loin", "lone",
              "lord", "lore", "lorn", "lose", "nail", "naoi", "naos", "narc",
              "near", "nerd", "nice", "nide", "nill", "nils", "node", "nodi",
              "nods", "noel", "noes", "noil", "noir", "nori", "nose", "nosh",
              "oars", "ocas", "odah", "odas", "odea", "odes", "odic", "ohed",
              "ohia", "oils", "olds", "olea", "oles", "olla", "once", "ones",
              "orad", "oral", "orca", "orcs", "ores", "orle", "osar", "race",
              "rads", "raid", "rail", "rain", "rais", "rale", "rand", "rani",
              "rase", "rash", "read", "real", "recs", "redo", "reds", "rein",
              "reis", "rend", "resh", "rhea", "rhos", "rial", "rias", "rice",
              "rich", "ride", "rids", "riel", "rile", "rill", "rind", "rins",
              "rise", "road", "roan", "rocs", "rode", "rods", "roes", "roil",
              "role", "roll", "rose", "sade", "sadi", "said", "sail", "sain",
              "sale", "sall", "sand", "sane", "sard", "sari", "scad", "scan",
              "scar", "seal", "sear", "sell", "send", "sera", "shad", "shea",
              "shed", "shin", "shod", "shoe", "shri", "sial", "sice", "side",
              "sidh", "sild", "sill", "silo", "sine", "sinh", "sire", "sled",
              "slid", "sloe", "sned", "soar", "soca", "soda", "soil", "sola",
              "sold", "sole", "soli", "sone", "sora", "sord", "sore", "sori",
              "sorn"],

          5: ["ached","sorel", "aches", "acids", "acned", "acnes", "acold", "acorn",
              "acred", "acres", "acrid", "adios", "adore", "adorn", "aeons",
              "ahold", "aider", "aides", "ailed", "aired", "airns", "aisle",
              "alcid", "alder", "aldol", "alecs", "alien", "aline", "allod",
              "aloes", "aloin", "alone", "ancho", "anile", "anise", "anode",
              "anole", "arced", "areic", "ariel", "arils", "arise", "arles",
              "aroid", "arose", "arson", "asdic", "ashed", "ashen", "aside",
              "cades", "cadis", "cadre", "caids", "cains", "caird", "cairn",
              "calls", "calos", "caned", "caner", "canes", "canid", "canoe",
              "canso", "cards", "cared", "cares", "carle", "carls", "carns",
              "carol", "carse", "cased", "cedar", "cedis", "ceils", "cella",
              "celli", "cello", "cells", "ceorl", "ceria", "ceros", "chads",
              "chain", "chair", "chais", "chaos", "chard", "chare", "chars",
              "chase", "chela", "chiao", "chias", "chide", "chiel", "child",
              "chile", "chill", "china", "chine", "chino", "chins", "chiro",
              "choir", "chola", "chord", "chore", "chose", "cider", "cines",
              "cions", "cires", "clade", "clads", "clans", "claro", "clash",
              "clean", "clear", "cline", "clods", "clone", "clons", "close",
              "cnida", "coals", "codas", "coden", "coder", "codes", "coeds",
              "coils", "coins", "coirs", "colas", "colds", "coled", "coles",
              "colin", "coned", "cones", "coral", "cords", "cored", "cores",
              "coria", "corns", "corse", "cosie", "crane", "crash", "credo",
              "creds", "cried", "cries", "crone", "daces", "dahls", "dales",
              "dance", "danio", "dares", "daric", "darns", "dashi", "deair",
              "deals", "deans", "dears", "deash", "decal", "decor", "decos",
              "deils", "delis", "dells", "denar", "dhals", "dhole", "dials",
              "dicer", "dices", "dills", "dinar", "diner", "dines", "dinos",
              "diols", "dirls", "disco", "doers", "dolce", "dolci", "doles",
              "dolls", "donas", "dorsa", "doser", "drail", "drain", "dries",
              "drill", "droll", "drone", "earls", "earns", "echos", "eidos",
              "elain", "eland", "elans", "eloin", "enols", "enrol", "eosin",
              "erica", "escar", "hades", "hails", "hairs", "haled", "haler",
              "hales", "halid", "hallo", "halls", "halon", "halos", "hance",
              "hands", "hanse", "haole", "hards", "hared", "hares", "harls",
              "heads", "heals", "heard", "hears", "heils", "heirs", "helio",
              "hello", "hells", "helos", "herds", "herls", "herns", "heron",
              "heros", "hider", "hides", "hilar", "hillo", "hills", "hinds",
              "hired", "hires", "hoard", "hoars", "hoers", "hoise", "holds",
              "holed", "holes", "holla", "honda", "honed", "honer", "hones",
              "horal", "horas", "horde", "horns", "horse", "hosed", "hosel",
              "hosen", "ichor", "icons", "ideal", "ideas", "idler", "idles",
              "idols", "ileac", "ileal", "iller", "indol", "irade", "irone",
              "irons", "isled", "laced", "lacer", "laces", "laden", "lader",
              "lades", "ladle", "laich", "laics", "laird", "lairs", "lance",
              "lands", "lanes", "larch", "lards", "lares", "laris", "lased",
              "laser", "leach", "leads", "leans", "learn", "lears", "leash",
              "lehrs", "lends", "lenis", "lenos", "liane", "liard", "liars",
              "lidar", "lidos", "liens", "liers", "lilac", "lilos", "linac",
              "lined", "liner", "lines", "linos", "lions", "liras", "lisle",
              "llano", "loach", "loads", "loans", "local", "lochs", "loden",
              "lodes", "loids", "loner", "loral", "loran", "lords", "lores",
              "loris", "losel", "loser", "nacho", "nacre", "nadir", "nails",
              "narco", "narcs", "nards", "nares", "naric", "naris", "nears",
              "nerds", "nerol", "nicad", "nicer", "niche", "nicol", "nidal",
              "nides", "nills", "nodal", "nodes", "noels", "noils", "noirs",
              "noise", "noria", "noris", "nosed", "oared", "ocean", "ocher",
              "ochre", "ocrea", "odahs", "ohias", "oiled", "oiler", "olden",
              "older", "oldie", "oleic", "olein", "ollas", "orach", "orals",
              "orcas", "orcin", "oread", "oriel", "orles", "ornis", "osier",
              "raced", "races", "racon", "radio", "radon", "raids", "rails",
              "rains", "raise", "rales", "rance", "ranch", "rands", "ranid",
              "ranis", "rased", "reach", "reads", "reals", "recon", "redan",
              "redia", "redon", "redos", "reins", "relic", "renal", "rends",
              "reoil", "resid", "resin", "resod", "rheas", "rhino", "rials",
              "riced", "rices", "rides", "riels", "riled", "riles", "rille",
              "rills", "rinds", "rinse", "risen", "roach", "roads", "roans",
              "rodes", "roils", "roles", "rolls", "rosed", "roshi", "rosin",
              "sadhe", "saice", "salic", "salol", "salon", "saned", "saner",
              "sarin", "sarod", "scald", "scale", "scall", "scare", "scena",
              "scend", "scion", "scold", "scone", "score", "scorn", "scrod",
              "sedan", "selah", "senor", "serac", "serai", "seral", "serin",
              "shade", "shale", "shall", "shard", "share", "sharn", "sheal",
              "shear", "shell", "shend", "sheol", "sherd", "shied", "shiel",
              "shier", "shill", "shine", "shire", "shoal", "shoed", "shoer",
              "shone", "shore", "shorl", "shorn", "shred", "sidhe", "sidle",
              "since", "sired", "siren", "slain", "slice", "slide", "slier",
              "sloid", "snail", "snare", "snarl", "snell", "snide", "snore",
              "socle", "sodic", "solan", "solar", "soldi", "soled", "solei",
              "solid", "sonar", "sonde", "sonic", "sored", "sorel"]
      },
      3: {2: ["mu","my","nu","um","un","us","ut","eh","el","em","es","et","gi","go",
              "he","hi","hm","ho","is","it","li","lo","me","mi","mo","mu","my","oe",
              "oh","oi","om","os","oy","sh","si","so","ti","to","uh","um","us","ut",
              "ye","yo"],

          3: ["dry", "dug", "dun", "flu", "fly", "fry", "fud", "fun", "fur", "gnu",
              "gul", "gum", "gun", "gut", "guy", "gym", "lug", "lum", "mud", "mug",
              "mun", "mus", "rug", "run", "rut", "sly", "sty", "sum", "sun", "syn",
              "try", "tug", "tun", "uns", "urd", "urn", "uts", "wry", "wud", "wyn",
              "yum", "cel", "chi", "cig", "cis", "cog", "col", "cos", "cot", "coy",
              "cue", "cut", "ecu", "ego", "elm", "els", "ems", "emu", "eth", "gel",
              "gem", "get", "ghi", "gie", "git", "gos"],

          4: ["drum","drys","dugs","duly","duns","dunt","durn","dust","duty","flus",
              "frug","fuds","fugs","fumy","fund","funs","furl","furs","fury","glum",
              "glut","gnus","grum","gulf","guls","gums","guns","gust","guts","guys",
              "gyms","lugs","lums","lung","lunt","luny","muds","mugs","muns",
              "must","muts","nurd","nurl","rugs","ruly","rums","rung","runs",
              "runt","rust","ruts","rynd","slug","slum","smug","snug","stud",
              "stum","stun","sung","surd","surf","swum","trug","tugs","tung","tuns",
              "turf","turn","ugly","undy","urds","urns","wynd","wyns","yurt"],

          5: ["drums", "dungy", "dunts", "durns", "durst", "dusty", "flung",
              "fluty", "fluyt", "frugs", "funds", "furls", "fusty", "glums",
              "gluts", "grunt", "gulfs", "gulfy", "gusty", "gutsy", "gyrus",
              "lungs", "lunts", "musty", "nurds", "nurls", "rungs", "runts",
              "runty", "rusty", "rynds", "slung", "strum", "study", "stung",
              "surfy", "surgy", "surly", "swung", "trugs", "truly", "tungs",
              "turfs", "turfy", "turns", "wrung", "wurst", "wynds", "yurts"]
          },
      4: {2: ["de", "ed", "ef", "em", "en", "es", "et", "fe", "me", "mu", "ne",
              "nu", "um", "un", "us", "ut", "ae", "ag", "ah", "as", "ax", "ay",
              "ef", "eh", "es", "ex", "fa", "fe", "ha", "he", "ka", "pa", "pe",
              "sh", "uh", "up", "us", "xu", "ya", "ye"],

          3: ["cud", "cue", "cut", "def", "den", "des", "dev", "due", "dug", "dun",
              "ecu", "eds", "eff", "efs", "eft", "emf", "ems", "emu", "end", "eng",
              "ens", "fed", "fem", "fen", "fes", "fet", "feu", "fud", "fug", "fun",
              "ged", "gem", "gen", "get", "gnu", "gum", "gun", "gut", "guv", "med",
              "meg", "men", "met", "mud", "mug", "mun", "mus", "mut", "neg", "net",
              "nus", "nut", "sec", "seg", "sen", "set", "sue", "sum", "sun", "ted",
              "teg", "ten", "tug", "tun", "uns", "use", "ute", "uts", "veg", "vet",
              "vug", "vum", "age", "ags", "ahs", "ape", "ash", "ask", "asp", "auk",
              "axe", "aye", "ays", "eau", "efs", "fag", "fas", "fax", "fay", "feh",
              "fes", "feu", "fey", "fug", "gae", "gap", "gey", "guy", "gyp", "hae",
              "hag", "haj", "hap", "has", "hay", "hep", "hes", "hex", "hey", "hue",
              "hug", "hup", "hyp", "jag", "jay", "jeu", "jug", "jus", "kae", "kaf",
              "kas", "kay", "kea", "kef", "keg", "kep", "kex", "key", "kue", "kye",
              "pah", "pas", "pax", "pay", "pea", "peg", "peh", "pes", "pug", "pye",
              "pyx", "sae", "sag", "sap", "sau", "sax", "say", "sea", "seg", "sha",
              "she", "shy", "ska", "sky", "spa", "spy", "sue", "sup", "ugh", "uke",
              "ups", "use", "yag", "yah", "yak", "yap", "yea", "yeh", "yep", "yes",
              "yuk", "yup"],
          4: ["cent", "cuds", "cued", "cues", "cuff", "cute", "cuts", "deft",
          "dens", "dent", "devs", "duce", "duct", "dues", "duet", "duff",
          "dugs", "dune", "duns", "dunt", "dust", "ecus", "effs", "efts",
          "emfs", "emus", "ends", "engs", "enuf", "feds", "fems", "fend",
          "fens", "fest", "fets", "feud", "feus", "fuds", "fugs", "fume",
          "fund", "funs", "fuse", "geds", "gems", "gens", "gent", "genu",
          "gest", "gets", "geum", "gnus", "gude", "guff", "gums", "guns",
          "gust", "guts", "guvs", "meds", "megs", "mend", "menu", "muds",
          "muff", "mugs", "muns", "muse", "must", "mute", "muts", "negs",
          "nest", "nets", "neum", "scud", "scum", "scut", "sect", "send",
          "sent", "smug", "smut", "sned", "snug", "stem", "stud", "stum",
          "stun", "sued", "suet", "sung", "teds", "teff", "tegs", "tend",
          "tens", "tuff", "tugs", "tune", "tung", "tuns", "unde", "used",
          "utes", "vend", "vent", "vest", "vets", "vugs", "ages", "ague",
          "apes", "apex", "apse", "ashy", "auks", "axes", "ayes", "easy",
          "eaux", "epha", "espy", "eyas", "fake", "fash", "faux", "fays",
          "fehs", "feus", "fugs", "fuse", "fyke", "gaes", "gape", "gaps",
          "gapy", "gash", "gasp", "gush", "guys", "haes", "hags", "hake",
          "haku", "haps", "hasp", "hays", "heap", "hues", "huge", "hugs",
          "husk", "hype", "hyps", "jags", "jake", "jape", "jauk", "jaup",
          "jays", "jeux", "juga", "jugs", "juke", "jupe", "kaes", "kafs",
          "kagu", "kaph", "kays", "keas", "kefs", "kegs", "keps", "keys",
          "khaf", "kues", "kyes", "page", "pase", "pash", "pays", "peag",
          "peak", "peas", "pegs", "pehs", "pugh", "pugs", "puja", "puke",
          "push", "pyas", "pyes", "safe", "sage", "sagy", "sake", "shay",
          "shea", "skag", "skeg", "skep", "skua", "spae", "spay", "spue",
          "sugh", "supe", "syke", "syph", "ughs", "ukes", "upas", "yags",
          "yaks", "yaps", "yaup", "yeah", "yeas", "yeps", "yeuk", "yuga",
          "yuks", "yups"],

      5: ["cents", "centu", "cuffs", "cutes", "degum", "dents", "duces",
          "ducts", "duets", "duffs", "dunce", "dunes", "dungs", "dunts",
          "duvet", "educt", "fends", "fetus", "feuds", "fudge", "fumed",
          "fumes", "fumet", "funds", "fused", "gents", "genus", "geums",
          "guest", "guffs", "mends", "menus", "muffs", "mused", "muted",
          "mutes", "negus", "neums", "nevus", "nudge", "scend", "scent",
          "scuff", "scute", "sedum", "stuff", "stung", "teffs", "tends",
          "tendu", "tuffs", "tuned", "tunes", "tungs", "unfed", "unmet",
          "unset", "vends", "vents", "venus", "agues", "ephas", "fakes",
          "fakey", "faugh", "faxes", "fykes", "gapes", "gushy", "hajes",
          "hakes", "hakus", "heaps", "heapy", "husky", "hypes", "jakes",
          "japes", "jauks", "jaups", "jehus", "jukes", "jupes", "kagus",
          "kaphs", "khafs", "pages"]
    },

  5: {2: ["ae", "ai", "al", "am", "ar", "at", "ax", "el", "em", "er", "et",
          "ex", "it", "la", "li", "ma", "me", "mi", "mu", "pa", "pe", "pi",
          "re", "ta", "ti", "um", "up", "ut", "xi", "xu"],

      3: ["ail", "aim", "air", "ait", "ale", "alp", "alt", "ami", "amp", "amu",
          "ape", "apt", "are", "arm", "art", "ate", "ave", "axe", "ear", "eat",
          "eau", "elm", "emu", "era", "eta", "imp", "ire", "lam", "lap", "lar",
          "lat", "lav", "lax", "lea", "lei", "let", "leu", "lev", "lex", "lie",
          "lip", "lit", "lum", "luv", "lux", "mae", "map", "mar", "mat", "max",
          "mel", "met", "mil", "mir", "mix", "mut", "pal", "pam", "par", "pat",
          "pax", "pea", "per", "pet", "pia", "pie", "pit", "piu", "pix", "pul",
          "pur", "put", "rai", "ram", "rap", "rat", "rax", "rei", "rem", "rep",
          "ret", "rev", "rex", "ria", "rim", "rip", "rue", "rum", "rut", "tae",
          "tam", "tap", "tar", "tau", "tav", "tax", "tea", "tel", "tie", "til",
          "tip", "tui", "tup", "tux", "ulu", "ump", "urp", "uta", "ute", "var",
          "vat", "vau", "vet", "vex", "via", "vie", "vim", "vum"],

      4: ["lima", "lime", "limp", "lipa", "lipe", "lira", "lire", "lite",
          "litu", "live", "luau", "luma", "lump", "lure", "lute", "luxe",
          "mail", "mair", "male", "malt", "mare", "marl", "mart", "mate",
          "maul", "maut", "meal", "meat", "melt", "merl", "meta", "mile",
          "milt", "mire", "mite", "mixt", "mule", "mura", "mure", "mute",
          "pail", "pair", "pale", "palm", "pare", "part", "pate", "pave",
          "peal", "pear", "peat", "pelt", "peri", "perm", "pert", "pial",
          "pier", "pile", "pima", "pita", "plat", "plea", "plex", "plie",
          "plum", "pram", "prat", "prau", "prex", "prim", "ptui", "pula",
          "pule", "puli", "puma", "pure", "puri", "purl", "rail", "rale",
          "rami", "ramp", "rapt", "rate", "rave", "real", "ream", "reap",
          "rial", "riel", "rile", "rime", "ripe", "rite", "rive", "rule",
          "rump", "tael", "tail", "tale", "tali", "tame", "tamp", "tape",
          "tare", "tarp", "taxi", "teal", "team", "tear", "tela", "temp",
          "tepa", "term", "tier", "tile", "time", "tire", "tirl", "tram",
          "trap", "trim", "trip", "true", "tule", "tump", "ulva", "urea",
          "vail", "vair", "vale", "vamp", "vatu", "veal", "veil", "vela",
          "vera", "vert", "vext", "vial", "vier", "vile", "virl", "vita"],

      5: ["aimer", "aiver", "alert", "alive", "alter", "alure", "ample",
          "ampul", "apter", "ariel", "armet", "artel", "atrip", "aurei",
          "aurum", "avert", "axile", "axite", "email", "ervil", "exalt",
          "expat", "extra", "exult", "ileum", "impel", "irate", "ixtle",
          "lamer", "larum", "later", "laver", "laxer", "leapt", "lemur",
          "lepta", "letup", "limpa", "liter", "litre", "liver", "livre",
          "lutea", "maile", "maple", "mater", "mauve", "mavie", "merit",
          "metal", "miaul", "miler", "milpa", "mirex", "miter", "mitre",
          "mixer", "mixup", "multi", "mural", "murex", "muter", "paler",
          "palet", "pareu", "parle", "parve", "pater", "paver", "pearl",
          "peart", "peril", "petal", "pieta", "pilar", "pilau", "pilea",
          "pixel", "plait", "plate", "pleat", "plier", "plume", "prate",
          "prima", "prime", "pruta", "puler", "ramie", "ratel", "ravel",
          "realm", "relax", "relit", "remap", "remit", "remix", "retax",
          "retia", "rival", "rivet", "taler", "tamer", "taper", "tapir",
          "taupe", "taxer"]

    },

  6: {2: ["be", "bi", "de", "di", "ed", "eh", "el", "he", "hi", "id", "ki",
          "li", "qi", "uh"],
      3: ["bed", "bel", "bid", "biz", "bud", "deb", "dei", "del", "dib",
          "die", "dub", "due", "duh", "dui", "edh", "eld", "elk", "hid",
          "hie", "hub", "hue", "ilk", "jeu", "jib", "ked", "khi", "kid",
          "kue", "led", "lei", "lek", "leu", "lez", "lib", "lid", "lie",
          "uke", "zed", "zek"],
      4: ["bedu", "bide", "bike", "bile", "bilk", "bize", "bled", "blue",
          "buhl", "bulk", "deil", "deli", "diel", "dike", "duel", "duke",
          "elhi", "heil", "held", "hide", "hied", "hike", "hued", "hulk",
          "idle", "jehu", "jibe", "jube", "juke", "kibe", "leku", "leud",
          "lied", "lieu", "like", "lube", "lude", "quid", "quiz", "zebu"],

      5:  ["ezil", "bield", "biked", "blued", "build", "equid", "hiked",
          "jibed", "juked", "liked", "lubed"]
    },
};



  function levelText(number) {
    console.log("in levelText(), number is ", number)
    var levelOne = randomizedLevelText(1, levelWords);
    console.log("in levelText(), levelOne is ", levelOne)
    var levelTwo = randomizedLevelText(2, levelWords);
    var levelThree = randomizedLevelText(3, levelWords)
    var levelFour = randomizedLevelText(4, levelWords)
    var levelFive = randomizedLevelText(5, levelWords)
    var levelSix = randomizedLevelText(6, levelWords)
    var texts =
              ({
                1: levelOne,
                2: levelTwo,
                3: levelThree,
                4: levelFour,
                5: levelFive,
                6: levelSix
              });

    console.log("in levelText(), texts is ", texts)
    console.log("in levelText(), return value is ", texts[number])
    return texts[number]
  }


  function randomizedLevelText(level, levelWords){
    console.log("in randomizedLevelText(), level is ", level)
    console.log("in randomizedLevelText(), levelWords is ", levelWords)
    var displayedWords = [];
    displayedWords.push(levelWords[level][randomNumber(0, levelWords[level].length - 1)]);
    checkLineLength(displayedWords, level);

    console.log("in randomizedLevelText(), levelWords[level] is ", levelWords[level])
    console.log("in randomizedLevelText() end of function, displayedWords is ", displayedWords)
  }

  function randomNumber(minimum, maximum) {
    var min = Math.ceil(2);
    var max = Math.floor(5);
    return Math.floor(Math.random() * (max-min)) + min;
  }

  function checkLineLength(displayedWords, level){
    var combinedWords = displayedWords.join();
    // var combinedWords = combinedWords.replace(/\,/, '')
    if (combinedWords.length < 42){
      randomizedLevelText(level, levelWords);
    }
    else {
      var finalWords = []
      if (finalWords.length < 7){
        finalWords.push(combinedWords)
      }
      else{
        return finalOutput(finalWords, level)
    }
=    }
  }

  function finalOutput(displayedWords, level) {
    var finalOutput = new Object;
    finalOutput[level] = displayedWords;
  }

module.exports = levelText;
