const Discord = require('discord.js');
const Bot = new Discord.Client();
const PREFXE = '-';
const CREATEUR = '#';
const InvitServe = '#';
const EmbedColor = '#59F4E0';
const InvitBot = '#';
const AvaImg = './KnowBotimg.jpg'
var GuildMessage14Ok = ['Nocont'];
var GuildMessage25Ok = ['Nocont'];
var Time = new Date();
var ListeDevellopeur = [CREATEUR];

Bot.on('ready', function(){
    console.log("Bot Ready " + Time);
    Bot.user.setAvatar(AvaImg)
    .then(user => console.log("Avatar set success"))
    .catch(console.error);
    Bot.user.setPresence({ game: { name: InvitServe, type: 0}})
    .then(user => console.log("Game set success"))
    .catch(console.error);
});

Bot.on('guildMemberAdd', function(member){
    member.createDM().then(function(channel){
        channel.send("Bienvenu sur le serveur " + member.guild.name + " !");
    }).catch(console.error);
});

Bot.on('message', message => {

    if(message.author.equals(Bot.user)) return;

    if(Time.getDate() == '14' && Time.getMonth()+1 == 7)
    {
        if(GuildMessage14Ok.includes(message.guild.name))
            return;
        message.channel.send("Bon 14 Juillet " + Time.getFullYear() + "!");
        var newLength = GuildMessage14Ok.push(message.guild.name);
        console.log("14 Juillet fêter pour le serveur" + GuildMessage14Ok[GuildMessage14Ok.length]);
    }
    else if(Time.getDate() == '15' && Time.getMonth()+1 == 7)
    {
        for(i=0;i<GuildMessage14Ok.length-1;i++)
            var last = GuildMessage14Ok.pop();

        var newLength = GuildMessage14Ok.push("Nocont");
    }

    if(Time.getDate() == '25' && Time.getMonth()+1 == 12)
    {
        if(GuildMessage25Ok.includes(message.guild.name))
            return;
        message.channel.send("Joyeux Noël " + Time.getFullYear() + "!");
        var newLength = GuildMessage25Ok.push(message.guild.name);
        console.log("Noël fêter pour le serveur" + GuildMessage25Ok[GuildMessage25Ok.length]);
    }
    else if(Time.getDate() == '26' && Time.getMonth()+1 == 12)
    {
        for(i=0;i<GuildMessage14Ok.length-1;i++)
            var last = GuildMessage25Ok.pop();

        var newLength = GuildMessage25Ok.push("Nocont");
    }

    if(!message.content.startsWith(PREFXE)) return;


    var args = message.content.substring(PREFXE.length).split(" ");

    switch(args[0].toLocaleLowerCase()){
        case 'help':
            var MessEmbed = new Discord.RichEmbed()
            .setColor(EmbedColor)
            .addField("Commande Help:", "Le prefix de KnowBot est: \"" + PREFXE + "\"")
            .addBlankField()
            .addField("help:", "Commande d'affichage des commandes,")
            .addField("hello:", "Dit donc bonjour KnowBot!")
            .addField("ping:", "Permet de voir si le Bot repond correctement,")
            .addBlankField()
            .addField("stop:", "Cette commande est reserver aux devellopeurs")
            .addField("list14:", "Cette commade est reserver aux devellopeurs et affiche la liste n°14")
            .addField("list25:", "Cette commade est reserver aux devellopeurs et affiche la liste n°25")
            .addField("resetList:", "Cette commande est reserver aux devellopeurs et reset les listes des evenements")
            .addField("resetVar", "Cette commande est reserver aux devellopeurs et reset les variables secondaires ")
            .addBlankField()
            .setFooter("Bot créer et develloper par " + CREATEUR + " sur le serveur ProjetSephiros " + InvitServe)
            message.channel.send(MessEmbed);
            console.log(message.guild + "Commande Help demander par " + message.author.tag + " " + message.author + " channel: " + message.channel.name)
            break;
        case 'hello':
            if(message.author.tag === CREATEUR)
                message.reply(" Bonjour créateur!");
            else
                message.reply(" Bonjour utilisateur!");
            break;
        case 'ping':
            message.reply("Je ne dirai pas Pong!");
            console.log(message.guild + ": La commande Ping/Pong a été utiliser par #" + message.author.tag + "# " +message.author + " Channel: " + message.channel.name)
            break;
        case 'stop':
            if(message.author.tag === CREATEUR)
            {
                var MessEmbed = new Discord.RichEmbed()
                .setColor(EmbedColor)
                .addField("Accées autoriser\nCommande accepter\nKnowBot off\nBye tout le monde!", "-----------");
                message.channel.send(MessEmbed);
                console.log("KnowBot off");
                Bot.destroy();
            }
            else
            {
                message.reply("Alerte!\nCommande reserver aux dévellopeurs!");
                console.log(message.author.tag + " a essayer d'accéder a une commande devellopeurs sur le serveur " + message.author.guild + " Sur le channel: " + message.author.channel.name)
            }
            break;
       case 'list14':
        if(ListeDevellopeur.includes(message.author.tag)){
            var MessEmbed = new Discord.RichEmbed()
            .setColor(EmbedColor)
            .addField("Liste 14:", GuildMessage14Ok)
            message.channel.send(MessEmbed);
            console.log("Liste 14 appeller par le Devellopeur " + message.author.tag + "... liste 14 transmise");
            console.log("Resumer liste 14: " + GuildMessage14Ok);
            break;
        }
        else
        {
            message.reply("Alerte!\nCommande reserver aux dévellopeurs!");
            console.log(message.author.tag + " a essayer d'accéder a une commande devellopeurs sur le serveur " + message.author.guild + " Sur le channel: " + message.author.channel.name)
        }
        case 'list25':
        if(ListeDevellopeur.includes(message.author.tag)){
            var MessEmbed = new Discord.RichEmbed()
            .setColor(EmbedColor)
            .addField("Liste 25:", GuildMessage25Ok)
            message.channel.send(MessEmbed);
            console.log("Liste 25 appeller par le Devellopeur " + message.author.tag + "... liste 25 transmise");
            console.log("Resumer liste 25: " + GuildMessage25Ok);
        }
        else
        {
            message.reply("Alerte!\nCommande reserver aux dévellopeurs!");
            console.log(message.author.tag + " a essayer d'accéder a une commande devellopeurs sur le serveur " + message.author.guild + " Sur le channel: " + message.author.channel.name)
        }
        break;
        case 'resetList':
        if(ListeDevellopeur.includes(message.author.tag)){
            for(i=0;i<GuildMessage14Ok.length-1;i++)
            {
            var last = GuildMessage14Ok.pop();
            var last = GuildMessage25Ok.pop();
            }

            GuildMessage25Ok[0] = "Nocont";
            GuildMessage14Ok[0] = "Nocont";
            i = 0;
            console.log("Listes reset depuis le serveur " + message.guild + " par le devellopeur: " + message.author.tag + " sur le channel: " + message.channel.name);
        }
        else
        {
            message.reply("Alerte!\nCommande reserver aux dévellopeurs!");
            console.log(message.author.tag + " a essayer d'accéder a une commande devellopeurs sur le serveur " + message.guild + " Sur le channel: " + message.author.channel.name)
        }
        break;
        case 'resetVar':
            GuildMessage14Ok = ['Nocont'];
            GuildMessage25Ok = ['Nocont'];
            Time = new Date();
            var MessEmbed = new Discord.RichEmbed()
            .setColor(EmbedColor)
            break;
        default:
            message.channel.send("Désoler petit zombie la commande est introuvable....");
            if(Time.getDate() == '14' && Time.getMonth()+1 == 7)
            {
                message.channel.send("Mais bon 17 Juillet " + Time.getFullYear() + "!");
            }
            console.log(message.guild + " Commande introuvable [" + message.content + "]. Message écrit par #" + message.author.tag + "# " + message.author + " sur le channel: " + message.channel.name);
            break;
    }
});


Bot.login('#');