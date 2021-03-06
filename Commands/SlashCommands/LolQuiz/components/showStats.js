import {MessageEmbed} from "discord.js";
import readLolQuizStats from "./readStatsFromDatabase.js";

export default (channel) => {
    (async () => {
        let result = await readLolQuizStats(channel.guild.id);
        if (result.length < 1)
            channel.send("Brak danych do wyświetlenia");
        const guildMembers = channel.guild.members.cache;
        try {
            let embed = new MessageEmbed()
                .setColor('#2ECC71')
                .setTitle("Statystki osób z quizu wiedzy o League of Legends")
                .setDescription("Jeśli nie ma cie na liście wpisz /quiz_lol_moje_statystyki\nAby zagrać wpisz /quiz_lol")
                .setTimestamp()
                .addFields(
                    embed_display(result, guildMembers)
                )
            channel.send({ embeds: [embed] });

        }

        catch (err) { console.log(`Błąd łączenia się z bazą ${err}`) }

    })();
}

function embed_display(usersInfo, guildMembers) {
    let result = [];
    for (let i = 0; i < usersInfo.length; i++) {
        let em = {};
        let nameToDisplay = guildMembers.get(usersInfo[i]['id_discord']);
        if (!nameToDisplay) //uzytkownik nie jest juz czlonkiem serwera
            continue;
        nameToDisplay = guildMembers.get(usersInfo[i]['id_discord']).nickname;
        if (nameToDisplay == null)
            nameToDisplay = guildMembers.get(usersInfo[i]['id_discord']).user.username;
       const p = Math.round(usersInfo[i]['correct_answers']*100/(usersInfo[i]['correct_answers']+usersInfo[i]['wrong_answers']));
        em = {
            name: `${nameToDisplay} `,
            value: `Odpowiedzi poprawne: ${usersInfo[i]['correct_answers']},  błędne: ${usersInfo[i]['wrong_answers']}\nProcent dobrych odp: ${p}%`,
        }
        result.push(em);
    }
    return result;
}
