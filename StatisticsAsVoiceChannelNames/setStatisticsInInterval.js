import process from "process";
import {client} from "../index.js";
import {changeVoiceChannelName} from "./changeVoiceChannelName.js";
import {dayOfTheWeek} from "../Utilities/date.js";


export default () => {
    setInterval(() => {
        for (let guild of client.guilds.cache) {
            changeVoiceChannelName('online_members_number', guild, getNumberOfOnlineGuildMembers(guild))
        }
        console.log(`Memory usage rss, ${process.memoryUsage().rss / 1000000}MB `)
    }, 400000);

    setInterval(() => {
        for (let guild of client.guilds.cache) {
            changeVoiceChannelName('guild_members_number ', guild, getNumberOfGuildMembers(guild))
            changeVoiceChannelName('date', guild, getDayOfTheWeek())
        }
    }, 600000);
}


function getNumberOfOnlineGuildMembers(guild) {
    const onlineMembers = guild[1].presences.cache.filter(member => member.status === 'online').size;
    return `β β β Online: ${onlineMembers.toLocaleString()}`;
}

function getNumberOfGuildMembers(guild) {
    return `β π¦ β CzΕonkΓ³w: ${guild[1].memberCount.toLocaleString()}`;
}

function getDayOfTheWeek() {
    return "β π β " + dayOfTheWeek();
}